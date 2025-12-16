import { Table, Button, Modal, Popconfirm, message, Space, Grid } from "antd";
import InnerLayout from "../components/InnerLayout";
import AlunosDAO from "../daos/AlunosDAO.mjs";
import { useEffect, useState, useCallback, useMemo } from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Caixa from "../components/Caixa.jsx";

export default function Alunos() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [loading, setLoading] = useState(false);
  const { useBreakpoint } = Grid; //ANTD disponibiliza o hook useBreakpoint para detectar breakpoints
  const screens = useBreakpoint();
  
  // Função para carregar Alunos
  const carregarAlunos = useCallback(async () => {
    setLoading(true);
    try {
      const alunosDAO = new AlunosDAO();
      const lista = await alunosDAO.carregarAlunos();
      setData(Array.isArray(lista) ? lista : []);
    } catch (error) {
      console.error("Erro ao carregar Alunos:", error);
      setData([
        {
          id: 0,
          nome: "Aluno exemplo",
          curso: "Ciência da Computação",
          matricula: "20230001",
          email: "aluno@exemplo.com",
          telefone: "(11) 99999-9999",
        },
        {
          id: 1,
          nome: "Outro aluno",
          curso: "Engenharia",
          matricula: "20230002",
          email: "outro@exemplo.com",
          telefone: "(11) 88888-8888",
        },
      ]);
      message.error("Erro ao carregar Alunos!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarAlunos();
  }, [carregarAlunos]);

  const showModal = (dados = null) => {
    setAlunoSelecionado(dados);
    setModoEdicao(!!dados);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    setAlunoSelecionado(null);
    setModoEdicao(false);

    setTimeout(() => {
      carregarAlunos();
    }, 100);

    message.success(
      modoEdicao ? "Aluno atualizado com sucesso!" : "Aluno criado com sucesso!"
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAlunoSelecionado(null);
    setModoEdicao(false);
  };

  const excluirAluno = async (id) => {
    try {
      const alunosDAO = new AlunosDAO();
      const sucesso = await alunosDAO.excluirAluno(id);

      if (sucesso) {
        await carregarAlunos();
        message.success("Aluno excluído com sucesso!");
      } else {
        message.error("Não foi possível excluir o aluno!");
      }
    } catch (error) {
      message.error("Erro ao excluir aluno!");
      console.error("Erro ao excluir:", error);
    }
  };

  const handleEditar = (record, e) => {
    e?.stopPropagation();
    showModal(record);
  };

  const handleExcluir = (id, e) => {
    e?.stopPropagation();
    excluirAluno(id);
  };
  const columns = useMemo(() => { //useMemo para memorizar as colunas e evitar recalcular desnecessariamente
    // Se NÃO for md, lg, xl, xxl (ou seja, é mobile/tablet pequeno)
    const isMobile = !screens.md && !screens.lg && !screens.xl && !screens.xxl;
    if (isMobile) {
      return [
        {
          title: "Nome",
          dataIndex: "nome",
          key: "nome",
        },
        {
          title: "Curso",
          dataIndex: "curso",
          key: "curso",
        },
        {
          title: "Ações",
          key: "acoes",
          render: (_, record) => (
            <Space>
              <Button
                icon={<EditOutlined />}
                size="small"
                onClick={(e) => handleEditar(record, e)}
              />
              <Popconfirm
                title="Excluir?"
                onConfirm={(e) => handleExcluir(record.id, e)}
              >
                <Button danger icon={<DeleteOutlined />} size="small" />
              </Popconfirm>
            </Space>
          ),
        },
      ];
    }

    // Se for desktop
    return [
      {
        title: "Nome",
        dataIndex: "nome",
        key: "nome",
        width: 200, //definindo largura fixa para colunas em desktop
      },
      {
        title: "Matrícula",
        dataIndex: "matricula",
        key: "matricula",
        width: 150,
      },
      {
        title: "Curso",
        dataIndex: "curso",
        key: "curso",
        width: 180,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: 220,
      },
      {
        title: "Telefone",
        dataIndex: "telefone",
        key: "telefone",
        width: 150,
      },
      {
        title: "Ações",
        key: "acoes",
        width: 180,
        render: (_, record) => (
          <Space>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={(e) => handleEditar(record, e)}
            >
              Editar
            </Button>
            <Popconfirm
              title="Excluir Aluno"
              onConfirm={(e) => handleExcluir(record.id, e)}
            >
              <Button type="primary" danger icon={<DeleteOutlined />}>
                Excluir
              </Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];
  }, [screens]); //dependência em screens para reagir a mudanças de breakpoint

  const CustomButton = () => (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "5px",
      }}
      onClick={() => showModal()}
      size={screens.xs ? "small" : "middle"}
    >
      {screens.xs ? "Novo" : "Novo Aluno"}
    </Button>
  );

  return (
    <InnerLayout title="Gerenciar Alunos" extra={<CustomButton />}>
      <Table
        columns={columns}
        dataSource={data}
        locale={{ emptyText: "Nenhum aluno cadastrado" }}
        rowKey="id" // Define "id" como chave única para cada linha
        loading={loading}
        scroll={screens.xs ? { x: 500 } : screens.sm ? { x: 600 } : {}}
        pagination={{
          pageSize: screens.xs ? 5 : 10, // Menos itens por página em telas pequenas
          showSizeChanger: !screens.xs && !screens.sm, // Sem opção de mudar tamanho em xs e sm
          showQuickJumper: !screens.xs, // Sem quick jumper em xs
          size: screens.xs ? "small" : "default", //tamanho da paginação
          showTotal: (total, range) => //total = número total de itens na lista || range = array com o intervalo atual [início, fim]. Eles recebem esses parâmetros automaticamente
            `${range[0]}-${range[1]} de ${total} alunos`,
        }} 
        size={screens.xs ? "small" : screens.sm ? "middle" : "default"}
        rowClassName={() => "hover:bg-gray-50"}
      />

      <Caixa
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        dados={alunoSelecionado}
        tipo={3}
      />
    </InnerLayout>
  );
}
