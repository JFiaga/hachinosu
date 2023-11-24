export default interface IArtist {
  href: string;
  items: IArtistItems[];
  limit: number;
  next: string;
  offset: number;
  previous: unknown;
  total: number;
}



interface IArtistItems {
    external_urls: {spotify:string};
    followers:{href:string|null, total:number};
    genres:[];
    href:string;
    id:string;
    images:{height:number, width:number, url:string}[];
    name:string;
    popularity:number;
    type:string;
    uri:string
}