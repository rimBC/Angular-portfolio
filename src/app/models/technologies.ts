export class Technologies{
    static readonly ANGULAR =  new Technologies('Angular','#ff563f')
    static readonly TYPESCRIPT =  new Technologies('TS','#448aff')
    static readonly JAVA =  new Technologies('Java','#fdffb6')
    static readonly FIGMA =  new Technologies('Figma','#8bc34a')
    static readonly NODEJS =  new Technologies('NodeJs','#ffdab9')
    static readonly JAVASCRIPT =  new Technologies('JS','#ffc107')
    static readonly NESTJS =  new Technologies('NestJs','#ff9800')
    static readonly POSTGRES =  new Technologies('Postgres','#448aff')
    static readonly HTML =  new Technologies('HTML','#c05761')
    static readonly CSS =  new Technologies('CSS','#1565c0')



    private constructor (private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key
    }
}