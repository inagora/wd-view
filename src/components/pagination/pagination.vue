<template>
    <ul class="wd-pagination">
        <li 
            class="wd-pagination-prev" 
            :class="{'wd-pagination-disabled': newCurrentPage === 1}"
            :title="prevText || '上一页'" 
            @click="prevPageClickHandler">
            <span v-if="prevText">{{prevText}}</span>
            <a v-else class="wd-pagination-item-link">
                <left-outlined />
            </a>
        </li>
        <li 
            class="wd-pagination-item"
            :class="[page === newCurrentPage ? 'wd-pagination-item-active' : '', 'wd-pagination-item-' + page]"
            v-for="page in pageCount" :key="page"
            @click="pageClickHandler(page)">
            <a>{{page}}</a>
        </li>
        <li 
            class="wd-pagination-next" 
            :class="{'wd-pagination-disabled': newCurrentPage === pageCount}"
            :title="nextText || '下一页'" 
            @click="nextPageClickHandler">
            <span v-if="nextText">{{nextText}}</span>
            <a v-else class="wd-pagination-item-link">
                <right-outlined />
            </a>
        </li>
    </ul>
</template> 

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import {LeftOutlined, RightOutlined} from '@ant-design/icons-vue';
interface PropsType {
    pageSize: number,
    total: number,
    pageCount: number,
    currentPage: number,
    disabled: boolean,
    prevText: string,
    nextText: string
}
export default defineComponent({
    name: 'wd-pagination',
    components: {
        LeftOutlined,
        RightOutlined
    },
    props: {
        pageSize: Number,
        total: Number,
        pageCount: Number,
        currentPage: Number,
        disabled: {
            type: Boolean,
            default: false
        },
        prevText: String,
        nextText: String
    },
    emits: ['current-change', 'prev-click', 'next-click'],
    setup(props: PropsType, {emit}) {
        const {currentPage, pageCount} = reactive(props);
        let prevDisabled = ref(false);
        let newCurrentPage = ref(currentPage);
        const pageClickHandler = page => {
            newCurrentPage.value = page;
            emit('current-change', page);
        }
        const prevPageClickHandler = () => {
            if(--newCurrentPage.value < 1 ) {
                prevDisabled.value = true;
                newCurrentPage.value = 1;
                return;
            }
            emit('prev-click', newCurrentPage.value);
        }
        const nextPageClickHandler = () => {
            if(++newCurrentPage.value > pageCount ) {
                prevDisabled.value = true;
                newCurrentPage.value = pageCount;
                return;
            }
            emit('next-click', newCurrentPage.value);
        }
        return {
            pageClickHandler,
            prevPageClickHandler,
            nextPageClickHandler,
            newCurrentPage
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>