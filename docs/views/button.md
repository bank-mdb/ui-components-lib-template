### 按钮 Button

#### 正常状态（Normal Size）

<div>
    <mdb-button class="mr10" title="默认按钮">默认按钮</mdb-button>
</div>

```vue
<mdb-button class="mr10" title="默认按钮">默认按钮</mdb-button>
```

#### API

| 属性                                | 说明                                      | 类型    | 默认值 |
| :---------------------------------- | :---------------------------------------- | :------ | :----- |
| primary / secondary / dashed / link | 按钮类别                                  | Boolean | false  |
| color                               | 按钮颜色，可选值：success / warn / danger | String  | -      |
| size                                | 按钮尺寸，可选值：large / normal / small  | String  | normal |
| href                                | link 的 href 属性                         | String  | -      |
| disabled                            | 按钮不生效                                | Boolean | false  |
| icon                                | 图标按钮                                  | String  | -      |
| circle                              | 圆形图标按钮                              | Boolean | false  |
| loading                             | 异步按钮                                  | Boolean | false  |

<script>
    import Vue from 'vue'
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import MdbUI from '@src'
    import '@/scss/docs.scss'
    Vue.use(MdbUI)
    Vue.use(ElementUI);
    export default {
        data () {
            return {
                loading: false
            }
        },
        methods: {
            submit (val) {
                this.loading = val
                setTimeout(() => {
                    this.loading = false
                }, 3000)
            }
        }
    }
</script>
