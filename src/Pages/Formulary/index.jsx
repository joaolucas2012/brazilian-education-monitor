import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { 
  Form, 
  Header, 
  Title, 
  P, 
  StyledContainer, 
  StyledLabel,
  StyledSelect
} from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Card from '../../Components/Card';

const Formulary = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Card>
      <Header>
        <P>* Obrigatória</P>
        <Title>Informações Cadastrais</Title>
        <P>Nesta seção, vamos abordar questões para conhecer melhor o curso e a coordenação.</P>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='institution-name'
          {...register('institution-name', 
            { 
              required: "O nome precisa ter no mínimo 20 caracteres.", 
              minLength: 20
            }
          )}
          text="1.Nome da Instituição de Ensino Superior (por extenso e sigla)*" 
        /> 
        <ErrorMessage errors = { errors } name="institution-name" />
        <Input 
          id="location-city"
          {...register('location-city', 
            { 
              required: "Cidade inválida.", 
              minLength: 3
            }
          )}
          text="2.Cidade onde se localiza o campus*" 
        /> 
        <ErrorMessage errors = { errors } name="location-city" />
        <StyledContainer>
          <StyledLabel>3.Estado onde o campus se localiza*</StyledLabel><br/>
          <StyledSelect>
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
        <Input text="4.Nome do Curso*" /> 
        <Input text="5.Código do Curso, conforme cadastro no MEC*" /> 
        <StyledContainer>
          <StyledLabel>6.Informe a modalidade de ensino, conforme cadastro no MEC*</StyledLabel><br/>
          <StyledSelect>
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="presential">Educação presencial</option>
            <option value="distance">Educação a distância</option>
          </StyledSelect><br/>
        </StyledContainer>          
        <StyledContainer>
          <StyledLabel>7.Conceito ENADE obtido na última avaliação*</StyledLabel><br/>
          <StyledSelect>
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
          <StyledSelect>
            <option value="" disabled selected hidden>Selecione sua resposta</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="Não avaliado">Curso ainda não avaliado</option>
          </StyledSelect><br/>
        </StyledContainer> 
        <Input text="9.Ano da última versão atualizada do Projeto Pedagógico do Curso (PPC)*" /> 
        <Input text="10.Informe o investimento (estrutura/projetos/capacitação/etc.) no curso para o período de janeiro a dezembro de 2020*" /> 
        <Input text="11.Nome do coordenador do curso*" /> 
        <Input text="12.Link do currículo Lattes do coordenador do curso*" /> 
        <Input text="13.E-mail do coordenador do curso*" /> 
        <Input text="14.Informe o número total de alunos matriculados no curso no ano de 2020*" /> 
        <Button type="submit" title="Avançar" />
      </Form>
    </Card>
  );
};

export default Formulary;