const { createApp, ref } = Vue;

createApp({
    setup() {
        const questions = ref([
            {
                question: "В каком произведении Федора Михайловича Достоевского главными героями являются Макар Алексеевич Девушкин и Варвара Алексеевна Доброселова",
                selected: null,
                result: null,
                correctAnswer: "bednye_lyudi",
                options: [
                    {
                        title: "Бесы",
                        value: "besy",
                        image: "7.jpg",
                        description: "«Бе́сы» - шестой роман Фёдора Михайловича Достоевского..."
                    },
                    {
                        title: "Бедные люди",
                        value: "bednye_lyudi",
                        image: "8.jpg",
                        description: "«Бе́дные лю́ди» - дебютный роман русского писателя Фёдора Достоевского..."
                    },
                    {
                        title: "Белые ночи",
                        value: "belye_nochi",
                        image: "9.jpeg",
                        description: "«Бе́лые но́чи» — повесть русского писателя XIX века Фёдора Михайловича Достоевского..."
                    },
                    {
                        title: "Братья Карамазовы",
                        value: "karamazovy",
                        image: "10.jpg",
                        description: "«Бра́тья Карама́зовы» — восьмой и последний роман Ф. М. Достоевского..."
                    }
                ]
            },
            {
                question: "В каком произведении Льва Николаевича Толстого главным героем является пехотный офицер, подпоручик Михаил Козельцов",
                selected: null,
                result: null,
                correctAnswer: "sevastopolskie rasskazy",
                options: [
                    {
                        title: "Севастопольские рассказы",
                        value: "sevastopolskie rasskazy",
                        image: "11.jpeg",
                        description: "«Севастопольские рассказы» — цикл из трёх рассказов, написанных Львом Толстым..."
                    },
                    {
                        title: "Война и мир",
                        value: "voyna i mir",
                        image: "11.jpg",
                        description: "«Война́ и мир» - роман-эпопея Льва Николаевича Толстого..."
                    },
                    {
                        title: "Воскресение",
                        value: "voskresenie",
                        image: "12.jpg",
                        description: "«Воскресе́ние» — последний роман Льва Николаевича Толстого..."
                    },
                    {
                        title: "Крейцерова соната",
                        value: "kreyzerova sonata",
                        image: "13.jpg",
                        description: "«Кре́йцерова сона́та» — повесть Льва Толстого..."
                    }
                ]
            },
            {
                question: "В каком произведении Александра Ивановича Куприна главным героем является Мартын Лодыжкин",
                selected: null,
                result: null,
                correctAnswer: "beliy pudel",
                options: [
                    {
                        title: "Белый пудель",
                        value: "beliy pudel",
                        image: "18.jpg",
                        description: "Белый пудель — рассказ Александра Куприна о старом шарманщике..."
                    },
                    {
                        title: "Гранатовый браслет",
                        value: "Granatoviy braslet",
                        image: "14.jpg",
                        description: "«Грана́товый брасле́т» — повесть Александра Ивановича Куприна..."
                    },
                    {
                        title: "На переломе",
                        value: "na perelome",
                        image: "19.jpg",
                        description: "«На перело́ме (Каде́ты)» — автобиографическая повесть Александра Ивановича Куприна..."
                    },
                    {
                        title: "Чудесный доктор",
                        value: "chudesniy doctor",
                        image: "16.jpg",
                        description: "«Чудесный доктор» — это рассказ А.И. Куприна 1897 года..."
                    }
                ]
            }
        ]);

        const questionColors = ref([
            "rgb(33, 166, 243)",
            "rgb(165, 141, 252)",
            "rgb(165, 141, 252)"
        ]);

        const checkAnswer = (questionIndex) => {
            const question = questions.value[questionIndex];
            if (!question.selected) {
                alert('Пожалуйста, выберите книгу!');
                return;
            }

            if (question.selected === question.correctAnswer) {
                question.result = 'correct';
            } else {
                question.result = 'incorrect';
            }
        };

        return {
            questions,
            questionColors,
            checkAnswer
        };
    }
}).mount('#app');