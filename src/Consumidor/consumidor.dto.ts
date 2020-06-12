import { IsInt, IsString, MaxLength, MinLength, IsDate, IsOptional, IsNumber } from "class-validator";
//import { Optional } from "@nestjs/common";

export class ConsumidorDto {

    @IsInt({ message: 'O campo Id não é um numero inteiro válido!' })
    id: number;

    @IsString({message: "O campo nome não é válido"})
    @MinLength(10, {message: "O nome deve ter ao menos 10 caracteres" })
    @MaxLength(30, {message: "O nome deve ter menos de 30 caracteres" })
    nome: string;

    @IsString({message: "O campo email não é  válido"})
    @MaxLength(80, {message: "Deve ter no minimo 80 caracteres" })
    email: string;

    @IsString({message: "O campo telefone não é  válido"})
    @MaxLength(20, {message: "O telefone deve ter menos de 20 caracteres" })
    telefone: string;

    @IsOptional()
    @IsString({message: "O campo CPF não é válido"})
    @MinLength(14, {message: "O CPF deve ter pelo menos 14 caracteres com pontuação "})
    @MaxLength(14, {message: "O CPF deve ter 14  caracteres com pontuação"})
    cpf: string;

    @IsOptional()
    @IsInt({message: "a idade não é um numero válido"})
    @MinLength(1, {message: "a idade deve ter 1 caractere, no mínimo"})
    @MaxLength(3, {message: "a idade deve ter 3 caracteres, no máximo"})
    idade: number;


    @IsOptional()
    @IsInt({message: "O número não é  válido"})
    numero: number;

    @IsOptional()
    @IsString({message: "O  bairro não é válido "})
    bairro: string;

    @IsOptional()
    @IsString({message: "A rua não é  válida"})
    @MaxLength(50, {message: "A rua deve ter no máximo 50 caracteres"})
    rua: string;

    @IsOptional()
    @IsString({message: "cidade não é válida"})
    cidade: string;


}