const json = {
    questionTitleLocation: "top",
    showQuestionNumbers: "off",
    pages: [
        {
            name: "Address",
            title: "Address",
            questions: [
                {
                    type: "text",
                    name: "address1",
                    title: "Street Address",
                    isRequired: true
                }, {
                    type: "text",
                    name: "address2",
                    title: "Address Line 2"
                }, {
                    type: "text",
                    name: "city",
                    title: "City",
                    isRequired: true
                }, {
                    type: "text",
                    name: "state",
                    startWithNewLine: false,
                    title: "State / Province / Region",
                    isRequired: true
                }, {
                    type: "text",
                    name: "zip",
                    title: "Zip / Postal Code",
                    isRequired: true
                }, {
                    type: "dropdown",
                    name: "country",
                    startWithNewLine: false,
                    title: "Country",
                    isRequired: true,
                    choicesByUrl: {
                        url: "https://restcountries.eu/rest/v2/all",
                        valueName: "name"
                    }
                }
            ]
        }
    ]
};

export default json