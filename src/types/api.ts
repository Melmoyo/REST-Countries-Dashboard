
export interface Name{
    common:string;
}
export interface Flags{
    svg:string;
    alt:string
}
export interface Countries{
flag:string;
name:Name;
languages:string;
landlocked:boolean;
borders:string[];
area:number;
population:number;
continents:string[];
region:string;
flags:Flags,

}