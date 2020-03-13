import {IsNotEmpty, IsString} from "class-validator";

export class NewsRequestDto {
    @IsNotEmpty()
    @IsString()
    public region: string;

    @IsNotEmpty()
    @IsString()
    public lang: string;
}
