/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace framework.builder {
    export class BuilderEventListener implements framework.EventListener {
        /*private*/ jsSource : string;

        public constructor(jsSource : string) {
            this.jsSource = null;
            this.jsSource = jsSource;
        }

        public getSource() : string {
            return this.jsSource;
        }

        public setSource(s : string) {
            this.jsSource = s;
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
namespace framework.builder.data {
    export class BasicDataEnvironment implements framework.builder.data.DataEnvironment {
        public static structures : Array<framework.builder.data.DataStructure>; public static structures_$LI$() : Array<framework.builder.data.DataStructure> { if(BasicDataEnvironment.structures == null) BasicDataEnvironment.structures = <any>(new Array<any>()); return BasicDataEnvironment.structures; };

        /**
         * 
         * @param {*} listener
         */
        public getDataStructures(listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>) {
            if(BasicDataEnvironment.structures_$LI$().length === 0) {
                framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).getDataStructures(new BasicDataEnvironment.BasicDataEnvironment$0(this, listener));
            } else {
                listener.dataLoaded(BasicDataEnvironment.structures_$LI$());
            }
        }

        /**
         * 
         * @param {framework.builder.data.DataStructure} datastructure
         */
        public saveStructure(datastructure : framework.builder.data.DataStructure) {
        }

        /**
         * 
         * @param {string} name
         */
        public deleteStructure(name : string) {
            let tmp : Array<framework.builder.data.DataStructure> = <any>(new Array<any>());
            for(let index1189=0; index1189 < BasicDataEnvironment.structures_$LI$().length; index1189++) {
                let structure = BasicDataEnvironment.structures_$LI$()[index1189];
                {
                    if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(structure.getName(),name))) {
                        tmp.push(structure);
                    }
                }
            }
            BasicDataEnvironment.structures = tmp;
        }

        constructor() {
        }
    }
    BasicDataEnvironment["__class"] = "framework.builder.data.BasicDataEnvironment";
    BasicDataEnvironment["__interfaces"] = ["framework.builder.data.DataEnvironment"];



    export namespace BasicDataEnvironment {

        export class BasicDataEnvironment$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                let obj : Object = <Object>data;
                let sobjects : Array<Object> = <Array<Object>>obj["sobjects"];
                for(let index1190=0; index1190 < sobjects.length; index1190++) {
                    let o = sobjects[index1190];
                    {
                        let structure : framework.builder.data.DataStructure = new framework.builder.data.DataStructure(o);
                        framework.builder.data.BasicDataEnvironment.structures_$LI$().push(structure);
                    }
                }
                this.listener.dataLoaded(framework.builder.data.BasicDataEnvironment.structures_$LI$());
            }

            constructor(__parent: any, private listener: any) {
                this.__parent = __parent;
            }
        }
        BasicDataEnvironment$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.data {
    export interface DataEnvironment {
        getDataStructures(listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>);

        saveStructure(datastructure : framework.builder.data.DataStructure);

        deleteStructure(name : string);
    }
}
namespace framework.builder.data {
    export class DataField {
        /*private*/ object : Object;

        public constructor(o? : any) {
            if(((o != null && o instanceof <any>Object) || o === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.object = null;
                this.object = null;
                (() => {
                    this.object = o;
                })();
            } else if(o === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                this.object = null;
                this.object = null;
                (() => {
                    this.object = <Object>new Object();
                })();
            } else throw new Error('invalid overload');
        }

        public getNative() : any {
            return this.object;
        }

        public getName() : string {
            return <string>this.object["name"];
        }

        public getType() : string {
            return <string>this.object["type"];
        }

        public getLabel() : string {
            return <string>this.object["label"];
        }

        public getFormat() : string {
            return <string>this.object["format"];
        }

        public getPrimaryKey() : boolean {
            return <boolean>this.object["primaryKey"];
        }

        public getAutoNumber() : boolean {
            return <boolean>this.object["autoNumber"];
        }

        public getByteLength() : number {
            return <number>this.object["byteLength"];
        }

        public getCalculated() : boolean {
            return <boolean>this.object["calculated"];
        }

        public getCreateable() : boolean {
            return <boolean>this.object["createable"];
        }

        public getDefaultedOnCreate() : boolean {
            return <boolean>this.object["defaultedOnCreate"];
        }

        public getDependentPicklist() : boolean {
            return <boolean>this.object["dependentPicklist"];
        }

        public getFilterable() : boolean {
            return <boolean>this.object["filterable"];
        }

        public getHtmlFormatted() : boolean {
            return <boolean>this.object["htmlFormatted"];
        }

        public getNillable() : boolean {
            return <boolean>this.object["nillable"];
        }

        public getRestrictedPicklist() : boolean {
            return <boolean>this.object["restrictedPicklist"];
        }

        public getUnique() : boolean {
            return <boolean>this.object["unique"];
        }

        public getUpdateable() : boolean {
            return <boolean>this.object["updateable"];
        }

        public getCalculatedFormula() : string {
            return <string>this.object["calculatedFormula"];
        }

        public getDefaultValue() : string {
            return <string>this.object["defaultValue"];
        }

        public getDefaultValueFormula() : string {
            return <string>this.object["defaultValueFormula"];
        }

        public getDigits() : number {
            return <number>this.object["digits"];
        }

        public getLength() : number {
            return <number>this.object["length"];
        }

        public getPicklistValues() : string[] {
            return <string[]>this.object["picklistValues"];
        }

        public getPrecision() : number {
            return <number>this.object["precision"];
        }

        public getRelationshipName() : string {
            return <string>this.object["relationshipName"];
        }

        public getScale() : number {
            return <number>this.object["scale"];
        }

        public getSortable() : boolean {
            return <boolean>this.object["sortable"];
        }

        public getValue(field : string) : any {
            let o : any = this.object[field];
            return o;
        }
    }
    DataField["__class"] = "framework.builder.data.DataField";

}
namespace framework.builder.data {
    export class DataType {
        public static TEXT : string = "TEXT";

        public static RICH_TEXT : string = "RICH_TEXT";

        public static DOUBLE : string = "DOUBLE";

        public static INTEGER : string = "INTEGER";

        public static DATE : string = "DATE";

        public static DATE_TIME : string = "DATE_TIME";

        public static BOOLEAN : string = "BOOLEAN";

        public static REFERENCE : string = "REFERENCE";

        public static FORMULA : string = "FORMULA";

        public static Types : string[]; public static Types_$LI$() : string[] { if(DataType.Types == null) DataType.Types = [DataType.TEXT, DataType.RICH_TEXT, DataType.DOUBLE, DataType.INTEGER, DataType.DATE, DataType.DATE_TIME, DataType.BOOLEAN, DataType.REFERENCE, DataType.FORMULA]; return DataType.Types; };
    }
    DataType["__class"] = "framework.builder.data.DataType";

}
namespace framework.builder.data {
    export class File {
        file : Object;

        public constructor(file : Object) {
            this.file = null;
            this.file = file;
        }

        public getNative() : Object {
            return this.file;
        }

        public getStylesheets() : java.util.List<File> {
            return this.getChild("stylesheets").getChildren();
        }

        public getScripts() : java.util.List<File> {
            return this.getChild("scripts").getChildren();
        }

        public getTemplates() : java.util.List<File> {
            return this.getChild("templates").getChildren();
        }

        public getDataStructures(listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>) {
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.DataEnvironment").getDataStructures(listener);
        }

        public getComponents() : java.util.List<File> {
            return this.getChild("components").getChildren();
        }

        public getFile(name : string, type : string) : File {
            return this.getChild(type).getChild(name);
        }

        public deleteFile(name : string, type : string, l : framework.builder.data.RemoteDataListener<any>) {
            let f : File = this.getFile(name, type);
            framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).deleteFile(f.getPath(), new File.File$0(this, l));
        }

        public getChild(name : string) : File {
            for(let index1191=this.getChildren().iterator();index1191.hasNext();) {
                let f = index1191.next();
                {
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(f.getName(), name)) {
                        return f;
                    }
                }
            }
            return null;
        }

        public createCss(name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "stylesheets", listener);
        }

        public createTemplate(name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "templates", listener);
        }

        public createScript(name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "scripts", listener);
        }

        public createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name : string, type : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, type, listener);
        }

        public createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let path : string = this.getPath() + "/" + dir;
            framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).createFile(name, title, path, new File.File$1(this, dir, listener));
        }

        public createFile(name? : any, title? : any, dir? : any, listener? : any) : any {
            if(((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof dir === 'string') || dir === null) && ((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || listener === null)) {
                return <any>this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, title, dir, listener);
            } else if(((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((dir != null && (dir["__interfaces"] != null && dir["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || dir.constructor != null && dir.constructor["__interfaces"] != null && dir.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || dir === null) && listener === undefined) {
                return <any>this.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, title, dir);
            } else throw new Error('invalid overload');
        }

        public getName() : string {
            return <string>this.file["name"];
        }

        public getPath() : string {
            return <string>this.file["path"];
        }

        public getData() : string {
            return <string>this.file["data"];
        }

        public setData(data : string) {
            this.file["data"] = data;
        }

        public getDateCreated() : number {
            return <number>this.file["dateCreated"];
        }

        public getDateModified() : number {
            return <number>this.file["dateModified"];
        }

        public getAuthor() : string {
            return <string>this.file["author"];
        }

        public getType() : string {
            return <string>this.file["type"];
        }

        public getProjectType() : string {
            return <string>this.file["projectType"];
        }

        public getTitle() : string {
            return <string>this.file["title"];
        }

        public removeFile(f : File) {
            let children : Array<Object> = <any>(new Array<Object>());
            {
                let array1193 = <Array<Object>>this.file["children"];
                for(let index1192=0; index1192 < array1193.length; index1192++) {
                    let o = array1193[index1192];
                    {
                        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(o["name"],f.getName()))) {
                            children.push(o);
                        }
                    }
                }
            }
            this.file["children"] = children;
        }

        public getChildren() : java.util.List<File> {
            let result : java.util.List<File> = <any>(new java.util.LinkedList<any>());
            {
                let array1195 = <Array<Object>>this.file["children"];
                for(let index1194=0; index1194 < array1195.length; index1194++) {
                    let o = array1195[index1194];
                    {
                        result.add(new File(o));
                    }
                }
            }
            return result;
        }
    }
    File["__class"] = "framework.builder.data.File";


    export namespace File {

        export class File$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                this.l.dataLoaded(data);
            }

            constructor(__parent: any, private l: any) {
                this.__parent = __parent;
            }
        }
        File$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export class File$1 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                (<Array<Object>>this.__parent.getChild(this.dir).getNative()["children"]).push(<Object>data);
                this.listener.dataLoaded(data);
            }

            constructor(__parent: any, private dir: any, private listener: any) {
                this.__parent = __parent;
            }
        }
        File$1["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.data {
    export class ProjectService {
        public createProject(name : string, title : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["name"] = name;
            data["title"] = title;
            $.get("/projects/create-project", data, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public getProjects(listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/projects/get-projects", (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            });
        }

        public saveFile(file : framework.builder.data.File, listener : framework.builder.data.RemoteDataListener<any>) {
            $.post("/projects/update-file", file.getNative(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public createFile(name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["name"] = name;
            data["title"] = title;
            data["dir"] = dir;
            $.post("/projects/create-file", data, (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public deleteFile(path : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["path"] = path;
            $.get("/projects/delete-file", data, (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public getDataStructures(listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/projects/structures", <any>new Object(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public getDataStructure(listener : framework.builder.data.RemoteDataListener<any>, name : string) {
            $.get("/projects/structures/" + name, <any>new Object(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }
    }
    ProjectService["__class"] = "framework.builder.data.ProjectService";

}
namespace framework.builder.data {
    export interface RemoteDataListener<T> {
        /**
         * 
         * @param {framework.builder.data.DataStructure[]} data
         */
        dataLoaded(data? : any) : any;
    }
}
namespace framework.builder.editors {
    export interface Editor<T> extends framework.Renderable {
        save(type? : any) : any;

        dirty();

        clean();

        open(file : framework.builder.data.File);

        getStructure() : framework.builder.editors.Structure;

        getRootEditor() : framework.builder.editors.VisualEditor;
    }
}
namespace framework.builder.editors {
    export class EventTypes {
        public static events : string[]; public static events_$LI$() : string[] { if(EventTypes.events == null) EventTypes.events = ["onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"]; return EventTypes.events; };
    }
    EventTypes["__class"] = "framework.builder.editors.EventTypes";

}
namespace framework.builder {
    export interface ItemSelectedListener {
        itemSelected(file : framework.builder.UIFile, selector : framework.builder.ItemSelector);
    }
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

        public abstract createInstance(designMode : boolean) : framework.design.Designable;

        configureStyles(instance : framework.design.Designable, component : framework.builder.marshalling.Component) {
            let keys : string[] = Object.keys(component.styles);
            for(let index1196=0; index1196 < keys.length; index1196++) {
                let key = keys[index1196];
                {
                    let value : string = component.styles[key].toString();
                    instance.setStyle(key, value);
                }
            }
        }

        configureParameters(instance : framework.design.Designable, component : framework.builder.marshalling.Component, designMode : boolean) {
            let keys : string[] = Object.keys(component.parameters);
            for(let index1197=0; index1197 < keys.length; index1197++) {
                let key = keys[index1197];
                {
                    if(component.parameters[key] != null) {
                        let value : string = component.parameters[key].toString();
                        instance.applyParam(key, value);
                    }
                }
            }
        }

        configureEvents(instance : framework.design.Designable, component : framework.builder.marshalling.Component) {
            for(let index1198=0; index1198 < component.events.length; index1198++) {
                let event = component.events[index1198];
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
         * @return {*}
         */
        public build(component : framework.builder.marshalling.Component, designMode : boolean) : framework.design.Designable {
            let thIns : framework.design.Designable = this.createInstance(designMode);
            thIns.setAttribute("identifier", this.impl);
            this.configureStyles(thIns, component);
            this.configureParameters(thIns, component, designMode);
            this.configureEvents(thIns, component);
            this.decorateForDesignMode(thIns, designMode);
            return thIns;
        }

        decorateForDesignMode(instance : framework.design.Designable, designMode : boolean) {
            this.decorateCallSelector(instance, designMode);
        }

        decorateCallSelector(container : framework.design.Designable, designMode : boolean) {
            if(designMode) {
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
namespace framework.builder.libraries {
    export interface FileSelectedListener {
        onItemSelected(field : framework.builder.data.DataField, source : framework.builder.libraries.DataItem);
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

        build(component : framework.builder.marshalling.Component, designMode : boolean) : framework.design.Designable;
    }
}
namespace framework.builder.marshalling {
    export class MarshallUtil {
        public static extract(designable : framework.design.Designable) : framework.builder.marshalling.Component {
            let c : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            c.impl = designable.getAttribute("identifier");
            let parameters : java.util.List<framework.design.Parameter> = designable.getParameters();
            for(let index1199=designable.getStyleNames().iterator();index1199.hasNext();) {
                let s = index1199.next();
                {
                    c.styles[s] = designable.getStyle(s);
                }
            }
            for(let index1200=parameters.iterator();index1200.hasNext();) {
                let p = index1200.next();
                {
                    c.parameters[p.name] = p.extractValue(designable);
                }
            }
            for(let index1201=designable.getListeners().keySet().iterator();index1201.hasNext();) {
                let key = index1201.next();
                {
                    for(let index1202=designable.getListeners().get(key).iterator();index1202.hasNext();) {
                        let l = index1202.next();
                        {
                            if(l != null && l instanceof <any>framework.builder.BuilderEventListener) {
                                let bel : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>l;
                                let be : framework.builder.marshalling.BuilderEvent = new framework.builder.marshalling.BuilderEvent();
                                be.source = bel.getSource();
                                be.type = key;
                                c.events.push(be);
                            }
                        }
                    }
                }
            }
            for(let index1203=designable.getDesignables().iterator();index1203.hasNext();) {
                let child = index1203.next();
                {
                    let childC : framework.builder.marshalling.Component = MarshallUtil.extract(child);
                    c.children.push(childC);
                }
            }
            return c;
        }

        public static toDesignable(component : framework.builder.marshalling.Component) : framework.design.Designable {
            let des : framework.design.Designable = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, false);
            if(component.children != null) {
                for(let index1204=0; index1204 < component.children.length; index1204++) {
                    let c = component.children[index1204];
                    {
                        let child : framework.design.Designable = MarshallUtil.toDesignable(c);
                        des.addDesignable(child);
                    }
                }
            }
            return des;
        }

        public static build(s : string) : framework.design.Designable {
            return MarshallUtil.toDesignable(MarshallUtil.toComponent$java_lang_String(s));
        }

        public static toComponent$java_lang_String(s : string) : framework.builder.marshalling.Component {
            let c : Object = <Object>JSON.parse(s);
            return MarshallUtil.toComponent$jsweet_lang_Object(c);
        }

        public static toComponent(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(s);
            } else if(((s != null && s instanceof <any>Object) || s === null)) {
                return <any>framework.builder.marshalling.MarshallUtil.toComponent$jsweet_lang_Object(s);
            } else throw new Error('invalid overload');
        }

        public static toComponent$jsweet_lang_Object(o : Object) : framework.builder.marshalling.Component {
            let cc : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            cc.impl = o["impl"].toString();
            cc.styles = <Object>o["styles"];
            cc.parameters = <Object>o["parameters"];
            let events : Array<Object> = <Array<Object>>o["events"];
            if(events != null && events.length > 0) {
                let bevents : Array<framework.builder.marshalling.BuilderEvent> = <any>(new Array<framework.builder.marshalling.BuilderEvent>());
                for(let index1205=0; index1205 < events.length; index1205++) {
                    let e = events[index1205];
                    {
                        let event : framework.builder.marshalling.BuilderEvent = new framework.builder.marshalling.BuilderEvent();
                        event.source = e["source"].toString();
                        event.type = e["type"].toString();
                        bevents.push(event);
                    }
                }
                cc.events = bevents;
            }
            let bchildren : Array<framework.builder.marshalling.Component> = <any>(new Array<framework.builder.marshalling.Component>());
            let children : Array<Object> = <Array<Object>>o["children"];
            if(children != null && children.length > 0) {
                for(let index1206=0; index1206 < children.length; index1206++) {
                    let c = children[index1206];
                    {
                        bchildren.push(MarshallUtil.toComponent$jsweet_lang_Object(c));
                    }
                }
                cc.children = bchildren;
            }
            return cc;
        }
    }
    MarshallUtil["__class"] = "framework.builder.marshalling.MarshallUtil";

}
namespace framework.builder.properties {
    export class FieldEditor {    }
    FieldEditor["__class"] = "framework.builder.properties.FieldEditor";

}
namespace framework.builder.properties {
    export interface ItemSelectedListener<T> {
        onItemSelected(item : T);
    }
}
namespace framework.builder.properties {
    export interface PropertiesEditor extends framework.Renderable {
        setComponent(designable : framework.design.Designable);
    }
}
namespace framework.builder.properties {
    export interface PropertyEditor extends framework.Renderable {
        setProperty(designable : framework.design.Designable, parameter : framework.design.Parameter);
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
            let editor : framework.builder.editors.VisualEditor = <any>(source.getAncestorWithClass<any>("visual-editor"));
            if(editor != null && editor.getWillAddComponent() != null) {
                let willAdd : framework.builder.Component = editor.getWillAddComponent();
                editor.addNewComponent$framework_builder_Component$framework_design_Designable(willAdd, <framework.design.Designable><any>source);
            } else {
                evt.stopPropagation();
                this.selector.select(<framework.design.Designable><any>source);
            }
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
            for(let index1207=this.beans.keySet().iterator();index1207.hasNext();) {
                let key = index1207.next();
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
        applyParam(key : string, value : string);

        getDesignables() : java.util.List<Designable>;

        getComponent() : framework.builder.marshalling.Component;

        getParameters() : java.util.List<framework.design.Parameter>;

        addDesignable(designable : Designable);

        removeDesignable(designable : Designable);

        moveDesignable(designable : Designable, steps : number);
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

        public abstract extractValue(designable : framework.design.Designable) : string;

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
namespace framework.designables {
    export class DesignableDelegate {
        /*private*/ ui : framework.design.Designable;

        /*private*/ component : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();

        public constructor(ui : framework.design.Designable) {
            this.ui = null;
            this.ui = ui;
        }

        public getDesignable() : framework.design.Designable {
            return this.ui;
        }

        public applyParameter(key : string, value : string, designMode : boolean) {
            this.component.parameters[key] = value;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "text") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "html")) {
                this.ui.setHtml(value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "name")) {
                this.ui.setName(value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "tag")) {
                this.ui.setTag(value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "href")) {
                this.ui.setAttribute("href", value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "target")) {
                this.ui.setAttribute("target", value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "src")) {
                this.ui.setAttribute("src", value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "style")) {
                this.ui.setAttribute("style", value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "class")) {
                this.ui.setAttribute("class", value);
            }
        }

        /*private*/ containsName(name : string) : boolean {
            for(let index1208=this.ui.getChildren().iterator();index1208.hasNext();) {
                let c = index1208.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getName(),name))) {
                        return true;
                    }
                }
            }
            return false;
        }

        public addDesignable(designable : framework.design.Designable) {
            let name : string = designable.getName();
            let count : number = 0;
            while((this.containsName(name))) {
                count++;
                name = designable.getName() + "_" + count;
            };
            designable.applyParam("name", name);
            this.ui['addChild$framework_JSContainer'](<framework.JSContainer><any>designable);
        }

        public getComponent() : framework.builder.marshalling.Component {
            return this.component;
        }

        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = <any>(new java.util.LinkedList<any>());
            params.add(new framework.design.NameParameter("Name", "Basic"));
            params.add(new framework.design.AttributeParameter("class", "Style class", "Basic"));
            params.add(new framework.design.AttributeParameter("style", "Style", "Basic"));
            return params;
        }

        public removeDesignable(designable : framework.design.Designable) {
            this.ui.getChildren().remove(designable);
            this.ui.setRendered(false);
        }

        public moveDesignable$framework_design_Designable$int(designable : framework.design.Designable, steps : number) {
            this.moveDesignable$framework_JSContainer$int(<framework.JSContainer><any>designable, steps);
        }

        public moveDesignable(designable? : any, steps? : any) : any {
            if(((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null) && ((typeof steps === 'number') || steps === null)) {
                return <any>this.moveDesignable$framework_design_Designable$int(designable, steps);
            } else if(((designable != null && designable instanceof <any>framework.JSContainer) || designable === null) && ((typeof steps === 'number') || steps === null)) {
                return <any>this.moveDesignable$framework_JSContainer$int(designable, steps);
            } else throw new Error('invalid overload');
        }

        public moveDesignable$framework_JSContainer$int(designable : framework.JSContainer, steps : number) {
            if(steps !== 0) {
                let index : number = this.ui.getChildren().indexOf(designable);
                let nextIndex : number = index + steps;
                if(nextIndex < 0) {
                    nextIndex = 0;
                } else if(nextIndex >= this.ui.getChildren().size() - 1) {
                    nextIndex = this.ui.getChildren().size() - 2;
                }
                if(index !== nextIndex) {
                    this.ui.getChildren().remove(designable);
                    this.ui.getChildren().add(nextIndex, designable);
                    this.ui.setRendered(false);
                }
            }
        }
    }
    DesignableDelegate["__class"] = "framework.designables.DesignableDelegate";

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
namespace framework.lightning {
    export interface TabActionListener {
        onActivate(item : framework.lightning.TabItem);

        onDeactivate(item : framework.lightning.TabItem);

        onClose(item : framework.lightning.TabItem);
    }
}
namespace framework.lightning.table {
    export enum Alignment {
        RIGHT, LEFT, NONE
    }
}
namespace framework.lightning.table {
    export class DefaultTableCellRenderer implements framework.lightning.table.TableCellRenderer {
        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable {
            if(value != null && (typeof value === 'boolean')) {
                let ch : framework.lightning.CheckBox = new framework.lightning.CheckBox("");
                ch.setValue$java_lang_Boolean(<boolean>value);
                return ch;
            }
            let truncate : framework.JSContainer = new framework.JSContainer("div").addClass("slds-truncate");
            let s : string = "";
            if(value != null) {
                s = value.toString();
            }
            truncate.setHtml(s).setAttribute("title", s);
            return truncate;
        }

        constructor() {
        }
    }
    DefaultTableCellRenderer["__class"] = "framework.lightning.table.DefaultTableCellRenderer";
    DefaultTableCellRenderer["__interfaces"] = ["framework.lightning.table.TableCellRenderer"];


}
namespace framework.lightning.table {
    export class DefaultTableColumnModel implements framework.lightning.table.TableColumnModel {
        /*private*/ columns : java.util.List<framework.lightning.table.TableColumn> = <any>(new java.util.LinkedList<any>());

        public constructor() {
        }

        /**
         * 
         * @param {framework.lightning.table.TableColumn} aColumn
         */
        public addColumn(aColumn : framework.lightning.table.TableColumn) {
            this.columns.add(aColumn);
        }

        /**
         * 
         * @param {framework.lightning.table.TableColumn} column
         */
        public removeColumn(column : framework.lightning.table.TableColumn) {
            this.columns.remove(column);
        }

        /**
         * 
         * @return {number}
         */
        public getColumnCount() : number {
            return this.columns.size();
        }

        /**
         * 
         * @param {*} columnIdentifier
         * @return {number}
         */
        public getColumnIndex(columnIdentifier : any) : number {
            for(let i : number = 0; i < this.columns.size(); i++) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.columns.get(i).getIdentifier(),columnIdentifier))) {
                    return i;
                }
            };
            return -1;
        }

        /**
         * 
         * @param {number} columnIndex
         * @return {framework.lightning.table.TableColumn}
         */
        public getColumn(columnIndex : number) : framework.lightning.table.TableColumn {
            return this.columns.get(columnIndex);
        }
    }
    DefaultTableColumnModel["__class"] = "framework.lightning.table.DefaultTableColumnModel";
    DefaultTableColumnModel["__interfaces"] = ["framework.lightning.table.TableColumnModel"];


}
namespace framework.lightning.table {
    export interface TableCellRenderer {
        getComponent(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable;
    }
}
namespace framework.lightning.table {
    export interface TableColumnModel {
        addColumn(aColumn : framework.lightning.table.TableColumn);

        removeColumn(column : framework.lightning.table.TableColumn);

        getColumnCount() : number;

        getColumnIndex(columnIdentifier : any) : number;

        getColumn(columnIndex : number) : framework.lightning.table.TableColumn;
    }
}
namespace framework.lightning.table {
    export interface TableModel {
        getRowCount() : number;

        isCellEditable(rowIndex : number, columnIndex : number) : boolean;

        getValueAt(rowIndex : number, columnIndex : number) : any;

        setValueAt(aValue : any, rowIndex : number, columnIndex : number);
    }
}
namespace framework.lightning.table {
    export interface TableRowsSelectionListener {
        onSelectRow(source : framework.JSContainer, event : Event, table : framework.lightning.table.Table, firstIndex : number, lastIndex : number);
    }
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
            for(let index1209=framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.core.DecoratorsRegistry").getDecorators().iterator();index1209.hasNext();) {
                let dec = index1209.next();
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
                        if(parent != null && parent instanceof <any>framework.JSHTMLFragment) {
                            $(parent).find("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
                        } else {
                            root.appendChild(njq);
                        }
                    }
                } else {
                    if(parent != null && parent instanceof <any>framework.JSHTMLFragment) {
                        $("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
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
        }

        renderEvents(njq : HTMLElement, c : framework.JSContainer) {
            for(let index1210=c.getListeners().keySet().iterator();index1210.hasNext();) {
                let key = index1210.next();
                {
                    let listeners : java.util.List<framework.EventListener> = c.getListeners().get(key);
                    njq.addEventListener(key, ((listeners) => {
                        return (evt) => {
                            this.synchronizeFields(c.getRoot().getNative(), c.getRoot());
                            for(let index1211=listeners.iterator();index1211.hasNext();) {
                                let l = index1211.next();
                                {
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
                        if(field != null) {
                            let value : string = field.value;
                            inputField.setRawValue(value);
                        }
                    }
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "select")) {
                    let field : HTMLSelectElement = <HTMLSelectElement>document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.value;
                        inputField.setRawValue(value);
                    }
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "textarea")) {
                    let field : HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.value;
                        inputField.setRawValue(value);
                    }
                } else {
                    let field : HTMLElement = document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.getAttribute("value");
                        inputField.setRawValue(value);
                    }
                }
            }
            for(let index1212=jsfield.getChildren().iterator();index1212.hasNext();) {
                let c = index1212.next();
                {
                    this.synchronizeFields(document.getElementById(c.getId()), c);
                }
            }
        }

        renderAttributes(njq : HTMLElement, c : framework.Renderable, changed : boolean) {
            if(changed) {
                {
                    let array1214 = c.getChangedAttributes();
                    for(let index1213=0; index1213 < array1214.length; index1213++) {
                        let key = array1214[index1213];
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
                for(let index1215=c.getAttributeNames().iterator();index1215.hasNext();) {
                    let key = index1215.next();
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
                    let array1217 = c.getChangedStyles();
                    for(let index1216=0; index1216 < array1217.length; index1216++) {
                        let key = array1217[index1216];
                        {
                            njq.style.setProperty(key, c.getStyle(key));
                        }
                    }
                }
            } else {
                for(let index1218=c.getStyleNames().iterator();index1218.hasNext();) {
                    let key = index1218.next();
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
namespace framework.builder.data {
    export class DataStructure extends framework.builder.data.File {
        /*private*/ object : Object;

        public constructor(object : Object) {
            super(object);
            this.object = null;
            this.object = object;
        }

        public getName() : string {
            return <string>this.object["name"];
        }

        public getLabel() : string {
            return <string>this.object["label"];
        }

        public getTitle() : string {
            return <string>this.object["label"];
        }

        public isDeletable() : boolean {
            return <boolean>this.object["deletable"];
        }

        public getLabelPlural() : string {
            return <string>this.object["labelPlural"];
        }

        public isQueryable() : boolean {
            return <boolean>this.object["queryable"];
        }

        public getSearchable() : string {
            return <string>this.object["searchable"];
        }

        public isUpdateable() : boolean {
            return <boolean>this.object["updateable"];
        }

        public getFields(listener : framework.builder.data.RemoteDataListener<java.util.List<framework.builder.data.DataField>>) {
            let cached : Array<Object> = <Array<Object>>this.object["fields"];
            if(cached == null) {
                framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).getDataStructure(new DataStructure.DataStructure$0(this, listener), this.getName());
            } else {
                let fields : java.util.List<framework.builder.data.DataField> = <any>(new java.util.LinkedList<any>());
                this.object["fields"] = cached;
                for(let index1219=0; index1219 < cached.length; index1219++) {
                    let oField = cached[index1219];
                    {
                        fields.add(new framework.builder.data.DataField(oField));
                    }
                }
                listener.dataLoaded(fields);
            }
        }
    }
    DataStructure["__class"] = "framework.builder.data.DataStructure";


    export namespace DataStructure {

        export class DataStructure$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                let o : Object = <Object>data;
                let fields : java.util.List<framework.builder.data.DataField> = <any>(new java.util.LinkedList<any>());
                let oFields : Array<Object> = <Array<Object>>o["fields"];
                this.__parent.object["fields"] = oFields;
                for(let index1220=0; index1220 < oFields.length; index1220++) {
                    let oField = oFields[index1220];
                    {
                        fields.add(new framework.builder.data.DataField(oField));
                    }
                }
                this.listener.dataLoaded(fields);
            }

            constructor(__parent: any, private listener: any) {
                this.__parent = __parent;
            }
        }
        DataStructure$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework {
    export class Boot {
        public static main(args : string[]) {
            let factory : framework.core.BeanFactory = framework.core.BeanFactory.getInstance();
            let decoratorRegistry : framework.core.DecoratorsRegistry = new framework.core.BasicDecoratorRegistry();
            decoratorRegistry.registerDecorator(new framework.interactions.InteractionsDecorator());
            factory.addBean("framework.core.DecoratorsRegistry", decoratorRegistry);
            let componentFactoryRegistry : framework.builder.libraries.ComponentFactoryRegistry = new framework.builder.libraries.BasicComponentFactoryRegistry();
            let tags : string[] = ["form", "fieldset", "select", "button"];
            componentFactoryRegistry.registerComponentFactory("html:html", new Boot.Boot$0("html:html"));
            componentFactoryRegistry.registerComponentFactory("html:p", new Boot.Boot$1("html:p"));
            componentFactoryRegistry.registerComponentFactory("html:cmp", new Boot.Boot$2("html:cmp"));
            for(let index1221=0; index1221 < tags.length; index1221++) {
                let tag = tags[index1221];
                {
                    componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.BasicComponentFactory(tag));
                }
            }
            componentFactoryRegistry.registerComponentFactory("html:div", new Boot.Boot$3("html:div"));
            componentFactoryRegistry.registerComponentFactory("html:img", new Boot.Boot$4("html:img"));
            componentFactoryRegistry.registerComponentFactory("html:a", new Boot.Boot$5("html:a"));
            componentFactoryRegistry.registerComponentFactory("html:ul", new Boot.Boot$6("html:ul"));
            componentFactoryRegistry.registerComponentFactory("html:input", new Boot.Boot$7("html:input"));
            componentFactoryRegistry.registerComponentFactory("html:textarea", new Boot.Boot$8("html:input"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn", new Boot.Boot$9("lgt:btn"));
            factory.addBean("framework.builder.libraries.ComponentFactoryRegistry", componentFactoryRegistry);
            factory.addBean("framework.builder.data.DataEnvironment", new framework.builder.data.BasicDataEnvironment());
            factory.addBean(framework.builder.data.ProjectService, new framework.builder.data.ProjectService());
            if(/* contains */window.location.href.indexOf("preview.html") != -1) {
                let name : string = window.location.href.split("#")[1];
                new framework.builder.Previewer(name).render();
            } else {
                new framework.builder.Builder("builder").render();
            }
        }
    }
    Boot["__class"] = "framework.Boot";


    export namespace Boot {

        export class Boot$0 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let cmp : framework.JSHTMLFragment = new framework.JSHTMLFragment("html fragment", "#default");
                return cmp;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$0["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$1 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let cmp : framework.designables.JSDesignableTextComponent = new framework.designables.JSDesignableTextComponent("txtItem", "p");
                cmp.setHtml("Text Item");
                return cmp;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$1["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$2 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let cmp : framework.designables.JSDesignableBuilderComponent = new framework.designables.JSDesignableBuilderComponent("component");
                return cmp;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$2["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$3 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.designables.JSDesignableBlockComponent("panel", "div");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$3["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$4 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let img : framework.designables.JSDesignableImage = new framework.designables.JSDesignableImage("image");
                return img;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$4["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$5 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let link : framework.designables.JSDesignableLink = new framework.designables.JSDesignableLink("link");
                link.setHtml("link");
                link.setAttribute("href", "#link");
                return link;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$5["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$6 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let list : framework.designables.JSDesignableList = new framework.designables.JSDesignableList("list");
                return list;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$6["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$7 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let input : framework.designables.JSDesignableInput = new framework.designables.JSDesignableInput("Input");
                return input;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$7["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$8 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let input : framework.designables.JSDesignableTextArea = new framework.designables.JSDesignableTextArea("TextArea");
                return input;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$8["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$9 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let btn : framework.designables.JSDesignableButton = new framework.designables.JSDesignableButton("Button");
                btn.setLabel("Button");
                return btn;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$9["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


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
         * @return {*}
         */
        public createInstance(designMode : boolean) : framework.design.Designable {
            let container : framework.designables.JSDesignable = new framework.designables.JSDesignable(this.tag, this.tag);
            return container;
        }
    }
    BasicComponentFactory["__class"] = "framework.builder.libraries.BasicComponentFactory";
    BasicComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


}
namespace framework.design {
    export abstract class AbstractBooleanParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "Boolean", category);
        }
    }
    AbstractBooleanParameter["__class"] = "framework.design.AbstractBooleanParameter";

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
            if(this.options.size() === 0) {
                let editor : framework.builder.properties.AttributeEditor = new framework.builder.properties.AttributeEditor();
                editor.setProperty(designable, this);
                return editor;
            } else {
                let editor : framework.builder.properties.AttributeWithOptionsEditor = new framework.builder.properties.AttributeWithOptionsEditor();
                editor.setProperty(designable, this);
                return editor;
            }
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            return designable.getAttribute(this.name);
        }
    }
    AttributeParameter["__class"] = "framework.design.AttributeParameter";

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
            editor.setProperty(designable, this);
            return editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            return designable.getName();
        }
    }
    NameParameter["__class"] = "framework.design.NameParameter";

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
            editor.setProperty(designable, this);
            return editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            return designable.getStyle(this.name);
        }
    }
    StyleParameter["__class"] = "framework.design.StyleParameter";

}
namespace framework.design {
    export class TagParameter extends framework.design.Parameter {
        public constructor() {
            super("tag", "Tag", "basic", "Basic");
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.TagEditor = new framework.builder.properties.TagEditor("tagEditor");
            for(let index1222=this.options.iterator();index1222.hasNext();) {
                let opt = index1222.next();
                {
                    editor.addOption(new framework.JSOption(opt.text, opt.value));
                }
            }
            editor.setProperty(designable, this);
            return editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            return designable.getTag();
        }
    }
    TagParameter["__class"] = "framework.design.TagParameter";

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
            editor.setProperty(designable, this);
            return editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            return designable.getHtml();
        }
    }
    TextParameter["__class"] = "framework.design.TextParameter";

}
namespace framework.design {
    export class ValueParameter extends framework.design.Parameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, "String", category);
        }

        /**
         * 
         * @param {*} designable
         * @return {*}
         */
        public getEditor(designable : framework.design.Designable) : framework.builder.properties.PropertyEditor {
            let editor : framework.builder.properties.ValuePropertyEditor = new framework.builder.properties.ValuePropertyEditor("s");
            editor.setProperty(designable, this);
            return editor;
        }

        /**
         * 
         * @param {*} designable
         * @return {string}
         */
        public extractValue(designable : framework.design.Designable) : string {
            let s : any = (<framework.InputField<any>><any>designable).getValue();
            if(s != null) {
                return s.toString();
            } else {
                return null;
            }
        }
    }
    ValueParameter["__class"] = "framework.design.ValueParameter";

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
    export class JSContainer implements framework.Renderable, framework.interactions.Droppable {
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
            for(let index1223=0; index1223 < aStyles.length; index1223++) {
                let style = aStyles[index1223];
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
            this.listeners.get(type).add(listener);
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
            this.setRendered(false);
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
                for(let index1224=this.children.iterator();index1224.hasNext();) {
                    let child = index1224.next();
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
            for(let index1225=this.renderers.iterator();index1225.hasNext();) {
                let renderer = index1225.next();
                renderer.doRender(this, parent)
            }
            for(let index1226=this.getChildren().iterator();index1226.hasNext();) {
                let child = index1226.next();
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
            let clsss : string = this.parent.getAttribute("class");
            if(clsss != null) {
                {
                    let array1228 = this.parent.getAttribute("class").split(" ");
                    for(let index1227=0; index1227 < array1228.length; index1227++) {
                        let s = array1228[index1227];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s.trim(),cls))) return <T>this.parent;
                        }
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
    JSContainer["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
         * @return {*}
         */
        public createInstance(designMode : boolean) : framework.design.Designable {
            let instance : framework.design.Designable = new framework.designables.JSDesignableTextComponent(this.tag, this.tag);
            instance.setHtml(this.defaultText);
            return instance;
        }
    }
    TextComponentFactory["__class"] = "framework.builder.libraries.TextComponentFactory";
    TextComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


}
namespace framework.builder {
    export class Component extends framework.JSContainer implements framework.EventListener {
        /*private*/ titleFigure : framework.JSContainer = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");

        /*private*/ avatar : framework.JSContainer = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large");

        /*private*/ initial : framework.JSContainer = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-app-launcher__title-label");

        /*private*/ componentFactoryRegistry : framework.builder.libraries.ComponentFactoryRegistry = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry"));

        /*private*/ identifier : string;

        public constructor(identifier : string, initial : string, label : string) {
            super(identifier, "div");
            this.identifier = null;
            this.addClass("component-design basic");
            this.setAttribute("identifier", identifier);
            this.identifier = identifier;
            this.addClass("designer-component");
            this.addChild$framework_JSContainer(this.titleFigure.setAttribute("identifier", identifier));
            this.titleFigure.addChild$framework_JSContainer(this.avatar.setAttribute("identifier", identifier));
            this.avatar.addChild$framework_JSContainer(this.initial.setAttribute("identifier", identifier));
            this.initial.setAttribute("title", label);
            this.initial.setHtml(initial);
            this.titleFigure.addChild$framework_JSContainer(this.title.setAttribute("identifier", identifier));
            this.title.setHtml(label);
            this.addEventListener(this, "click");
        }

        public getFactory() : framework.builder.marshalling.ComponentFactory {
            return this.componentFactoryRegistry.getComponentFactory(this.getName());
        }

        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let opts : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            opts.appendTo = "body";
            opts.revert = true;
            opts.zIndex = 1000;
            opts.helper = "clone";
            return opts;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let editor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            editor.setWillAddComponent(this);
        }
    }
    Component["__class"] = "framework.builder.Component";
    Component["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.builder.editors {
    export abstract class AbstractEditor<T> extends framework.JSContainer implements framework.builder.editors.Editor<T> {
        file : framework.builder.data.File;

        /*private*/ projectService : framework.builder.data.ProjectService = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService));

        /*private*/ rootEditor : framework.builder.editors.VisualEditor;

        public constructor(name : string, tag : string, rootEditor : framework.builder.editors.VisualEditor) {
            super(name, tag);
            this.file = null;
            this.rootEditor = null;
            this.rootEditor = rootEditor;
        }

        public setRootEditor(root : framework.builder.editors.VisualEditor) {
            this.rootEditor = root;
        }

        public getStructure() : framework.builder.editors.Structure {
            return this.rootEditor.getStructure();
        }

        public dirty() {
            let body : framework.lightning.TabBody = <any>(this.getAncestorWithClass<any>("slds-tabs_default__content"));
            let tabs : framework.lightning.Tabs = <any>(this.getAncestorWithClass<any>("editor-tabs"));
            let item : framework.lightning.TabItem = tabs.getTab(body);
            item.setStyle("color", "red");
            item.render();
            if(this.getRootEditor() != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getRootEditor().getName(),this.getName()))) {
                this.getRootEditor().dirty();
            }
        }

        public clean() {
            let body : framework.lightning.TabBody = <any>(this.getAncestorWithClass<any>("slds-tabs_default__content"));
            let tabs : framework.lightning.Tabs = <any>(this.getAncestorWithClass<any>("editor-tabs"));
            let item : framework.lightning.TabItem = tabs.getTab(body);
            item.setStyle("color", "#16325c");
            item.render();
        }

        public getRootEditor() : framework.builder.editors.VisualEditor {
            return this.rootEditor;
        }

        public abstract getMarshall() : string;

        public save(type? : any) : any {
            if(type === undefined) {
                return <any>this.save$();
            } else throw new Error('invalid overload');
        }

        public save$() {
            let data : string = this.getMarshall();
            this.file.setData(data);
            this.projectService.saveFile(this.file, new AbstractEditor.AbstractEditor$0(this));
        }

        public abstract createNew(f : framework.builder.data.File) : T;

        public abstract unmarshall(f : framework.builder.data.File) : T;

        /**
         * 
         * @param {framework.builder.marshalling.Component} data
         */
        public consume(data? : any) : any {
            if(((data != null) || data === null)) {
                return <any>this.consume$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }

        public consume$java_lang_Object(data : T) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        public open(f : framework.builder.data.File) {
            this.file = f;
            if(this.file.getData() != null && this.file.getData().length > 0) {
                let unmarshaled : T = this.unmarshall(this.file);
                this.consume(unmarshaled);
            } else {
                this.consume(this.createNew(this.file));
            }
        }
    }
    AbstractEditor["__class"] = "framework.builder.editors.AbstractEditor";
    AbstractEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];



    export namespace AbstractEditor {

        export class AbstractEditor$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                this.__parent.clean();
                let title : string = this.__parent.getAttribute("title");
                framework.builder.Builder.websocket_$LI$().send("open:" + title);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AbstractEditor$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.editors {
    export class JSTemplate extends framework.JSContainer {
        /*private*/ fileName : string;

        public constructor(f : framework.builder.data.File) {
            super("div");
            this.fileName = null;
            this.fileName = f.getName();
            this.setHtml(f.getData());
        }

        public getId() : string {
            return /* replace */this.fileName.split(".html").join("");
        }
    }
    JSTemplate["__class"] = "framework.builder.editors.JSTemplate";
    JSTemplate["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.editors {
    export class Preview extends framework.JSContainer {
        /*private*/ root : framework.design.Designable;

        public constructor(file : framework.builder.data.File) {
            super("visualEditor", "div");
            this.root = null;
            this.addClass("visual-editor");
            this.consume(this.unmarshall(file));
        }

        public unmarshall(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(f.getData());
        }

        public build(component : framework.builder.marshalling.Component) : framework.design.Designable {
            return framework.builder.marshalling.MarshallUtil.toDesignable(component);
        }

        public consume(component : framework.builder.marshalling.Component) {
            this.root = this.build(component);
            this.addChild$framework_JSContainer(<framework.JSContainer><any>this.root);
        }
    }
    Preview["__class"] = "framework.builder.editors.Preview";
    Preview["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.editors {
    export class Structure extends framework.JSContainer {
        /*private*/ root : framework.design.Designable;

        /*private*/ ul : framework.JSContainer = new framework.JSContainer("ul");

        /*private*/ liJS : framework.JSContainer;

        /*private*/ liData : framework.JSContainer;

        /*private*/ liTemplates : framework.JSContainer;

        /*private*/ liComponents : framework.JSContainer;

        /*private*/ liCss : framework.JSContainer = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

        /*private*/ liRoot : framework.JSContainer = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");

        /*private*/ selected : framework.TreeItem = null;

        /*private*/ file : framework.builder.data.File;

        /*private*/ selector : framework.builder.Selector;

        /*private*/ __cut : boolean = false;

        /*private*/ clipboardItem : framework.design.Designable = null;

        dataRoot : framework.TreeItem = new framework.TreeItem("", "Data").setLeftIcon("https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif");

        toggleSelect : framework.EventListener = new Structure.Structure$0(this);

        public constructor(name : string, root : framework.design.Designable, f : framework.builder.data.File, selector : framework.builder.Selector) {
            super(name, "div");
            this.root = null;
            this.liJS = null;
            this.liData = null;
            this.liTemplates = null;
            this.liComponents = null;
            this.file = null;
            this.selector = null;
            this.addClass("structure");
            this.selector = selector;
            this.file = f;
            this.addClass("slds-tree_container");
            this.addChild$framework_JSContainer(this.ul.addClass("slds-tree").setAttribute("role", "tree"));
            this.root = root;
            this.reload();
        }

        public copy(des : framework.design.Designable) {
            this.__cut = false;
            this.clipboardItem = des;
        }

        public cut(des : framework.design.Designable) {
            this.__cut = true;
            this.clipboardItem = des;
        }

        public isCut() : boolean {
            return this.__cut;
        }

        public getClipBoard() : framework.design.Designable {
            return this.clipboardItem;
        }

        public clearClipboard() {
            this.clipboardItem = null;
        }

        public getFile() : framework.builder.data.File {
            return this.file;
        }

        public getSelector() : framework.builder.Selector {
            return this.selector;
        }

        public getRootUINode() : framework.design.Designable {
            return this.root;
        }

        public select(designable : framework.design.Designable) {
            if(this.getSelected() != null) {
                this.getSelected().select(false);
            }
            let itemS : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
            this.setSelected(itemS);
            this.getSelected().select(true);
        }

        public setSelected(item : framework.TreeItem) {
            if(this.selected != null) {
                this.selected.select(false);
            }
            this.selected = item;
            this.selected.select(true);
        }

        public getSelected() : framework.TreeItem {
            return this.selected;
        }

        public reload$() {
            this.clipboardItem = null;
            this.ul.getChildren().clear();
            this.ul.setRendered(false);
            this.liJS = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.liCss = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.liData = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.liTemplates = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.liComponents = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "0");
            this.ul.addChild$framework_JSContainer(this.liRoot.addClass("type-ui"));
            this.addNode(this.root, this.liRoot, 0, null);
            this.liJS.addChild$framework_JSContainer(new framework.TreeItem("", "JS").addClass("type-scripts").addEventListener(this.toggleSelect, "click"));
            this.ul.addChild$framework_JSContainer(this.liJS);
            this.liCss.addChild$framework_JSContainer(new framework.TreeItem("", "CSS").addClass("type-stylesheets").addEventListener(this.toggleSelect, "click"));
            this.ul.addChild$framework_JSContainer(this.liCss);
            this.liTemplates.addChild$framework_JSContainer(new framework.TreeItem("", "Templates").addClass("type-templates").addEventListener(this.toggleSelect, "click"));
            this.ul.addChild$framework_JSContainer(this.liTemplates);
            this.liData.addChild$framework_JSContainer(this.dataRoot.addClass("type-data").addEventListener(this.toggleSelect, "click"));
            this.ul.addChild$framework_JSContainer(this.liData);
            this.liComponents.addChild$framework_JSContainer(new framework.TreeItem("", "Components").addClass("type-components").addEventListener(this.toggleSelect, "click"));
            this.ul.addChild$framework_JSContainer(this.liComponents);
            this.renderFiles();
        }

        public getItem$framework_design_Designable$framework_JSContainer(designable : framework.design.Designable, currentNode : framework.JSContainer) : framework.builder.editors.StructureTreeItem {
            for(let index1229=currentNode.getChildren().iterator();index1229.hasNext();) {
                let des = index1229.next();
                {
                    if(des != null && des instanceof <any>framework.builder.editors.StructureTreeItem) {
                        let titem : framework.builder.editors.StructureTreeItem = <framework.builder.editors.StructureTreeItem>des;
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(designable.getId(),titem.getDesignable().getId()))) {
                            return titem;
                        }
                    }
                    let child : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(designable, des);
                    if(child != null) {
                        return child;
                    }
                }
            }
            return null;
        }

        public getItem(designable? : any, currentNode? : any) : any {
            if(((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null) && ((currentNode != null && currentNode instanceof <any>framework.JSContainer) || currentNode === null)) {
                return <any>this.getItem$framework_design_Designable$framework_JSContainer(designable, currentNode);
            } else if(((typeof designable === 'string') || designable === null) && currentNode === undefined) {
                return <any>this.getItem$java_lang_String(designable);
            } else throw new Error('invalid overload');
        }

        public getItem$java_lang_String(type : string) : framework.TreeItem {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(type,"stylesheets"))) {
                return <framework.TreeItem>this.liCss.getChildren().get(0);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(type,"templates"))) {
                return <framework.TreeItem>this.liTemplates.getChildren().get(0);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(type,"scripts"))) {
                return <framework.TreeItem>this.liJS.getChildren().get(0);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(type,"data"))) {
                return <framework.TreeItem>this.liData.getChildren().get(0);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(type,"components"))) {
                return <framework.TreeItem>this.liComponents.getChildren().get(0);
            }
            return null;
        }

        public reload$java_lang_String(type : string) {
            this.clipboardItem = null;
            this.reload();
            let item : framework.TreeItem = this.getItem$java_lang_String(type);
            item.open();
        }

        public reload(type? : any) : any {
            if(((typeof type === 'string') || type === null)) {
                return <any>this.reload$java_lang_String(type);
            } else if(((type != null && (type["__interfaces"] != null && type["__interfaces"].indexOf("framework.design.Designable") >= 0 || type.constructor != null && type.constructor["__interfaces"] != null && type.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || type === null)) {
                return <any>this.reload$framework_design_Designable(type);
            } else if(type === undefined) {
                return <any>this.reload$();
            } else throw new Error('invalid overload');
        }

        public reload$framework_design_Designable(designable : framework.design.Designable) {
            this.clipboardItem = null;
            let item : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
            if(item != null) {
                let level : number = javaemul.internal.IntegerHelper.parseInt(item.getParent().getAttribute("aria-level"));
                let li : framework.JSContainer = item.getParent();
                li.getChildren().clear();
                li.setRendered(false);
                this.addNode(designable, li, level, item.getParentDesignable()).open();
                item.open();
            }
        }

        public unselect(c : framework.JSContainer) {
        }

        public renderFiles() {
            let types : string[] = ["stylesheets", "scripts", "templates", "components"];
            let lis : java.util.Map<string, framework.JSContainer> = <any>(new java.util.HashMap<string, framework.JSContainer>());
            lis.put("stylesheets", this.liCss);
            lis.put("data", this.liData);
            lis.put("scripts", this.liJS);
            lis.put("templates", this.liTemplates);
            lis.put("components", this.liComponents);
            for(let index1230=0; index1230 < types.length; index1230++) {
                let type = types[index1230];
                {
                    let cstylesheets : framework.JSContainer = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                    for(let index1231=this.file.getChild(type).getChildren().iterator();index1231.hasNext();) {
                        let f = index1231.next();
                        {
                            let item : framework.TreeItem = new framework.builder.editors.FileTreeItem(f, type, framework.builder.Builder.getInstance(), this);
                            item.addEventListener(this.toggleSelect, "click");
                            let li : framework.JSContainer = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                            lis.get(type).addChild$framework_JSContainer(cstylesheets.addChild$framework_JSContainer(li));
                        }
                    }
                }
            }
            let struc : Structure = this;
            this.file.getDataStructures(new Structure.Structure$1(this, struc, lis));
        }

        public addNode(ctn : framework.design.Designable, li : framework.JSContainer, level : number, parent : framework.design.Designable) : framework.builder.editors.StructureTreeItem {
            let item : framework.builder.editors.StructureTreeItem = new framework.builder.editors.StructureTreeItem(ctn.getName(), ctn, this, parent);
            li.addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");
            let designables : java.util.List<framework.design.Designable> = ctn.getDesignables();
            if(designables != null && designables.size() > 0) {
                item.leaf(false);
                let children : framework.JSContainer = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                li.addChild$framework_JSContainer(children);
                for(let index1232=ctn.getDesignables().iterator();index1232.hasNext();) {
                    let c = index1232.next();
                    {
                        let child : framework.JSContainer = new framework.JSContainer("li");
                        children.addChild$framework_JSContainer(child);
                        this.addNode(c, child, level + 1, ctn);
                    }
                }
            } else {
                item.leaf(true);
            }
            return item;
        }
    }
    Structure["__class"] = "framework.builder.editors.Structure";
    Structure["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace Structure {

        export class Structure$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                if(this.__parent.selected != null) {
                    this.__parent.selected.select(false);
                }
                this.__parent.selected = (<framework.TreeItem>source);
                (<framework.TreeItem>source).select(true);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Structure$0["__interfaces"] = ["framework.EventListener"];



        export class Structure$1 implements framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>> {
            public __parent: any;
            public dataLoaded$jsweet_lang_Array(data : Array<framework.builder.data.DataStructure>) {
                let cstylesheets : framework.JSContainer = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                let count : number = 0;
                for(let index1233=0; index1233 < data.length; index1233++) {
                    let f = data[index1233];
                    {
                        if(count === 10) {
                            break;
                        }
                        let item : framework.TreeItem = new framework.builder.editors.FileTreeItem(f, "data", framework.builder.Builder.getInstance(), this.struc);
                        item.addEventListener(this.__parent.toggleSelect, "click");
                        let li : framework.JSContainer = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                        this.__parent.dataRoot.setLeftIcon$java_lang_String$java_lang_String("file", "utility");
                        this.lis.get("data").addChild$framework_JSContainer(cstylesheets.addChild$framework_JSContainer(li)).render();
                        count++;
                    }
                }
            }

            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null && data instanceof <any>Array) || data === null)) {
                    return <any>this.dataLoaded$jsweet_lang_Array(data);
                } else throw new Error('invalid overload');
            }

            constructor(__parent: any, private struc: any, private lis: any) {
                this.__parent = __parent;
            }
        }
        Structure$1["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder {
    export class FilesList extends framework.JSContainer {
        /*private*/ itemSelectedListeners : java.util.List<framework.builder.ItemSelectedListener> = <any>(new java.util.LinkedList<any>());

        /*private*/ selector : framework.builder.ItemSelector;

        /*private*/ click : framework.EventListener = new FilesList.FilesList$0(this);

        public constructor(name : string, selector : framework.builder.ItemSelector) {
            super(name, "ul");
            this.selector = null;
            this.selector = selector;
            this.addClass("slds-grid slds-grid_pull-padded slds-wrap");
        }

        public addFile(file : framework.builder.UIFile) : FilesList {
            file.addEventListener(this.click, "click");
            let li : framework.JSContainer = new framework.JSContainer("li");
            li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3");
            this.addChild$framework_JSContainer(li);
            li.addChild$framework_JSContainer(file);
            return this;
        }

        public addItemSelectedListener(l : framework.builder.ItemSelectedListener) {
            this.itemSelectedListeners.add(l);
        }

        public fireItemSelectedListeners(file : framework.builder.UIFile, selector : framework.builder.ItemSelector) {
            for(let index1234=this.itemSelectedListeners.iterator();index1234.hasNext();) {
                let l = index1234.next();
                {
                    l.itemSelected(file, selector);
                }
            }
        }

        public select(file : framework.builder.UIFile) {
            for(let index1235=this.getChildren().iterator();index1235.hasNext();) {
                let c = index1235.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getChildren().get(0).getName(),file.getName()))) {
                        this.fireItemSelectedListeners(file, this.selector);
                        c.getChildren().get(0).addClass("selected");
                    } else {
                        c.getChildren().get(0).removeClass("selected");
                    }
                }
            }
        }
    }
    FilesList["__class"] = "framework.builder.FilesList";
    FilesList["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace FilesList {

        export class FilesList$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                evt.stopPropagation();
                this.__parent.select(<framework.builder.UIFile>source);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        FilesList$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.libraries {
    export class DataComposer extends framework.JSContainer implements framework.builder.editors.Editor<Array<framework.builder.data.DataStructure>> {
        /*private*/ editor : framework.builder.editors.VisualEditor;

        /*private*/ structure : framework.builder.editors.Structure;

        public constructor(name : string, editor : framework.builder.editors.VisualEditor, structure : framework.builder.editors.Structure) {
            super(name, "div");
            this.editor = null;
            this.structure = null;
            this.editor = editor;
            this.structure = structure;
        }

        /**
         * 
         */
        public save() {
        }

        /**
         * 
         */
        public dirty() {
        }

        /**
         * 
         */
        public clean() {
        }

        /**
         * 
         * @param {framework.builder.data.File} file
         */
        public open(file : framework.builder.data.File) {
            let struct : framework.builder.data.DataStructure = <framework.builder.data.DataStructure>file;
            let item : framework.builder.libraries.DataItem = new framework.builder.libraries.DataItem(struct.getName(), struct);
            this.addChild$framework_JSContainer(item);
        }

        /**
         * 
         * @return {framework.builder.editors.Structure}
         */
        public getStructure() : framework.builder.editors.Structure {
            return this.structure;
        }

        /**
         * 
         * @return {framework.builder.editors.VisualEditor}
         */
        public getRootEditor() : framework.builder.editors.VisualEditor {
            return this.editor;
        }
    }
    DataComposer["__class"] = "framework.builder.libraries.DataComposer";
    DataComposer["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder {
    export class Previewer extends framework.JSContainer {
        public static project : framework.builder.data.File = null;

        public constructor(name : string) {
            super("div");
            let websocket : WebSocket = new WebSocket("ws:localhost:8080/preview");
            websocket.onopen = (t : Event) => {
                websocket.send("open:" + name);
                return null;
            };
            websocket.onmessage = (t : MessageEvent) => {
                document.body.innerHTML = "";
                let o : any = JSON.parse(t.data.toString());
                let template : HTMLElement = document.createElement("div");
                template.style.display = "none";
                template.setAttribute("id", "templates");
                document.body.appendChild(template);
                let f : framework.builder.data.File = new framework.builder.data.File(<Object>o);
                Previewer.project = f;
                let preview : framework.builder.editors.Preview = new framework.builder.editors.Preview(f);
                for(let index1236=f.getStylesheets().iterator();index1236.hasNext();) {
                    let sc = index1236.next();
                    {
                        let elem : HTMLElement = document.createElement("style");
                        elem.textContent = sc.getData();
                        document.body.appendChild(elem);
                    }
                }
                for(let index1237=f.getScripts().iterator();index1237.hasNext();) {
                    let sc = index1237.next();
                    {
                        let elem : HTMLElement = document.createElement("script");
                        elem.textContent = sc.getData();
                        document.body.appendChild(elem);
                    }
                }
                for(let index1238=f.getTemplates().iterator();index1238.hasNext();) {
                    let sc = index1238.next();
                    {
                        let elem : HTMLElement = document.createElement("div");
                        elem.setAttribute("id", /* replace */sc.getName().split(".html").join(""));
                        elem.innerHTML = sc.getData();
                        template.appendChild(elem);
                    }
                }
                preview.render();
                return null;
            };
        }
    }
    Previewer["__class"] = "framework.builder.Previewer";
    Previewer["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder {
    export class Selector extends framework.JSContainer implements framework.EventListener {
        /*private*/ selected : framework.design.Designable = null;

        /*private*/ visualEditor : framework.builder.editors.VisualEditor;

        public constructor() {
            super("selector", "div");
            this.visualEditor = null;
            this.addClass("designer-selector");
            this.addEventListener(this, "click");
        }

        public setVisualEditor(editor : framework.builder.editors.VisualEditor) {
            this.visualEditor = editor;
        }

        public getSelected() : framework.design.Designable {
            return this.selected;
        }

        public select(component : framework.design.Designable) {
            if(this.selected == null || !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(component,this.selected))) {
                try {
                    this.selected = component;
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
                    this.visualEditor.getStructure().select(component);
                } catch(e) {
                };
                this.visualEditor.selectItem(component);
            }
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            source.setStyle("width", "0px");
            source.setStyle("height", "0px");
            this.selected = null;
        }
    }
    Selector["__class"] = "framework.builder.Selector";
    Selector["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignable extends framework.JSContainer implements framework.design.Designable {
        delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        component : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();

        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
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
            return this.delegate.getParameters();
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            let l : java.util.List<any> = this.getChildren();
            return l;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            this.delegate.addDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.delegate.removeDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
        }
    }
    JSDesignable["__class"] = "framework.designables.JSDesignable";
    JSDesignable["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableList extends framework.JSContainer implements framework.design.Designable {
        /*private*/ designables : java.util.List<framework.design.Designable> = <any>(new java.util.LinkedList<any>());

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "ul");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            this.setAttribute(key, value);
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(key, "decorate")) {
                this.setAttribute(key, value);
                this.decorate();
            }
        }

        public decorate() {
            let dec : string = this.getAttribute("decorate-class");
            if(dec != null) {
                for(let index1239=this.getChildren().iterator();index1239.hasNext();) {
                    let c = index1239.next();
                    {
                        c.setAttribute("class", dec);
                    }
                }
            }
            let decStyle : string = this.getAttribute("decorate-style");
            if(decStyle != null) {
                for(let index1240=this.getChildren().iterator();index1240.hasNext();) {
                    let c = index1240.next();
                    {
                        c.setAttribute("style", decStyle);
                    }
                }
            }
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            return this.designables;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = this.delegate.getParameters();
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            tagParam.options.add(new framework.design.Option("Un-Ordered(ul)", "ul"));
            tagParam.options.add(new framework.design.Option("Ordered(ol)", "ol"));
            parameters.add(tagParam);
            let decoracteClass : framework.design.AttributeParameter = new framework.design.AttributeParameter("decorate-class", "Decorate class", "Basic");
            parameters.add(decoracteClass);
            let decoracteStyle : framework.design.AttributeParameter = new framework.design.AttributeParameter("decorate-style", "Decorate style", "Basic");
            parameters.add(decoracteStyle);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            let li : framework.JSContainer = new framework.JSContainer("li");
            this.addChild$framework_JSContainer(li);
            li.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            this.designables.add(designable);
            designable.applyParam("name", "item_" + (this.getChildren().size() - 1));
            this.decorate();
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.getChildren().remove(designable.getParent());
            this.designables.remove(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_JSContainer$int(<framework.JSContainer><any>designable.getParent(), steps);
        }
    }
    JSDesignableList["__class"] = "framework.designables.JSDesignableList";
    JSDesignableList["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
    JSCheckBox["__interfaces"] = ["framework.interactions.Droppable","framework.InputField","framework.Renderable"];


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
    JSInput["__interfaces"] = ["framework.interactions.Droppable","framework.InputField","framework.Renderable"];


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
    JSOption["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework {
    export class JSSelect extends framework.JSContainer implements framework.InputField<string> {
        /*private*/ previousValue : string;

        public constructor(name : string) {
            super(name, "select");
            this.previousValue = null;
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
            for(let index1241=this.getChildren().iterator();index1241.hasNext();) {
                let opt = index1241.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(opt.getAttribute("value"),val))) {
                        return (<framework.JSOption>opt).getValue();
                    }
                }
            }
            return null;
        }

        public setValue$java_lang_String(val : string) {
            this.previousValue = this.getValue();
            this.setAttribute("value", val);
            for(let index1242=this.getChildren().iterator();index1242.hasNext();) {
                let opt = index1242.next();
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

        public getPreviousValue() : string {
            return this.previousValue;
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
    JSSelect["__interfaces"] = ["framework.interactions.Droppable","framework.InputField","framework.Renderable"];


}
namespace framework {
    export class JSTextArea extends framework.JSContainer implements framework.InputField<string> {
        static TEXT_AREA_RENDERER : framework.renderer.Renderer<JSTextArea>; public static TEXT_AREA_RENDERER_$LI$() : framework.renderer.Renderer<JSTextArea> { if(JSTextArea.TEXT_AREA_RENDERER == null) JSTextArea.TEXT_AREA_RENDERER = new JSTextArea.JSTextArea$0(); return JSTextArea.TEXT_AREA_RENDERER; };

        public constructor(name : string) {
            super(name, "textarea");
            this.addRenderer(JSTextArea.TEXT_AREA_RENDERER_$LI$());
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
    JSTextArea["__interfaces"] = ["framework.interactions.Droppable","framework.InputField","framework.Renderable"];



    export namespace JSTextArea {

        export class JSTextArea$0 implements framework.renderer.Renderer<framework.JSTextArea> {
            public doRender$framework_JSTextArea$jsweet_dom_HTMLElement(c : framework.JSTextArea, root : HTMLElement) {
                let elem : HTMLTextAreaElement = <HTMLTextAreaElement>root;
                elem.value = c.getValue();
            }

            /**
             * 
             * @param {framework.JSTextArea} c
             * @param {HTMLElement} root
             */
            public doRender(c? : any, root? : any) : any {
                if(((c != null && c instanceof <any>framework.JSTextArea) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                    return <any>this.doRender$framework_JSTextArea$jsweet_dom_HTMLElement(c, root);
                } else throw new Error('invalid overload');
            }

            constructor() {
            }
        }
        JSTextArea$0["__interfaces"] = ["framework.renderer.Renderer"];


    }

}
namespace framework {
    export class JSTree extends framework.JSContainer {
        /*private*/ ul : framework.JSContainer = new framework.JSContainer("ul").addClass("slds-tree").setAttribute("role", "tree");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("h4").addClass("slds-text-title_caps");

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-tree_container");
            this.addChild$framework_JSContainer(this.title);
            this.addChild$framework_JSContainer(this.ul);
        }

        public setTitle(title : string) {
            this.title.setHtml(title);
        }
    }
    JSTree["__class"] = "framework.JSTree";
    JSTree["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Accordion extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ designables : java.util.List<framework.design.Designable> = <any>(new java.util.LinkedList<any>());

        public constructor(name : string) {
            super(name, "ul");
            this.addClass("slds-accordion");
        }

        public addItem(item : framework.lightning.AccordionItem) : Accordion {
            this.addDesignable(item);
            return this;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            return this.designables;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.AccordionItem) {
                let li : framework.JSContainer = new framework.JSContainer("li").addClass("slds-accordion__list-item");
                this.addChild$framework_JSContainer(li);
                li.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            } else {
                throw new java.lang.RuntimeException("Can only add Component of type JSAccordionItem in an Accordion Container");
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.getChildren().remove(designable.getParent());
            this.setRendered(false);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            alert("under construction");
        }
    }
    Accordion["__class"] = "framework.lightning.Accordion";
    Accordion["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
    Avatar["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Backdrop extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-backdrop");
        }

        public open() : Backdrop {
            this.addClass("slds-backdrop_open");
            return this;
        }

        public close() : Backdrop {
            this.removeClass("slds-backdrop_open");
            return this;
        }
    }
    Backdrop["__class"] = "framework.lightning.Backdrop";
    Backdrop["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Badge extends framework.JSContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-badge");
        }
    }
    Badge["__class"] = "framework.lightning.Badge";
    Badge["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    Box["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class BreadcrumbItem extends framework.JSContainer {
        public constructor(name : string) {
            super("li");
            this.addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
        }
    }
    BreadcrumbItem["__class"] = "framework.lightning.BreadcrumbItem";
    BreadcrumbItem["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    Breadcrumbs["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Button extends framework.JSContainer {
        static states : string[]; public static states_$LI$() : string[] { if(Button.states == null) Button.states = ["neutral", "brand", "destructive", "success"]; return Button.states; };

        public static STATE_NEUTRAL : string = "neutral";

        public static STATE_BRAND : string = "brand";

        public static STATE_DESTRUCTIVE : string = "destructive";

        public static STATE_SUCCESS : string = "success";

        /*private*/ component : framework.builder.marshalling.Component;

        public constructor(name? : any) {
            if(((typeof name === 'string') || name === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "button");
                this.component = new framework.builder.marshalling.Component();
                (() => {
                    this.addClass("slds-button");
                })();
            } else if(name === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let name : any = "Button";
                    super(name, "button");
                    this.component = new framework.builder.marshalling.Component();
                    (() => {
                        this.addClass("slds-button");
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public addIcon(icon : framework.lightning.SvgIcon) : Button {
            this.addClass("slds-button_icon");
            this.addChild$framework_JSContainer(icon);
            return this;
        }

        public setLabel(label : string) : Button {
            this.setHtml(label);
            return this;
        }

        public setState(state : string) : Button {
            for(let index1243=0; index1243 < Button.states_$LI$().length; index1243++) {
                let s = Button.states_$LI$()[index1243];
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

        public setParameter(key : string, value : string) {
            this.component.parameters[key] = value;
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
    }
    Button["__class"] = "framework.lightning.Button";
    Button["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    ButtonGroup["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
            this.headerMedia.addClass("slds-has-flexi-truncate");
            this.headerMedia.setCentered(true);
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
    Card["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    CheckBox["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.InputField","framework.Renderable"];


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
    CheckBoxButtonGroup["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class DockedComposerContainer extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-docked_container");
        }
    }
    DockedComposerContainer["__class"] = "framework.lightning.DockedComposerContainer";
    DockedComposerContainer["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class DropDown extends framework.JSContainer {
        public static SMALL : string = "slds-dropdown_small";

        public static XX_SMALL : string = "slds-dropdown_xx-small";

        public static X_SMALL : string = "slds-dropdown_x-small";

        public static MEDIUM : string = "slds-dropdown_medium";

        public static LARGE : string = "slds-dropdown_large";

        public static LEFT : string = "slds-dropdown_left";

        public static RIGHT : string = "slds-dropdown_right";

        public static BOTTOM : string = "slds-dropdown_bottom";

        /*private*/ ul : framework.JSContainer = new framework.JSContainer("ul").addClass("slds-dropdown__list");

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-dropdown");
            this.addChild$framework_JSContainer(this.ul);
        }

        public addItem(item : framework.lightning.DropDownItem) : DropDown {
            let li : framework.JSContainer = new framework.JSContainer("li").addClass("slds-dropdown__item").setAttribute("role", "presentation");
            this.ul.addChild$framework_JSContainer(li);
            li.addChild$framework_JSContainer(item);
            return this;
        }

        public setSize(size : string) : DropDown {
            this.removeClass(DropDown.SMALL);
            this.removeClass(DropDown.XX_SMALL);
            this.removeClass(DropDown.X_SMALL);
            this.removeClass(DropDown.MEDIUM);
            this.removeClass(DropDown.LARGE);
            this.addClass(size);
            return this;
        }

        public setPosition(position : string) : DropDown {
            this.removeClass(DropDown.LEFT).removeClass(DropDown.RIGHT).removeClass(DropDown.BOTTOM).addClass(position);
            return this;
        }
    }
    DropDown["__class"] = "framework.lightning.DropDown";
    DropDown["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class DropDownItem extends framework.JSContainer {
        /*private*/ label : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("span");

        /*private*/ txt : framework.JSContainer = new framework.JSContainer("span");

        public constructor(name : string, label : string) {
            super(name, "a");
            this.setAttribute("role", "menuitem");
            this.label.addClass("slds-truncate");
            this.label.setTag("span");
            this.label.setSvgClass("slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small");
            this.addChild$framework_JSContainer(this.label);
            this.label.addChild$framework_JSContainer(this.txt.setStyle("margin-left", "0.5rem"));
            this.setLabel(label);
        }

        public setIcon(name : string, type : string) {
            this.label.setIconName(name);
            this.label.setType(type);
        }

        public setLabel(label : string) {
            this.txt.setHtml(label);
        }
    }
    DropDownItem["__class"] = "framework.lightning.DropDownItem";
    DropDownItem["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class DropDownTrigger extends framework.JSContainer {
        /*private*/ open : boolean = false;

        public constructor(name : string, button : framework.JSContainer, dropdown : framework.lightning.DropDown) {
            super(name, "div");
            this.addClass("slds-dropdown-trigger");
            this.addClass("slds-dropdown-trigger_click");
            this.addChild$framework_JSContainer(button.addEventListener(new DropDownTrigger.DropDownTrigger$0(this), "click"));
            this.addChild$framework_JSContainer(dropdown);
        }
    }
    DropDownTrigger["__class"] = "framework.lightning.DropDownTrigger";
    DropDownTrigger["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace DropDownTrigger {

        export class DropDownTrigger$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                if(!this.__parent.open) {
                    this.__parent.addClass("slds-is-open");
                    this.__parent.open = true;
                } else {
                    this.__parent.removeClass("slds-is-open");
                    this.__parent.open = false;
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DropDownTrigger$0["__interfaces"] = ["framework.EventListener"];


    }

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
    FormElement["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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

        public setAlignSpread(b : boolean) : Grid {
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
    Grid["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class HorizontalList extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "ul");
            this.addClass("slds-list_horizontal");
        }
    }
    HorizontalList["__class"] = "framework.lightning.HorizontalList";
    HorizontalList["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class IconButton extends framework.JSContainer {
        /*private*/ icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("icon");

        static SMALL : string = "slds-button_icon-small";

        static EXTRA_SMALL : string = "slds-button_icon-x-small";

        static EXTRA_EXTRA_SMALL : string = "slds-button_icon-xx-small";

        public constructor(name : string) {
            super(name, "button");
            this.icon.setSvgClass("slds-button__icon");
            this.addChild$framework_JSContainer(this.icon);
            this.addClass("slds-button").addClass("slds-button_icon");
        }

        public getIcon() : framework.lightning.SvgIcon {
            return this.icon;
        }

        public setIcon(icon : framework.lightning.SvgIcon) : IconButton {
            this.getChildren().remove(this.icon);
            this.icon = icon;
            icon.setSvgClass("slds-button__icon");
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
    IconButton["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Lookup extends framework.JSContainer {
        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-form-element").addClass("slds-lookup");
        }
    }
    Lookup["__class"] = "framework.lightning.Lookup";
    Lookup["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    LTContainer["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    Media["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Modal extends framework.JSContainer {
        /*private*/ modalContainer : framework.JSContainer = new framework.JSContainer("div").addClass("slds-modal__container");

        /*private*/ header : framework.JSContainer = new framework.JSContainer("header").addClass("slds-modal__header");

        /*private*/ content : framework.JSContainer = new framework.JSContainer("div").addClass("slds-modal__content");

        /*private*/ footer : framework.JSContainer = new framework.JSContainer("footer").addClass("slds-modal__footer");

        /*private*/ closeButton : framework.lightning.IconButton = new framework.lightning.IconButton("closeButton");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("h2").addClass("slds-text-heading_medium slds-hyphenate");

        /*private*/ backdrop : framework.lightning.Backdrop = null;

        public constructor(name : string, stitle : string) {
            super(name, "div");
            this.addClass("slds-modal");
            this.setAttribute("role", "dialog").setAttribute("tabindex", "-1").setAttribute("aria-modal", "true");
            this.addChild$framework_JSContainer(this.modalContainer);
            this.modalContainer.addChild$framework_JSContainer(this.header);
            this.modalContainer.addChild$framework_JSContainer(this.content);
            this.modalContainer.addChild$framework_JSContainer(this.footer);
            this.closeButton.addClass("slds-modal__close");
            this.closeButton.setInverse(true);
            this.closeButton.getIcon().setIconName("close");
            this.header.addChild$framework_JSContainer(this.closeButton);
            this.header.addChild$framework_JSContainer(this.title);
            this.title.setHtml(stitle);
            this.closeButton.addEventListener(new Modal.Modal$0(this), "click");
            this.close();
        }

        public getBackdrop() : framework.lightning.Backdrop {
            return this.backdrop;
        }

        public setBackdrop(backdrop : framework.lightning.Backdrop) {
            this.backdrop = backdrop;
        }

        public open() {
            this.addClass("slds-fade-in-open");
            if(this.backdrop != null) {
                this.backdrop.open();
            }
            this.setVisible(true);
        }

        public close() {
            this.removeClass("slds-fade-in-open");
            if(this.backdrop != null) {
                this.backdrop.close();
            }
            this.setVisible(false);
        }

        public setLarge(b : boolean) : Modal {
            if(b) {
                this.addClass("slds-modal_large");
            } else {
                this.removeClass("slds-modal_large");
            }
            return this;
        }

        public setTitle(stitle : string) {
            this.title.setHtml(stitle);
        }

        public getTitle() : framework.JSContainer {
            return this.title;
        }

        public getModalContainer() : framework.JSContainer {
            return this.modalContainer;
        }

        public getHeader() : framework.JSContainer {
            return this.header;
        }

        public getContent() : framework.JSContainer {
            return this.content;
        }

        public getFooter() : framework.JSContainer {
            return this.footer;
        }

        public getCloseButton() : framework.lightning.IconButton {
            return this.closeButton;
        }
    }
    Modal["__class"] = "framework.lightning.Modal";
    Modal["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace Modal {

        export class Modal$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Modal$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.lightning {
    export class Section extends framework.JSContainer {
        /*private*/ titleContainer : framework.JSContainer = new framework.JSContainer("h3").addClass("slds-section__title");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-truncate");

        /*private*/ arrow : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("arrow", "utility", "switch");

        /*private*/ content : framework.JSContainer = new framework.JSContainer("div").addClass("slds-section__content");

        public constructor(name : string, title : string) {
            super(name, "div");
            this.addClass("slds-section");
            this.addChild$framework_JSContainer(this.titleContainer);
            this.arrow.setTag("button");
            this.arrow.setAttribute("class", "slds-button slds-section__title-action");
            this.arrow.setSvgClass("slds-section__title-action-icon slds-button__icon slds-button__icon_left");
            this.titleContainer.addChild$framework_JSContainer(this.arrow);
            this.arrow.addChild$framework_JSContainer(this.title.setHtml(title));
            this.addChild$framework_JSContainer(this.content);
            this.open();
        }

        public open() : Section {
            this.addClass("slds-is-open");
            return this;
        }

        public close() : Section {
            this.removeClass("slds-is-open");
            return this;
        }

        public setTitle(stitle : string) : Section {
            this.title.setHtml(stitle);
            return this;
        }

        public getContent() : framework.JSContainer {
            return this.content;
        }

        public getTitleContainer() : framework.JSContainer {
            return this.titleContainer;
        }
    }
    Section["__class"] = "framework.lightning.Section";
    Section["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Spinner extends framework.JSContainer {
        /*private*/ __framework_lightning_Spinner_html : string = "<div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div>";

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-spinner slds-spinner_medium");
            this.setAttribute("role", "status");
            this.setHtml(this.__framework_lightning_Spinner_html);
        }
    }
    Spinner["__class"] = "framework.lightning.Spinner";
    Spinner["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class SvgIcon extends framework.JSContainer {
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

        /*private*/ svgClass : string;

        public constructor(name? : any, type? : any, iconName? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null) && ((typeof iconName === 'string') || iconName === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "div");
                this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
                this.type = "utility";
                this.iconName = "settings";
                this.svgClass = "slds-icon";
                (() => {
                    this.type = type;
                    this.iconName = iconName;
                    this.refresh();
                })();
            } else if(((typeof name === 'string') || name === null) && type === undefined && iconName === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "div");
                this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
                this.type = "utility";
                this.iconName = "settings";
                this.svgClass = "slds-icon";
                (() => {
                    this.refresh();
                })();
            } else throw new Error('invalid overload');
        }

        public setSvgClass(cls : string) {
            this.svgClass = cls;
            this.refresh();
        }

        public refresh() {
            let html : string = "<svg class=\'" + this.svgClass + "\'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"" + this.assetsUrl + "/" + this.type + "-sprite/svg/symbols.svg#" + this.iconName + "\"></use></svg>";
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

        public setSize(size : string) : SvgIcon {
            this.removeClass(SvgIcon.EXTRA_EXTRA_SMALL).removeClass(SvgIcon.EXTRA_SMALL).removeClass(SvgIcon.LARGE).removeClass(SvgIcon.SMALL);
            this.addClass(size);
            return this;
        }

        public setTextType(type : string) : SvgIcon {
            this.removeClass(SvgIcon.TEXT_DEFAULT).removeClass(SvgIcon.TEXT_ERROR).removeClass(SvgIcon.TEXT_LIGHT).removeClass(SvgIcon.TEXT_WARNING).addClass(type);
            return this;
        }
    }
    SvgIcon["__class"] = "framework.lightning.SvgIcon";
    SvgIcon["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
            this.setVisible(b);
            return this;
        }

        public hide(b : boolean) : TabBody {
            return this.show(!b);
        }
    }
    TabBody["__class"] = "framework.lightning.TabBody";
    TabBody["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class TabItem extends framework.JSContainer implements framework.EventListener {
        /*private*/ __framework_lightning_TabItem_listeners : java.util.List<framework.lightning.TabActionListener> = <any>(new java.util.ArrayList<any>());

        public body : framework.lightning.TabBody;

        /*private*/ title : framework.JSContainer = new framework.JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");

        /*private*/ closeButton : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("close", "utility", "close");

        /*private*/ active : boolean = false;

        public constructor(name : string, body : framework.lightning.TabBody) {
            super(name, "li");
            this.body = null;
            this.body = body;
            body.setAttribute("aria-labelledby", this.getId());
            this.addChild$framework_JSContainer(this.title);
            this.title.setAttribute("aria-controls", body.getId());
            this.addClass("slds-tabs_default__item");
            this.addChild$framework_JSContainer(this.closeButton);
            this.closeButton.setSvgClass("slds-button__icon");
            this.closeButton.addClass("tab-close-button");
            this.closeButton.addEventListener(this, "click");
            this.title.addEventListener(this, "click");
            this.setActive(false);
            this.setClosable(false);
        }

        public setClosable(b : boolean) : TabItem {
            this.closeButton.setVisible(b);
            return this;
        }

        public addTabActionListener(listene : framework.lightning.TabActionListener) {
            this.__framework_lightning_TabItem_listeners.add(listene);
        }

        public close() : TabItem {
            this.fireClose();
            this.active = false;
            this.body.getParent().getChildren().remove(this.body);
            this.body.show(false);
            let currentIndex : number = this.getParent().getChildren().indexOf(this);
            this.getParent().getChildren().remove(this);
            this.getParent().setRendered(false);
            this.body.getParent().setRendered(false);
            if(this.getParent().getChildren().size() > 0) {
                if(currentIndex >= this.getParent().getChildren().size()) {
                    currentIndex = this.getParent().getChildren().size() - 1;
                }
                let item : TabItem = <TabItem>this.getParent().getChildren().get(currentIndex);
                item.setActive(true);
            }
            return this;
        }

        public isActive() : boolean {
            return this.active;
        }

        public fireClose() {
            for(let index1244=this.__framework_lightning_TabItem_listeners.iterator();index1244.hasNext();) {
                let li = index1244.next();
                {
                    li.onClose(this);
                }
            }
        }

        public fireActivate() {
            for(let index1245=this.__framework_lightning_TabItem_listeners.iterator();index1245.hasNext();) {
                let li = index1245.next();
                {
                    li.onActivate(this);
                }
            }
        }

        public fireDeActivate() {
            for(let index1246=this.__framework_lightning_TabItem_listeners.iterator();index1246.hasNext();) {
                let li = index1246.next();
                {
                    li.onDeactivate(this);
                }
            }
        }

        public setActive(b : boolean) : TabItem {
            this.active = b;
            if(b) {
                this.addClass("slds-active");
                this.title.setAttribute("aria-selected", "true");
                this.fireActivate();
            } else {
                this.removeClass("slds-active");
                this.title.setAttribute("aria-selected", "false");
                this.fireDeActivate();
            }
            this.body.show(b);
            return this;
        }

        public getBody() : framework.lightning.TabBody {
            return this.body;
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
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source,this.closeButton))) {
                this.close();
                return;
            }
            let tabs : framework.lightning.Tabs = <any>(source.getAncestorWithClass<any>("slds-tabs_default"));
            tabs.setActive(this);
        }
    }
    TabItem["__class"] = "framework.lightning.TabItem";
    TabItem["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.lightning.table {
    export class Paginator extends framework.JSContainer implements framework.EventListener {
        /*private*/ previous : framework.lightning.IconButton = new framework.lightning.IconButton("previous");

        public next : framework.lightning.IconButton = new framework.lightning.IconButton("next");

        /*private*/ pages : framework.JSContainer = new framework.JSContainer("pages").addClass("pages");

        /*private*/ numPages : number;

        /*private*/ table : framework.lightning.table.Table;

        maxItem : number = 8;

        public constructor(name : string) {
            super(name, "div");
            this.numPages = 0;
            this.table = null;
            this.setVisible(false);
            this.addClass("table-paginator");
            let leftGrp : framework.lightning.ButtonGroup = new framework.lightning.ButtonGroup("leftGrp");
            this.previous.getIcon().setIconName("left");
            this.previous.getIcon().setType("utility");
            this.next.getIcon().setIconName("right");
            this.next.getIcon().setType("utility");
            leftGrp.addButton$framework_lightning_IconButton(this.previous.setBorder(true)).addChild$framework_JSContainer(this.pages);
            leftGrp.addButton$framework_lightning_IconButton(this.next.setBorder(true));
            this.addChild$framework_JSContainer(leftGrp);
            this.previous.addEventListener(this, "click");
            this.next.addEventListener(this, "click");
        }

        public setTable(table : framework.lightning.table.Table) {
            this.table = table;
            this.pages.getChildren().clear();
            this.pages.setRendered(false);
            let pageSize : number = table.getPageSize();
            let model : framework.lightning.table.TableModel = table.getModel();
            this.numPages = Math.round((model.getRowCount() / pageSize|0));
            if(this.numPages <= 1) {
                this.setVisible(false);
                return;
            }
            this.setVisible(true);
            if(this.numPages < this.maxItem) {
                this.maxItem = this.numPages;
            }
            for(let i : number = 0; i < this.numPages; i++) {
                let btn : framework.lightning.Button = new framework.lightning.Button(i + "");
                btn.addEventListener(this, "click");
                btn.setState(framework.lightning.Button.STATE_NEUTRAL);
                btn.setLabel((i + 1) + "");
                this.pages.addChild$framework_JSContainer(btn);
                if(i >= this.maxItem) {
                    btn.setVisible(false);
                }
                if(i === 0) {
                    btn.addClass("slds-button_brand");
                }
            };
            this.pages.getChildren().get(0).setStyle("border-left", "none").setStyle("border-radius", "0");
            this.pages.getChildren().get(this.pages.getChildren().size() - 1).setStyle("border-right", "none").setStyle("border-radius", "0");
        }

        /*private*/ redisplayBtns(currentPage : number) {
            if(currentPage >= this.maxItem) {
                let rangeFrom : number = currentPage - this.maxItem;
                for(let i : number = 0; i < this.pages.getChildren().size(); i++) {
                    if(i <= rangeFrom) {
                        this.pages.getChildren().get(i).setVisible(false);
                    } else if(i > currentPage) {
                        this.pages.getChildren().get(i).setVisible(false);
                    } else {
                        this.pages.getChildren().get(i).setVisible(true);
                    }
                    if(i === currentPage) {
                        this.pages.getChildren().get(i).addClass("slds-button_brand");
                    } else {
                        this.pages.getChildren().get(i).removeClass("slds-button_brand");
                    }
                };
            } else {
                for(let i : number = 0; i < this.pages.getChildren().size(); i++) {
                    if(i === currentPage) {
                        this.pages.getChildren().get(i).addClass("slds-button_brand");
                    } else {
                        this.pages.getChildren().get(i).removeClass("slds-button_brand");
                    }
                };
            }
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let currentPage : number = 0;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source.getName(),"previous"))) {
                currentPage = this.table.getPage();
                if(currentPage > 0) {
                    currentPage = currentPage - 1;
                    this.table.setPage(currentPage);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source.getName(),"next"))) {
                currentPage = this.table.getPage();
                if(currentPage < this.numPages - 1) {
                    currentPage = currentPage + 1;
                    this.table.setPage(currentPage);
                }
            } else {
                currentPage = javaemul.internal.IntegerHelper.parseInt(source.getName());
                this.table.setPage(currentPage);
            }
            this.redisplayBtns(currentPage);
        }
    }
    Paginator["__class"] = "framework.lightning.table.Paginator";
    Paginator["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.lightning.table {
    export class Table extends framework.JSContainer {
        /*private*/ thead : framework.JSContainer = new framework.JSContainer("thead");

        /*private*/ tbody : framework.JSContainer = new framework.JSContainer("tbody");

        /*private*/ tfoot : framework.JSContainer = new framework.JSContainer("tfoot");

        /*private*/ model : framework.lightning.table.TableModel;

        /*private*/ tableCellRenderer : framework.lightning.table.TableCellRenderer = new framework.lightning.table.DefaultTableCellRenderer();

        /*private*/ tableColumnModel : framework.lightning.table.TableColumnModel = new framework.lightning.table.DefaultTableColumnModel();

        /*private*/ currrentPage : number = 0;

        /*private*/ pageSize : number = 10;

        ftr : framework.JSContainer = new framework.JSContainer("tr");

        ftd : framework.JSContainer = new framework.JSContainer("td");

        /*private*/ paginator : framework.lightning.table.Paginator = new framework.lightning.table.Paginator("paginator");

        /*private*/ selectable : boolean = false;

        /*private*/ multiSelectable : boolean = false;

        /*private*/ selecteRowOn : string = "click";

        /*private*/ emptyTableMessage : string = "No data available";

        /*private*/ rowsSelectionListeners : java.util.List<framework.lightning.table.TableRowsSelectionListener> = <any>(new java.util.LinkedList<any>());

        static SELECT_ROW_EVT : framework.EventListener; public static SELECT_ROW_EVT_$LI$() : framework.EventListener { if(Table.SELECT_ROW_EVT == null) Table.SELECT_ROW_EVT = new Table.Table$0(); return Table.SELECT_ROW_EVT; };

        public constructor(name : string) {
            super(name, "table");
            this.model = null;
            this.addClass("slds-table");
            this.addChild$framework_JSContainer(this.thead);
            this.addChild$framework_JSContainer(this.tbody);
            this.addChild$framework_JSContainer(this.tfoot);
            this.tfoot.addChild$framework_JSContainer(this.ftr.addChild$framework_JSContainer(this.ftd));
            this.ftd.addChild$framework_JSContainer(this.paginator);
            this.setBordered(true);
            this.tbody.setStyle("min-height", "250px");
            this.loading();
        }

        public addRowsSelectionListener(l : framework.lightning.table.TableRowsSelectionListener) {
            this.rowsSelectionListeners.add(l);
        }

        public fireRowsSelectionListeners(source : framework.JSContainer, evt : Event, firstIndex : number, lastIndex : number) {
            for(let index1247=this.rowsSelectionListeners.iterator();index1247.hasNext();) {
                let l = index1247.next();
                {
                    l.onSelectRow(source, evt, this, firstIndex, lastIndex);
                }
            }
        }

        public setSelectRowOn(on : string) {
            this.selecteRowOn = on;
        }

        /*private*/ addEmptyRow() : framework.JSContainer {
            this.tbody.getChildren().clear();
            let tr : framework.JSContainer = new framework.JSContainer("tr");
            let td : framework.JSContainer = new framework.JSContainer("td").setAttribute("colspan", "1000");
            tr.addChild$framework_JSContainer(td);
            tr.addClass("empty-row");
            this.tbody.addChild$framework_JSContainer(tr);
            return td;
        }

        /*private*/ loading() {
            this.addEmptyRow().addChild$framework_JSContainer(new framework.lightning.Spinner("spinner"));
        }

        /*private*/ emptyData() {
            this.addEmptyRow().addChild$framework_JSContainer(new framework.JSContainer("p").setHtml(this.emptyTableMessage));
        }

        public getModel() : framework.lightning.table.TableModel {
            return this.model;
        }

        public setModel(model : framework.lightning.table.TableModel) {
            this.model = model;
        }

        public getTableCellRenderer() : framework.lightning.table.TableCellRenderer {
            return this.tableCellRenderer;
        }

        public setTableCellRenderer(tableCellRenderer : framework.lightning.table.TableCellRenderer) {
            this.tableCellRenderer = tableCellRenderer;
        }

        public getTableColumnModel() : framework.lightning.table.TableColumnModel {
            return this.tableColumnModel;
        }

        public setTableColumnModel(tableColumnModel : framework.lightning.table.TableColumnModel) {
            this.tableColumnModel = tableColumnModel;
        }

        public getThead() : framework.JSContainer {
            return this.thead;
        }

        public getTbody() : framework.JSContainer {
            return this.tbody;
        }

        public setPage(page : number) {
            this.currrentPage = page;
            this.refreshData();
        }

        public getPage() : number {
            return this.currrentPage;
        }

        public getPageSize() : number {
            return this.pageSize;
        }

        public setPageSize(size : number) {
            this.pageSize = size;
            this.refreshData();
        }

        public refreshData() {
            this.tbody.getChildren().clear();
            this.tbody.setRendered(false);
            let rows : number = this.model.getRowCount();
            let cols : number = this.tableColumnModel.getColumnCount();
            let iterSize : number = this.pageSize;
            if(rows < this.pageSize) {
                iterSize = rows;
            }
            if(rows === 0) {
                this.emptyData();
            } else {
                for(let row : number = 0; row < iterSize; row++) {
                    let realRow : number = (this.currrentPage * this.pageSize) + row;
                    if(realRow >= rows) {
                        break;
                    }
                    let tr : framework.JSContainer = new framework.JSContainer("tr");
                    if(this.selectable) {
                        tr.addEventListener(Table.SELECT_ROW_EVT_$LI$(), this.selecteRowOn);
                    }
                    this.tbody.addChild$framework_JSContainer(tr.addClass("slds-hint-parent"));
                    for(let col : number = 0; col < cols; col++) {
                        let value : any = this.model.getValueAt(realRow, col);
                        let cell : framework.Renderable = this.tableCellRenderer.getComponent(this, value, row, col);
                        let td : framework.JSContainer = new framework.JSContainer("td").addClass("slds-cell-wrap").setAttribute("role", "gridcell");
                        if(value != null && (typeof value === 'boolean')) {
                            td.addClass("boolean-cell");
                        } else if(value != null && (typeof value === 'number')) {
                            td.addClass("numeric-cell");
                        }
                        td.addClass("col_" + col);
                        tr.addChild$framework_JSContainer(td);
                        tr.addClass("row_" + row);
                        td.addChild$framework_JSContainer(<framework.JSContainer><any>cell);
                    };
                };
            }
            this.paginator.setTable(this);
            this.tfoot.setAttribute("colspan", cols + "");
            this.ftd.setAttribute("colspan", cols + "");
            this.ftr.setAttribute("colspan", cols + "");
        }

        public getRow(index : number) : framework.JSContainer {
            return this.tbody.getChildren().get(index);
        }

        public getBody() : framework.JSContainer {
            return this.tbody;
        }

        public setSelectable(b : boolean) {
            this.selectable = b;
        }

        public isSelectable() : boolean {
            return this.selectable;
        }

        public setMultiSelectable(b : boolean) {
            this.multiSelectable = b;
        }

        public isMultiSelectable() : boolean {
            return this.multiSelectable;
        }

        public refreshColumns() {
            this.thead.getChildren().clear();
            this.thead.setRendered(false);
            let tr : framework.JSContainer = new framework.JSContainer("tr").addClass("slds-text-title_caps");
            this.thead.addChild$framework_JSContainer(tr);
            for(let i : number = 0; i < this.tableColumnModel.getColumnCount(); i++) {
                let col : framework.lightning.table.TableColumn = this.tableColumnModel.getColumn(i);
                tr.addChild$framework_JSContainer(col);
            };
        }

        public setBordered(b : boolean) : Table {
            this.setFeature("slds-table_bordered", b);
            return this;
        }

        public setFixedLayout(b : boolean) : Table {
            this.setFeature("slds-table_fixed-layout", b);
            return this;
        }

        public setResizableCol(b : boolean) : Table {
            this.setFeature("slds-table_resizable-cols", b);
            return this;
        }

        setFeature(cls : string, b : boolean) {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
        }

        public setColBordered(b : boolean) : Table {
            this.setFeature("slds-table_col-bordered", b);
            return this;
        }

        public setCellBuffered(b : boolean) : Table {
            this.setFeature("slds-table_cell-buffer", b);
            return this;
        }

        public setHasTopMagnet(b : boolean) : Table {
            this.setFeature("slds-has-top-magnet", b);
            return this;
        }

        public setHasNoRowHover(b : boolean) : Table {
            this.setFeature("slds-no-row-hover", b);
            return this;
        }

        public setStriped(b : boolean) : Table {
            this.setFeature("slds-table_striped", b);
            return this;
        }
    }
    Table["__class"] = "framework.lightning.table.Table";
    Table["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace Table {

        export class Table$0 implements framework.EventListener {
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let index : number = source.getParent().getChildren().indexOf(source);
                alert("selected row index: " + index);
                let table : framework.lightning.table.Table = <framework.lightning.table.Table>source.getParent().getParent();
                let page : number = table.currrentPage;
                index = (page * table.pageSize) + index;
                table.fireRowsSelectionListeners(source, evt, index, index);
            }

            constructor() {
            }
        }
        Table$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.lightning.table {
    export class TableColumn extends framework.JSContainer {
        identifier : any;

        /*private*/ title : framework.JSContainer = new framework.JSContainer("div").addClass("slds-truncate");

        public constructor(name : string, identifier : any, label : string) {
            super(name, "th");
            this.identifier = null;
            this.identifier = identifier;
            this.addChild$framework_JSContainer(this.title);
            this.setLabel(label);
            this.setAttribute("scope", "col");
        }

        public getIdentifier() : any {
            return this.identifier;
        }

        public setWidth(width : string) : TableColumn {
            this.title.setStyle("width", width);
            return this;
        }

        public setLabel(title : string) : TableColumn {
            this.title.setHtml(title);
            return this;
        }

        setFeature(cls : string, b : boolean) {
            if(b) {
                this.addClass(cls);
            } else {
                this.removeClass(cls);
            }
        }
    }
    TableColumn["__class"] = "framework.lightning.table.TableColumn";
    TableColumn["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
            for(let index1248=this.getItems().iterator();index1248.hasNext();) {
                let tab = index1248.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(item.getId(),tab.getId()))) {
                        if(!tab.isActive()) {
                            tab.setActive(true);
                        }
                    } else {
                        if(tab.isActive()) {
                            tab.setActive(false);
                        }
                    }
                }
            }
            return this;
        }

        public getTab(body : framework.lightning.TabBody) : framework.lightning.TabItem {
            for(let index1249=this.getItems().iterator();index1249.hasNext();) {
                let c = index1249.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getBody(),body))) {
                        return c;
                    }
                }
            }
            return null;
        }

        public getActiveTab() : framework.lightning.TabItem {
            for(let index1250=this.getItems().iterator();index1250.hasNext();) {
                let item = index1250.next();
                {
                    if(item.isActive()) {
                        return item;
                    }
                }
            }
            return null;
        }

        public getItems() : java.util.List<framework.lightning.TabItem> {
            return <java.util.List<any>><any>this.nav.getChildren();
        }
    }
    Tabs["__class"] = "framework.lightning.Tabs";
    Tabs["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    Text["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework {
    export class TextComponent extends framework.JSContainer {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }
    }
    TextComponent["__class"] = "framework.TextComponent";
    TextComponent["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework {
    export class TreeItem extends framework.JSContainer implements framework.EventListener {
        /*private*/ button : framework.JSContainer = new framework.JSContainer("button").addClass("slds-button slds-button_icon slds-button_icon slds-m-right_x-small");

        /*private*/ iconRight : string = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";

        /*private*/ iconDown : string = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-truncate");

        /*private*/ __open : boolean = false;

        /*private*/ buttons : java.util.List<framework.lightning.IconButton> = <any>(new java.util.LinkedList<any>());

        /*private*/ buttonsCtn : framework.JSContainer = new framework.JSContainer("div").addClass("buttons-ctn");

        /*private*/ leftIcon : framework.lightning.IconButton = new framework.lightning.IconButton("leftIcon");

        public constructor(name : string, title : string) {
            super(name, "div");
            this.addClass("slds-tree__item");
            this.addChild$framework_JSContainer(this.button.setStyle("margin", "0px"));
            this.button.setHtml(this.iconRight);
            this.addChild$framework_JSContainer(this.leftIcon.addClass("left-icon"));
            this.leftIcon.setStyle("margin-right", "0.25rem");
            this.addChild$framework_JSContainer(this.title.setHtml(title));
            this.button.addEventListener(this, "click");
            this.addChild$framework_JSContainer(this.buttonsCtn);
            this.setLeftIcon$java_lang_String$java_lang_String("file", "utility");
        }

        public setLeftIcon$java_lang_String$java_lang_String(name : string, type : string) : TreeItem {
            this.leftIcon.setIcon(new framework.lightning.SvgIcon(name, type, name));
            return this;
        }

        public setLeftIcon(name? : any, type? : any) : any {
            if(((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null)) {
                return <any>this.setLeftIcon$java_lang_String$java_lang_String(name, type);
            } else if(((typeof name === 'string') || name === null) && type === undefined) {
                return <any>this.setLeftIcon$java_lang_String(name);
            } else throw new Error('invalid overload');
        }

        public setLeftIcon$java_lang_String(name : string) : TreeItem {
            this.leftIcon.setIcon(new framework.lightning.ImageIcon(name, "https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif"));
            return this;
        }

        public addIcon(name : string, type : string, listener : framework.EventListener) {
            let minimize : framework.lightning.IconButton = new framework.lightning.IconButton(name);
            minimize.setIcon(new framework.lightning.SvgIcon(name, type, name));
            this.buttonsCtn.addChild$framework_JSContainer(minimize);
            minimize.addEventListener(listener, "click");
            this.buttons.add(minimize);
        }

        public getButton() : framework.JSContainer {
            return this.button;
        }

        public open() {
            this.__open = true;
            this.button.setHtml(this.iconDown);
            if(this.getParent().getChildren().size() > 1) {
                this.getParent().getChildren().get(1).setStyle("display", "block");
            }
        }

        public close() {
            this.__open = false;
            this.button.setHtml(this.iconRight);
            if(this.getParent().getChildren().size() > 1) {
                this.getParent().getChildren().get(1).setStyle("display", "none");
            }
        }

        public select(b : boolean) {
            if(b) {
                this.addClass("slds-is-selected");
            } else {
                this.removeClass("slds-is-selected");
            }
        }

        public setFocus(b : boolean) {
            if(b) {
                this.addClass("slds-is-focused");
            } else {
                this.removeClass("slds-is-focused");
            }
        }

        public leaf(b : boolean) {
            if(b) {
                this.button.addClass("slds-is-disabled");
            } else {
                this.button.removeClass("slds-is-disabled");
            }
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            if(this.__open) this.close(); else this.open();
        }
    }
    TreeItem["__class"] = "framework.TreeItem";
    TreeItem["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.builder {
    export class BasicComponent extends framework.builder.Component {
        public constructor(name : string, initial : string, label : string) {
            super("html:" + name, initial, label);
            this.addClass("designer-component");
        }
    }
    BasicComponent["__class"] = "framework.builder.BasicComponent";
    BasicComponent["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];


}
namespace framework.builder.editors {
    export class EventEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> {
        component : framework.JSContainer = new framework.JSContainer("label");

        events : framework.JSSelect = new framework.JSSelect("events");

        /*private*/ root : framework.design.Designable;

        /*private*/ editor : framework.builder.editors.JavascriptEditor = new framework.builder.editors.JavascriptEditor("sd", null);

        /*private*/ justSaved : string = "";

        public constructor(name : string, root : framework.design.Designable, veditor : framework.builder.editors.VisualEditor) {
            super(name, "div", veditor);
            this.root = null;
            this.editor.setRootEditor(veditor);
            let grid : framework.lightning.Grid = new framework.lightning.Grid("", "div");
            this.addChild$framework_JSContainer(grid);
            let colLeft : framework.JSContainer = new framework.JSContainer("div");
            let colRight : framework.JSContainer = new framework.JSContainer("div");
            grid.addChild$framework_JSContainer(colLeft.addClass("slds-col"));
            grid.addChild$framework_JSContainer(colRight.addClass("slds-col"));
            this.root = root;
            for(let index1251=0; index1251 < framework.builder.editors.EventTypes.events_$LI$().length; index1251++) {
                let s = framework.builder.editors.EventTypes.events_$LI$()[index1251];
                this.events.addOption(new framework.JSOption(/* replace */s.split("on").join(""), /* replace */s.split("on").join("")))
            }
            colLeft.addChild$framework_JSContainer(this.component.setStyle("width", "100%"));
            colRight.addChild$framework_JSContainer(this.events.setStyle("width", "100%"));
            this.events.addEventListener(new EventEditor.EventEditor$0(this), "focus");
            this.events.addEventListener(new EventEditor.EventEditor$1(this, root), "change");
            this.addChild$framework_JSContainer(this.editor);
        }

        public fillValue(des : framework.design.Designable, updEvtSelect : boolean) {
            let s : boolean = false;
            this.component.setHtml(des.getName());
            if(!updEvtSelect) {
                let listeners : java.util.List<framework.EventListener> = des.getListeners().get(this.events.getValue());
                if(listeners != null) {
                    for(let index1252=listeners.iterator();index1252.hasNext();) {
                        let e = index1252.next();
                        {
                            if(e != null && e instanceof <any>framework.builder.BuilderEventListener) {
                                let bel : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>e;
                                this.editor.setValue$java_lang_String(bel.getSource());
                                if(this.editor.getEditor() != null) {
                                    this.editor.getEditor().setValue(bel.getSource());
                                } else {
                                }
                                s = true;
                            }
                        }
                    }
                }
                if(!s) {
                    if(this.editor != null && this.editor.getEditor() != null) {
                        this.editor.getEditor().setValue("");
                        this.editor.setValue$java_lang_String("");
                    }
                }
            }
            let last : string = "click";
            let lastSrc : string = this.getSource(des, last);
            for(let index1253=this.events.getChildren().iterator();index1253.hasNext();) {
                let opt = index1253.next();
                {
                    let option : framework.JSOption = <framework.JSOption>opt;
                    let type : string = option.getValue();
                    let src : string = this.getSource(des, type);
                    if(src != null && src.trim().length > 0) {
                        option.setStyle("font-weight", "bold");
                        last = type;
                        lastSrc = src;
                    } else {
                        option.setStyle("font-weight", "normal");
                    }
                }
            }
            if(updEvtSelect && !s) {
                this.events.setValue$java_lang_String(last);
                this.editor.setValue$java_lang_String(lastSrc);
                if(this.editor.getEditor() != null) {
                    this.editor.getEditor().setValue(lastSrc);
                } else {
                }
            }
        }

        public getSource(des : framework.design.Designable, type : string) : string {
            let listeners : java.util.List<framework.EventListener> = des.getListeners().get(type);
            if(listeners != null) {
                for(let index1254=listeners.iterator();index1254.hasNext();) {
                    let l = index1254.next();
                    {
                        if(l != null && l instanceof <any>framework.builder.BuilderEventListener) {
                            let evt : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>l;
                            return evt.getSource();
                        }
                    }
                }
            }
            return null;
        }

        public reactivate() {
            this.setDesignable(this.findDesignableById(this.root, this.component.getAttribute("desid")));
        }

        public setDesignable(designable : framework.design.Designable) {
            this.component.setAttribute("desid", designable.getId());
            this.fillValue(designable, true);
        }

        /*private*/ findDesignableById(parent : framework.design.Designable, id : string) : framework.design.Designable {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(parent.getId(),id))) {
                return parent;
            }
            for(let index1255=parent.getDesignables().iterator();index1255.hasNext();) {
                let des = index1255.next();
                {
                    let res : framework.design.Designable = this.findDesignableById(des, id);
                    if(res != null) {
                        return res;
                    }
                }
            }
            return null;
        }

        public save$() {
            let type : string = this.events.getValue();
            this.save$java_lang_String(type);
            this.clean();
        }

        public save$java_lang_String(type : string) {
            let componentId : string = this.component.getAttribute("desid");
            let src : string = this.editor.getEditor().getValue();
            let des : framework.design.Designable = this.findDesignableById(this.root, componentId);
            if(des != null) {
                let listeners : java.util.List<framework.EventListener> = des.getListeners().get(type);
                if(listeners != null) {
                    for(let index1256=listeners.iterator();index1256.hasNext();) {
                        let l = index1256.next();
                        {
                            if(l != null && l instanceof <any>framework.builder.BuilderEventListener) {
                                let evt : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>l;
                                evt.setSource(src);
                                return;
                            }
                        }
                    }
                    let l : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(src);
                    des.addEventListener(l, type);
                } else {
                    let l : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(src);
                    des.addEventListener(l, type);
                }
            }
        }

        public save(type? : any) : any {
            if(((typeof type === 'string') || type === null)) {
                return <any>this.save$java_lang_String(type);
            } else if(type === undefined) {
                return <any>this.save$();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {string}
         */
        public getMarshall() : string {
            return null;
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        public createNew(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            return null;
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        public unmarshall(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            return null;
        }

        public consume$framework_builder_marshalling_Component(data : framework.builder.marshalling.Component) {
        }

        /**
         * 
         * @param {framework.builder.marshalling.Component} data
         */
        public consume(data? : any) : any {
            if(((data != null && data instanceof <any>framework.builder.marshalling.Component) || data === null)) {
                return <any>this.consume$framework_builder_marshalling_Component(data);
            } else if(((data != null) || data === null)) {
                return <any>this.consume$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }
    }
    EventEditor["__class"] = "framework.builder.editors.EventEditor";
    EventEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];



    export namespace EventEditor {

        export class EventEditor$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.__parent.justSaved,this.__parent.events.getValue()))) {
                    this.__parent.justSaved = this.__parent.events.getValue();
                    this.__parent.save(this.__parent.events.getValue());
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        EventEditor$0["__interfaces"] = ["framework.EventListener"];



        export class EventEditor$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let id : string = this.__parent.component.getAttribute("desid");
                let des : framework.design.Designable = this.__parent.findDesignableById(this.root, id);
                this.__parent.fillValue(des, false);
            }

            constructor(__parent: any, private root: any) {
                this.__parent = __parent;
            }
        }
        EventEditor$1["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.editors {
    export class VisualEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> {
        /*private*/ selectedItem : framework.design.Designable;

        /*private*/ root : framework.design.Designable;

        /*private*/ selector : framework.builder.Selector;

        /*private*/ composers : framework.JSContainer = new framework.JSContainer("composers", "div");

        /*private*/ propertiesDockedComposer : framework.builder.properties.PropertiesDockedComposer = new framework.builder.properties.PropertiesDockedComposer("properties");

        /*private*/ libraryDockedComposer : framework.builder.libraries.LibrariesDockedComposer = new framework.builder.libraries.LibrariesDockedComposer("library");

        /*private*/ structureDockedComposer : framework.builder.editors.StructureDockedComposer;

        /*private*/ templates : framework.JSContainer = new framework.JSContainer("div").setVisible(false);

        public constructor(name : string) {
            super(name, "div", null);
            this.selectedItem = null;
            this.root = null;
            this.selector = null;
            this.structureDockedComposer = null;
            this.addClass("visual-editor");
            this.setRootEditor(this);
            this.addChild$framework_JSContainer(this.composers);
            this.composers.addClass("composers");
            this.composers.addChild$framework_JSContainer(this.propertiesDockedComposer);
            this.composers.addChild$framework_JSContainer(this.libraryDockedComposer);
            this.propertiesDockedComposer.setStyle("left", "1064px");
            this.libraryDockedComposer.setStyle("left", "1040px").setStyle("top", "301px");
            this.selector = new framework.builder.Selector();
            this.selector.setVisualEditor(this);
            this.addChild$framework_JSContainer(this.selector);
            this.addChild$framework_JSContainer(this.templates);
        }

        public getRootItem() : framework.design.Designable {
            return this.root;
        }

        public getSelectedItem() : framework.design.Designable {
            return this.selectedItem;
        }

        public selectItem(designable : framework.design.Designable) {
            this.propertiesDockedComposer.selectComponent(designable);
        }

        /*private*/ willAdd : framework.builder.Component = null;

        public setWillAddComponent(component : framework.builder.Component) {
            if(this.willAdd != null) {
                this.willAdd.removeClass("selected");
            }
            this.willAdd = component;
            if(component == null) {
                this.removeClass("add-mode");
            } else {
                this.willAdd.addClass("selected");
                this.addClass("add-mode");
            }
        }

        public addNewComponent$framework_builder_Component$framework_design_Designable(component : framework.builder.Component, designable : framework.design.Designable) {
            let factory : framework.builder.marshalling.ComponentFactory = component.getFactory();
            let container : framework.design.Designable = factory.build(new framework.builder.marshalling.Component(), true);
            this.addNewComponent$framework_design_Designable$framework_design_Designable(container, designable);
        }

        public addNewComponent(component? : any, designable? : any) : any {
            if(((component != null && component instanceof <any>framework.builder.Component) || component === null) && ((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null)) {
                return <any>this.addNewComponent$framework_builder_Component$framework_design_Designable(component, designable);
            } else if(((component != null && (component["__interfaces"] != null && component["__interfaces"].indexOf("framework.design.Designable") >= 0 || component.constructor != null && component.constructor["__interfaces"] != null && component.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || component === null) && ((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null)) {
                return <any>this.addNewComponent$framework_design_Designable$framework_design_Designable(component, designable);
            } else throw new Error('invalid overload');
        }

        public addNewComponent$framework_design_Designable$framework_design_Designable(container : framework.design.Designable, designable : framework.design.Designable) {
            try {
                designable.addDesignable(container);
                container.addEventListener(new framework.builder.SelectComponentEvent(this.selector), "click");
            } catch(e) {
                alert(e.message);
            };
            this.setWillAddComponent(null);
            this.getStructure().reload$framework_design_Designable(designable);
            this.getStructure().render();
        }

        public getWillAddComponent() : framework.builder.Component {
            return this.willAdd;
        }

        public getProject() : framework.builder.data.File {
            return this.file;
        }

        /**
         * 
         * @return {string}
         */
        public getMarshall() : string {
            let marshall : string = JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(this.root));
            return marshall;
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        public createNew(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            let component : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            component.impl = "html:div";
            component.parameters["name"] = f.getName();
            return component;
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {framework.builder.marshalling.Component}
         */
        public unmarshall(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            let c : Object = <Object>JSON.parse(f.getData());
            let cc : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.toComponent$jsweet_lang_Object(c);
            return cc;
        }

        public cona(component : framework.builder.marshalling.Component) : framework.design.Designable {
            this.templates.getChildren().clear();
            this.templates.setRendered(false);
            for(let index1257=this.file.getTemplates().iterator();index1257.hasNext();) {
                let temp = index1257.next();
                {
                    let t : framework.builder.editors.JSTemplate = new framework.builder.editors.JSTemplate(temp);
                    this.templates.addChild$framework_JSContainer(t);
                }
            }
            let des : framework.design.Designable = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, true);
            des.addEventListener(new framework.builder.SelectComponentEvent(this.selector), "click");
            if(component.children != null) {
                for(let index1258=0; index1258 < component.children.length; index1258++) {
                    let c = component.children[index1258];
                    {
                        let child : framework.design.Designable = this.cona(c);
                        des.addDesignable(child);
                    }
                }
            }
            return des;
        }

        public consume$framework_builder_marshalling_Component(component : framework.builder.marshalling.Component) {
            this.root = this.cona(component);
            this.addChild$framework_JSContainer(<framework.JSContainer><any>this.root);
            this.structureDockedComposer = new framework.builder.editors.StructureDockedComposer("strucutru", this.root, this.file, this.selector);
            this.composers.addChild$framework_JSContainer(this.structureDockedComposer);
            this.structureDockedComposer.setStyle("left", "0px");
        }

        /**
         * 
         * @param {framework.builder.marshalling.Component} component
         */
        public consume(component? : any) : any {
            if(((component != null && component instanceof <any>framework.builder.marshalling.Component) || component === null)) {
                return <any>this.consume$framework_builder_marshalling_Component(component);
            } else if(((component != null) || component === null)) {
                return <any>this.consume$java_lang_Object(component);
            } else throw new Error('invalid overload');
        }

        public getStructure() : framework.builder.editors.Structure {
            if(this.structureDockedComposer != null) return this.structureDockedComposer.getStructure();
            return null;
        }

        public getSelector() : framework.builder.Selector {
            return this.selector;
        }
    }
    VisualEditor["__class"] = "framework.builder.editors.VisualEditor";
    VisualEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableBlockComponent extends framework.designables.JSDesignable {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = super.getParameters();
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Html", "Basic");
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            tagParam.options.add(new framework.design.Option("div", "div"));
            tagParam.options.add(new framework.design.Option("abbr", "abbr"));
            tagParam.options.add(new framework.design.Option("address", "address"));
            tagParam.options.add(new framework.design.Option("article", "article"));
            tagParam.options.add(new framework.design.Option("aside", "aside"));
            tagParam.options.add(new framework.design.Option("cite", "cite"));
            tagParam.options.add(new framework.design.Option("blockquote", "blockquote"));
            tagParam.options.add(new framework.design.Option("dl", "dl"));
            tagParam.options.add(new framework.design.Option("fieldset", "fieldset"));
            tagParam.options.add(new framework.design.Option("figure", "figure"));
            tagParam.options.add(new framework.design.Option("footer", "footer"));
            tagParam.options.add(new framework.design.Option("header", "header"));
            tagParam.options.add(new framework.design.Option("hgroup", "hgroup"));
            tagParam.options.add(new framework.design.Option("nav", "nav"));
            tagParam.options.add(new framework.design.Option("pre", "pre"));
            tagParam.options.add(new framework.design.Option("section", "section"));
            params.add(tagParam);
            params.add(textParam);
            return params;
        }
    }
    JSDesignableBlockComponent["__class"] = "framework.designables.JSDesignableBlockComponent";
    JSDesignableBlockComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableBuilderComponent extends framework.designables.JSDesignable {
        /*private*/ content : framework.design.Designable;

        public constructor(name : string) {
            super(name, "div");
            this.content = null;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            super.applyParam(key, value);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"component"))) {
                this.getChildren().clear();
                this.setRendered(false);
                let project : framework.builder.data.File = null;
                if(framework.builder.Builder.getInstance() != null) {
                    project = framework.builder.Builder.getInstance().getProject();
                } else {
                    project = framework.builder.Previewer.project;
                }
                for(let index1259=project.getChild("components").getChildren().iterator();index1259.hasNext();) {
                    let f = index1259.next();
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(f.getName(),value))) {
                            this.content = framework.builder.marshalling.MarshallUtil.build(f.getData());
                            this.addChild$framework_JSContainer(<framework.JSContainer><any>this.content);
                            for(let index1260=f.getStylesheets().iterator();index1260.hasNext();) {
                                let sc = index1260.next();
                                {
                                    let elem : HTMLElement = document.createElement("style");
                                    elem.textContent = sc.getData();
                                    document.body.appendChild(elem);
                                }
                            }
                            for(let index1261=f.getScripts().iterator();index1261.hasNext();) {
                                let sc = index1261.next();
                                {
                                    let elem : HTMLElement = document.createElement("script");
                                    elem.textContent = sc.getData();
                                    document.body.appendChild(elem);
                                }
                            }
                            for(let index1262=f.getTemplates().iterator();index1262.hasNext();) {
                                let sc = index1262.next();
                                {
                                    let elem : HTMLElement = document.createElement("div");
                                    elem.setAttribute("id", sc.getName());
                                    elem.innerHTML = sc.getData();
                                    elem.style.display = "none";
                                    document.body.appendChild(elem);
                                }
                            }
                        }
                    }
                }
            }
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            return <any>(new java.util.LinkedList<any>());
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = super.getParameters();
            let component : framework.design.AttributeParameter = new framework.design.AttributeParameter("component", "Component Src", "Basic");
            let project : framework.builder.data.File = framework.builder.Builder.getInstance().getProject();
            component.options.add(new framework.design.Option("None", ""));
            for(let index1263=project.getChild("components").getChildren().iterator();index1263.hasNext();) {
                let f = index1263.next();
                {
                    component.options.add(new framework.design.Option(f.getName(), f.getName()));
                }
            }
            parameters.add(component);
            return parameters;
        }
    }
    JSDesignableBuilderComponent["__class"] = "framework.designables.JSDesignableBuilderComponent";
    JSDesignableBuilderComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework {
    export class JSHTMLFragment extends framework.designables.JSDesignable {
        public context : Object = <Object>new Object();

        public constructor(name : string, template : string) {
            super(name, "div");
            this.setTemplate(template);
        }

        public getTemplate() : string {
            return this.getAttribute("template");
        }

        public setTemplate(template : string) {
            this.setAttribute("template", template);
            this.setRendered(false);
        }

        public getContext() : Object {
            return this.context;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            super.applyParam(key, value);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "template")) {
                this.setTemplate(value);
            }
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = super.getParameters();
            let templates : framework.design.AttributeParameter = new framework.design.AttributeParameter("template", "Template", "Basic");
            let project : framework.builder.data.File = null;
            if(framework.builder.Builder.getInstance() != null) {
                project = framework.builder.Builder.getInstance().getProject();
            } else {
                project = framework.builder.Previewer.project;
            }
            templates.options.add(new framework.design.Option("Default", "#default"));
            for(let index1264=project.getTemplates().iterator();index1264.hasNext();) {
                let f = index1264.next();
                {
                    templates.options.add(new framework.design.Option(f.getName(), "#" + /* replace */f.getName().split(".html").join("")));
                }
            }
            parameters.add(templates);
            return parameters;
        }

        public render$jsweet_dom_HTMLElement(parent : HTMLElement) {
            if(!this.isRendered()) {
                let html : string = $(this.getTemplate()).html();
                if(html != null) {
                    let cxt : Object = this.context;
                    let rendered : string = "";
                    let js : string = "rendered = Mustache.render(html, cxt);";
                    eval(js);
                    this.setHtml(rendered);
                } else {
                    this.setHtml("Cannot load template:" + this.getTemplate());
                }
            }
            super.render$jsweet_dom_HTMLElement(parent);
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
    }
    JSHTMLFragment["__class"] = "framework.JSHTMLFragment";
    JSHTMLFragment["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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

        public setProperty(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.parameter = parameter;
            this.designable = designable;
            this.initEditor(designable, parameter);
        }

        public abstract initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter);

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractCheckBoxPropertyEditor["__class"] = "framework.builder.properties.AbstractCheckBoxPropertyEditor";
    AbstractCheckBoxPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


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
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.parameter = parameter;
            this.designable = designable;
            this.initEditor(designable, parameter);
        }

        public abstract initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter);

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractInputPropertyEditor["__class"] = "framework.builder.properties.AbstractInputPropertyEditor";
    AbstractInputPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.designables {
    export class JSDesignableInput extends framework.JSInput implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            return <any>(new java.util.LinkedList<any>());
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = this.delegate.getParameters();
            parameters.add(new framework.design.ValueParameter("value", "Value", "Basic"));
            let type : framework.design.AttributeParameter = new framework.design.AttributeParameter("type", "Type", "Basic");
            type.options.add(new framework.design.Option("text", "text"));
            type.options.add(new framework.design.Option("date", "date"));
            type.options.add(new framework.design.Option("datetime", "datetime"));
            type.options.add(new framework.design.Option("tel", "tel"));
            type.options.add(new framework.design.Option("color", "color"));
            type.options.add(new framework.design.Option("checkbox", "checkbox"));
            type.options.add(new framework.design.Option("password", "password"));
            type.options.add(new framework.design.Option("hidden", "hidden"));
            type.options.add(new framework.design.Option("radio", "radio"));
            type.options.add(new framework.design.Option("email", "email"));
            type.options.add(new framework.design.Option("file", "file"));
            type.options.add(new framework.design.Option("image", "image"));
            type.options.add(new framework.design.Option("month", "month"));
            type.options.add(new framework.design.Option("number", "number"));
            type.options.add(new framework.design.Option("range", "range"));
            type.options.add(new framework.design.Option("reset", "reset"));
            type.options.add(new framework.design.Option("button", "button"));
            type.options.add(new framework.design.Option("submit", "submit"));
            type.options.add(new framework.design.Option("time", "time"));
            type.options.add(new framework.design.Option("url", "url"));
            type.options.add(new framework.design.Option("week", "week"));
            parameters.add(type);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            throw new java.lang.RuntimeException("Cannot add children to this component");
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.delegate.removeDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
        }
    }
    JSDesignableInput["__class"] = "framework.designables.JSDesignableInput";
    JSDesignableInput["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable","framework.InputField"];


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
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.parameter = parameter;
            this.designable = designable;
            this.initEditor(designable, parameter);
        }

        public abstract initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter);

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractSelectPropertyEditor["__class"] = "framework.builder.properties.AbstractSelectPropertyEditor";
    AbstractSelectPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.editors {
    export class CodeMirrorEditor extends framework.JSTextArea implements framework.renderer.Renderer<CodeMirrorEditor>, framework.builder.editors.Editor<string> {
        editor : CodeMirror.Editor = null;

        /*private*/ config : CodeMirror.EditorConfiguration;

        /*private*/ file : framework.builder.data.File = null;

        /*private*/ value : string = "";

        /*private*/ rootEditor : framework.builder.editors.VisualEditor;

        public constructor(name : string, rootEditor : framework.builder.editors.VisualEditor) {
            super(name);
            this.config = null;
            this.rootEditor = null;
            this.rootEditor = rootEditor;
            this.addRenderer(this);
            this.setStyle("position", "absolute");
        }

        public setRootEditor(editor : framework.builder.editors.VisualEditor) {
            this.rootEditor = editor;
        }

        public setConfig(config : CodeMirror.EditorConfiguration) {
            this.config = config;
        }

        public doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement(c : CodeMirrorEditor, root : HTMLElement) {
            this.value = this.value == null?"":this.value;
            if(this.editor == null) {
                this.editor = CodeMirror(root, this.config);
                this.editor.setValue(this.value);
                this.editor.on("change", (t : CodeMirror.Editor) => {
                    this.dirty();
                });
            }
        }

        /**
         * 
         * @param {framework.builder.editors.CodeMirrorEditor} c
         * @param {HTMLElement} root
         */
        public doRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.builder.editors.CodeMirrorEditor) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        public setValue$java_lang_String(s : string) {
            this.value = s;
        }

        public setValue(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>this.setValue$java_lang_String(s);
            } else throw new Error('invalid overload');
        }

        public destroy() {
            if(this.editor != null) {
                this.editor = null;
            }
        }

        public getEditor() : CodeMirror.Editor {
            return this.editor;
        }

        public save(type? : any) : any {
            if(type === undefined) {
                return <any>this.save$();
            } else throw new Error('invalid overload');
        }

        public save$() {
            if(this.editor == null) {
                return;
            }
            let data : string = this.editor.getValue();
            this.value = data;
            this.file.setData(data);
            framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).saveFile(this.file, new CodeMirrorEditor.CodeMirrorEditor$0(this));
        }

        /**
         * 
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        public setRendered(b : boolean) : framework.JSContainer {
            if(!b) {
                this.destroy();
            }
            return super.setRendered(b);
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         */
        public open(f : framework.builder.data.File) {
            this.file = f;
            this.value = f.getData();
            this.setRendered(false);
        }

        /**
         * 
         * @return {framework.builder.editors.Structure}
         */
        public getStructure() : framework.builder.editors.Structure {
            return this.rootEditor.getStructure();
        }

        /**
         * 
         * @return {framework.builder.editors.VisualEditor}
         */
        public getRootEditor() : framework.builder.editors.VisualEditor {
            return this.rootEditor;
        }

        /**
         * 
         */
        public dirty() {
            let body : framework.lightning.TabBody = <any>(this.getAncestorWithClass<any>("slds-tabs_default__content"));
            let tabs : framework.lightning.Tabs = <any>(this.getAncestorWithClass<any>("editor-tabs"));
            let item : framework.lightning.TabItem = tabs.getTab(body);
            item.setStyle("color", "red");
            item.render();
            if(this.getRootEditor() != null) {
                this.getRootEditor().dirty();
            }
        }

        /**
         * 
         */
        public clean() {
            let body : framework.lightning.TabBody = <any>(this.getAncestorWithClass<any>("slds-tabs_default__content"));
            let tabs : framework.lightning.Tabs = <any>(this.getAncestorWithClass<any>("editor-tabs"));
            let item : framework.lightning.TabItem = tabs.getTab(body);
            item.setStyle("color", "#16325c");
            item.render();
        }
    }
    CodeMirrorEditor["__class"] = "framework.builder.editors.CodeMirrorEditor";
    CodeMirrorEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.renderer.Renderer","framework.Renderable","framework.InputField"];



    export namespace CodeMirrorEditor {

        export class CodeMirrorEditor$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null) || data === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data);
                } else throw new Error('invalid overload');
            }

            public dataLoaded$java_lang_Object(data : any) {
                this.__parent.clean();
                let title : string = this.__parent.getAttribute("title");
                framework.builder.Builder.websocket_$LI$().send("open:" + title);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        CodeMirrorEditor$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.properties {
    export abstract class AbstractTextAreaPropertyEditor extends framework.JSTextArea implements framework.builder.properties.PropertyEditor, framework.EventListener {
        designable : framework.design.Designable;

        parameter : framework.design.Parameter;

        public constructor(name : string) {
            super(name);
            this.designable = null;
            this.parameter = null;
            this.addClass("slds-textarea");
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public setProperty(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.parameter = parameter;
            this.designable = designable;
            this.initEditor(designable, parameter);
        }

        public abstract initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter);

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public abstract performAction(source : framework.JSContainer, evt : Event);
    }
    AbstractTextAreaPropertyEditor["__class"] = "framework.builder.properties.AbstractTextAreaPropertyEditor";
    AbstractTextAreaPropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.designables {
    export class JSDesignableTextArea extends framework.JSTextArea implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = this.delegate.getParameters();
            params.add(new framework.design.ValueParameter("value", "Value", "Basic"));
            return params;
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            let result : java.util.List<framework.design.Designable> = <any>(new java.util.LinkedList<any>());
            return result;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            throw new java.lang.RuntimeException("Cannot add children to this component");
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.delegate.removeDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
        }
    }
    JSDesignableTextArea["__class"] = "framework.designables.JSDesignableTextArea";
    JSDesignableTextArea["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable","framework.InputField"];


}
namespace framework.designables {
    export class JSDesignableButton extends framework.lightning.Button implements framework.design.Designable {
        static stateLabels : string[]; public static stateLabels_$LI$() : string[] { if(JSDesignableButton.stateLabels == null) JSDesignableButton.stateLabels = ["Neutral", "Brand", "Destructive", "Success"]; return JSDesignableButton.stateLabels; };

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            return <any>(new java.util.LinkedList<any>());
        }

        public getParameters() : java.util.List<framework.design.Parameter> {
            let result : java.util.List<framework.design.Parameter> = this.delegate.getParameters();
            result.add(this.createParameter("label", "Label", "String"));
            result.add(this.createParameter("stateful", "Stateful", "Boolean"));
            result.add(this.createParameter("disabled", "Disabled", "Boolean"));
            result.add(this.createParameter("inverse", "Inverse", "Boolean"));
            let paramstates : framework.design.Parameter = this.createParameter("state", "State", "select");
            for(let i : number = 0; i < JSDesignableButton.stateLabels_$LI$().length; i++) {
                let opt : framework.design.Option = new framework.design.Option();
                opt.text = JSDesignableButton.stateLabels_$LI$()[i];
                opt.value = framework.lightning.Button.states_$LI$()[i];
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
            return this.delegate.getComponent();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            throw new java.lang.RuntimeException("Cannot add children to this component");
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.delegate.removeDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
        }
    }
    JSDesignableButton["__class"] = "framework.designables.JSDesignableButton";
    JSDesignableButton["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class DataItem extends framework.lightning.Card implements framework.lightning.table.TableCellRenderer {
        /*private*/ title : framework.JSContainer;

        /*private*/ figure : framework.lightning.SvgIcon;

        /*private*/ fields : framework.lightning.table.Table;

        /*private*/ dataStructure : framework.builder.data.DataStructure;

        /*private*/ delegate : framework.lightning.table.DefaultTableCellRenderer;

        labels : string[];

        labelsFields : string[];

        /*private*/ dataFields : java.util.List<framework.builder.data.DataField>;

        public constructor(name? : any, structure? : any, labels? : any, fields? : any) {
            if(((typeof name === 'string') || name === null) && ((structure != null && structure instanceof <any>framework.builder.data.DataStructure) || structure === null) && ((labels != null && labels instanceof <any>Array && (labels.length==0 || labels[0] == null ||(typeof labels[0] === 'string'))) || labels === null) && ((fields != null && fields instanceof <any>Array && (fields.length==0 || fields[0] == null ||(typeof fields[0] === 'string'))) || fields === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(name, "div");
                this.labels = null;
                this.labelsFields = null;
                this.dataFields = null;
                this.title = new framework.JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
                this.figure = new framework.lightning.SvgIcon("figure");
                this.fields = new framework.lightning.table.Table("fields");
                this.dataStructure = null;
                this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                this.labels = null;
                this.labelsFields = null;
                this.dataFields = null;
                (() => {
                    this.labels = labels;
                    this.labelsFields = fields;
                    this.addClass("data-item");
                    let grid : framework.lightning.Grid = new framework.lightning.Grid("ds", "div");
                    grid.setAlignSpread(true);
                    grid.addClass("slds-grid_vertical-align-center");
                    this.getHeaderMedia().addBody(grid);
                    let colLeft : framework.JSContainer = new framework.JSContainer("div");
                    let colRight : framework.JSContainer = new framework.JSContainer("div");
                    grid.addChild$framework_JSContainer(colLeft);
                    grid.addChild$framework_JSContainer(colRight);
                    let h2 : framework.JSContainer = new framework.JSContainer("h2");
                    h2.addChild$framework_JSContainer(this.title);
                    colLeft.addChild$framework_JSContainer(h2);
                    this.figure.setIconName("contact");
                    this.figure.setType("standard");
                    this.figure.setTag("span");
                    this.figure.addClass("slds-icon_container slds-icon-standard-contact");
                    this.figure.setSvgClass("slds-icon slds-icon_small");
                    this.getHeaderMedia().addFigure(this.figure);
                    this.getBody().addChild$framework_JSContainer(this.fields);
                    this.setDataStructure(structure);
                })();
            } else if(((typeof name === 'string') || name === null) && ((structure != null && structure instanceof <any>framework.builder.data.DataStructure) || structure === null) && labels === undefined && fields === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let labels : any = ["Name", "Label", "Type", "Calculated", "Creatable", "Updatable", "Filterable", "Sortable", "Nillable", "Unique", "Length"];
                    let fields : any = ["name", "label", "type", "calculated", "createable", "updateable", "filterable", "sortable", "nillable", "unique", "length"];
                    super(name, "div");
                    this.labels = null;
                    this.labelsFields = null;
                    this.dataFields = null;
                    this.title = new framework.JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
                    this.figure = new framework.lightning.SvgIcon("figure");
                    this.fields = new framework.lightning.table.Table("fields");
                    this.dataStructure = null;
                    this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                    this.labels = null;
                    this.labelsFields = null;
                    this.dataFields = null;
                    (() => {
                        this.labels = labels;
                        this.labelsFields = fields;
                        this.addClass("data-item");
                        let grid : framework.lightning.Grid = new framework.lightning.Grid("ds", "div");
                        grid.setAlignSpread(true);
                        grid.addClass("slds-grid_vertical-align-center");
                        this.getHeaderMedia().addBody(grid);
                        let colLeft : framework.JSContainer = new framework.JSContainer("div");
                        let colRight : framework.JSContainer = new framework.JSContainer("div");
                        grid.addChild$framework_JSContainer(colLeft);
                        grid.addChild$framework_JSContainer(colRight);
                        let h2 : framework.JSContainer = new framework.JSContainer("h2");
                        h2.addChild$framework_JSContainer(this.title);
                        colLeft.addChild$framework_JSContainer(h2);
                        this.figure.setIconName("contact");
                        this.figure.setType("standard");
                        this.figure.setTag("span");
                        this.figure.addClass("slds-icon_container slds-icon-standard-contact");
                        this.figure.setSvgClass("slds-icon slds-icon_small");
                        this.getHeaderMedia().addFigure(this.figure);
                        this.getBody().addChild$framework_JSContainer(this.fields);
                        this.setDataStructure(structure);
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public addOnFieldSeletedListener(l : framework.builder.libraries.FileSelectedListener) {
            let item : DataItem = this;
            this.fields.addRowsSelectionListener(new DataItem.DataItem$0(this, l, item));
        }

        public setDataStructure(structure : framework.builder.data.DataStructure) {
            this.dataStructure = structure;
            this.title.setHtml(structure.getLabel());
            let cmodel : framework.lightning.table.DefaultTableColumnModel = new framework.lightning.table.DefaultTableColumnModel();
            for(let i : number = 0; i < this.labels.length; i++) {
                let col : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn(this.labelsFields[i], this.labelsFields[i], this.labels[i]);
                cmodel.addColumn(col);
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.labelsFields[i],"name"))) {
                    col.setWidth("200px");
                }
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.labelsFields[i],"label"))) {
                    col.setWidth("200px");
                }
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.labelsFields[i],"type"))) {
                    col.setWidth("75px");
                }
            };
            let actions : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn("actions", "actins", " ");
            actions.setWidth("20px");
            cmodel.addColumn(actions);
            this.fields.setTableColumnModel(cmodel);
            this.fields.refreshColumns();
            this.fields.setTableCellRenderer(this);
            this.fields.setStriped(true);
            this.fields.setColBordered(true);
            this.fields.setSelectable(true);
            this.dataStructure.getFields(new DataItem.DataItem$1(this));
        }

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable {
            if(column === this.labels.length) {
                let btn : framework.lightning.IconButton = new framework.lightning.IconButton("sdfs");
                btn.setBorderFilled(true);
                btn.addClass("slds-button_icon-x-small");
                let icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("edit");
                icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                icon.setType("utility");
                icon.setIconName("right");
                btn.setIcon(icon);
                return btn;
            } else {
                return this.delegate.getComponent(table, value, row, column);
            }
        }
    }
    DataItem["__class"] = "framework.builder.libraries.DataItem";
    DataItem["__interfaces"] = ["framework.interactions.Droppable","framework.lightning.table.TableCellRenderer","framework.Renderable"];



    export namespace DataItem {

        export class DataItem$0 implements framework.lightning.table.TableRowsSelectionListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} event
             * @param {framework.lightning.table.Table} table
             * @param {number} firstIndex
             * @param {number} lastIndex
             */
            public onSelectRow(source : framework.JSContainer, event : Event, table : framework.lightning.table.Table, firstIndex : number, lastIndex : number) {
                let field : framework.builder.data.DataField = this.__parent.dataFields.get(firstIndex);
                this.l.onItemSelected(field, this.item);
            }

            constructor(__parent: any, private l: any, private item: any) {
                this.__parent = __parent;
            }
        }
        DataItem$0["__interfaces"] = ["framework.lightning.table.TableRowsSelectionListener"];



        export class DataItem$1 implements framework.builder.data.RemoteDataListener<java.util.List<framework.builder.data.DataField>> {
            public __parent: any;
            public dataLoaded$java_util_List(data_ : java.util.List<framework.builder.data.DataField>) {
                this.__parent.dataFields = data_;
                this.__parent.fields.setModel(new DataItem$1.DataItem$1$0(this));
                this.__parent.fields.refreshData();
                this.__parent.fields.render();
            }

            /**
             * 
             * @param {*} data_
             */
            public dataLoaded(data_? : any) : any {
                if(((data_ != null && (data_["__interfaces"] != null && data_["__interfaces"].indexOf("java.util.List") >= 0 || data_.constructor != null && data_.constructor["__interfaces"] != null && data_.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || data_ === null)) {
                    return <any>this.dataLoaded$java_util_List(data_);
                } else throw new Error('invalid overload');
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DataItem$1["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export namespace DataItem$1 {

            export class DataItem$1$0 implements framework.lightning.table.TableModel {
                public __parent: any;
                /**
                 * 
                 * @param {*} aValue
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 */
                public setValueAt(aValue : any, rowIndex : number, columnIndex : number) {
                }

                /**
                 * 
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {boolean}
                 */
                public isCellEditable(rowIndex : number, columnIndex : number) : boolean {
                    return false;
                }

                /**
                 * 
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {*}
                 */
                public getValueAt(rowIndex : number, columnIndex : number) : any {
                    if(columnIndex < this.__parent.__parent.labels.length) {
                        return this.__parent.__parent.dataFields.get(rowIndex).getValue(this.__parent.__parent.labelsFields[columnIndex]);
                    } else {
                        return this.__parent.__parent.dataFields.get(rowIndex).getName();
                    }
                }

                /**
                 * 
                 * @return {number}
                 */
                public getRowCount() : number {
                    return this.__parent.__parent.dataFields.size();
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            DataItem$1$0["__interfaces"] = ["framework.lightning.table.TableModel"];


        }

    }

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
    CheckBoxButton["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.InputField","framework.Renderable"];


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
            for(let index1265=0; index1265 < components.length; index1265++) {
                let com = components[index1265];
                {
                    let li : framework.JSContainer = new framework.JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-4");
                    this.addChild$framework_JSContainer(li);
                    li.addChild$framework_JSContainer(com);
                }
            }
            return this;
        }
    }
    ComponentsLibrary["__class"] = "framework.builder.ComponentsLibrary";
    ComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    BorderLayout["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class DockedComposer extends framework.lightning.Grid implements framework.interactions.Draggable {
        /*private*/ header : framework.lightning.Grid = <framework.lightning.Grid>new framework.lightning.Grid("header", "div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");

        /*private*/ headerTitle : framework.lightning.Media = new framework.lightning.Media("headerTitle");

        /*private*/ headerIconContainer : framework.JSContainer = new framework.JSContainer("div").addClass("slds-icon_container");

        /*private*/ headerIcon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("headerIcon").setSize(framework.lightning.SvgIcon.EXTRA_SMALL).setTextType(framework.lightning.SvgIcon.TEXT_DEFAULT);

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
            this.headerIcon.setSvgClass("slds-button__icon");
            this.header.addChild$framework_JSContainer(this.headerTitle);
            this.headerTitle.getFigureContainer().addClass("slds-m-right_x-small");
            this.headerTitle.setCentered(true);
            this.headerTitle.getFigureContainer().addChild$framework_JSContainer(this.headerIconContainer);
            this.headerIconContainer.addChild$framework_JSContainer(this.headerIcon);
            this.headerTitle.getBodyContainer().addChild$framework_JSContainer(this.title);
            this.header.addChild$framework_JSContainer(this.tools);
            this.tools.addChild$framework_JSContainer(this.minimize).addChild$framework_JSContainer(this.expand).addChild$framework_JSContainer(this.close);
            this.tools.setVisible(false);
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

        public getHeaderIcon() : framework.lightning.SvgIcon {
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
    DockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


}
namespace framework.lightning {
    export class GlobalHeader extends framework.lightning.Grid {
        public constructor(name : string) {
            super(name, "div");
            this.setAlignSpread(true);
            this.addClass("slds-global-header");
        }
    }
    GlobalHeader["__class"] = "framework.lightning.GlobalHeader";
    GlobalHeader["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



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
        GlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



        export class SearchGlobalHeaderItem extends GlobalHeader.GlobalHeaderItem {
            public __parent: any;
            public constructor(__parent: any, name : string) {
                super(__parent, name, "div");
                this.__parent = __parent;
                this.addClass("slds-global-header__item_search");
            }
        }
        SearchGlobalHeaderItem["__class"] = "framework.lightning.GlobalHeader.SearchGlobalHeaderItem";
        SearchGlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    Panel["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



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
        PanelSection["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


    }

}
namespace framework.builder {
    export class Builder extends framework.lightning.LTContainer {
        /*private*/ topMenu : framework.builder.TopMenu = new framework.builder.TopMenu("header");

        /*private*/ editorTabs : framework.lightning.Tabs = new framework.lightning.Tabs("editorTabs");

        /*private*/ project : framework.builder.data.File;

        /*private*/ saveButton : framework.lightning.IconButton = new framework.lightning.IconButton("save");

        /*private*/ newFileModal : framework.builder.NewFile = new framework.builder.NewFile("newFile", this);

        /*private*/ openProjectModal : framework.builder.OpenProject = new framework.builder.OpenProject("openproject", this);

        /*private*/ newFileButtn : framework.lightning.IconButton = new framework.lightning.IconButton("newFile");

        /*private*/ openProjectBtn : framework.lightning.IconButton = new framework.lightning.IconButton("openProject");

        /*private*/ previewBtn : framework.lightning.IconButton = new framework.lightning.IconButton("preview");

        /*private*/ backdrop : framework.lightning.Backdrop = new framework.lightning.Backdrop("backdrop");

        /*private*/ activeEditor : framework.builder.editors.Editor<any> = null;

        public static websocket : WebSocket; public static websocket_$LI$() : WebSocket { if(Builder.websocket == null) Builder.websocket = new WebSocket("ws:localhost:8080/preview"); return Builder.websocket; };

        /*private*/ projectOpen : boolean = false;

        public constructor(name : string) {
            super(name, "div");
            this.project = null;
            this.addChild$framework_JSContainer(this.openProjectModal);
            this.editorTabs.addClass("editor-tabs");
            this.addChild$framework_JSContainer(this.newFileModal);
            this.addChild$framework_JSContainer(this.backdrop);
            this.newFileModal.setBackdrop(this.backdrop);
            this.openProjectModal.setBackdrop(this.backdrop);
            this.addClass("builder");
            let icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("as", "utility", "save");
            this.saveButton.setIcon(icon);
            this.saveButton.setBorderFilled(true);
            this.saveButton.addClass("slds-button_icon-container").addClass("save-button");
            this.saveButton.addEventListener(new Builder.Builder$0(this), "click");
            this.addChild$framework_JSContainer(this.saveButton);
            this.addChild$framework_JSContainer(this.openProjectBtn);
            this.previewBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "preview"));
            this.previewBtn.setBorderFilled(true);
            this.previewBtn.addClass("slds-button_icon-container");
            this.openProjectBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "open"));
            this.openProjectBtn.setBorderFilled(true);
            this.openProjectBtn.addClass("slds-button_icon-container").addClass("new-button").setStyle("right", "10%");
            this.openProjectBtn.addEventListener(new Builder.Builder$1(this), "click");
            let iconNew : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("as", "utility", "new");
            this.newFileButtn.setIcon(iconNew);
            this.newFileButtn.setBorderFilled(true);
            this.newFileButtn.addClass("slds-button_icon-container").addClass("new-button");
            this.newFileButtn.addEventListener(new Builder.Builder$2(this), "click");
            this.addChild$framework_JSContainer(this.newFileButtn);
            this.addChild$framework_JSContainer(this.openProjectBtn);
            this.previewBtn.addClass("preview-btn");
            this.previewBtn.setTag("a").setAttribute("target", "_blank");
            this.addChild$framework_JSContainer(this.previewBtn);
            this.addChild$framework_JSContainer(this.editorTabs);
            framework.core.BeanFactory.getInstance().addBean(Builder, this);
            $(window).keydown((event : JQueryKeyEventObject) => {
                if(event.ctrlKey || event.metaKey) {
                    console.log(event.which);
                    if(event.which === 83) {
                        event.preventDefault();
                        if(this.activeEditor != null) {
                            this.activeEditor.save();
                        }
                    }
                }
                return true;
            });
        }

        public static getInstance() : Builder {
            try {
                return <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>(Builder));
            } catch(e) {
                return null;
            };
        }

        public isProjectOpen() : boolean {
            return this.projectOpen;
        }

        public openProject(file : framework.builder.data.File) {
            this.project = file;
            this.projectOpen = true;
            this.previewBtn.setAttribute("href", "/preview.html#" + this.getProject().getName());
            let editorName : string = file.getName();
            if(!this.isOpen(editorName)) {
                let projectEditor : framework.builder.editors.VisualEditor = new framework.builder.editors.VisualEditor(editorName);
                projectEditor.open(file);
                this.openEditor(file.getName(), projectEditor);
            } else {
                this.activateEditor(editorName);
            }
        }

        public getProject() : framework.builder.data.File {
            if(this.activeEditor == null) {
                return this.project;
            } else {
                return this.activeEditor.getRootEditor().getProject();
            }
        }

        public isOpen(editorName : string) : boolean {
            for(let index1266=this.editorTabs.getItems().iterator();index1266.hasNext();) {
                let item = index1266.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(item.getName(),"editor_" + editorName))) {
                        return true;
                    }
                }
            }
            return false;
        }

        public activateEditor(editorName : string) : framework.builder.editors.Editor<any> {
            for(let index1267=this.editorTabs.getItems().iterator();index1267.hasNext();) {
                let item = index1267.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(item.getName(),"editor_" + editorName))) {
                        this.editorTabs.setActive(item);
                        this.activeEditor = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren().get(0);
                        return this.activeEditor;
                    }
                }
            }
            return null;
        }

        public openEditor(title : string, editor : framework.builder.editors.Editor<any>) : framework.builder.editors.Editor<any> {
            if(this.isOpen(editor.getName())) {
                return this.activateEditor(editor.getName());
            }
            editor.setAttribute("title", title);
            let l : framework.lightning.TabActionListener = new Builder.Builder$3(this);
            let body : framework.lightning.TabBody = new framework.lightning.TabBody("editorBody");
            body.addChild$framework_JSContainer(<framework.JSContainer><any>editor);
            let item : framework.lightning.TabItem = new framework.lightning.TabItem("editor_" + editor.getName(), body);
            item.setTitle(title);
            item.setClosable(true);
            this.editorTabs.addItem$framework_lightning_TabItem(item);
            item.addTabActionListener(l);
            this.editorTabs.setActive(item);
            return editor;
        }
    }
    Builder["__class"] = "framework.builder.Builder";
    Builder["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace Builder {

        export class Builder$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                if(this.__parent.activeEditor != null) {
                    this.__parent.activeEditor.save();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Builder$0["__interfaces"] = ["framework.EventListener"];



        export class Builder$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.openProjectModal.open();
                this.__parent.openProjectModal.init();
                this.__parent.backdrop.open();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Builder$1["__interfaces"] = ["framework.EventListener"];



        export class Builder$2 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.newFileModal.open();
                if(this.__parent.activeEditor != null) {
                    this.__parent.newFileModal.init(this.__parent.activeEditor.getStructure());
                } else {
                    this.__parent.newFileModal.init(null);
                }
                this.__parent.backdrop.open();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Builder$2["__interfaces"] = ["framework.EventListener"];



        export class Builder$3 implements framework.lightning.TabActionListener {
            public __parent: any;
            /**
             * 
             * @param {framework.lightning.TabItem} item
             */
            public onClose(item : framework.lightning.TabItem) {
                let edi : framework.builder.editors.Editor<any> = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren().get(0);
                if(edi != null) {
                    edi.save();
                    if(this.__parent.activeEditor != null && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(edi,this.__parent.activeEditor))) {
                        this.__parent.activeEditor = null;
                    }
                }
            }

            /**
             * 
             * @param {framework.lightning.TabItem} item
             */
            public onActivate(item : framework.lightning.TabItem) {
                this.__parent.activeEditor = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren().get(0);
                if(this.__parent.activeEditor != null && this.__parent.activeEditor instanceof <any>framework.builder.editors.EventEditor) {
                    (<framework.builder.editors.EventEditor><any>this.__parent.activeEditor).reactivate();
                }
            }

            /**
             * 
             * @param {framework.lightning.TabItem} item
             */
            public onDeactivate(item : framework.lightning.TabItem) {
                let edi : framework.builder.editors.Editor<any> = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren().get(0);
                if(edi != null) {
                    edi.save();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Builder$3["__interfaces"] = ["framework.lightning.TabActionListener"];


    }

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
            for(let index1268=this.getChildren().iterator();index1268.hasNext();) {
                let child = index1268.next();
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
    DescriptionList["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    FormLayout["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder {
    export class ItemSelector extends framework.lightning.Modal {
        /*private*/ input : framework.JSInput = new framework.JSInput("input");

        /*private*/ saveButton : framework.lightning.Button = new framework.lightning.Button().setLabel("Save");

        /*private*/ section : framework.lightning.Section = new framework.lightning.Section("section", "All Files");

        /*private*/ filesList : framework.builder.FilesList = new framework.builder.FilesList("filesList", this);

        public constructor(name : string, stitle : string) {
            super(name, stitle);
            this.setTag("section");
            this.addClass("slds-modal_large slds-app-launcher item-selector");
            this.getHeader().addClass("slds-app-launcher__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center");
            this.getTitle().setAttribute("class", "slds-text-heading_small");
            this.getTitle().setTag("label");
            let inputElement : framework.lightning.FormElement = new framework.lightning.FormElement("inputElement", "div");
            inputElement.setLabel("");
            inputElement.setInput(this.input);
            this.input.addClass("slds-input");
            let headerInput : framework.JSContainer = new framework.JSContainer("div").addClass("slds-app-launcher__header-search");
            headerInput.addChild$framework_JSContainer(inputElement);
            this.getHeader().addChild$framework_JSContainer(headerInput);
            this.saveButton.setState(framework.lightning.Button.STATE_NEUTRAL);
            this.getHeader().addChild$framework_JSContainer(this.saveButton);
            this.getContent().addChild$framework_JSContainer(this.section);
            this.getContent().addClass("slds-app-launcher__content slds-p-around_medium");
            this.section.getContent().addChild$framework_JSContainer(this.filesList);
            this.setLarge(true);
            this.setStyle("width", "80%");
        }

        public getInput() : framework.JSInput {
            return this.input;
        }

        public getSaveButton() : framework.lightning.Button {
            return this.saveButton;
        }

        public getSection() : framework.lightning.Section {
            return this.section;
        }

        public getFilesList() : framework.builder.FilesList {
            return this.filesList;
        }
    }
    ItemSelector["__class"] = "framework.builder.ItemSelector";
    ItemSelector["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.properties {
    export abstract class ItemSelector<T> extends framework.lightning.Modal implements framework.lightning.table.TableCellRenderer {
        /*private*/ dataTable : framework.lightning.table.Table = new framework.lightning.table.Table("fields");

        /*private*/ delegate : framework.lightning.table.DefaultTableCellRenderer = new framework.lightning.table.DefaultTableCellRenderer();

        /*private*/ tableColumModel : framework.lightning.table.DefaultTableColumnModel = new framework.lightning.table.DefaultTableColumnModel();

        /*private*/ dataList : java.util.List<T>;

        public constructor(name : string) {
            super(name, "div");
            this.dataList = null;
            this.addClass("data-item");
            this.getContent().addChild$framework_JSContainer(this.dataTable);
        }

        public addOnItemSeletedListener(l : framework.builder.properties.ItemSelectedListener<T>) {
            this.dataTable.addRowsSelectionListener(new ItemSelector.ItemSelector$0(this, l));
        }

        public addColumn(column : framework.lightning.table.TableColumn) {
            this.tableColumModel.addColumn(column);
        }

        public setDataList(dataList : java.util.List<T>) {
            this.dataList = dataList;
            this.dataTable.setTableCellRenderer(this);
            this.dataTable.setTableColumnModel(this.tableColumModel);
            this.dataTable.refreshColumns();
            this.dataTable.setModel(new ItemSelector.ItemSelector$1(this, dataList));
            this.dataTable.refreshData();
        }

        public abstract isActionColumn(table : framework.lightning.table.Table, value : any, row : number, column : number) : boolean;

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable {
            if(this.isActionColumn(table, value, row, column)) {
                let btn : framework.lightning.IconButton = new framework.lightning.IconButton("sdfs");
                btn.setBorderFilled(true);
                btn.addClass("slds-button_icon-x-small");
                let icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("edit");
                icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                icon.setType("utility");
                icon.setIconName("right");
                btn.setIcon(icon);
                return btn;
            } else {
                return this.delegate.getComponent(table, value, row, column);
            }
        }
    }
    ItemSelector["__class"] = "framework.builder.properties.ItemSelector";
    ItemSelector["__interfaces"] = ["framework.interactions.Droppable","framework.lightning.table.TableCellRenderer","framework.Renderable"];



    export namespace ItemSelector {

        export class ItemSelector$0 implements framework.lightning.table.TableRowsSelectionListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} event
             * @param {framework.lightning.table.Table} table
             * @param {number} firstIndex
             * @param {number} lastIndex
             */
            public onSelectRow(source : framework.JSContainer, event : Event, table : framework.lightning.table.Table, firstIndex : number, lastIndex : number) {
                let field : any = this.__parent.dataList.get(firstIndex);
                this.l.onItemSelected(field);
            }

            constructor(__parent: any, private l: any) {
                this.__parent = __parent;
            }
        }
        ItemSelector$0["__interfaces"] = ["framework.lightning.table.TableRowsSelectionListener"];



        export class ItemSelector$1 implements framework.lightning.table.TableModel {
            public __parent: any;
            /**
             * 
             * @param {*} aValue
             * @param {number} rowIndex
             * @param {number} columnIndex
             */
            public setValueAt(aValue : any, rowIndex : number, columnIndex : number) {
            }

            /**
             * 
             * @param {number} rowIndex
             * @param {number} columnIndex
             * @return {boolean}
             */
            public isCellEditable(rowIndex : number, columnIndex : number) : boolean {
                return false;
            }

            /**
             * 
             * @param {number} rowIndex
             * @param {number} columnIndex
             * @return {*}
             */
            public getValueAt(rowIndex : number, columnIndex : number) : any {
                return null;
            }

            /**
             * 
             * @return {number}
             */
            public getRowCount() : number {
                return this.dataList.size();
            }

            constructor(__parent: any, private dataList: any) {
                this.__parent = __parent;
            }
        }
        ItemSelector$1["__interfaces"] = ["framework.lightning.table.TableModel"];


    }

}
namespace framework.lightning {
    export class ImageIcon extends framework.lightning.SvgIcon {
        img : framework.JSContainer = new framework.JSContainer("img");

        public constructor(name : string, url : string) {
            super(name);
            this.setHtml("");
            this.getChildren().clear();
            this.addChild$framework_JSContainer(this.img);
            this.img.setAttribute("src", "http://www.powells.com/Portals/0/Images/powells_images/loading.gif");
        }
    }
    ImageIcon["__class"] = "framework.lightning.ImageIcon";
    ImageIcon["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    ComponentsTabs["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    ProtertiesEditorTabs["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableTextComponent extends framework.TextComponent implements framework.design.Designable {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!JSDesignableTextComponent.__static_initialized) { JSDesignableTextComponent.__static_initialized = true; JSDesignableTextComponent.__static_initializer_0(); } }

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        static textTags : java.util.Map<string, string>; public static textTags_$LI$() : java.util.Map<string, string> { JSDesignableTextComponent.__static_initialize(); if(JSDesignableTextComponent.textTags == null) JSDesignableTextComponent.textTags = <any>(new java.util.HashMap<any, any>()); return JSDesignableTextComponent.textTags; };

        static __static_initializer_0() {
            JSDesignableTextComponent.textTags_$LI$().put("h1", "Heading 1");
            JSDesignableTextComponent.textTags_$LI$().put("h2", "Heading 2");
            JSDesignableTextComponent.textTags_$LI$().put("h3", "Heading 3");
            JSDesignableTextComponent.textTags_$LI$().put("h4", "Heading 4");
            JSDesignableTextComponent.textTags_$LI$().put("h5", "Heading 5");
            JSDesignableTextComponent.textTags_$LI$().put("label", "Label");
            JSDesignableTextComponent.textTags_$LI$().put("paragraph", "Paragraph");
            JSDesignableTextComponent.textTags_$LI$().put("span", "Span");
        }

        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            let l : java.util.List<any> = this.getChildren();
            return l;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let params : java.util.List<framework.design.Parameter> = this.delegate.getParameters();
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Text", "Basic");
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            for(let index1269=JSDesignableTextComponent.textTags_$LI$().keySet().iterator();index1269.hasNext();) {
                let key = index1269.next();
                {
                    tagParam.options.add(new framework.design.Option(JSDesignableTextComponent.textTags_$LI$().get(key), key));
                }
            }
            params.add(tagParam);
            params.add(textParam);
            return params;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            this.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.delegate.removeDesignable(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
        }
    }
    JSDesignableTextComponent["__class"] = "framework.designables.JSDesignableTextComponent";
    JSDesignableTextComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.editors {
    export class FileTreeItem extends framework.TreeItem implements framework.EventListener {
        /*private*/ builder : framework.builder.Builder;

        /*private*/ type : string;

        /*private*/ structure : framework.builder.editors.Structure;

        /*private*/ f : framework.builder.data.File;

        public constructor(f : framework.builder.data.File, type : string, builder : framework.builder.Builder, structure : framework.builder.editors.Structure) {
            super(f.getName(), f.getTitle());
            this.builder = null;
            this.type = null;
            this.structure = null;
            this.f = null;
            this.builder = builder;
            this.type = type;
            this.structure = structure;
            this.f = f;
            this.addIcon("delete", "utility", this);
            this.setData(f);
            this.addEventListener(this, "click");
            this.addClass("file-tree-item");
            this.addClass("type-" + type);
            if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "html")) {
                this.setLeftIcon$java_lang_String$java_lang_String("work_type", "standard");
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "css")) {
                this.setLeftIcon$java_lang_String$java_lang_String("topic", "standard");
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "js")) {
                this.setLeftIcon$java_lang_String$java_lang_String("custom_notification", "standard");
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "dat")) {
                this.setLeftIcon$java_lang_String$java_lang_String("database", "utility");
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".cmp")) {
                this.setLeftIcon$java_lang_String$java_lang_String("custom63", "custom");
            }
        }

        public click(source : framework.JSContainer, evt : Event) {
            let veditor : framework.builder.editors.VisualEditor = <any>((<framework.JSContainer><any>this.structure.getRootUINode()).getAncestorWithClass<any>("visual-editor"));
            let f : framework.builder.data.File = <framework.builder.data.File>source.getData();
            if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "html")) {
                let editor : framework.builder.editors.HTMLEditor = new framework.builder.editors.HTMLEditor(f.getName(), veditor);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "css")) {
                let editor : framework.builder.editors.CSSEditor = new framework.builder.editors.CSSEditor(f.getName(), veditor);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "js")) {
                let editor : framework.builder.editors.JavascriptEditor = new framework.builder.editors.JavascriptEditor(f.getName(), veditor);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "dat")) {
                let editor : framework.builder.libraries.DataComposer = new framework.builder.libraries.DataComposer(f.getName(), veditor, this.structure);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".cmp")) {
                let editor : framework.builder.editors.VisualEditor = new framework.builder.editors.VisualEditor(f.getName());
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else {
                let editor : framework.builder.libraries.DataComposer = new framework.builder.libraries.DataComposer(f.getName(), veditor, this.structure);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            }
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            evt.stopPropagation();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source,this))) {
                this.click(source, evt);
                return;
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source.getName(),"delete"))) {
                let stype : string = this.type;
                this.builder.getProject().deleteFile(this.f.getName(), stype, new FileTreeItem.FileTreeItem$0(this, stype));
                this.builder.getProject().getChild(stype).removeFile(this.f);
            }
        }
    }
    FileTreeItem["__class"] = "framework.builder.editors.FileTreeItem";
    FileTreeItem["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];



    export namespace FileTreeItem {

        export class FileTreeItem$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null) || data === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data);
                } else throw new Error('invalid overload');
            }

            public dataLoaded$java_lang_Object(data : any) {
                this.__parent.structure.reload();
                this.__parent.structure.getItem$java_lang_String(this.stype).open();
                this.__parent.structure.render();
            }

            constructor(__parent: any, private stype: any) {
                this.__parent = __parent;
            }
        }
        FileTreeItem$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.editors {
    export class StructureTreeItem extends framework.TreeItem implements framework.EventListener {
        /*private*/ designable : framework.design.Designable;

        /*private*/ selector : framework.builder.Selector;

        /*private*/ structure : framework.builder.editors.Structure;

        /*private*/ __framework_builder_editors_StructureTreeItem_parent : framework.design.Designable;

        /*private*/ dropdown : framework.lightning.DropDown = new framework.lightning.DropDown("rightclick");

        /*private*/ lsnClick : framework.EventListener = new StructureTreeItem.StructureTreeItem$0(this);

        /*private*/ lsnDblclick : framework.EventListener = new StructureTreeItem.StructureTreeItem$1(this);

        /*private*/ lsnDelete : framework.EventListener = new StructureTreeItem.StructureTreeItem$2(this);

        public paste() {
            let clip : framework.design.Designable = this.structure.getClipBoard();
            let cmp : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.extract(clip);
            let des : framework.design.Designable = framework.builder.marshalling.MarshallUtil.toDesignable(cmp);
            let editor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            editor.addNewComponent$framework_design_Designable$framework_design_Designable(des, this.designable);
            this.structure.clearClipboard();
            if(this.structure.isCut()) {
                this.__framework_builder_editors_StructureTreeItem_parent.removeDesignable(this.designable);
                this.structure.reload$framework_design_Designable(this.__framework_builder_editors_StructureTreeItem_parent);
            }
            editor.dirty();
        }

        public constructor(name : string, designable : framework.design.Designable, structure : framework.builder.editors.Structure, parent : framework.design.Designable) {
            super(name, designable.getName());
            this.designable = null;
            this.selector = null;
            this.structure = null;
            this.__framework_builder_editors_StructureTreeItem_parent = null;
            this.selector = structure.getSelector();
            this.__framework_builder_editors_StructureTreeItem_parent = parent;
            this.structure = structure;
            this.designable = designable;
            this.addClass("structure-tree-item");
            this.setLeftIcon$java_lang_String$java_lang_String("template", "standard");
            let deleteMenu : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("delete", "Delete");
            deleteMenu.setIcon("delete", "utility");
            let copy : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("copy", "Copy");
            copy.setIcon("copy", "utility");
            let cut : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("cut", "Cut");
            cut.setIcon("cut", "utility");
            let paste : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("paste", "Paste");
            paste.setIcon("paste", "utility");
            let exportAs : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("export", "Export");
            exportAs.setIcon("add_relationship", "action");
            exportAs.addEventListener(new StructureTreeItem.StructureTreeItem$3(this), "click");
            copy.addEventListener(new StructureTreeItem.StructureTreeItem$4(this, structure, designable), "click");
            cut.addEventListener(new StructureTreeItem.StructureTreeItem$5(this, structure, designable), "click");
            paste.addEventListener(new StructureTreeItem.StructureTreeItem$6(this), "click");
            deleteMenu.addEventListener(this.lsnDelete, "click");
            this.dropdown.addItem(paste);
            this.dropdown.addItem(copy);
            this.dropdown.addItem(exportAs);
            this.dropdown.addItem(deleteMenu);
            this.dropdown.setVisible(false);
            this.addChild$framework_JSContainer(this.dropdown);
            document.addEventListener("click", (evt : Event) => {
                this.dropdown.setVisible(false);
                this.dropdown.render();
            });
            this.addIcon("delete", "utility", this.lsnDelete);
            this.addEventListener(this.lsnClick, "click");
            this.addEventListener(this.lsnDblclick, "dblclick");
            this.addEventListener(new StructureTreeItem.StructureTreeItem$7(this, structure, paste), "contextmenu");
        }

        public getDesignable() : framework.design.Designable {
            return this.designable;
        }

        public getParentDesignable() : framework.design.Designable {
            return this.__framework_builder_editors_StructureTreeItem_parent;
        }

        /**
         * 
         * @param {boolean} b
         */
        public select(b : boolean) {
            super.select(b);
            this.selector.select(this.designable);
        }

        public saveAsComponent() {
            let marshall : string = JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(this.designable));
            let project : framework.builder.data.File = this.structure.getFile();
            let name : string = this.designable.getName();
            if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                name = name + ".cmp";
            }
            project.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, "components", new StructureTreeItem.StructureTreeItem$8(this, marshall));
        }

        public dblclick(source : framework.JSContainer, evt : Event) {
            evt.stopPropagation();
            let desgianble : framework.design.Designable = this.getDesignable();
            let editorName : string = "editor:" + desgianble.getName();
            if(framework.builder.Builder.getInstance().isOpen(editorName)) {
                let ee : framework.builder.editors.Editor<any> = framework.builder.Builder.getInstance().activateEditor(editorName);
                if(ee != null && ee instanceof <any>framework.builder.editors.EventEditor) {
                    (<framework.builder.editors.EventEditor><any>ee).setDesignable(desgianble);
                }
            } else {
                let veditor : framework.builder.editors.VisualEditor = <any>((<framework.JSContainer><any>this.structure.getRootUINode()).getAncestorWithClass<any>("visual-editor"));
                let editor : framework.builder.editors.EventEditor = new framework.builder.editors.EventEditor(editorName, this.structure.getRootUINode(), veditor);
                editor.setDesignable(desgianble);
                let ed : framework.builder.editors.EventEditor = <framework.builder.editors.EventEditor><any>framework.builder.Builder.getInstance().openEditor("Event(" + desgianble.getName() + ")", editor);
                ed.setDesignable(desgianble);
            }
        }

        public click(source : framework.JSContainer, evt : Event) {
            evt.stopPropagation();
            let editor : framework.builder.editors.VisualEditor = <any>((<framework.JSContainer><any>this.structure.getRootUINode()).getAncestorWithClass<any>("visual-editor"));
            let willAdd : framework.builder.Component = editor.getWillAddComponent();
            if(willAdd != null) {
                let itemS : StructureTreeItem = (<StructureTreeItem>source);
                editor.addNewComponent$framework_builder_Component$framework_design_Designable(willAdd, itemS.getDesignable());
                editor.dirty();
            } else {
                let itemS : StructureTreeItem = (<StructureTreeItem>source);
                if(this.structure.getSelected() != null) {
                    this.structure.getSelected().select(false);
                }
                this.structure.setSelected(itemS);
                this.structure.getSelected().select(true);
            }
        }
    }
    StructureTreeItem["__class"] = "framework.builder.editors.StructureTreeItem";
    StructureTreeItem["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];



    export namespace StructureTreeItem {

        export class StructureTreeItem$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.click(source, evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$0["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.dblclick(source, evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$1["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$2 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                if(this.__parent.__framework_builder_editors_StructureTreeItem_parent != null) {
                    this.__parent.__framework_builder_editors_StructureTreeItem_parent.removeDesignable(this.__parent.designable);
                    this.__parent.structure.reload$framework_design_Designable(this.__parent.__framework_builder_editors_StructureTreeItem_parent);
                    let editor : framework.builder.editors.VisualEditor = <any>(this.__parent.getAncestorWithClass("visual-editor"));
                    editor.dirty();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$2["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$3 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.saveAsComponent();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$3["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$4 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.structure.copy(this.designable);
                this.__parent.dropdown.setVisible(false);
            }

            constructor(__parent: any, private structure: any, private designable: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$4["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$5 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.setStyle("opacity", "0.5");
                this.structure.cut(this.designable);
                this.__parent.dropdown.setVisible(false);
            }

            constructor(__parent: any, private structure: any, private designable: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$5["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$6 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.paste();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$6["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$7 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                evt.preventDefault();
                if(this.structure.getClipBoard() == null) {
                    this.paste.setVisible(false);
                } else {
                    this.paste.setVisible(true);
                }
                this.__parent.dropdown.setVisible(true);
            }

            constructor(__parent: any, private structure: any, private paste: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$7["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$8 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null) || data === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data);
                } else throw new Error('invalid overload');
            }

            public dataLoaded$java_lang_Object(data : any) {
                let fff : framework.builder.data.File = new framework.builder.data.File(<Object>data);
                fff.setData(this.marshall);
                framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).saveFile(fff, new StructureTreeItem$8.StructureTreeItem$8$0(this));
                this.__parent.structure.reload$java_lang_String("components");
                this.__parent.structure.render();
            }

            constructor(__parent: any, private marshall: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$8["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export namespace StructureTreeItem$8 {

            export class StructureTreeItem$8$0 implements framework.builder.data.RemoteDataListener<any> {
                public __parent: any;
                /**
                 * 
                 * @param {framework.builder.data.DataStructure[]} data
                 */
                public dataLoaded(data? : any) : any {
                    if(((data != null) || data === null)) {
                        return <any>this.dataLoaded$java_lang_Object(data);
                    } else throw new Error('invalid overload');
                }

                public dataLoaded$java_lang_Object(data : any) {
                    console.log(data);
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            StructureTreeItem$8$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


        }

    }

}
namespace framework.designables {
    export class JSDesignableImage extends framework.designables.JSDesignableBlockComponent {
        public constructor(name : string) {
            super(name, "img");
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = super.getParameters();
            parameters.add(new framework.design.AttributeParameter("src", "Source", "Basic"));
            for(let index1270=parameters.iterator();index1270.hasNext();) {
                let p = index1270.next();
                {
                    if(p != null && p instanceof <any>framework.design.TagParameter) {
                        parameters.remove(p);
                        break;
                    }
                }
            }
            return parameters;
        }
    }
    JSDesignableImage["__class"] = "framework.designables.JSDesignableImage";
    JSDesignableImage["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class UIFile extends framework.JSHTMLFragment {
        public constructor(name : string) {
            super(name, "#uiFile");
        }

        public setTitle(title : string) : UIFile {
            this.getContext()["title"] = title;
            this.setRendered(false);
            return this;
        }

        public setAbbr(abbr : string) : UIFile {
            this.getContext()["abbr"] = abbr;
            this.setRendered(false);
            return this;
        }

        public setHelp(help : string) : UIFile {
            this.getContext()["help"] = help;
            this.setRendered(false);
            return this;
        }
    }
    UIFile["__class"] = "framework.builder.UIFile";
    UIFile["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class AccordionItem extends framework.JSHTMLFragment implements framework.design.Designable {
        /*private*/ accordionContent : framework.JSContainer = <framework.designables.JSDesignable>new framework.JSContainer("accordionContent", "div").addClass("slds-accordion__content");

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ configured : boolean = false;

        public constructor(name : string, title : string) {
            super(name, "#accordionSection");
            this.addChild$framework_JSContainer(this.accordionContent);
            this.getContext()["openClass"] = "";
            this.getContext()["iconType"] = "utility";
            this.getContext()["iconsLocation"] = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
            this.getContext()["iconName"] = "switch";
            this.getContext()["title"] = title;
        }

        public open() {
            this.getContext()["openClass"] = "slds-is-open";
        }

        public close() {
            this.getContext()["openClass"] = "";
        }

        public setTitle(title : string) {
            this.getContext()["title"] = title;
        }

        public setIcon(iconType : string, iconName : string) {
            this.getContext()["iconType"] = "utility";
            this.getContext()["iconName"] = "switch";
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
        }

        /**
         * 
         * @return {*}
         */
        public getDesignables() : java.util.List<framework.design.Designable> {
            let l : java.util.List<any> = this.accordionContent.getChildren();
            return l;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            this.accordionContent.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
        }

        public getContent() : framework.JSContainer {
            return this.accordionContent;
        }

        public render$jsweet_dom_HTMLElement(parent : HTMLElement) {
            super.render$jsweet_dom_HTMLElement(parent);
            if(!this.configured) {
                $("#" + this.getId() + " .slds-accordion__summary").click((t : JQueryEventObject) => {
                    let cls : string = this.getContext()["openClass"].toString();
                    if(cls.length > 0) {
                        this.close();
                    } else {
                        this.open();
                    }
                    this.configured = false;
                    this.setRendered(false);
                    this.render();
                    return null;
                });
            }
            this.configured = true;
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
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
        }
    }
    AccordionItem["__class"] = "framework.lightning.AccordionItem";
    AccordionItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
            this.designable.applyParam(attr, value);
            this.designable.setRendered(false);
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            let attr : string = parameter.name;
            let value : string = designable.getAttribute(attr);
            this.setValue$java_lang_String(value);
        }
    }
    AttributeEditor["__class"] = "framework.builder.properties.AttributeEditor";
    AttributeEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export abstract class InputWithSelectorEditor<T> extends framework.builder.properties.AbstractInputPropertyEditor {
        /*private*/ icon : framework.lightning.IconButton = null;

        /*private*/ modal : framework.builder.properties.ItemSelector<T>;

        selectedItem : T;

        public constructor(name : string, modal : framework.builder.properties.ItemSelector<T>) {
            super(name);
            this.modal = null;
            this.selectedItem = null;
            this.modal = modal;
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            if(this.icon == null) {
                this.icon = new framework.lightning.IconButton("icon");
                this.getParent().addChild$framework_JSContainer(this.icon.addClass("input-icon"));
                this.getParent().addChild$framework_JSContainer(this.modal);
                this.icon.addEventListener(new InputWithSelectorEditor.InputWithSelectorEditor$0(this), "click");
                this.modal.addOnItemSeletedListener(new InputWithSelectorEditor.InputWithSelectorEditor$1(this));
            }
        }
    }
    InputWithSelectorEditor["__class"] = "framework.builder.properties.InputWithSelectorEditor";
    InputWithSelectorEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];



    export namespace InputWithSelectorEditor {

        export class InputWithSelectorEditor$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.modal.open();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        InputWithSelectorEditor$0["__interfaces"] = ["framework.EventListener"];



        export class InputWithSelectorEditor$1 implements framework.builder.properties.ItemSelectedListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} item
             */
            public onItemSelected(item : any) {
                this.__parent.selectedItem = item;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        InputWithSelectorEditor$1["__interfaces"] = ["framework.builder.properties.ItemSelectedListener"];


    }

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
            this.designable.applyParam("name", name);
            this.designable.setName(name);
            let editor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            editor.getStructure().reload$framework_design_Designable(this.designable);
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.setValue$java_lang_String(designable.getName());
        }
    }
    NameEditor["__class"] = "framework.builder.properties.NameEditor";
    NameEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


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
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.setValue$java_lang_String(designable.getStyle(parameter.name));
        }
    }
    StyleEditor["__class"] = "framework.builder.properties.StyleEditor";
    StyleEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


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
            this.designable.applyParam("text", text);
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.setValue$java_lang_String(designable.getHtml());
        }
    }
    TextEditor["__class"] = "framework.builder.properties.TextEditor";
    TextEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class ValuePropertyEditor extends framework.builder.properties.AbstractInputPropertyEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.setValue$java_lang_String((<framework.InputField<any>><any>designable).getValue().toString());
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let value : string = this.getValue();
            (<framework.InputField<any>><any>source).setValue(value);
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }
    }
    ValuePropertyEditor["__class"] = "framework.builder.properties.ValuePropertyEditor";
    ValuePropertyEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class AttributeWithOptionsEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
        public constructor() {
            super("attribute");
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            let attr : string = parameter.name;
            let value : string = designable.getAttribute(attr);
            this.getChildren().clear();
            this.setRendered(false);
            for(let index1271=parameter.options.iterator();index1271.hasNext();) {
                let opt = index1271.next();
                {
                    this.addOption(new framework.JSOption(opt.text, opt.value));
                }
            }
            this.setValue$java_lang_String(value);
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
            this.designable.applyParam(attr, value);
            this.designable.setRendered(false);
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }
    }
    AttributeWithOptionsEditor["__class"] = "framework.builder.properties.AttributeWithOptionsEditor";
    AttributeWithOptionsEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class TagEditor extends framework.builder.properties.AbstractSelectPropertyEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            this.designable = designable;
            this.setValue$java_lang_String(designable.getTag());
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            this.designable.applyParam("tag", this.getValue());
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }
    }
    TagEditor["__class"] = "framework.builder.properties.TagEditor";
    TagEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.editors {
    export class CSSEditor extends framework.builder.editors.CodeMirrorEditor {
        editor : CodeMirror.Editor = null;

        public constructor(name : string, editor : framework.builder.editors.VisualEditor) {
            super(name, editor);
            let config : CodeMirror.EditorConfiguration = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
            config.autofocus = true;
            config.lineNumbers = true;
            let keys : Object = <Object>new Object();
            keys["Ctrl-Space"] = "autocomplete";
            config.extraKeys = keys;
            config.mode = "text/css";
            this.setConfig(config);
        }
    }
    CSSEditor["__class"] = "framework.builder.editors.CSSEditor";
    CSSEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.renderer.Renderer","framework.Renderable","framework.InputField"];


}
namespace framework.builder.editors {
    export class HTMLEditor extends framework.builder.editors.CodeMirrorEditor {
        public constructor(name : string, editor : framework.builder.editors.VisualEditor) {
            super(name, editor);
            let config : CodeMirror.EditorConfiguration = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
            config.autofocus = true;
            config.lineNumbers = true;
            let keys : Object = <Object>new Object();
            keys["Ctrl-Space"] = "autocomplete";
            config.extraKeys = keys;
            let mode : Object = <Object>new Object();
            mode["name"] = "html";
            config.mode = mode;
            this.setConfig(config);
        }
    }
    HTMLEditor["__class"] = "framework.builder.editors.HTMLEditor";
    HTMLEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.renderer.Renderer","framework.Renderable","framework.InputField"];


}
namespace framework.builder.editors {
    export class JavascriptEditor extends framework.builder.editors.CodeMirrorEditor {
        public constructor(name : string, editor : framework.builder.editors.VisualEditor) {
            super(name, editor);
            let config : CodeMirror.EditorConfiguration = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
            config.autofocus = true;
            config.lineNumbers = true;
            let keys : Object = <Object>new Object();
            keys["Ctrl-Space"] = "autocomplete";
            config.extraKeys = keys;
            let mode : Object = <Object>new Object();
            mode["name"] = "javascript";
            mode["globalVars"] = true;
            config.mode = mode;
            this.setConfig(config);
        }
    }
    JavascriptEditor["__class"] = "framework.builder.editors.JavascriptEditor";
    JavascriptEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.renderer.Renderer","framework.Renderable","framework.InputField"];


}
namespace framework.builder.properties {
    export class OptionsEditor extends framework.builder.properties.AbstractTextAreaPropertyEditor {
        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @param {*} designable
         * @param {framework.design.Parameter} parameter
         */
        public initEditor(designable : framework.design.Designable, parameter : framework.design.Parameter) {
            let value : string = "";
            let select : framework.JSSelect = <framework.JSSelect><any>designable;
            for(let index1272=select.getChildren().iterator();index1272.hasNext();) {
                let c = index1272.next();
                {
                    let opt : framework.JSOption = <framework.JSOption>c;
                    value = value + "\n" + opt.getText();
                }
            }
            this.setValue$java_lang_String(value);
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let value : string = this.getValue();
            let options : string[] = value.split("\n");
            let select : framework.JSSelect = <framework.JSSelect><any>this.designable;
            select.getChildren().clear();
            select.setRendered(false);
            for(let index1273=0; index1273 < options.length; index1273++) {
                let opt = options[index1273];
                {
                    let option : framework.JSOption = new framework.JSOption(opt, opt);
                    select.addOption(option);
                }
            }
            let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            veditor.dirty();
        }
    }
    OptionsEditor["__class"] = "framework.builder.properties.OptionsEditor";
    OptionsEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


}
namespace framework.builder.libraries {
    export class BasicComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Basic");
            this.addComponents(new framework.builder.BasicComponent("p", "TXT", "Text..."), new framework.builder.BasicComponent("a", "LNK", "Hyper Link"), new framework.builder.BasicComponent("img", "IMG", "Image"), new framework.builder.BasicComponent("div", "BLK", "Block Component"), new framework.builder.BasicComponent("ul", "LST", "List Component"), new framework.builder.BasicComponent("form", "FRM", "Form"), new framework.builder.BasicComponent("input", "IN", "Input"), new framework.builder.BasicComponent("select", "SEL", "Select"), new framework.builder.BasicComponent("textarea", "TA", "Text Area"), new framework.builder.BasicComponent("button", "BTN", "Button"), new framework.builder.BasicComponent("cmp", "CMP", "Component"), new framework.builder.BasicComponent("html", "HTM", "Html Template"));
        }
    }
    BasicComponentLibrary["__class"] = "framework.builder.libraries.BasicComponentLibrary";
    BasicComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LightningComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Lightning");
            this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button"));
        }
    }
    LightningComponentLibrary["__class"] = "framework.builder.libraries.LightningComponentLibrary";
    LightningComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.editors {
    export class StructureDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ structure : framework.builder.editors.Structure;

        public constructor(name : string, root : framework.design.Designable, f : framework.builder.data.File, selector : framework.builder.Selector) {
            super(name);
            this.structure = null;
            this.getTitle().setHtml("Structure");
            this.structure = new framework.builder.editors.Structure("strcy", root, f, selector);
            this.getBody().addChild$framework_JSContainer(this.structure);
        }

        public getStructure() : framework.builder.editors.Structure {
            return this.structure;
        }
    }
    StructureDockedComposer["__class"] = "framework.builder.editors.StructureDockedComposer";
    StructureDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LibrariesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ basicComponentLib : framework.builder.libraries.BasicComponentLibrary = new framework.builder.libraries.BasicComponentLibrary();

        /*private*/ lightningComponentLib : framework.builder.libraries.LightningComponentLibrary = new framework.builder.libraries.LightningComponentLibrary();

        /*private*/ componentsTabs : framework.builder.ComponentsTabs = new framework.builder.ComponentsTabs("componentsTabs");

        public constructor(name : string) {
            super(name);
            this.addClass("library-composer");
            this.getTitle().setHtml("Components Library");
            this.getBody().addChild$framework_JSContainer(this.componentsTabs);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", this.basicComponentLib);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", this.lightningComponentLib);
            this.componentsTabs.getItems().get(0).setActive(true);
        }
    }
    LibrariesDockedComposer["__class"] = "framework.builder.libraries.LibrariesDockedComposer";
    LibrariesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class PropertiesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ mainEditor : framework.builder.properties.ProtertiesEditorTabs = new framework.builder.properties.ProtertiesEditorTabs("mainEditor");

        /*private*/ basicEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.BasicPropertiesEditor("basic");

        /*private*/ advancedPropertiesEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.AdvancedPropertiesEditor();

        public constructor(name : string) {
            super(name);
            this.getTitle().setHtml("Properties");
            this.addClass("properties-composer");
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Basic", this.basicEditorBody).setActive(true);
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Advanced", this.advancedPropertiesEditorBody);
            this.getBody().addChild$framework_JSContainer(this.mainEditor);
        }

        public selectComponent(designable : framework.design.Designable) {
            this.basicEditorBody.setComponent(designable);
            this.advancedPropertiesEditorBody.setComponent(designable);
            this.mainEditor.getItems().get(0).setActive(true);
        }
    }
    PropertiesDockedComposer["__class"] = "framework.builder.properties.PropertiesDockedComposer";
    PropertiesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


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
    TopMenu["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class BasePropertiesEditor extends framework.lightning.FormLayout implements framework.builder.properties.PropertiesEditor {
        component : framework.design.Designable;

        public constructor(name : string) {
            super(name, "div");
            this.component = null;
            this.setHorizontal(true).addClass("slds-form_compact");
        }

        public setComponent(designable : framework.design.Designable) {
            this.component = designable;
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
            } else if(((label != null && label instanceof <any>framework.design.Parameter) || label === null) && ((input != null && (input["__interfaces"] != null && input["__interfaces"].indexOf("framework.design.Designable") >= 0 || input.constructor != null && input.constructor["__interfaces"] != null && input.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || input === null)) {
                return <any>this.addProperty$framework_design_Parameter$framework_design_Designable(label, input);
            } else throw new Error('invalid overload');
        }

        public addProperty$framework_design_Parameter$framework_design_Designable(parameter : framework.design.Parameter, designable : framework.design.Designable) : BasePropertiesEditor {
            let element : framework.lightning.FormElement = new framework.lightning.FormElement("elem", "div");
            element.setLabel(parameter.label);
            let editor : framework.builder.properties.PropertyEditor = parameter.getEditor(this.component);
            element.setInput(<framework.InputField<any>><any>editor);
            this.addFormElement(element);
            return this;
        }
    }
    BasePropertiesEditor["__class"] = "framework.builder.properties.BasePropertiesEditor";
    BasePropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.builder {
    export class NewFile extends framework.builder.ItemSelector {
        /*private*/ lightning : framework.builder.UIFile = new framework.builder.UIFile("lightning").setAbbr("LGT").setTitle("Lightning").setHelp("Salesforce Lightning Project");

        /*private*/ mobile : framework.builder.UIFile = new framework.builder.UIFile("mobile").setAbbr("MOB").setTitle("Mobile Application").setHelp("Mobile application using OnsenUI framework");

        /*private*/ __framework_builder_NewFile_html : framework.builder.UIFile = new framework.builder.UIFile("templates").setAbbr("HTM").setTitle("HTML template").setHelp("Create a fragment of HTML that can be used as template for other components");

        /*private*/ css : framework.builder.UIFile = new framework.builder.UIFile("stylesheets").setAbbr("CSS").setTitle("CSS sheet").setHelp("Create an cascading stylesheet to be included in project");

        /*private*/ javascript : framework.builder.UIFile = new framework.builder.UIFile("scripts").setAbbr("JS").setTitle("Javascript file").setHelp("Create a new javascript file to be included in project");

        /*private*/ __framework_builder_NewFile_data : framework.builder.UIFile = new framework.builder.UIFile("data").setAbbr("DAT").setTitle("Data Environment").setHelp("Creates a new data environment to be included inn the project");

        /*private*/ fileType : string = null;

        /*private*/ builder : framework.builder.Builder;

        /*private*/ structure : framework.builder.editors.Structure;

        public constructor(name : string, builder_ : framework.builder.Builder) {
            super(name, "New File");
            this.builder = null;
            this.structure = null;
            this.builder = builder_;
            this.getFilesList().addItemSelectedListener(new NewFile.NewFile$0(this));
            this.getSaveButton().addEventListener(new NewFile.NewFile$1(this), "click");
        }

        public click() {
            if(this.fileType == null) {
                alert("Please select a file type");
                return;
            }
            let name : string = this.getInput().getValue();
            if(name == null || name.trim().length <= 0) {
                alert("Please enter a name for the file");
                return;
            }
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.fileType, "lightning")) {
                this.createLightning(name);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.fileType, "mobile")) {
            } else {
                this.createFile(name, this.fileType);
            }
        }

        public init(structure : framework.builder.editors.Structure) {
            this.getInput().setValue$java_lang_String("");
            this.getInput().addEventListener(new NewFile.NewFile$2(this), "keypress");
            this.structure = structure;
            this.getFilesList().getChildren().clear();
            this.getFilesList().addFile(this.lightning);
            this.getFilesList().addFile(this.mobile);
            if(!this.builder.isProjectOpen()) {
            } else {
                this.getFilesList().addFile(this.__framework_builder_NewFile_html);
                this.getFilesList().addFile(this.css);
                this.getFilesList().addFile(this.javascript);
                this.getFilesList().addFile(this.__framework_builder_NewFile_data);
            }
            this.getFilesList().setRendered(false);
        }

        public createFile(name : string, type : string) {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "stylesheets")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".css")) {
                    name = name + ".css";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "scripts")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".js")) {
                    name = name + ".js";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "templates")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".html")) {
                    name = name + ".html";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "data")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".dat")) {
                    name = name + ".dat";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "components")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                    name = name + ".cmp";
                }
            }
            let project : framework.builder.data.File = this.builder.getProject();
            project.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, type, new NewFile.NewFile$3(this, type));
        }

        public createLightning(name : string) {
            if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".prj")) {
                name = name + ".prj";
            }
            framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).createProject(name, name, new NewFile.NewFile$4(this));
        }
    }
    NewFile["__class"] = "framework.builder.NewFile";
    NewFile["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace NewFile {

        export class NewFile$0 implements framework.builder.ItemSelectedListener {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.UIFile} file
             * @param {framework.builder.ItemSelector} selector
             */
            public itemSelected(file : framework.builder.UIFile, selector : framework.builder.ItemSelector) {
                this.__parent.fileType = file.getName();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        NewFile$0["__interfaces"] = ["framework.builder.ItemSelectedListener"];



        export class NewFile$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.click();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        NewFile$1["__interfaces"] = ["framework.EventListener"];



        export class NewFile$2 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let kevt : KeyboardEvent = <KeyboardEvent>evt;
                if(kevt.keyCode === 13 || kevt.which === 13) {
                    this.__parent.click();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        NewFile$2["__interfaces"] = ["framework.EventListener"];



        export class NewFile$3 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null) || data === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data);
                } else throw new Error('invalid overload');
            }

            public dataLoaded$java_lang_Object(data : any) {
                this.__parent.close();
                this.__parent.render();
                this.__parent.getBackdrop().render();
                if(this.__parent.structure != null) {
                    this.__parent.structure.reload$java_lang_String(this.type);
                    this.__parent.structure.render();
                }
            }

            constructor(__parent: any, private type: any) {
                this.__parent = __parent;
            }
        }
        NewFile$3["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export class NewFile$4 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {framework.builder.data.DataStructure[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null) || data === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data);
                } else throw new Error('invalid overload');
            }

            public dataLoaded$java_lang_Object(data : any) {
                let project : framework.builder.data.File = new framework.builder.data.File(<Object>new Object(data));
                this.__parent.close();
                this.__parent.render();
                this.__parent.getBackdrop().render();
                this.__parent.builder.openProject(project);
                this.__parent.builder.render();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        NewFile$4["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder {
    export class OpenProject extends framework.builder.ItemSelector implements framework.EventListener, framework.builder.data.RemoteDataListener<any> {
        /*private*/ builder_ : framework.builder.Builder;

        /*private*/ selectedItem : framework.builder.UIFile = null;

        public constructor(name : string, builder : framework.builder.Builder) {
            super(name, "Open Project");
            this.builder_ = null;
            this.builder_ = builder;
            this.getSaveButton().addEventListener(this, "click");
            this.getInput().setVisible(false);
            this.getSaveButton().setLabel("Open");
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            if(source != null && source instanceof <any>framework.builder.UIFile) {
                this.selectedItem = (<framework.builder.UIFile>source);
            } else if(this.selectedItem != null) {
                let p : framework.builder.data.File = <framework.builder.data.File>this.selectedItem.getData();
                this.builder_.openProject(p);
                this.close();
                this.getBackdrop().close();
            }
        }

        /**
         * 
         * @param {framework.builder.data.DataStructure[]} data
         */
        public dataLoaded(data? : any) : any {
            if(((data != null) || data === null)) {
                return <any>this.dataLoaded$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }

        public dataLoaded$java_lang_Object(data : any) {
            let nprojects : Array<Object> = <Array<Object>>data;
            for(let index1274=0; index1274 < nprojects.length; index1274++) {
                let p = nprojects[index1274];
                {
                    let project : framework.builder.data.File = new framework.builder.data.File(p);
                    let file : framework.builder.UIFile = new framework.builder.UIFile(project.getName());
                    file.setTitle(project.getTitle());
                    file.setAbbr("LGT");
                    file.setData(project);
                    file.addEventListener(this, "click");
                    this.getFilesList().addFile(file);
                }
            }
            this.render();
        }

        public init() {
            this.getFilesList().getChildren().clear();
            this.getFilesList().setRendered(false);
            framework.core.BeanFactory.getInstance().getBeanOfType<any>(framework.builder.data.ProjectService).getProjects(this);
        }
    }
    OpenProject["__class"] = "framework.builder.OpenProject";
    OpenProject["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.builder.data.RemoteDataListener","framework.Renderable"];


}
namespace framework.builder.data {
    export class FieldSelector extends framework.builder.properties.ItemSelector<framework.builder.data.DataField> {
        /*private*/ labels : string[] = ["Name", "Label", "Type"];

        /*private*/ fields : string[] = ["name", "label", "type"];

        public constructor(name : string, structure : framework.builder.data.DataStructure) {
            super(name);
            for(let i : number = 0; i < this.labels.length; i++) {
                let col : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn(this.fields[i], this.fields[i], this.labels[i]);
                this.addColumn(col);
            };
            let actions : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn("actions", "actins", " ");
            actions.setWidth("20px");
            structure.getFields(new FieldSelector.FieldSelector$0(this));
        }

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {boolean}
         */
        public isActionColumn(table : framework.lightning.table.Table, value : any, row : number, column : number) : boolean {
            return column === this.labels.length;
        }
    }
    FieldSelector["__class"] = "framework.builder.data.FieldSelector";
    FieldSelector["__interfaces"] = ["framework.interactions.Droppable","framework.lightning.table.TableCellRenderer","framework.Renderable"];



    export namespace FieldSelector {

        export class FieldSelector$0 implements framework.builder.data.RemoteDataListener<java.util.List<framework.builder.data.DataField>> {
            public __parent: any;
            public dataLoaded$java_util_List(data : java.util.List<framework.builder.data.DataField>) {
                this.__parent.setDataList(data);
            }

            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null && (data["__interfaces"] != null && data["__interfaces"].indexOf("java.util.List") >= 0 || data.constructor != null && data.constructor["__interfaces"] != null && data.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || data === null)) {
                    return <any>this.dataLoaded$java_util_List(data);
                } else throw new Error('invalid overload');
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        FieldSelector$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.designables {
    export class JSDesignableLink extends framework.designables.JSDesignableTextComponent {
        public constructor(name : string) {
            super(name, "a");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            super.applyParam(key, value);
        }

        /**
         * 
         * @return {*}
         */
        public getParameters() : java.util.List<framework.design.Parameter> {
            let parameters : java.util.List<framework.design.Parameter> = super.getParameters();
            for(let index1275=parameters.iterator();index1275.hasNext();) {
                let p = index1275.next();
                {
                    if(p != null && p instanceof <any>framework.design.TagParameter) {
                        parameters.remove(p);
                        break;
                    }
                }
            }
            parameters.add(new framework.design.AttributeParameter("href", "Href", "Basic"));
            parameters.add(new framework.design.AttributeParameter("target", "Target", "Basic"));
            return parameters;
        }
    }
    JSDesignableLink["__class"] = "framework.designables.JSDesignableLink";
    JSDesignableLink["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class AdvancedPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        public constructor() {
            super("advanced");
        }

        public setComponent(designable : framework.design.Designable) {
            super.setComponent(designable);
            this.clear();
            for(let index1276=this.component.getParameters().iterator();index1276.hasNext();) {
                let p = index1276.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(p.category,"advanced"))) this.addProperty$framework_design_Parameter$framework_design_Designable(p, designable);
                }
            }
        }
    }
    AdvancedPropertiesEditor["__class"] = "framework.builder.properties.AdvancedPropertiesEditor";
    AdvancedPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


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
            for(let index1277=designable.getParameters().iterator();index1277.hasNext();) {
                let param = index1277.next();
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(param.category,"Basic"))) {
                        this.addProperty$framework_design_Parameter$framework_design_Designable(param, designable);
                    }
                }
            }
        }
    }
    BasicPropertiesEditor["__class"] = "framework.builder.properties.BasicPropertiesEditor";
    BasicPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}


framework.designables.JSDesignableTextComponent.textTags_$LI$();

framework.designables.JSDesignableTextComponent.__static_initialize();

framework.builder.Builder.websocket_$LI$();

framework.designables.JSDesignableButton.stateLabels_$LI$();

framework.lightning.table.Table.SELECT_ROW_EVT_$LI$();

framework.lightning.Button.states_$LI$();

framework.JSTextArea.TEXT_AREA_RENDERER_$LI$();

framework.JSContainer.DEFAULT_RENDERER_$LI$();

framework.interactions.InteractionsDecorator.droppableRenderer_$LI$();

framework.interactions.InteractionsDecorator.draggableRenderer_$LI$();

framework.core.BeanFactory.INSTANCE_$LI$();

framework.builder.editors.EventTypes.events_$LI$();

framework.builder.data.DataType.Types_$LI$();

framework.builder.data.BasicDataEnvironment.structures_$LI$();

framework.Boot.main(null);
