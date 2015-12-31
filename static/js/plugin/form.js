var $ = require('zepto');


	var FormValidate = function (ele, opts) {
		this.ele = $(ele);
		this.opts = opts;
		this.isSubmit = false;
		this.init();
	} 
	
	FormValidate.prototype.init = function () {
		var me = this, formFlag = {}, formValues = {};
		this.ele.find('input,select,textarea')
			.on('bsFormValidate', function (e) {
				var $this =  $(this), value = $this.val(), validate = $this.data('validate'), validateRule = FormValidate.VALIDATE[validate] || false
					,required = $this.data('required');
				if(required && required!=='false' && !$.trim(value)){
					me.setMsg($this, '该项不可为空');
					return;
				}else if(validateRule && value) {
					if (typeof validateRule === 'function') {  
						var msg = validateRule.call(this,value);
						if(msg){
							me.setMsg($this, msg); 
							return;
						}
					}else if(!validateRule.reg.test(value)) {
						me.setMsg($this, validateRule.msg); 
						return;
					}
				}
				
				me.hideMsg($this);
			})
			.on('change', function () {
				var $this = $(this);
				$this.trigger('bsFormValidate');
				me.ele.trigger('bsFormValid', me.formFlag);
			})
			.each(function (i,item) {
				var $item = $(item), name = $item.attr('name'),  required = $item.data('required'), type= $item.attr('type');
				
				if(!required){
					formFlag[name] = true;
				}else{
					formFlag[name] = false;
				}
				if(type==='radio' && !$item.is(':checked')) return;
				formValues[name] = $item.val();
				
			});
		me.ele.trigger('bsFormValid', me.formFlag);
		this.formFlag = formFlag;			
		this.formValues = formValues;			

	}
	
	FormValidate.prototype.checkForm = function (args) { 
		this.ele.find('input,select,textarea').trigger('bsFormValidate');
		var flag = true, formFlag = this.formFlag;
		
		for(var key in formFlag) {
			if(!formFlag[key]) { flag = false; break;}
		}
				
		args[1] && args[1] (flag);

	}
	
	FormValidate.prototype.setMsg = function ($item, msg) {
		
		var $parent = $item.parent(), $alert = $parent.find('.error-msg');
		
		if(!$alert.length){
			$alert = $('<div class="error-msg"></div>').appendTo($parent);
		}
		this.formFlag[$item.attr('name')] = false;
		this.formValues[$item.attr('name')] = $item.val();
		$alert.html(msg).show();
		
		
	}
	
	FormValidate.prototype.hideMsg = function ($item) {
		if($item.attr('type')==='radio' && !$item.is(':checked')) return;
		this.formFlag[$item.attr('name')] = true;
		this.formValues[$item.attr('name')] = $item.val();
		$item.parent().find('.error-msg').html('').hide();	
		
	}
	
	FormValidate.prototype.showMsg = function () {
		
	}
	
	FormValidate.prototype.submit = function (args) {
		if(this.isSubmit) return;  
		this.isSubmit = true; 
		args[1] && args[1] (this.formValues);
	}
	
	FormValidate.prototype.resetSubmit = function () {
		this.isSubmit = false;
	}
	
	FormValidate.prototype.setDisabled = function () {
		this.ele.find('input,select,textarea').attr('disabled',true);
	}
	
	FormValidate.prototype.setValues = function (args) {
		var data = args[1];
		for (var key in data) {
			var item = data[key];
			this.ele.find('[name="'+ key +'"]').val(item).trigger('change');
		}
	}
	
	FormValidate.VALIDATE = {
		phone: {
			reg: /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/,
			msg: '请输入正确手机号'
		},
		idcard: {
			reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
			msg: '请输入正确身份证'
		},
		number: function (value) {
			if(/^[0-9]+(.[0-9]+)?$/.test(value))
				return false;
			else{
				$(this).val('');
				return '请输入正确金额'
			}
		}
	}	
	
	FormValidate.DEFAULTS = {}
	
	var old = $.fn.formValidate

	$.fn.formValidate = function (option) {  
		var args = arguments;
		return this.each(function () { 
		  var $this = $(this)
		  var data  = $this.data('bs.formValidate')
			var options = $.extend({}, FormValidate.DEFAULTS, typeof option == 'object' && option)
		  if (!data) $this.data('bs.formValidate', (data = new FormValidate(this,options )))
		  if (typeof option == 'string') data[option].call(data,args)
		})
	}

	$.fn.formValidate.Constructor = FormValidate

	$.fn.formValidate.noConflict = function () {
		$.fn.formValidate = old
		return this
	}
	
module.exports = null;