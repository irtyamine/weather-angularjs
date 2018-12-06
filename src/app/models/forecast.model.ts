import { Main } from './main.model'
import { Weather } from './weather.model'

export class Forecast {
    public base: string;
    public name: string;
    public main: Main;
    public weather: Weather[];
}