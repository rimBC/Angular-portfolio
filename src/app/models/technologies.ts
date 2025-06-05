export class Technologies{
    static readonly ANGULAR =  new Technologies('Angular','#ff563f')
    static readonly TYPESCRIPT =  new Technologies('TS','#448aff')
    static readonly JAVA =  new Technologies('Java','#fdffb6')
    static readonly FIGMA =  new Technologies('Figma','#B4ADEA')
    static readonly NODEJS =  new Technologies('NodeJs','#ffdab9')
    static readonly JAVASCRIPT =  new Technologies('JS','#ffc107')
    static readonly NESTJS =  new Technologies('NestJs','#ff9800')
    static readonly POSTGRES =  new Technologies('PostgreSQL','#448aff')
    static readonly py =  new Technologies('python','#448aff')
    static readonly HTML =  new Technologies('HTML','#c05761')
    static readonly CSS =  new Technologies('CSS','#00A7E1')
    static readonly TCSS =  new Technologies('Tailwind','#00A7E1')

    static readonly SP =  new Technologies('ACADEMIC PROJECT','#A9CBB7')
    static readonly Canva =  new Technologies('Canva','#C874D9')
    // green 8bc34a




    private constructor (private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key
    }
}