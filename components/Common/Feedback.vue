<template>
    <div class="feedback-area bg-F4F8FC ptb-100">
        <div class="container">
            <div class="feedback-tabs">
                <div class="tab-content">
                    <div class="tabs__container">
                        <div 
                            class="tabs__list"
                            ref='tabsList'
                        >
                            <div 
                                class="tabs__list-tab"
                                v-for="tab in tabs"
                                v-bind:class="{ 'active': activeTab == tab.id }"
                                :key="tab.id"
                            >
                            <div class="features-content">
                            <h1>What does users say about <span class="sub-title">Dealdox </span></h1>
                        </div>
                            <br>
                            <br>
                            <h6>This is the best quote generator I have ever used</h6>
                                <p>“From the outset, we have realised the immense potential of technology to transform sales teams. Our relentless commitment to innovation has allowed us to harness this power, creating software solutions that dramatically improve sales efficiency and productivity. By delivering outstanding value to both sales teams” </p>
                                <h6>
                                    <span>James Smith</span> 
                                    - Web Developer
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <img :src="tab.image" alt="user">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feedback',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    description: 'Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.',
                    name: 'James Smith',
                    position: 'Web Developer',
                    image: require('../../assets/images/user/user1.jpg')
                },
                {
                    id: 2,
                    description: 'Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.',
                    name: 'Sarah Taylor',
                    position: 'Web Designer',
                    image: require('../../assets/images/user/user2.jpg')
                },
                {
                    id: 3,
                    description: 'Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.',
                    name: 'Andy John',
                    position: 'Developer',
                    image: require('../../assets/images/user/user3.jpg')
                },
                {
                    id: 4,
                    description: 'Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.',
                    name: 'David Warner',
                    position: 'Web Developer',
                    image: require('../../assets/images/user/user4.jpg')
                },
                {
                    id: 5,
                    description: 'Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.',
                    name: 'Alina Smith',
                    position: 'CEO',
                    image: require('../../assets/images/user/user5.jpg')
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    }
}
</script>