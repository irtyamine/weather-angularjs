export class CurrentWeather {
    constructor(public area:string,
                public temp:string,
                public icon:string,
                public weatherDescription:string,
                public tempMax:string,
                public tempMin:string){}
}