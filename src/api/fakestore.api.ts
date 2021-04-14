import { BASE_URL_API } from "src/constants/app";

export class FakestoreApi {
    static getProducts = async () : Promise<Product[]>  => {
        return await fetch(`${BASE_URL_API}/products`)
            .then((response) => response.json())
            .then((response) => response as Product[]);
    };

    static getProductById = async (id : number): Promise<Product>  => {
        return await fetch(`${BASE_URL_API}/products/${id}`)
            .then((response) => response.json())
            .then((response) => response as Product);
    };

}
