export interface VictorinaData {
    id: number;
    title: string;
    image: string;
    questions?: VictorinaQuestion[]
}

export interface VictorinaQuestion {
    id: number,
    points: number,
    question: string,
    image?: string;
    answerImage?: string;
    answered: boolean,
    answer?: string
}

export interface VictorinaQuestionAnswer {
    answer:string;
    correct: boolean;
}