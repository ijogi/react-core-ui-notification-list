React notification list component based on React Core UI

Uses font-awesome for icons and reactstrap for some components

To show success or error messages, event handlers should return an object with isSuccess flag to indicate wether an operation was successful and a message property with the text to be displayed

 Example of inputs:
```{
            title: 'Arrears',
            icon: 'fa fa-bank',
            items: [
                {
                    id: Math.floor(Math.random() * 1000000 + 1),
                    type: {
                        name: 'followUp',
                        icon: '',
                        actions: [
                            {
                                name: '',
                                icon: 'fa fa-envelope-open-o',
                                func: this.handleMarkAsRead,
                                color: 'light'
                            },
                            {
                                name: '',
                                icon: 'fa fa fa-archive',
                                func: this.handleMarkAsArchived,
                                color: 'light'
                            },
                            {
                                name: 'Call nr',
                                icon: 'fa fa-phone-square',
                                func: this.handlePhonecall,
                                color: 'light'
                            }
                        ]
                    },
                    title: "B Check check check",
                    date: {
                        dateObj: new Date("2018-05-24 20:20"),
                        displayDate: moment("2018-05-24 20:20", "YYYY-MM-DD hh:mm").fromNow()
                    },
                    alert: {
                        text: 'Very late payment  + has suspicious face',
                        color: 'danger'
                    },
                    priority: {
                        name: "High",
                        value: 1
                    },
                    category: {
                        name: 'Important',
                        icon: 'fa fa-exclamation-triangle',
                        cssClass: 'bg-info white-text'
                    },
                    url: '/detail',
                    isRead: true,
                    isArchived: false,
                    sender: {
                        firstName: 'Alan',
                        lastName: 'Turing',
                        avatarUrl: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg'
                    },
                    text: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
                }
            ],
            priorityClasses: new Map([['High', 'danger'], ['Medium', 'warning'], ['Low', 'success']]),
            sortableFields: [
                { title: 'priority', sortByProp: 'value' },
                { title: 'date', sortByProp: 'dateObj' }
            ],
            actions: [
                {
                    name: 'Mark all as read',
                    icon: 'fa fa-envelope-open-o',
                    func: this.handleMarkAllItemsAsRead,
                    color: 'success'
                },
                {
                    name: 'Archive all',
                    icon: 'fa fa fa-archive',
                    func: this.handleMarkAllItemsAsArchived,
                    color: 'success'
                }
            ],
            filters: [
                { title: 'All', predicateFunc: (item) => !!item },
                { title: 'Unread', predicateFunc: (item) => !item.isRead },
                { title: 'Archived', predicateFunc: (item) => item.isArchived }
            ],
            emptyPage: <Alert color="primary">All clear, nothing to see here...</Alert>,
            truncateTextLength: 500,
            defaultSortBy: 'date'
        }
    }```