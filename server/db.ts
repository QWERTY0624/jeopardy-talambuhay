import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question: 'What website is this cat from',
        imgSrc: "/scratch.jpg",
        answer: 'scratch',
    },
    {
        points: 100,
        question:
            'What city is this(Use acronym)?',
        imgSrc: "/nycpic.jpg",
        answer: 'NYC',
    },
    {
        points: 300,
        question:
        'When was the electric guitar invented?',
        imgSrc: "/guitar.jpg",
        answer: '1931',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What breed of dog is this?',
            imgSrc: '/dogimage.jpg',
            answer: 'Havanese',
        },
        {
            points: 100,
            question:
                'What sport is this?',
            imgSrc: '/climbing.jpg',
            answer: 'Bouldering',
        },
        {
            points: 300,
            question: 'What tree nut is nutella made out of',
            answer: 'hazelnut',
        },
        {
            points: 400,
            question:
                'Who painted this?',
            imgSrc:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'Keith Haring',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: 'Toby\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Toby\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Toby\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}