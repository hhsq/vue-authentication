/***
 * 设置ElementUI默认属性值
 * ElementUI.XXX.props.XX可以改
 * */
import ElementUI from 'element-ui';
// 点击model或esc修改默认值为不能关闭dialog
ElementUI.Dialog.props.closeOnClickModal.default = false;
ElementUI.Dialog.props.closeOnPressEscape.default = false;

// dialog默认宽度
ElementUI.Dialog.props.width = {type: String, default: '960px'};

// 重置 Input 和 Button 默认 size 为 mini
let inputSize = {type: String, default: 'mini'};
ElementUI.Button.props.size = inputSize;
ElementUI.Input.props.size = inputSize;
ElementUI.Select.props.size = inputSize;
ElementUI.DatePicker.props.size = inputSize;

// input等默认可清空
let inputClearable = {type: Boolean, default: true}
ElementUI.Input.props.clearable = inputClearable;
ElementUI.Select.props.clearable = inputClearable;

// 重置table默认居中
ElementUI.TableColumn.props.align = {type: String, default: 'center'};
