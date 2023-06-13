
import useUserStore from '@/store/user'

import useCounterStore from '@/store/counter'


// 统一导出useStore方法
export default function useStore() {
    return {
        user: useUserStore(),
        counter: useCounterStore(),
    }
}


