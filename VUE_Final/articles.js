const app = new Vue({
    el: '#app',
    data: {
        selectedTag: [],
        buttons: [
            'Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom'
        ],
        articles: [
            {
                id: 0,
                title: 'Let’s Get Solution For Building Construction Work',
                image: './img/BlogImg1.png',
                tag: 'Kitchen Design',
                date: '26 December,2022'
            },
            {
                id: 1,
                title: 'Let’s Get Solution For Building Construction Work',
                image: './img/BlogImg2.png',
                tag: 'Living Design',
                date: '22 December,2022'
            },
            {
                id: 2,
                title: 'Let’s Get Solution For Building Construction Work',
                image: './img/BlogImg3.png',
                tag: 'Kitchen Design',
                date: '26 December,2022'
            },
            {
                id: 3,
                title: 'Let’s Get Solution For Building Construction Work',
                image: './img/BlogImg4.png',
                tag: 'Kitchen Planning',
                date: '26 December,2022'
            },
            {
                id: 4,
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                image: './img/BlogImg5.png',
                tag: 'Living Design',
                date: '22 December,2022'
            },
            {
                id: 5,
                title: 'Best For Any Office & Business Interior Solution',
                image: './img/BlogImg6.png',
                tag: 'Interior Design',
                date: '25 December,2022'
            },

        ]
    },
    methods: {

        // Необходимо, чтобы на выборе Tags происходила сортировка статей по выбранному тегу. Тег можно выбрать только один.
        selectTag(e) {


            // if (this.selectedTag.includes(e.target.textContent)) {
            //     this.selectedTag = this.selectedTag.filter(
            //         (elem) => elem != e.target.textContent
            //     );
            //     console.log(`if ${this.selectedTag}`);
            //     e.target.classList.toggle("article__tag-selected");
            //     console.log(e);
            // } else {
            //     this.selectedTag.push(e.target.textContent);
            //     e.target.classList.toggle("article__tag-selected");
            //     e.preventDefault();
            //     console.log(e.preventDefault());
            // }



        }
    },
    computed: {
        filteredArticles() {
            return this.articles.filter(article => article.tag.includes(this.selectedTag))
        }
    }
})

