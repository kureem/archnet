var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
var framework;
(function (framework) {
    var builder;
    (function (builder) {
        var AbstractComponentFactory = (function () {
            function AbstractComponentFactory(impl) {
                this.impl = null;
                this.impl = impl;
            }
            /**
             *
             * @param {string} impl
             * @return {boolean}
             */
            AbstractComponentFactory.prototype.supports = function (impl) {
                return (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(impl, this.impl);
            };
            AbstractComponentFactory.prototype.configureStyles = function (instance, component) {
                var keys = Object.keys(component.styles);
                for (var index150 = 0; index150 < keys.length; index150++) {
                    var key = keys[index150];
                    {
                        var value = component.styles[key];
                        instance.setStyle(key, value);
                    }
                }
            };
            AbstractComponentFactory.prototype.configureParameters = function (instance, component) {
                var keys = Object.keys(component.parameters);
                for (var index151 = 0; index151 < keys.length; index151++) {
                    var key = keys[index151];
                    {
                        var value = component.parameters[key];
                        instance.setParameter(key, value);
                    }
                }
            };
            AbstractComponentFactory.prototype.configureEvents = function (instance, component) {
                for (var index152 = 0; index152 < component.events.length; index152++) {
                    var event_1 = component.events[index152];
                    {
                        var listener = new framework.builder.BuilderEventListener(event_1.source);
                        instance.addEventListener(listener, event_1.type);
                    }
                }
            };
            /**
             *
             * @param {framework.builder.model.Component} component
             * @return {framework.JSContainer}
             */
            AbstractComponentFactory.prototype.build = function (component) {
                var instance = this.createInstance();
                this.configureStyles(instance, component);
                this.configureParameters(instance, component);
                this.configureEvents(instance, component);
                return instance;
            };
            return AbstractComponentFactory;
        }());
        builder.AbstractComponentFactory = AbstractComponentFactory;
        AbstractComponentFactory["__class"] = "framework.builder.AbstractComponentFactory";
        AbstractComponentFactory["__interfaces"] = ["framework.builder.model.ComponentFactory"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var BuilderEventListener = (function () {
            function BuilderEventListener(jsSource) {
                this.jsSource = null;
                this.jsSource = jsSource;
            }
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            BuilderEventListener.prototype.performAction = function (source, evt) {
                if (this.jsSource != null) {
                    eval(this.jsSource);
                }
            };
            return BuilderEventListener;
        }());
        builder.BuilderEventListener = BuilderEventListener;
        BuilderEventListener["__class"] = "framework.builder.BuilderEventListener";
        BuilderEventListener["__interfaces"] = ["framework.EventListener"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var model;
        (function (model) {
            var BuilderEvent = (function () {
                function BuilderEvent() {
                    this.type = null;
                    this.source = null;
                }
                return BuilderEvent;
            }());
            model.BuilderEvent = BuilderEvent;
            BuilderEvent["__class"] = "framework.builder.model.BuilderEvent";
        })(model = builder.model || (builder.model = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var model;
        (function (model) {
            var Component = (function () {
                function Component() {
                    this.parameters = new Object();
                    this.children = (new Array());
                    this.events = (new Array());
                    this.styles = new Object();
                    this.impl = null;
                }
                return Component;
            }());
            model.Component = Component;
            Component["__class"] = "framework.builder.model.Component";
        })(model = builder.model || (builder.model = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var configs;
    (function (configs) {
        var Option = (function () {
            function Option(text, value) {
                var _this = this;
                if (((typeof text === 'string') || text === null) && ((typeof value === 'string') || value === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    this.text = null;
                    this.value = null;
                    this.text = null;
                    this.value = null;
                    (function () {
                        _this.text = text;
                        _this.value = value;
                    })();
                }
                else if (text === undefined && value === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    this.text = null;
                    this.value = null;
                    this.text = null;
                    this.value = null;
                }
                else
                    throw new Error('invalid overload');
            }
            return Option;
        }());
        configs.Option = Option;
        Option["__class"] = "framework.configs.Option";
    })(configs = framework.configs || (framework.configs = {}));
})(framework || (framework = {}));
(function (framework) {
    var configs;
    (function (configs) {
        var Parameter = (function () {
            function Parameter(name, label, type) {
                var _this = this;
                this.options = (new java.util.LinkedList());
                if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof type === 'string') || type === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    this.name = null;
                    this.label = null;
                    this.type = null;
                    this.options = (new java.util.LinkedList());
                    this.name = null;
                    this.label = null;
                    this.type = null;
                    (function () {
                        _this.name = name;
                        _this.label = label;
                        _this.type = type;
                    })();
                }
                else if (name === undefined && label === undefined && type === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    this.name = null;
                    this.label = null;
                    this.type = null;
                    this.options = (new java.util.LinkedList());
                    this.name = null;
                    this.label = null;
                    this.type = null;
                }
                else
                    throw new Error('invalid overload');
            }
            return Parameter;
        }());
        configs.Parameter = Parameter;
        Parameter["__class"] = "framework.configs.Parameter";
    })(configs = framework.configs || (framework.configs = {}));
})(framework || (framework = {}));
(function (framework) {
    var core;
    (function (core) {
        var BasicDecoratorRegistry = (function () {
            function BasicDecoratorRegistry() {
                /*private*/ this.decorators = (new java.util.ArrayList());
            }
            /**
             *
             * @param {*} decorator
             */
            BasicDecoratorRegistry.prototype.registerDecorator = function (decorator) {
                this.decorators.add(decorator);
            };
            /**
             *
             * @return {*}
             */
            BasicDecoratorRegistry.prototype.getDecorators = function () {
                return this.decorators;
            };
            /**
             *
             */
            BasicDecoratorRegistry.prototype.doInit = function () {
                this.registerDecorator(new framework.interactions.InteractionsDecorator());
            };
            return BasicDecoratorRegistry;
        }());
        core.BasicDecoratorRegistry = BasicDecoratorRegistry;
        BasicDecoratorRegistry["__class"] = "framework.core.BasicDecoratorRegistry";
        BasicDecoratorRegistry["__interfaces"] = ["framework.core.Initializable", "framework.core.DecoratorsRegistry"];
    })(core = framework.core || (framework.core = {}));
})(framework || (framework = {}));
(function (framework) {
    var core;
    (function (core) {
        var BeanFactory = (function () {
            function BeanFactory() {
                /*private*/ this.beans = (new java.util.HashMap());
            }
            BeanFactory.INSTANCE_$LI$ = function () { if (BeanFactory.INSTANCE == null)
                BeanFactory.INSTANCE = new BeanFactory(); return BeanFactory.INSTANCE; };
            ;
            BeanFactory.getInstance = function () {
                return BeanFactory.INSTANCE_$LI$();
            };
            BeanFactory.prototype.onInit = function (obj) {
                if (obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("framework.core.Initializable") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("framework.core.Initializable") >= 0)) {
                    obj.doInit();
                }
            };
            BeanFactory.prototype.initBeanFactoryAware = function (bean) {
                if (bean != null && (bean["__interfaces"] != null && bean["__interfaces"].indexOf("framework.core.BeanFactoryAware") >= 0 || bean.constructor != null && bean.constructor["__interfaces"] != null && bean.constructor["__interfaces"].indexOf("framework.core.BeanFactoryAware") >= 0)) {
                    this.initBeanFactoryAware(bean);
                }
            };
            BeanFactory.prototype.addBean = function (mixing, instance) {
                var mixxingName = mixing.toString();
                this.onInit(instance);
                this.initBeanFactoryAware(instance);
                this.beans.put(mixxingName, instance);
            };
            BeanFactory.prototype.getBeanOfType = function (clazz) {
                for (var index153 = this.beans.keySet().iterator(); index153.hasNext();) {
                    var key = index153.next();
                    {
                        var bean = this.beans.get(key);
                        try {
                            if (bean.constructor.isAssignableFrom(clazz)) {
                                return bean;
                            }
                        }
                        catch (e) {
                        }
                        ;
                    }
                }
                var mixing = clazz.toString();
                if (this.beans.containsKey(mixing)) {
                    return this.beans.get(mixing);
                }
                throw new java.lang.RuntimeException("No bean of type " + (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(clazz) + " found in factory");
            };
            BeanFactory.prototype.getBean = function (name) {
                return this.beans.get(name);
            };
            return BeanFactory;
        }());
        core.BeanFactory = BeanFactory;
        BeanFactory["__class"] = "framework.core.BeanFactory";
    })(core = framework.core || (framework.core = {}));
})(framework || (framework = {}));
(function (framework) {
    var core;
    (function (core) {
        var Static = (function () {
            function Static() {
            }
            return Static;
        }());
        Static.idCount = 0;
        core.Static = Static;
        Static["__class"] = "framework.core.Static";
    })(core = framework.core || (framework.core = {}));
})(framework || (framework = {}));
(function (framework) {
    var InputTypes = (function () {
        function InputTypes() {
        }
        return InputTypes;
    }());
    InputTypes.text = "text";
    InputTypes.password = "password";
    InputTypes.datetime = "datetime";
    InputTypes.datetime_local = "datetime_local";
    InputTypes.date = "date";
    InputTypes.month = "month";
    InputTypes.time = "time";
    InputTypes.week = "week";
    InputTypes.number = "number";
    InputTypes.email = "email";
    InputTypes.url = "url";
    InputTypes.search = "search";
    InputTypes.tel = "tel";
    InputTypes.color = "color";
    InputTypes.checkbox = "checkbox";
    InputTypes.radio = "radio";
    framework.InputTypes = InputTypes;
    InputTypes["__class"] = "framework.InputTypes";
})(framework || (framework = {}));
(function (framework) {
    var interactions;
    (function (interactions) {
        var DraggableRenderer = (function () {
            function DraggableRenderer() {
            }
            DraggableRenderer.prototype.doRender$framework_interactions_Draggable$jsweet_dom_HTMLElement = function (c, root) {
                var jq = $("#" + c.getId());
                var opts = c.getDraggableOptions();
                if (opts == null)
                    jq.draggable();
                else
                    jq.draggable(opts);
            };
            /**
             *
             * @param {*} c
             * @param {HTMLElement} root
             */
            DraggableRenderer.prototype.doRender = function (c, root) {
                if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("framework.interactions.Draggable") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("framework.interactions.Draggable") >= 0)) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.doRender$framework_interactions_Draggable$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            return DraggableRenderer;
        }());
        interactions.DraggableRenderer = DraggableRenderer;
        DraggableRenderer["__class"] = "framework.interactions.DraggableRenderer";
        DraggableRenderer["__interfaces"] = ["framework.renderer.Renderer"];
    })(interactions = framework.interactions || (framework.interactions = {}));
})(framework || (framework = {}));
(function (framework) {
    var interactions;
    (function (interactions) {
        var DroppableRenderer = (function () {
            function DroppableRenderer() {
            }
            DroppableRenderer.prototype.doRender$framework_interactions_Droppable$jsweet_dom_HTMLElement = function (c, root) {
                var jq = $("#" + c.getId());
                var opts = c.getDroppableOptions();
                if (opts == null)
                    jq.droppable();
                else
                    jq.droppable(opts);
            };
            /**
             *
             * @param {*} c
             * @param {HTMLElement} root
             */
            DroppableRenderer.prototype.doRender = function (c, root) {
                if (((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.doRender$framework_interactions_Droppable$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            return DroppableRenderer;
        }());
        interactions.DroppableRenderer = DroppableRenderer;
        DroppableRenderer["__class"] = "framework.interactions.DroppableRenderer";
        DroppableRenderer["__interfaces"] = ["framework.renderer.Renderer"];
    })(interactions = framework.interactions || (framework.interactions = {}));
})(framework || (framework = {}));
(function (framework) {
    var Main = (function () {
        function Main() {
        }
        Main.main = function (args) {
            framework.core.BeanFactory.getInstance().addBean("framework.core.DecoratorsRegistry", new framework.core.BasicDecoratorRegistry());
            new framework.builder.Builder("builder").render();
        };
        return Main;
    }());
    framework.Main = Main;
    Main["__class"] = "framework.Main";
})(framework || (framework = {}));
(function (framework) {
    var renderer;
    (function (renderer) {
        var ContainerRenderer = (function () {
            function ContainerRenderer() {
            }
            ContainerRenderer.prototype.decorate = function (c) {
                for (var index154 = framework.core.BeanFactory.getInstance().getBeanOfType("framework.core.DecoratorsRegistry").getDecorators().iterator(); index154.hasNext();) {
                    var dec = index154.next();
                    {
                        dec.decorate(c);
                    }
                }
            };
            ContainerRenderer.prototype.doRender$framework_JSContainer$jsweet_dom_HTMLElement = function (c, root) {
                var jq = document.getElementById(c.getId());
                var tag = c.getTag();
                var rendered = c.isRendered();
                var name = c.getName();
                var html = c.getHtml();
                var parent = c.getParent();
                if (!rendered) {
                    this.decorate(c);
                    if (jq != null)
                        jq.remove();
                    var njq = document.createElement(tag);
                    if (name != null && name.length > 0)
                        njq.setAttribute("name", name);
                    njq.setAttribute("id", c.getId());
                    njq.innerHTML = html;
                    this.renderAttributes(njq, c, false);
                    this.renderStyles(njq, c, false);
                    if (parent == null) {
                        if (root == null) {
                            var body = document.getElementsByTagName("body")[0];
                            body.appendChild(njq);
                        }
                        else {
                            root.appendChild(njq);
                        }
                    }
                    else {
                        var index = parent.getChildren().indexOf(c);
                        var nextSib = null;
                        if (index < parent.getChildren().size() - 1) {
                            nextSib = parent.getChildren().get(index + 1);
                            if (!nextSib.isRendered()) {
                                nextSib = null;
                            }
                        }
                        if (nextSib != null) {
                            var p = document.getElementById(parent.getId());
                            p.insertBefore(njq, document.getElementById(nextSib.getId()));
                        }
                        else {
                            document.getElementById(parent.getId()).appendChild(njq);
                        }
                    }
                    this.renderEvents(njq, c);
                    this.execCommands(njq, c);
                    c.flush("a28n12l10");
                }
                else {
                    this.renderAttributes(jq, c, true);
                    this.renderStyles(jq, c, true);
                    this.execCommands(jq, c);
                    c.flush("a28n12l10");
                }
            };
            ContainerRenderer.prototype.doRender = function (c, root) {
                if (((c != null && c instanceof framework.JSContainer) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.doRender$framework_JSContainer$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            ContainerRenderer.prototype.execCommands = function (njq, container) {
                for (var index155 = container.getCommands().iterator(); index155.hasNext();) {
                    var command = index155.next();
                    {
                        var name_1 = command.getName();
                        var params = command.getParameters();
                        var variable = command.getVariable();
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("null", variable)) {
                            variable = null;
                        }
                        if (params == null && variable == null) {
                            eval("njq." + name_1 + "()");
                        }
                        else if (params != null) {
                            eval("njq." + name_1 + "(params)");
                        }
                        else if (variable != null) {
                            eval("njq." + name_1 + "(" + variable + ")");
                        }
                    }
                }
            };
            ContainerRenderer.prototype.renderEvents = function (njq, c) {
                var _this = this;
                for (var index156 = c.getListeners().keySet().iterator(); index156.hasNext();) {
                    var key = index156.next();
                    {
                        var listeners = c.getListeners().get(key);
                        njq.addEventListener(key, (function (listeners) {
                            return function (evt) {
                                for (var index157 = listeners.iterator(); index157.hasNext();) {
                                    var l = index157.next();
                                    {
                                        _this.synchronizeFields(njq, c);
                                        l.performAction(c, evt);
                                    }
                                }
                                c.getRoot().render();
                            };
                        })(listeners));
                    }
                }
            };
            ContainerRenderer.prototype.synchronizeFields = function (njq, jsfield) {
                if (jsfield != null && (jsfield["__interfaces"] != null && jsfield["__interfaces"].indexOf("framework.InputField") >= 0 || jsfield.constructor != null && jsfield.constructor["__interfaces"] != null && jsfield.constructor["__interfaces"].indexOf("framework.InputField") >= 0)) {
                    var inputField = jsfield;
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(jsfield.getTag(), "input") && (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("checkbox", jsfield.getAttribute("type"))) {
                        var field = document.getElementById(jsfield.getId());
                        if (field.checked) {
                            inputField.setRawValue("true");
                        }
                        else {
                            inputField.setRawValue("false");
                        }
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(jsfield.getTag(), "input")) {
                        var field = document.getElementById(jsfield.getId());
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("checkbox", jsfield.getAttribute("type"))) {
                            if (field.checked) {
                                inputField.setRawValue("true");
                            }
                            else {
                                inputField.setRawValue("false");
                            }
                        }
                        else {
                            var value = field.value;
                            inputField.setRawValue(value);
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(jsfield.getTag(), "select")) {
                        var field = document.getElementById(jsfield.getId());
                        var value = field.value;
                        inputField.setRawValue(value);
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(jsfield.getTag(), "textarea")) {
                        var field = document.getElementById(jsfield.getId());
                        var value = field.value;
                        inputField.setRawValue(value);
                    }
                    else {
                        var field = document.getElementById(jsfield.getId());
                        var value = field.getAttribute("value");
                        inputField.setRawValue(value);
                    }
                }
                for (var index158 = jsfield.getChildren().iterator(); index158.hasNext();) {
                    var c = index158.next();
                    {
                        this.synchronizeFields(document.getElementById(c.getId()), c);
                    }
                }
            };
            ContainerRenderer.prototype.renderAttributes = function (njq, c, changed) {
                if (changed) {
                    {
                        var array160 = c.getChangedAttributes();
                        for (var index159 = 0; index159 < array160.length; index159++) {
                            var key = array160[index159];
                            {
                                if (c.getAttribute(key) == null) {
                                    njq.removeAttribute(key);
                                }
                                else {
                                    njq.setAttribute(key, c.getAttribute(key));
                                }
                            }
                        }
                    }
                }
                else {
                    for (var index161 = c.getAttributeNames().iterator(); index161.hasNext();) {
                        var key = index161.next();
                        {
                            if (c.getAttribute(key) != null)
                                njq.setAttribute(key, c.getAttribute(key));
                        }
                    }
                }
            };
            ContainerRenderer.prototype.clearAttributes = function (elem) {
                var attrs = elem.attributes;
                for (var i = 0; i < attrs.length; i++) {
                    if (!(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(attrs[i].name, "id"))
                        elem.removeAttribute(attrs[i].name);
                }
                ;
            };
            ContainerRenderer.prototype.clearStyles = function (jq) {
                jq.removeAttribute("style");
            };
            ContainerRenderer.prototype.renderStyles = function (njq, c, changed) {
                if (changed) {
                    {
                        var array163 = c.getChangedStyles();
                        for (var index162 = 0; index162 < array163.length; index162++) {
                            var key = array163[index162];
                            {
                                njq.style.setProperty(key, c.getStyle(key));
                            }
                        }
                    }
                }
                else {
                    for (var index164 = c.getStyleNames().iterator(); index164.hasNext();) {
                        var key = index164.next();
                        {
                            njq.style.setProperty(key, c.getStyle(key));
                        }
                    }
                }
            };
            return ContainerRenderer;
        }());
        renderer.ContainerRenderer = ContainerRenderer;
        ContainerRenderer["__class"] = "framework.renderer.ContainerRenderer";
        ContainerRenderer["__interfaces"] = ["framework.renderer.Renderer"];
    })(renderer = framework.renderer || (framework.renderer = {}));
})(framework || (framework = {}));
(function (framework) {
    var util;
    (function (util) {
        /**
         * The Class IOUtil.
         *
         * @author Kureem Rossaye<br>
         * kureem@gmail.com Oct 22, 2008
         * @class
         */
        var IOUtil = (function () {
            function IOUtil() {
            }
            IOUtil.getFileContenntAsString$java_io_File$java_lang_String = function (file, encoding) {
                var is = new java.io.FileInputStream(file);
                return IOUtil.getStreamContentAsString(is);
            };
            /**
             * Gets the file content as string.
             *
             * @param {java.io.File} file
             * the file
             * @param {string} encoding
             * the encoding
             * @return {string} the file content as string
             * @throws Exception
             * the exception
             */
            IOUtil.getFileContenntAsString = function (file, encoding) {
                if (((file != null && file instanceof java.io.File) || file === null) && ((typeof encoding === 'string') || encoding === null)) {
                    return framework.util.IOUtil.getFileContenntAsString$java_io_File$java_lang_String(file, encoding);
                }
                else if (((typeof file === 'string') || file === null) && ((typeof encoding === 'string') || encoding === null)) {
                    return framework.util.IOUtil.getFileContenntAsString$java_lang_String$java_lang_String(file, encoding);
                }
                else if (((file != null && file instanceof java.io.File) || file === null) && encoding === undefined) {
                    return framework.util.IOUtil.getFileContenntAsString$java_io_File(file);
                }
                else if (((typeof file === 'string') || file === null) && encoding === undefined) {
                    return framework.util.IOUtil.getFileContenntAsString$java_lang_String(file);
                }
                else
                    throw new Error('invalid overload');
            };
            IOUtil.getFileContenntAsString$java_io_File = function (file) {
                var is = new java.io.FileInputStream(file);
                var s = new String(IOUtil.getStreamContentAsBytes(is));
                return s;
            };
            IOUtil.getFileContenntAsString$java_lang_String$java_lang_String = function (fileName, encoding) {
                var is = new java.io.FileInputStream(fileName);
                return IOUtil.getStreamContentAsString(is);
            };
            IOUtil.getFileContenntAsString$java_lang_String = function (fileName) {
                var is = new java.io.FileInputStream(fileName);
                return new String(IOUtil.getStreamContentAsBytes(is));
            };
            /**
             * Gets the file content as bytes.
             *
             * @param {string} fileName
             * the file name
             * @return {Array} the file content as bytes
             * @throws Exception
             * the exception
             */
            IOUtil.getFileContentAsBytes = function (fileName) {
                var is = new java.io.FileInputStream(fileName);
                return IOUtil.getStreamContentAsBytes(is);
            };
            /**
             * Gets the stream content as string.
             *
             * @param {java.io.InputStream} is
             * the is
             * @return {string} the stream content as string
             */
            IOUtil.getStreamContentAsString = function (is) {
                try {
                    var buf = (function (s) { var a = []; while (s-- > 0)
                        a.push(0); return a; })(is.available());
                    is.read(buf);
                    var s = new String(buf);
                    return s;
                }
                catch (e) {
                    throw new java.lang.RuntimeException(e);
                }
                ;
            };
            /**
             * Gets the stream content as bytes.
             *
             * @param {java.io.InputStream} is
             * the is
             * @return {Array} the stream content as bytes
             * @throws Exception
             * the exception
             */
            IOUtil.getStreamContentAsBytes = function (is) {
                var data = (function (s) { var a = []; while (s-- > 0)
                    a.push(0); return a; })(is.available());
                if (is.available() === 0) {
                    return data;
                }
                is.read(data);
                return data;
            };
            IOUtil.writeToFile = function (content, f) {
                var fout = new java.io.FileOutputStream(f);
                fout.write(/* getBytes */ (content).split('').map(function (s) { return s.charCodeAt(0); }));
                fout.flush();
                fout.close();
                return true;
            };
            return IOUtil;
        }());
        util.IOUtil = IOUtil;
        IOUtil["__class"] = "framework.util.IOUtil";
    })(util = framework.util || (framework.util = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var BasicComponentFactory = (function (_super) {
                __extends(BasicComponentFactory, _super);
                function BasicComponentFactory(tag) {
                    var _this = _super.call(this, "html:" + tag) || this;
                    _this.tag = null;
                    _this.tag = tag;
                    return _this;
                }
                /**
                 *
                 * @return {framework.JSContainer}
                 */
                BasicComponentFactory.prototype.createInstance = function () {
                    var container = new framework.JSContainer(this.tag);
                    return container;
                };
                return BasicComponentFactory;
            }(framework.builder.AbstractComponentFactory));
            libraries.BasicComponentFactory = BasicComponentFactory;
            BasicComponentFactory["__class"] = "framework.builder.libraries.BasicComponentFactory";
            BasicComponentFactory["__interfaces"] = ["framework.builder.model.ComponentFactory"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var interactions;
    (function (interactions) {
        var InteractionsDecorator = (function () {
            function InteractionsDecorator() {
            }
            InteractionsDecorator.draggableRenderer_$LI$ = function () { if (InteractionsDecorator.draggableRenderer == null)
                InteractionsDecorator.draggableRenderer = new framework.interactions.DraggableRenderer(); return InteractionsDecorator.draggableRenderer; };
            ;
            InteractionsDecorator.droppableRenderer_$LI$ = function () { if (InteractionsDecorator.droppableRenderer == null)
                InteractionsDecorator.droppableRenderer = new framework.interactions.DroppableRenderer(); return InteractionsDecorator.droppableRenderer; };
            ;
            /**
             *
             * @param {*} renderable
             */
            InteractionsDecorator.prototype.decorate = function (renderable) {
                if (renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Draggable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Draggable") >= 0)) {
                    if (!renderable.getRenderers().contains(InteractionsDecorator.draggableRenderer_$LI$())) {
                        renderable.addRenderer(InteractionsDecorator.draggableRenderer_$LI$());
                    }
                }
                if (renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) {
                    if (!renderable.getRenderers().contains(InteractionsDecorator.droppableRenderer_$LI$())) {
                        renderable.addRenderer(InteractionsDecorator.droppableRenderer_$LI$());
                    }
                }
            };
            return InteractionsDecorator;
        }());
        interactions.InteractionsDecorator = InteractionsDecorator;
        InteractionsDecorator["__class"] = "framework.interactions.InteractionsDecorator";
        InteractionsDecorator["__interfaces"] = ["framework.core.Decorator"];
    })(interactions = framework.interactions || (framework.interactions = {}));
})(framework || (framework = {}));
(function (framework) {
    /**
     *
     * @author Kurreem
     * @param {string} name
     * @param {string} tag
     * @class
     */
    var JSContainer = (function () {
        function JSContainer(name, tag) {
            var _this = this;
            /*private*/ this.listeners = (new java.util.HashMap());
            /*private*/ this.attributes = (new java.util.HashMap());
            /*private*/ this.styles = (new java.util.HashMap());
            /*private*/ this.children = (new java.util.LinkedList());
            /*private*/ this.html = "";
            /*private*/ this.tag = "";
            /*private*/ this.name = "";
            /*private*/ this.rendered = false;
            /*private*/ this.renderers = (new java.util.ArrayList());
            /*private*/ this.changedAttributes = (new java.util.LinkedList());
            /*private*/ this.changedStyles = (new java.util.LinkedList());
            /*private*/ this.commands = (new java.util.LinkedList());
            /*private*/ this.component = new framework.builder.model.Component();
            if (((typeof name === 'string') || name === null) && ((typeof tag === 'string') || tag === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.id = null;
                this.data = null;
                this.parent = null;
                this.listeners = (new java.util.HashMap());
                this.attributes = (new java.util.HashMap());
                this.styles = (new java.util.HashMap());
                this.children = (new java.util.LinkedList());
                this.html = "";
                this.tag = "";
                this.name = "";
                this.rendered = false;
                this.renderers = (new java.util.ArrayList());
                this.changedAttributes = (new java.util.LinkedList());
                this.changedStyles = (new java.util.LinkedList());
                this.commands = (new java.util.LinkedList());
                this.component = new framework.builder.model.Component();
                this.id = null;
                this.data = null;
                this.parent = null;
                (function () {
                    _this.tag = tag;
                    _this.name = name;
                })();
            }
            else if (((typeof name === 'string') || name === null) && tag === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var tag_1 = __args[0];
                this.id = null;
                this.data = null;
                this.parent = null;
                this.listeners = (new java.util.HashMap());
                this.attributes = (new java.util.HashMap());
                this.styles = (new java.util.HashMap());
                this.children = (new java.util.LinkedList());
                this.html = "";
                this.tag = "";
                this.name = "";
                this.rendered = false;
                this.renderers = (new java.util.ArrayList());
                this.changedAttributes = (new java.util.LinkedList());
                this.changedStyles = (new java.util.LinkedList());
                this.commands = (new java.util.LinkedList());
                this.component = new framework.builder.model.Component();
                this.id = null;
                this.data = null;
                this.parent = null;
                (function () {
                    _this.tag = tag_1;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        JSContainer.DEFAULT_RENDERER_$LI$ = function () { if (JSContainer.DEFAULT_RENDERER == null)
            JSContainer.DEFAULT_RENDERER = new framework.renderer.ContainerRenderer(); return JSContainer.DEFAULT_RENDERER; };
        ;
        /**
         *
         * @return {Array}
         */
        JSContainer.prototype.getChangedAttributes = function () {
            return this.changedAttributes.toArray(new Array(this.changedAttributes.size()));
        };
        /**
         *
         * @return {Array}
         */
        JSContainer.prototype.getChangedStyles = function () {
            return this.changedStyles.toArray(new Array(this.changedStyles.size()));
        };
        JSContainer.prototype.flush = function (s) {
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(s, "a28n12l10")) {
                this.changedAttributes.clear();
                this.changedStyles.clear();
                this.commands.clear();
            }
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getRenderers = function () {
            return this.renderers;
        };
        /**
         *
         * @param {*} renderer
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addRenderer = function (renderer) {
            if (!this.renderers.contains(renderer)) {
                this.renderers.add(renderer);
            }
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getId = function () {
            if (this.id == null) {
                this.id = this.uid();
            }
            return this.id;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.uid = function () {
            framework.core.Static.idCount++;
            return framework.core.Static.idCount + "";
        };
        /**
         *
         * @param {string} styleClass
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addClass = function (styleClass) {
            var styles = this.getAttribute("class");
            if (styles == null) {
                styles = "";
            }
            var aStyles = styles.split(" ");
            var add = true;
            for (var index165 = 0; index165 < aStyles.length; index165++) {
                var style = aStyles[index165];
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(style.trim(), styleClass)) {
                        add = false;
                    }
                }
            }
            if (add)
                this.setAttribute("class", styles.trim() + " " + styleClass);
            return this;
        };
        /**
         *
         * @param {string} cls
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.removeClass = function (cls) {
            var cl = this.getAttribute("class");
            if (cl != null && cl.length > 0) {
                cl = cl.split(cls).join("");
                this.setAttribute("class", cl);
            }
            return this;
        };
        JSContainer.prototype.addChild = function (child, layoutData) {
            if (((child != null && child instanceof framework.JSContainer) || child === null) && layoutData === undefined) {
                return this.addChild$framework_JSContainer(child);
            }
            else
                throw new Error('invalid overload');
        };
        JSContainer.prototype.addChild$framework_JSContainer = function (container) {
            container.parent = this;
            this.children.add(container);
            return this;
        };
        /**
         *
         * @param {number} index
         * @param {framework.JSContainer} child
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addChildAt = function (index, child) {
            child.parent = this;
            this.children.add(index, child);
            return this;
        };
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setVisible = function (b) {
            if (!b) {
                this.setStyle("display", "none");
            }
            else {
                this.styles.remove("display");
                this.setRendered(false);
            }
            return this;
        };
        /**
         *
         * @param {*} listener
         * @param {string} type
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addEventListener = function (listener, type) {
            if (!this.listeners.containsKey(type)) {
                this.listeners.put(type, (new java.util.ArrayList()));
            }
            if (!this.listeners.get(type).contains(listener)) {
                this.listeners.get(type).add(listener);
            }
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getTag = function () {
            return this.tag;
        };
        /**
         *
         * @param {string} tag
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setTag = function (tag) {
            this.tag = tag;
            return this;
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setStyle = function (key, value) {
            this.changedStyles.add(key);
            this.styles.put(key, value);
            return this;
        };
        /**
         *
         * @param {string} key
         * @return {string}
         */
        JSContainer.prototype.getStyle = function (key) {
            return this.styles.get(key);
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setAttribute = function (key, value) {
            this.changedAttributes.add(key);
            this.attributes.put(key, value);
            return this;
        };
        JSContainer.prototype.exec$java_lang_String$jsweet_lang_Object = function (name, parameter) {
            this.commands.add(new JSContainer.JSCommand(this, name, JSON.stringify(parameter)));
        };
        /**
         *
         * @param {string} name
         * @param {Object} parameter
         */
        JSContainer.prototype.exec = function (name, parameter) {
            if (((typeof name === 'string') || name === null) && ((parameter != null && parameter instanceof Object) || parameter === null)) {
                return this.exec$java_lang_String$jsweet_lang_Object(name, parameter);
            }
            else if (((typeof name === 'string') || name === null) && ((typeof parameter === 'string') || parameter === null)) {
                return this.exec$java_lang_String$java_lang_String(name, parameter);
            }
            else if (((typeof name === 'string') || name === null) && parameter === undefined) {
                return this.exec$java_lang_String(name);
            }
            else
                throw new Error('invalid overload');
        };
        JSContainer.prototype.exec$java_lang_String$java_lang_String = function (name, variable) {
            this.commands.add(new JSContainer.JSCommand(this, name, variable));
        };
        JSContainer.prototype.exec$java_lang_String = function (name) {
            this.exec$java_lang_String$java_lang_String(name, null);
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getCommands = function () {
            return this.commands;
        };
        /**
         *
         * @param {string} key
         * @return {string}
         */
        JSContainer.prototype.getAttribute = function (key) {
            return this.attributes.get(key);
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getName = function () {
            return this.name;
        };
        /**
         *
         * @param {string} name
         */
        JSContainer.prototype.setName = function (name) {
            this.name = name;
        };
        /**
         *
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getParent = function () {
            return this.parent;
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getChildren = function () {
            return this.children;
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getStyleNames = function () {
            return this.styles.keySet();
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getAttributeNames = function () {
            return this.attributes.keySet();
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getHtml = function () {
            return this.html;
        };
        /**
         *
         * @param {string} h
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setHtml = function (h) {
            this.html = h;
            this.setRendered(false);
            return this;
        };
        /**
         *
         * @return {boolean}
         */
        JSContainer.prototype.isRendered = function () {
            return this.rendered;
        };
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setRendered = function (b) {
            this.rendered = b;
            if (!b) {
                for (var index166 = this.children.iterator(); index166.hasNext();) {
                    var child = index166.next();
                    {
                        child.setRendered(b);
                    }
                }
            }
            return this;
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getListeners = function () {
            return this.listeners;
        };
        JSContainer.prototype.render$ = function () {
            this.render$jsweet_dom_HTMLElement(null);
        };
        JSContainer.prototype.render$jsweet_dom_HTMLElement = function (parent) {
            if (this.renderers.isEmpty()) {
                this.renderers.add(JSContainer.DEFAULT_RENDERER_$LI$());
            }
            if (!this.renderers.contains(JSContainer.DEFAULT_RENDERER_$LI$())) {
                this.renderers.add(0, JSContainer.DEFAULT_RENDERER_$LI$());
            }
            for (var index167 = this.renderers.iterator(); index167.hasNext();) {
                var renderer_1 = index167.next();
                renderer_1.doRender(this, parent);
            }
            for (var index168 = this.getChildren().iterator(); index168.hasNext();) {
                var child = index168.next();
                {
                    child.render();
                }
            }
            this.rendered = true;
        };
        /**
         *
         * @param {HTMLElement} parent
         */
        JSContainer.prototype.render = function (parent) {
            if (((parent != null && parent instanceof HTMLElement) || parent === null)) {
                return this.render$jsweet_dom_HTMLElement(parent);
            }
            else if (parent === undefined) {
                return this.render$();
            }
            else
                throw new Error('invalid overload');
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getData = function () {
            return this.data;
        };
        /**
         *
         * @param {*} data
         */
        JSContainer.prototype.setData = function (data) {
            this.data = data;
        };
        JSContainer.prototype.getAncestorWithClass = function (cls) {
            if (this.parent == null) {
                return null;
            }
            {
                var array170 = this.parent.getAttribute("class").split(" ");
                for (var index169 = 0; index169 < array170.length; index169++) {
                    var s = array170[index169];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(s.trim(), cls))
                            return this.parent;
                    }
                }
            }
            return (this.parent.getAncestorWithClass(cls));
        };
        /**
         *
         * @param {string} id
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getAncestorById = function (id) {
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getId(), id))
                return this;
            if (this.parent == null) {
                return null;
            }
            return this.parent.getAncestorById(id);
        };
        /**
         *
         * @param {string} name
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getAncestorByName = function (name) {
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getName(), name))
                return this;
            if (this.parent == null) {
                return null;
            }
            return this.parent.getAncestorByName(name);
        };
        /**
         *
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getRoot = function () {
            if (this.parent == null) {
                return this;
            }
            else {
                return this.parent.getRoot();
            }
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        JSContainer.prototype.setParameter = function (key, value) {
        };
        /**
         *
         * @return {framework.builder.model.Component}
         */
        JSContainer.prototype.getComponent = function () {
            return this.component;
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getParameters = function () {
            return null;
        };
        return JSContainer;
    }());
    framework.JSContainer = JSContainer;
    JSContainer["__class"] = "framework.JSContainer";
    JSContainer["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    (function (JSContainer) {
        var JSCommand = (function () {
            function JSCommand(__parent, name, vari) {
                this.__parent = __parent;
                this.name = null;
                this.parameters = null;
                this.variable = null;
                __parent.name = name;
                this.variable = vari;
            }
            JSCommand.prototype.getVariable = function () {
                return this.variable;
            };
            JSCommand.prototype.getName = function () {
                return this.__parent.name;
            };
            JSCommand.prototype.setName = function (name) {
                this.__parent.name = name;
            };
            JSCommand.prototype.getParameters = function () {
                return this.parameters;
            };
            JSCommand.prototype.setParameters = function (parameters) {
                this.parameters = parameters;
            };
            return JSCommand;
        }());
        JSContainer.JSCommand = JSCommand;
        JSCommand["__class"] = "framework.JSContainer.JSCommand";
    })(JSContainer = framework.JSContainer || (framework.JSContainer = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Component = (function (_super) {
            __extends(Component, _super);
            function Component(name, initial, label, factory) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.titleFigure = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");
                /*private*/ _this.avatar = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large");
                /*private*/ _this.initial = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");
                /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-app-launcher__title-label");
                _this.addClass("slds-app-launcher__tile");
                _this.addChild$framework_JSContainer(_this.titleFigure);
                _this.titleFigure.addChild$framework_JSContainer(_this.avatar);
                _this.avatar.addChild$framework_JSContainer(_this.initial);
                _this.initial.setAttribute("title", label);
                _this.initial.setHtml(initial);
                _this.titleFigure.addChild$framework_JSContainer(_this.title);
                _this.title.setHtml(label);
                return _this;
            }
            /**
             *
             * @return {*}
             */
            Component.prototype.getDraggableOptions = function () {
                var opts = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                opts.appendTo = "body";
                opts.revert = true;
                opts.zIndex = 1000;
                opts.helper = "clone";
                return opts;
            };
            return Component;
        }(framework.JSContainer));
        builder.Component = Component;
        Component["__class"] = "framework.builder.Component";
        Component["__interfaces"] = ["framework.interactions.Draggable", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var JSCheckBox = (function (_super) {
        __extends(JSCheckBox, _super);
        function JSCheckBox(name) {
            var _this = _super.call(this, name, "input") || this;
            _this.setAttribute("type", framework.InputTypes.checkbox);
            return _this;
        }
        JSCheckBox.prototype.setDisabled = function (b) {
            if (b) {
                this.setAttribute("disabled", "true");
            }
            else {
                this.setAttribute("disabled", null);
            }
            return this;
        };
        /**
         *
         * @return {boolean}
         */
        JSCheckBox.prototype.getValue = function () {
            if (this.getAttribute("value") != null && (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })("true", this.getAttribute("value"))) {
                return true;
            }
            return false;
        };
        JSCheckBox.prototype.setValue$java_lang_Boolean = function (b) {
            if (b) {
                this.setAttribute("value", "true");
                this.setAttribute("checked", "true");
            }
            else {
                this.setAttribute("value", "false");
                this.setAttribute("checked", null);
            }
        };
        /**
         *
         * @param {boolean} b
         */
        JSCheckBox.prototype.setValue = function (b) {
            if (((typeof b === 'boolean') || b === null)) {
                return this.setValue$java_lang_Boolean(b);
            }
            else
                throw new Error('invalid overload');
        };
        /**
         *
         * @param {string} value
         */
        JSCheckBox.prototype.setRawValue = function (value) {
            this.setAttribute("value", value);
        };
        JSCheckBox.prototype.isChecked = function () {
            return this.getValue();
        };
        JSCheckBox.prototype.setChecked = function (b) {
            this.setValue$java_lang_Boolean(b);
        };
        return JSCheckBox;
    }(framework.JSContainer));
    framework.JSCheckBox = JSCheckBox;
    JSCheckBox["__class"] = "framework.JSCheckBox";
    JSCheckBox["__interfaces"] = ["framework.configs.Designable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSInput = (function (_super) {
        __extends(JSInput, _super);
        function JSInput(name) {
            var _this = _super.call(this, name, "input") || this;
            _this.setType(framework.InputTypes.text);
            return _this;
        }
        JSInput.prototype.setType = function (type) {
            this.setAttribute("type", type.toString());
            return this;
        };
        JSInput.prototype.setDisabled = function (b) {
            if (b) {
                this.setAttribute("disabled", "true");
            }
            else {
                this.setAttribute("disabled", null);
            }
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSInput.prototype.getValue = function () {
            return this.getAttribute("value");
        };
        JSInput.prototype.setValue$java_lang_String = function (val) {
            this.setAttribute("value", val);
        };
        /**
         *
         * @param {string} val
         */
        JSInput.prototype.setValue = function (val) {
            if (((typeof val === 'string') || val === null)) {
                return this.setValue$java_lang_String(val);
            }
            else
                throw new Error('invalid overload');
        };
        /**
         *
         * @param {string} value
         */
        JSInput.prototype.setRawValue = function (value) {
            this.setAttribute("value", value);
        };
        return JSInput;
    }(framework.JSContainer));
    framework.JSInput = JSInput;
    JSInput["__class"] = "framework.JSInput";
    JSInput["__interfaces"] = ["framework.configs.Designable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSOption = (function (_super) {
        __extends(JSOption, _super);
        function JSOption(text, value) {
            var _this = _super.call(this, "option") || this;
            _this.setAttribute("value", value);
            _this.setHtml(text);
            return _this;
        }
        JSOption.prototype.getValue = function () {
            return this.getAttribute("value");
        };
        JSOption.prototype.setValue = function (value) {
            this.setAttribute("value", value);
        };
        JSOption.prototype.getText = function () {
            return this.getHtml();
        };
        JSOption.prototype.setText = function (label) {
            this.setHtml(label);
        };
        JSOption.prototype.setSelected = function (b) {
            if (b) {
                this.setAttribute("selected", "true");
            }
            else {
                this.setAttribute("selected", null);
            }
        };
        return JSOption;
    }(framework.JSContainer));
    framework.JSOption = JSOption;
    JSOption["__class"] = "framework.JSOption";
    JSOption["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSSelect = (function (_super) {
        __extends(JSSelect, _super);
        function JSSelect(name) {
            return _super.call(this, name, "select") || this;
        }
        JSSelect.prototype.addOption = function (option) {
            this.addChild$framework_JSContainer(option);
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSSelect.prototype.getValue = function () {
            var val = this.getAttribute("value");
            for (var index171 = this.getChildren().iterator(); index171.hasNext();) {
                var opt = index171.next();
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(opt.getAttribute("value"), val)) {
                        return opt.getValue();
                    }
                }
            }
            return null;
        };
        JSSelect.prototype.setValue$java_lang_String = function (val) {
            for (var index172 = this.getChildren().iterator(); index172.hasNext();) {
                var opt = index172.next();
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(opt.getAttribute("value"), val)) {
                        opt.setSelected(true);
                    }
                }
            }
        };
        /**
         *
         * @param {string} val
         */
        JSSelect.prototype.setValue = function (val) {
            if (((typeof val === 'string') || val === null)) {
                return this.setValue$java_lang_String(val);
            }
            else
                throw new Error('invalid overload');
        };
        /**
         *
         * @param {string} value
         */
        JSSelect.prototype.setRawValue = function (value) {
            this.setAttribute("value", value);
        };
        return JSSelect;
    }(framework.JSContainer));
    framework.JSSelect = JSSelect;
    JSSelect["__class"] = "framework.JSSelect";
    JSSelect["__interfaces"] = ["framework.configs.Designable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSTextArea = (function (_super) {
        __extends(JSTextArea, _super);
        function JSTextArea(name) {
            return _super.call(this, name, "textarea") || this;
        }
        JSTextArea.prototype.setDisabled = function (b) {
            if (b) {
                this.setAttribute("disabled", "true");
            }
            else {
                this.setAttribute("disabled", null);
            }
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSTextArea.prototype.getValue = function () {
            return this.getAttribute("value");
        };
        JSTextArea.prototype.setValue$java_lang_String = function (val) {
            this.setAttribute("value", val);
        };
        /**
         *
         * @param {string} val
         */
        JSTextArea.prototype.setValue = function (val) {
            if (((typeof val === 'string') || val === null)) {
                return this.setValue$java_lang_String(val);
            }
            else
                throw new Error('invalid overload');
        };
        /**
         *
         * @param {string} value
         */
        JSTextArea.prototype.setRawValue = function (value) {
            this.setAttribute("value", value);
        };
        return JSTextArea;
    }(framework.JSContainer));
    framework.JSTextArea = JSTextArea;
    JSTextArea["__class"] = "framework.JSTextArea";
    JSTextArea["__interfaces"] = ["framework.configs.Designable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Accordion = (function (_super) {
            __extends(Accordion, _super);
            function Accordion(name) {
                return _super.call(this, name, "ul") || this;
            }
            return Accordion;
        }(framework.JSContainer));
        lightning.Accordion = Accordion;
        Accordion["__class"] = "framework.lightning.Accordion";
        Accordion["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        (function (Accordion) {
            var JSAccordionItem = (function (_super) {
                __extends(JSAccordionItem, _super);
                function JSAccordionItem(__parent, name) {
                    var _this = _super.call(this, name, "li") || this;
                    _this.__parent = __parent;
                    _this.accordionSection = new framework.JSContainer("section").addClass("slds-accordion__section");
                    _this.accordionSummary = new framework.JSContainer("div").addClass("slds-accordion__summary");
                    _this.accordionSummaryHeading = new framework.JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");
                    _this.addClass("slds-accordion__list-item");
                    _this.addChild$framework_JSContainer(_this.accordionSection);
                    _this.accordionSection.addChild$framework_JSContainer(_this.accordionSummary);
                    _this.accordionSummary.addChild$framework_JSContainer(_this.accordionSummaryHeading);
                    return _this;
                }
                return JSAccordionItem;
            }(framework.JSContainer));
            Accordion.JSAccordionItem = JSAccordionItem;
            JSAccordionItem["__class"] = "framework.lightning.Accordion.JSAccordionItem";
            JSAccordionItem["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        })(Accordion = lightning.Accordion || (lightning.Accordion = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Avatar = (function (_super) {
            __extends(Avatar, _super);
            function Avatar(name) {
                var _this = _super.call(this, "span") || this;
                /*private*/ _this.image = new framework.JSContainer("img");
                _this.addClass("slds-avatar");
                _this.addChild$framework_JSContainer(_this.image);
                return _this;
            }
            Avatar.prototype.getImage = function () {
                return this.image;
            };
            Avatar.prototype.setSize = function (size) {
                this.removeClass(Avatar.LARGE).removeClass(Avatar.MEDIUM).removeClass(Avatar.SMALL).removeClass(Avatar.X_SMALL);
                this.addClass(size);
                return this;
            };
            Avatar.prototype.setCircle = function (b) {
                if (b) {
                    this.addClass("slds-avatar_circle");
                }
                else {
                    this.removeClass("slds-avatar_circle");
                }
                return this;
            };
            return Avatar;
        }(framework.JSContainer));
        Avatar.SMALL = "slds-avatar_small";
        Avatar.X_SMALL = "slds-avatar_x-small";
        Avatar.MEDIUM = "slds-avatar_medium";
        Avatar.LARGE = "slds-avatar_large";
        lightning.Avatar = Avatar;
        Avatar["__class"] = "framework.lightning.Avatar";
        Avatar["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Badge = (function (_super) {
            __extends(Badge, _super);
            function Badge(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.addClass("slds-badge");
                return _this;
            }
            return Badge;
        }(framework.JSContainer));
        lightning.Badge = Badge;
        Badge["__class"] = "framework.lightning.Badge";
        Badge["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Box = (function (_super) {
            __extends(Box, _super);
            function Box(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.addClass("slds-box");
                return _this;
            }
            Box.prototype.setSize = function (size) {
                return this.removeClass(Box.DEFAULT).removeClass(Box.SMALL).removeClass(Box.XX_SMALL).removeClass(Box.X_SMALL).addClass(size);
            };
            return Box;
        }(framework.JSContainer));
        Box.DEFAULT = "";
        Box.SMALL = "slds-box_small";
        Box.X_SMALL = "slds-box_x-small";
        Box.XX_SMALL = "slds-box_xx-small";
        lightning.Box = Box;
        Box["__class"] = "framework.lightning.Box";
        Box["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var BreadcrumbItem = (function (_super) {
            __extends(BreadcrumbItem, _super);
            function BreadcrumbItem(name) {
                var _this = _super.call(this, "li") || this;
                _this.addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
                return _this;
            }
            return BreadcrumbItem;
        }(framework.JSContainer));
        lightning.BreadcrumbItem = BreadcrumbItem;
        BreadcrumbItem["__class"] = "framework.lightning.BreadcrumbItem";
        BreadcrumbItem["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Breadcrumbs = (function (_super) {
            __extends(Breadcrumbs, _super);
            function Breadcrumbs(name) {
                var _this = _super.call(this, name, "nav") || this;
                /*private*/ _this.breadcrumb = new framework.lightning.HorizontalList("breadcrumb");
                _this.setAttribute("role", "navigation");
                _this.setAttribute("aria-label", "Breadcrumbs");
                _this.breadcrumb.setTag("ol");
                _this.breadcrumb.addClass("slds-wrap");
                _this.addChild$framework_JSContainer(_this.breadcrumb);
                return _this;
            }
            Breadcrumbs.prototype.addItem$java_lang_String$java_lang_String = function (name, label) {
                var item = new framework.lightning.BreadcrumbItem("");
                var link = new framework.JSContainer(name, "a");
                link.setAttribute("href", "javascript:void(0);");
                link.setHtml(label);
                item.addChild$framework_JSContainer(link);
                this.breadcrumb.addChild$framework_JSContainer(item);
                return this;
            };
            Breadcrumbs.prototype.addItem = function (name, label) {
                if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null)) {
                    return this.addItem$java_lang_String$java_lang_String(name, label);
                }
                else if (((name != null && name instanceof framework.JSContainer) || name === null) && label === undefined) {
                    return this.addItem$framework_JSContainer(name);
                }
                else
                    throw new Error('invalid overload');
            };
            Breadcrumbs.prototype.addItem$framework_JSContainer = function (link) {
                var item = new framework.lightning.BreadcrumbItem("");
                this.breadcrumb.addChild$framework_JSContainer(item);
                return this;
            };
            return Breadcrumbs;
        }(framework.JSContainer));
        lightning.Breadcrumbs = Breadcrumbs;
        Breadcrumbs["__class"] = "framework.lightning.Breadcrumbs";
        Breadcrumbs["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(name) {
                var _this = this;
                if (((typeof name === 'string') || name === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "button") || this;
                    _this.__framework_lightning_Button_component = new framework.builder.model.Component();
                    (function () {
                        _this.addClass("slds-button");
                    })();
                }
                else if (name === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_1 = Array.prototype.slice.call(arguments);
                        var name_2 = "Button";
                        _this = _super.call(this, name_2, "button") || this;
                        _this.__framework_lightning_Button_component = new framework.builder.model.Component();
                        (function () {
                            _this.addClass("slds-button");
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Button.states_$LI$ = function () { if (Button.states == null)
                Button.states = ["neutral", "brand", "destructive", "success"]; return Button.states; };
            ;
            Button.stateLabels_$LI$ = function () { if (Button.stateLabels == null)
                Button.stateLabels = ["Neutral", "Brand", "Destructive", "Success"]; return Button.stateLabels; };
            ;
            Button.prototype.addIcon = function (icon) {
                this.addClass("slds-button_icon");
                this.addChild$framework_JSContainer(icon);
                return this;
            };
            Button.prototype.setLabel = function (label) {
                this.setHtml(label);
                return this;
            };
            Button.prototype.setState = function (state) {
                for (var index173 = 0; index173 < Button.states_$LI$().length; index173++) {
                    var s = Button.states_$LI$()[index173];
                    {
                        this.removeClass("slds-button_" + s);
                    }
                }
                this.addClass("slds-button_" + state);
                return this;
            };
            Button.prototype.setInverse = function (b) {
                if (b) {
                    this.addClass("slds-button_inverse");
                }
                else {
                    this.removeClass("slds-button_inverse");
                }
                return this;
            };
            Button.prototype.setDisabled = function (b) {
                if (b) {
                    this.addClass("slds-button_disabled");
                }
                else {
                    this.removeClass("slds-button_disabled");
                }
                return this;
            };
            Button.prototype.setStateful = function (b) {
                if (b) {
                    this.addClass("slds-button_stateful");
                }
                else {
                    this.removeClass("slds-button_stateful");
                }
                return this;
            };
            Button.prototype.setParameter = function (key, value) {
                this.__framework_lightning_Button_component.parameters[key] = value;
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "state")) {
                    this.setState(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "stateful")) {
                    this.setStateful(javaemul.internal.BooleanHelper.parseBoolean(value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "disabled")) {
                    this.setDisabled(javaemul.internal.BooleanHelper.parseBoolean(value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "inverse")) {
                    this.setInverse(javaemul.internal.BooleanHelper.parseBoolean(value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "label")) {
                    this.setLabel(value);
                }
                else {
                    throw new java.lang.RuntimeException("Unknow parameter key:" + value + " Class: framework.lightning.Button");
                }
            };
            Button.prototype.getParameters = function () {
                var result = (new java.util.ArrayList());
                result.add(this.createParameter("label", "Label", "String"));
                result.add(this.createParameter("stateful", "Stateful", "Boolean"));
                result.add(this.createParameter("disabled", "Disabled", "Boolean"));
                result.add(this.createParameter("inverse", "Inverse", "Boolean"));
                var paramstates = this.createParameter("state", "State", "select");
                for (var i = 0; i < Button.stateLabels_$LI$().length; i++) {
                    var opt = new framework.configs.Option();
                    opt.text = Button.stateLabels_$LI$()[i];
                    opt.value = Button.states_$LI$()[i];
                    paramstates.options.add(opt);
                }
                ;
                result.add(paramstates);
                return result;
            };
            /*private*/ Button.prototype.createParameter = function (name, label, type) {
                var p = new framework.configs.Parameter();
                p.name = name;
                p.type = type;
                p.label = label;
                return p;
            };
            /**
             *
             * @return {framework.builder.model.Component}
             */
            Button.prototype.getComponent = function () {
                return this.__framework_lightning_Button_component;
            };
            return Button;
        }(framework.JSContainer));
        Button.STATE_NEUTRAL = "neutral";
        Button.STATE_BRAND = "brand";
        Button.STATE_DESTRUCTIVE = "destructive";
        Button.STATE_SUCCESS = "success";
        lightning.Button = Button;
        Button["__class"] = "framework.lightning.Button";
        Button["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ButtonGroup = (function (_super) {
            __extends(ButtonGroup, _super);
            function ButtonGroup(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-button-group");
                return _this;
            }
            ButtonGroup.prototype.addButton$framework_lightning_Button = function (btn) {
                return this.addElement(btn, false);
            };
            ButtonGroup.prototype.addButton$framework_lightning_Button$boolean = function (btn, isLast) {
                return this.addElement(btn, isLast);
            };
            ButtonGroup.prototype.addButton = function (btn, isLast) {
                if (((btn != null && btn instanceof framework.lightning.Button) || btn === null) && ((typeof isLast === 'boolean') || isLast === null)) {
                    return this.addButton$framework_lightning_Button$boolean(btn, isLast);
                }
                else if (((btn != null && btn instanceof framework.lightning.IconButton) || btn === null) && ((typeof isLast === 'boolean') || isLast === null)) {
                    return this.addButton$framework_lightning_IconButton$boolean(btn, isLast);
                }
                else if (((btn != null && btn instanceof framework.lightning.Button) || btn === null) && isLast === undefined) {
                    return this.addButton$framework_lightning_Button(btn);
                }
                else if (((btn != null && btn instanceof framework.lightning.IconButton) || btn === null) && isLast === undefined) {
                    return this.addButton$framework_lightning_IconButton(btn);
                }
                else
                    throw new Error('invalid overload');
            };
            ButtonGroup.prototype.addButton$framework_lightning_IconButton = function (btn) {
                return this.addElement(btn, false);
            };
            ButtonGroup.prototype.addButton$framework_lightning_IconButton$boolean = function (btn, isLast) {
                return this.addElement(btn, isLast);
            };
            ButtonGroup.prototype.addElement = function (c, isLast) {
                if (isLast) {
                    c.addClass("slds-button_last");
                }
                else {
                    c.removeClass("slds-button_last");
                }
                this.addChild$framework_JSContainer(c);
                return this;
            };
            return ButtonGroup;
        }(framework.JSContainer));
        lightning.ButtonGroup = ButtonGroup;
        ButtonGroup["__class"] = "framework.lightning.ButtonGroup";
        ButtonGroup["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Card = (function (_super) {
            __extends(Card, _super);
            function Card(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                /*private*/ _this.header = new framework.lightning.Grid("header", "div");
                /*private*/ _this.headerMedia = new framework.lightning.Media("headerMedia");
                /*private*/ _this.body = new framework.JSContainer("div").addClass("slds-card__body");
                /*private*/ _this.footer = new framework.JSContainer("footer").addClass("slds-card__footer");
                _this.addClass("slds-card");
                _this.header.addClass("slds-card__header");
                _this.header.addChild$framework_JSContainer(_this.headerMedia);
                _this.addChild$framework_JSContainer(_this.header);
                _this.addChild$framework_JSContainer(_this.body);
                _this.addChild$framework_JSContainer(_this.footer);
                return _this;
            }
            Card.prototype.getHeader = function () {
                return this.header;
            };
            Card.prototype.getHeaderMedia = function () {
                return this.headerMedia;
            };
            Card.prototype.getBody = function () {
                return this.body;
            };
            Card.prototype.getFooter = function () {
                return this.footer;
            };
            return Card;
        }(framework.JSContainer));
        lightning.Card = Card;
        Card["__class"] = "framework.lightning.Card";
        Card["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var CheckBox = (function (_super) {
            __extends(CheckBox, _super);
            function CheckBox(name) {
                var _this = _super.call(this, name, "span") || this;
                /*private*/ _this.checkbox = new framework.JSCheckBox("checkbox");
                /*private*/ _this.checkboxLabel = new framework.JSContainer("checkboxLabel", "label");
                /*private*/ _this.label = new framework.JSContainer("span").addClass("slds-form-element__label");
                _this.addClass("slds-checkbox");
                _this.addChild$framework_JSContainer(_this.checkbox);
                _this.checkbox.addClass("slds-assistive-text");
                _this.checkboxLabel.addClass("slds-checkbox__label");
                _this.addChild$framework_JSContainer(_this.checkboxLabel);
                _this.checkboxLabel.addChild$framework_JSContainer(new framework.JSContainer("div").addClass("slds-checkbox_faux"));
                _this.checkboxLabel.addChild$framework_JSContainer(_this.label);
                _this.addEventListener(_this, "click");
                return _this;
            }
            CheckBox.prototype.setLabel = function (label) {
                this.label.setHtml(label);
                return this;
            };
            /**
             *
             * @return {boolean}
             */
            CheckBox.prototype.getValue = function () {
                return this.getAttribute("checked") != null;
            };
            CheckBox.prototype.setValue$java_lang_Boolean = function (val) {
                this.checkbox.setValue$java_lang_Boolean(val);
            };
            /**
             *
             * @param {boolean} val
             */
            CheckBox.prototype.setValue = function (val) {
                if (((typeof val === 'boolean') || val === null)) {
                    return this.setValue$java_lang_Boolean(val);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @param {string} value
             */
            CheckBox.prototype.setRawValue = function (value) {
            };
            CheckBox.prototype.toggle = function () {
                this.checkbox.setValue$java_lang_Boolean(!this.checkbox.getValue());
            };
            /**
             *
             * @param {*} listener
             * @param {string} type
             * @return {framework.JSContainer}
             */
            CheckBox.prototype.addEventListener = function (listener, type) {
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "change")) {
                    type = "click";
                }
                return _super.prototype.addEventListener.call(this, listener, type);
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            CheckBox.prototype.performAction = function (source, evt) {
                this.toggle();
            };
            return CheckBox;
        }(framework.JSContainer));
        lightning.CheckBox = CheckBox;
        CheckBox["__class"] = "framework.lightning.CheckBox";
        CheckBox["__interfaces"] = ["framework.EventListener", "framework.configs.Designable", "framework.InputField", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var CheckBoxButtonGroup = (function (_super) {
            __extends(CheckBoxButtonGroup, _super);
            function CheckBoxButtonGroup(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-checkbox_button-group");
                return _this;
            }
            CheckBoxButtonGroup.prototype.addCheckBoxButton = function (btn) {
                btn.setAttribute("class", "slds-button slds-checkbox_button");
                this.addChild$framework_JSContainer(btn);
                return this;
            };
            return CheckBoxButtonGroup;
        }(framework.JSContainer));
        lightning.CheckBoxButtonGroup = CheckBoxButtonGroup;
        CheckBoxButtonGroup["__class"] = "framework.lightning.CheckBoxButtonGroup";
        CheckBoxButtonGroup["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DockedComposerContainer = (function (_super) {
            __extends(DockedComposerContainer, _super);
            function DockedComposerContainer(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-docked_container");
                return _this;
            }
            return DockedComposerContainer;
        }(framework.JSContainer));
        lightning.DockedComposerContainer = DockedComposerContainer;
        DockedComposerContainer["__class"] = "framework.lightning.DockedComposerContainer";
        DockedComposerContainer["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var FormElement = (function (_super) {
            __extends(FormElement, _super);
            function FormElement(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                /*private*/ _this.label = new framework.JSContainer("label", "label").addClass("slds-form-element__label");
                /*private*/ _this.control = new framework.JSContainer("div").addClass("slds-form-element__control");
                _this.addClass("slds-form-element");
                _this.addChild$framework_JSContainer(_this.label);
                _this.addChild$framework_JSContainer(_this.control);
                return _this;
            }
            FormElement.prototype.setLabel = function (label) {
                this.label.setHtml(label);
                return this;
            };
            FormElement.prototype.setInput = function (input) {
                this.control.addChild$framework_JSContainer(input);
                return this;
            };
            FormElement.prototype.getControl = function () {
                return this.control;
            };
            return FormElement;
        }(framework.JSContainer));
        lightning.FormElement = FormElement;
        FormElement["__class"] = "framework.lightning.FormElement";
        FormElement["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Grid = (function (_super) {
            __extends(Grid, _super);
            function Grid(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.addClass("slds-grid");
                return _this;
            }
            Grid.prototype.toggleClass = function (cls, b) {
                if (b) {
                    this.addClass(cls);
                }
                else {
                    this.removeClass(cls);
                }
                return this;
            };
            Grid.prototype.setFrame = function (b) {
                return this.toggleClass("slds-grid_frame", b);
            };
            Grid.prototype.setVertical = function (b) {
                return this.toggleClass("slds-grid_vertical", b);
            };
            Grid.prototype.setVerticalReverse = function (b) {
                return this.toggleClass("slds-grid_vertical-reverse", b);
            };
            Grid.prototype.setReverse = function (b) {
                return this.toggleClass("slds-grid_reverse", b);
            };
            Grid.prototype.setPullPadded = function (b) {
                return this.toggleClass("slds-grid_pull-padded", b);
            };
            Grid.prototype.setPullPaddedSize = function (size) {
                this.removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
                return this;
            };
            Grid.prototype.setAlignCenter = function (b) {
                return this.toggleClass("slds-grid_align-center", b);
            };
            Grid.prototype.setAlignSpace = function (b) {
                return this.toggleClass("slds-grid_align-space", b);
            };
            Grid.prototype.setAlignSpead = function (b) {
                return this.toggleClass("slds-grid_align-spread", b);
            };
            Grid.prototype.setAlignEnd = function (b) {
                return this.toggleClass("slds-grid_align-end", b);
            };
            Grid.prototype.setVerticalAlignStart = function (b) {
                return this.toggleClass("slds-grid_vertical-align-start", b);
            };
            Grid.prototype.setVerticalAlignCenter = function (b) {
                return this.toggleClass("slds-grid_vertical-align-center", b);
            };
            Grid.prototype.setVerticalAlignEnd = function (b) {
                return this.toggleClass("slds-grid_vertical-align-end", b);
            };
            Grid.prototype.setVerticalStretch = function (b) {
                return this.toggleClass("slds-grid_vertical-stretch", b);
            };
            Grid.prototype.setNoWrap = function (b) {
                this.toggleClass("slds-nowrap", b);
                return this.toggleClass("slds-wrap", !b);
            };
            Grid.prototype.setWrap = function (b) {
                this.toggleClass("slds-wrap", b);
                return this.toggleClass("slds-nowrap", !b);
            };
            return Grid;
        }(framework.JSContainer));
        Grid.PULL_PADDED_XXX_SMALL = "";
        Grid.PULL_PADDED_XX_SMALL = "";
        Grid.PULL_PADDED_X_SMALL = "";
        Grid.PULL_PADDED_SMALL = "";
        Grid.PULL_PADDED_MEDIUM = "";
        Grid.PULL_PADDED_LARGE = "";
        lightning.Grid = Grid;
        Grid["__class"] = "framework.lightning.Grid";
        Grid["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var HorizontalList = (function (_super) {
            __extends(HorizontalList, _super);
            function HorizontalList(name) {
                var _this = _super.call(this, name, "ul") || this;
                _this.addClass("slds-list_horizontal");
                return _this;
            }
            return HorizontalList;
        }(framework.JSContainer));
        lightning.HorizontalList = HorizontalList;
        HorizontalList["__class"] = "framework.lightning.HorizontalList";
        HorizontalList["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Icon = (function (_super) {
            __extends(Icon, _super);
            function Icon(name, type, iconName) {
                var _this = this;
                if (((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null) && ((typeof iconName === 'string') || iconName === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "div") || this;
                    _this.assetsUrl = "/lightning/assets/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    (function () {
                        _this.type = type;
                        _this.iconName = iconName;
                        _this.refresh();
                    })();
                }
                else if (((typeof name === 'string') || name === null) && type === undefined && iconName === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "div") || this;
                    _this.assetsUrl = "/lightning/assets/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    (function () {
                        _this.refresh();
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Icon.prototype.refresh = function () {
                var html = "<svg class=\'slds-button__icon\'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/lightning/2.3.2/assets/icons/utility-sprite/svg/symbols.svg#settings\"></use></svg>";
                this.setHtml(html);
            };
            Icon.prototype.getAssetsUrl = function () {
                return this.assetsUrl;
            };
            Icon.prototype.setAssetsUrl = function (assetsUrl) {
                this.assetsUrl = assetsUrl;
                this.refresh();
            };
            Icon.prototype.getType = function () {
                return this.type;
            };
            Icon.prototype.setType = function (type) {
                this.type = type;
                this.refresh();
            };
            Icon.prototype.getIconName = function () {
                return this.iconName;
            };
            Icon.prototype.setIconName = function (name) {
                this.iconName = name;
                this.refresh();
            };
            Icon.prototype.setSize = function (size) {
                this.removeClass(Icon.EXTRA_EXTRA_SMALL).removeClass(Icon.EXTRA_SMALL).removeClass(Icon.LARGE).removeClass(Icon.SMALL);
                this.addClass(size);
                return this;
            };
            Icon.prototype.setTextType = function (type) {
                this.removeClass(Icon.TEXT_DEFAULT).removeClass(Icon.TEXT_ERROR).removeClass(Icon.TEXT_LIGHT).removeClass(Icon.TEXT_WARNING).addClass(type);
                return this;
            };
            return Icon;
        }(framework.JSContainer));
        Icon.SMALL = "slds-button_icon_small";
        Icon.EXTRA_SMALL = "slds-_icon_x-small";
        Icon.EXTRA_EXTRA_SMALL = "slds-button_icon_xx-small";
        Icon.LARGE = "slds-button_icon_large";
        Icon.TEXT_DEFAULT = "slds-icon-text-default";
        Icon.TEXT_WARNING = "slds-icon-text-warning";
        Icon.TEXT_ERROR = "slds-icon-text-error";
        Icon.TEXT_LIGHT = "slds-icon-text-light";
        lightning.Icon = Icon;
        Icon["__class"] = "framework.lightning.Icon";
        Icon["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var IconButton = (function (_super) {
            __extends(IconButton, _super);
            function IconButton(name) {
                var _this = _super.call(this, name, "button") || this;
                /*private*/ _this.icon = new framework.lightning.Icon("icon");
                _this.addChild$framework_JSContainer(_this.icon.addClass("slds-button__icon"));
                _this.addClass("slds-button").addClass("slds-button_icon");
                return _this;
            }
            IconButton.prototype.setIcon = function (icon) {
                this.getChildren().remove(this.icon);
                this.icon = icon;
                icon.addClass("slds-button__icon");
                this.addChild$framework_JSContainer(icon);
                this.setRendered(false);
                return this;
            };
            IconButton.prototype.toggleClass = function (cls, b) {
                if (b) {
                    this.addClass(cls);
                }
                else {
                    this.removeClass(cls);
                }
                return this;
            };
            IconButton.prototype.setContainer = function (b) {
                return this.toggleClass("slds-button_icon-container", b);
            };
            IconButton.prototype.setBorder = function (b) {
                return this.toggleClass("slds-button_icon-border", b);
            };
            IconButton.prototype.setBorderInverse = function (b) {
                return this.toggleClass("slds-button_icon-border-inverse", b);
            };
            IconButton.prototype.setBorderFilled = function (b) {
                return this.toggleClass("slds-button_icon-border-filled", b);
            };
            IconButton.prototype.setInverse = function (b) {
                return this.toggleClass("slds-button_icon-inverse", b);
            };
            IconButton.prototype.setError = function (b) {
                return this.toggleClass("slds-button_icon-error", b);
            };
            IconButton.prototype.setSize = function (size) {
                this.toggleClass(IconButton.SMALL, false);
                this.toggleClass(IconButton.EXTRA_SMALL, false).toggleClass(IconButton.EXTRA_EXTRA_SMALL, false).toggleClass(size, true);
                return this;
            };
            IconButton.prototype.setMore = function (b) {
                return this.toggleClass("slds-button_icon-more", b);
            };
            IconButton.prototype.setSelected = function (b) {
                return this.toggleClass("slds-is-selected", b);
            };
            return IconButton;
        }(framework.JSContainer));
        IconButton.SMALL = "slds-button_icon-small";
        IconButton.EXTRA_SMALL = "slds-button_icon-x-small";
        IconButton.EXTRA_EXTRA_SMALL = "slds-button_icon-xx-small";
        lightning.IconButton = IconButton;
        IconButton["__class"] = "framework.lightning.IconButton";
        IconButton["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Lookup = (function (_super) {
            __extends(Lookup, _super);
            function Lookup(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-form-element").addClass("slds-lookup");
                return _this;
            }
            return Lookup;
        }(framework.JSContainer));
        lightning.Lookup = Lookup;
        Lookup["__class"] = "framework.lightning.Lookup";
        Lookup["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var LTContainer = (function (_super) {
            __extends(LTContainer, _super);
            function LTContainer(name, tag) {
                return _super.call(this, name, tag) || this;
            }
            LTContainer.prototype.setFloat = function (sfloat) {
                this.removeClass(LTContainer.FLOAT_LEFT).removeClass(LTContainer.FLOAT_RIGHT).removeClass(LTContainer.FLOAT_NONE);
                this.addClass(sfloat);
                return this;
            };
            LTContainer.prototype.toggleClass = function (cls, b) {
                if (b) {
                    this.addClass(cls);
                }
                else {
                    this.removeClass(cls);
                }
                return this;
            };
            LTContainer.prototype.setBorderTop = function (b) {
                return this.toggleClass("slds-border_top", b);
            };
            LTContainer.prototype.setBorderBottom = function (b) {
                return this.toggleClass("slds-border_bottom", b);
            };
            LTContainer.prototype.setBorderLeft = function (b) {
                return this.toggleClass("slds-border_left", b);
            };
            LTContainer.prototype.setBorderRight = function (b) {
                return this.toggleClass("slds-border_right", b);
            };
            LTContainer.prototype.setGrow = function (b) {
                return this.toggleClass("slds-grow", b);
            };
            LTContainer.prototype.setScrollableY = function (b) {
                return this.toggleClass("slds-scrollable_y", b);
            };
            LTContainer.prototype.setScrollableX = function (b) {
                return this.toggleClass("slds-scrollable_x", b);
            };
            LTContainer.prototype.setAbsoluteCenter = function (b) {
                return this.toggleClass("slds-align_absolute-center", b);
            };
            return LTContainer;
        }(framework.JSContainer));
        LTContainer.FLOAT_LEFT = "slds-float_left";
        LTContainer.FLOAT_RIGHT = "slds-float_right";
        LTContainer.FLOAT_NONE = "slds-float_none";
        lightning.LTContainer = LTContainer;
        LTContainer["__class"] = "framework.lightning.LTContainer";
        LTContainer["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Media = (function (_super) {
            __extends(Media, _super);
            function Media(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.figure = new framework.JSContainer("figure", "div").addClass("slds-media__figure");
                /*private*/ _this.body = new framework.JSContainer("div").addClass("slds-media__body");
                _this.addClass("slds-media");
                _this.addChild$framework_JSContainer(_this.figure);
                _this.addChild$framework_JSContainer(_this.body);
                return _this;
            }
            Media.prototype.addFigure = function (figure) {
                this.figure.addChild$framework_JSContainer(figure);
                return this;
            };
            Media.prototype.getFigureContainer = function () {
                return this.figure;
            };
            Media.prototype.getBodyContainer = function () {
                return this.body;
            };
            Media.prototype.addBody = function (body) {
                this.body.addChild$framework_JSContainer(body);
                return this;
            };
            Media.prototype.setSize = function (size) {
                this.removeClass(Media.SIZE_LARGE).removeClass(Media.SIZE_SMALL).addClass(size);
                return this;
            };
            Media.prototype.toggleClass$java_lang_String$boolean = function (cls, b) {
                return this.toggleClass$java_lang_String$boolean$framework_JSContainer(cls, b, this);
            };
            Media.prototype.toggleClass$java_lang_String$boolean$framework_JSContainer = function (cls, b, target) {
                if (b) {
                    target.addClass(cls);
                }
                else {
                    target.removeClass(cls);
                }
                return this;
            };
            Media.prototype.toggleClass = function (cls, b, target) {
                if (((typeof cls === 'string') || cls === null) && ((typeof b === 'boolean') || b === null) && ((target != null && target instanceof framework.JSContainer) || target === null)) {
                    return this.toggleClass$java_lang_String$boolean$framework_JSContainer(cls, b, target);
                }
                else if (((typeof cls === 'string') || cls === null) && ((typeof b === 'boolean') || b === null) && target === undefined) {
                    return this.toggleClass$java_lang_String$boolean(cls, b);
                }
                else
                    throw new Error('invalid overload');
            };
            Media.prototype.setCentered = function (b) {
                return this.toggleClass$java_lang_String$boolean("slds-media_center", b);
            };
            Media.prototype.setFigureReversed = function (b) {
                return this.toggleClass$java_lang_String$boolean$framework_JSContainer("slds-media__figure_reverse", b, this.figure);
            };
            Media.prototype.setResponseve = function (b) {
                return this.toggleClass$java_lang_String$boolean("slds-media_responsive", b);
            };
            return Media;
        }(framework.JSContainer));
        Media.SIZE_NORMAL = "";
        Media.SIZE_LARGE = "slds-media_large";
        Media.SIZE_SMALL = "slds-media_small";
        lightning.Media = Media;
        Media["__class"] = "framework.lightning.Media";
        Media["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var TabBody = (function (_super) {
            __extends(TabBody, _super);
            function TabBody(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-tabs_default__content");
                _this.setAttribute("role", "tabpanel");
                return _this;
            }
            TabBody.prototype.show = function (b) {
                if (b) {
                    this.removeClass("slds-hide");
                    this.addClass("slds-show");
                }
                else {
                    this.removeClass("slds-show");
                    this.addClass("slds-hide");
                }
                return this;
            };
            TabBody.prototype.hide = function (b) {
                return this.show(!b);
            };
            return TabBody;
        }(framework.JSContainer));
        lightning.TabBody = TabBody;
        TabBody["__class"] = "framework.lightning.TabBody";
        TabBody["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var TabItem = (function (_super) {
            __extends(TabItem, _super);
            function TabItem(name, body) {
                var _this = _super.call(this, name, "li") || this;
                /*private*/ _this.title = new framework.JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");
                _this.body = null;
                _this.body = body;
                body.setAttribute("aria-labelledby", _this.getId());
                _this.addChild$framework_JSContainer(_this.title);
                _this.title.setAttribute("aria-controls", body.getId());
                _this.addClass("slds-tabs_default__item");
                _this.title.addEventListener(_this, "click");
                _this.setActive(false);
                return _this;
            }
            TabItem.prototype.setActive = function (b) {
                if (b) {
                    this.addClass("slds-active");
                    this.title.setAttribute("aria-selected", "true");
                }
                else {
                    this.removeClass("slds-active");
                    this.title.setAttribute("aria-selected", "false");
                }
                this.body.show(b);
                return this;
            };
            TabItem.prototype.setTitle = function (title) {
                this.setAttribute("title", title);
                this.title.setHtml(title);
                return this;
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            TabItem.prototype.performAction = function (source, evt) {
                var tabs = (source.getAncestorWithClass("slds-tabs_default"));
                tabs.setActive(this);
            };
            return TabItem;
        }(framework.JSContainer));
        lightning.TabItem = TabItem;
        TabItem["__class"] = "framework.lightning.TabItem";
        TabItem["__interfaces"] = ["framework.EventListener", "framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Tabs = (function (_super) {
            __extends(Tabs, _super);
            function Tabs(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.nav = new framework.JSContainer("ul").addClass("slds-tabs_default__nav").setAttribute("role", "tablist");
                _this.addClass("slds-tabs_default");
                _this.addChild$framework_JSContainer(_this.nav);
                return _this;
            }
            Tabs.prototype.addItem = function (label, list) {
                if (((label != null && label instanceof framework.lightning.TabItem) || label === null) && list === undefined) {
                    return this.addItem$framework_lightning_TabItem(label);
                }
                else
                    throw new Error('invalid overload');
            };
            Tabs.prototype.addItem$framework_lightning_TabItem = function (item) {
                this.nav.addChild$framework_JSContainer(item);
                this.addChild$framework_JSContainer(item.body.show(false));
                return this;
            };
            Tabs.prototype.setActive = function (item) {
                for (var index174 = this.nav.getChildren().iterator(); index174.hasNext();) {
                    var c = index174.next();
                    {
                        var tab = c;
                        tab.setActive(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(tab, item));
                    }
                }
                item.setActive(true);
                return this;
            };
            return Tabs;
        }(framework.JSContainer));
        lightning.Tabs = Tabs;
        Tabs["__class"] = "framework.lightning.Tabs";
        Tabs["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text(name, tag) {
                return _super.call(this, name, tag) || this;
            }
            Text.prototype.toggleClass = function (cls, b) {
                if (b) {
                    this.addClass(cls);
                }
                else {
                    this.removeClass(cls);
                }
                return this;
            };
            Text.prototype.setTruncate = function (b) {
                return this.toggleClass("slds-truncate", b);
            };
            return Text;
        }(framework.JSContainer));
        lightning.Text = Text;
        Text["__class"] = "framework.lightning.Text";
        Text["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var BasicComponent = (function (_super) {
            __extends(BasicComponent, _super);
            function BasicComponent(name, initial, label) {
                return _super.call(this, "html:" + name, initial, label, new framework.builder.libraries.BasicComponentFactory(name)) || this;
            }
            return BasicComponent;
        }(framework.builder.Component));
        builder.BasicComponent = BasicComponent;
        BasicComponent["__class"] = "framework.builder.BasicComponent";
        BasicComponent["__interfaces"] = ["framework.interactions.Draggable", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var CheckBoxButton = (function (_super) {
            __extends(CheckBoxButton, _super);
            function CheckBoxButton(name) {
                var _this = _super.call(this, name) || this;
                _this.removeClass("slds-checkbox");
                _this.addClass("slds-checkbox_add-button");
                return _this;
            }
            return CheckBoxButton;
        }(framework.lightning.CheckBox));
        lightning.CheckBoxButton = CheckBoxButton;
        CheckBoxButton["__class"] = "framework.lightning.CheckBoxButton";
        CheckBoxButton["__interfaces"] = ["framework.EventListener", "framework.configs.Designable", "framework.InputField", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var ComponentsLibrary = (function (_super) {
            __extends(ComponentsLibrary, _super);
            function ComponentsLibrary(name) {
                var _this = _super.call(this, name, "ul") || this;
                _this.setWrap(true);
                _this.setPullPadded(true);
                _this.addClass(" slds-library");
                return _this;
            }
            ComponentsLibrary.prototype.addComponents = function () {
                var components = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    components[_i] = arguments[_i];
                }
                for (var index175 = 0; index175 < components.length; index175++) {
                    var com = components[index175];
                    {
                        var li = new framework.JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-3");
                        this.addChild$framework_JSContainer(li);
                        li.addChild$framework_JSContainer(com);
                    }
                }
                return this;
            };
            return ComponentsLibrary;
        }(framework.lightning.Grid));
        builder.ComponentsLibrary = ComponentsLibrary;
        ComponentsLibrary["__class"] = "framework.builder.ComponentsLibrary";
        ComponentsLibrary["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var BorderLayout = (function (_super) {
            __extends(BorderLayout, _super);
            function BorderLayout(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.top = new framework.JSContainer("div");
                /*private*/ _this.left = new framework.JSContainer("div");
                /*private*/ _this.center = new framework.JSContainer("div");
                /*private*/ _this.right = new framework.JSContainer("div");
                /*private*/ _this.bottom = new framework.JSContainer("div");
                _this.addClass("slds-wrap");
                _this.setPullPadded(true);
                _this.top.addClass("slds-p-horizontal_small slds-size_1-of-1");
                _this.addChild$framework_JSContainer(_this.top);
                _this.left.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
                _this.addChild$framework_JSContainer(_this.left);
                _this.center.addClass("slds-p-horizontal_small slds-size_6-of-12 slds-medium-size_6-of-12 slds-large-size_6-of-12");
                _this.addChild$framework_JSContainer(_this.center);
                _this.right.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
                _this.addChild$framework_JSContainer(_this.right);
                _this.bottom.addClass("slds-p-horizontal_small slds-size_1-of-1");
                _this.addChild$framework_JSContainer(_this.bottom);
                return _this;
            }
            BorderLayout.prototype.addChild$framework_JSContainer$java_lang_String = function (child, layoutData) {
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(layoutData, "left")) {
                    this.left.addChild$framework_JSContainer(child);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(layoutData, "right")) {
                    this.right.addChild$framework_JSContainer(child);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(layoutData, "top")) {
                    this.top.addChild$framework_JSContainer(child);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(layoutData, "bottom")) {
                    this.bottom.addChild$framework_JSContainer(child);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(layoutData, "center")) {
                    this.center.addChild$framework_JSContainer(child);
                }
                return this;
            };
            BorderLayout.prototype.addChild = function (child, layoutData) {
                if (((child != null && child instanceof framework.JSContainer) || child === null) && ((typeof layoutData === 'string') || layoutData === null)) {
                    return this.addChild$framework_JSContainer$java_lang_String(child, layoutData);
                }
                else if (((child != null && child instanceof framework.JSContainer) || child === null) && layoutData === undefined) {
                    return this.addChild$framework_JSContainer(child);
                }
                else
                    throw new Error('invalid overload');
            };
            BorderLayout.prototype.getTop = function () {
                return this.top;
            };
            BorderLayout.prototype.getLeft = function () {
                return this.left;
            };
            BorderLayout.prototype.getCenter = function () {
                return this.center;
            };
            BorderLayout.prototype.getRight = function () {
                return this.right;
            };
            BorderLayout.prototype.getBottom = function () {
                return this.bottom;
            };
            return BorderLayout;
        }(framework.lightning.Grid));
        lightning.BorderLayout = BorderLayout;
        BorderLayout["__class"] = "framework.lightning.BorderLayout";
        BorderLayout["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DockedComposer = (function (_super) {
            __extends(DockedComposer, _super);
            function DockedComposer(name) {
                var _this = _super.call(this, name, "section") || this;
                /*private*/ _this.header = new framework.lightning.Grid("header", "div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");
                /*private*/ _this.headerTitle = new framework.lightning.Media("headerTitle");
                /*private*/ _this.headerIconContainer = new framework.JSContainer("div").addClass("slds-icon_container");
                /*private*/ _this.headerIcon = new framework.lightning.Icon("headerIcon").setSize(framework.lightning.Icon.EXTRA_SMALL).setTextType(framework.lightning.Icon.TEXT_DEFAULT);
                /*private*/ _this.title = new framework.lightning.Text("title", "h2").setTruncate(true);
                /*private*/ _this.tools = new framework.JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");
                /*private*/ _this.minimize = new framework.lightning.IconButton("minimize");
                /*private*/ _this.expand = new framework.lightning.IconButton("expand");
                /*private*/ _this.close = new framework.lightning.IconButton("close");
                /*private*/ _this.body = new framework.JSContainer("div").addClass("slds-docked-composer__body");
                /*private*/ _this.footer = new framework.JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");
                _this.setVertical(true);
                _this.setAttribute("role", "dialog");
                _this.setOpen(true);
                _this.addChild$framework_JSContainer(_this.header);
                _this.header.addChild$framework_JSContainer(_this.headerTitle);
                _this.headerTitle.getFigureContainer().addClass("slds-m-right_x-small");
                _this.headerTitle.setCentered(true);
                _this.headerTitle.getFigureContainer().addChild$framework_JSContainer(_this.headerIconContainer);
                _this.headerIconContainer.addChild$framework_JSContainer(_this.headerIcon);
                _this.headerTitle.getBodyContainer().addChild$framework_JSContainer(_this.title);
                _this.header.addChild$framework_JSContainer(_this.tools);
                _this.tools.addChild$framework_JSContainer(_this.minimize).addChild$framework_JSContainer(_this.expand).addChild$framework_JSContainer(_this.close);
                _this.addChild$framework_JSContainer(_this.body);
                _this.addChild$framework_JSContainer(_this.footer);
                _this.addClass("slds-docked-composer");
                return _this;
            }
            DockedComposer.prototype.setOpen = function (b) {
                this.toggleClass("slds-is-open", b);
                this.toggleClass("slds-is-closed", !b);
                return this;
            };
            DockedComposer.prototype.setClosed = function (b) {
                this.toggleClass("slds-is-closed", b);
                this.toggleClass("slds-is-open", !b);
                return this;
            };
            DockedComposer.prototype.getHeaderIcon = function () {
                return this.headerIcon;
            };
            DockedComposer.prototype.getTitle = function () {
                return this.title;
            };
            DockedComposer.prototype.getTools = function () {
                return this.tools;
            };
            DockedComposer.prototype.getExpandButton = function () {
                return this.expand;
            };
            DockedComposer.prototype.getCloseButton = function () {
                return this.close;
            };
            DockedComposer.prototype.getBody = function () {
                return this.body;
            };
            DockedComposer.prototype.getFooter = function () {
                return this.footer;
            };
            DockedComposer.prototype.setFocus = function (b) {
                this.toggleClass("slds-has-focus", b);
                return this;
            };
            DockedComposer.prototype.setFormBody = function (b) {
                if (b) {
                    this.body.addClass("slds-docked-composer__body_form");
                }
                else {
                    this.body.removeClass("slds-docked-composer__body_form");
                }
                return this;
            };
            DockedComposer.prototype.setBodyEmailComposer = function (b) {
                if (b) {
                    this.body.addClass("slds-docked-composer__body_form");
                }
                else {
                    this.body.removeClass("slds-docked-composer__body_form");
                }
                return this;
            };
            DockedComposer.prototype.setOverflow = function (b) {
                this.toggleClass("slds-docked-composer_overflow", b);
                return this;
            };
            /**
             *
             * @return {*}
             */
            DockedComposer.prototype.getDraggableOptions = function () {
                var o = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                o.handle = "#" + this.header.getId();
                return o;
            };
            return DockedComposer;
        }(framework.lightning.Grid));
        lightning.DockedComposer = DockedComposer;
        DockedComposer["__class"] = "framework.lightning.DockedComposer";
        DockedComposer["__interfaces"] = ["framework.interactions.Draggable", "framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var GlobalHeader = (function (_super) {
            __extends(GlobalHeader, _super);
            function GlobalHeader(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.setAlignSpead(true);
                _this.addClass("slds-global-header");
                return _this;
            }
            return GlobalHeader;
        }(framework.lightning.Grid));
        lightning.GlobalHeader = GlobalHeader;
        GlobalHeader["__class"] = "framework.lightning.GlobalHeader";
        GlobalHeader["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        (function (GlobalHeader) {
            var GlobalHeaderItem = (function (_super) {
                __extends(GlobalHeaderItem, _super);
                function GlobalHeaderItem(__parent, name, tag) {
                    var _this = _super.call(this, name, tag) || this;
                    _this.__parent = __parent;
                    _this.addClass("slds-global-header__item");
                    return _this;
                }
                return GlobalHeaderItem;
            }(framework.JSContainer));
            GlobalHeader.GlobalHeaderItem = GlobalHeaderItem;
            GlobalHeaderItem["__class"] = "framework.lightning.GlobalHeader.GlobalHeaderItem";
            GlobalHeaderItem["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
            var SearchGlobalHeaderItem = (function (_super) {
                __extends(SearchGlobalHeaderItem, _super);
                function SearchGlobalHeaderItem(__parent, name) {
                    var _this = _super.call(this, __parent, name, "div") || this;
                    _this.__parent = __parent;
                    _this.addClass("slds-global-header__item_search");
                    return _this;
                }
                return SearchGlobalHeaderItem;
            }(GlobalHeader.GlobalHeaderItem));
            GlobalHeader.SearchGlobalHeaderItem = SearchGlobalHeaderItem;
            SearchGlobalHeaderItem["__class"] = "framework.lightning.GlobalHeader.SearchGlobalHeaderItem";
            SearchGlobalHeaderItem["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        })(GlobalHeader = lightning.GlobalHeader || (lightning.GlobalHeader = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Panel = (function (_super) {
            __extends(Panel, _super);
            function Panel(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.layout = new framework.lightning.FormLayout("layout", "div");
                _this.setNoWrap(true).setVertical(true);
                _this.layout.setStacked(true);
                _this.addChild$framework_JSContainer(_this.layout);
                return _this;
            }
            Panel.prototype.getLayout = function () {
                return this.layout;
            };
            Panel.prototype.addSection = function (section) {
                this.layout.addChild$framework_JSContainer(section);
                return this;
            };
            return Panel;
        }(framework.lightning.Grid));
        lightning.Panel = Panel;
        Panel["__class"] = "framework.lightning.Panel";
        Panel["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        (function (Panel) {
            var PanelSection = (function (_super) {
                __extends(PanelSection, _super);
                function PanelSection(__parent, name, tag) {
                    var _this = _super.call(this, name, tag) || this;
                    _this.__parent = __parent;
                    _this.addClass("slds-panel__section");
                    return _this;
                }
                return PanelSection;
            }(framework.JSContainer));
            Panel.PanelSection = PanelSection;
            PanelSection["__class"] = "framework.lightning.Panel.PanelSection";
            PanelSection["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        })(Panel = lightning.Panel || (lightning.Panel = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Builder = (function (_super) {
            __extends(Builder, _super);
            function Builder(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.globalHeader = new framework.lightning.GlobalHeader("header");
                /*private*/ _this.propertiesDockedComposer = new framework.lightning.DockedComposer("properties");
                /*private*/ _this.borderLayout = new framework.lightning.BorderLayout("borderLayout");
                /*private*/ _this.mainEditor = new framework.builder.EditorTabs("mainEditor");
                /*private*/ _this.basicEditorBody = new framework.builder.BasicPropertiesEditorBody("basic");
                /*private*/ _this.advancedPropertiesEditorBody = new framework.builder.AdvancedPropertiesEditorBody();
                /*private*/ _this.eventEditor = new framework.builder.EventsEditor();
                /*private*/ _this.libraryDockedComposer = new framework.lightning.DockedComposer("library");
                /*private*/ _this.basicComponentLib = new framework.builder.libraries.BasicComponentLibrary();
                /*private*/ _this.lightningComponentLib = new framework.builder.libraries.LightningComponentLibrary();
                /*private*/ _this.componentsTabs = new framework.builder.ComponentsTabs("componentsTabs");
                _this.addChild$framework_JSContainer(_this.borderLayout);
                var actions = new framework.lightning.ButtonGroup("actions");
                actions.addButton$framework_lightning_Button(new framework.lightning.Button("new").setLabel("New").setState(framework.lightning.Button.STATE_NEUTRAL));
                actions.addButton$framework_lightning_Button(new framework.lightning.Button("edit").setLabel("Edit").setState(framework.lightning.Button.STATE_NEUTRAL));
                _this.borderLayout.addChild$framework_JSContainer$java_lang_String(_this.globalHeader, "top");
                _this.globalHeader.addChild$framework_JSContainer(actions);
                _this.borderLayout.addChild$framework_JSContainer$java_lang_String(_this.propertiesDockedComposer, "left");
                _this.propertiesDockedComposer.getTitle().setHtml("Properties");
                _this.mainEditor.addItem$java_lang_String$framework_builder_Editor("Basic", _this.basicEditorBody).setActive(true);
                _this.mainEditor.addItem$java_lang_String$framework_builder_Editor("Advanced", _this.advancedPropertiesEditorBody).setActive(false);
                _this.mainEditor.addItem$java_lang_String$framework_builder_Editor("Events", _this.eventEditor).setActive(false);
                var btn = new framework.lightning.Button();
                btn.setLabel("Click me");
                _this.borderLayout.addChild$framework_JSContainer$java_lang_String(btn, "center");
                _this.basicEditorBody.setComponent(btn);
                _this.advancedPropertiesEditorBody.setComponent(btn);
                _this.eventEditor.setComponent(btn);
                _this.propertiesDockedComposer.getBody().addChild$framework_JSContainer(_this.mainEditor);
                _this.dockLeftPanel(true);
                _this.libraryDockedComposer.getTitle().setHtml("Components Library");
                _this.borderLayout.addChild$framework_JSContainer$java_lang_String(_this.libraryDockedComposer, "right");
                _this.libraryDockedComposer.getBody().addChild$framework_JSContainer(_this.componentsTabs);
                _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", _this.basicComponentLib);
                _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", _this.lightningComponentLib);
                _this.dockRightPanel(true);
                return _this;
            }
            Builder.prototype.dockLeftPanel = function (b) {
                if (b) {
                    this.borderLayout.getLeft().addClass("slds-docked_container");
                }
                else {
                    this.borderLayout.getLeft().removeClass("slds-docked_container");
                }
            };
            Builder.prototype.dockRightPanel = function (b) {
                if (b) {
                    this.borderLayout.getRight().addClass("slds-docked_container");
                    this.borderLayout.getRight().setStyle("right", "380px");
                }
                else {
                    this.borderLayout.getRight().removeClass("slds-docked_container");
                }
            };
            return Builder;
        }(framework.lightning.LTContainer));
        builder.Builder = Builder;
        Builder["__class"] = "framework.builder.Builder";
        Builder["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DescriptionList = (function (_super) {
            __extends(DescriptionList, _super);
            function DescriptionList(name) {
                var _this = _super.call(this, name, "dl") || this;
                /*private*/ _this.currentLayout = DescriptionList.DEFAULT;
                return _this;
            }
            DescriptionList.prototype.setLayout = function (layout) {
                this.currentLayout = layout;
                this.removeClass(DescriptionList.INLINE).removeClass(DescriptionList.HORIZONTAL);
                for (var index176 = this.getChildren().iterator(); index176.hasNext();) {
                    var child = index176.next();
                    {
                        child.removeClass(DescriptionList.INLINE + "__label").removeClass(DescriptionList.INLINE + "__detail");
                        child.removeClass(DescriptionList.HORIZONTAL + "__label").removeClass(DescriptionList.HORIZONTAL + "__detail");
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(child.getTag(), "dt")) {
                            child.addClass(layout + "__label");
                        }
                        else {
                            child.addClass(layout + "__detail");
                        }
                    }
                }
                return this;
            };
            DescriptionList.prototype.addItem = function (label, item) {
                var dt = new framework.JSContainer("dt").setHtml(label);
                this.addChild$framework_JSContainer(dt);
                var detail = new framework.JSContainer("dd").addChild$framework_JSContainer(item);
                this.addChild$framework_JSContainer(detail);
                this.setLayout(this.currentLayout);
                return this;
            };
            return DescriptionList;
        }(framework.lightning.LTContainer));
        DescriptionList.DEFAULT = "";
        DescriptionList.INLINE = "slds-dl_inline";
        DescriptionList.HORIZONTAL = "slds-dl_horizontal";
        lightning.DescriptionList = DescriptionList;
        DescriptionList["__class"] = "framework.lightning.DescriptionList";
        DescriptionList["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var FormLayout = (function (_super) {
            __extends(FormLayout, _super);
            function FormLayout(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.addClass("slds-form");
                return _this;
            }
            FormLayout.prototype.toggleClass = function (cls, b) {
                return _super.prototype.toggleClass.call(this, cls, b);
            };
            FormLayout.prototype.setStacked = function (b) {
                this.toggleClass("slds-form_stacked", b);
                if (b) {
                    this.setInline(false);
                    this.setHorizontal(false);
                    this.setCompound(false);
                }
                return this;
            };
            FormLayout.prototype.setInline = function (b) {
                this.toggleClass("slds-form_inline", b);
                if (b) {
                    this.setStacked(false);
                    this.setHorizontal(false);
                    this.setCompound(false);
                }
                return this;
            };
            FormLayout.prototype.setCompound = function (b) {
                this.toggleClass("slds-form_compound", b);
                if (b) {
                    this.setInline(false);
                    this.setHorizontal(false);
                    this.setStacked(false);
                }
                return this;
            };
            FormLayout.prototype.setHorizontal = function (b) {
                this.toggleClass("slds-form_horizontal", b);
                if (b) {
                    this.setInline(false);
                    this.setStacked(false);
                    this.setCompound(false);
                }
                return this;
            };
            FormLayout.prototype.addFormElement = function (element) {
                this.addChild$framework_JSContainer(element);
                return this;
            };
            FormLayout.prototype.clear = function () {
                this.getChildren().clear();
                this.setRendered(false);
                return this;
            };
            return FormLayout;
        }(framework.lightning.LTContainer));
        lightning.FormLayout = FormLayout;
        FormLayout["__class"] = "framework.lightning.FormLayout";
        FormLayout["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var ComponentsTabs = (function (_super) {
            __extends(ComponentsTabs, _super);
            function ComponentsTabs(name) {
                var _this = _super.call(this, name) || this;
                _this.addClass("slds-tabs_compact");
                return _this;
            }
            ComponentsTabs.prototype.addItem$java_lang_String$framework_builder_ComponentsLibrary = function (label, list) {
                var body = new framework.lightning.TabBody("body");
                body.addChild$framework_JSContainer(list);
                var item = new framework.lightning.TabItem("TabItem", body);
                item.setTitle(label);
                this.addItem$framework_lightning_TabItem(item);
                return this;
            };
            ComponentsTabs.prototype.addItem = function (label, list) {
                if (((typeof label === 'string') || label === null) && ((list != null && list instanceof framework.builder.ComponentsLibrary) || list === null)) {
                    return this.addItem$java_lang_String$framework_builder_ComponentsLibrary(label, list);
                }
                else if (((label != null && label instanceof framework.lightning.TabItem) || label === null) && list === undefined) {
                    return this.addItem$framework_lightning_TabItem(label);
                }
                else
                    throw new Error('invalid overload');
            };
            ComponentsTabs.prototype.addComponentList = function (label) {
                var components = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    components[_i - 1] = arguments[_i];
                }
                var body = new framework.lightning.TabBody("body");
                var list = new framework.builder.ComponentsLibrary("list");
                (function (o) { return o.addComponents.apply(o, components); })(list);
                body.addChild$framework_JSContainer(list);
                var item = new framework.lightning.TabItem("TabItem", body);
                item.setTitle(label);
                this.addItem$framework_lightning_TabItem(item);
                return this;
            };
            return ComponentsTabs;
        }(framework.lightning.Tabs));
        builder.ComponentsTabs = ComponentsTabs;
        ComponentsTabs["__class"] = "framework.builder.ComponentsTabs";
        ComponentsTabs["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var EditorTabs = (function (_super) {
            __extends(EditorTabs, _super);
            function EditorTabs(name) {
                var _this = _super.call(this, name) || this;
                _this.addClass("slds-tabs_compact");
                return _this;
            }
            EditorTabs.prototype.addItem$java_lang_String$framework_builder_Editor = function (label, editor) {
                var body = new framework.lightning.TabBody("edi");
                body.addChild$framework_JSContainer(editor);
                var item = new framework.lightning.TabItem("tabItem_" + editor.getName(), body).setTitle(label);
                this.addItem$framework_lightning_TabItem(item);
                return item;
            };
            EditorTabs.prototype.addItem = function (label, editor) {
                if (((typeof label === 'string') || label === null) && ((editor != null && (editor["__interfaces"] != null && editor["__interfaces"].indexOf("framework.builder.Editor") >= 0 || editor.constructor != null && editor.constructor["__interfaces"] != null && editor.constructor["__interfaces"].indexOf("framework.builder.Editor") >= 0)) || editor === null)) {
                    return this.addItem$java_lang_String$framework_builder_Editor(label, editor);
                }
                else if (((label != null && label instanceof framework.lightning.TabItem) || label === null) && editor === undefined) {
                    return this.addItem$framework_lightning_TabItem(label);
                }
                else
                    throw new Error('invalid overload');
            };
            return EditorTabs;
        }(framework.lightning.Tabs));
        builder.EditorTabs = EditorTabs;
        EditorTabs["__class"] = "framework.builder.EditorTabs";
        EditorTabs["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var BasicComponentLibrary = (function (_super) {
                __extends(BasicComponentLibrary, _super);
                function BasicComponentLibrary() {
                    var _this = _super.call(this, "Basic") || this;
                    _this.addComponents(new framework.builder.BasicComponent("h1", "H1", "Heading 1"), new framework.builder.BasicComponent("h2", "H2", "Heading 2"), new framework.builder.BasicComponent("h3", "H3", "Heading 3"), new framework.builder.BasicComponent("h4", "H4", "Heading 4"), new framework.builder.BasicComponent("h5", "H5", "Heading 5"), new framework.builder.BasicComponent("span", "SPAN", "Span"), new framework.builder.BasicComponent("p", "P", "Paragraph"), new framework.builder.BasicComponent("label", "LABEL", "Label"), new framework.builder.BasicComponent("a", "A", "Hyper Link"), new framework.builder.BasicComponent("img", "IMG", "Image"), new framework.builder.BasicComponent("ol", "OL", "Ordered List"), new framework.builder.BasicComponent("ul", "UL", "Un-Ordered List"), new framework.builder.BasicComponent("li", "LI", "List Item"), new framework.builder.BasicComponent("form", "FORM", "Form"), new framework.builder.BasicComponent("fieldset", "UL", "Fieldset"), new framework.builder.BasicComponent("input", "input", "Input"), new framework.builder.BasicComponent("select", "SELECT", "Select"), new framework.builder.BasicComponent("textarea", "TEXTAREA", "Text Area"), new framework.builder.BasicComponent("button", "BUTTON", "Button"));
                    return _this;
                }
                return BasicComponentLibrary;
            }(framework.builder.ComponentsLibrary));
            libraries.BasicComponentLibrary = BasicComponentLibrary;
            BasicComponentLibrary["__class"] = "framework.builder.libraries.BasicComponentLibrary";
            BasicComponentLibrary["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var LightningComponentLibrary = (function (_super) {
                __extends(LightningComponentLibrary, _super);
                function LightningComponentLibrary() {
                    var _this = _super.call(this, "Lightning") || this;
                    _this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button", new LightningComponentLibrary.LightningComponentLibrary$0(_this, "lgt:btn")));
                    return _this;
                }
                return LightningComponentLibrary;
            }(framework.builder.ComponentsLibrary));
            libraries.LightningComponentLibrary = LightningComponentLibrary;
            LightningComponentLibrary["__class"] = "framework.builder.libraries.LightningComponentLibrary";
            LightningComponentLibrary["__interfaces"] = ["framework.configs.Designable", "framework.Renderable"];
            (function (LightningComponentLibrary) {
                var LightningComponentLibrary$0 = (function (_super) {
                    __extends(LightningComponentLibrary$0, _super);
                    function LightningComponentLibrary$0(__parent, __arg0) {
                        var _this = _super.call(this, __arg0) || this;
                        _this.__parent = __parent;
                        return _this;
                    }
                    /**
                     *
                     * @return {framework.JSContainer}
                     */
                    LightningComponentLibrary$0.prototype.createInstance = function () {
                        return new framework.lightning.Button();
                    };
                    return LightningComponentLibrary$0;
                }(framework.builder.AbstractComponentFactory));
                LightningComponentLibrary.LightningComponentLibrary$0 = LightningComponentLibrary$0;
                LightningComponentLibrary$0["__interfaces"] = ["framework.builder.model.ComponentFactory"];
            })(LightningComponentLibrary = libraries.LightningComponentLibrary || (libraries.LightningComponentLibrary = {}));
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var PropertiesEditor = (function (_super) {
            __extends(PropertiesEditor, _super);
            function PropertiesEditor(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.__framework_builder_PropertiesEditor_component = null;
                _this.setHorizontal(true).addClass("slds-form_compact");
                return _this;
            }
            PropertiesEditor.prototype.setComponent = function (designable) {
                this.__framework_builder_PropertiesEditor_component = designable;
            };
            PropertiesEditor.prototype.addProperty$java_lang_String$framework_JSInput = function (label, input) {
                var width = new framework.lightning.FormElement("elem", "div");
                width.setLabel(label);
                input.addClass("slds-input");
                width.setInput(input);
                this.addFormElement(width);
                return this;
            };
            PropertiesEditor.prototype.addProperty = function (label, input) {
                if (((typeof label === 'string') || label === null) && ((input != null && input instanceof framework.JSInput) || input === null)) {
                    return this.addProperty$java_lang_String$framework_JSInput(label, input);
                }
                else if (((label != null && label instanceof framework.configs.Parameter) || label === null) && input === undefined) {
                    return this.addProperty$framework_configs_Parameter(label);
                }
                else
                    throw new Error('invalid overload');
            };
            PropertiesEditor.prototype.addProperty$framework_configs_Parameter = function (parameter) {
                var element = new framework.lightning.FormElement("elem", "div");
                element.setLabel(parameter.label);
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(parameter.type, "String")) {
                    var input = new framework.JSInput(parameter.name);
                    input.addEventListener(this, "change");
                    input.addClass("slds-input");
                    element.setInput(input);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(parameter.type, "Boolean")) {
                    var cb = new framework.lightning.CheckBox(parameter.name);
                    cb.addEventListener(this, "change");
                    element.setInput(cb);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(parameter.type, "select")) {
                    var select = new framework.JSSelect(parameter.name);
                    for (var index177 = parameter.options.iterator(); index177.hasNext();) {
                        var opt = index177.next();
                        {
                            var o = new framework.JSOption(opt.text, opt.value);
                            select.addOption(o);
                        }
                    }
                    select.addClass("slds-select");
                    element.setInput(select);
                    select.addEventListener(this, "change");
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(parameter.type, "textarea")) {
                    var cb = new framework.JSTextArea(parameter.name);
                    cb.addClass("slds-textarea");
                    element.setInput(cb);
                    cb.addEventListener(this, "change");
                }
                this.addFormElement(element);
                return this;
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            PropertiesEditor.prototype.performAction = function (source, evt) {
                var value = source.getValue().toString();
                alert(value);
                this.__framework_builder_PropertiesEditor_component.setParameter(source.getName(), value);
            };
            return PropertiesEditor;
        }(framework.lightning.FormLayout));
        builder.PropertiesEditor = PropertiesEditor;
        PropertiesEditor["__class"] = "framework.builder.PropertiesEditor";
        PropertiesEditor["__interfaces"] = ["framework.builder.Editor", "framework.EventListener", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var AdvancedPropertiesEditorBody = (function (_super) {
            __extends(AdvancedPropertiesEditorBody, _super);
            function AdvancedPropertiesEditorBody() {
                return _super.call(this, "advanced") || this;
            }
            AdvancedPropertiesEditorBody.prototype.setComponent = function (designable) {
                _super.prototype.setComponent.call(this, designable);
                this.clear();
                for (var index178 = this.__framework_builder_PropertiesEditor_component.getParameters().iterator(); index178.hasNext();) {
                    var p = index178.next();
                    {
                        this.addProperty$framework_configs_Parameter(p);
                    }
                }
            };
            return AdvancedPropertiesEditorBody;
        }(framework.builder.PropertiesEditor));
        builder.AdvancedPropertiesEditorBody = AdvancedPropertiesEditorBody;
        AdvancedPropertiesEditorBody["__class"] = "framework.builder.AdvancedPropertiesEditorBody";
        AdvancedPropertiesEditorBody["__interfaces"] = ["framework.builder.Editor", "framework.EventListener", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var BasicPropertiesEditorBody = (function (_super) {
            __extends(BasicPropertiesEditorBody, _super);
            function BasicPropertiesEditorBody(name) {
                var _this = _super.call(this, name) || this;
                _this.addProperty$framework_configs_Parameter(new framework.configs.Parameter("name", "Name", "String"));
                _this.addProperty$framework_configs_Parameter(new framework.configs.Parameter("class", "Style class", "String"));
                _this.addProperty$framework_configs_Parameter(new framework.configs.Parameter("style", "Style", "String"));
                _this.addProperty$framework_configs_Parameter(new framework.configs.Parameter("width", "Width", "String"));
                _this.addProperty$framework_configs_Parameter(new framework.configs.Parameter("height", "Height", "String"));
                return _this;
            }
            return BasicPropertiesEditorBody;
        }(framework.builder.PropertiesEditor));
        builder.BasicPropertiesEditorBody = BasicPropertiesEditorBody;
        BasicPropertiesEditorBody["__class"] = "framework.builder.BasicPropertiesEditorBody";
        BasicPropertiesEditorBody["__interfaces"] = ["framework.builder.Editor", "framework.EventListener", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var EventsEditor = (function (_super) {
            __extends(EventsEditor, _super);
            function EventsEditor() {
                var _this = _super.call(this, "events") || this;
                _this.setStacked(true);
                var eventTypes = new framework.configs.Parameter("eventType", "Event", "select");
                eventTypes.options.add(new framework.configs.Option("Click", "click"));
                eventTypes.options.add(new framework.configs.Option("Double click", "dblclick"));
                _this.addProperty$framework_configs_Parameter(eventTypes);
                var script = new framework.configs.Parameter("script", "Script", "textarea");
                _this.addProperty$framework_configs_Parameter(script);
                return _this;
            }
            return EventsEditor;
        }(framework.builder.PropertiesEditor));
        builder.EventsEditor = EventsEditor;
        EventsEditor["__class"] = "framework.builder.EventsEditor";
        EventsEditor["__interfaces"] = ["framework.builder.Editor", "framework.EventListener", "framework.configs.Designable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
framework.lightning.Button.stateLabels_$LI$();
framework.lightning.Button.states_$LI$();
framework.JSContainer.DEFAULT_RENDERER_$LI$();
framework.interactions.InteractionsDecorator.droppableRenderer_$LI$();
framework.interactions.InteractionsDecorator.draggableRenderer_$LI$();
framework.core.BeanFactory.INSTANCE_$LI$();
framework.Main.main(null);
