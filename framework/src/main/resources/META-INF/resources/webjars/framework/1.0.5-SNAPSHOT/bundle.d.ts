declare namespace framework {
    interface Adaptor {
        Execute(component: any, serviceName: string, request: Object, callback: framework.ServiceCallback): any;
    }
}
declare namespace framework.builder {
    class BuilderEventListener implements framework.EventListener {
        jsSource: string;
        name: string;
        type: string;
        constructor(jsSource: string, name: string, type: string);
        getSource(): string;
        setSource(s: string): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder.data {
    class BasicDataEnvironment implements framework.builder.data.DataEnvironment {
        static structures: Array<framework.builder.data.DataStructure>;
        static structures_$LI$(): Array<framework.builder.data.DataStructure>;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>): void;
        /**
         *
         * @param {framework.builder.data.DataStructure} datastructure
         */
        saveStructure(datastructure: framework.builder.data.DataStructure): void;
        /**
         *
         * @param {string} name
         */
        deleteStructure(name: string): void;
        constructor();
    }
    namespace BasicDataEnvironment {
        class BasicDataEnvironment$0 implements framework.builder.data.RemoteDataListener<any> {
            private listener;
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any, listener: any);
        }
    }
}
declare namespace framework.builder.data {
    interface DataEnvironment {
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>): any;
        saveStructure(datastructure: framework.builder.data.DataStructure): any;
        deleteStructure(name: string): any;
    }
}
declare namespace framework.builder.data {
    class DataField {
        object: Object;
        constructor(o?: any);
        getNative(): any;
        getName(): string;
        getType(): string;
        getLabel(): string;
        getFormat(): string;
        getPrimaryKey(): boolean;
        getAutoNumber(): boolean;
        getByteLength(): number;
        getCalculated(): boolean;
        getCreateable(): boolean;
        getDefaultedOnCreate(): boolean;
        getDependentPicklist(): boolean;
        getFilterable(): boolean;
        getHtmlFormatted(): boolean;
        getNillable(): boolean;
        getRestrictedPicklist(): boolean;
        getUnique(): boolean;
        getUpdateable(): boolean;
        getCalculatedFormula(): string;
        getDefaultValue(): string;
        getDefaultValueFormula(): string;
        getDigits(): number;
        getLength(): number;
        getPicklistValues(): string[];
        getPrecision(): number;
        getRelationshipName(): string;
        getScale(): number;
        getSortable(): boolean;
        getValue(field: string): any;
    }
}
declare namespace framework.builder.data {
    class DataService {
        getDataTypes(listener: framework.builder.data.RemoteDataListener<any>): void;
        describe(type: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        query(query: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        create(type: string, fields: framework.util.Map<string, any>, listener: framework.builder.data.RemoteDataListener<any>): void;
        update(type: string, objectId: string, fields: framework.util.Map<string, any>, listener: framework.builder.data.RemoteDataListener<any>): void;
        delete(type: string, objectId: string, listener: framework.builder.data.RemoteDataListener<any>): void;
    }
}
declare namespace framework.builder.data {
    interface DataSource<T> {
        getList(loader: framework.builder.data.RemoteDataListener<Array<T>>, offset: number, max: number): any;
        /**
         *
         * @param {Object} item
         * @param {*} loader
         */
        getItem(item?: any, loader?: any): any;
        count(loader: framework.builder.data.RemoteDataListener<number>): any;
        /**
         *
         * @param {Object} data
         * @param {*} response
         */
        save(data?: any, response?: any): any;
        /**
         *
         * @param {Object} data
         * @param {*} response
         */
        delete(data?: any, response?: any): any;
    }
}
declare namespace framework.builder.data {
    class DataType {
        static TEXT: string;
        static RICH_TEXT: string;
        static DOUBLE: string;
        static INTEGER: string;
        static DATE: string;
        static DATE_TIME: string;
        static BOOLEAN: string;
        static REFERENCE: string;
        static FORMULA: string;
        static Types: string[];
        static Types_$LI$(): string[];
    }
}
declare namespace framework.builder.data {
    class File {
        file: Object;
        constructor(file: Object);
        getNative(): Object;
        getStylesheets(): Array<File>;
        getScripts(): Array<File>;
        getTemplates(): Array<File>;
        getDataSources(): Array<File>;
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>): void;
        getComponents(): Array<File>;
        getFile(name: string, type: string): File;
        deleteFile(source: framework.JSContainer, name: string, type: string, l: framework.builder.data.RemoteDataListener<any>): void;
        getChild(name: string): File;
        createCss(source: framework.JSContainer, name: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        createTemplate(source: framework.JSContainer, name: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        createScript(source: framework.JSContainer, name: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source: framework.JSContainer, name: string, type: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source: framework.JSContainer, name: string, title: string, dir: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        createFile(source?: any, name?: any, title?: any, dir?: any, listener?: any): any;
        getName(): string;
        getPath(): string;
        getData(): string;
        setData(data: string): void;
        getDateCreated(): number;
        getDateModified(): number;
        getAuthor(): string;
        getType(): string;
        getProjectType(): string;
        getTitle(): string;
        removeFile(f: File): void;
        getChildren(): Array<File>;
    }
    namespace File {
        class File$0 implements framework.builder.data.RemoteDataListener<any> {
            private l;
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any, l: any);
        }
        class File$1 implements framework.builder.data.RemoteDataListener<any> {
            private dir;
            private listener;
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any, dir: any, listener: any);
        }
    }
}
declare namespace framework.builder.data {
    class HerokuProjectService implements framework.builder.data.ProjectService {
        createProject(source: framework.JSContainer, name: string, title: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        getProjects(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): void;
        saveFile(source: framework.JSContainer, file: framework.builder.data.File, listener: framework.builder.data.RemoteDataListener<any>): void;
        createFile(source: framework.JSContainer, name: string, title: string, dir: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        deleteFile(source: framework.JSContainer, path: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): void;
        getDataStructure(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>, name: string): void;
        constructor();
    }
}
declare namespace framework.builder.data {
    interface ProjectService {
        createProject(source: framework.JSContainer, name: string, title: string, listener: framework.builder.data.RemoteDataListener<any>): any;
        getProjects(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): any;
        saveFile(source: framework.JSContainer, file: framework.builder.data.File, listener: framework.builder.data.RemoteDataListener<any>): any;
        createFile(source: framework.JSContainer, name: string, title: string, dir: string, listener: framework.builder.data.RemoteDataListener<any>): any;
        deleteFile(source: framework.JSContainer, path: string, listener: framework.builder.data.RemoteDataListener<any>): any;
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): any;
        getDataStructure(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>, name: string): any;
    }
}
declare namespace framework.builder.data {
    interface RemoteDataListener<T> {
        /**
         *
         * @param {framework.builder.data.DataField[]} data_
         */
        dataLoaded(data_?: any): any;
    }
}
declare namespace framework.builder.data {
    class RestDataSource implements framework.builder.data.DataSource<Object> {
        config: Object;
        cached: Array<Object>;
        getConfig(): Object;
        setUrl(url: string): void;
        setFilter(filter: Object): void;
        setConfig(config: Object): void;
        getCached(): Array<Object>;
        /**
         *
         * @param {*} loader
         * @param {number} offset
         * @param {number} max
         */
        getList(loader: framework.builder.data.RemoteDataListener<Array<Object>>, offset: number, max: number): void;
        save$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data: Object, response: framework.builder.data.RemoteDataListener<Object>): void;
        /**
         *
         * @param {Object} data
         * @param {*} response
         */
        save(data?: any, response?: any): any;
        delete$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data: Object, response: framework.builder.data.RemoteDataListener<Object>): void;
        /**
         *
         * @param {Object} data
         * @param {*} response
         */
        delete(data?: any, response?: any): any;
        /**
         *
         * @param {*} loader
         */
        count(loader: framework.builder.data.RemoteDataListener<number>): void;
        getItem$jsweet_lang_Object$framework_builder_data_RemoteDataListener(item: Object, loader: framework.builder.data.RemoteDataListener<Object>): void;
        /**
         *
         * @param {Object} item
         * @param {*} loader
         */
        getItem(item?: any, loader?: any): any;
        constructor();
    }
}
declare namespace framework.builder.data {
    class SalesforceProjectService implements framework.builder.data.ProjectService {
        /**
         *
         * @param {framework.JSContainer} source
         * @param {string} name
         * @param {string} title
         * @param {*} listener
         */
        createProject(source: framework.JSContainer, name: string, title: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        getProjects(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {framework.builder.data.File} file
         * @param {*} listener
         */
        saveFile(source: framework.JSContainer, file: framework.builder.data.File, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {string} name
         * @param {string} title
         * @param {string} dir
         * @param {*} listener
         */
        createFile(source: framework.JSContainer, name: string, title: string, dir: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {string} path
         * @param {*} listener
         */
        deleteFile(source: framework.JSContainer, path: string, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        getDataStructures(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {*} listener
         * @param {string} name
         */
        getDataStructure(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<any>, name: string): void;
        constructor();
    }
}
declare namespace framework.builder.editors {
    interface DesignableEditor {
        getRootItem(): framework.design.Designable;
    }
}
declare namespace framework.builder.editors {
    interface Editor<T> extends framework.Renderable {
        save(type?: any): any;
        dirty(): any;
        clean(): any;
        open(file: framework.builder.data.File): any;
        getStructure(): framework.builder.editors.Structure;
        getRootEditor(): framework.builder.editors.VisualEditor;
    }
}
declare namespace framework.builder.editors {
    class EventTypes {
        static events: string[];
        static events_$LI$(): string[];
    }
}
declare namespace framework.builder.editors {
    class NewFileStructureEventListener implements framework.EventListener {
        type: string;
        file: framework.builder.data.File;
        structure: framework.builder.editors.Structure;
        constructor(type: string, file: framework.builder.data.File, structure: framework.builder.editors.Structure);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
    namespace NewFileStructureEventListener {
        class NewFileStructureEventListener$0 implements framework.builder.data.RemoteDataListener<any> {
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.editors {
    interface Visitor {
        doVisit(host: framework.design.Designable): any;
    }
}
declare namespace framework.builder {
    interface ItemSelectedListener {
        itemSelected(file: framework.builder.UIFile, selector: framework.builder.ItemSelector): any;
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
        decorateCallSelector(container: framework.design.Designable, designMode: boolean): void;
    }
}
declare namespace framework.builder.libraries {
    class BasicComponentFactoryRegistry implements framework.builder.libraries.ComponentFactoryRegistry {
        factories: framework.util.Map<string, framework.builder.marshalling.ComponentFactory>;
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
declare namespace framework.builder.libraries {
    interface FileSelectedListener {
        onItemSelected(field: framework.builder.data.DataField, source: framework.builder.libraries.DataItem): any;
    }
}
declare namespace framework.builder.marshalling {
    class BuilderEvent {
        type: string;
        source: string;
        name: string;
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
        data: Object;
        custom: Object;
        constructor();
    }
}
declare namespace framework.builder.marshalling {
    interface ComponentFactory {
        supports(impl: string): boolean;
        build(component: framework.builder.marshalling.Component, designMode: boolean): framework.design.Designable;
    }
}
declare namespace framework.builder.marshalling {
    class MarshallUtil {
        static extract(designable: framework.design.Designable): framework.builder.marshalling.Component;
        static toDesignable(component: framework.builder.marshalling.Component, design: boolean, selector: framework.builder.Selector): framework.design.Designable;
        static generateController(component: framework.builder.marshalling.Component): void;
        static controller(component: framework.builder.marshalling.Component, start: string): void;
        static build(s: string): framework.design.Designable;
        static toComponent$java_lang_String(s: string): framework.builder.marshalling.Component;
        static toComponent(s?: any): any;
        static toComponent$jsweet_lang_Object(o: Object): framework.builder.marshalling.Component;
    }
}
declare namespace framework.builder.properties {
    interface ExtPropertiesEditor extends framework.builder.properties.PropertiesEditor {
        getLabel(me: framework.design.ExtDesignable): string;
    }
}
declare namespace framework.builder.properties {
    class FieldEditor {
    }
}
declare namespace framework.builder.properties {
    interface ItemSelectedListener<T> {
        onItemSelected(item: T): any;
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
        decorators: Array<framework.core.Decorator>;
        /**
         *
         * @param {*} decorator
         */
        registerDecorator(decorator: framework.core.Decorator): void;
        /**
         *
         * @return {*[]}
         */
        getDecorators(): Array<framework.core.Decorator>;
        constructor();
    }
}
declare namespace framework.core {
    class BeanFactory {
        static INSTANCE: BeanFactory;
        static INSTANCE_$LI$(): BeanFactory;
        beans: Object;
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
        getDecorators(): Array<framework.core.Decorator>;
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
        applyParam(key: string, value: string): any;
        getDesignables(): Array<Designable>;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table?: any, value?: any, row?: any, column?: any): any;
        getParameters(): Array<framework.design.Parameter>;
        addDesignable(designable: Designable): any;
        removeDesignable(designable: Designable): any;
        moveDesignable(designable: Designable, steps: number): any;
        getScope(): Object;
    }
}
declare namespace framework.design {
    interface ExtDesignable extends framework.design.Designable {
        getExtEditors(): framework.builder.properties.ExtPropertiesEditor[];
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
        options: Array<framework.design.Option>;
        category: string;
        abstract extractValue(designable: framework.design.Designable): string;
        constructor(name: string, label: string, type: string, category: string);
        abstract getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.design {
    interface Preparable extends framework.design.Designable {
        prepare(): any;
    }
}
declare namespace framework.designables {
    class DataEvent extends Event {
        data: Object;
        constructor(type: string, data: Object);
    }
}
declare namespace framework.designables {
    class DesignableDelegate {
        ui: framework.design.Designable;
        component: framework.builder.marshalling.Component;
        constructor(ui: framework.design.Designable);
        getDesignable(): framework.design.Designable;
        applyParameter(key: string, value: string, designMode: boolean): void;
        static containsName$java_lang_String$framework_design_Designable(name: string, ui: framework.design.Designable): boolean;
        static containsName(name?: any, ui?: any): any;
        static containsName$java_lang_String$jsweet_lang_Array(name: string, children: Array<framework.design.Designable>): boolean;
        addDesignable(designable: framework.design.Designable): void;
        static guessName(children: Array<framework.design.Designable>, designable: framework.design.Designable): string;
        getComponent(): framework.builder.marshalling.Component;
        static getScope(cont: framework.JSContainer): Object;
        exposeVariable(varName: string): void;
        getParameters(): Array<framework.design.Parameter>;
        removeDesignable(designable: framework.design.Designable): void;
        moveDesignable$framework_design_Designable$int(designable: framework.design.Designable, steps: number): void;
        moveDesignable(designable?: any, steps?: any): any;
        moveDesignable$framework_JSContainer$int(designable: framework.JSContainer, steps: number): void;
    }
}
declare namespace framework {
    interface EventListener {
        performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework {
    class HerokuAdaptor implements framework.Adaptor {
        Execute(component: any, serviceName: string, request: Object, callback: framework.ServiceCallback): void;
        constructor();
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
        static types: string[];
        static types_$LI$(): string[];
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
declare namespace framework.lightning {
    interface TabActionListener {
        onActivate(item: framework.lightning.TabItem): any;
        onDeactivate(item: framework.lightning.TabItem): any;
        onClose(item: framework.lightning.TabItem): any;
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
    class DefaultTableCellRenderer implements framework.lightning.table.TableCellRenderer {
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table: framework.lightning.table.Table, value: any, row: number, column: number): framework.Renderable;
        constructor();
    }
}
declare namespace framework.lightning.table {
    class DefaultTableColumnModel implements framework.lightning.table.TableColumnModel {
        columns: Array<framework.lightning.table.TableColumn>;
        constructor();
        /**
         *
         * @param {framework.lightning.table.TableColumn} aColumn
         */
        addColumn(aColumn: framework.lightning.table.TableColumn): void;
        /**
         *
         * @return {number}
         */
        getColumnCount(): number;
        /**
         *
         * @param {*} columnIdentifier
         * @return {number}
         */
        getColumnIndex(columnIdentifier: any): number;
        /**
         *
         * @param {number} columnIndex
         * @return {framework.lightning.table.TableColumn}
         */
        getColumn(columnIndex: number): framework.lightning.table.TableColumn;
    }
}
declare namespace framework.lightning.table {
    interface TableCellRenderer {
        getComponent(table?: any, value?: any, row?: any, column?: any): any;
    }
}
declare namespace framework.lightning.table {
    interface TableColumnModel {
        addColumn(aColumn: framework.lightning.table.TableColumn): any;
        getColumnCount(): number;
        getColumnIndex(columnIdentifier: any): number;
        getColumn(columnIndex: number): framework.lightning.table.TableColumn;
    }
}
declare namespace framework.lightning.table {
    class TableEvent extends Event {
        firstIndex: number;
        lastIndex: number;
        srcEvent: Event;
        constructor(type: string, evt: Event, first: number, last: number);
    }
}
declare namespace framework.lightning.table {
    interface TableModel {
        getRowCount(): number;
        isCellEditable(rowIndex: number, columnIndex: number): boolean;
        getValueAt(rowIndex: number, columnIndex: number): any;
        setValueAt(aValue: any, rowIndex: number, columnIndex: number): any;
    }
}
declare namespace framework {
    class ObjectBuilder {
        obj: Object;
        static New$(): ObjectBuilder;
        static New$jsweet_lang_Object(o: Object): ObjectBuilder;
        static New(o?: any): any;
        set(key: string, value: any): ObjectBuilder;
        setArray(key: string, ...value: any[]): ObjectBuilder;
        clear(): ObjectBuilder;
        remove(key: string): ObjectBuilder;
        done(): Object;
        constructor();
    }
}
declare namespace framework {
    interface Renderable {
        getChangedAttributes(): Array<string>;
        getChangedStyles(): Array<string>;
        getNative(): HTMLElement;
        getChild(name: string): Renderable;
        removeChild(r: Renderable): Renderable;
        clearChildren(): Renderable;
        getRenderers(): Array<framework.renderer.Renderer<any>>;
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
        getAttribute(key: string): string;
        getName(): string;
        setName(name: string): any;
        getParent(): Renderable;
        getChildren(): Array<framework.JSContainer>;
        getStyleNames(): string[];
        getAttributeNames(): string[];
        getHtml(): string;
        setHtml(h: string): Renderable;
        isRendered(): boolean;
        setRendered(b: boolean): Renderable;
        getListeners(): Object;
        render(root?: any): any;
        getData(): any;
        setData(data?: any): any;
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
    class ContainerRenderer implements framework.renderer.ExtendedRenderer<framework.JSContainer> {
        static timeSpent: number;
        decorate(c: framework.JSContainer): void;
        doRender$framework_JSContainer$jsweet_dom_HTMLElement(c: framework.JSContainer, root: HTMLElement): void;
        doRender(c?: any, root?: any): any;
        execCommands(njq: HTMLElement, container: framework.Renderable): void;
        renderEvents(njq: HTMLElement, c: framework.JSContainer): void;
        renderAttributes(njq: HTMLElement, c: framework.Renderable, changed: boolean): void;
        clearAttributes(elem: HTMLElement): void;
        clearStyles(jq: HTMLElement): void;
        renderStyles(njq: HTMLElement, c: framework.Renderable, changed: boolean): void;
        postRender$framework_JSContainer$jsweet_dom_HTMLElement(c: framework.JSContainer, root: HTMLElement): void;
        /**
         *
         * @param {framework.JSContainer} c
         * @param {HTMLElement} root
         */
        postRender(c?: any, root?: any): any;
        constructor();
    }
}
declare namespace framework.renderer {
    interface ExtendedRenderer<T extends framework.Renderable> extends framework.renderer.Renderer<T> {
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        postRender(c?: any, root?: any): any;
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
declare namespace framework {
    class SalesforceAdaptor implements framework.Adaptor {
        Execute(src: any, serviceName: string, request: Object, callback: framework.ServiceCallback): void;
        constructor();
    }
}
declare namespace framework {
    interface ServiceCallback {
        (response: any, statusCode: number): boolean;
    }
}
declare namespace framework.util {
    class HashMap<K, V> implements framework.util.Map<K, V> {
        d: Object;
        /**
         *
         * @return {*[]}
         */
        keySet(): Array<K>;
        /**
         *
         * @param {*} key
         * @param {*} value
         * @return {*}
         */
        put(key: K, value: V): framework.util.Map<K, V>;
        /**
         *
         * @param {*} key
         * @return {*}
         */
        get(key: K): V;
        /**
         *
         * @param {*} key
         * @return {boolean}
         */
        containsKey(key: K): boolean;
        constructor();
    }
}
declare namespace framework.util {
    interface Map<K, V> {
        keySet(): Array<K>;
        put(key: K, value: V): Map<K, V>;
        get(key: K): V;
        containsKey(key: K): boolean;
    }
}
declare class ui {
}
declare namespace framework.builder.data {
    class DataStructure extends framework.builder.data.File {
        object: Object;
        constructor(object: Object);
        getName(): string;
        getLabel(): string;
        getTitle(): string;
        isDeletable(): boolean;
        getLabelPlural(): string;
        isQueryable(): boolean;
        getSearchable(): string;
        isUpdateable(): boolean;
        getFields(source: framework.JSContainer, listener: framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>>): void;
    }
    namespace DataStructure {
        class DataStructure$0 implements framework.builder.data.RemoteDataListener<any> {
            private listener;
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any, listener: any);
        }
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
        class Boot$3 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$4 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$5 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$6 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$7 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$8 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$9 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$10 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$11 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$12 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$13 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$14 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$15 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$16 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$17 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$18 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$19 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$20 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$21 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$22 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$23 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$24 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$25 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$26 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$27 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$28 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$29 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$30 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$31 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$32 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$33 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$34 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$35 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$36 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$37 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$38 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$39 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$40 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            createInstance(designMode: boolean): framework.design.Designable;
            constructor(__arg0: any);
        }
        class Boot$41 extends framework.builder.libraries.AbstractComponentFactory {
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
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
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
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
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
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
    }
}
declare namespace framework.design {
    class TagParameter extends framework.design.Parameter {
        constructor();
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
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
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
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
        /**
         *
         * @param {*} designable
         * @return {string}
         */
        extractValue(designable: framework.design.Designable): string;
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
        d: Object;
        /**
         *
         * @param {string} evt
         * @param {*} listener
         */
        on(evt: string, listener: EventListener): void;
        advancedEventTypes(): string[];
        fireListener(key: string, evt: Event): void;
        getScope(): Object;
        find(path: string): framework.Renderable;
        findDesignable(des: framework.design.Designable, name: string, index: number): framework.Renderable;
        getChild(name: string): framework.Renderable;
        removeChild(r: framework.Renderable): framework.Renderable;
        clearChildren(): framework.Renderable;
        /**
         *
         * @return {string[]}
         */
        getChangedAttributes(): Array<string>;
        getNative(): HTMLElement;
        /**
         *
         * @return {string[]}
         */
        getChangedStyles(): Array<string>;
        flush(s: string): void;
        /**
         *
         * @return {*[]}
         */
        getRenderers(): Array<framework.renderer.Renderer<any>>;
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
         * @return {framework.JSContainer[]}
         */
        getChildren(): Array<JSContainer>;
        /**
         *
         * @return {Array}
         */
        getStyleNames(): string[];
        /**
         *
         * @return {Array}
         */
        getAttributeNames(): string[];
        /**
         *
         * @return {string}
         */
        getHtml(): string;
        setString(key: string, value: string): void;
        getString(key: string): string;
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
         * @return {Object}
         */
        getListeners(): Object;
        render$(): void;
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        postRender(c?: any, root?: any): any;
        postRender$jsweet_dom_HTMLElement(root: HTMLElement): void;
        contains(lst: Array<any>, o: any): boolean;
        static defaultRenderer: framework.renderer.ContainerRenderer;
        static defaultRenderer_$LI$(): framework.renderer.ContainerRenderer;
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
        setData(data?: any): any;
        setData$java_lang_Object(data: any): void;
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
        constructor(name?: any, tag?: any);
    }
    namespace JSContainer {
        class JSContainer$0 implements framework.EventListener {
            private listener;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, listener: any);
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
declare namespace framework.design {
    class DatasourceParameter extends framework.design.AttributeParameter {
        constructor(name: string, label: string, category: string);
        /**
         *
         * @param {*} designable
         * @return {*}
         */
        getEditor(designable: framework.design.Designable): framework.builder.properties.PropertyEditor;
    }
}
declare namespace framework.builder {
    class Component extends framework.JSContainer implements framework.EventListener {
        titleFigure: framework.JSContainer;
        avatar: framework.JSContainer;
        initial: framework.JSContainer;
        title: framework.JSContainer;
        componentFactoryRegistry: framework.builder.libraries.ComponentFactoryRegistry;
        identifier: string;
        ini: string;
        constructor(identifier: string, initial: string, label: string);
        getInital(): string;
        getFactory(): framework.builder.marshalling.ComponentFactory;
        getDraggableOptions(): JQueryUI.DraggableOptions;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
    namespace Component {
        class Component$0 implements framework.EventListener {
            private me;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, me: any);
        }
    }
}
declare namespace framework.builder.editors {
    abstract class AbstractEditor<T> extends framework.JSContainer implements framework.builder.editors.Editor<T> {
        file: framework.builder.data.File;
        projectService: framework.builder.data.ProjectService;
        rootEditor: framework.builder.editors.VisualEditor;
        constructor(name: string, tag: string, rootEditor: framework.builder.editors.VisualEditor);
        setRootEditor(root: framework.builder.editors.VisualEditor): void;
        getStructure(): framework.builder.editors.Structure;
        dirty(): void;
        clean(): void;
        getRootEditor(): framework.builder.editors.VisualEditor;
        abstract getMarshall(): string;
        save(type?: any): any;
        save$(): void;
        abstract createNew(f: framework.builder.data.File): T;
        abstract unmarshall(f: framework.builder.data.File): T;
        /**
         *
         * @param {*} data
         */
        consume(data?: any): any;
        consume$java_lang_Object(data: T): void;
        open(f: framework.builder.data.File): void;
    }
    namespace AbstractEditor {
        class AbstractEditor$0 implements framework.builder.data.RemoteDataListener<any> {
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.editors {
    class JSONEditor extends framework.JSContainer {
        constructor();
    }
}
declare namespace framework.builder.editors {
    class JSTemplate extends framework.JSContainer {
        fileName: string;
        constructor(f: framework.builder.data.File);
        getId(): string;
    }
}
declare namespace framework.builder.editors {
    class Preview extends framework.JSContainer implements framework.builder.editors.DesignableEditor {
        root: framework.design.Designable;
        constructor(file?: any);
        static build(s: string): Preview;
        unmarshall$framework_builder_data_File(f: framework.builder.data.File): framework.builder.marshalling.Component;
        unmarshall(f?: any): any;
        unmarshall$java_lang_String(f: string): framework.builder.marshalling.Component;
        build(component: framework.builder.marshalling.Component): framework.design.Designable;
        consume(component: framework.builder.marshalling.Component): void;
        getRootItem(): framework.design.Designable;
    }
}
declare namespace framework.builder.editors {
    class Structure extends framework.JSContainer {
        root: framework.design.Designable;
        ul: framework.JSContainer;
        lis: framework.util.Map<string, framework.JSContainer>;
        liRoot: framework.JSContainer;
        selected: framework.TreeItem;
        file: framework.builder.data.File;
        selector: framework.builder.Selector;
        __cut: boolean;
        clipboardItem: framework.design.Designable;
        dataRoot: framework.TreeItem;
        toggleSelect: framework.EventListener;
        constructor(name: string, root: framework.design.Designable, f: framework.builder.data.File, selector: framework.builder.Selector);
        copy(des: framework.design.Designable): void;
        cut(des: framework.design.Designable): void;
        isCut(): boolean;
        getClipBoard(): framework.design.Designable;
        clearClipboard(): void;
        getFile(): framework.builder.data.File;
        getSelector(): framework.builder.Selector;
        getRootUINode(): framework.design.Designable;
        select(designable: framework.design.Designable): void;
        setSelected(item: framework.TreeItem): void;
        getSelected(): framework.TreeItem;
        reload$(): void;
        addTreeItem(li: framework.JSContainer, type: string, label: string): void;
        getItem$framework_design_Designable$framework_JSContainer(designable: framework.design.Designable, currentNode: framework.JSContainer): framework.builder.editors.StructureTreeItem;
        getItem(designable?: any, currentNode?: any): any;
        getItem$java_lang_String(type: string): framework.TreeItem;
        reload$java_lang_String(type: string): void;
        reload(type?: any): any;
        reload$framework_design_Designable(designable: framework.design.Designable): void;
        unselect(c: framework.JSContainer): void;
        renderFiles(): void;
        addNode(ctn: framework.design.Designable, li: framework.JSContainer, level: number, parent: framework.design.Designable): framework.builder.editors.StructureTreeItem;
    }
    namespace Structure {
        class Structure$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class Structure$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.editors {
    class Zoom extends framework.JSContainer {
        value: framework.JSInput;
        constructor(name: string, editor: framework.builder.editors.VisualEditor);
    }
    namespace Zoom {
        class Zoom$0 implements framework.EventListener {
            private editor;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, editor: any);
        }
    }
}
declare namespace framework.builder {
    class FilesList extends framework.JSContainer {
        itemSelectedListeners: Array<framework.builder.ItemSelectedListener>;
        selector: framework.builder.ItemSelector;
        click: framework.EventListener;
        constructor(name: string, selector: framework.builder.ItemSelector);
        addFile(file: framework.builder.UIFile): FilesList;
        addItemSelectedListener(l: framework.builder.ItemSelectedListener): void;
        fireItemSelectedListeners(file: framework.builder.UIFile, selector: framework.builder.ItemSelector): void;
        select(file: framework.builder.UIFile): void;
    }
    namespace FilesList {
        class FilesList$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.libraries {
    class DataComposer extends framework.JSContainer implements framework.builder.editors.Editor<Array<framework.builder.data.DataStructure>> {
        editor: framework.builder.editors.VisualEditor;
        structure: framework.builder.editors.Structure;
        constructor(name: string, editor: framework.builder.editors.VisualEditor, structure: framework.builder.editors.Structure);
        /**
         *
         */
        save(): void;
        /**
         *
         */
        dirty(): void;
        /**
         *
         */
        clean(): void;
        /**
         *
         * @param {framework.builder.data.File} file
         */
        open(file: framework.builder.data.File): void;
        /**
         *
         * @return {framework.builder.editors.Structure}
         */
        getStructure(): framework.builder.editors.Structure;
        /**
         *
         * @return {framework.builder.editors.VisualEditor}
         */
        getRootEditor(): framework.builder.editors.VisualEditor;
    }
}
declare namespace framework.builder {
    class Previewer extends framework.JSContainer {
        static project: framework.builder.data.File;
        constructor(name: string);
    }
}
declare namespace framework.builder {
    class Ruler extends framework.JSContainer implements framework.interactions.Draggable {
        unit: string;
        accuracy: number;
        chunk: number;
        inner: framework.JSContainer;
        vertical: boolean;
        constructor(vertical: boolean);
        renderRuler(): void;
        /**
         *
         * @return {*}
         */
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
}
declare namespace framework.builder {
    class Selector extends framework.JSContainer implements framework.EventListener {
        selected: framework.design.Designable;
        visualEditor: framework.builder.editors.VisualEditor;
        constructor();
        setVisualEditor(editor: framework.builder.editors.VisualEditor): void;
        getSelected(): framework.design.Designable;
        select(component: framework.design.Designable): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
    namespace Selector {
        class Selector$0 implements framework.builder.editors.Visitor {
            __parent: any;
            /**
             *
             * @param {*} host
             */
            doVisit(host: framework.design.Designable): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder {
    class UIFile extends framework.JSContainer {
        /**
         * <div id="uiFile">
         * <a href="javascript:void(0);" class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable">
         * <div class="slds-app-launcher__tile-figure">
         * <span class="slds-avatar slds-avatar_large">
         * <abbr class="slds-avatar__initials slds-icon-custom-27" title="{{title}}">{{abbr}}</abbr>
         * </span>
         *
         * </div>
         * <div class="slds-app-launcher__tile-body">
         * <span class="slds-text-link">{{title}}</span>
         * <p>
         * {{help}}
         * </p>
         * </div>
         * </a>
         * </div>
         * @param name
         */
        figure: framework.JSContainer;
        body: framework.JSContainer;
        uiTitle: framework.JSContainer;
        uiHelp: framework.JSContainer;
        abbr: framework.JSContainer;
        constructor(name: string);
        setTitle(title: string): UIFile;
        setAbbr(abbr: string): UIFile;
        setHelp(help: string): UIFile;
    }
}
declare namespace framework.builder {
    class WelcomeScreenItem extends framework.JSContainer {
        titleFigure: framework.JSContainer;
        avatar: framework.JSContainer;
        abbr: framework.JSContainer;
        body: framework.JSContainer;
        title: framework.JSContainer;
        description: framework.JSContainer;
        constructor(name: string, abbrev: string, title: string, text: string, index: number);
    }
}
declare namespace framework.designables {
    class JSDesignable extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string, tag: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.designables {
    class JSDesignableDataSource extends framework.JSContainer implements framework.design.Designable, framework.EventListener {
        datasource: framework.builder.data.RestDataSource;
        dsDelegate: framework.designables.DesignableDelegate;
        previous: framework.lightning.IconButton;
        next: framework.lightning.IconButton;
        currentIndex: number;
        constructor(name: string);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.designables {
    class JSDesignableImage extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
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
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.designables {
    class JSDesignableList extends framework.JSContainer implements framework.design.Designable {
        designables: Array<framework.design.Designable>;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        decorate(): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
    class JSSelect extends framework.JSContainer implements framework.InputField<any> {
        previousValue: string;
        constructor(name: string);
        addOption(option: framework.JSOption): JSSelect;
        setMultiple(b: boolean): void;
        setSize(size: number): void;
        isMultiple(): boolean;
        /**
         *
         * @return {*}
         */
        getValue(): any;
        /**
         *
         * @param {boolean} b
         */
        setValue(b?: any): any;
        setValue$java_lang_Object(values: any): void;
        getPreviousValue(): string;
    }
}
declare namespace framework {
    class JSTextArea extends framework.JSContainer implements framework.InputField<string> {
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
    class Accordion extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        designables: Array<framework.design.Designable>;
        constructor(name: string);
        /**
         *
         * @param {framework.lightning.AccordionItem} item
         * @return
         * @return {framework.lightning.Accordion}
         */
        addItem(item: framework.lightning.AccordionItem): Accordion;
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class AccordionItem extends framework.JSContainer implements framework.design.Designable {
        accordionContent: framework.JSContainer;
        delegate: framework.designables.DesignableDelegate;
        accSummary: framework.JSContainer;
        summaryHeading: framework.JSContainer;
        uititle: framework.JSContainer;
        btn: framework.lightning.IconButton;
        constructor(name: string, title: string);
        open(): void;
        close(): void;
        setTitle(title: string): void;
        setIcon(iconType: string, iconName: string): void;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        getContent(): framework.JSContainer;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
    namespace AccordionItem {
        class AccordionItem$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.lightning {
    class Avatar extends framework.JSContainer implements framework.design.Designable {
        image: framework.designables.JSDesignableImage;
        static SMALL: string;
        static X_SMALL: string;
        static MEDIUM: string;
        static LARGE: string;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        getImage(): framework.JSContainer;
        setSize(size: string): Avatar;
        setCircle(b: boolean): Avatar;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class Backdrop extends framework.JSContainer {
        constructor(name: string);
        open(): Backdrop;
        close(): Backdrop;
    }
}
declare namespace framework.lightning {
    class Badge extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string, tag: string);
        setInverse(b: boolean): Badge;
        setLightest(b: boolean): Badge;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
    class BreadCrumbItem extends framework.JSContainer implements framework.design.Designable {
        link: framework.JSContainer;
        delagate: framework.designables.DesignableDelegate;
        constructor(name: string, label: string);
        setLabel(label: string): BreadCrumbItem;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class BreadCrumbs extends framework.JSContainer implements framework.design.Designable {
        breadcrumb: framework.lightning.HorizontalList;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        addItem(name: string, label: string): BreadCrumbs;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class ButtonGroup extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        addButton$framework_lightning_Button(btn: framework.lightning.Button): ButtonGroup;
        addButton$framework_lightning_Button$boolean(btn: framework.lightning.Button, isLast: boolean): ButtonGroup;
        addButton(btn?: any, isLast?: any): any;
        addButton$framework_lightning_IconButton(btn: framework.lightning.IconButton): ButtonGroup;
        addButton$framework_lightning_IconButton$boolean(btn: framework.lightning.IconButton, isLast: boolean): ButtonGroup;
        addElement(c: framework.JSContainer, isLast: boolean): ButtonGroup;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
declare namespace framework.lightning.designables {
    class JSDesignableIterator extends framework.JSContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        data: Array<Object>;
        templateCtn: framework.JSContainer;
        list: framework.JSContainer;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        setData(obj: any): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class DockedComposerContainer extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class DropDown extends framework.JSContainer {
        static SMALL: string;
        static XX_SMALL: string;
        static X_SMALL: string;
        static MEDIUM: string;
        static LARGE: string;
        static LEFT: string;
        static RIGHT: string;
        static BOTTOM: string;
        ul: framework.JSContainer;
        constructor(name: string);
        addItem(item: framework.lightning.DropDownItem): DropDown;
        setSize(size: string): DropDown;
        setPosition(position: string): DropDown;
    }
}
declare namespace framework.lightning {
    class DropDownItem extends framework.JSContainer {
        label: framework.lightning.SvgIcon;
        txt: framework.JSContainer;
        constructor(name: string, label: string);
        setIcon(name: string, type: string): void;
        setLabel(label: string): void;
    }
}
declare namespace framework.lightning {
    class DropDownTrigger extends framework.JSContainer {
        open: boolean;
        constructor(name: string, button: framework.JSContainer, dropdown: framework.lightning.DropDown);
    }
    namespace DropDownTrigger {
        class DropDownTrigger$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.lightning {
    class HorizontalList extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class IconButton extends framework.JSContainer implements framework.design.Designable {
        icon: framework.lightning.SvgIcon;
        static SMALL: string;
        static EXTRA_SMALL: string;
        static EXTRA_EXTRA_SMALL: string;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        getIcon(): framework.lightning.SvgIcon;
        setIcon(icon: framework.lightning.SvgIcon): IconButton;
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
        setStateful(b: boolean): IconButton;
        isSelected(): boolean;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class ListBox extends framework.JSContainer implements framework.design.Designable {
        ul: framework.JSContainer;
        static LENGTH_5: string;
        static LENGTH_7: string;
        static LENGTH_10: string;
        static LENGTH_DEFAULT: string;
        lengthSel: string;
        withIcon: boolean;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        setLength(length: string): ListBox;
        setWithIcon(b: boolean): ListBox;
        ref(): ListBox;
        addItem(option: framework.lightning.ListBoxItem): ListBox;
        setVertical(b: boolean): ListBox;
        setHorizontal(b: boolean): ListBox;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class ListBoxItem extends framework.JSContainer implements framework.design.Designable {
        option: framework.lightning.ListBoxOption;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        setIconType(type: string): ListBoxItem;
        setIconName(name: string): ListBoxItem;
        setText(text: string): ListBoxItem;
        setMeta(text: string): ListBoxItem;
        setHasMeta(b: boolean): ListBoxItem;
        setType(type: string): ListBoxItem;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class ListBoxOption extends framework.JSContainer {
        media: framework.lightning.Media;
        static TYPE_PLAIN: string;
        static TYPE_ENTITY: string;
        leftIcon: framework.lightning.SvgIcon;
        textElement: framework.JSContainer;
        metaElement: framework.JSContainer;
        plainTextElement: framework.JSContainer;
        constructor(name: string);
        getMedia(): framework.lightning.Media;
        setIconType(type: string): ListBoxOption;
        setIconName(name: string): ListBoxOption;
        setText(text: string): ListBoxOption;
        setMeta(text: string): ListBoxOption;
        setHasMeta(b: boolean): ListBoxOption;
        setType(type: string): ListBoxOption;
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
        static Sizes: string[];
        static Sizes_$LI$(): string[];
        static PADDING_SIZE_NONE: string;
        static PADDING_SIZE_NONE_$LI$(): string;
        static PADDING_SIZE_XXX_SMALL: string;
        static PADDING_SIZE_XXX_SMALL_$LI$(): string;
        static PADDING_SIZE_XX_SMALL: string;
        static PADDING_SIZE_XX_SMALL_$LI$(): string;
        static PADDING_SIZE_X_SMALL: string;
        static PADDING_SIZE_X_SMALL_$LI$(): string;
        static PADDING_SIZE_SMALL: string;
        static PADDING_SIZE_SMALL_$LI$(): string;
        static PADDING_SIZE_MEDIUM: string;
        static PADDING_SIZE_MEDIUM_$LI$(): string;
        static PADDING_SIZE_LARGE: string;
        static PADDING_SIZE_LARGE_$LI$(): string;
        static PADDING_SIZE_X_LARGE: string;
        static PADDING_SIZE_X_LARGE_$LI$(): string;
        static PADDING_SIZE_XX_LARGE: string;
        static PADDING_SIZE_XX_LARGE_$LI$(): string;
        constructor(name: string, tag: string);
        setPaddingTop(size: string): LTContainer;
        setPaddingRight(size: string): LTContainer;
        setPaddingBottom(size: string): LTContainer;
        setPaddingLeft(size: string): LTContainer;
        setSizeAndPosition(size: string, position: string): LTContainer;
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
    class Modal extends framework.JSContainer {
        modalContainer: framework.JSContainer;
        header: framework.JSContainer;
        content: framework.lightning.ModalBody;
        footer: framework.lightning.ModalFooter;
        closeButton: framework.lightning.IconButton;
        title: framework.JSContainer;
        backdrop: framework.lightning.Backdrop;
        constructor(name: string, stitle: string);
        setFooter(footer: framework.lightning.ModalFooter): void;
        setBody(body: framework.lightning.ModalBody): void;
        getBackdrop(): framework.lightning.Backdrop;
        setBackdrop(backdrop: framework.lightning.Backdrop): void;
        open(): void;
        close(): void;
        static SIZE_LARGE: string;
        static SIZE_MEDIUM: string;
        static SIZE_NORMAL: string;
        setSize(size: string): Modal;
        setTitle(stitle: string): Modal;
        getTitle(): framework.JSContainer;
        getModalContainer(): framework.JSContainer;
        getHeader(): framework.JSContainer;
        getBody(): framework.lightning.ModalBody;
        getFooter(): framework.JSContainer;
        getCloseButton(): framework.lightning.IconButton;
    }
    namespace Modal {
        class Modal$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.lightning {
    class PopOver extends framework.JSContainer {
        static NUBIN_NONE: string;
        static NUBIN_BOTTOM_RIGHT: string;
        static NUBIN_BOTTOM_LEFT: string;
        static NUBIN_TOP_RIGHT: string;
        static NUBIN_TOP_LEFT: string;
        static NUBIN_POSITIONS: string[];
        static NUBIN_POSITIONS_$LI$(): string[];
        body: framework.designables.JSDesignable;
        footer: framework.designables.JSDesignable;
        constructor(name: string);
        getFooter(): framework.designables.JSDesignable;
        getBody(): framework.designables.JSDesignable;
        showFooter(b: boolean): PopOver;
        showBody(b: boolean): PopOver;
        setNubin(position: string): PopOver;
    }
}
declare namespace framework.lightning {
    class Section extends framework.JSContainer {
        titleContainer: framework.JSContainer;
        title: framework.JSContainer;
        arrow: framework.lightning.SvgIcon;
        content: framework.JSContainer;
        constructor(name: string, title: string);
        open(): Section;
        close(): Section;
        setTitle(stitle: string): Section;
        getContent(): framework.JSContainer;
        getTitleContainer(): framework.JSContainer;
    }
}
declare namespace framework.lightning {
    class Spinner extends framework.JSContainer {
        html: string;
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class SvgIcon extends framework.JSContainer {
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
        svgClass: string;
        text: string;
        showIcon: boolean;
        isLeft: boolean;
        constructor(name?: any, type?: any, iconName?: any);
        setSvgClass(cls: string): void;
        setShowIcon(b: boolean): void;
        setIconPosition(position: string): void;
        setText(text: string): void;
        refresh(): void;
        getAssetsUrl(): string;
        setAssetsUrl(assetsUrl: string): void;
        getType(): string;
        setType(type: string): void;
        getIconName(): string;
        setIconName(name: string): void;
        setSize(size: string): SvgIcon;
        setTextType(type: string): SvgIcon;
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
        listeners: Array<framework.lightning.TabActionListener>;
        body: framework.lightning.TabBody;
        title: framework.JSContainer;
        closeButton: framework.lightning.SvgIcon;
        active: boolean;
        constructor(name: string, body: framework.lightning.TabBody);
        setClosable(b: boolean): TabItem;
        addTabActionListener(listene: framework.lightning.TabActionListener): void;
        close(): TabItem;
        isActive(): boolean;
        fireClose(): void;
        fireActivate(): void;
        fireDeActivate(): void;
        setActive(b: boolean): TabItem;
        getBody(): framework.lightning.TabBody;
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
    class ExcelTable extends framework.JSContainer implements framework.renderer.Renderer<ExcelTable> {
        table: any;
        opt: ht.Options;
        constructor(name: string);
        setOptions(options: ht.Options): void;
        doRender$framework_lightning_table_ExcelTable$jsweet_dom_HTMLElement(c: ExcelTable, root: HTMLElement): void;
        /**
         *
         * @param {framework.lightning.table.ExcelTable} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
    }
}
declare namespace framework.lightning.table {
    class Paginator extends framework.JSContainer implements framework.EventListener {
        previous: framework.lightning.IconButton;
        next: framework.lightning.IconButton;
        pages: framework.JSContainer;
        numPages: number;
        table: framework.lightning.table.Table;
        maxItem: number;
        constructor(name: string);
        setTable(table: framework.lightning.table.Table): void;
        redisplayBtns(currentPage: number): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.lightning.table {
    class Table extends framework.JSContainer {
        thead: framework.JSContainer;
        tbody: framework.JSContainer;
        tfoot: framework.JSContainer;
        model: framework.lightning.table.TableModel;
        tableCellRenderer: framework.lightning.table.TableCellRenderer;
        tableColumnModel: framework.lightning.table.TableColumnModel;
        currrentPage: number;
        pageSize: number;
        ftr: framework.JSContainer;
        ftd: framework.JSContainer;
        paginator: framework.lightning.table.Paginator;
        selectable: boolean;
        multiSelectable: boolean;
        selecteRowOn: string;
        emptyTableMessage: string;
        static SELECT_ROW_EVT: framework.EventListener;
        static SELECT_ROW_EVT_$LI$(): framework.EventListener;
        constructor(name: string);
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        setSelectRowOn(on: string): void;
        addEmptyRow(): framework.JSContainer;
        loading(): void;
        emptyData(): void;
        getModel(): framework.lightning.table.TableModel;
        setModel(model: framework.lightning.table.TableModel): void;
        getTableCellRenderer(): framework.lightning.table.TableCellRenderer;
        setTableCellRenderer(tableCellRenderer: framework.lightning.table.TableCellRenderer): void;
        getTableColumnModel(): framework.lightning.table.TableColumnModel;
        setTableColumnModel(tableColumnModel: framework.lightning.table.TableColumnModel): void;
        getThead(): framework.JSContainer;
        getTbody(): framework.JSContainer;
        setPage(page: number): void;
        getPage(): number;
        getPageSize(): number;
        setPageSize(size: number): void;
        refreshData(): void;
        getRow(index: number): framework.JSContainer;
        getBody(): framework.JSContainer;
        setSelectable(b: boolean): void;
        isSelectable(): boolean;
        setMultiSelectable(b: boolean): void;
        isMultiSelectable(): boolean;
        refreshColumns(): void;
        setBordered(b: boolean): Table;
        setFixedLayout(b: boolean): Table;
        setResizableCol(b: boolean): Table;
        setFeature(cls: string, b: boolean): void;
        setColBordered(b: boolean): Table;
        setCellBuffered(b: boolean): Table;
        setTopMagnet(b: boolean): Table;
        setNoRowHover(b: boolean): Table;
        setStriped(b: boolean): Table;
    }
    namespace Table {
        class Table$0 implements framework.EventListener {
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor();
        }
    }
}
declare namespace framework.lightning.table {
    class TableColumn extends framework.JSContainer {
        identifier: any;
        title: framework.JSContainer;
        constructor(name: string, identifier: any, label: string);
        getIdentifier(): any;
        setWidth(width: string): TableColumn;
        setLabel(title: string): TableColumn;
        setFeature(cls: string, b: boolean): void;
    }
}
declare namespace framework.lightning {
    class Tabs extends framework.JSContainer {
        nav: framework.JSContainer;
        body: framework.JSContainer;
        constructor(name: string);
        addItem(label?: any, list?: any): any;
        addItem$framework_lightning_TabItem(item: framework.lightning.TabItem): Tabs;
        clear(): Tabs;
        setActive(item: framework.lightning.TabItem): Tabs;
        getTab(body: framework.lightning.TabBody): framework.lightning.TabItem;
        getActiveTab(): framework.lightning.TabItem;
        getItems(): Array<framework.lightning.TabItem>;
    }
}
declare namespace framework.lightning {
    class Text extends framework.JSContainer implements framework.design.Designable {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        static LINK_NONE: string;
        static LINK_RESET: string;
        static LINK: string;
        static LINK_FAUX: string;
        static NONE: string;
        static BODY_REGULAR: string;
        static BODY_SMALL: string;
        static HEADING_LARGE: string;
        static HEADING_MEDIUM: string;
        static HEADING_SMALL: string;
        static TITLE: string;
        static TILE_CAPS: string;
        static COLOR_NONE: string;
        static COLOR_DEFAULT: string;
        static COLOR_WEAK: string;
        static COLOR_ERROR: string;
        static COLOR_SUCCESS: string;
        static COLOR_INVERSE_DEFAULT: string;
        static COLOR_INVERSE_WEAK: string;
        static ALIGN_NONE: string;
        static ALIGN_LEFT: string;
        static ALIGN_CENTER: string;
        static ALIGN_RIGHT: string;
        static LONG_FORM: string;
        static TEXT_TYPES: string[];
        static TEXT_TYPES_$LI$(): string[];
        static TEXT_TYPES_LABELS: string[];
        static TEXT_TYPES_LABELS_$LI$(): string[];
        static COLORS: string[];
        static COLORS_$LI$(): string[];
        static COLORS_LABELS: string[];
        static COLORS_LABELS_$LI$(): string[];
        static ALIGNS: string[];
        static ALIGNS_$LI$(): string[];
        static ALIGNS_LABELS: string[];
        static ALIGNS_LABELS_$LI$(): string[];
        static DECORATIONS: string[];
        static DECORATIONS_$LI$(): string[];
        static DECORATIONS_LABELS: string[];
        static DECORATIONS_LABELS_$LI$(): string[];
        static textTags: Object;
        static textTags_$LI$(): Object;
        static __static_initializer_0(): void;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string, tag: string);
        setAlign(align: string): Text;
        setTextType(type: string): Text;
        setColor(color: string): Text;
        setDecoration(decoration: string): Text;
        setLongForm(b: boolean): Text;
        toggleClass(cls: string, b: boolean): Text;
        setTruncate(b: boolean): Text;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.rtc {
    class Conference extends framework.JSContainer implements framework.renderer.ExtendedRenderer<Conference> {
        localVideo: framework.rtc.LocalVideoContainer;
        remoteVideos: framework.util.Map<string, framework.rtc.VideoContainer>;
        remotes: framework.JSContainer;
        webrtc: Object;
        constructor(name: string);
        readyToCall(o: Object): Object;
        localStream(stream: Object): Object;
        localMediaError(err: Object): Object;
        localScreenAdded(video: HTMLVideoElement): Object;
        localScreenRemoved(video: HTMLVideoElement): Object;
        videoAdded(video: HTMLVideoElement, peer: Object): Object;
        static getIdentifier(peer: Object): string;
        videoRemoved(video: HTMLVideoElement, peer: Object): Object;
        remoteVolumeChange(peer: Object, volume: string): Object;
        volumeChange(volume: string, threshold: string): Object;
        static aler(s: string): void;
        configure(): Object;
        doRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c: Conference, root: HTMLElement): void;
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
        postRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c: Conference, root: HTMLElement): void;
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        postRender(c?: any, root?: any): any;
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
        buttons: Array<framework.lightning.IconButton>;
        buttonsCtn: framework.JSContainer;
        leftIcon: framework.lightning.IconButton;
        constructor(name: string, title: string);
        setLeftIcon$java_lang_String$java_lang_String(name: string, type: string): TreeItem;
        setLeftIcon(name?: any, type?: any): any;
        setLeftIcon$java_lang_String(name: string): TreeItem;
        addIcon(name: string, type: string, listener: framework.EventListener): void;
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
declare namespace framework.builder.data {
    class DataSourcesEditor extends framework.builder.editors.AbstractEditor<framework.builder.data.DataSource<Object>> {
        url: framework.JSInput;
        body: framework.JSTextArea;
        constructor(name: string, rootEditor: framework.builder.editors.VisualEditor);
        /**
         *
         * @return {string}
         */
        getMarshall(): string;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {*}
         */
        createNew(f: framework.builder.data.File): framework.builder.data.DataSource<Object>;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {*}
         */
        unmarshall(f: framework.builder.data.File): framework.builder.data.DataSource<Object>;
        consume$framework_builder_data_DataSource(data: framework.builder.data.DataSource<Object>): void;
        /**
         *
         * @param {*} data
         */
        consume(data?: any): any;
    }
}
declare namespace framework.builder.editors {
    class ContextEditor extends framework.builder.editors.AbstractEditor<Object> {
        form: framework.builder.data.DynaForm;
        constructor(name: string, rootEditor: framework.builder.editors.VisualEditor);
        /**
         *
         * @return {string}
         */
        getMarshall(): string;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {Object}
         */
        createNew(f: framework.builder.data.File): Object;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {Object}
         */
        unmarshall(f: framework.builder.data.File): Object;
        consume$jsweet_lang_Object(data: Object): void;
        /**
         *
         * @param {Object} data
         */
        consume(data?: any): any;
    }
    namespace ContextEditor {
        class ContextEditor$0 implements framework.EventListener {
            private modal;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, modal: any);
        }
        class ContextEditor$1 implements framework.EventListener {
            private modal;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, modal: any);
        }
    }
}
declare namespace framework.builder.editors {
    class EventEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> {
        component: framework.JSContainer;
        functionName: framework.JSContainer;
        events: framework.JSSelect;
        root: framework.design.Designable;
        editor: framework.builder.editors.JavascriptEditor;
        justSaved: string;
        constructor(name: string, root: framework.design.Designable, veditor: framework.builder.editors.VisualEditor);
        decoName(): void;
        fillValue(des: framework.design.Designable, updEvtSelect: boolean): void;
        getSource(des: framework.design.Designable, type: string): string;
        reactivate(): void;
        setDesignable(designable: framework.design.Designable): void;
        findDesignableById(parent: framework.design.Designable, id: string): framework.design.Designable;
        save$(): void;
        save$java_lang_String(type: string): void;
        save(type?: any): any;
        /**
         *
         * @return {string}
         */
        getMarshall(): string;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        createNew(f: framework.builder.data.File): framework.builder.marshalling.Component;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        unmarshall(f: framework.builder.data.File): framework.builder.marshalling.Component;
        consume$framework_builder_marshalling_Component(data: framework.builder.marshalling.Component): void;
        /**
         *
         * @param {framework.builder.marshalling.Component} data
         */
        consume(data?: any): any;
    }
    namespace EventEditor {
        class EventEditor$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class EventEditor$1 implements framework.EventListener {
            private root;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, root: any);
        }
    }
}
declare namespace framework.builder.editors {
    class VisualEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> implements framework.builder.editors.DesignableEditor {
        selectedItem: framework.design.Designable;
        root: framework.lightning.LightningApplication;
        workspace: framework.JSContainer;
        selector: framework.builder.Selector;
        leftComposers: framework.JSContainer;
        rightComposers: framework.JSContainer;
        propertiesDockedComposer: framework.builder.properties.PropertiesDockedComposer;
        libraryDockedComposer: framework.builder.libraries.LibrariesDockedComposer;
        structureDockedComposer: framework.builder.editors.StructureDockedComposer;
        leftOpen: boolean;
        rightOpen: boolean;
        iframe: framework.JSContainer;
        toggleOutline: framework.lightning.IconButton;
        toggleRuler: framework.lightning.IconButton;
        toggleDefinitions: framework.lightning.IconButton;
        jsonDef: framework.lightning.Modal;
        json: framework.JSTextArea;
        helper: framework.JSTextArea;
        hRule: framework.builder.Ruler;
        composer: framework.lightning.DockedComposer;
        bd: framework.lightning.Backdrop;
        constructor(name: string);
        showDef: boolean;
        toggleDefns(): void;
        escape(): void;
        zoom(percent: number): void;
        closeLeft(): void;
        openLeft(): void;
        closeRight(): void;
        openRight(): void;
        resizeWorkspace(work: framework.JSContainer): void;
        save(type?: any): any;
        save$(): void;
        getRootItem(): framework.lightning.LightningApplication;
        getSelectedItem(): framework.design.Designable;
        selectItem(designable: framework.design.Designable): void;
        visit$framework_builder_editors_Visitor(v: framework.builder.editors.Visitor): void;
        visit$framework_builder_editors_Visitor$framework_design_Designable(v: framework.builder.editors.Visitor, startAt: framework.design.Designable): void;
        visit(v?: any, startAt?: any): any;
        willAdd: framework.builder.Component;
        persist: boolean;
        setWillAddComponent(component: framework.builder.Component, persist: boolean): void;
        saveAsComponent(designable: framework.design.Designable): void;
        addNewComponent$framework_builder_Component$framework_design_Designable(component: framework.builder.Component, designable: framework.design.Designable): void;
        addNewComponent(component?: any, designable?: any): any;
        addNewComponent$framework_design_Designable$framework_design_Designable(container: framework.design.Designable, designable: framework.design.Designable): void;
        getWillAddComponent(): framework.builder.Component;
        getProject(): framework.builder.data.File;
        /**
         *
         * @return {string}
         */
        getMarshall(): string;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        createNew(f: framework.builder.data.File): framework.builder.marshalling.Component;
        /**
         *
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        unmarshall(f: framework.builder.data.File): framework.builder.marshalling.Component;
        cona(component: framework.builder.marshalling.Component): framework.design.Designable;
        consume$framework_builder_marshalling_Component(component: framework.builder.marshalling.Component): void;
        /**
         *
         * @param {framework.builder.marshalling.Component} component
         */
        consume(component?: any): any;
        getStructure(): framework.builder.editors.Structure;
        getSelector(): framework.builder.Selector;
    }
    namespace VisualEditor {
        class VisualEditor$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class VisualEditor$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class VisualEditor$2 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class VisualEditor$3 implements framework.builder.data.RemoteDataListener<any> {
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any);
        }
        class VisualEditor$4 implements framework.builder.data.RemoteDataListener<any> {
            private marshall;
            private designable;
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any, marshall: any, designable: any);
        }
        namespace VisualEditor$4 {
            class VisualEditor$4$0 implements framework.builder.data.RemoteDataListener<any> {
                __parent: any;
                /**
                 *
                 * @param {*} data
                 */
                dataLoaded(data: any): void;
                constructor(__parent: any);
            }
        }
    }
}
declare namespace framework.designables {
    class JSDesignableBlockComponent extends framework.designables.JSDesignable {
        constructor(name: string, tag: string);
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework {
    class JSHTMLFragment extends framework.designables.JSDesignable {
        context: Object;
        constructor(name: string, template: string);
        getTemplate(): string;
        setTemplate(template: string): void;
        getContext(): Object;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        render$jsweet_dom_HTMLElement(parent: HTMLElement): void;
        /**
         *
         * @param {HTMLElement} parent
         */
        render(parent?: any): any;
    }
}
declare namespace framework.lightning.designables {
    class JSDesignableIterable extends framework.designables.JSDesignable {
        constructor(name: string, tag: string);
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        setData(data: any): void;
        Clone(): JSDesignableIterable;
    }
}
declare namespace framework.lightning {
    class ModalBody extends framework.designables.JSDesignable {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class ModalFooter extends framework.designables.JSDesignable {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class PanelSection extends framework.designables.JSDesignable {
        constructor(name: string, tag: string);
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
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
    class CodeMirrorEditor extends framework.JSTextArea implements framework.renderer.Renderer<CodeMirrorEditor>, framework.builder.editors.Editor<string> {
        editor: CodeMirror.Editor;
        config: CodeMirror.EditorConfiguration;
        file: framework.builder.data.File;
        value: string;
        rootEditor: framework.builder.editors.VisualEditor;
        constructor(name: string, rootEditor: framework.builder.editors.VisualEditor);
        setRootEditor(editor: framework.builder.editors.VisualEditor): void;
        setConfig(config: CodeMirror.EditorConfiguration): void;
        doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement(c: CodeMirrorEditor, root: HTMLElement): void;
        /**
         *
         * @param {framework.builder.editors.CodeMirrorEditor} c
         * @param {HTMLElement} root
         */
        doRender(c?: any, root?: any): any;
        setValue$java_lang_String(s: string): void;
        setValue(s?: any): any;
        destroy(): void;
        getEditor(): CodeMirror.Editor;
        save(type?: any): any;
        save$(): void;
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        setRendered(b: boolean): framework.JSContainer;
        /**
         *
         * @param {framework.builder.data.File} f
         */
        open(f: framework.builder.data.File): void;
        /**
         *
         * @return {framework.builder.editors.Structure}
         */
        getStructure(): framework.builder.editors.Structure;
        /**
         *
         * @return {framework.builder.editors.VisualEditor}
         */
        getRootEditor(): framework.builder.editors.VisualEditor;
        /**
         *
         */
        dirty(): void;
        /**
         *
         */
        clean(): void;
    }
    namespace CodeMirrorEditor {
        class CodeMirrorEditor$0 implements framework.builder.data.RemoteDataListener<any> {
            __parent: any;
            /**
             *
             * @param {*} data
             */
            dataLoaded(data: any): void;
            constructor(__parent: any);
        }
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
declare namespace framework.designables {
    class JSDesignableTextArea extends framework.JSTextArea implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.builder.libraries {
    class DataItem extends framework.lightning.Card implements framework.lightning.table.TableCellRenderer {
        title: framework.JSContainer;
        figure: framework.lightning.SvgIcon;
        fields: framework.lightning.table.Table;
        dataStructure: framework.builder.data.DataStructure;
        delegate: framework.lightning.table.DefaultTableCellRenderer;
        labels: string[];
        labelsFields: string[];
        dataFields: Array<framework.builder.data.DataField>;
        constructor(name?: any, structure?: any, labels?: any, fields?: any);
        addOnFieldSeletedListener(l: framework.builder.libraries.FileSelectedListener): void;
        setDataStructure(structure: framework.builder.data.DataStructure): void;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table: framework.lightning.table.Table, value: any, row: number, column: number): framework.Renderable;
    }
    namespace DataItem {
        class DataItem$0 implements framework.EventListener {
            private l;
            private item;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, l: any, item: any);
        }
        class DataItem$1 implements framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>> {
            __parent: any;
            dataLoaded$jsweet_lang_Array(data_: Array<framework.builder.data.DataField>): void;
            /**
             *
             * @param {framework.builder.data.DataField[]} data_
             */
            dataLoaded(data_?: any): any;
            constructor(__parent: any);
        }
        namespace DataItem$1 {
            class DataItem$1$0 implements framework.lightning.table.TableModel {
                __parent: any;
                /**
                 *
                 * @param {*} aValue
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 */
                setValueAt(aValue: any, rowIndex: number, columnIndex: number): void;
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {boolean}
                 */
                isCellEditable(rowIndex: number, columnIndex: number): boolean;
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {*}
                 */
                getValueAt(rowIndex: number, columnIndex: number): any;
                /**
                 *
                 * @return {number}
                 */
                getRowCount(): number;
                constructor(__parent: any);
            }
        }
    }
}
declare namespace framework.lightning {
    class CheckBoxButton extends framework.lightning.CheckBox {
        constructor(name: string);
    }
}
declare namespace framework.builder {
    class Builder extends framework.lightning.LTContainer {
        topMenu: framework.builder.TopMenu;
        editorTabs: framework.lightning.Tabs;
        project: framework.builder.data.File;
        saveButton: framework.lightning.IconButton;
        newFileModal: framework.builder.NewFile;
        openProjectModal: framework.builder.OpenProject;
        newFileButtn: framework.lightning.IconButton;
        openProjectBtn: framework.lightning.IconButton;
        previewBtn: framework.lightning.IconButton;
        backdrop: framework.lightning.Backdrop;
        activeEditor: framework.builder.editors.Editor<any>;
        static websocket: WebSocket;
        static websocket_$LI$(): WebSocket;
        projectOpen: boolean;
        btnGroup: framework.lightning.ButtonGroup;
        welcomeScreen: framework.builder.WelcomeScreen;
        constructor(name: string);
        openNewModal(): void;
        openOpenProjectModal(): void;
        static getInstance(): Builder;
        isProjectOpen(): boolean;
        openProject(file: framework.builder.data.File): void;
        getProject(): framework.builder.data.File;
        isOpen(editorName: string): boolean;
        activateEditor(editorName: string): framework.builder.editors.Editor<any>;
        openEditor(title: string, editor: framework.builder.editors.Editor<any>): framework.builder.editors.Editor<any>;
    }
    namespace Builder {
        class Builder$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class Builder$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class Builder$2 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class Builder$3 implements framework.lightning.TabActionListener {
            __parent: any;
            /**
             *
             * @param {framework.lightning.TabItem} item
             */
            onClose(item: framework.lightning.TabItem): void;
            /**
             *
             * @param {framework.lightning.TabItem} item
             */
            onActivate(item: framework.lightning.TabItem): void;
            /**
             *
             * @param {framework.lightning.TabItem} item
             */
            onDeactivate(item: framework.lightning.TabItem): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.lightning {
    class Col extends framework.lightning.LTContainer implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        setSections(sections: string): void;
        setSpan(span: string): void;
        getSpan(): number;
        getSections(): number;
        refreshCls(): void;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
    class Grid extends framework.lightning.LTContainer {
        static PULL_PADDED_NONE: string;
        static PULL_PADDED_XXX_SMALL: string;
        static PULL_PADDED_XX_SMALL: string;
        static PULL_PADDED_X_SMALL: string;
        static PULL_PADDED_SMALL: string;
        static PULL_PADDED_MEDIUM: string;
        static PULL_PADDED_LARGE: string;
        static PULL_PADDED_X_LARGE: string;
        static PULL_PADDED_XX_LARGE: string;
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
        setAlignSpread(b: boolean): Grid;
        setAlignEnd(b: boolean): Grid;
        setVerticalAlignStart(b: boolean): Grid;
        setVerticalAlignCenter(b: boolean): Grid;
        setVerticalAlignEnd(b: boolean): Grid;
        setVerticalStretch(b: boolean): Grid;
        setNoWrap(b: boolean): Grid;
        setWrap(b: boolean): Grid;
    }
}
declare namespace framework.builder {
    class ItemSelector extends framework.lightning.Modal {
        input: framework.JSInput;
        saveButton: framework.lightning.Button;
        section: framework.lightning.Section;
        filesList: framework.builder.FilesList;
        constructor(name: string, stitle: string);
        getInput(): framework.JSInput;
        getSaveButton(): framework.lightning.Button;
        getSection(): framework.lightning.Section;
        getFilesList(): framework.builder.FilesList;
    }
}
declare namespace framework.builder.properties {
    abstract class ItemSelector<T> extends framework.lightning.Modal implements framework.lightning.table.TableCellRenderer {
        dataTable: framework.lightning.table.Table;
        delegate: framework.lightning.table.DefaultTableCellRenderer;
        tableColumModel: framework.lightning.table.DefaultTableColumnModel;
        dataList: Array<T>;
        constructor(name: string);
        addOnItemSeletedListener(l: framework.builder.properties.ItemSelectedListener<T>): void;
        addColumn(column: framework.lightning.table.TableColumn): void;
        setDataList(dataList: Array<T>): void;
        abstract isActionColumn(table: framework.lightning.table.Table, value: any, row: number, column: number): boolean;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table: framework.lightning.table.Table, value: any, row: number, column: number): framework.Renderable;
    }
    namespace ItemSelector {
        class ItemSelector$0 implements framework.EventListener {
            private l;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, l: any);
        }
        class ItemSelector$1 implements framework.lightning.table.TableModel {
            private dataList;
            __parent: any;
            /**
             *
             * @param {*} aValue
             * @param {number} rowIndex
             * @param {number} columnIndex
             */
            setValueAt(aValue: any, rowIndex: number, columnIndex: number): void;
            /**
             *
             * @param {number} rowIndex
             * @param {number} columnIndex
             * @return {boolean}
             */
            isCellEditable(rowIndex: number, columnIndex: number): boolean;
            /**
             *
             * @param {number} rowIndex
             * @param {number} columnIndex
             * @return {*}
             */
            getValueAt(rowIndex: number, columnIndex: number): any;
            /**
             *
             * @return {number}
             */
            getRowCount(): number;
            constructor(__parent: any, dataList: any);
        }
    }
}
declare namespace framework.builder {
    class WelcomeScreen extends framework.lightning.Modal {
        section: framework.lightning.Section;
        options: framework.lightning.Grid;
        newItem: framework.builder.WelcomeScreenItem;
        openComputerItem: framework.builder.WelcomeScreenItem;
        openUrlItem: framework.builder.WelcomeScreenItem;
        openLibrary: framework.builder.WelcomeScreenItem;
        builder: framework.builder.Builder;
        constructor(name: string, builder: framework.builder.Builder);
    }
    namespace WelcomeScreen {
        class WelcomeScreen$0 implements framework.EventListener {
            private builder;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, builder: any);
        }
        class WelcomeScreen$1 implements framework.EventListener {
            private builder;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, builder: any);
        }
    }
}
declare namespace framework.lightning.designables {
    class JSDesignableModal extends framework.lightning.Modal implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class ListPopOver extends framework.lightning.PopOver implements framework.design.Designable {
        listBox: framework.lightning.ListBox;
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class Button extends framework.lightning.SvgIcon {
        static states: string[];
        static states_$LI$(): string[];
        static STATE_NEUTRAL: string;
        static STATE_BRAND: string;
        static STATE_DESTRUCTIVE: string;
        static STATE_SUCCESS: string;
        static STATE_RESET: string;
        constructor(name?: any);
        setLabel(label: string): Button;
        setState(state: string): Button;
        setInverse(b: boolean): Button;
        setDisabled(b: boolean): Button;
        setStateful(b: boolean): Button;
    }
}
declare namespace framework.lightning {
    class ImageIcon extends framework.lightning.SvgIcon {
        img: framework.JSContainer;
        constructor(name: string, url: string);
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
        static __static_initialized: boolean;
        static __static_initialize(): void;
        delegate: framework.designables.DesignableDelegate;
        static textTags: Object;
        static textTags_$LI$(): Object;
        static __static_initializer_0(): void;
        constructor(name: string, tag: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.builder.editors {
    class FileTreeItem extends framework.TreeItem implements framework.EventListener {
        builder: framework.builder.Builder;
        type: string;
        structure: framework.builder.editors.Structure;
        f: framework.builder.data.File;
        constructor(f: framework.builder.data.File, type: string, builder: framework.builder.Builder, structure: framework.builder.editors.Structure);
        click(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
    namespace FileTreeItem {
        class FileTreeItem$0 implements framework.builder.data.RemoteDataListener<any> {
            private stype;
            __parent: any;
            /**
             *
             * @param {framework.builder.data.DataField[]} data_
             */
            dataLoaded(data_?: any): any;
            dataLoaded$java_lang_Object(data: any): void;
            constructor(__parent: any, stype: any);
        }
    }
}
declare namespace framework.builder.editors {
    class StructureTreeItem extends framework.TreeItem implements framework.EventListener {
        designable: framework.design.Designable;
        selector: framework.builder.Selector;
        structure: framework.builder.editors.Structure;
        parent: framework.design.Designable;
        dropdown: framework.lightning.DropDown;
        lsnClick: framework.EventListener;
        lsnDblclick: framework.EventListener;
        lsnDelete: framework.EventListener;
        paste(): void;
        pasteBefore(): void;
        pasteAfter(): void;
        Move(clip: framework.design.Designable, before: boolean): void;
        constructor(name: string, designable: framework.design.Designable, structure: framework.builder.editors.Structure, parent: framework.design.Designable);
        getDesignable(): framework.design.Designable;
        getParentDesignable(): framework.design.Designable;
        /**
         *
         * @param {boolean} b
         */
        select(b: boolean): void;
        saveAsComponent(): void;
        dblclick(source: framework.JSContainer, evt: Event): void;
        click(source: framework.JSContainer, evt: Event): void;
    }
    namespace StructureTreeItem {
        class StructureTreeItem$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$2 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$3 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$4 implements framework.EventListener {
            private structure;
            private designable;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, structure: any, designable: any);
        }
        class StructureTreeItem$5 implements framework.EventListener {
            private structure;
            private designable;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, structure: any, designable: any);
        }
        class StructureTreeItem$6 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$7 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$8 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class StructureTreeItem$9 implements framework.EventListener {
            private structure;
            private paste;
            private pasteAfter;
            private pasteBefore;
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any, structure: any, paste: any, pasteAfter: any, pasteBefore: any);
        }
    }
}
declare namespace framework.lightning {
    class LightningApplication extends framework.designables.JSDesignableBlockComponent {
        scope: Object;
        constructor(name: string, tag: string);
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        postRender(c?: any, root?: any): any;
        postRender$jsweet_dom_HTMLElement(root: HTMLElement): void;
        exposeAsVariable(variableName: string, item: framework.design.Designable): void;
    }
}
declare namespace framework.rtc {
    class LocalVideoContainer extends framework.JSHTMLFragment implements framework.interactions.Draggable {
        video: framework.JSContainer;
        volume: framework.JSContainer;
        jsTitle: framework.JSContainer;
        constructor(name: string);
        setVolume(volume: number): void;
        setTitle(title: string): void;
        getVideo(): framework.JSContainer;
        getVolume(): framework.JSContainer;
        /**
         *
         * @return {*}
         */
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
}
declare namespace framework.rtc {
    class VideoContainer extends framework.JSHTMLFragment implements framework.interactions.Draggable {
        video: HTMLVideoElement;
        volume: framework.JSContainer;
        jsTitle: framework.JSContainer;
        minimize: framework.lightning.IconButton;
        expand: framework.lightning.IconButton;
        __close: framework.lightning.IconButton;
        constructor(name: string);
        close(): void;
        open(): void;
        setTitle(title: string): void;
        setVolume(volume: number): void;
        setVideo(video: HTMLVideoElement): void;
        getVolume(): framework.JSContainer;
        /**
         *
         * @return {*}
         */
        getDraggableOptions(): JQueryUI.DraggableOptions;
    }
    namespace VideoContainer {
        class VideoContainer$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class VideoContainer$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class VideoContainer$2 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.properties {
    class SingleOptionAttributeEditor extends framework.builder.properties.AbstractCheckBoxPropertyEditor {
        constructor();
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
    abstract class InputWithSelectorEditor<T> extends framework.builder.properties.AbstractInputPropertyEditor {
        icon: framework.lightning.IconButton;
        modal: framework.builder.properties.ItemSelector<T>;
        selectedItem: T;
        constructor(name: string, modal: framework.builder.properties.ItemSelector<T>);
        /**
         *
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        initEditor(designable: framework.design.Designable, parameter: framework.design.Parameter): void;
    }
    namespace InputWithSelectorEditor {
        class InputWithSelectorEditor$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class InputWithSelectorEditor$1 implements framework.builder.properties.ItemSelectedListener<any> {
            __parent: any;
            /**
             *
             * @param {*} item
             */
            onItemSelected(item: any): void;
            constructor(__parent: any);
        }
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
    class AttributeWithOptionsEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
        constructor();
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
    class TagEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
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
declare namespace framework.builder.editors {
    class CSSEditor extends framework.builder.editors.CodeMirrorEditor {
        editor: CodeMirror.Editor;
        constructor(name: string, editor: framework.builder.editors.VisualEditor);
    }
}
declare namespace framework.builder.editors {
    class HTMLEditor extends framework.builder.editors.CodeMirrorEditor {
        constructor(name: string, editor: framework.builder.editors.VisualEditor);
    }
}
declare namespace framework.builder.editors {
    class JavascriptEditor extends framework.builder.editors.CodeMirrorEditor {
        constructor(name: string, editor: framework.builder.editors.VisualEditor);
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
declare namespace framework.lightning {
    class FormElement extends framework.lightning.Col {
        label: framework.JSContainer;
        control: framework.JSContainer;
        constructor(name: string, tag: string);
        setLabel(label: string): FormElement;
        setInput(input: framework.InputField<any>): FormElement;
        getInput(): framework.InputField<any>;
        getControl(): framework.JSContainer;
    }
}
declare namespace framework.designables {
    abstract class JSDesignableDataProvider extends framework.lightning.DescriptionList implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        abstract execute(): any;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        abstract getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.builder {
    class ComponentsLibrary extends framework.lightning.Grid {
        constructor(name: string);
        addComponents(...components: framework.builder.Component[]): ComponentsLibrary;
        clearComponent(): void;
    }
}
declare namespace framework.builder.properties {
    abstract class KeyValueEditor extends framework.lightning.Grid implements framework.builder.properties.ExtPropertiesEditor, framework.EventListener {
        indexCol: framework.lightning.Col;
        keyCol: framework.lightning.Col;
        valueCol: framework.lightning.Col;
        data: Object;
        designable: framework.design.Designable;
        tabLabel: string;
        constructor(name: string);
        setKeyLabel(label: string): void;
        setValueLabel(label: string): void;
        addEmptyRow(): void;
        save(index: number): void;
        abstract applyDataOnDesignable(designable: framework.design.Designable, data: Object): any;
        clearGrid(): void;
        index: number;
        setValue(o: Object): void;
        iterate(f: (p1: framework.JSContainer[]) => void): void;
        /**
         *
         * @param {*} designable
         */
        setComponent(designable: framework.design.Designable): void;
        abstract getDataFromDesignable(designable: framework.design.Designable): Object;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        setTabLabel(s: string): void;
        /**
         *
         * @param {*} me
         * @return {string}
         */
        getLabel(me: framework.design.ExtDesignable): string;
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
declare namespace framework.lightning.designables {
    class JSDesignableLightningGrid extends framework.lightning.Grid implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.lightning {
    class DockedComposer extends framework.lightning.Grid implements framework.interactions.Draggable {
        header: framework.lightning.Grid;
        headerTitle: framework.lightning.Media;
        headerIconContainer: framework.JSContainer;
        headerIcon: framework.lightning.SvgIcon;
        title: framework.lightning.Text;
        tools: framework.JSContainer;
        minimize: framework.lightning.IconButton;
        expand: framework.lightning.IconButton;
        close: framework.lightning.IconButton;
        body: framework.JSContainer;
        footer: framework.JSContainer;
        closed: boolean;
        constructor(name: string);
        toggle(): DockedComposer;
        setOpen(b: boolean): DockedComposer;
        setClosed(b: boolean): DockedComposer;
        getHeaderIcon(): framework.lightning.SvgIcon;
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
    namespace DockedComposer {
        class DockedComposer$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
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
    class Panel extends framework.lightning.Grid implements framework.design.Designable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        addSection(section: framework.lightning.PanelSection): Panel;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table?: any, value?: any, row?: any, column?: any): any;
        getComponent$(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.builder {
    class NewFile extends framework.builder.ItemSelector {
        lightning: framework.builder.UIFile;
        mobile: framework.builder.UIFile;
        html: framework.builder.UIFile;
        css: framework.builder.UIFile;
        javascript: framework.builder.UIFile;
        data: framework.builder.UIFile;
        fileType: string;
        builder: framework.builder.Builder;
        structure: framework.builder.editors.Structure;
        constructor(name: string, builder_: framework.builder.Builder);
        click(): void;
        init(structure: framework.builder.editors.Structure): void;
        createFile(name: string, type: string): void;
        createLightning(name: string): void;
    }
    namespace NewFile {
        class NewFile$0 implements framework.builder.ItemSelectedListener {
            __parent: any;
            /**
             *
             * @param {framework.builder.UIFile} file
             * @param {framework.builder.ItemSelector} selector
             */
            itemSelected(file: framework.builder.UIFile, selector: framework.builder.ItemSelector): void;
            constructor(__parent: any);
        }
        class NewFile$1 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class NewFile$2 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class NewFile$3 implements framework.builder.data.RemoteDataListener<any> {
            private type;
            __parent: any;
            /**
             *
             * @param {framework.builder.data.DataField[]} data_
             */
            dataLoaded(data_?: any): any;
            dataLoaded$java_lang_Object(data: any): void;
            constructor(__parent: any, type: any);
        }
        class NewFile$4 implements framework.builder.data.RemoteDataListener<any> {
            __parent: any;
            /**
             *
             * @param {framework.builder.data.DataField[]} data_
             */
            dataLoaded(data_?: any): any;
            dataLoaded$java_lang_Object(data: any): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder {
    class OpenProject extends framework.builder.ItemSelector implements framework.EventListener, framework.builder.data.RemoteDataListener<any> {
        builder_: framework.builder.Builder;
        selectedItem: framework.builder.UIFile;
        constructor(name: string, builder: framework.builder.Builder);
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
        /**
         *
         * @param {framework.builder.data.DataField[]} data_
         */
        dataLoaded(data_?: any): any;
        dataLoaded$java_lang_Object(data: any): void;
        init(): void;
    }
}
declare namespace framework.builder.data {
    class FieldSelector extends framework.builder.properties.ItemSelector<framework.builder.data.DataField> {
        labels: string[];
        fields: string[];
        constructor(name: string, structure: framework.builder.data.DataStructure);
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {boolean}
         */
        isActionColumn(table: framework.lightning.table.Table, value: any, row: number, column: number): boolean;
    }
    namespace FieldSelector {
        class FieldSelector$0 implements framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>> {
            __parent: any;
            dataLoaded$jsweet_lang_Array(data: Array<framework.builder.data.DataField>): void;
            /**
             *
             * @param {framework.builder.data.DataField[]} data
             */
            dataLoaded(data?: any): any;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.designables {
    class JSDesignableButton extends framework.lightning.Button implements framework.design.Designable {
        static stateLabels: string[];
        static stateLabels_$LI$(): string[];
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        getParameters(): Array<framework.design.Parameter>;
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
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
    }
}
declare namespace framework.designables {
    class JSDesignableLink extends framework.designables.JSDesignableTextComponent {
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework.designables {
    class JSDesignableBuilderComponent extends framework.lightning.LightningApplication {
        content: framework.design.Designable;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework.lightning.designables {
    class JSDesignableFormElement extends framework.lightning.FormElement implements framework.design.Designable, framework.design.Preparable {
        input: framework.InputField<any>;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        getValue(): any;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
        setDisabled(b: boolean): void;
        /**
         *
         */
        prepare(): void;
    }
}
declare namespace framework.designables {
    class JSDesignableHTTP extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        constructor();
        execute(): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework.designables {
    class JSDesignableService extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        constructor();
        execute(): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework.lightning.designables {
    class JSDesignableSOQL extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        constructor(name: string);
        /**
         *
         */
        execute(): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
    }
}
declare namespace framework.builder.libraries {
    class BasicComponentLibrary extends framework.builder.ComponentsLibrary {
        constructor();
    }
}
declare namespace framework.builder.libraries {
    class CustomComponentsLibrary extends framework.builder.ComponentsLibrary {
        constructor(name: string);
    }
}
declare namespace framework.builder.libraries {
    class LightningComponentLibrary extends framework.builder.ComponentsLibrary {
        constructor();
    }
}
declare namespace framework.builder.libraries {
    class LightningContainerComponentLibrary extends framework.builder.ComponentsLibrary {
        constructor();
    }
}
declare namespace framework.designables {
    class JSDesignableSelect extends framework.JSSelect implements framework.design.ExtDesignable {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
        /**
         *
         * @return {Array}
         */
        getExtEditors(): framework.builder.properties.ExtPropertiesEditor[];
    }
    namespace JSDesignableSelect {
        class JSDesignableSelect$0 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
        class JSDesignableSelect$1 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
    }
}
declare namespace framework.lightning {
    class CheckBoxGroup extends framework.JSContainer implements framework.design.ExtDesignable, framework.InputField<Array<string>> {
        delegate: framework.designables.DesignableDelegate;
        constructor(name: string);
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        /**
         *
         * @return {framework.builder.marshalling.Component}
         */
        getComponent(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        setData(obj: any): void;
        setOptions(options: Array<framework.design.Option>): void;
        addOption(option: framework.design.Option): void;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
        /**
         *
         * @return {string[]}
         */
        getValue(): Array<string>;
        setValue$jsweet_lang_Array(val: Array<string>): void;
        /**
         *
         * @param {string[]} val
         */
        setValue(val?: any): any;
        clearAll(): void;
        /**
         *
         * @return {Array}
         */
        getExtEditors(): framework.builder.properties.ExtPropertiesEditor[];
    }
    namespace CheckBoxGroup {
        class CheckBoxGroup$0 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
        class CheckBoxGroup$1 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
    }
}
declare namespace framework.lightning.designables {
    class JSDesignableTable extends framework.lightning.table.Table implements framework.design.ExtDesignable, framework.lightning.table.TableColumnModel, framework.lightning.table.TableModel, framework.lightning.table.TableCellRenderer {
        delegate: framework.designables.DesignableDelegate;
        fields: Array<framework.lightning.table.TableColumn>;
        tableData: Array<Object>;
        constructor(name: string);
        /**
         *
         */
        refreshData(): void;
        getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table: framework.lightning.table.Table, value: any, row: number, column: number): framework.Renderable;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table?: any, value?: any, row?: any, column?: any): any;
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {*[]}
         */
        getDesignables(): Array<framework.design.Designable>;
        getComponent$(): framework.builder.marshalling.Component;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
        /**
         *
         * @param {framework.lightning.table.TableColumn} aColumn
         */
        addColumn(aColumn: framework.lightning.table.TableColumn): void;
        setTableData(data: Array<Object>): void;
        /**
         *
         * @return {number}
         */
        getColumnCount(): number;
        /**
         *
         * @param {*} columnIdentifier
         * @return {number}
         */
        getColumnIndex(columnIdentifier: any): number;
        /**
         *
         * @param {number} columnIndex
         * @return {framework.lightning.table.TableColumn}
         */
        getColumn(columnIndex: number): framework.lightning.table.TableColumn;
        /**
         *
         * @return {Array}
         */
        getExtEditors(): framework.builder.properties.ExtPropertiesEditor[];
        /**
         *
         * @return {number}
         */
        getRowCount(): number;
        /**
         *
         * @param {number} rowIndex
         * @param {number} columnIndex
         * @return {boolean}
         */
        isCellEditable(rowIndex: number, columnIndex: number): boolean;
        /**
         *
         * @param {number} rowIndex
         * @param {number} columnIndex
         * @return {*}
         */
        getValueAt(rowIndex: number, columnIndex: number): any;
        /**
         *
         * @param {*} aValue
         * @param {number} rowIndex
         * @param {number} columnIndex
         */
        setValueAt(aValue: any, rowIndex: number, columnIndex: number): void;
    }
    namespace JSDesignableTable {
        class JSDesignableTable$0 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
    }
}
declare namespace framework.lightning {
    class FormLayout extends framework.lightning.designables.JSDesignableLightningGrid {
        labels: string[];
        static SPACING_XXX_SMALL: string;
        static SPACING_XXX_SMALL_$LI$(): string;
        static SPACING_XX_SMALL: string;
        static SPACING_XX_SMALL_$LI$(): string;
        static SPACING_X_SMALL: string;
        static SPACING_X_SMALL_$LI$(): string;
        static SPACING_SMALL: string;
        static SPACING_SMALL_$LI$(): string;
        static SPACING_MEDIUM: string;
        static SPACING_MEDIUM_$LI$(): string;
        static SPACING_LARGE: string;
        static SPACING_LARGE_$LI$(): string;
        static SPACING_X_LARGE: string;
        static SPACING_X_LARGE_$LI$(): string;
        static SPACING_XX_LARGE: string;
        static SPACING_XX_LARGE_$LI$(): string;
        constructor(name: string);
        setSpacing(spacing: string): FormLayout;
        setStacked(b: boolean): FormLayout;
        setInline(b: boolean): FormLayout;
        setCompound(b: boolean): FormLayout;
        setHorizontal(b: boolean): FormLayout;
        addFormElement(element: framework.lightning.FormElement): FormLayout;
        clear(): FormLayout;
        getElements(): Array<framework.lightning.FormElement>;
    }
}
declare namespace framework.builder.editors {
    class StructureDockedComposer extends framework.lightning.DockedComposer {
        structure: framework.builder.editors.Structure;
        constructor(name: string, root: framework.design.Designable, f: framework.builder.data.File, selector: framework.builder.Selector);
        getStructure(): framework.builder.editors.Structure;
    }
    namespace StructureDockedComposer {
        class StructureDockedComposer$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.builder.libraries {
    class LibrariesDockedComposer extends framework.lightning.DockedComposer {
        basicComponentLib: framework.builder.libraries.BasicComponentLibrary;
        lightningComponentLib: framework.builder.libraries.LightningComponentLibrary;
        containerComponentLib: framework.builder.libraries.LightningContainerComponentLibrary;
        customComponents: framework.builder.libraries.CustomComponentsLibrary;
        componentsTabs: framework.builder.ComponentsTabs;
        constructor(name: string);
        refreshWithProject(des: framework.design.Designable): void;
    }
}
declare namespace framework.builder.properties {
    class PropertiesDockedComposer extends framework.lightning.DockedComposer {
        mainEditor: framework.builder.properties.ProtertiesEditorTabs;
        basicEditorBody: framework.builder.properties.PropertiesEditor;
        constructor(name: string);
        selectComponent(designable: framework.design.Designable): void;
    }
    namespace PropertiesDockedComposer {
        class PropertiesDockedComposer$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
        class PropertiesDockedComposer$1 extends framework.builder.properties.KeyValueEditor {
            __parent: any;
            /**
             *
             * @param {*} designable
             * @param {Object} data
             */
            applyDataOnDesignable(designable: framework.design.Designable, data: Object): void;
            /**
             *
             * @param {*} designable
             * @return {Object}
             */
            getDataFromDesignable(designable: framework.design.Designable): Object;
            constructor(__parent: any, __arg0: any);
        }
    }
}
declare namespace framework.builder {
    class TopMenu extends framework.lightning.GlobalHeader {
        constructor(name: string);
    }
}
declare namespace framework.builder.data {
    abstract class CrudTable extends framework.lightning.Panel implements framework.lightning.table.TableModel, framework.lightning.table.TableCellRenderer, framework.EventListener {
        configs: Object;
        list: framework.lightning.table.Table;
        buttons: framework.lightning.PanelSection;
        listSection: framework.lightning.PanelSection;
        addNew: framework.lightning.Button;
        constructor(name: string);
        setFields(fields: Array<Object>): void;
        setData$jsweet_lang_Array(data: Array<Object>): void;
        setData(data?: any): any;
        getFields(): Array<Object>;
        getData(): Array<Object>;
        getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table: framework.lightning.table.Table, value: any, row: number, column: number): framework.Renderable;
        /**
         *
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table?: any, value?: any, row?: any, column?: any): any;
        /**
         *
         * @return {number}
         */
        getRowCount(): number;
        /**
         *
         * @param {number} rowIndex
         * @param {number} columnIndex
         * @return {boolean}
         */
        isCellEditable(rowIndex: number, columnIndex: number): boolean;
        /**
         *
         * @param {number} rowIndex
         * @param {number} columnIndex
         * @return {*}
         */
        getValueAt(rowIndex: number, columnIndex: number): any;
        /**
         *
         * @param {*} aValue
         * @param {number} rowIndex
         * @param {number} columnIndex
         */
        setValueAt(aValue: any, rowIndex: number, columnIndex: number): void;
        abstract showForm(source: framework.JSContainer, evt: Event): any;
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        performAction(source: framework.JSContainer, evt: Event): void;
    }
}
declare namespace framework.builder.data {
    class MultiForm extends framework.lightning.Panel implements framework.InputField<Object> {
        rootElement: framework.lightning.FormElement;
        section0: framework.lightning.PanelSection;
        map: framework.util.Map<string, framework.lightning.PanelSection>;
        select: framework.JSSelect;
        constructor(name: string);
        setConfigs(fields: Array<Object>): void;
        /**
         *
         * @return {Object}
         */
        getValue(): Object;
        setValue$jsweet_lang_Object(val: Object): void;
        /**
         *
         * @param {Object} val
         */
        setValue(val?: any): any;
    }
    namespace MultiForm {
        class MultiForm$0 implements framework.EventListener {
            __parent: any;
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            performAction(source: framework.JSContainer, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.lightning {
    class PopOverFooterItem extends framework.designables.JSDesignableButton {
        constructor(name?: any);
    }
}
declare namespace framework.builder.data {
    class DynaForm extends framework.lightning.FormLayout implements framework.InputField<Object> {
        constructor(name: string);
        setFields(fields: Array<Object>): void;
        /**
         *
         * @return {Object}
         */
        getValue(): Object;
        setValue$jsweet_lang_Object(val: Object): void;
        /**
         *
         * @param {Object} val
         */
        setValue(val?: any): any;
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
declare namespace framework.lightning.designables {
    class JSDesignableFormLayout extends framework.lightning.FormLayout {
        constructor();
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        applyParam(key: string, value: string): void;
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        getParameters(): Array<framework.design.Parameter>;
        /**
         *
         * @param {*} designable
         */
        addDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         */
        removeDesignable(designable: framework.design.Designable): void;
        /**
         *
         * @param {*} designable
         * @param {number} steps
         */
        moveDesignable(designable: framework.design.Designable, steps: number): void;
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
