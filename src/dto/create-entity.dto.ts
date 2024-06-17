export interface CreateEntityDto {
    images: File[];

    [key: string]: string | File[];
}