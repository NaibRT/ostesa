// ========= Interfaces

export interface Product{
    id?:String,
    name:String,
    description:String,
    categoryID :String,
    // images      Image[]
    price:Number,
    discount:Number,
    stock:Number,
}

export interface Category{
    id:String,
    name:String,
    image:String,
}

export interface Image{
        id:String,
        name:String
}

export interface DynamicFormDataInput{
    name:string,
    type:string,
    required:boolean,
    lable:string,
}

