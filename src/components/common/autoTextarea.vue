<template>
  <div class="auto-textarea-wrapper">
    <pre class="auto-textarea-block">{{ temp_value }} </pre>
    <textarea ref="vTextarea" :maxlength="maxLength" @change="change" @focus="onfocus" @blur="onblur" :placeholder="placeholder" v-model="temp_value" :class="{'no-border': !border , ' no-resize': !resize}" class="auto-textarea-input"></textarea>
    <span v-if="maxLength < 20000" class="wordRule">{{ length }} / {{ maxLength }}</span>
  </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            border: {
                type: Boolean,
                default: false
            },
            resize: {
                type: Boolean,
                default: false
            },
            maxLength: {
              type: Number,
              default: 20000
            },
            item: {
              type: Number,
              default: 20000
            }
        },
        data() {
            return {
              temp_value: this.value,
              length: this.value.length
            };
        },
        watch: {
            value: function (val, oldVal) {
              this.temp_value = val
            },
            temp_value: function (val, oldVal) {
              this.length = val.length
              this.$emit('input', val)
            }
        },
        created() {
        },
        methods: {
          change() {
            if (this.temp_value.length <= this.maxLength) {
              this.$emit('onChange', this.item, this.temp_value)
            }
          },
          onfocus() {
            this.$emit('onfocus', this.item)
          },
          onblur() {
            this.$emit('onblur')
          }
        }
    };
</script>
<style lang="less" scoped>
  .auto-textarea-wrapper {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: normal;
  }
  .auto-textarea-block {
    display: block;
    white-space: pre-wrap;
    word-wrap: break-word !important;
    visibility: hidden;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .auto-textarea-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    color: #333;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .auto-textarea-input.no-border {
    outline: 0 none;
    border: none !important;
  }
  .auto-textarea-input.no-resize {
    resize: none;
  }
  .wordRule {
    position: absolute;
    right: 0;
    bottom: -0.3rem;
    font-size: 0.24rem;
    color: #ccc;
  }
</style>
