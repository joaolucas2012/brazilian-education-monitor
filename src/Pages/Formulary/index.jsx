import React from 'react';

import './styles.css';

import Input from '../../Components/Input';
import Select from '../../Components/Select';
import Container from '../../Components/Container';

const Formulary = () => {
    return (
        <Container>
          <div className="form-header">
            <p className="obligation">* Obrigatória</p>
            <h2 className="title">Informações Cadastrais</h2>
            <p className="obligation">Nesta seção, vamos abordar questões para conhecer melhor o curso e a coordenação.</p>
          </div>
          <Input text="1.Nome da Instituição de Ensino Superior (por extenso e sigla) *" />
          <Input text="2.Cidade onde se localiza o campus *" />
          <Select text="3.Estado onde o campus se localiza *" />
          <Input text="4.Nome do Curso *" />
          <Input text="5.Código do Curso, conforme cadastro no MEC *" />
          <Input text="6.Informe a modalidade de ensino, conforme cadastro no MEC. *" />
          <Input text="7.Conceito ENADE obtido na última avaliação. *" />
          <Input text="8.Ano da última avaliação do ENADE *" />
          <Input text="9.Ano da última versão atualizada do Projeto Pedagógico do Curso (PPC). *" />
          <Input text="10.Informe o investimento (estrutura/projetos/capacitação/etc.) no curso para o período de janeiro a dezembro de 2020. *" />
          <Input text="11.Nome do coordenador do curso. *" />
          <Input text="12.Link do currículo Lattes do coordenador do curso *" />
          <Input text="13.E-mail do coordenador do curso *" />
          <Input text="14.Informe o número total de alunos matriculados no curso no ano de 2020. *" />
        </Container>
    );
};

export default Formulary;