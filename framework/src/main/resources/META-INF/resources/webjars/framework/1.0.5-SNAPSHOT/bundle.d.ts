declare namespace framework.builder {
    class BuilderEventListener implements framework.EventListener {
        jsSource: string;
        constructor(jsSource: string);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder.editors {
    interface Editor extends framework.Renderable {
        openNew(): any;
        close(): any;
        save(): any;
        undo(): any;
        redo(): any;
        open(file: any): any;
    }
}
declare namespace framework.builder.libraries {
    abstract class AbstractComponentFactory implements framework.builder.marshalling.ComponentFactory {
        impl: string;
        constructor(impl: string);
        /**
         *
         * @param {string} impl
         * @return {boolean}
         */
        supports(impl: string): boolean;
        abstract createInstance(designMode: boolean): framework.design.Designable;
        configureStyles(instance: framework.design.Designable, component: framework.builder.marshalling.Component): void;
        configureParameters(instance: framework.design.Designable, component: framework.builder.marshalling.Component, designMode: boolean): void;
        configureEvents(instance: framework.design.Designable, component: framework.builder.marshalling.Component): void;
        /**
         *
         * @param {framework.builder.marshalling.Component} component
         * @param {boolean} designMode
         * @return {*}
         */
        build(component: framework.builder.marshalling.Component, designMode: boolean): framework.design.Designable;
        decorateForDesignMode(instance: framework.design.Designable, designMode: boolean): void;
        decorateDroppable(instance: framework.design.Designable, designMode: boolean): void;
        decorateCallSelector(container: framework.design.Designable, designMode: boolean): void;
    }
}
declare namespace framework.builder.libraries {
    class BasicComponentFactoryRegistry implements framework.builder.libraries.ComponentFactoryRegistry {
        factories: java.util.Map<string, framework.builder.marshalling.ComponentFactory>;
        /**
         *
         * @param {string} identifier
         * @param {*} factory
         */
        registerComponentFactory(identifier: string, factory: framework.builder.marshalling.ComponentFactory): void;
        /**
         *
         * @param {string} identifier
         * @return {*}
         */
        getComponentFactory(identifier: string): framework.builder.marshalling.ComponentFactory;
        constructor();
    }
}
declare namespace framework.builder.libraries {
    interface ComponentFactoryRegistry {
        registerComponentFactory(identifier: string, factory: framework.builder.marshalling.ComponentFactory): any;
        getComponentFactory(identifier: string): framework.builder.marshalling.ComponentFactory;
    }
}
declare namespace framework.builder.marshalling {
    class BuilderEvent {
        type: string;
        source: string;
        constructor();
    }
}
declare namespace framework.builder.marshalling {
    class Component {
        impl: string;
        parameters: Object;
        children: Array<Component>;
        events: Array<framework.builder.marshalling.BuilderEvent>;
        styles: Object;
        constructor();
    }
}
declare namespace framework.builder.marshalling {
    interface ComponentFactory {
        supports(impl: string): boolean;
        build(component: framework.builder.marshalling.Component, designMode: boolean): framework.design.Designable;
    }
}
declare namespace framework.builder.properties {
    interface PropertiesEditor extends framework.Renderable {
        setComponent(designable: framework.design.Designable): any;
    }
}
declare namespace framework.builder.properties {
    interface PropertyEditor extends framework.Renderable {
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): any;
    }
}
declare namespace framework.builder {
    class SelectComponentEvent implements framework.EventListener {
        selector: framework.builder.Selector;
        constructor(selector: framework.builder.Selector);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.core {
    class BasicDecoratorRegistry implements framework.core.DecoratorsRegistry {
        decorators: java.util.List<framework.core.Decorator>;
        /**
         *
         * @param {*} decorator
         */
        registerDecorator(decorator: framework.core.Decorator): void;
        /**
         *
         * @return {*}
         */
        getDecorators(): java.util.List<framework.core.Decorator>;
        constructor();
    }
}
declare namespace framework.core {
    class BeanFactory {
        static INSTANCE: BeanFactory;
        static INSTANCE_$LI$(): BeanFactory;
        beans: java.util.Map<string, any>;
        static getInstance(): BeanFactory;
        onInit(obj: any): void;
        initBeanFactoryAware(bean: any): void;
        addBean(mixing: any, instance: any): void;
        getBeanOfType<T>(clazz: any): T;
        getBean(name: string): any;
    }
}
declare namespace framework.core {
    interface BeanFactoryAware {
        setBeanFactory(beanfactory: framework.core.BeanFactory): any;
    }
}
declare namespace framework.core {
    interface Decorator {
        decorate(renderable: framework.Renderable): any;
    }
}
declare namespace framework.core {
    interface DecoratorsRegistry {
        registerDecorator(decorator: framework.core.Decorator): any;
        getDecorators(): java.util.List<framework.core.Decorator>;
    }
}
declare namespace framework.core {
    class Global extends Object {
        static idCount: number;
    }
}
declare namespace framework.core {
    interface Initializable {
        doInit(): any;
    }
}
declare namespace framework.design {
    interface Designable extends framework.Renderable {
        setParameter(key?: any, value?: any, designMode?: any): any;
        getDesignables(): java.util.List<Designable>;
        getComponent(): framework.builder.marshalling.Component;
        getParameters(): java.util.List<framework.design.Parameter>;
        addDesignable(designable: Designable): any;
    }
}
declare namespace framework.design {
    class Option {
        constructor(text?: any, value?: any);
        text: string;
        value: string;
    }
}
declare namespace framework.design {
    abstract class Parameter {
        name: string;
        label: string;
        type: string;
        options: java.util.List<framework.design.Option>;
        category: string;
        constructor(name: string, label: string, type: string, category: string);
        abstract getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.designables {
    class DesignableDelegate {
        ui: framework.design.Designable;
        component: framework.builder.marshalling.Component;
        constructor(ui: framework.design.Designable);
        getDesignable(): framework.design.Designable;
        setParameter(key: string, value: string, designMode: boolean): void;
        getComponent(): framework.builder.marshalling.Component;
        getParameters(): java.util.List<framework.design.Parameter>;
        static setDroppableOptions(instance: framework.design.Designable, designMode: boolean): void;
    }
}
declare namespace framework {
    interface EventListener {
        performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework {
    interface InputField<T> extends framework.Renderable {
        getValue(): T;
        /**
         *
         * @param {boolean} b
         */
        setValue(b?: any): any;
        setRawValue(value: string): any;
    }
}
declare namespace framework {
    class InputTypes {
        static text: string;
        static password: string;
        static datetime: string;
        static datetime_local: string;
        static date: string;
        static month: string;
        static time: string;
        static week: string;
        static number: string;
        static email: string;
        static url: string;
        static search: string;
        static tel: string;
        static color: string;
        static checkbox: string;
        static radio: string;
    }
}
declare namespace framework.interactions {
    interface Draggable extends framework.Renderable {
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
}
declare namespace framework.interactions {
    class DraggableRenderer implements framework.renderer.Renderer<framework.interactions.Draggable> {
        doRender$framework_interactions_Draggable$jsweet_dom_HTMLElement(c: framework.interactions.Draggable, root: HTMLElement): void;
        /**
         *
         * @param {*} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
        constructor();
    }
}
declare namespace framework.interactions {
    interface Droppable extends framework.Renderable {
        getDroppableOptions(): JQueryUI.DroppableOptions;
    }
}
declare namespace framework.interactions {
    class DroppableRenderer implements framework.renderer.Renderer<framework.interactions.Droppable> {
        doRender$framework_interactions_Droppable$jsweet_dom_HTMLElement(c: framework.interactions.Droppable, root: HTMLElement): void;
        /**
         *
         * @param {*} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
        constructor();
    }
}
declare namespace framework.lightning.table {
    enum Alignment {
        RIGHT = 0,
        LEFT = 1,
        NONE = 2,
    }
}
declare namespace framework.lightning.table {
    enum ColumnType {
    }
}
declare namespace framework.lightning.table {
    interface TableDataModel {
        getSize(): number;
        getValueAt(col: number, row: number): any;
        setValueAt(col: number, row: number, value: any): any;
        deleteRow(row: number): any;
        addRow(): any;
        addRowAt(index: number): any;
        selectRow(index: number): any;
    }
}
declare namespace framework.lightning.table {
    interface TableHeaderModel {
        getSize(): number;
        getType(col: number): string;
        getFormat(col: number): string;
    }
}
declare namespace framework {
    interface Renderable {
        getChangedAttributes(): string[];
        getChangedStyles(): string[];
        getNative(): HTMLElement;
        getRenderers(): java.util.List<framework.renderer.Renderer<any>>;
        addRenderer(renderer: framework.renderer.Renderer<any>): Renderable;
        getId(): string;
        uid(): string;
        addClass(styleClass: string): Renderable;
        removeClass(cls: string): Renderable;
        addChild(child?: any, layoutData?: any): any;
        addChildAt(index: number, child: framework.JSContainer): Renderable;
        setVisible(b: boolean): Renderable;
        addEventListener(listener: framework.EventListener, type: string): Renderable;
        getTag(): string;
        setTag(tag: string): Renderable;
        setStyle(key: string, value: string): Renderable;
        getStyle(key: string): string;
        setAttribute(key: string, value: string): Renderable;
        exec(name?: any, parameter?: any): any;
        getCommands(): java.lang.Iterable<framework.JSContainer.JSCommand>;
        getAttribute(key: string): string;
        getName(): string;
        setName(name: string): any;
        getParent(): Renderable;
        getChildren(): java.util.List<framework.JSContainer>;
        getStyleNames(): java.util.Set<string>;
        getAttributeNames(): java.util.Set<string>;
        getHtml(): string;
        setHtml(h: string): Renderable;
        isRendered(): boolean;
        setRendered(b: boolean): Renderable;
        getListeners(): java.util.Map<string, java.util.List<framework.EventListener>>;
        render(root?: any): any;
        getData(): any;
        setData(data: any): any;
        /**
         *
         * @param {string} id
         * @return
         * @return {*}
         */
        getAncestorById(id: string): Renderable;
        getAncestorByName(name: string): Renderable;
        getRoot(): Renderable;
    }
}
declare namespace framework.renderer {
    class ContainerRenderer implements framework.renderer.Renderer<framework.JSContainer> {
        decorate(c: framework.JSContainer): void;
        doRender$framework_JSContainer$jsweet_dom_HTMLElement(c: framework.JSContainer, root: HTMLElement): void;
        doRender(c?: any, root?: any): any;
        execCommands(njq: HTMLElement, container: framework.Renderable): void;
        renderEvents(njq: HTMLElement, c: framework.JSContainer): void;
        synchronizeFields(njq: HTMLElement, jsfield: framework.Renderable): void;
        renderAttributes(njq: HTMLElement, c: framework.Renderable, changed: boolean): void;
        clearAttributes(elem: HTMLElement): void;
        clearStyles(jq: HTMLElement): void;
        renderStyles(njq: HTMLElement, c: framework.Renderable, changed: boolean): void;
        constructor();
    }
}
declare namespace framework.renderer {
    interface Renderer<T extends framework.Renderable> {
        /**
         *
         * @param {*} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
    }
}
declare namespace framework.util {
    /**
     * The Class IOUtil.
     *
     * @author Kureem Rossaye<br>
     * kureem@gmail.com Oct 22, 2008
     * @class
     */
    class IOUtil {
        static getFileContenntAsString$java_io_File$java_lang_String(file: java.io.File, encoding: string): string;
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
        static getFileContenntAsString(file?: any, encoding?: any): any;
        static getFileContenntAsString$java_io_File(file: java.io.File): string;
        static getFileContenntAsString$java_lang_String$java_lang_String(fileName: string, encoding: string): string;
        static getFileContenntAsString$java_lang_String(fileName: string): string;
        /**
         * Gets the file content as bytes.
         *
         * @param {string} fileName
         * the file name
         * @return {Array} the file content as bytes
         * @throws Exception
         * the exception
         */
        static getFileContentAsBytes(fileName: string): number[];
        /**
         * Gets the stream content as string.
         *
         * @param {java.io.InputStream} is
         * the is
         * @return {string} the stream content as string
         */
        static getStreamContentAsString(is: java.io.InputStream): string;
        /**
         * Gets the stream content as bytes.
         *
         * @param {java.io.InputStream} is
         * the is
         * @return {Array} the stream content as bytes
         * @throws Exception
         * the exception
         */
        static getStreamContentAsBytes(is: java.io.InputStream): number[];
        static writeToFile(content: string, f: java.io.File): boolean;
    }
}
declare namespace framework {
    class Boot {
        static main(args: string[]): void;
    }
    namespace Boot {
        class Boot$0 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$1 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$2 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
    }
}
declare namespace framework.builder.libraries {
    class BasicComponentFactory extends framework.builder.libraries.AbstractComponentFactory {
        tag: string;
        constructor(tag: string);
        /**
         *
         * @param {boolean} designMode
         * @return {*}
         */
        createInstance(designMode: boolean): framework.design.Designable;
    }
}
declare namespace framework.design {
    abstract class AbstractBooleanParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
    }
}
declare namespace framework.design {
    class AttributeParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class EventScriptParameter extends framework.design.Parameter {
        eventTypeEditor: framework.builder.properties.EventTypeEditor;
        constructor(name: string, label: string, category: string);
        setEventTypeEditor(editor: framework.builder.properties.EventTypeEditor): void;
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class EventTypeParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class NameParameter extends framework.design.Parameter {
        constructor(label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class SelectParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class StyleParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class TextParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    class ValueParameter extends framework.design.Parameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.interactions {
    class InteractionsDecorator implements framework.core.Decorator {
        static draggableRenderer: framework.interactions.DraggableRenderer;
        static draggableRenderer_$LI$(): framework.interactions.DraggableRenderer;
        static droppableRenderer: framework.interactions.DroppableRenderer;
        static droppableRenderer_$LI$(): framework.interactions.DroppableRenderer;
        /**
         *
         * @param {*} renderable
         */
        decorate(renderable: framework.Renderable): void;
        constructor();
    }
}
declare namespace framework {
    /**
     *
     * @author Kurreem
     * @param {string} name
     * @param {string} tag
     * @class
     */
    class JSContainer implements framework.Renderable, framework.interactions.Droppable {
        /**
         *
         */
        droppableOptions: JQueryUI.DroppableOptions;
        static DEFAULT_RENDERER: framework.renderer.Renderer<any>;
        static DEFAULT_RENDERER_$LI$(): framework.renderer.Renderer<any>;
        listeners: java.util.Map<string, java.util.List<framework.EventListener>>;
        id: string;
        data: any;
        attributes: java.util.Map<string, string>;
        styles: java.util.Map<string, string>;
        parent: JSContainer;
        children: java.util.List<JSContainer>;
        html: string;
        tag: string;
        name: string;
        rendered: boolean;
        renderers: java.util.List<framework.renderer.Renderer<any>>;
        changedAttributes: java.util.List<string>;
        changedStyles: java.util.List<string>;
        commands: java.util.List<JSContainer.JSCommand>;
        constructor(name?: any, tag?: any);
        /**
         *
         * @return {Array}
         */
        getChangedAttributes(): string[];
        getNative(): HTMLElement;
        /**
         *
         * @return {Array}
         */
        getChangedStyles(): string[];
        flush(s: string): void;
        /**
         *
         * @return {*}
         */
        getRenderers(): java.util.List<framework.renderer.Renderer<any>>;
        /**
         *
         * @param {*} renderer
         * @return {framework.JSContainer}
         */
        addRenderer(renderer: framework.renderer.Renderer<any>): JSContainer;
        /**
         *
         * @return {string}
         */
        getId(): string;
        /**
         *
         * @return {string}
         */
        uid(): string;
        /**
         *
         * @param {string} styleClass
         * @return {framework.JSContainer}
         */
        addClass(styleClass: string): JSContainer;
        /**
         *
         * @param {string} cls
         * @return {framework.JSContainer}
         */
        removeClass(cls: string): JSContainer;
        addChild(child?: any, layoutData?: any): any;
        addChild$framework_JSContainer(container: JSContainer): JSContainer;
        /**
         *
         * @param {number} index
         * @param {framework.JSContainer} child
         * @return {framework.JSContainer}
         */
        addChildAt(index: number, child: JSContainer): JSContainer;
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        setVisible(b: boolean): JSContainer;
        /**
         *
         * @param {*} listener
         * @param {string} type
         * @return {framework.JSContainer}
         */
        addEventListener(listener: framework.EventListener, type: string): JSContainer;
        /**
         *
         * @return {string}
         */
        getTag(): string;
        /**
         *
         * @param {string} tag
         * @return {framework.JSContainer}
         */
        setTag(tag: string): JSContainer;
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        setStyle(key: string, value: string): JSContainer;
        /**
         *
         * @param {string} key
         * @return {string}
         */
        getStyle(key: string): string;
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        setAttribute(key: string, value: string): JSContainer;
        exec$java_lang_String$jsweet_lang_Object(name: string, parameter: Object): void;
        /**
         *
         * @param {string} name
         * @param {Object} parameter
         */
        exec(name?: any, parameter?: any): any;
        exec$java_lang_String$java_lang_String(name: string, variable: string): void;
        exec$java_lang_String(name: string): void;
        /**
         *
         * @return {*}
         */
        getCommands(): java.lang.Iterable<JSContainer.JSCommand>;
        /**
         *
         * @param {string} key
         * @return {string}
         */
        getAttribute(key: string): string;
        /**
         *
         * @return {string}
         */
        getName(): string;
        /**
         *
         * @param {string} name
         */
        setName(name: string): void;
        /**
         *
         * @return {framework.JSContainer}
         */
        getParent(): JSContainer;
        /**
         *
         * @return {*}
         */
        getChildren(): java.util.List<JSContainer>;
        /**
         *
         * @return {*}
         */
        getStyleNames(): java.util.Set<string>;
        /**
         *
         * @return {*}
         */
        getAttributeNames(): java.util.Set<string>;
        /**
         *
         * @return {string}
         */
        getHtml(): string;
        /**
         *
         * @param {string} h
         * @return {framework.JSContainer}
         */
        setHtml(h: string): JSContainer;
        /**
         *
         * @return {boolean}
         */
        isRendered(): boolean;
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        setRendered(b: boolean): JSContainer;
        /**
         *
         * @return {*}
         */
        getListeners(): java.util.Map<string, java.util.List<framework.EventListener>>;
        render$(): void;
        render$jsweet_dom_HTMLElement(parent: HTMLElement): void;
        /**
         *
         * @param {HTMLElement} parent
         */
        render(parent?: any): any;
        /**
         *
         * @return {*}
         */
        getData(): any;
        /**
         *
         * @param {*} data
         */
        setData(data: any): void;
        getAncestorWithClass<T extends JSContainer>(cls: string): T;
        /**
         *
         * @param {string} id
         * @return {framework.JSContainer}
         */
        getAncestorById(id: string): JSContainer;
        /**
         *
         * @param {string} name
         * @return {framework.JSContainer}
         */
        getAncestorByName(name: string): JSContainer;
        /**
         *
         * @return {framework.JSContainer}
         */
        getRoot(): JSContainer;
        /**
         *
         * @return {*}
         */
        getDroppableOptions(): JQueryUI.DroppableOptions;
        setDroppableOptions(options: JQueryUI.DroppableOptions): void;
    }
    namespace JSContainer {
        class JSCommand {
            __parent: any;
            name: string;
            parameters: Object;
            variable: string;
            constructor(__parent: any, name: string, vari: string);
            getVariable(): string;
            getName(): string;
            setName(name: string): void;
            getParameters(): Object;
            setParameters(parameters: Object): void;
        }
    }
}
declare namespace framework.builder.libraries {
    class TextComponentFactory extends framework.builder.libraries.BasicComponentFactory {
        defaultText: string;
        constructor(tag: string, defaultTxt: string);
        /**
         *
         * @param {boolean} designMode
         * @return {*}
         */
        createInstance(designMode: boolean): framework.design.Designable;
    }
}
declare namespace framework.builder {
    class Component extends framework.JSContainer implements framework.interactions.Draggable {
        titleFigure: framework.JSContainer;
        avatar: framework.JSContainer;
        initial: framework.JSContainer;
        title: framework.JSContainer;
        componentFactoryRegistry: framework.builder.libraries.ComponentFactoryRegistry;
        constructor(identifier: string, initial: string, label: string);
        getFactory(): framework.builder.marshalling.ComponentFactory;
        /**
         *
         * @return {*}
         */
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
}
declare namespace framework.builder.editors {
    class Structure extends framework.JSContainer {
        root: framework.design.Designable;
        ul: framework.JSContainer;
        liJS: framework.JSContainer;
        liCss: framework.JSContainer;
        liRoot: framework.JSContainer;
        selected: framework.TreeItem;
        constructor(name: string, root: framework.design.Designable);
        reload(): void;
        unselect(c: framework.JSContainer): void;
        addNode(ctn: framework.design.Designable, li: framework.JSContainer, level: number): void;
    }
    namespace Structure {
        class Structure$0 implements framework.EventListener {
            private item;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, item: any);
        }
    }
}
declare namespace framework.builder.editors {
    class VisualEditor extends framework.JSContainer {
        builder: framework.builder.Builder;
        selectedItem: framework.design.Designable;
        root: framework.design.Designable;
        selector: framework.builder.Selector;
        composers: framework.JSContainer;
        propertiesDockedComposer: framework.builder.properties.PropertiesDockedComposer;
        libraryDockedComposer: framework.builder.libraries.LibrariesDockedComposer;
        structureDockedComposer: framework.builder.editors.StructureDockedComposer;
        constructor(builder: framework.builder.Builder);
        newProject(): framework.design.Designable;
        getRootItem(): framework.design.Designable;
        getSelectedItem(): framework.design.Designable;
        selectItem(designable: framework.design.Designable): void;
        getBuilder(): framework.builder.Builder;
    }
}
declare namespace framework.builder.libraries {
    class DataComposer extends framework.JSContainer {
        constructor(name: string, tag: string);
    }
}
declare namespace framework.builder {
    class Selector extends framework.JSContainer implements framework.EventListener {
        selected: framework.JSContainer;
        visualEditor: framework.builder.editors.VisualEditor;
        constructor();
        setVisualEditor(editor: framework.builder.editors.VisualEditor): void;
        getSelected(): framework.JSContainer;
        select(component: framework.design.Designable): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.designables {
    class JSDesignable extends framework.JSContainer implements framework.design.Designable {
        component: framework.builder.marshalling.Component;
        constructor(name: string, tag: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key: string, value: string, designMode: boolean): void;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {*}
         */
        getParameters(): java.util.List<framework.design.Parameter>;
        /**
         *
         * @return {*}
         */
        getDesignables(): java.util.List<framework.design.Designable>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
    }
}
declare namespace framework {
    class JSCheckBox extends framework.JSContainer implements framework.InputField<boolean> {
        constructor(name: string);
        setDisabled(b: boolean): JSCheckBox;
        /**
         *
         * @return {boolean}
         */
        getValue(): boolean;
        setValue$java_lang_Boolean(b: boolean): void;
        /**
         *
         * @param {boolean} b
         */
        setValue(b?: any): any;
        /**
         *
         * @param {string} value
         */
        setRawValue(value: string): void;
        isChecked(): boolean;
        setChecked(b: boolean): void;
    }
}
declare namespace framework {
    class JSInput extends framework.JSContainer implements framework.InputField<string> {
        constructor(name: string);
        setType(type: string): JSInput;
        setDisabled(b: boolean): JSInput;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        setValue$java_lang_String(val: string): void;
        /**
         *
         * @param {string} val
         */
        setValue(val?: any): any;
        /**
         *
         * @param {string} value
         */
        setRawValue(value: string): void;
    }
}
declare namespace framework {
    class JSOption extends framework.JSContainer {
        constructor(text: string, value: string);
        getValue(): string;
        setValue(value: string): void;
        getText(): string;
        setText(label: string): void;
        setSelected(b: boolean): void;
    }
}
declare namespace framework {
    class JSSelect extends framework.JSContainer implements framework.InputField<string> {
        constructor(name: string);
        addOption(option: framework.JSOption): JSSelect;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        setValue$java_lang_String(val: string): void;
        /**
         *
         * @param {string} val
         */
        setValue(val?: any): any;
        /**
         *
         * @param {string} value
         */
        setRawValue(value: string): void;
    }
}
declare namespace framework {
    class JSTextArea extends framework.JSContainer implements framework.InputField<string> {
        static TEXT_AREA_RENDERER: framework.renderer.Renderer<JSTextArea>;
        static TEXT_AREA_RENDERER_$LI$(): framework.renderer.Renderer<JSTextArea>;
        constructor(name: string);
        setDisabled(b: boolean): JSTextArea;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        setValue$java_lang_String(val: string): void;
        /**
         *
         * @param {string} val
         */
        setValue(val?: any): any;
        /**
         *
         * @param {string} value
         */
        setRawValue(value: string): void;
    }
    namespace JSTextArea {
        class JSTextArea$0 implements framework.renderer.Renderer<framework.JSTextArea> {
            doRender$framework_JSTextArea$jsweet_dom_HTMLElement(c: framework.JSTextArea, root: HTMLElement): void;
            /**
             *
             * @param {framework.JSTextArea} c
             * @param {HTMLElement} root
             */
            doRender(c?: any, root?: any): any;
            constructor();
        }
    }
}
declare namespace framework {
    class JSTree extends framework.JSContainer {
        ul: framework.JSContainer;
        title: framework.JSContainer;
        constructor(name: string);
        setTitle(title: string): void;
    }
}
declare namespace framework.lightning {
    class Accordion extends framework.JSContainer {
        constructor(name: string);
    }
    namespace Accordion {
        class JSAccordionItem extends framework.JSContainer {
            __parent: any;
            accordionSection: framework.JSContainer;
            accordionSummary: framework.JSContainer;
            accordionSummaryHeading: framework.JSContainer;
            constructor(__parent: any, name: string);
        }
    }
}
declare namespace framework.lightning {
    class Avatar extends framework.JSContainer {
        image: framework.JSContainer;
        static SMALL: string;
        static X_SMALL: string;
        static MEDIUM: string;
        static LARGE: string;
        constructor(name: string);
        getImage(): framework.JSContainer;
        setSize(size: string): Avatar;
        setCircle(b: boolean): Avatar;
    }
}
declare namespace framework.lightning {
    class Badge extends framework.JSContainer {
        constructor(name: string, tag: string);
    }
}
declare namespace framework.lightning {
    class Box extends framework.JSContainer {
        static DEFAULT: string;
        static SMALL: string;
        static X_SMALL: string;
        static XX_SMALL: string;
        constructor(name: string, tag: string);
        setSize(size: string): Box;
    }
}
declare namespace framework.lightning {
    class BreadcrumbItem extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class Breadcrumbs extends framework.JSContainer {
        breadcrumb: framework.lightning.HorizontalList;
        constructor(name: string);
        addItem$java_lang_String$java_lang_String(name: string, label: string): Breadcrumbs;
        addItem(name?: any, label?: any): any;
        addItem$framework_JSContainer(link: framework.JSContainer): Breadcrumbs;
    }
}
declare namespace framework.lightning {
    class Button extends framework.JSContainer {
        static states: string[];
        static states_$LI$(): string[];
        static STATE_NEUTRAL: string;
        static STATE_BRAND: string;
        static STATE_DESTRUCTIVE: string;
        static STATE_SUCCESS: string;
        component: framework.builder.marshalling.Component;
        constructor(name?: any);
        addIcon(icon: framework.lightning.Icon): Button;
        setLabel(label: string): Button;
        setState(state: string): Button;
        setInverse(b: boolean): Button;
        setDisabled(b: boolean): Button;
        setStateful(b: boolean): Button;
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key?: any, value?: any, designMode?: any): any;
        setParameter$java_lang_String$java_lang_String(key: string, value: string): void;
    }
}
declare namespace framework.lightning {
    class ButtonGroup extends framework.JSContainer {
        constructor(name: string);
        addButton$framework_lightning_Button(btn: framework.lightning.Button): ButtonGroup;
        addButton$framework_lightning_Button$boolean(btn: framework.lightning.Button, isLast: boolean): ButtonGroup;
        addButton(btn?: any, isLast?: any): any;
        addButton$framework_lightning_IconButton(btn: framework.lightning.IconButton): ButtonGroup;
        addButton$framework_lightning_IconButton$boolean(btn: framework.lightning.IconButton, isLast: boolean): ButtonGroup;
        addElement(c: framework.JSContainer, isLast: boolean): ButtonGroup;
    }
}
declare namespace framework.lightning {
    class Card extends framework.JSContainer {
        header: framework.lightning.Grid;
        headerMedia: framework.lightning.Media;
        body: framework.JSContainer;
        footer: framework.JSContainer;
        constructor(name: string, tag: string);
        getHeader(): framework.lightning.Grid;
        getHeaderMedia(): framework.lightning.Media;
        getBody(): framework.JSContainer;
        getFooter(): framework.JSContainer;
    }
}
declare namespace framework.lightning {
    class CheckBox extends framework.JSContainer implements framework.InputField<boolean>, framework.EventListener {
        checkbox: framework.JSCheckBox;
        checkboxLabel: framework.JSContainer;
        label: framework.JSContainer;
        constructor(name: string);
        setLabel(label: string): CheckBox;
        /**
         *
         * @return {boolean}
         */
        getValue(): boolean;
        setValue$java_lang_Boolean(val: boolean): void;
        /**
         *
         * @param {boolean} val
         */
        setValue(val?: any): any;
        /**
         *
         * @param {string} value
         */
        setRawValue(value: string): void;
        toggle(): void;
        /**
         *
         * @param {*} listener
         * @param {string} type
         * @return {framework.JSContainer}
         */
        addEventListener(listener: framework.EventListener, type: string): framework.JSContainer;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.lightning {
    class CheckBoxButtonGroup extends framework.JSContainer {
        constructor(name: string);
        addCheckBoxButton(btn: framework.lightning.CheckBox): CheckBoxButtonGroup;
    }
}
declare namespace framework.lightning {
    class DockedComposerContainer extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class FormElement extends framework.JSContainer {
        label: framework.JSContainer;
        control: framework.JSContainer;
        constructor(name: string, tag: string);
        setLabel(label: string): FormElement;
        setInput(input: framework.InputField<any>): FormElement;
        getControl(): framework.JSContainer;
    }
}
declare namespace framework.lightning {
    class Grid extends framework.JSContainer {
        static PULL_PADDED_XXX_SMALL: string;
        static PULL_PADDED_XX_SMALL: string;
        static PULL_PADDED_X_SMALL: string;
        static PULL_PADDED_SMALL: string;
        static PULL_PADDED_MEDIUM: string;
        static PULL_PADDED_LARGE: string;
        constructor(name: string, tag: string);
        toggleClass(cls: string, b: boolean): Grid;
        setFrame(b: boolean): Grid;
        setVertical(b: boolean): Grid;
        setVerticalReverse(b: boolean): Grid;
        setReverse(b: boolean): Grid;
        setPullPadded(b: boolean): Grid;
        setPullPaddedSize(size: string): Grid;
        setAlignCenter(b: boolean): Grid;
        setAlignSpace(b: boolean): Grid;
        setAlignSpead(b: boolean): Grid;
        setAlignEnd(b: boolean): Grid;
        setVerticalAlignStart(b: boolean): Grid;
        setVerticalAlignCenter(b: boolean): Grid;
        setVerticalAlignEnd(b: boolean): Grid;
        setVerticalStretch(b: boolean): Grid;
        setNoWrap(b: boolean): Grid;
        setWrap(b: boolean): Grid;
    }
}
declare namespace framework.lightning {
    class HorizontalList extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class Icon extends framework.JSContainer {
        static SMALL: string;
        static EXTRA_SMALL: string;
        static EXTRA_EXTRA_SMALL: string;
        static LARGE: string;
        static TEXT_DEFAULT: string;
        static TEXT_WARNING: string;
        static TEXT_ERROR: string;
        static TEXT_LIGHT: string;
        assetsUrl: string;
        type: string;
        iconName: string;
        constructor(name?: any, type?: any, iconName?: any);
        refresh(): void;
        getAssetsUrl(): string;
        setAssetsUrl(assetsUrl: string): void;
        getType(): string;
        setType(type: string): void;
        getIconName(): string;
        setIconName(name: string): void;
        setSize(size: string): Icon;
        setTextType(type: string): Icon;
    }
}
declare namespace framework.lightning {
    class IconButton extends framework.JSContainer {
        icon: framework.lightning.Icon;
        static SMALL: string;
        static EXTRA_SMALL: string;
        static EXTRA_EXTRA_SMALL: string;
        constructor(name: string);
        setIcon(icon: framework.lightning.Icon): IconButton;
        toggleClass(cls: string, b: boolean): IconButton;
        setContainer(b: boolean): IconButton;
        setBorder(b: boolean): IconButton;
        setBorderInverse(b: boolean): IconButton;
        setBorderFilled(b: boolean): IconButton;
        setInverse(b: boolean): IconButton;
        setError(b: boolean): IconButton;
        setSize(size: string): IconButton;
        setMore(b: boolean): IconButton;
        setSelected(b: boolean): IconButton;
    }
}
declare namespace framework.lightning {
    class Lookup extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class LTContainer extends framework.JSContainer {
        static FLOAT_LEFT: string;
        static FLOAT_RIGHT: string;
        static FLOAT_NONE: string;
        constructor(name: string, tag: string);
        setFloat(sfloat: string): LTContainer;
        toggleClass(cls: string, b: boolean): LTContainer;
        setBorderTop(b: boolean): LTContainer;
        setBorderBottom(b: boolean): LTContainer;
        setBorderLeft(b: boolean): LTContainer;
        setBorderRight(b: boolean): LTContainer;
        setGrow(b: boolean): LTContainer;
        setScrollableY(b: boolean): LTContainer;
        setScrollableX(b: boolean): LTContainer;
        setAbsoluteCenter(b: boolean): LTContainer;
    }
}
declare namespace framework.lightning {
    class Media extends framework.JSContainer {
        figure: framework.JSContainer;
        body: framework.JSContainer;
        static SIZE_NORMAL: string;
        static SIZE_LARGE: string;
        static SIZE_SMALL: string;
        constructor(name: string);
        addFigure(figure: framework.JSContainer): Media;
        getFigureContainer(): framework.JSContainer;
        getBodyContainer(): framework.JSContainer;
        addBody(body: framework.JSContainer): Media;
        setSize(size: string): Media;
        toggleClass$java_lang_String$boolean(cls: string, b: boolean): Media;
        toggleClass$java_lang_String$boolean$framework_JSContainer(cls: string, b: boolean, target: framework.JSContainer): Media;
        toggleClass(cls?: any, b?: any, target?: any): any;
        setCentered(b: boolean): Media;
        setFigureReversed(b: boolean): Media;
        setResponseve(b: boolean): Media;
    }
}
declare namespace framework.lightning {
    class TabBody extends framework.JSContainer {
        constructor(name: string);
        show(b: boolean): TabBody;
        hide(b: boolean): TabBody;
    }
}
declare namespace framework.lightning {
    class TabItem extends framework.JSContainer implements framework.EventListener {
        body: framework.lightning.TabBody;
        title: framework.JSContainer;
        constructor(name: string, body: framework.lightning.TabBody);
        setActive(b: boolean): TabItem;
        setTitle(title: string): TabItem;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.lightning.table {
    class Column extends framework.JSContainer {
        title: framework.JSContainer;
        innerTitle: framework.JSContainer;
        icon: framework.lightning.Icon;
        resizable: framework.JSContainer;
        range: framework.JSContainer;
        resizableHandle: framework.JSContainer;
        checkBoxCtn: framework.JSContainer;
        sldsCheckbox: framework.JSContainer;
        checkBox: framework.JSCheckBox;
        labelCheckBox: framework.JSContainer;
        constructor(name: string);
        setCheckBox(b: boolean): void;
        setTitle(title: string): Column;
        setFeature(cls: string, b: boolean): void;
        setAlign(alignmen: framework.lightning.table.Alignment): void;
        setSortable(b: boolean): Column;
        setTitleCaps(b: boolean): Column;
        setResizable(b: boolean): Column;
    }
}
declare namespace framework.lightning.table {
    class Table extends framework.JSContainer {
        thead: framework.JSContainer;
        tbody: framework.JSContainer;
        constructor(name: string);
        setBordered(b: boolean): Table;
        setFixedLayout(b: boolean): Table;
        setResizableCol(b: boolean): Table;
        setFeature(cls: string, b: boolean): void;
    }
}
declare namespace framework.lightning {
    class Tabs extends framework.JSContainer {
        nav: framework.JSContainer;
        constructor(name: string);
        addItem(label?: any, list?: any): any;
        addItem$framework_lightning_TabItem(item: framework.lightning.TabItem): Tabs;
        setActive(item: framework.lightning.TabItem): Tabs;
    }
}
declare namespace framework.lightning {
    class Text extends framework.JSContainer {
        constructor(name: string, tag: string);
        toggleClass(cls: string, b: boolean): Text;
        setTruncate(b: boolean): Text;
    }
}
declare namespace framework {
    class TextComponent extends framework.JSContainer {
        constructor(name: string, tag: string);
    }
}
declare namespace framework {
    class TreeItem extends framework.JSContainer implements framework.EventListener {
        button: framework.JSContainer;
        iconRight: string;
        iconDown: string;
        title: framework.JSContainer;
        __open: boolean;
        constructor(name: string, title: string);
        getButton(): framework.JSContainer;
        open(): void;
        close(): void;
        select(b: boolean): void;
        setFocus(b: boolean): void;
        leaf(b: boolean): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder {
    class BasicComponent extends framework.builder.Component {
        constructor(name: string, initial: string, label: string);
    }
}
declare namespace framework.builder.properties {
    abstract class AbstractCheckBoxPropertyEditor extends framework.JSCheckBox implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable: framework.design.Designable;
        parameter: framework.design.Parameter;
        constructor(name: string);
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        abstract initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): any;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        abstract performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework.builder.properties {
    abstract class AbstractInputPropertyEditor extends framework.JSInput implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable: framework.design.Designable;
        parameter: framework.design.Parameter;
        constructor(name: string);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        abstract initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): any;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        abstract performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework.designables {
    class JSDesignableInput extends framework.JSInput implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key: string, value: string, designMode: boolean): void;
        /**
         *
         * @return {*}
         */
        getDesignables(): java.util.List<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {*}
         */
        getParameters(): java.util.List<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
    }
}
declare namespace framework.builder.properties {
    abstract class AbstractSelectPropertyEditor extends framework.JSSelect implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable: framework.design.Designable;
        parameter: framework.design.Parameter;
        constructor(name: string);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        abstract initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): any;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        abstract performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework.builder.editors {
    class CodeMirrorEditor extends framework.JSTextArea implements framework.renderer.Renderer<CodeMirrorEditor> {
        editor: CodeMirror.Editor;
        config: CodeMirror.EditorConfiguration;
        constructor(name: string);
        setConfig(config: CodeMirror.EditorConfiguration): void;
        doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement(c: CodeMirrorEditor, root: HTMLElement): void;
        /**
         *
         * @param {framework.builder.editors.CodeMirrorEditor} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
    }
}
declare namespace framework.builder.properties {
    abstract class AbstractTextAreaPropertyEditor extends framework.JSTextArea implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable: framework.design.Designable;
        parameter: framework.design.Parameter;
        constructor(name: string);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        abstract initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): any;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        abstract performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework.builder.properties {
    class EventScriptEditor extends framework.JSTextArea implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable: framework.design.Designable;
        parameter: framework.design.Parameter;
        eventTypeEditor: framework.builder.properties.EventTypeEditor;
        constructor(name: string, eventTypeEditor: framework.builder.properties.EventTypeEditor);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        setProperty(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.designables {
    class JSDesignableTextArea extends framework.JSTextArea implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key: string, value: string, designMode: boolean): void;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {*}
         */
        getParameters(): java.util.List<framework.design.Parameter>;
        /**
         *
         * @return {*}
         */
        getDesignables(): java.util.List<framework.design.Designable>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
    }
}
declare namespace framework.designables {
    class JSDesignableButton extends framework.lightning.Button implements framework.design.Designable {
        static stateLabels: string[];
        static stateLabels_$LI$(): string[];
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        setParameter$java_lang_String$java_lang_String$boolean(key: string, value: string, designMode: boolean): void;
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key?: any, value?: any, designMode?: any): any;
        /**
         *
         * @return {*}
         */
        getDesignables(): java.util.List<framework.design.Designable>;
        getParameters(): java.util.List<framework.design.Parameter>;
        createParameter(name: string, label: string, type: string): framework.design.Parameter;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
    }
}
declare namespace framework.lightning {
    class CheckBoxButton extends framework.lightning.CheckBox {
        constructor(name: string);
    }
}
declare namespace framework.builder {
    class ComponentsLibrary extends framework.lightning.Grid {
        constructor(name: string);
        addComponents(...components: framework.builder.Component[]): ComponentsLibrary;
    }
}
declare namespace framework.lightning {
    class BorderLayout extends framework.lightning.Grid {
        top: framework.JSContainer;
        left: framework.JSContainer;
        center: framework.JSContainer;
        right: framework.JSContainer;
        bottom: framework.JSContainer;
        constructor(name: string);
        addChild$framework_JSContainer$java_lang_String(child: framework.JSContainer, layoutData: string): BorderLayout;
        addChild(child?: any, layoutData?: any): any;
        getTop(): framework.JSContainer;
        getLeft(): framework.JSContainer;
        getCenter(): framework.JSContainer;
        getRight(): framework.JSContainer;
        getBottom(): framework.JSContainer;
    }
}
declare namespace framework.lightning {
    class DockedComposer extends framework.lightning.Grid implements framework.interactions.Draggable {
        header: framework.lightning.Grid;
        headerTitle: framework.lightning.Media;
        headerIconContainer: framework.JSContainer;
        headerIcon: framework.lightning.Icon;
        title: framework.lightning.Text;
        tools: framework.JSContainer;
        minimize: framework.lightning.IconButton;
        expand: framework.lightning.IconButton;
        close: framework.lightning.IconButton;
        body: framework.JSContainer;
        footer: framework.JSContainer;
        constructor(name: string);
        setOpen(b: boolean): DockedComposer;
        setClosed(b: boolean): DockedComposer;
        getHeaderIcon(): framework.lightning.Icon;
        getTitle(): framework.lightning.Text;
        getTools(): framework.JSContainer;
        getExpandButton(): framework.lightning.IconButton;
        getCloseButton(): framework.lightning.IconButton;
        getBody(): framework.JSContainer;
        getFooter(): framework.JSContainer;
        setFocus(b: boolean): DockedComposer;
        setFormBody(b: boolean): DockedComposer;
        setBodyEmailComposer(b: boolean): DockedComposer;
        setOverflow(b: boolean): DockedComposer;
        /**
         *
         * @return {*}
         */
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
}
declare namespace framework.lightning {
    class GlobalHeader extends framework.lightning.Grid {
        constructor(name: string);
    }
    namespace GlobalHeader {
        abstract class GlobalHeaderItem extends framework.JSContainer {
            __parent: any;
            constructor(__parent: any, name: string, tag: string);
        }
        class SearchGlobalHeaderItem extends GlobalHeader.GlobalHeaderItem {
            __parent: any;
            constructor(__parent: any, name: string);
        }
    }
}
declare namespace framework.lightning {
    class Panel extends framework.lightning.Grid {
        layout: framework.lightning.FormLayout;
        constructor(name: string);
        getLayout(): framework.lightning.FormLayout;
        addSection(section: Panel.PanelSection): Panel;
    }
    namespace Panel {
        class PanelSection extends framework.JSContainer {
            __parent: any;
            constructor(__parent: any, name: string, tag: string);
        }
    }
}
declare namespace framework.builder {
    class Builder extends framework.lightning.LTContainer {
        topMenu: framework.builder.TopMenu;
        editorTabs: framework.lightning.Tabs;
        visualEditor: framework.builder.editors.VisualEditor;
        cssEditor: framework.builder.editors.CSSEditor;
        jsEditor: framework.builder.editors.JavascriptEditor;
        constructor(name: string);
        getSelectedItem(): framework.design.Designable;
        openEditor(title: string, editor: framework.JSContainer): framework.lightning.TabItem;
    }
}
declare namespace framework.lightning {
    class DescriptionList extends framework.lightning.LTContainer {
        static DEFAULT: string;
        static INLINE: string;
        static HORIZONTAL: string;
        currentLayout: string;
        constructor(name: string);
        setLayout(layout: string): DescriptionList;
        addItem(label: string, item: framework.JSContainer): DescriptionList;
    }
}
declare namespace framework.lightning {
    class FormLayout extends framework.lightning.LTContainer {
        constructor(name: string, tag: string);
        toggleClass(cls: string, b: boolean): FormLayout;
        setStacked(b: boolean): FormLayout;
        setInline(b: boolean): FormLayout;
        setCompound(b: boolean): FormLayout;
        setHorizontal(b: boolean): FormLayout;
        addFormElement(element: framework.lightning.FormElement): FormLayout;
        clear(): FormLayout;
    }
}
declare namespace framework.builder {
    class ComponentsTabs extends framework.lightning.Tabs {
        constructor(name: string);
        addItem$java_lang_String$framework_builder_ComponentsLibrary(label: string, list: framework.builder.ComponentsLibrary): ComponentsTabs;
        addItem(label?: any, list?: any): any;
        addComponentList(label: string, ...components: framework.builder.Component[]): ComponentsTabs;
    }
}
declare namespace framework.builder.properties {
    class ProtertiesEditorTabs extends framework.lightning.Tabs {
        constructor(name: string);
        addItem$java_lang_String$framework_builder_properties_PropertiesEditor(label: string, editor: framework.builder.properties.PropertiesEditor): framework.lightning.TabItem;
        addItem(label?: any, editor?: any): any;
    }
}
declare namespace framework.designables {
    class JSDesignableTextComponent extends framework.TextComponent implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string, tag: string);
        setParameter$java_lang_String$java_lang_String$boolean(key: string, value: string, designMode: boolean): void;
        /**
         *
         * @param {string} key
         * @param {string} value
         * @param {boolean} designMode
         */
        setParameter(key?: any, value?: any, designMode?: any): any;
        /**
         *
         * @return {*}
         */
        getDesignables(): java.util.List<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {*}
         */
        getParameters(): java.util.List<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
    }
}
declare namespace framework.builder.editors {
    class StructureTreeItem extends framework.TreeItem {
        designable: framework.design.Designable;
        constructor(name: string, designable: framework.design.Designable);
        /**
         *
         * @param {boolean} b
         */
        select(b: boolean): void;
    }
}
declare namespace framework.builder.properties {
    class AttributeEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        constructor();
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
}
declare namespace framework.builder.properties {
    class NameEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        constructor();
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
}
declare namespace framework.builder.properties {
    class StyleEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        constructor();
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
}
declare namespace framework.builder.properties {
    class TextEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        constructor(name: string);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
}
declare namespace framework.builder.properties {
    class ValuePropertyEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        constructor(name: string);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder.properties {
    class EventTypeEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
        constructor(name: string);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
}
declare namespace framework.builder.editors {
    class CSSEditor extends framework.builder.editors.CodeMirrorEditor {
        editor: CodeMirror.Editor;
        constructor(name: string);
    }
}
declare namespace framework.builder.editors {
    class JavascriptEditor extends framework.builder.editors.CodeMirrorEditor {
        editor: CodeMirror.Editor;
        constructor(name: string);
    }
}
declare namespace framework.builder.properties {
    class OptionsEditor extends framework.builder.properties.AbstractTextAreaPropertyEditor {
        constructor(name: string);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder.libraries {
    class BasicComponentLibrary extends framework.builder.ComponentsLibrary {
        constructor();
    }
}
declare namespace framework.builder.libraries {
    class LightningComponentLibrary extends framework.builder.ComponentsLibrary {
        constructor();
    }
}
declare namespace framework.builder.editors {
    class StructureDockedComposer extends framework.lightning.DockedComposer {
        structure: framework.builder.editors.Structure;
        constructor(name: string, root: framework.design.Designable);
    }
}
declare namespace framework.builder.libraries {
    class LibrariesDockedComposer extends framework.lightning.DockedComposer {
        basicComponentLib: framework.builder.libraries.BasicComponentLibrary;
        lightningComponentLib: framework.builder.libraries.LightningComponentLibrary;
        componentsTabs: framework.builder.ComponentsTabs;
        constructor(name: string);
    }
}
declare namespace framework.builder.properties {
    class PropertiesDockedComposer extends framework.lightning.DockedComposer {
        mainEditor: framework.builder.properties.ProtertiesEditorTabs;
        basicEditorBody: framework.builder.properties.PropertiesEditor;
        advancedPropertiesEditorBody: framework.builder.properties.PropertiesEditor;
        eventEditor: framework.builder.properties.PropertiesEditor;
        constructor(name: string);
        selectComponent(designable: framework.design.Designable): void;
    }
}
declare namespace framework.builder {
    class TopMenu extends framework.lightning.GlobalHeader {
        constructor(name: string);
    }
}
declare namespace framework.builder.properties {
    class BasePropertiesEditor extends framework.lightning.FormLayout implements framework.builder.properties.PropertiesEditor {
        component: framework.design.Designable;
        constructor(name: string);
        setComponent(designable: framework.design.Designable): void;
        addProperty$java_lang_String$framework_JSInput(label: string, input: framework.JSInput): BasePropertiesEditor;
        addProperty(label?: any, input?: any): any;
        addProperty$framework_design_Parameter$framework_design_Designable(parameter: framework.design.Parameter, designable: framework.design.Designable): BasePropertiesEditor;
    }
}
declare namespace framework.builder.properties {
    class AdvancedPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        constructor();
        setComponent(designable: framework.design.Designable): void;
    }
}
declare namespace framework.builder.properties {
    class BasicPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        constructor(name: string);
        /**
         *
         * @param {*} designable
         */
        setComponent(designable: framework.design.Designable): void;
    }
}
declare namespace framework.builder.properties {
    class EventsPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        constructor();
        /**
         *
         * @param {*} designable
         */
        setComponent(designable: framework.design.Designable): void;
    }
}
