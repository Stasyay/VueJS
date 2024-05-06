const Tags = {
    name: 'Tags',
    props: {
        article__tag_active: { type: Boolean, default: false },
        tags: { type: Object, default: {} },
    },
    template: `<button class="article__tag" :class="{article__tag_active}" @click="$emit('click')">{{tags.title}}</button>`,
};

const app = new Vue({
    el: '#app',
    components: {
        Tags,
    },
    data: {
        activeIndex: 0,
        tags: [
            { title: 'Kitchen' },
            { title: 'Bedroom' },
            { title: 'Building' },
            { title: 'Architecture' },
            { title: 'Kitchen Planning' },
            { title: 'Bedroom' }
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
        selectTag(index) {
            this.activeIndex = index;
        }
    },
    computed: {
        filteredArticles() {
            return this.articles.filter(article => article.tag.includes(this.tags[this.activeIndex].title))
        }
    }
})

