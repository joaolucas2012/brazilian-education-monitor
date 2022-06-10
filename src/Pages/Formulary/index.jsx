import React, { useState } from 'react';
import * as yup from "yup";

import { 
  Form, 
  Header, 
  Title, 
  P, 
  RedP,
  GreenP,
  StyledContainer, 
  StyledLabel,
  StyledSelect
} from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Card from '../../Components/Card';

const Formulary = () => {
  const[user, setUser] = useState({
    instituition_name: '',
    location_city: '',
    location_state: '',
    course_name: '',
    teaching_modality: '',
    Enade_concept: '',
    last_evaluation_year: '',
    investment: '',
    coordinator_name: '',
    curriculum_link: '',
    coordinator_email: '',
    classmates_number: '',
  });

  const[status, setStatus] = useState({
    type: '',
    message: '',
  });

  // Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value});

  // Enviar os dados para o backend
  const addUser = async e => {
    e.preventDefault();

    if(!(await validate())) return;

    const saveDataForm = true;

    if(saveDataForm) {
      setStatus({
        type: 'success',
        message: 'Usuário cadastrado com sucesso!',
      });
      setUser({
        instituition_name: '',
        location_city: '',
        location_state: '',
        course_name: '',
        teaching_modality: '',
        Enade_concept: '',
        last_evaluation_year: '',
        investment: '',
        coordinator_name: '',
        curriculum_link: '',
        coordinator_email: '',
        classmates_number: '',
      });
    }else{
      setStatus({
        type: 'error',
        message: 'Erro: usuário não cadastrado',
      });
    };
  };

  async function validate(){
    let schema = yup.object().shape({
      location_city: yup.string("Erro: Cidade inválida!")
      .required("Erro: A cidade é obrigatória!"),
      instituition_name: yup.string("Erro: Nome inválido!")
      .required("Erro: O nome é obrigatório!")
    });

    try{
      await schema.validate(user);
      return true;
    }catch (err) {
      setStatus({
        type: 'error',
        message: err.errors,
      });
      return false;
    }
  };

  return (
    <Card>
      <Header>
        <P>* Obrigatória</P>
        <Title>Informações Cadastrais</Title>
        <P>Nesta seção, vamos abordar questões para conhecer melhor o curso e a coordenação.</P>

        {status.type === 'success' ? <GreenP>{status.message}</GreenP> : ""}
        {status.type === 'error' ? <RedP>{status.message}</RedP> : ""}

      </Header>

      <Form onSubmit={addUser}>
        <Input
          type="text"
          name="instituition_name"
          onChange={valueInput}
          value={user.instituition_name}
          text="1.Nome da Instituição de Ensino Superior (por extenso e sigla)*" 
        />

        <Input 
          type="text"
          name='location_city'
          onChange={valueInput}
          value={user.location_city}
          text="2.Cidade onde se localiza o campus*" 
        />

        <StyledContainer>
          <StyledLabel>3.Estado onde o campus se localiza*</StyledLabel><br/>
          <StyledSelect
            name="location_state"
            onChange={valueInput}
            value={user.location_state}
          >
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </StyledSelect><br/>
        </StyledContainer> 

        <Input 
          type="text"
          name='course_name'
          onChange={valueInput}
          value={user.course_name}
          text="4.Nome do Curso*" 
        />

        <Input 
          type="text"
          name='course_code'
          onChange={valueInput}
          value={user.course_code}
          text="5.Código do Curso, conforme cadastro no MEC*" 
        />

        <StyledContainer>
          <StyledLabel>6.Informe a modalidade de ensino, conforme cadastro no MEC*</StyledLabel><br/>
          <StyledSelect
            name="teaching_modality"
            onChange={valueInput}
            value={user.teaching_modality}
          >
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="presential">Educação presencial</option>
            <option value="distance">Educação a distância</option>
          </StyledSelect><br/>
        </StyledContainer>          
        <StyledContainer>
          <StyledLabel>7.Conceito ENADE obtido na última avaliação*</StyledLabel><br/>
          <StyledSelect
            name="Enade_concept"
            onChange={valueInput}
            value={user.Enade_concept}
          >
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="SC">SC</option>
            <option value="Não avaliado">Curso ainda não avaliado</option>
          </StyledSelect><br/>
        </StyledContainer>    
        <StyledContainer>
          <StyledLabel>8.Ano da última avaliação do ENADE*</StyledLabel><br/>
          <StyledSelect
            name="last_evaluation_year"
            onChange={valueInput}
            value={user.last_evaluation_year}
          >
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="Não avaliado">Curso ainda não avaliado</option>
          </StyledSelect><br/>
        </StyledContainer> 
        <Input 
          type='number'
          name='atualization_year'
          onChange={valueInput}
          value={user.atualization_year}
          text="9.Ano da última versão atualizada do Projeto Pedagógico do Curso (PPC)*" 
        />

        <Input 
          type="text"
          name="investment"
          onChange={valueInput}
          value={user.investment}
          text="10.Informe o investimento (estrutura/projetos/capacitação/etc.) no curso para o período de janeiro a dezembro de 2020*"
        />

        <Input 
          type="text"
          name="coordinator_name"
          onChange={valueInput}
          value={user.coordinator_name}
          text="11.Nome do coordenador do curso*" 
        /> 

        <Input 
          type="text"
          name="curriculum_link"
          onChange={valueInput}
          value={user.curriculum_link}
          text="12.Link do currículo Lattes do coordenador do curso*" 
        /> 

        <Input 
          type="email"
          name="coordinator_email"
          onChange={valueInput}
          value={user.coordinator_email}
          text="13.E-mail do coordenador do curso*" 
        />

        <Input 
          type="text"
          name="classmates_number"
          onChange={valueInput}
          value={user.classmates_number}
          text="14.Informe o número total de alunos matriculados no curso no ano de 2020*" 
        /> 

        <Button type="submit" title="Avançar" />
      </Form>
    </Card>
  );
};

export default Formulary;