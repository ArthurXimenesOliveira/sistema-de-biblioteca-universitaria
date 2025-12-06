import { Table, Button, Modal, Popconfirm, message, Space, Grid } from "antd";
import InnerLayout from "../components/InnerLayout";
import AutoresDAO from "../daos/AutoresDAO.mjs";
import { useEffect, useState, useCallback } from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Caixa from "../components/Caixa.jsx";

export default function Autores() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autorSelecionado, setAutorSelecionado] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [loading, setLoading] = useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  // Função para carregar autores
  const carregarAutores = useCallback(async () => {
    setLoading(true);
    try {
      const autoresDAO = new AutoresDAO();
      const lista = await autoresDAO.carregarAutores();
      console.log("Autores carregados:", lista);
      setData(Array.isArray(lista) ? lista : []);
    } catch (error) {
      console.error("Erro ao carregar autores:", error);
      setData([
        { id: 0, nome: "Autor exemplo", nacionalidade: "-", biografia: "-" },
        { id: 1, nome: "Outro autor", nacionalidade: "-", biografia: "-" },
        { id: 2, nome: "Terceiro autor", nacionalidade: "-", biografia: "-" },
      ]);
      message.error("Erro ao carregar autores!");
    } finally {
      setLoading(false);
    }
  }, []);

  // Carregar autores quando o componente montar
  useEffect(() => {
    carregarAutores();
  }, [carregarAutores]);

  const showModal = (dados = null) => {
    setAutorSelecionado(dados);
    setModoEdicao(!!dados);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    setAutorSelecionado(null);
    setModoEdicao(false);

    // Pequeno delay para garantir que o modal fechou antes de recarregar
    setTimeout(() => {
      carregarAutores();
    }, 100);

    message.success(
      modoEdicao ? "Autor atualizado com sucesso!" : "Autor criado com sucesso!"
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAutorSelecionado(null);
    setModoEdicao(false);
  };

  const excluirAutor = async (id) => {
    try {
      const autoresDAO = new AutoresDAO();
      const sucesso = await autoresDAO.excluirAutor(id);

      if (sucesso) {
        await carregarAutores();
        message.success("Autor excluído com sucesso!");
      } else {
        message.error("Não foi possível excluir o autor!");
      }
    } catch (error) {
      message.error("Erro ao excluir autor!");
      console.error("Erro ao excluir:", error);
    }
  };

  const handleEditar = (record, e) => {
    e?.stopPropagation();
    showModal(record);
  };

  const handleExcluir = (id, e) => {
    e?.stopPropagation();
    excluirAutor(id);
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Nacionalidade",
      dataIndex: "nacionalidade",
      key: "nacionalidade",
      responsive: ["md"],
    },
    {
      title: "Biografia",
      dataIndex: "biografia",
      key: "biografia",
      render: (text) => (
        <span>
          {text
            ? text.length > 50
              ? `${text.substring(0, 50)}...`
              : text
            : "-"}
        </span>
      ),
      responsive: ["sm"],
    },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <Space orientation={screens.xs ? "vertical" : "horizontal"}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={(e) => handleEditar(record, e)}
          >
            Editar
          </Button>
          <Popconfirm
            title="Excluir Autor"
            description="Tem certeza que deseja excluir este autor?"
            onConfirm={(e) => handleExcluir(record.id, e)}
            onCancel={(e) => e?.stopPropagation()}
            okText="Sim"
            cancelText="Não"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={(e) => e.stopPropagation()}
            >
              Excluir
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const CustomButton = () => (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
      onClick={() => showModal()}
    >
      {screens.xs ? "Novo" : "Novo Autor"}
    </Button>
  );

  return (
    <InnerLayout title="Gerenciar Autores" extra={<CustomButton />}>
      <Table
        columns={columns}
        dataSource={data}
        locale={{ emptyText: "Nenhum autor cadastrado" }}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            showModal(record);
          },
        })}
        pagination={{
          pageSize: screens.xs ? 5 : 10, // Menos itens por página em telas pequenas
          showSizeChanger: !screens.xs && !screens.sm, // Sem opção de mudar tamanho em xs e sm
          showQuickJumper: !screens.xs, // Sem quick jumper em xs
          size: screens.xs ? "small" : "default", //tamanho da paginação
          showTotal: (
            total,
            range //total = número total de itens na lista || range = array com o intervalo atual [início, fim]. Eles recebem esses parâmetros automaticamente
          ) => `${range[0]}-${range[1]} de ${total} autores`,
        }}
      />

      <Caixa
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        dados={autorSelecionado}
        tipo={1}
      />
    </InnerLayout>
  );
}
