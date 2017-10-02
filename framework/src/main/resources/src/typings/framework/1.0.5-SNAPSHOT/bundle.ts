/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
namespace framework.builder {
    export class BuilderEventListener implements framework.EventListener {
        /*private*/ jsSource : string;

        public constructor(jsSource : string) {
            this.jsSource = null;
            this.jsSource = jsSource;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            if(this.jsSource != null) {
                eval(this.jsSource);
            }
        }
    }
    BuilderEventListener["__class"] = "framework.builder.BuilderEventListener";
    BuilderEventListener["__interfaces"] = ["framework.EventListener"];


}
namespace framework.builder.libraries {
    export abstract class AbstractComponentFactory implements framework.builder.marshalling.ComponentFactory {
        /*private*/ impl : string;

        public constructor(impl : string) {
            this.impl = null;
            this.impl = impl;
        }

        /**
         * 
         * @param {string} impl
         * @return {boolean}
         */
        public supports(impl : string) : boolean {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(impl,this.impl));
        }

        public abstract createInstance(designMode : boolean) : framework.JSContainer;

        configureStyles(instance : framework.JSContainer, component : framework.builder.marshalling.Component) {
            let keys : string[] = Object.keys(component.styles);
            for(let index5852=0; index5852 < keys.length; index5852++) {
                let key = keys[index5852];
                {
                    let value : string = <string>component.styles[key];
                    instance.setStyle(key, value);
                }
            }
        }

        configureParameters(instance : framework.design.Designable, component : framework.builder.marshalling.Component, designMode : boolean) {
            let keys : string[] = Object.keys(component.parameters);
            for(let index5853=0; index5853 < keys.length; index5853++) {
                let key = keys[index5853];
                {
                    let value : string = <string>component.parameters[key];
                    instance['setParameter$java_lang_String$java_lang_String$boolean'](key, value, designMode);
                }
            }
        }

        configureEvents(instance : framework.JSContainer, component : framework.builder.marshalling.Component) {
            for(let index5854=0; index5854 < component.events.length; index5854++) {
                let event = component.events[index5854];
                {
                    let listener : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(event.source);
                    instance.addEventListener(listener, event.type);
                }
            }
        }

        /**
         * 
         * @param {framework.builder.marshalling.Component} component
         * @param {boolean} designMode
         * @return {framework.JSContainer}
         */
        public build(component : framework.builder.marshalling.Component, designMode : boolean) : framework.JSContainer {
            let instance : framework.JSContainer = this.createInstance(designMode);
            this.configureStyles(instance, component);
            this.configureParameters(<framework.design.Designable><any>instance, component, designMode);
            this.configureEvents(instance, component);
            this.decorateForDesignMode(instance, designMode);
            return instance;
        }

        decorateForDesignMode(instance : framework.JSContainer, designMode : boolean) {
            this.decorateDroppable(instance, designMode);
            this.decorateCallSelector(instance, designMode);
        }

        decorateDroppable(instance : framework.JSContainer, designMode : boolean) {
            if(designMode) {
                instance.addClass("designing");
                let options : JQueryUI.DroppableOptions = <any>Object.defineProperty({

                }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DroppableOptions","def.jqueryui.jqueryui.DroppableEvents"] });
                options.greedy = true;
                options.accept = ".designer-component";
                options.tolerance = "pointer";
                options.drop = (event : Event, param : JQueryUI.DroppableEventUIParam) => {
                    let identifier : string = event.srcElement.getAttribute("identifier");
                    let factory : framework.builder.marshalling.ComponentFactory = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(identifier);
                    let container : framework.JSContainer = factory.build(new framework.builder.marshalling.Component(), true);
                    instance.addChild$framework_JSContainer(container);
                    container.render();
                };
                instance.setDroppableOptions(options);
            }
        }

        decorateCallSelector(container : framework.JSContainer, designMode : boolean) {
            if(designMode) {
                container.addEventListener(new framework.builder.SelectComponentEvent(<any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.Selector))), "click");
            }
        }
    }
    AbstractComponentFactory["__class"] = "framework.builder.libraries.AbstractComponentFactory";
    AbstractComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


}
namespace framework.builder.libraries {
    export class BasicComponentFactoryRegistry implements framework.builder.libraries.ComponentFactoryRegistry {
        /*private*/ factories : java.util.Map<string, framework.builder.marshalling.ComponentFactory> = <any>(new java.util.HashMap<any, any>());

        /**
         * 
         * @param {string} identifier
         * @param {*} factory
         */
        public registerComponentFactory(identifier : string, factory : framework.builder.marshalling.ComponentFactory) {
            if(!this.factories.containsKey(identifier)) {
                this.factories.put(identifier, factory);
            } else {
                throw new java.lang.RuntimeException("duplicate component factory:->" + identifier);
            }
        }

        /**
         * 
         * @param {string} identifier
         * @return {*}
         */
        public getComponentFactory(identifier : string) : framework.builder.marshalling.ComponentFactory {
            if(this.factories.containsKey(identifier)) {
                return this.factories.get(identifier);
            } else {
                throw new java.lang.RuntimeException("Missing ComponentFactory with identifier:" + identifier);
            }
        }

        constructor() {
        }
    }
    BasicComponentFactoryRegistry["__class"] = "framework.builder.libraries.BasicComponentFactoryRegistry";
    BasicComponentFactoryRegistry["__interfaces"] = ["framework.builder.libraries.ComponentFactoryRegistry"];


}
namespace framework.builder.libraries {
    export interface ComponentFactoryRegistry {
        registerComponentFactory(identifier : string, factory : framework.builder.marshalling.ComponentFactory);

        getComponentFactory(identifier : string) : framework.builder.marshalling.ComponentFactory;
    }
}
namespace framework.builder.marshalling {
    export class BuilderEvent {
        public type : string;

        public source : string;

        constructor() {
            this.type = null;
            this.source = null;
        }
    }
    BuilderEvent["__class"] = "framework.builder.marshalling.BuilderEvent";

}
namespace framework.builder.marshalling {
    export class Component {
        public impl : string;

        public parameters : Object = <Object>new Object();

        public children : Array<Component> = <any>(new Array<any>());

        public events : Array<framework.builder.marshalling.BuilderEvent> = <any>(new Array<framework.builder.marshalling.BuilderEvent>());

        public styles : Object = <Object>new Object();

        constructor() {
            this.impl = null;
        }
    }
    Component["__class"] = "framework.builder.marshalling.Component";

}
namespace framework.builder.marshalling {
    export interface ComponentFactory {
        supports(impl : string) : boolean;

        build(component : framework.builder.marshalling.Component, designMode : boolean) : framework.JSContainer;
    }
}
namespace framework.builder.properties {
    export interface PropertiesEditor extends framework.Renderable {
        setComponent(designable : framework.design.Designable);
    }
}
namespace framework.builder.properties {
    export interface PropertyEditor extends framework.Renderable {
        setDesignable(designable : framework.design.Designable);

        setProperty(parameter : framework.design.Parameter);
    }
}
namespace framework.builder {
    export class SelectComponentEvent implements framework.EventListener {
        /*private*/ selector : framework.builder.Selector = null;

        public constructor(selector : framework.builder.Selector) {
            this.selector = selector;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            evt.stopPropagation();
            this.selector.select(source);
        }
    }
    SelectComponentEvent["__class"] = "framework.builder.SelectComponentEvent";
    SelectComponentEvent["__interfaces"] = ["framework.EventListener"];


}
namespace framework.core {
    export class BasicDecoratorRegistry implements framework.core.DecoratorsRegistry {
        /*private*/ decorators : java.util.List<framework.core.Decorator> = <any>(new java.util.ArrayList<any>());

        /**
         * 
         * @param {*} decorator
         */
        public registerDecorator(decorator : framework.core.Decorator) {
            this.decorators.add(decorator);
        }

        /**
         * 
         * @return {*}
         */
        public getDecorators() : java.util.List<framework.core.Decorator> {
            return this.decorators;
        }

        constructor() {
        }
    }
    BasicDecoratorRegistry["__class"] = "framework.core.BasicDecoratorRegistry";
    BasicDecoratorRegistry["__interfaces"] = ["framework.core.DecoratorsRegistry"];


}
namespace framework.core {
    export class BeanFactory {
        static INSTANCE : BeanFactory; public static INSTANCE_$LI$() : BeanFactory { if(BeanFactory.INSTANCE == null) BeanFactory.INSTANCE = new BeanFactory(); return BeanFactory.INSTANCE; };

        /*private*/ beans : java.util.Map<string, any> = <any>(new java.util.HashMap<any, any>());

        public static getInstance() : BeanFactory {
            return BeanFactory.INSTANCE_$LI$();
        }

        onInit(obj : any) {
            if(obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("framework.core.Initializable") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("framework.core.Initializable") >= 0)) {
                (<framework.core.Initializable><any>obj).doInit();
            }
        }

        initBeanFactoryAware(bean : any) {
            if(bean != null && (bean["__interfaces"] != null && bean["__interfaces"].indexOf("framework.core.BeanFactoryAware") >= 0 || bean.constructor != null && bean.constructor["__interfaces"] != null && bean.constructor["__interfaces"].indexOf("framework.core.BeanFactoryAware") >= 0)) {
                this.initBeanFactoryAware(<framework.core.BeanFactoryAware><any>bean);
            }
        }

        public addBean(mixing : any, instance : any) {
            let mixxingName : string = mixing.toString();
            this.onInit(instance);
            this.initBeanFactoryAware(instance);
            this.beans.put(mixxingName, instance);
        }

        public getBeanOfType<T>(clazz : any) : T {
            for(let index5855=this.beans.keySet().iterator();index5855.hasNext();) {
                let key = index5855.next();
                {
                    let bean : any = this.beans.get(key);
                    try {
                        if((<any>bean.constructor).isAssignableFrom(clazz)) {
                            return <T>bean;
                        }
                    } catch(e) {
                    };
                }
            }
            let mixing : string = clazz.toString();
            if(this.beans.containsKey(mixing)) {
                return <T>this.beans.get(mixing);
            }
            throw new java.lang.RuntimeException("No bean of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + " found in factory");
        }

        public getBean(name : string) : any {
            return this.beans.get(name);
        }
    }
    BeanFactory["__class"] = "framework.core.BeanFactory";

}
namespace framework.core {
    export interface BeanFactoryAware {
        setBeanFactory(beanfactory : framework.core.BeanFactory);
    }
}
namespace framework.core {
    export interface Decorator {
        decorate(renderable : framework.Renderable);
    }
}
namespace framework.core {
    export interface DecoratorsRegistry {
        registerDecorator(decorator : framework.core.Decorator);

        getDecorators() : java.util.List<framework.core.Decorator>;
    }
}
namespace framework.core {
    export class Global extends Object {
        public static idCount : number = 0;
    }
    Global["__class"] = "framework.core.Global";

}
namespace framework.core {
    export interface Initializable {
        doInit();
    }
}
namespace framework.design {
    export interface Designable extends framework.Renderable {
        setParameter(key? : any, value? : any, designMode? : any) : any;

        getComponent() : framework.builder.marshalling.Component;

        getParameters() : java.util.List<framework.design.Parameter>;
    }
}
namespace framework.design {
    export class Option {
        public constructor(text? : any, value? : any) {
            if(((typeof text === 'string') || text === null) && ((typeof value === 'string') || value === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.text = null;
                this.value = null;
                this.text = null;
                this.value = null;
                (() => {
                    this.text = text;
                    this.value = value;
                })();
            } else if(text === undefined && value === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                this.text = null;
                this.value = null;
                this.text = null;
                this.value = null;
            } else throw new Error('invalid overload');
        }

        public text : string;

        public value : string;
    }
    Option["__class"] = "framework.design.Option";

}
namespace framework.design {
    export abstract class Parameter {
        public name : string;

        public label : string;

        public type : string;

        public options : java.util.List<framework.design.Option> = <any>(new java.util.LinkedList<any>());

        public category : string;

        public constructor(name : string, label : string, type : string, category : string) {
            this.name = null;
            this.label = null;
            this.type = null;
            this.category = null;
            this.name = name;
            this.label = label;
            this.type = type;
            this.category = category;
        }

        public abstract getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor;
    }
    Parameter["__class"] = "framework.design.Parameter";

}
namespace framework {
    export interface EventListener {
        performAction(source : framework.JSContainer, evt : Event);
    }
}
namespace framework {
    export interface InputField<T> extends framework.Renderable {
        getValue() : T;

        /**
         * 
         * @param {boolean} b
         */
        setValue(b? : any) : any;

        setRawValue(value : string);
    }
}
namespace framework {
    export class InputTypes {
        public static text : string = "text";

        public static password : string = "password";

        public static datetime : string = "datetime";

        public static datetime_local : string = "datetime_local";

        public static date : string = "date";

        public static month : string = "month";

        public static time : string = "time";

        public static week : string = "week";

        public static number : string = "number";

        public static email : string = "email";

        public static url : string = "url";

        public static search : string = "search";

        public static tel : string = "tel";

        public static color : string = "color";

        public static checkbox : string = "checkbox";

        public static radio : string = "radio";
    }
    InputTypes["__class"] = "framework.InputTypes";

}
namespace framework.interactions {
    export interface Draggable extends framework.Renderable {
        getDraggableOptions() : JQueryUI.DraggableOptions;
    }
}
namespace framework.interactions {
    export class DraggableRenderer implements framework.renderer.Renderer<framework.interactions.Draggable> {
        public doRender$framework_interactions_Draggable$jsweet_dom_HTMLElement(c : framework.interactions.Draggable, root : HTMLElement) {
            let jq : JQuery = <JQuery>$("#" + c.getId());
            let opts : JQueryUI.DraggableOptions = c.getDraggableOptions();
            if(opts == null) jq.draggable(); else jq.draggable(opts);
        }

        /**
         * 
         * @param {*} c
         * @param {HTMLElement} root
         */
        public doRender(c? : any, root? : any) : any {
            if(((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("framework.interactions.Draggable") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("framework.interactions.Draggable") >= 0)) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_interactions_Draggable$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        constructor() {
        }
    }
    DraggableRenderer["__class"] = "framework.interactions.DraggableRenderer";
    DraggableRenderer["__interfaces"] = ["framework.renderer.Renderer"];


}
namespace framework.interactions {
    export interface Droppable extends framework.Renderable {
        getDroppableOptions() : JQueryUI.DroppableOptions;
    }
}
namespace framework.interactions {
    export class DroppableRenderer implements framework.renderer.Renderer<framework.interactions.Droppable> {
        public doRender$framework_interactions_Droppable$jsweet_dom_HTMLElement(c : framework.interactions.Droppable, root : HTMLElement) {
            let jq : JQuery = <JQuery>$("#" + c.getId());
            let opts : JQueryUI.DroppableOptions = c.getDroppableOptions();
            if(opts == null) {
            } else jq.droppable(opts);
        }

        /**
         * 
         * @param {*} c
         * @param {HTMLElement} root
         */
        public doRender(c? : any, root? : any) : any {
            if(((c != null && (c["__interfaces"] != null && c["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || c.constructor != null && c.constructor["__interfaces"] != null && c.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_interactions_Droppable$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        constructor() {
        }
    }
    DroppableRenderer["__class"] = "framework.interactions.DroppableRenderer";
    DroppableRenderer["__interfaces"] = ["framework.renderer.Renderer"];


}
namespace framework {
    export interface Renderable {
        getChangedAttributes() : string[];

        getChangedStyles() : string[];

        getNative() : HTMLElement;

        getRenderers() : java.util.List<framework.renderer.Renderer<any>>;

        addRenderer(renderer : framework.renderer.Renderer<any>) : Renderable;

        getId() : string;

        uid() : string;

        addClass(styleClass : string) : Renderable;

        removeClass(cls : string) : Renderable;

        addChild(child? : any, layoutData? : any) : any;

        addChildAt(index : number, child : framework.JSContainer) : Renderable;

        setVisible(b : boolean) : Renderable;

        addEventListener(listener : framework.EventListener, type : string) : Renderable;

        getTag() : string;

        setTag(tag : string) : Renderable;

        setStyle(key : string, value : string) : Renderable;

        getStyle(key : string) : string;

        setAttribute(key : string, value : string) : Renderable;

        exec(name? : any, parameter? : any) : any;

        getCommands() : java.lang.Iterable<framework.JSContainer.JSCommand>;

        getAttribute(key : string) : string;

        getName() : string;

        setName(name : string);

        getParent() : Renderable;

        getChildren() : java.util.List<framework.JSContainer>;

        getStyleNames() : java.util.Set<string>;

        getAttributeNames() : java.util.Set<string>;

        getHtml() : string;

        setHtml(h : string) : Renderable;

        isRendered() : boolean;

        setRendered(b : boolean) : Renderable;

        getListeners() : java.util.Map<string, java.util.List<framework.EventListener>>;

        render(root? : any) : any;

        getData() : any;

        setData(data : any);

        /**
         * 
         * @param {string} id
         * @return
         * @return {*}
         */
        getAncestorById(id : string) : Renderable;

        getAncestorByName(name : string) : Renderable;

        getRoot() : Renderable;
    }
}
namespace framework.renderer {
    export class ContainerRenderer implements framework.renderer.Renderer<framework.JSContainer> {
        public decorate(c : framework.JSContainer) {
            for(let index5856=framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.core.DecoratorsRegistry").getDecorators().iterator();index5856.hasNext();) {
                let dec = index5856.next();
                {
                    dec.decorate(c);
                }
            }
        }

        public doRender$framework_JSContainer$jsweet_dom_HTMLElement(c : framework.JSContainer, root : HTMLElement) {
            let jq : HTMLElement = document.getElementById(c.getId());
            let tag : string = c.getTag();
            let rendered : boolean = c.isRendered();
            let name : string = c.getName();
            let html : string = c.getHtml();
            let parent : framework.Renderable = c.getParent();
            if(!rendered) {
                this.decorate(c);
                if(jq != null) jq.remove();
                let njq : HTMLElement = document.createElement(tag);
                if(name != null && name.length > 0) njq.setAttribute("name", name);
                njq.setAttribute("id", c.getId());
                njq.innerHTML = html;
                this.renderAttributes(njq, c, false);
                this.renderStyles(njq, c, false);
                if(parent == null) {
                    if(root == null) {
                        let body : Node = document.getElementsByTagName("body")[0];
                        body.appendChild(njq);
                    } else {
                        root.appendChild(njq);
                    }
                } else {
                    let index : number = parent.getChildren().indexOf(c);
                    let nextSib : framework.Renderable = null;
                    if(index < parent.getChildren().size() - 1) {
                        nextSib = parent.getChildren().get(index + 1);
                        if(!nextSib.isRendered()) {
                            nextSib = null;
                        }
                    }
                    if(nextSib != null) {
                        let p : Node = document.getElementById(parent.getId());
                        p.insertBefore(njq, document.getElementById(nextSib.getId()));
                    } else {
                        document.getElementById(parent.getId()).appendChild(njq);
                    }
                }
                this.renderEvents(njq, c);
                this.execCommands(njq, c);
                c.flush("a28n12l10");
            } else {
                this.renderAttributes(jq, c, true);
                this.renderStyles(jq, c, true);
                this.execCommands(jq, c);
                c.flush("a28n12l10");
            }
        }

        public doRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.JSContainer) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_JSContainer$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        execCommands(njq : HTMLElement, container : framework.Renderable) {
            for(let index5857=container.getCommands().iterator();index5857.hasNext();) {
                let command = index5857.next();
                {
                    let name : string = command.getName();
                    let params : Object = command.getParameters();
                    let variable : string = command.getVariable();
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("null",variable))) {
                        variable = null;
                    }
                    if(params == null && variable == null) {
                        eval("njq." + name + "()");
                    } else if(params != null) {
                        eval("njq." + name + "(params)");
                    } else if(variable != null) {
                        eval("njq." + name + "(" + variable + ")");
                    }
                }
            }
        }

        renderEvents(njq : HTMLElement, c : framework.JSContainer) {
            for(let index5858=c.getListeners().keySet().iterator();index5858.hasNext();) {
                let key = index5858.next();
                {
                    let listeners : java.util.List<framework.EventListener> = c.getListeners().get(key);
                    njq.addEventListener(key, ((listeners) => {
                        return (evt) => {
                            for(let index5859=listeners.iterator();index5859.hasNext();) {
                                let l = index5859.next();
                                {
                                    this.synchronizeFields(njq, c);
                                    l.performAction(c, evt);
                                }
                            }
                            c.getRoot().render();
                        }
                    })(listeners));
                }
            }
        }

        synchronizeFields(njq : HTMLElement, jsfield : framework.Renderable) {
            if(jsfield != null && (jsfield["__interfaces"] != null && jsfield["__interfaces"].indexOf("framework.InputField") >= 0 || jsfield.constructor != null && jsfield.constructor["__interfaces"] != null && jsfield.constructor["__interfaces"].indexOf("framework.InputField") >= 0)) {
                let inputField : framework.InputField<string> = <framework.JSInput><any>jsfield;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(jsfield.getTag(),"input")) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("checkbox",jsfield.getAttribute("type")))) {
                    let field : HTMLInputElement = <HTMLInputElement>document.getElementById(jsfield.getId());
                    if(field.checked) {
                        inputField.setRawValue("true");
                    } else {
                        inputField.setRawValue("false");
                    }
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(jsfield.getTag(),"input"))) {
                    let field : HTMLInputElement = <HTMLInputElement>document.getElementById(jsfield.getId());
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("checkbox",jsfield.getAttribute("type")))) {
                        if(field.checked) {
                            inputField.setRawValue("true");
                        } else {
                            inputField.setRawValue("false");
                        }
                    } else {
                        let value : string = field.value;
                        inputField.setRawValue(value);
                    }
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "select")) {
                    let field : HTMLSelectElement = <HTMLSelectElement>document.getElementById(jsfield.getId());
                    let value : string = field.value;
                    inputField.setRawValue(value);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "textarea")) {
                    let field : HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(jsfield.getId());
                    let value : string = field.value;
                    inputField.setRawValue(value);
                } else {
                    let field : HTMLElement = document.getElementById(jsfield.getId());
                    let value : string = field.getAttribute("value");
                    inputField.setRawValue(value);
                }
            }
            for(let index5860=jsfield.getChildren().iterator();index5860.hasNext();) {
                let c = index5860.next();
                {
                    this.synchronizeFields(document.getElementById(c.getId()), c);
                }
            }
        }

        renderAttributes(njq : HTMLElement, c : framework.Renderable, changed : boolean) {
            if(changed) {
                {
                    let array5862 = c.getChangedAttributes();
                    for(let index5861=0; index5861 < array5862.length; index5861++) {
                        let key = array5862[index5861];
                        {
                            if(c.getAttribute(key) == null) {
                                njq.removeAttribute(key);
                            } else {
                                njq.setAttribute(key, c.getAttribute(key));
                            }
                        }
                    }
                }
            } else {
                for(let index5863=c.getAttributeNames().iterator();index5863.hasNext();) {
                    let key = index5863.next();
                    {
                        if(c.getAttribute(key) != null) njq.setAttribute(key, c.getAttribute(key));
                    }
                }
            }
        }

        clearAttributes(elem : HTMLElement) {
            let attrs : NamedNodeMap = elem.attributes;
            for(let i : number = 0; i < attrs.length; i++) {
                if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(attrs[i].name,"id"))) elem.removeAttribute(attrs[i].name);
            };
        }

        clearStyles(jq : HTMLElement) {
            jq.removeAttribute("style");
        }

        renderStyles(njq : HTMLElement, c : framework.Renderable, changed : boolean) {
            if(changed) {
                {
                    let array5865 = c.getChangedStyles();
                    for(let index5864=0; index5864 < array5865.length; index5864++) {
                        let key = array5865[index5864];
                        {
                            njq.style.setProperty(key, c.getStyle(key));
                        }
                    }
                }
            } else {
                for(let index5866=c.getStyleNames().iterator();index5866.hasNext();) {
                    let key = index5866.next();
                    {
                        njq.style.setProperty(key, c.getStyle(key));
                    }
                }
            }
        }

        constructor() {
        }
    }
    ContainerRenderer["__class"] = "framework.renderer.ContainerRenderer";
    ContainerRenderer["__interfaces"] = ["framework.renderer.Renderer"];


}
namespace framework.renderer {
    export interface Renderer<T extends framework.Renderable> {
        /**
         * 
         * @param {*} c
         * @param {HTMLElement} root
         */
        doRender(c? : any, root? : any) : any;
    }
}
namespace framework.util {
    /**
     * The Class IOUtil.
     * 
     * @author Kureem Rossaye<br>
     * kureem@gmail.com Oct 22, 2008
     * @class
     */
    export class IOUtil {
        public static getFileContenntAsString$java_io_File$java_lang_String(file : java.io.File, encoding : string) : string {
            let is : java.io.FileInputStream = new java.io.FileInputStream(file);
            return IOUtil.getStreamContentAsString(is);
        }

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
        public static getFileContenntAsString(file? : any, encoding? : any) : any {
            if(((file != null && file instanceof <any>java.io.File) || file === null) && ((typeof encoding === 'string') || encoding === null)) {
                return <any>framework.util.IOUtil.getFileContenntAsString$java_io_File$java_lang_String(file, encoding);
            } else if(((typeof file === 'string') || file === null) && ((typeof encoding === 'string') || encoding === null)) {
                return <any>framework.util.IOUtil.getFileContenntAsString$java_lang_String$java_lang_String(file, encoding);
            } else if(((file != null && file instanceof <any>java.io.File) || file === null) && encoding === undefined) {
                return <any>framework.util.IOUtil.getFileContenntAsString$java_io_File(file);
            } else if(((typeof file === 'string') || file === null) && encoding === undefined) {
                return <any>framework.util.IOUtil.getFileContenntAsString$java_lang_String(file);
            } else throw new Error('invalid overload');
        }

        public static getFileContenntAsString$java_io_File(file : java.io.File) : string {
            let is : java.io.FileInputStream = new java.io.FileInputStream(file);
            let s : string = <string>new String(IOUtil.getStreamContentAsBytes(is));
            return s;
        }

        public static getFileContenntAsString$java_lang_String$java_lang_String(fileName : string, encoding : string) : string {
            let is : java.io.FileInputStream = new java.io.FileInputStream(fileName);
            return IOUtil.getStreamContentAsString(is);
        }

        public static getFileContenntAsString$java_lang_String(fileName : string) : string {
            let is : java.io.FileInputStream = new java.io.FileInputStream(fileName);
            return <string>new String(IOUtil.getStreamContentAsBytes(is));
        }

        /**
         * Gets the file content as bytes.
         * 
         * @param {string} fileName
         * the file name
         * @return {Array} the file content as bytes
         * @throws Exception
         * the exception
         */
        public static getFileContentAsBytes(fileName : string) : number[] {
            let is : java.io.FileInputStream = new java.io.FileInputStream(fileName);
            return IOUtil.getStreamContentAsBytes(is);
        }

        /**
         * Gets the stream content as string.
         * 
         * @param {java.io.InputStream} is
         * the is
         * @return {string} the stream content as string
         */
        public static getStreamContentAsString(is : java.io.InputStream) : string {
            try {
                let buf : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(is.available());
                is.read(buf);
                let s : string = <string>new String(buf);
                return s;
            } catch(e) {
                throw new java.lang.RuntimeException(e);
            };
        }

        /**
         * Gets the stream content as bytes.
         * 
         * @param {java.io.InputStream} is
         * the is
         * @return {Array} the stream content as bytes
         * @throws Exception
         * the exception
         */
        public static getStreamContentAsBytes(is : java.io.InputStream) : number[] {
            let data : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(is.available());
            if(is.available() === 0) {
                return data;
            }
            is.read(data);
            return data;
        }

        public static writeToFile(content : string, f : java.io.File) : boolean {
            let fout : java.io.FileOutputStream = new java.io.FileOutputStream(f);
            fout.write(/* getBytes */(content).split('').map(s => s.charCodeAt(0)));
            fout.flush();
            fout.close();
            return true;
        }
    }
    IOUtil["__class"] = "framework.util.IOUtil";

}
namespace framework {
    export class Boot {
        public static main(args : string[]) {
            let factory : framework.core.BeanFactory = framework.core.BeanFactory.getInstance();
            let decoratorRegistry : framework.core.DecoratorsRegistry = new framework.core.BasicDecoratorRegistry();
            decoratorRegistry.registerDecorator(new framework.interactions.InteractionsDecorator());
            factory.addBean("framework.core.DecoratorsRegistry", decoratorRegistry);
            let componentFactoryRegistry : framework.builder.libraries.ComponentFactoryRegistry = new framework.builder.libraries.BasicComponentFactoryRegistry();
            let txtTags : string[] = ["h1", "h2", "h3", "h4", "h5", "span", "p", "label"];
            let txtTagsLabels : string[] = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Normal Text", "paragraph", "Label"];
            let tags : string[] = ["div", "a", "img", "ol", "ul", "li", "form", "fieldset", "input", "select", "textarea", "button"];
            for(let i : number = 0; i < txtTags.length; i++) {
                let tag : string = txtTags[i];
                let defaultText : string = txtTagsLabels[i];
                componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.TextComponentFactory(tag, defaultText));
            };
            for(let index5867=0; index5867 < tags.length; index5867++) {
                let tag = tags[index5867];
                {
                    componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.BasicComponentFactory(tag));
                }
            }
            componentFactoryRegistry.registerComponentFactory("lgt:btn", new Boot.Boot$0("lgt:btn"));
            factory.addBean("framework.builder.libraries.ComponentFactoryRegistry", componentFactoryRegistry);
            factory.addBean(framework.builder.Selector, new framework.builder.Selector());
            new framework.builder.Builder("builder").render();
        }
    }
    Boot["__class"] = "framework.Boot";


    export namespace Boot {

        export class Boot$0 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {framework.JSContainer}
             */
            public createInstance(designMode : boolean) : framework.JSContainer {
                let btn : framework.lightning.Button = new framework.lightning.Button();
                btn.setLabel("Button");
                return btn;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$0["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


    }

}
namespace framework.builder.libraries {
    export class BasicComponentFactory extends framework.builder.libraries.AbstractComponentFactory {
        tag : string;

        public constructor(tag : string) {
            super("html:" + tag);
            this.tag = null;
            this.tag = tag;
        }

        /**
         * 
         * @param {boolean} designMode
         * @return {framework.JSContainer}
         */
        public createInstance(designMode : boolean) : framework.JSContainer {
            let container : framework.JSContainer = new framework.JSContainer(this.tag);
            return container;
        }
    }
    BasicComponentFactory["__class"] = "framework.builder.libraries.BasicComponentFactory";
    BasicComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


}
namespace framework.design {
    export class AttributeParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "String", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.AttributeEditor = new framework.builder.properties.AttributeEditor();
            editor.setProperty(this);
            editor.setDesignable(designable);
            return editor;
        }
    }
    AttributeParameter["__class"] = "framework.design.AttributeParameter";

}
namespace framework.design {
    export abstract class BooleanParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "Boolean", category);
        }
    }
    BooleanParameter["__class"] = "framework.design.BooleanParameter";

}
namespace framework.design {
    export class EventScriptParameter extends framework.design.Parameter {
        eventTypeEditor : framework.builder.properties.EventTypeEditor;

        public constructor(name : string, label : string, category : string) {
            super(name, label, "textarea", category);
            this.eventTypeEditor = null;
        }

        public setEventTypeEditor(editor : framework.builder.properties.EventTypeEditor) {
            this.eventTypeEditor = editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.EventScriptEditor = new framework.builder.properties.EventScriptEditor("script", this.eventTypeEditor);
            editor.setProperty(this);
            editor.setDesignable(designable);
            return editor;
        }
    }
    EventScriptParameter["__class"] = "framework.design.EventScriptParameter";

}
namespace framework.design {
    export class EventTypeParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "select", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.EventTypeEditor = new framework.builder.properties.EventTypeEditor("eventType");
            for(let index5868=this.options.iterator();index5868.hasNext();) {
                let opt = index5868.next();
                {
                    let o : framework.JSOption = new framework.JSOption(opt.text, opt.value);
                    editor.addOption(o);
                }
            }
            editor.setDesignable(designable);
            editor.setProperty(this);
            return editor;
        }
    }
    EventTypeParameter["__class"] = "framework.design.EventTypeParameter";

}
namespace framework.design {
    export class NameParameter extends framework.design.Parameter {
        public constructor(label : string, category : string) {
            super("name", label, "String", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.NameEditor = new framework.builder.properties.NameEditor();
            editor.setProperty(this);
            editor.setDesignable(designable);
            return editor;
        }
    }
    NameParameter["__class"] = "framework.design.NameParameter";

}
namespace framework.design {
    export class SelectParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "select", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            return null;
        }
    }
    SelectParameter["__class"] = "framework.design.SelectParameter";

}
namespace framework.design {
    export class StyleParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "String", "Basic");
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.StyleEditor = new framework.builder.properties.StyleEditor();
            editor.setProperty(this);
            editor.setDesignable(designable);
            return editor;
        }
    }
    StyleParameter["__class"] = "framework.design.StyleParameter";

}
namespace framework.design {
    export class TextParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "string", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.TextEditor = new framework.builder.properties.TextEditor("text");
            editor.setDesignable(designable);
            editor.setProperty(this);
            return editor;
        }
    }
    TextParameter["__class"] = "framework.design.TextParameter";

}
namespace framework.interactions {
    export class InteractionsDecorator implements framework.core.Decorator {
        static draggableRenderer : framework.interactions.DraggableRenderer; public static draggableRenderer_$LI$() : framework.interactions.DraggableRenderer { if(InteractionsDecorator.draggableRenderer == null) InteractionsDecorator.draggableRenderer = new framework.interactions.DraggableRenderer(); return InteractionsDecorator.draggableRenderer; };

        static droppableRenderer : framework.interactions.DroppableRenderer; public static droppableRenderer_$LI$() : framework.interactions.DroppableRenderer { if(InteractionsDecorator.droppableRenderer == null) InteractionsDecorator.droppableRenderer = new framework.interactions.DroppableRenderer(); return InteractionsDecorator.droppableRenderer; };

        /**
         * 
         * @param {*} renderable
         */
        public decorate(renderable : framework.Renderable) {
            if(renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Draggable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Draggable") >= 0)) {
                if(!renderable.getRenderers().contains(InteractionsDecorator.draggableRenderer_$LI$())) {
                    renderable.addRenderer(InteractionsDecorator.draggableRenderer_$LI$());
                }
            }
            if(renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) {
                if(!renderable.getRenderers().contains(InteractionsDecorator.droppableRenderer_$LI$())) {
                    renderable.addRenderer(InteractionsDecorator.droppableRenderer_$LI$());
                }
            }
        }

        constructor() {
        }
    }
    InteractionsDecorator["__class"] = "framework.interactions.InteractionsDecorator";
    InteractionsDecorator["__interfaces"] = ["framework.core.Decorator"];


}
namespace framework {
    /**
     * 
     * @author Kurreem
     * @param {string} name
     * @param {string} tag
     * @class
     */
    export class JSContainer implements framework.Renderable, framework.design.Designable, framework.interactions.Droppable {
        /**
         * 
         */
        /*private*/ droppableOptions : JQueryUI.DroppableOptions = null;

        static DEFAULT_RENDERER : framework.renderer.Renderer<any>; public static DEFAULT_RENDERER_$LI$() : framework.renderer.Renderer<any> { if(JSContainer.DEFAULT_RENDERER == null) JSContainer.DEFAULT_RENDERER = new framework.renderer.ContainerRenderer(); return JSContainer.DEFAULT_RENDERER; };

        /*private*/ listeners : java.util.Map<string, java.util.List<framework.EventListener>> = <any>(new java.util.HashMap<any, any>());

        /*private*/ id : string;

        /*private*/ data : any;

        /*private*/ attributes : java.util.Map<string, string> = <any>(new java.util.HashMap<any, any>());

        /*private*/ styles : java.util.Map<string, string> = <any>(new java.util.HashMap<any, any>());

        /*private*/ parent : JSContainer;

        /*private*/ children : java.util.List<JSContainer> = <any>(new java.util.LinkedList<any>());

        /*private*/ html : string = "";

        /*private*/ tag : string = "";

        /*private*/ name : string = "";

        /*private*/ rendered : boolean = false;

        /*private*/ renderers : java.util.List<framework.renderer.Renderer<any>> = <any>(new java.util.ArrayList<any>());

        /*private*/ changedAttributes : java.util.List<string> = <any>(new java.util.LinkedList<any>());

        /*private*/ changedStyles : java.util.List<string> = <any>(new java.util.LinkedList<any>());

        /*private*/ commands : java.util.List<JSContainer.JSCommand> = <any>(new java.util.LinkedList<any>());

        /*private*/ component : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();

        public constructor(name? : any, tag? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof tag === 'string') || tag === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.id = null;
                this.data = null;
                this.parent = null;
                this.droppableOptions = null;
                this.listeners = <any>(new java.util.HashMap<any, any>());
                this.attributes = <any>(new java.util.HashMap<any, any>());
                this.styles = <any>(new java.util.HashMap<any, any>());
                this.children = <any>(new java.util.LinkedList<any>());
                this.html = "";
                this.tag = "";
                this.name = "";
                this.rendered = false;
                this.renderers = <any>(new java.util.ArrayList<any>());
                this.changedAttributes = <any>(new java.util.LinkedList<any>());
                this.changedStyles = <any>(new java.util.LinkedList<any>());
                this.commands = <any>(new java.util.LinkedList<any>());
                this.component = new framework.builder.marshalling.Component();
                this.id = null;
                this.data = null;
                this.parent = null;
                (() => {
                    this.tag = tag;
                    this.name = name;
                })();
            } else if(((typeof name === 'string') || name === null) && tag === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let tag : any = __args[0];
                this.id = null;
                this.data = null;
                this.parent = null;
                this.droppableOptions = null;
                this.listeners = <any>(new java.util.HashMap<any, any>());
                this.attributes = <any>(new java.util.HashMap<any, any>());
                this.styles = <any>(new java.util.HashMap<any, any>());
                this.children = <any>(new java.util.LinkedList<any>());
                this.html = "";
                this.tag = "";
                this.name = "";
                this.rendered = false;
                this.renderers = <any>(new java.util.ArrayList<any>());
                this.changedAttributes = <any>(new java.util.LinkedList<any>());
                this.changedStyles = <any>(new java.util.LinkedList<any>());
                this.commands = <any>(new java.util.LinkedList<any>());
                this.component = new framework.builder.marshalling.Component();
                this.id = null;
                this.data = null;
                this.parent = null;
                (() => {
                    this.tag = tag;
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {Array}
         */
        public getChangedAttributes() : string[] {
            return this.changedAttributes.toArray<any>(new Array(this.changedAttributes.size()));
        }

        public getNative() : HTMLElement {
            let elem : HTMLElement = document.getElementById(this.getId());
            if(elem != null) {
                return elem;
            } else {
                throw new java.lang.RuntimeException("The component " + this.getId() + " has not been rendered yet. Cannot retrieve native dom");
            }
        }

        /**
         * 
         * @return {Array}
         */
        public getChangedStyles() : string[] {
            return this.changedStyles.toArray<any>(new Array(this.changedStyles.size()));
        }

        public flush(s : string) {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"a28n12l10"))) {
                this.changedAttributes.clear();
                this.changedStyles.clear();
                this.commands.clear();
            }
        }

        /**
         * 
         * @return {*}
         */
        public getRenderers() : java.util.List<framework.renderer.Renderer<any>> {
            return this.renderers;
        }

        /**
         * 
         * @param {*} renderer
         * @return {framework.JSContainer}
         */
        public addRenderer(renderer : framework.renderer.Renderer<any>) : JSContainer {
            if(!this.renderers.contains(renderer)) {
                this.renderers.add(renderer);
            }
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getId() : string {
            if(this.id == null) {
                this.id = this.uid();
            }
            return this.id;
        }

        /**
         * 
         * @return {string}
         */
        public uid() : string {
            framework.core.Global.idCount++;
            return framework.core.Global.idCount + "";
        }

        /**
         * 
         * @param {string} styleClass
         * @return {framework.JSContainer}
         */
        public addClass(styleClass : string) : JSContainer {
            let styles : string = this.getAttribute("class");
            if(styles == null) {
                styles = "";
            }
            let aStyles : string[] = styles.split(" ");
            let add : boolean = true;
            for(let index5869=0; index5869 < aStyles.length; index5869++) {
                let style = aStyles[index5869];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(style.trim(),styleClass))) {
                        add = false;
                    }
                }
            }
            if(add) this.setAttribute("class", styles.trim() + " " + styleClass);
            return this;
        }

        /**
         * 
         * @param {string} cls
         * @return {framework.JSContainer}
         */
        public removeClass(cls : string) : JSContainer {
            let cl : string = this.getAttribute("class");
            if(cl != null && cl.length > 0) {
                cl = /* replace */cl.split(cls).join("");
                this.setAttribute("class", cl);
            }
            return this;
        }

        public addChild(child? : any, layoutData? : any) : any {
            if(((child != null && child instanceof <any>framework.JSContainer) || child === null) && layoutData === undefined) {
                return <any>this.addChild$framework_JSContainer(child);
            } else throw new Error('invalid overload');
        }

        public addChild$framework_JSContainer(container : JSContainer) : JSContainer {
            container.parent = this;
            this.children.add(container);
            return this;
        }

        /**
         * 
         * @param {number} index
         * @param {framework.JSContainer} child
         * @return {framework.JSContainer}
         */
        public addChildAt(index : number, child : JSContainer) : JSContainer {
            child.parent = this;
            this.children.add(index, child);
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        public setVisible(b : boolean) : JSContainer {
            if(!b) {
                this.setStyle("display", "none");
            } else {
                this.styles.remove("display");
                this.setRendered(false);
            }
            return this;
        }

        /**
         * 
         * @param {*} listener
         * @param {string} type
         * @return {framework.JSContainer}
         */
        public addEventListener(listener : framework.EventListener, type : string) : JSContainer {
            if(!this.listeners.containsKey(type)) {
                this.listeners.put(type, <any>(new java.util.ArrayList<any>()));
            }
            if(!this.listeners.get(type).contains(listener)) {
                this.listeners.get(type).add(listener);
            }
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getTag() : string {
            return this.tag;
        }

        /**
         * 
         * @param {string} tag
         * @return {framework.JSContainer}
         */
        public setTag(tag : string) : JSContainer {
            this.tag = tag;
            return this;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        public setStyle(key : string, value : string) : JSContainer {
            this.changedStyles.add(key);
            this.styles.put(key, value);
            return this;
        }

        /**
         * 
         * @param {string} key
         * @return {string}
         */
        public getStyle(key : string) : string {
            return this.styles.get(key);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        public setAttribute(key : string, value : string) : JSContainer {
            this.changedAttributes.add(key);
            this.attributes.put(key, value);
            return this;
        }

        public exec$java_lang_String$jsweet_lang_Object(name : string, parameter : Object) {
            this.commands.add(new JSContainer.JSCommand(this, name, JSON.stringify(parameter)));
        }

        /**
         * 
         * @param {string} name
         * @param {Object} parameter
         */
        public exec(name? : any, parameter? : any) : any {
            if(((typeof name === 'string') || name === null) && ((parameter != null && parameter instanceof <any>Object) || parameter === null)) {
                return <any>this.exec$java_lang_String$jsweet_lang_Object(name, parameter);
            } else if(((typeof name === 'string') || name === null) && ((typeof parameter === 'string') || parameter === null)) {
                return <any>this.exec$java_lang_String$java_lang_String(name, parameter);
            } else if(((typeof name === 'string') || name === null) && parameter === undefined) {
                return <any>this.exec$java_lang_String(name);
            } else throw new Error('invalid overload');
        }

        public exec$java_lang_String$java_lang_String(name : string, variable : string) {
            this.commands.add(new JSContainer.JSCommand(this, name, variable));
        }

        public exec$java_lang_String(name : string) {
            this.exec$java_lang_String$java_lang_String(name, <string>null);
        }

        /**
         * 
         * @return {*}
         */
        public getCommands() : java.lang.Iterable<JSContainer.JSCommand> {
            return this.commands;
        }

        /**
         * 
         * @param {string} key
         * @return {string}
         */
        public getAttribute(key : string) : string {
            return this.attributes.get(key);
        }

        /**
         * 
         * @return {string}
         */
        public getName() : string {
            return this.name;
        }

        /**
         * 
         * @param {string} name
         */
        public setName(name : string) {
            this.name = name;
            this.setAttribute("name", name);
        }

        /**
         * 
         * @return {framework.JSContainer}
         */
        public getParent() : JSContainer {
            return this.parent;
        }

        /**
         * 
         * @return {*}
         */
        public getChildren() : java.util.List<JSContainer> {
            return this.children;
        }

        /**
         * 
         * @return {*}
         */
        public getStyleNames() : java.util.Set<string> {
            return this.styles.keySet();
        }

        /**
         * 
         * @return {*}
         */
        public getAttributeNames() : java.util.Set<string> {
            return this.attributes.keySet();
        }

        /**
         * 
         * @return {string}
         */
        public getHtml() : string {
            return this.html;
        }

        /**
         * 
         * @param {string} h
         * @return {framework.JSContainer}
         */
        public setHtml(h : string) : JSContainer {
            this.html = h;
            this.setRendered(false);
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public isRendered() : boolean {
            return this.rendered;
        }

        /**
         * 
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        public setRendered(b : boolean) : JSContainer {
            this.rendered = b;
            if(!b) {
                for(let index5870=this.children.iterator();index5870.hasNext();) {
                    let child = index5870.next();
                    {
                        child.setRendered(b);
                    }
                }
            }
            return this;
        }

        /**
         * 
         * @return {*}
         */
        public getListeners() : java.util.Map<string, java.util.List<framework.EventListener>> {
            return this.listeners;
        }

        public render$() {
            if(this.parent == null) this.render$jsweet_dom_HTMLElement(null); else this.render$jsweet_dom_HTMLElement(document.getElementById(this.parent.getId()));
        }

        public render$jsweet_dom_HTMLElement(parent : HTMLElement) {
            if(this.renderers.isEmpty()) {
                this.renderers.add(JSContainer.DEFAULT_RENDERER_$LI$());
            }
            if(!this.renderers.contains(JSContainer.DEFAULT_RENDERER_$LI$())) {
                this.renderers.add(0, JSContainer.DEFAULT_RENDERER_$LI$());
            }
            for(let index5871=this.renderers.iterator();index5871.hasNext();) {
                let renderer = index5871.next();
                renderer.doRender(this, parent)
            }
            for(let index5872=this.getChildren().iterator();index5872.hasNext();) {
                let child = index5872.next();
                {
                    child.render();
                }
            }
            this.rendered = true;
        }

        /**
         * 
         * @param {HTMLElement} parent
         */
        public render(parent? : any) : any {
            if(((parent != null && parent instanceof <any>HTMLElement) || parent === null)) {
                return <any>this.render$jsweet_dom_HTMLElement(parent);
            } else if(parent === undefined) {
                return <any>this.render$();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {*}
         */
        public getData() : any {
            return this.data;
        }

        /**
         * 
         * @param {*} data
         */
        public setData(data : any) {
            this.data = data;
        }

        public getAncestorWithClass<T extends JSContainer>(cls : string) : T {
            if(this.parent == null) {
                return null;
            }
            {
                let array5874 = this.parent.getAttribute("class").split(" ");
                for(let index5873=0; index5873 < array5874.length; index5873++) {
                    let s = array5874[index5873];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s.trim(),cls))) return <T>this.parent;
                    }
                }
            }
            return <any>((<JSContainer>this.parent).getAncestorWithClass<any>(cls));
        }

        /**
         * 
         * @param {string} id
         * @return {framework.JSContainer}
         */
        public getAncestorById(id : string) : JSContainer {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getId(),id))) return <JSContainer>this;
            if(this.parent == null) {
                return null;
            }
            return this.parent.getAncestorById(id);
        }

        /**
         * 
         * @param {string} name
         * @return {framework.JSContainer}
         */
        public getAncestorByName(name : string) : JSContainer {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getName(),name))) return this;
            if(this.parent == null) {
                return null;
            }
            return this.parent.getAncestorByName(name);
        }

        /**
         * 
         * @return {framework.JSContainer}
         */
        public getRoot() : JSContainer {
            if(this.parent == null) {
                return this;
            } else {
                return this.parent.getRoot();
            }
        }

        public setParameter$java_lang_String$java_lang_String$boolean(key : string, value : string, designMode : boolean) {
            this.component.parameters[key] = value;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        public setParameter(key? : any, value? : any, designMode? : any) : any {
            if(((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((typeof designMode === 'boolean') || designMode === null)) {
                return <any>this.setParameter$java_lang_String$java_lang_String$boolean(key, value, designMode);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.component;
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = <any>(new java.util.LinkedList<any>());
            params.add(new framework.design.NameParameter("Name", "Basic"));
            params.add(new framework.design.AttributeParameter("class", "Style class", "Basic"));
            params.add(new framework.design.StyleParameter("width", "Width", "Basic"));
            params.add(new framework.design.StyleParameter("height", "Height", "Basic"));
            let eventTypes : framework.design.EventTypeParameter = new framework.design.EventTypeParameter("eventType", "Event", "event");
            eventTypes.options.add(new framework.design.Option("Click", "click"));
            eventTypes.options.add(new framework.design.Option("Double click", "dblclick"));
            params.add(eventTypes);
            let script : framework.design.EventScriptParameter = new framework.design.EventScriptParameter("script", "Script", "event");
            params.add(script);
            return params;
        }

        /**
         * 
         * @return {*}
         */
        public getDroppableOptions() : JQueryUI.DroppableOptions {
            return this.droppableOptions;
        }

        public setDroppableOptions(options : JQueryUI.DroppableOptions) {
            this.droppableOptions = options;
        }
    }
    JSContainer["__class"] = "framework.JSContainer";
    JSContainer["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



    export namespace JSContainer {

        export class JSCommand {
            public __parent: any;
            name : string;

            parameters : Object;

            variable : string;

            public constructor(__parent: any, name : string, vari : string) {
                this.__parent = __parent;
                this.name = null;
                this.parameters = null;
                this.variable = null;
                __parent.name = name;
                this.variable = vari;
            }

            public getVariable() : string {
                return this.variable;
            }

            public getName() : string {
                return this.__parent.name;
            }

            public setName(name : string) {
                this.__parent.name = name;
            }

            public getParameters() : Object {
                return this.parameters;
            }

            public setParameters(parameters : Object) {
                this.parameters = parameters;
            }
        }
        JSCommand["__class"] = "framework.JSContainer.JSCommand";

    }

}
namespace framework.builder.libraries {
    export class TextComponentFactory extends framework.builder.libraries.BasicComponentFactory {
        /*private*/ defaultText : string;

        public constructor(tag : string, defaultTxt : string) {
            super(tag);
            this.defaultText = null;
            this.defaultText = defaultTxt;
        }

        /**
         * 
         * @param {boolean} designMode
         * @return {framework.JSContainer}
         */
        public createInstance(designMode : boolean) : framework.JSContainer {
            let instance : framework.JSContainer = new framework.TextComponent(this.tag, this.tag);
            instance.setHtml(this.defaultText);
            return instance;
        }
    }
    TextComponentFactory["__class"] = "framework.builder.libraries.TextComponentFactory";
    TextComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


}
namespace framework.builder {
    export class Component extends framework.JSContainer implements framework.interactions.Draggable {
        /*private*/ titleFigure : framework.JSContainer = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");

        /*private*/ avatar : framework.JSContainer = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large");

        /*private*/ initial : framework.JSContainer = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-app-launcher__title-label");

        /*private*/ componentFactoryRegistry : framework.builder.libraries.ComponentFactoryRegistry = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry"));

        public constructor(identifier : string, initial : string, label : string) {
            super(identifier, "div");
            this.setAttribute("identifier", identifier);
            this.addClass("designer-component");
            this.addChild$framework_JSContainer(this.titleFigure.setAttribute("identifier", identifier));
            this.titleFigure.addChild$framework_JSContainer(this.avatar.setAttribute("identifier", identifier));
            this.avatar.addChild$framework_JSContainer(this.initial.setAttribute("identifier", identifier));
            this.initial.setAttribute("title", label);
            this.initial.setHtml(initial);
            this.titleFigure.addChild$framework_JSContainer(this.title.setAttribute("identifier", identifier));
            this.title.setHtml(label);
        }

        public getFactory() : framework.builder.marshalling.ComponentFactory {
            return this.componentFactoryRegistry.getComponentFactory(this.getName());
        }

        /**
         * 
         * @return {*}
         */
        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let opts : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            opts.appendTo = "body";
            opts.revert = true;
            opts.zIndex = 1000;
            opts.helper = "clone";
            return opts;
        }
    }
    Component["__class"] = "framework.builder.Component";
    Component["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class Selector extends framework.JSContainer implements framework.EventListener {
        /*private*/ selected : framework.JSContainer = null;

        /*private*/ visualEditor : framework.builder.VisualEditor;

        public constructor() {
            super("selector", "div");
            this.visualEditor = null;
            this.addClass("designer-selector");
            this.addEventListener(this, "click");
        }

        public setVisualEditor(editor : framework.builder.VisualEditor) {
            this.visualEditor = editor;
        }

        public getSelected() : framework.JSContainer {
            return this.selected;
        }

        public select(component : framework.design.Designable) {
            try {
                let jqSelector : JQuery = <JQuery>$(this.getNative());
                let jqComponent : JQuery = <JQuery>$(component.getNative());
                jqSelector.width(jqComponent.outerWidth());
                jqSelector.height(jqComponent.outerHeight());
                let options : JQueryUI.JQueryPositionOptions = <any>Object.defineProperty({

                }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.JQueryPositionOptions"] });
                options.my = "top left";
                options.at = "top left";
                options.of = jqComponent;
                jqSelector.position(options);
                this.visualEditor.selectItem(component);
            } catch(e) {
            };
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            source.setStyle("width", "0px");
            source.setStyle("height", "0px");
        }
    }
    Selector["__class"] = "framework.builder.Selector";
    Selector["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class VisualEditor extends framework.JSContainer {
        /*private*/ builder : framework.builder.Builder;

        /*private*/ selectedItem : framework.JSContainer;

        /*private*/ root : framework.design.Designable;

        /*private*/ selector : framework.builder.Selector;

        /*private*/ composers : framework.JSContainer = new framework.JSContainer("composers", "div");

        /*private*/ propertiesDockedComposer : framework.builder.properties.PropertiesDockedComposer = new framework.builder.properties.PropertiesDockedComposer("properties");

        /*private*/ libraryDockedComposer : framework.builder.libraries.LibrariesDockedComposer = new framework.builder.libraries.LibrariesDockedComposer("library");

        public constructor(builder : framework.builder.Builder) {
            super("visualEditor", "div");
            this.builder = null;
            this.selectedItem = null;
            this.root = null;
            this.selector = null;
            this.addClass("visual-editor");
            this.addChild$framework_JSContainer(this.composers);
            this.composers.addClass("composers");
            this.composers.addChild$framework_JSContainer(this.propertiesDockedComposer);
            this.composers.addChild$framework_JSContainer(this.libraryDockedComposer);
            this.builder = builder;
            this.selector = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.Selector));
            this.selector.setVisualEditor(this);
            this.addChild$framework_JSContainer(this.selector);
        }

        public newProject() : framework.design.Designable {
            let rootComponent : framework.builder.BasicComponent = new framework.builder.BasicComponent("div", "div", "DIV");
            this.root = rootComponent.getFactory().build(new framework.builder.marshalling.Component(), true);
            this.root.setStyle("width", "100%");
            this.root.setStyle("height", "200px");
            this.addChild$framework_JSContainer(<framework.JSContainer><any>this.root);
            return this.root;
        }

        public getRootItem() : framework.design.Designable {
            return this.root;
        }

        public getSelectedItem() : framework.JSContainer {
            return this.selectedItem;
        }

        public selectItem(designable : framework.design.Designable) {
            this.propertiesDockedComposer.selectComponent(designable);
        }

        public getBuilder() : framework.builder.Builder {
            return this.builder;
        }
    }
    VisualEditor["__class"] = "framework.builder.VisualEditor";
    VisualEditor["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework {
    export class JSCheckBox extends framework.JSContainer implements framework.InputField<boolean> {
        public constructor(name : string) {
            super(name, "input");
            this.setAttribute("type", framework.InputTypes.checkbox);
        }

        public setDisabled(b : boolean) : JSCheckBox {
            if(b) {
                this.setAttribute("disabled", "true");
            } else {
                this.setAttribute("disabled", null);
            }
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public getValue() : boolean {
            if(this.getAttribute("value") != null && /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("true", this.getAttribute("value"))) {
                return true;
            }
            return false;
        }

        public setValue$java_lang_Boolean(b : boolean) {
            if(b) {
                this.setAttribute("value", "true");
                this.setAttribute("checked", "true");
            } else {
                this.setAttribute("value", "false");
                this.setAttribute("checked", null);
            }
        }

        /**
         * 
         * @param {boolean} b
         */
        public setValue(b? : any) : any {
            if(((typeof b === 'boolean') || b === null)) {
                return <any>this.setValue$java_lang_Boolean(b);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
            this.setAttribute("value", value);
        }

        public isChecked() : boolean {
            return this.getValue();
        }

        public setChecked(b : boolean) {
            this.setValue$java_lang_Boolean(b);
        }
    }
    JSCheckBox["__class"] = "framework.JSCheckBox";
    JSCheckBox["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework {
    export class JSInput extends framework.JSContainer implements framework.InputField<string> {
        public constructor(name : string) {
            super(name, "input");
            this.setType(framework.InputTypes.text);
        }

        public setType(type : string) : JSInput {
            this.setAttribute("type", type.toString());
            return this;
        }

        public setDisabled(b : boolean) : JSInput {
            if(b) {
                this.setAttribute("disabled", "true");
            } else {
                this.setAttribute("disabled", null);
            }
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue() : string {
            return this.getAttribute("value");
        }

        public setValue$java_lang_String(val : string) {
            this.setAttribute("value", val);
        }

        /**
         * 
         * @param {string} val
         */
        public setValue(val? : any) : any {
            if(((typeof val === 'string') || val === null)) {
                return <any>this.setValue$java_lang_String(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
            this.setAttribute("value", value);
        }
    }
    JSInput["__class"] = "framework.JSInput";
    JSInput["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework {
    export class JSOption extends framework.JSContainer {
        public constructor(text : string, value : string) {
            super("option");
            this.setAttribute("value", value);
            this.setHtml(text);
        }

        public getValue() : string {
            return this.getAttribute("value");
        }

        public setValue(value : string) {
            this.setAttribute("value", value);
        }

        public getText() : string {
            return this.getHtml();
        }

        public setText(label : string) {
            this.setHtml(label);
        }

        public setSelected(b : boolean) {
            if(b) {
                this.setAttribute("selected", "true");
            } else {
                this.setAttribute("selected", null);
            }
        }
    }
    JSOption["__class"] = "framework.JSOption";
    JSOption["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework {
    export class JSSelect extends framework.JSContainer implements framework.InputField<string> {
        public constructor(name : string) {
            super(name, "select");
        }

        public addOption(option : framework.JSOption) : JSSelect {
            this.addChild$framework_JSContainer(option);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue() : string {
            let val : string = this.getAttribute("value");
            for(let index5875=this.getChildren().iterator();index5875.hasNext();) {
                let opt = index5875.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(opt.getAttribute("value"),val))) {
                        return (<framework.JSOption>opt).getValue();
                    }
                }
            }
            return null;
        }

        public setValue$java_lang_String(val : string) {
            for(let index5876=this.getChildren().iterator();index5876.hasNext();) {
                let opt = index5876.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(opt.getAttribute("value"),val))) {
                        (<framework.JSOption>opt).setSelected(true);
                    }
                }
            }
        }

        /**
         * 
         * @param {string} val
         */
        public setValue(val? : any) : any {
            if(((typeof val === 'string') || val === null)) {
                return <any>this.setValue$java_lang_String(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
            this.setAttribute("value", value);
        }
    }
    JSSelect["__class"] = "framework.JSSelect";
    JSSelect["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework {
    export class JSTextArea extends framework.JSContainer implements framework.InputField<string> {
        public constructor(name : string) {
            super(name, "textarea");
        }

        public setDisabled(b : boolean) : JSTextArea {
            if(b) {
                this.setAttribute("disabled", "true");
            } else {
                this.setAttribute("disabled", null);
            }
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue() : string {
            return this.getAttribute("value");
        }

        public setValue$java_lang_String(val : string) {
            this.setAttribute("value", val);
        }

        /**
         * 
         * @param {string} val
         */
        public setValue(val? : any) : any {
            if(((typeof val === 'string') || val === null)) {
                return <any>this.setValue$java_lang_String(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
            this.setAttribute("value", value);
        }
    }
    JSTextArea["__class"] = "framework.JSTextArea";
    JSTextArea["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework.lightning {
    export class Accordion extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "ul");
        }
    }
    Accordion["__class"] = "framework.lightning.Accordion";
    Accordion["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



    export namespace Accordion {

        export class JSAccordionItem extends framework.JSContainer {
            public __parent: any;
            accordionSection : framework.JSContainer;

            accordionSummary : framework.JSContainer;

            accordionSummaryHeading : framework.JSContainer;

            public constructor(__parent: any, name : string) {
                super(name, "li");
                this.__parent = __parent;
                this.accordionSection = new framework.JSContainer("section").addClass("slds-accordion__section");
                this.accordionSummary = new framework.JSContainer("div").addClass("slds-accordion__summary");
                this.accordionSummaryHeading = new framework.JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");
                this.addClass("slds-accordion__list-item");
                this.addChild$framework_JSContainer(this.accordionSection);
                this.accordionSection.addChild$framework_JSContainer(this.accordionSummary);
                this.accordionSummary.addChild$framework_JSContainer(this.accordionSummaryHeading);
            }
        }
        JSAccordionItem["__class"] = "framework.lightning.Accordion.JSAccordionItem";
        JSAccordionItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


    }

}
namespace framework.lightning {
    export class Avatar extends framework.JSContainer {
        /*private*/ image : framework.JSContainer = new framework.JSContainer("img");

        public static SMALL : string = "slds-avatar_small";

        public static X_SMALL : string = "slds-avatar_x-small";

        public static MEDIUM : string = "slds-avatar_medium";

        public static LARGE : string = "slds-avatar_large";

        public constructor(name : string) {
            super("span");
            this.addClass("slds-avatar");
            this.addChild$framework_JSContainer(this.image);
        }

        public getImage() : framework.JSContainer {
            return this.image;
        }

        public setSize(size : string) : Avatar {
            this.removeClass(Avatar.LARGE).removeClass(Avatar.MEDIUM).removeClass(Avatar.SMALL).removeClass(Avatar.X_SMALL);
            this.addClass(size);
            return this;
        }

        public setCircle(b : boolean) : Avatar {
            if(b) {
                this.addClass("slds-avatar_circle");
            } else {
                this.removeClass("slds-avatar_circle");
            }
            return this;
        }
    }
    Avatar["__class"] = "framework.lightning.Avatar";
    Avatar["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Badge extends framework.JSContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-badge");
        }
    }
    Badge["__class"] = "framework.lightning.Badge";
    Badge["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Box extends framework.JSContainer {
        public static DEFAULT : string = "";

        public static SMALL : string = "slds-box_small";

        public static X_SMALL : string = "slds-box_x-small";

        public static XX_SMALL : string = "slds-box_xx-small";

        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-box");
        }

        public setSize(size : string) : Box {
            return <Box>this.removeClass(Box.DEFAULT).removeClass(Box.SMALL).removeClass(Box.XX_SMALL).removeClass(Box.X_SMALL).addClass(size);
        }
    }
    Box["__class"] = "framework.lightning.Box";
    Box["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class BreadcrumbItem extends framework.JSContainer {
        public constructor(name : string) {
            super("li");
            this.addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
        }
    }
    BreadcrumbItem["__class"] = "framework.lightning.BreadcrumbItem";
    BreadcrumbItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Breadcrumbs extends framework.JSContainer {
        /*private*/ breadcrumb : framework.lightning.HorizontalList = new framework.lightning.HorizontalList("breadcrumb");

        public constructor(name : string) {
            super(name, "nav");
            this.setAttribute("role", "navigation");
            this.setAttribute("aria-label", "Breadcrumbs");
            this.breadcrumb.setTag("ol");
            this.breadcrumb.addClass("slds-wrap");
            this.addChild$framework_JSContainer(this.breadcrumb);
        }

        public addItem$java_lang_String$java_lang_String(name : string, label : string) : Breadcrumbs {
            let item : framework.lightning.BreadcrumbItem = new framework.lightning.BreadcrumbItem("");
            let link : framework.JSContainer = new framework.JSContainer(name, "a");
            link.setAttribute("href", "javascript:void(0);");
            link.setHtml(label);
            item.addChild$framework_JSContainer(link);
            this.breadcrumb.addChild$framework_JSContainer(item);
            return this;
        }

        public addItem(name? : any, label? : any) : any {
            if(((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.addItem$java_lang_String$java_lang_String(name, label);
            } else if(((name != null && name instanceof <any>framework.JSContainer) || name === null) && label === undefined) {
                return <any>this.addItem$framework_JSContainer(name);
            } else throw new Error('invalid overload');
        }

        public addItem$framework_JSContainer(link : framework.JSContainer) : Breadcrumbs {
            let item : framework.lightning.BreadcrumbItem = new framework.lightning.BreadcrumbItem("");
            this.breadcrumb.addChild$framework_JSContainer(item);
            return this;
        }
    }
    Breadcrumbs["__class"] = "framework.lightning.Breadcrumbs";
    Breadcrumbs["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Button extends framework.JSContainer implements framework.design.Designable {
        static states : string[]; public static states_$LI$() : string[] { if(Button.states == null) Button.states = ["neutral", "brand", "destructive", "success"]; return Button.states; };

        static stateLabels : string[]; public static stateLabels_$LI$() : string[] { if(Button.stateLabels == null) Button.stateLabels = ["Neutral", "Brand", "Destructive", "Success"]; return Button.stateLabels; };

        public static STATE_NEUTRAL : string = "neutral";

        public static STATE_BRAND : string = "brand";

        public static STATE_DESTRUCTIVE : string = "destructive";

        public static STATE_SUCCESS : string = "success";

        /*private*/ __framework_lightning_Button_component : framework.builder.marshalling.Component;

        public constructor(name? : any) {
            if(((typeof name === 'string') || name === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "button");
                this.__framework_lightning_Button_component = new framework.builder.marshalling.Component();
                (() => {
                    this.addClass("slds-button");
                })();
            } else if(name === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let name : any = "Button";
                    super(name, "button");
                    this.__framework_lightning_Button_component = new framework.builder.marshalling.Component();
                    (() => {
                        this.addClass("slds-button");
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public addIcon(icon : framework.lightning.Icon) : Button {
            this.addClass("slds-button_icon");
            this.addChild$framework_JSContainer(icon);
            return this;
        }

        public setLabel(label : string) : Button {
            this.setHtml(label);
            return this;
        }

        public setState(state : string) : Button {
            for(let index5877=0; index5877 < Button.states_$LI$().length; index5877++) {
                let s = Button.states_$LI$()[index5877];
                {
                    this.removeClass("slds-button_" + s);
                }
            }
            this.addClass("slds-button_" + state);
            return this;
        }

        public setInverse(b : boolean) : Button {
            if(b) {
                this.addClass("slds-button_inverse");
            } else {
                this.removeClass("slds-button_inverse");
            }
            return this;
        }

        public setDisabled(b : boolean) : Button {
            if(b) {
                this.addClass("slds-button_disabled");
            } else {
                this.removeClass("slds-button_disabled");
            }
            return this;
        }

        public setStateful(b : boolean) : Button {
            if(b) {
                this.addClass("slds-button_stateful");
            } else {
                this.removeClass("slds-button_stateful");
            }
            return this;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        public setParameter(key? : any, value? : any, designMode? : any) : any {
            if(((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((typeof designMode === 'boolean') || designMode === null)) {
                super.setParameter(key, value, designMode);
            } else if(((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && designMode === undefined) {
                return <any>this.setParameter$java_lang_String$java_lang_String(key, value);
            } else throw new Error('invalid overload');
        }

        public setParameter$java_lang_String$java_lang_String(key : string, value : string) {
            this.__framework_lightning_Button_component.parameters[key] = value;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"state"))) {
                this.setState(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"stateful"))) {
                this.setStateful(javaemul.internal.BooleanHelper.parseBoolean(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"disabled"))) {
                this.setDisabled(javaemul.internal.BooleanHelper.parseBoolean(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"inverse"))) {
                this.setInverse(javaemul.internal.BooleanHelper.parseBoolean(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"label"))) {
                this.setLabel(value);
            } else {
                throw new java.lang.RuntimeException("Unknow parameter key:" + value + " Class: framework.lightning.Button");
            }
        }

        public getParameters() : java.util.List<framework.design.Parameter> {
            let result : java.util.List<framework.design.Parameter> = super.getParameters();
            result.add(this.createParameter("label", "Label", "String"));
            result.add(this.createParameter("stateful", "Stateful", "Boolean"));
            result.add(this.createParameter("disabled", "Disabled", "Boolean"));
            result.add(this.createParameter("inverse", "Inverse", "Boolean"));
            let paramstates : framework.design.Parameter = this.createParameter("state", "State", "select");
            for(let i : number = 0; i < Button.stateLabels_$LI$().length; i++) {
                let opt : framework.design.Option = new framework.design.Option();
                opt.text = Button.stateLabels_$LI$()[i];
                opt.value = Button.states_$LI$()[i];
                paramstates.options.add(opt);
            };
            result.add(paramstates);
            return result;
        }

        /*private*/ createParameter(name : string, label : string, type : string) : framework.design.Parameter {
            let p : framework.design.Parameter = new framework.design.AttributeParameter(name, label, "advanced");
            p.name = name;
            p.type = type;
            p.label = label;
            return p;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.__framework_lightning_Button_component;
        }
    }
    Button["__class"] = "framework.lightning.Button";
    Button["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class ButtonGroup extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-button-group");
        }

        public addButton$framework_lightning_Button(btn : framework.lightning.Button) : ButtonGroup {
            return this.addElement(btn, false);
        }

        public addButton$framework_lightning_Button$boolean(btn : framework.lightning.Button, isLast : boolean) : ButtonGroup {
            return this.addElement(btn, isLast);
        }

        public addButton(btn? : any, isLast? : any) : any {
            if(((btn != null && btn instanceof <any>framework.lightning.Button) || btn === null) && ((typeof isLast === 'boolean') || isLast === null)) {
                return <any>this.addButton$framework_lightning_Button$boolean(btn, isLast);
            } else if(((btn != null && btn instanceof <any>framework.lightning.IconButton) || btn === null) && ((typeof isLast === 'boolean') || isLast === null)) {
                return <any>this.addButton$framework_lightning_IconButton$boolean(btn, isLast);
            } else if(((btn != null && btn instanceof <any>framework.lightning.Button) || btn === null) && isLast === undefined) {
                return <any>this.addButton$framework_lightning_Button(btn);
            } else if(((btn != null && btn instanceof <any>framework.lightning.IconButton) || btn === null) && isLast === undefined) {
                return <any>this.addButton$framework_lightning_IconButton(btn);
            } else throw new Error('invalid overload');
        }

        public addButton$framework_lightning_IconButton(btn : framework.lightning.IconButton) : ButtonGroup {
            return this.addElement(btn, false);
        }

        public addButton$framework_lightning_IconButton$boolean(btn : framework.lightning.IconButton, isLast : boolean) : ButtonGroup {
            return this.addElement(btn, isLast);
        }

        addElement(c : framework.JSContainer, isLast : boolean) : ButtonGroup {
            if(isLast) {
                c.addClass("slds-button_last");
            } else {
                c.removeClass("slds-button_last");
            }
            this.addChild$framework_JSContainer(c);
            return this;
        }
    }
    ButtonGroup["__class"] = "framework.lightning.ButtonGroup";
    ButtonGroup["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Card extends framework.JSContainer {
        /*private*/ header : framework.lightning.Grid = new framework.lightning.Grid("header", "div");

        /*private*/ headerMedia : framework.lightning.Media = new framework.lightning.Media("headerMedia");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").addClass("slds-card__body");

        /*private*/ footer : framework.JSContainer = new framework.JSContainer("footer").addClass("slds-card__footer");

        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-card");
            this.header.addClass("slds-card__header");
            this.header.addChild$framework_JSContainer(this.headerMedia);
            this.addChild$framework_JSContainer(this.header);
            this.addChild$framework_JSContainer(this.body);
            this.addChild$framework_JSContainer(this.footer);
        }

        public getHeader() : framework.lightning.Grid {
            return this.header;
        }

        public getHeaderMedia() : framework.lightning.Media {
            return this.headerMedia;
        }

        public getBody() : framework.JSContainer {
            return this.body;
        }

        public getFooter() : framework.JSContainer {
            return this.footer;
        }
    }
    Card["__class"] = "framework.lightning.Card";
    Card["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class CheckBox extends framework.JSContainer implements framework.InputField<boolean>, framework.EventListener {
        /*private*/ checkbox : framework.JSCheckBox = new framework.JSCheckBox("checkbox");

        /*private*/ checkboxLabel : framework.JSContainer = new framework.JSContainer("checkboxLabel", "label");

        /*private*/ label : framework.JSContainer = new framework.JSContainer("span").addClass("slds-form-element__label");

        public constructor(name : string) {
            super(name, "span");
            this.addClass("slds-checkbox");
            this.addChild$framework_JSContainer(this.checkbox);
            this.checkbox.addClass("slds-assistive-text");
            this.checkboxLabel.addClass("slds-checkbox__label");
            this.addChild$framework_JSContainer(this.checkboxLabel);
            this.checkboxLabel.addChild$framework_JSContainer(new framework.JSContainer("div").addClass("slds-checkbox_faux"));
            this.checkboxLabel.addChild$framework_JSContainer(this.label);
            this.addEventListener(this, "click");
        }

        public setLabel(label : string) : CheckBox {
            this.label.setHtml(label);
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public getValue() : boolean {
            return this.getAttribute("checked") != null;
        }

        public setValue$java_lang_Boolean(val : boolean) {
            this.checkbox.setValue$java_lang_Boolean(val);
        }

        /**
         * 
         * @param {boolean} val
         */
        public setValue(val? : any) : any {
            if(((typeof val === 'boolean') || val === null)) {
                return <any>this.setValue$java_lang_Boolean(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
        }

        public toggle() {
            this.checkbox.setValue$java_lang_Boolean(!this.checkbox.getValue());
        }

        /**
         * 
         * @param {*} listener
         * @param {string} type
         * @return {framework.JSContainer}
         */
        public addEventListener(listener : framework.EventListener, type : string) : framework.JSContainer {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "change")) {
                type = "click";
            }
            return super.addEventListener(listener, type);
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            this.toggle();
        }
    }
    CheckBox["__class"] = "framework.lightning.CheckBox";
    CheckBox["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework.lightning {
    export class CheckBoxButtonGroup extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-checkbox_button-group");
        }

        public addCheckBoxButton(btn : framework.lightning.CheckBox) : CheckBoxButtonGroup {
            btn.setAttribute("class", "slds-button slds-checkbox_button");
            this.addChild$framework_JSContainer(btn);
            return this;
        }
    }
    CheckBoxButtonGroup["__class"] = "framework.lightning.CheckBoxButtonGroup";
    CheckBoxButtonGroup["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class DockedComposerContainer extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-docked_container");
        }
    }
    DockedComposerContainer["__class"] = "framework.lightning.DockedComposerContainer";
    DockedComposerContainer["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class FormElement extends framework.JSContainer {
        /*private*/ label : framework.JSContainer = new framework.JSContainer("label", "label").addClass("slds-form-element__label");

        /*private*/ control : framework.JSContainer = new framework.JSContainer("div").addClass("slds-form-element__control");

        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-form-element");
            this.addChild$framework_JSContainer(this.label);
            this.addChild$framework_JSContainer(this.control);
        }

        public setLabel(label : string) : FormElement {
            this.label.setHtml(label);
            return this;
        }

        public setInput(input : framework.InputField<any>) : FormElement {
            this.control.getChildren().clear();
            this.control.setRendered(false);
            this.control.addChild$framework_JSContainer(<framework.JSContainer><any>input);
            return this;
        }

        public getControl() : framework.JSContainer {
            return this.control;
        }
    }
    FormElement["__class"] = "framework.lightning.FormElement";
    FormElement["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Grid extends framework.JSContainer {
        public static PULL_PADDED_XXX_SMALL : string = "";

        public static PULL_PADDED_XX_SMALL : string = "";

        public static PULL_PADDED_X_SMALL : string = "";

        public static PULL_PADDED_SMALL : string = "";

        public static PULL_PADDED_MEDIUM : string = "";

        public static PULL_PADDED_LARGE : string = "";

        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-grid");
        }

        public toggleClass(cls : string, b : boolean) : Grid {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
            return this;
        }

        public setFrame(b : boolean) : Grid {
            return this.toggleClass("slds-grid_frame", b);
        }

        public setVertical(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical", b);
        }

        public setVerticalReverse(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical-reverse", b);
        }

        public setReverse(b : boolean) : Grid {
            return this.toggleClass("slds-grid_reverse", b);
        }

        public setPullPadded(b : boolean) : Grid {
            return this.toggleClass("slds-grid_pull-padded", b);
        }

        public setPullPaddedSize(size : string) : Grid {
            this.removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
            return this;
        }

        public setAlignCenter(b : boolean) : Grid {
            return this.toggleClass("slds-grid_align-center", b);
        }

        public setAlignSpace(b : boolean) : Grid {
            return this.toggleClass("slds-grid_align-space", b);
        }

        public setAlignSpead(b : boolean) : Grid {
            return this.toggleClass("slds-grid_align-spread", b);
        }

        public setAlignEnd(b : boolean) : Grid {
            return this.toggleClass("slds-grid_align-end", b);
        }

        public setVerticalAlignStart(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical-align-start", b);
        }

        public setVerticalAlignCenter(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical-align-center", b);
        }

        public setVerticalAlignEnd(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical-align-end", b);
        }

        public setVerticalStretch(b : boolean) : Grid {
            return this.toggleClass("slds-grid_vertical-stretch", b);
        }

        public setNoWrap(b : boolean) : Grid {
            this.toggleClass("slds-nowrap", b);
            return this.toggleClass("slds-wrap", !b);
        }

        public setWrap(b : boolean) : Grid {
            this.toggleClass("slds-wrap", b);
            return this.toggleClass("slds-nowrap", !b);
        }
    }
    Grid["__class"] = "framework.lightning.Grid";
    Grid["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class HorizontalList extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "ul");
            this.addClass("slds-list_horizontal");
        }
    }
    HorizontalList["__class"] = "framework.lightning.HorizontalList";
    HorizontalList["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Icon extends framework.JSContainer {
        public static SMALL : string = "slds-button_icon_small";

        public static EXTRA_SMALL : string = "slds-_icon_x-small";

        public static EXTRA_EXTRA_SMALL : string = "slds-button_icon_xx-small";

        public static LARGE : string = "slds-button_icon_large";

        public static TEXT_DEFAULT : string = "slds-icon-text-default";

        public static TEXT_WARNING : string = "slds-icon-text-warning";

        public static TEXT_ERROR : string = "slds-icon-text-error";

        public static TEXT_LIGHT : string = "slds-icon-text-light";

        /*private*/ assetsUrl : string;

        /*private*/ type : string;

        /*private*/ iconName : string;

        public constructor(name? : any, type? : any, iconName? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null) && ((typeof iconName === 'string') || iconName === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "div");
                this.assetsUrl = "/lightning/assets/icons";
                this.type = "utility";
                this.iconName = "settings";
                (() => {
                    this.type = type;
                    this.iconName = iconName;
                    this.refresh();
                })();
            } else if(((typeof name === 'string') || name === null) && type === undefined && iconName === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "div");
                this.assetsUrl = "/lightning/assets/icons";
                this.type = "utility";
                this.iconName = "settings";
                (() => {
                    this.refresh();
                })();
            } else throw new Error('invalid overload');
        }

        public refresh() {
            let html : string = "<svg class=\'slds-button__icon\'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/lightning/2.3.2/assets/icons/utility-sprite/svg/symbols.svg#settings\"></use></svg>";
            this.setHtml(html);
        }

        public getAssetsUrl() : string {
            return this.assetsUrl;
        }

        public setAssetsUrl(assetsUrl : string) {
            this.assetsUrl = assetsUrl;
            this.refresh();
        }

        public getType() : string {
            return this.type;
        }

        public setType(type : string) {
            this.type = type;
            this.refresh();
        }

        public getIconName() : string {
            return this.iconName;
        }

        public setIconName(name : string) {
            this.iconName = name;
            this.refresh();
        }

        public setSize(size : string) : Icon {
            this.removeClass(Icon.EXTRA_EXTRA_SMALL).removeClass(Icon.EXTRA_SMALL).removeClass(Icon.LARGE).removeClass(Icon.SMALL);
            this.addClass(size);
            return this;
        }

        public setTextType(type : string) : Icon {
            this.removeClass(Icon.TEXT_DEFAULT).removeClass(Icon.TEXT_ERROR).removeClass(Icon.TEXT_LIGHT).removeClass(Icon.TEXT_WARNING).addClass(type);
            return this;
        }
    }
    Icon["__class"] = "framework.lightning.Icon";
    Icon["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class IconButton extends framework.JSContainer {
        /*private*/ icon : framework.lightning.Icon = new framework.lightning.Icon("icon");

        static SMALL : string = "slds-button_icon-small";

        static EXTRA_SMALL : string = "slds-button_icon-x-small";

        static EXTRA_EXTRA_SMALL : string = "slds-button_icon-xx-small";

        public constructor(name : string) {
            super(name, "button");
            this.addChild$framework_JSContainer(this.icon.addClass("slds-button__icon"));
            this.addClass("slds-button").addClass("slds-button_icon");
        }

        public setIcon(icon : framework.lightning.Icon) : IconButton {
            this.getChildren().remove(this.icon);
            this.icon = icon;
            icon.addClass("slds-button__icon");
            this.addChild$framework_JSContainer(icon);
            this.setRendered(false);
            return this;
        }

        public toggleClass(cls : string, b : boolean) : IconButton {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
            return this;
        }

        public setContainer(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-container", b);
        }

        public setBorder(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-border", b);
        }

        public setBorderInverse(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-border-inverse", b);
        }

        public setBorderFilled(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-border-filled", b);
        }

        public setInverse(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-inverse", b);
        }

        public setError(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-error", b);
        }

        public setSize(size : string) : IconButton {
            this.toggleClass(IconButton.SMALL, false);
            this.toggleClass(IconButton.EXTRA_SMALL, false).toggleClass(IconButton.EXTRA_EXTRA_SMALL, false).toggleClass(size, true);
            return this;
        }

        public setMore(b : boolean) : IconButton {
            return this.toggleClass("slds-button_icon-more", b);
        }

        public setSelected(b : boolean) : IconButton {
            return this.toggleClass("slds-is-selected", b);
        }
    }
    IconButton["__class"] = "framework.lightning.IconButton";
    IconButton["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Lookup extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-form-element").addClass("slds-lookup");
        }
    }
    Lookup["__class"] = "framework.lightning.Lookup";
    Lookup["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class LTContainer extends framework.JSContainer {
        public static FLOAT_LEFT : string = "slds-float_left";

        public static FLOAT_RIGHT : string = "slds-float_right";

        public static FLOAT_NONE : string = "slds-float_none";

        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        public setFloat(sfloat : string) : LTContainer {
            this.removeClass(LTContainer.FLOAT_LEFT).removeClass(LTContainer.FLOAT_RIGHT).removeClass(LTContainer.FLOAT_NONE);
            this.addClass(sfloat);
            return this;
        }

        toggleClass(cls : string, b : boolean) : LTContainer {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
            return this;
        }

        public setBorderTop(b : boolean) : LTContainer {
            return this.toggleClass("slds-border_top", b);
        }

        public setBorderBottom(b : boolean) : LTContainer {
            return this.toggleClass("slds-border_bottom", b);
        }

        public setBorderLeft(b : boolean) : LTContainer {
            return this.toggleClass("slds-border_left", b);
        }

        public setBorderRight(b : boolean) : LTContainer {
            return this.toggleClass("slds-border_right", b);
        }

        public setGrow(b : boolean) : LTContainer {
            return this.toggleClass("slds-grow", b);
        }

        public setScrollableY(b : boolean) : LTContainer {
            return this.toggleClass("slds-scrollable_y", b);
        }

        public setScrollableX(b : boolean) : LTContainer {
            return this.toggleClass("slds-scrollable_x", b);
        }

        public setAbsoluteCenter(b : boolean) : LTContainer {
            return this.toggleClass("slds-align_absolute-center", b);
        }
    }
    LTContainer["__class"] = "framework.lightning.LTContainer";
    LTContainer["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Media extends framework.JSContainer {
        /*private*/ figure : framework.JSContainer = new framework.JSContainer("figure", "div").addClass("slds-media__figure");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").addClass("slds-media__body");

        public static SIZE_NORMAL : string = "";

        public static SIZE_LARGE : string = "slds-media_large";

        public static SIZE_SMALL : string = "slds-media_small";

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-media");
            this.addChild$framework_JSContainer(this.figure);
            this.addChild$framework_JSContainer(this.body);
        }

        public addFigure(figure : framework.JSContainer) : Media {
            this.figure.addChild$framework_JSContainer(figure);
            return this;
        }

        public getFigureContainer() : framework.JSContainer {
            return this.figure;
        }

        public getBodyContainer() : framework.JSContainer {
            return this.body;
        }

        public addBody(body : framework.JSContainer) : Media {
            this.body.addChild$framework_JSContainer(body);
            return this;
        }

        public setSize(size : string) : Media {
            this.removeClass(Media.SIZE_LARGE).removeClass(Media.SIZE_SMALL).addClass(size);
            return this;
        }

        public toggleClass$java_lang_String$boolean(cls : string, b : boolean) : Media {
            return this.toggleClass$java_lang_String$boolean$framework_JSContainer(cls, b, this);
        }

        public toggleClass$java_lang_String$boolean$framework_JSContainer(cls : string, b : boolean, target : framework.JSContainer) : Media {
            if(b) {
                target.addClass(cls);
            } else {
                target.removeClass(cls);
            }
            return this;
        }

        public toggleClass(cls? : any, b? : any, target? : any) : any {
            if(((typeof cls === 'string') || cls === null) && ((typeof b === 'boolean') || b === null) && ((target != null && target instanceof <any>framework.JSContainer) || target === null)) {
                return <any>this.toggleClass$java_lang_String$boolean$framework_JSContainer(cls, b, target);
            } else if(((typeof cls === 'string') || cls === null) && ((typeof b === 'boolean') || b === null) && target === undefined) {
                return <any>this.toggleClass$java_lang_String$boolean(cls, b);
            } else throw new Error('invalid overload');
        }

        public setCentered(b : boolean) : Media {
            return this.toggleClass$java_lang_String$boolean("slds-media_center", b);
        }

        public setFigureReversed(b : boolean) : Media {
            return this.toggleClass$java_lang_String$boolean$framework_JSContainer("slds-media__figure_reverse", b, this.figure);
        }

        public setResponseve(b : boolean) : Media {
            return this.toggleClass$java_lang_String$boolean("slds-media_responsive", b);
        }
    }
    Media["__class"] = "framework.lightning.Media";
    Media["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class TabBody extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-tabs_default__content");
            this.setAttribute("role", "tabpanel");
        }

        public show(b : boolean) : TabBody {
            if(b) {
                this.removeClass("slds-hide");
                this.addClass("slds-show");
            } else {
                this.removeClass("slds-show");
                this.addClass("slds-hide");
            }
            return this;
        }

        public hide(b : boolean) : TabBody {
            return this.show(!b);
        }
    }
    TabBody["__class"] = "framework.lightning.TabBody";
    TabBody["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class TabItem extends framework.JSContainer implements framework.EventListener {
        public body : framework.lightning.TabBody;

        /*private*/ title : framework.JSContainer = new framework.JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");

        public constructor(name : string, body : framework.lightning.TabBody) {
            super(name, "li");
            this.body = null;
            this.body = body;
            body.setAttribute("aria-labelledby", this.getId());
            this.addChild$framework_JSContainer(this.title);
            this.title.setAttribute("aria-controls", body.getId());
            this.addClass("slds-tabs_default__item");
            this.title.addEventListener(this, "click");
            this.setActive(false);
        }

        public setActive(b : boolean) : TabItem {
            if(b) {
                this.addClass("slds-active");
                this.title.setAttribute("aria-selected", "true");
            } else {
                this.removeClass("slds-active");
                this.title.setAttribute("aria-selected", "false");
            }
            this.body.show(b);
            return this;
        }

        public setTitle(title : string) : TabItem {
            this.setAttribute("title", title);
            this.title.setHtml(title);
            return this;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let tabs : framework.lightning.Tabs = <any>(source.getAncestorWithClass<any>("slds-tabs_default"));
            tabs.setActive(this);
        }
    }
    TabItem["__class"] = "framework.lightning.TabItem";
    TabItem["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Tabs extends framework.JSContainer {
        /*private*/ nav : framework.JSContainer = new framework.JSContainer("ul").addClass("slds-tabs_default__nav").setAttribute("role", "tablist");

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-tabs_default");
            this.addChild$framework_JSContainer(this.nav);
        }

        public addItem(label? : any, list? : any) : any {
            if(((label != null && label instanceof <any>framework.lightning.TabItem) || label === null) && list === undefined) {
                return <any>this.addItem$framework_lightning_TabItem(label);
            } else throw new Error('invalid overload');
        }

        public addItem$framework_lightning_TabItem(item : framework.lightning.TabItem) : Tabs {
            this.nav.addChild$framework_JSContainer(item);
            this.addChild$framework_JSContainer(item.body.show(false));
            return this;
        }

        public setActive(item : framework.lightning.TabItem) : Tabs {
            for(let index5878=this.nav.getChildren().iterator();index5878.hasNext();) {
                let c = index5878.next();
                {
                    let tab : framework.lightning.TabItem = <framework.lightning.TabItem>c;
                    tab.setActive(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(tab,item)));
                }
            }
            item.setActive(true);
            return this;
        }
    }
    Tabs["__class"] = "framework.lightning.Tabs";
    Tabs["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class Text extends framework.JSContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        public toggleClass(cls : string, b : boolean) : Text {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
            return this;
        }

        public setTruncate(b : boolean) : Text {
            return this.toggleClass("slds-truncate", b);
        }
    }
    Text["__class"] = "framework.lightning.Text";
    Text["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework {
    export class TextComponent extends framework.JSContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = super.getParameters();
            let param : framework.design.TextParameter = new framework.design.TextParameter("text", "Text", "Basic");
            params.add(param);
            return params;
        }
    }
    TextComponent["__class"] = "framework.TextComponent";
    TextComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class BasicComponent extends framework.builder.Component {
        public constructor(name : string, initial : string, label : string) {
            super("html:" + name, initial, label);
            this.addClass("designer-component");
        }
    }
    BasicComponent["__class"] = "framework.builder.BasicComponent";
    BasicComponent["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export abstract class AbstractCheckBoxPropertyEditor extends framework.JSCheckBox implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable : framework.design.Designable;

        parameter : framework.design.Parameter;

        public constructor(name : string) {
            super(name);
            this.designable = null;
            this.parameter = null;
            this.addEventListener(this, "change");
        }

        /**
         * 
         * @param {*} designable
         */
        public setDesignable(designable : framework.design.Designable) {
            this.designable = designable;
        }

        /**
         * 
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(parameter : framework.design.Parameter) {
            this.parameter = parameter;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractCheckBoxPropertyEditor["__class"] = "framework.builder.properties.AbstractCheckBoxPropertyEditor";
    AbstractCheckBoxPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export abstract class AbstractInputPropertyEditor extends framework.JSInput implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable : framework.design.Designable;

        parameter : framework.design.Parameter;

        public constructor(name : string) {
            super(name);
            this.designable = null;
            this.parameter = null;
            this.addEventListener(this, "change");
            this.addClass("slds-input");
        }

        /**
         * 
         * @param {*} designable
         */
        public setDesignable(designable : framework.design.Designable) {
            this.designable = designable;
        }

        /**
         * 
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(parameter : framework.design.Parameter) {
            this.parameter = parameter;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractInputPropertyEditor["__class"] = "framework.builder.properties.AbstractInputPropertyEditor";
    AbstractInputPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export abstract class AbstractSelectPropertyEditor extends framework.JSSelect implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable : framework.design.Designable;

        parameter : framework.design.Parameter;

        public constructor(name : string) {
            super(name);
            this.designable = null;
            this.parameter = null;
            this.addEventListener(this, "change");
            this.addClass("slds-select");
        }

        /**
         * 
         * @param {*} designable
         */
        public setDesignable(designable : framework.design.Designable) {
            this.designable = designable;
        }

        /**
         * 
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(parameter : framework.design.Parameter) {
            this.parameter = parameter;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractSelectPropertyEditor["__class"] = "framework.builder.properties.AbstractSelectPropertyEditor";
    AbstractSelectPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class EventScriptEditor extends framework.JSTextArea implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable : framework.design.Designable;

        parameter : framework.design.Parameter;

        /*private*/ eventTypeEditor : framework.builder.properties.EventTypeEditor;

        public constructor(name : string, eventTypeEditor : framework.builder.properties.EventTypeEditor) {
            super(name);
            this.designable = null;
            this.parameter = null;
            this.eventTypeEditor = null;
            this.eventTypeEditor = eventTypeEditor;
            this.addClass("slds-textarea");
        }

        /**
         * 
         * @param {*} designable
         */
        public setDesignable(designable : framework.design.Designable) {
            this.designable = designable;
        }

        /**
         * 
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(parameter : framework.design.Parameter) {
            this.parameter = parameter;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let script : string = this.getValue();
            let type : string = this.eventTypeEditor.getValue();
            this.designable['setParameter$java_lang_String$java_lang_String$boolean'](type, script, true);
        }
    }
    EventScriptEditor["__class"] = "framework.builder.properties.EventScriptEditor";
    EventScriptEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.lightning {
    export class CheckBoxButton extends framework.lightning.CheckBox {
        public constructor(name : string) {
            super(name);
            this.removeClass("slds-checkbox");
            this.addClass("slds-checkbox_add-button");
        }
    }
    CheckBoxButton["__class"] = "framework.lightning.CheckBoxButton";
    CheckBoxButton["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.InputField","framework.Renderable"];


}
namespace framework.builder {
    export class ComponentsLibrary extends framework.lightning.Grid {
        public constructor(name : string) {
            super(name, "ul");
            this.setWrap(true);
            this.setPullPadded(true);
            this.addClass(" slds-library");
        }

        public addComponents(...components : framework.builder.Component[]) : ComponentsLibrary {
            for(let index5879=0; index5879 < components.length; index5879++) {
                let com = components[index5879];
                {
                    let li : framework.JSContainer = new framework.JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-3");
                    this.addChild$framework_JSContainer(li);
                    li.addChild$framework_JSContainer(com);
                }
            }
            return this;
        }
    }
    ComponentsLibrary["__class"] = "framework.builder.ComponentsLibrary";
    ComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class BorderLayout extends framework.lightning.Grid {
        /*private*/ top : framework.JSContainer = new framework.JSContainer("div");

        /*private*/ left : framework.JSContainer = new framework.JSContainer("div");

        /*private*/ center : framework.JSContainer = new framework.JSContainer("div");

        /*private*/ right : framework.JSContainer = new framework.JSContainer("div");

        /*private*/ bottom : framework.JSContainer = new framework.JSContainer("div");

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-wrap");
            this.setPullPadded(true);
            this.top.addClass("slds-p-horizontal_small slds-size_1-of-1");
            this.addChild$framework_JSContainer(this.top);
            this.left.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
            this.addChild$framework_JSContainer(this.left);
            this.center.addClass("slds-p-horizontal_small slds-size_6-of-12 slds-medium-size_6-of-12 slds-large-size_6-of-12");
            this.addChild$framework_JSContainer(this.center);
            this.right.addClass("slds-p-horizontal_small slds-size_3-of-12 slds-medium-size_3-of-12 slds-large-size_3-of-12");
            this.addChild$framework_JSContainer(this.right);
            this.bottom.addClass("slds-p-horizontal_small slds-size_1-of-1");
            this.addChild$framework_JSContainer(this.bottom);
        }

        public addChild$framework_JSContainer$java_lang_String(child : framework.JSContainer, layoutData : string) : BorderLayout {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(layoutData, "left")) {
                this.left.addChild$framework_JSContainer(child);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(layoutData, "right")) {
                this.right.addChild$framework_JSContainer(child);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(layoutData, "top")) {
                this.top.addChild$framework_JSContainer(child);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(layoutData, "bottom")) {
                this.bottom.addChild$framework_JSContainer(child);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(layoutData, "center")) {
                this.center.addChild$framework_JSContainer(child);
            }
            return this;
        }

        public addChild(child? : any, layoutData? : any) : any {
            if(((child != null && child instanceof <any>framework.JSContainer) || child === null) && ((typeof layoutData === 'string') || layoutData === null)) {
                return <any>this.addChild$framework_JSContainer$java_lang_String(child, layoutData);
            } else if(((child != null && child instanceof <any>framework.JSContainer) || child === null) && layoutData === undefined) {
                return <any>this.addChild$framework_JSContainer(child);
            } else throw new Error('invalid overload');
        }

        public getTop() : framework.JSContainer {
            return this.top;
        }

        public getLeft() : framework.JSContainer {
            return this.left;
        }

        public getCenter() : framework.JSContainer {
            return this.center;
        }

        public getRight() : framework.JSContainer {
            return this.right;
        }

        public getBottom() : framework.JSContainer {
            return this.bottom;
        }
    }
    BorderLayout["__class"] = "framework.lightning.BorderLayout";
    BorderLayout["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class DockedComposer extends framework.lightning.Grid implements framework.interactions.Draggable {
        /*private*/ header : framework.lightning.Grid = <framework.lightning.Grid>new framework.lightning.Grid("header", "div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");

        /*private*/ headerTitle : framework.lightning.Media = new framework.lightning.Media("headerTitle");

        /*private*/ headerIconContainer : framework.JSContainer = new framework.JSContainer("div").addClass("slds-icon_container");

        /*private*/ headerIcon : framework.lightning.Icon = new framework.lightning.Icon("headerIcon").setSize(framework.lightning.Icon.EXTRA_SMALL).setTextType(framework.lightning.Icon.TEXT_DEFAULT);

        /*private*/ title : framework.lightning.Text = new framework.lightning.Text("title", "h2").setTruncate(true);

        /*private*/ tools : framework.JSContainer = new framework.JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");

        /*private*/ minimize : framework.lightning.IconButton = new framework.lightning.IconButton("minimize");

        /*private*/ expand : framework.lightning.IconButton = new framework.lightning.IconButton("expand");

        /*private*/ close : framework.lightning.IconButton = new framework.lightning.IconButton("close");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").addClass("slds-docked-composer__body");

        /*private*/ footer : framework.JSContainer = new framework.JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");

        public constructor(name : string) {
            super(name, "section");
            this.setVertical(true);
            this.setAttribute("role", "dialog");
            this.setOpen(true);
            this.addChild$framework_JSContainer(this.header);
            this.header.addChild$framework_JSContainer(this.headerTitle);
            this.headerTitle.getFigureContainer().addClass("slds-m-right_x-small");
            this.headerTitle.setCentered(true);
            this.headerTitle.getFigureContainer().addChild$framework_JSContainer(this.headerIconContainer);
            this.headerIconContainer.addChild$framework_JSContainer(this.headerIcon);
            this.headerTitle.getBodyContainer().addChild$framework_JSContainer(this.title);
            this.header.addChild$framework_JSContainer(this.tools);
            this.tools.addChild$framework_JSContainer(this.minimize).addChild$framework_JSContainer(this.expand).addChild$framework_JSContainer(this.close);
            this.addChild$framework_JSContainer(this.body);
            this.addChild$framework_JSContainer(this.footer);
            this.addClass("slds-docked-composer");
        }

        public setOpen(b : boolean) : DockedComposer {
            this.toggleClass("slds-is-open", b);
            this.toggleClass("slds-is-closed", !b);
            return this;
        }

        public setClosed(b : boolean) : DockedComposer {
            this.toggleClass("slds-is-closed", b);
            this.toggleClass("slds-is-open", !b);
            return this;
        }

        public getHeaderIcon() : framework.lightning.Icon {
            return this.headerIcon;
        }

        public getTitle() : framework.lightning.Text {
            return this.title;
        }

        public getTools() : framework.JSContainer {
            return this.tools;
        }

        public getExpandButton() : framework.lightning.IconButton {
            return this.expand;
        }

        public getCloseButton() : framework.lightning.IconButton {
            return this.close;
        }

        public getBody() : framework.JSContainer {
            return this.body;
        }

        public getFooter() : framework.JSContainer {
            return this.footer;
        }

        public setFocus(b : boolean) : DockedComposer {
            this.toggleClass("slds-has-focus", b);
            return this;
        }

        public setFormBody(b : boolean) : DockedComposer {
            if(b) {
                this.body.addClass("slds-docked-composer__body_form");
            } else {
                this.body.removeClass("slds-docked-composer__body_form");
            }
            return this;
        }

        public setBodyEmailComposer(b : boolean) : DockedComposer {
            if(b) {
                this.body.addClass("slds-docked-composer__body_form");
            } else {
                this.body.removeClass("slds-docked-composer__body_form");
            }
            return this;
        }

        public setOverflow(b : boolean) : DockedComposer {
            this.toggleClass("slds-docked-composer_overflow", b);
            return this;
        }

        /**
         * 
         * @return {*}
         */
        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let o : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            o.handle = "#" + this.header.getId();
            return o;
        }
    }
    DockedComposer["__class"] = "framework.lightning.DockedComposer";
    DockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class GlobalHeader extends framework.lightning.Grid {
        public constructor(name : string) {
            super(name, "div");
            this.setAlignSpead(true);
            this.addClass("slds-global-header");
        }
    }
    GlobalHeader["__class"] = "framework.lightning.GlobalHeader";
    GlobalHeader["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



    export namespace GlobalHeader {

        export abstract class GlobalHeaderItem extends framework.JSContainer {
            public __parent: any;
            public constructor(__parent: any, name : string, tag : string) {
                super(name, tag);
                this.__parent = __parent;
                this.addClass("slds-global-header__item");
            }
        }
        GlobalHeaderItem["__class"] = "framework.lightning.GlobalHeader.GlobalHeaderItem";
        GlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



        export class SearchGlobalHeaderItem extends GlobalHeader.GlobalHeaderItem {
            public __parent: any;
            public constructor(__parent: any, name : string) {
                super(__parent, name, "div");
                this.__parent = __parent;
                this.addClass("slds-global-header__item_search");
            }
        }
        SearchGlobalHeaderItem["__class"] = "framework.lightning.GlobalHeader.SearchGlobalHeaderItem";
        SearchGlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


    }

}
namespace framework.lightning {
    export class Panel extends framework.lightning.Grid {
        /*private*/ layout : framework.lightning.FormLayout = new framework.lightning.FormLayout("layout", "div");

        public constructor(name : string) {
            super(name, "div");
            this.setNoWrap(true).setVertical(true);
            this.layout.setStacked(true);
            this.addChild$framework_JSContainer(this.layout);
        }

        public getLayout() : framework.lightning.FormLayout {
            return this.layout;
        }

        public addSection(section : Panel.PanelSection) : Panel {
            this.layout.addChild$framework_JSContainer(section);
            return this;
        }
    }
    Panel["__class"] = "framework.lightning.Panel";
    Panel["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



    export namespace Panel {

        export class PanelSection extends framework.JSContainer {
            public __parent: any;
            public constructor(__parent: any, name : string, tag : string) {
                super(name, tag);
                this.__parent = __parent;
                this.addClass("slds-panel__section");
            }
        }
        PanelSection["__class"] = "framework.lightning.Panel.PanelSection";
        PanelSection["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


    }

}
namespace framework.builder {
    export class Builder extends framework.lightning.LTContainer {
        /*private*/ topMenu : framework.builder.TopMenu = new framework.builder.TopMenu("header");

        /*private*/ visualEditor : framework.builder.VisualEditor;

        public constructor(name : string) {
            super(name, "div");
            this.visualEditor = null;
            this.addClass("builder");
            this.visualEditor = new framework.builder.VisualEditor(this);
            this.addChild$framework_JSContainer(this.visualEditor);
            this.visualEditor.newProject();
        }

        public getSelectedItem() : framework.design.Designable {
            return this.visualEditor.getSelectedItem();
        }
    }
    Builder["__class"] = "framework.builder.Builder";
    Builder["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class DescriptionList extends framework.lightning.LTContainer {
        public static DEFAULT : string = "";

        public static INLINE : string = "slds-dl_inline";

        public static HORIZONTAL : string = "slds-dl_horizontal";

        /*private*/ currentLayout : string = DescriptionList.DEFAULT;

        public constructor(name : string) {
            super(name, "dl");
        }

        public setLayout(layout : string) : DescriptionList {
            this.currentLayout = layout;
            this.removeClass(DescriptionList.INLINE).removeClass(DescriptionList.HORIZONTAL);
            for(let index5880=this.getChildren().iterator();index5880.hasNext();) {
                let child = index5880.next();
                {
                    child.removeClass(DescriptionList.INLINE + "__label").removeClass(DescriptionList.INLINE + "__detail");
                    child.removeClass(DescriptionList.HORIZONTAL + "__label").removeClass(DescriptionList.HORIZONTAL + "__detail");
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(child.getTag(),"dt"))) {
                        child.addClass(layout + "__label");
                    } else {
                        child.addClass(layout + "__detail");
                    }
                }
            }
            return this;
        }

        public addItem(label : string, item : framework.JSContainer) : DescriptionList {
            let dt : framework.JSContainer = new framework.JSContainer("dt").setHtml(label);
            this.addChild$framework_JSContainer(dt);
            let detail : framework.JSContainer = new framework.JSContainer("dd").addChild$framework_JSContainer(item);
            this.addChild$framework_JSContainer(detail);
            this.setLayout(this.currentLayout);
            return this;
        }
    }
    DescriptionList["__class"] = "framework.lightning.DescriptionList";
    DescriptionList["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class FormLayout extends framework.lightning.LTContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-form");
        }

        toggleClass(cls : string, b : boolean) : FormLayout {
            return <FormLayout>super.toggleClass(cls, b);
        }

        public setStacked(b : boolean) : FormLayout {
            this.toggleClass("slds-form_stacked", b);
            if(b) {
                this.setInline(false);
                this.setHorizontal(false);
                this.setCompound(false);
            }
            return this;
        }

        public setInline(b : boolean) : FormLayout {
            this.toggleClass("slds-form_inline", b);
            if(b) {
                this.setStacked(false);
                this.setHorizontal(false);
                this.setCompound(false);
            }
            return this;
        }

        public setCompound(b : boolean) : FormLayout {
            this.toggleClass("slds-form_compound", b);
            if(b) {
                this.setInline(false);
                this.setHorizontal(false);
                this.setStacked(false);
            }
            return this;
        }

        public setHorizontal(b : boolean) : FormLayout {
            this.toggleClass("slds-form_horizontal", b);
            if(b) {
                this.setInline(false);
                this.setStacked(false);
                this.setCompound(false);
            }
            return this;
        }

        public addFormElement(element : framework.lightning.FormElement) : FormLayout {
            this.addChild$framework_JSContainer(element);
            return this;
        }

        public clear() : FormLayout {
            this.getChildren().clear();
            this.setRendered(false);
            return this;
        }
    }
    FormLayout["__class"] = "framework.lightning.FormLayout";
    FormLayout["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class ComponentsTabs extends framework.lightning.Tabs {
        public constructor(name : string) {
            super(name);
            this.addClass("slds-tabs_compact");
        }

        public addItem$java_lang_String$framework_builder_ComponentsLibrary(label : string, list : framework.builder.ComponentsLibrary) : ComponentsTabs {
            let body : framework.lightning.TabBody = new framework.lightning.TabBody("body");
            body.addChild$framework_JSContainer(list);
            let item : framework.lightning.TabItem = new framework.lightning.TabItem("TabItem", body);
            item.setTitle(label);
            this.addItem$framework_lightning_TabItem(item);
            return this;
        }

        public addItem(label? : any, list? : any) : any {
            if(((typeof label === 'string') || label === null) && ((list != null && list instanceof <any>framework.builder.ComponentsLibrary) || list === null)) {
                return <any>this.addItem$java_lang_String$framework_builder_ComponentsLibrary(label, list);
            } else if(((label != null && label instanceof <any>framework.lightning.TabItem) || label === null) && list === undefined) {
                return <any>this.addItem$framework_lightning_TabItem(label);
            } else throw new Error('invalid overload');
        }

        public addComponentList(label : string, ...components : framework.builder.Component[]) : ComponentsTabs {
            let body : framework.lightning.TabBody = new framework.lightning.TabBody("body");
            let list : framework.builder.ComponentsLibrary = new framework.builder.ComponentsLibrary("list");
            (o => o.addComponents.apply(o, components))(list);
            body.addChild$framework_JSContainer(list);
            let item : framework.lightning.TabItem = new framework.lightning.TabItem("TabItem", body);
            item.setTitle(label);
            this.addItem$framework_lightning_TabItem(item);
            return this;
        }
    }
    ComponentsTabs["__class"] = "framework.builder.ComponentsTabs";
    ComponentsTabs["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class ProtertiesEditorTabs extends framework.lightning.Tabs {
        public constructor(name : string) {
            super(name);
            this.addClass("slds-tabs_compact");
        }

        public addItem$java_lang_String$framework_builder_properties_PropertiesEditor(label : string, editor : framework.builder.properties.PropertiesEditor) : framework.lightning.TabItem {
            let body : framework.lightning.TabBody = new framework.lightning.TabBody("edi");
            body.addChild$framework_JSContainer(<framework.JSContainer><any>editor);
            let item : framework.lightning.TabItem = new framework.lightning.TabItem("tabItem_" + editor.getName(), body).setTitle(label);
            this.addItem$framework_lightning_TabItem(item);
            return item;
        }

        public addItem(label? : any, editor? : any) : any {
            if(((typeof label === 'string') || label === null) && ((editor != null && (editor["__interfaces"] != null && editor["__interfaces"].indexOf("framework.builder.properties.PropertiesEditor") >= 0 || editor.constructor != null && editor.constructor["__interfaces"] != null && editor.constructor["__interfaces"].indexOf("framework.builder.properties.PropertiesEditor") >= 0)) || editor === null)) {
                return <any>this.addItem$java_lang_String$framework_builder_properties_PropertiesEditor(label, editor);
            } else if(((label != null && label instanceof <any>framework.lightning.TabItem) || label === null) && editor === undefined) {
                return <any>this.addItem$framework_lightning_TabItem(label);
            } else throw new Error('invalid overload');
        }
    }
    ProtertiesEditorTabs["__class"] = "framework.builder.properties.ProtertiesEditorTabs";
    ProtertiesEditorTabs["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class AttributeEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        public constructor() {
            super("attribute");
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let attr : string = this.parameter.name;
            let value : string = this.getValue();
            this.designable.setAttribute(attr, value);
        }
    }
    AttributeEditor["__class"] = "framework.builder.properties.AttributeEditor";
    AttributeEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class NameEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        public constructor() {
            super("NameEditor");
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let name : string = this.getValue();
            this.designable['setParameter$java_lang_String$java_lang_String$boolean']("name", name, true);
            this.designable.setName(name);
        }
    }
    NameEditor["__class"] = "framework.builder.properties.NameEditor";
    NameEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class StyleEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        public constructor() {
            super("styleEditor");
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let style : string = this.parameter.name;
            let value : string = this.getValue();
            this.designable.setStyle(style, value);
        }
    }
    StyleEditor["__class"] = "framework.builder.properties.StyleEditor";
    StyleEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class TextEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let text : string = this.getValue();
            this.designable.setHtml(text);
        }
    }
    TextEditor["__class"] = "framework.builder.properties.TextEditor";
    TextEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class EventTypeEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            console.info("dsfds");
        }
    }
    EventTypeEditor["__class"] = "framework.builder.properties.EventTypeEditor";
    EventTypeEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.builder.libraries {
    export class BasicComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Basic");
            this.addComponents(new framework.builder.BasicComponent("h1", "H1", "Heading 1"), new framework.builder.BasicComponent("h2", "H2", "Heading 2"), new framework.builder.BasicComponent("h3", "H3", "Heading 3"), new framework.builder.BasicComponent("h4", "H4", "Heading 4"), new framework.builder.BasicComponent("h5", "H5", "Heading 5"), new framework.builder.BasicComponent("span", "SPAN", "Span"), new framework.builder.BasicComponent("p", "P", "Paragraph"), new framework.builder.BasicComponent("label", "LABEL", "Label"), new framework.builder.BasicComponent("a", "A", "Hyper Link"), new framework.builder.BasicComponent("img", "IMG", "Image"), new framework.builder.BasicComponent("ol", "OL", "Ordered List"), new framework.builder.BasicComponent("ul", "UL", "Un-Ordered List"), new framework.builder.BasicComponent("li", "LI", "List Item"), new framework.builder.BasicComponent("form", "FORM", "Form"), new framework.builder.BasicComponent("fieldset", "UL", "Fieldset"), new framework.builder.BasicComponent("input", "input", "Input"), new framework.builder.BasicComponent("select", "SELECT", "Select"), new framework.builder.BasicComponent("textarea", "TEXTAREA", "Text Area"), new framework.builder.BasicComponent("button", "BUTTON", "Button"));
        }
    }
    BasicComponentLibrary["__class"] = "framework.builder.libraries.BasicComponentLibrary";
    BasicComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LightningComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Lightning");
            this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button"));
        }
    }
    LightningComponentLibrary["__class"] = "framework.builder.libraries.LightningComponentLibrary";
    LightningComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LibrariesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ basicComponentLib : framework.builder.libraries.BasicComponentLibrary = new framework.builder.libraries.BasicComponentLibrary();

        /*private*/ lightningComponentLib : framework.builder.libraries.LightningComponentLibrary = new framework.builder.libraries.LightningComponentLibrary();

        /*private*/ componentsTabs : framework.builder.ComponentsTabs = new framework.builder.ComponentsTabs("componentsTabs");

        public constructor(name : string) {
            super(name);
            this.getTitle().setHtml("Components Library");
            this.getBody().addChild$framework_JSContainer(this.componentsTabs);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", this.basicComponentLib);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", this.lightningComponentLib);
        }
    }
    LibrariesDockedComposer["__class"] = "framework.builder.libraries.LibrariesDockedComposer";
    LibrariesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class PropertiesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ mainEditor : framework.builder.properties.ProtertiesEditorTabs = new framework.builder.properties.ProtertiesEditorTabs("mainEditor");

        /*private*/ basicEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.BasicPropertiesEditor("basic");

        /*private*/ advancedPropertiesEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.AdvancedPropertiesEditor();

        /*private*/ eventEditor : framework.builder.properties.PropertiesEditor = new framework.builder.properties.EventsPropertiesEditor();

        public constructor(name : string) {
            super(name);
            this.getTitle().setHtml("Properties");
            this.addClass("properties-composer");
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Basic", this.basicEditorBody).setActive(true);
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Advanced", this.advancedPropertiesEditorBody).setActive(false);
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Events", this.eventEditor).setActive(false);
            this.getBody().addChild$framework_JSContainer(this.mainEditor);
        }

        public selectComponent(designable : framework.design.Designable) {
            this.basicEditorBody.setComponent(designable);
            this.advancedPropertiesEditorBody.setComponent(designable);
            this.eventEditor.setComponent(designable);
        }
    }
    PropertiesDockedComposer["__class"] = "framework.builder.properties.PropertiesDockedComposer";
    PropertiesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class TopMenu extends framework.lightning.GlobalHeader {
        public constructor(name : string) {
            super(name);
            let actions : framework.lightning.ButtonGroup = new framework.lightning.ButtonGroup("actions");
            actions.addButton$framework_lightning_Button(new framework.lightning.Button("new").setLabel("New").setState(framework.lightning.Button.STATE_NEUTRAL));
            actions.addButton$framework_lightning_Button(new framework.lightning.Button("edit").setLabel("Edit").setState(framework.lightning.Button.STATE_NEUTRAL));
            this.addChild$framework_JSContainer(actions);
        }
    }
    TopMenu["__class"] = "framework.builder.TopMenu";
    TopMenu["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class BasePropertiesEditor extends framework.lightning.FormLayout implements framework.EventListener, framework.builder.properties.PropertiesEditor {
        __framework_builder_properties_BasePropertiesEditor_component : framework.design.Designable;

        /*private*/ editors : java.util.List<framework.builder.properties.PropertyEditor> = <any>(new java.util.LinkedList<any>());

        public constructor(name : string) {
            super(name, "div");
            this.__framework_builder_properties_BasePropertiesEditor_component = null;
            this.setHorizontal(true).addClass("slds-form_compact");
        }

        public setComponent(designable : framework.design.Designable) {
            this.__framework_builder_properties_BasePropertiesEditor_component = designable;
        }

        public addProperty$java_lang_String$framework_JSInput(label : string, input : framework.JSInput) : BasePropertiesEditor {
            let width : framework.lightning.FormElement = new framework.lightning.FormElement("elem", "div");
            width.setLabel(label);
            input.addClass("slds-input");
            width.setInput(input);
            this.addFormElement(width);
            return this;
        }

        public addProperty(label? : any, input? : any) : any {
            if(((typeof label === 'string') || label === null) && ((input != null && input instanceof <any>framework.JSInput) || input === null)) {
                return <any>this.addProperty$java_lang_String$framework_JSInput(label, input);
            } else if(((label != null && label instanceof <any>framework.design.Parameter) || label === null) && input === undefined) {
                return <any>this.addProperty$framework_design_Parameter(label);
            } else throw new Error('invalid overload');
        }

        public addProperty$framework_design_Parameter(parameter : framework.design.Parameter) : BasePropertiesEditor {
            let element : framework.lightning.FormElement = new framework.lightning.FormElement("elem", "div");
            element.setLabel(parameter.label);
            let editor : framework.builder.properties.PropertyEditor = parameter.getEditor(this.__framework_builder_properties_BasePropertiesEditor_component);
            element.setInput(<framework.InputField<any>><any>editor);
            this.addFormElement(element);
            return this;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let value : string = (<framework.InputField<any>><any>source).getValue().toString();
            this.__framework_builder_properties_BasePropertiesEditor_component['setParameter$java_lang_String$java_lang_String$boolean'](source.getName(), value, true);
        }
    }
    BasePropertiesEditor["__class"] = "framework.builder.properties.BasePropertiesEditor";
    BasePropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.builder.properties {
    export class AdvancedPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        public constructor() {
            super("advanced");
        }

        public setComponent(designable : framework.design.Designable) {
            super.setComponent(designable);
            this.clear();
            for(let index5881=this.__framework_builder_properties_BasePropertiesEditor_component.getParameters().iterator();index5881.hasNext();) {
                let p = index5881.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(p.category,"advanced"))) this.addProperty$framework_design_Parameter(p);
                }
            }
        }
    }
    AdvancedPropertiesEditor["__class"] = "framework.builder.properties.AdvancedPropertiesEditor";
    AdvancedPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.builder.properties {
    export class BasicPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {*} designable
         */
        public setComponent(designable : framework.design.Designable) {
            super.setComponent(designable);
            this.clear();
            for(let index5882=designable.getParameters().iterator();index5882.hasNext();) {
                let param = index5882.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(param.category,"Basic"))) {
                        this.addProperty$framework_design_Parameter(param);
                    }
                }
            }
        }
    }
    BasicPropertiesEditor["__class"] = "framework.builder.properties.BasicPropertiesEditor";
    BasicPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.builder.properties {
    export class EventsPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        public constructor() {
            super("events");
            this.setStacked(true);
        }

        /**
         * 
         * @param {*} designable
         */
        public setComponent(designable : framework.design.Designable) {
            super.setComponent(designable);
            this.clear();
            for(let index5883=designable.getParameters().iterator();index5883.hasNext();) {
                let param = index5883.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(param.category,"event"))) {
                        this.addProperty$framework_design_Parameter(param);
                    }
                }
            }
        }
    }
    EventsPropertiesEditor["__class"] = "framework.builder.properties.EventsPropertiesEditor";
    EventsPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.design.Designable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}


framework.lightning.Button.stateLabels_$LI$();

framework.lightning.Button.states_$LI$();

framework.JSContainer.DEFAULT_RENDERER_$LI$();

framework.interactions.InteractionsDecorator.droppableRenderer_$LI$();

framework.interactions.InteractionsDecorator.draggableRenderer_$LI$();

framework.core.BeanFactory.INSTANCE_$LI$();

framework.Boot.main(null);
