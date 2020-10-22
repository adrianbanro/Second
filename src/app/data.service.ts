
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {


    getQuizQuestions() {
        return  [
            {
                type: "text",
                text: "How much air ...?",
                possibilities: [
                    {
                        answer: "Up to 208m3"
                    },
                    {
                        answer: "Up to 200m3"
                    },
                    {
                        answer: "Up to 100m3"
                    },
                    {
                        answer: "Up to 1000m3"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "How much space ...?",
                possibilities: [
                    {
                        answer: "Up to 20m3"
                    },
                    {
                        answer: "Up to 200m3"
                    },
                    {
                        answer: "Up to 100m3"
                    },
                    {
                        answer: "Up to 1000m3"
                    }
                ],
                selected: null,
                correct: null
            }
        ] ;
        }


/*  login(username, password){
 if(username === "jason" && password === "123")
 return true;
 else
 return false;
 } */

 /*        
 dataObj = {
            
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }
*/
  //  var correctAnswers = [3, 1, 3, 3, 2, 0, 3, 1, 0, 3];

/*      quizQuestions  = [
        {
            type: "text",
            text: "How much air ...?",
            possibilities: [
                {
                    answer: "Up to 20m3"
                },
                {
                    answer: "Up to 200m3"
                },
                {
                    answer: "Up to 100m3"
                },
                {
                    answer: "Up to 1000m3"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much space ...?",
            possibilities: [
                {
                    answer: "Up to 20m3"
                },
                {
                    answer: "Up to 200m3"
                },
                {
                    answer: "Up to 100m3"
                },
                {
                    answer: "Up to 1000m3"
                }
            ],
            selected: null,
            correct: null
        }
    ] */


}