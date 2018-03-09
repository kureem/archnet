/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace framework {
    export interface Adaptor {
        Execute(component : any, serviceName : string, request : Object, callback : framework.ServiceCallback);
    }
}
namespace framework.builder {
    export class BuilderEventListener implements framework.EventListener {
        /*private*/ jsSource : string;

        /*private*/ name : string;

        /*private*/ type : string;

        public constructor(jsSource : string, name : string, type : string) {
            this.jsSource = null;
            this.name = null;
            this.type = null;
            this.jsSource = jsSource;
            this.name = name;
            this.type = type;
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
                let $scope : Object = source.getScope();
                $scope["xx"] = "";
                if(<boolean>window["lightning"]) {
                    let fn : string = this.name + "_" + this.type;
                    let myapp : framework.JSContainer = source.getRoot();
                    (<any>myapp.constructor);
                    eval("myapp.helper." + fn + "(source,evt);");
                } else {
                    eval(this.jsSource);
                }
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
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        public getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>) {
            if(BasicDataEnvironment.structures_$LI$().length === 0) {
                framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").getDataStructures(source, new BasicDataEnvironment.BasicDataEnvironment$0(this, listener));
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
            for(let index13357=0; index13357 < BasicDataEnvironment.structures_$LI$().length; index13357++) {
                let structure = BasicDataEnvironment.structures_$LI$()[index13357];
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
                for(let index13358=0; index13358 < sobjects.length; index13358++) {
                    let o = sobjects[index13358];
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
        getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>);

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
    export class DataService {
        public getDataTypes(listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/objects/describe", (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public describe(type : string, listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/objects/describe/" + type, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public query(query : string, listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/objects/query?q=" + query, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public create(type : string, fields : framework.util.Map<string, any>, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            {
                let array13360 = fields.keySet();
                for(let index13359=0; index13359 < array13360.length; index13359++) {
                    let key = array13360[index13359];
                    {
                        data[key] = fields.get(key);
                    }
                }
            }
            $.post("/projects/create?name=" + type, data, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public update(type : string, objectId : string, fields : framework.util.Map<string, any>, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            {
                let array13362 = fields.keySet();
                for(let index13361=0; index13361 < array13362.length; index13361++) {
                    let key = array13362[index13361];
                    {
                        data[key] = fields.get(key);
                    }
                }
            }
            $.post("/projects/update?name=" + type + "&id=" + objectId, data, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public delete(type : string, objectId : string, listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/projects/delete?name=" + type + "&id=" + objectId, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }
    }
    DataService["__class"] = "framework.builder.data.DataService";

}
namespace framework.builder.data {
    export interface DataSource<T> {
        getList(loader : framework.builder.data.RemoteDataListener<Array<T>>, offset : number, max : number);

        /**
         * 
         * @param {Object} item
         * @param {*} loader
         */
        getItem(item? : any, loader? : any) : any;

        count(loader : framework.builder.data.RemoteDataListener<number>);

        /**
         * 
         * @param {Object} data
         * @param {*} response
         */
        save(data? : any, response? : any) : any;

        /**
         * 
         * @param {Object} data
         * @param {*} response
         */
        delete(data? : any, response? : any) : any;
    }
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

        public getStylesheets() : Array<File> {
            return this.getChild("stylesheets").getChildren();
        }

        public getScripts() : Array<File> {
            return this.getChild("scripts").getChildren();
        }

        public getTemplates() : Array<File> {
            return this.getChild("templates").getChildren();
        }

        public getDataSources() : Array<File> {
            return this.getChild("datasources").getChildren();
        }

        public getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataStructure>>) {
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.DataEnvironment").getDataStructures(source, listener);
        }

        public getComponents() : Array<File> {
            return this.getChild("components").getChildren();
        }

        public getFile(name : string, type : string) : File {
            return this.getChild(type).getChild(name);
        }

        public deleteFile(source : framework.JSContainer, name : string, type : string, l : framework.builder.data.RemoteDataListener<any>) {
            let f : File = this.getFile(name, type);
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").deleteFile(source, f.getPath(), new File.File$0(this, l));
        }

        public getChild(name : string) : File {
            {
                let array13364 = this.getChildren();
                for(let index13363=0; index13363 < array13364.length; index13363++) {
                    let f = array13364[index13363];
                    {
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(f.getName(), name)) {
                            return f;
                        }
                    }
                }
            }
            return null;
        }

        public createCss(source : framework.JSContainer, name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "stylesheets", listener);
        }

        public createTemplate(source : framework.JSContainer, name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "templates", listener);
        }

        public createScript(source : framework.JSContainer, name : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "scripts", listener);
        }

        public createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source : framework.JSContainer, name : string, type : string, listener : framework.builder.data.RemoteDataListener<any>) {
            this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, type, listener);
        }

        public createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source : framework.JSContainer, name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let path : string = this.getPath() + "/" + dir;
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").createFile(source, name, title, path, new File.File$1(this, dir, listener));
        }

        public createFile(source? : any, name? : any, title? : any, dir? : any, listener? : any) : any {
            if(((source != null && source instanceof <any>framework.JSContainer) || source === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof dir === 'string') || dir === null) && ((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || listener === null)) {
                return <any>this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, title, dir, listener);
            } else if(((source != null && source instanceof <any>framework.JSContainer) || source === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((dir != null && (dir["__interfaces"] != null && dir["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || dir.constructor != null && dir.constructor["__interfaces"] != null && dir.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || dir === null) && listener === undefined) {
                return <any>this.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, title, dir);
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
                let array13366 = <Array<Object>>this.file["children"];
                for(let index13365=0; index13365 < array13366.length; index13365++) {
                    let o = array13366[index13365];
                    {
                        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(o["name"],f.getName()))) {
                            children.push(o);
                        }
                    }
                }
            }
            this.file["children"] = children;
        }

        public getChildren() : Array<File> {
            let result : Array<File> = <any>(new Array<any>());
            {
                let array13368 = <Array<Object>>this.file["children"];
                for(let index13367=0; index13367 < array13368.length; index13367++) {
                    let o = array13368[index13367];
                    {
                        result.push(new File(o));
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
    export class HerokuProjectService implements framework.builder.data.ProjectService {
        public createProject(source : framework.JSContainer, name : string, title : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["name"] = name;
            data["title"] = title;
            $.get("/projects/create-project", data, (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            }, "json");
        }

        public getProjects(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/projects/get-projects", (t : any, u : string, v : JQueryXHR) => {
                listener.dataLoaded(t);
                return null;
            });
        }

        public saveFile(source : framework.JSContainer, file : framework.builder.data.File, listener : framework.builder.data.RemoteDataListener<any>) {
            $.post("/projects/update-file", file.getNative(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public createFile(source : framework.JSContainer, name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["name"] = name;
            data["title"] = title;
            data["dir"] = dir;
            $.post("/projects/create-file", data, (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public deleteFile(source : framework.JSContainer, path : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let data : Object = <Object>new Object();
            data["path"] = path;
            $.get("/projects/delete-file", data, (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>) {
            $.get("/projects/structures", <any>new Object(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        public getDataStructure(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>, name : string) {
            $.get("/projects/structures/" + name, <any>new Object(), (t : any, u : string, v : JQueryXHR) => {
                if(listener != null) listener.dataLoaded(t);
                return t;
            });
        }

        constructor() {
        }
    }
    HerokuProjectService["__class"] = "framework.builder.data.HerokuProjectService";
    HerokuProjectService["__interfaces"] = ["framework.builder.data.ProjectService"];


}
namespace framework.builder.data {
    export interface ProjectService {
        createProject(source : framework.JSContainer, name : string, title : string, listener : framework.builder.data.RemoteDataListener<any>);

        getProjects(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>);

        saveFile(source : framework.JSContainer, file : framework.builder.data.File, listener : framework.builder.data.RemoteDataListener<any>);

        createFile(source : framework.JSContainer, name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>);

        deleteFile(source : framework.JSContainer, path : string, listener : framework.builder.data.RemoteDataListener<any>);

        getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>);

        getDataStructure(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>, name : string);
    }
}
namespace framework.builder.data {
    export interface RemoteDataListener<T> {
        /**
         * 
         * @param {framework.builder.data.DataField[]} data_
         */
        dataLoaded(data_? : any) : any;
    }
}
namespace framework.builder.data {
    export class RestDataSource implements framework.builder.data.DataSource<Object> {
        /*private*/ config : Object;

        /*private*/ cached : Array<Object> = <any>(new Array<any>());

        public getConfig() : Object {
            return this.config;
        }

        public setUrl(url : string) {
            this.config["url"] = url;
        }

        public setFilter(filter : Object) {
            this.config["filter"] = filter;
        }

        public setConfig(config : Object) {
            this.config = config;
        }

        public getCached() : Array<Object> {
            return this.cached;
        }

        /**
         * 
         * @param {*} loader
         * @param {number} offset
         * @param {number} max
         */
        public getList(loader : framework.builder.data.RemoteDataListener<Array<Object>>, offset : number, max : number) {
            let url : string = <string>this.config["url"];
            let filter : Object = <Object>this.config["filter"];
            if(filter == null) {
                filter = <Object>new Object();
            }
            filter["offset"] = offset;
            filter["max"] = max;
            $.get(url, filter, (t : any, u : string, v : JQueryXHR) => {
                this.cached = (<Array<Object>>t);
                loader.dataLoaded(<Array<Object>>t);
                return null;
            }, "json");
        }

        public save$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data : Object, response : framework.builder.data.RemoteDataListener<Object>) {
            let url : string = <string>this.config["url"];
            $.post(url, data, (t : any, u : string, v : JQueryXHR) => {
                response.dataLoaded(<Object>t);
                return null;
            }, "json");
        }

        /**
         * 
         * @param {Object} data
         * @param {*} response
         */
        public save(data? : any, response? : any) : any {
            if(((data != null && data instanceof <any>Object) || data === null) && ((response != null && (response["__interfaces"] != null && response["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || response.constructor != null && response.constructor["__interfaces"] != null && response.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || response === null)) {
                return <any>this.save$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data, response);
            } else throw new Error('invalid overload');
        }

        public delete$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data : Object, response : framework.builder.data.RemoteDataListener<Object>) {
            let url : string = <string>this.config["url"];
            $.post(url + "/delete", data, (t : any, u : string, v : JQueryXHR) => {
                response.dataLoaded(<Object>t);
                return null;
            }, "json");
        }

        /**
         * 
         * @param {Object} data
         * @param {*} response
         */
        public delete(data? : any, response? : any) : any {
            if(((data != null && data instanceof <any>Object) || data === null) && ((response != null && (response["__interfaces"] != null && response["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || response.constructor != null && response.constructor["__interfaces"] != null && response.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || response === null)) {
                return <any>this.delete$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data, response);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {*} loader
         */
        public count(loader : framework.builder.data.RemoteDataListener<number>) {
            let url : string = <string>this.config["url"];
            let filter : Object = <Object>this.config["filter"];
            if(filter == null) {
                filter = <Object>new Object();
            }
            $.get(url + "/count", filter, (t : any, u : string, v : JQueryXHR) => {
                loader.dataLoaded(<number>t);
                return null;
            }, "json");
        }

        public getItem$jsweet_lang_Object$framework_builder_data_RemoteDataListener(item : Object, loader : framework.builder.data.RemoteDataListener<Object>) {
            let url : string = <string>this.config["url"];
            $.get(url + "/load", item, (t : any, u : string, v : JQueryXHR) => {
                loader.dataLoaded(<Object>t);
                return null;
            }, "json");
        }

        /**
         * 
         * @param {Object} item
         * @param {*} loader
         */
        public getItem(item? : any, loader? : any) : any {
            if(((item != null && item instanceof <any>Object) || item === null) && ((loader != null && (loader["__interfaces"] != null && loader["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || loader.constructor != null && loader.constructor["__interfaces"] != null && loader.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || loader === null)) {
                return <any>this.getItem$jsweet_lang_Object$framework_builder_data_RemoteDataListener(item, loader);
            } else throw new Error('invalid overload');
        }

        constructor() {
            this.config = null;
        }
    }
    RestDataSource["__class"] = "framework.builder.data.RestDataSource";
    RestDataSource["__interfaces"] = ["framework.builder.data.DataSource"];


}
namespace framework.builder.data {
    export class SalesforceProjectService implements framework.builder.data.ProjectService {
        /**
         * 
         * @param {framework.JSContainer} source
         * @param {string} name
         * @param {string} title
         * @param {*} listener
         */
        public createProject(source : framework.JSContainer, name : string, title : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let request : Object = <Object>new Object();
            request["name"] = name;
            request["title"] = title;
            request["method"] = "createProject";
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(source, "ProjectService", request, (a, b) => {
                listener.dataLoaded(a);
                return true;
            });
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        public getProjects(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>) {
            let request : Object = <Object>new Object();
            request["method"] = "getProjects";
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(source, "ProjectService", request, (a, b) => {
                listener.dataLoaded(a);
                return true;
            });
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {framework.builder.data.File} file
         * @param {*} listener
         */
        public saveFile(source : framework.JSContainer, file : framework.builder.data.File, listener : framework.builder.data.RemoteDataListener<any>) {
            let request : Object = <Object>new Object();
            request["file"] = file;
            request["method"] = "saveFile";
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(source, "ProjectService", request, (a, b) => {
                listener.dataLoaded(a);
                return true;
            });
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {string} name
         * @param {string} title
         * @param {string} dir
         * @param {*} listener
         */
        public createFile(source : framework.JSContainer, name : string, title : string, dir : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let request : Object = <Object>new Object();
            request["name"] = name;
            request["title"] = title;
            request["dir"] = dir;
            request["method"] = "createFile";
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(source, "ProjectService", request, (a, b) => {
                listener.dataLoaded(a);
                return true;
            });
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {string} path
         * @param {*} listener
         */
        public deleteFile(source : framework.JSContainer, path : string, listener : framework.builder.data.RemoteDataListener<any>) {
            let request : Object = <Object>new Object();
            request["path"] = path;
            request["method"] = "deleteFile";
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(source, "ProjectService", request, (a, b) => {
                listener.dataLoaded(a);
                return true;
            });
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {*} listener
         */
        public getDataStructures(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>) {
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {*} listener
         * @param {string} name
         */
        public getDataStructure(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<any>, name : string) {
        }

        constructor() {
        }
    }
    SalesforceProjectService["__class"] = "framework.builder.data.SalesforceProjectService";
    SalesforceProjectService["__interfaces"] = ["framework.builder.data.ProjectService"];


}
namespace framework.builder.editors {
    export interface DesignableEditor {
        getRootItem() : framework.design.Designable;
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
namespace framework.builder.editors {
    export class NewFileStructureEventListener implements framework.EventListener {
        /*private*/ type : string;

        /*private*/ file : framework.builder.data.File;

        /*private*/ structure : framework.builder.editors.Structure;

        public constructor(type : string, file : framework.builder.data.File, structure : framework.builder.editors.Structure) {
            this.type = null;
            this.file = null;
            this.structure = null;
            this.type = type;
            this.file = file;
            this.structure = structure;
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let name : string = prompt("Enter the name");
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "stylesheets")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".css")) {
                    name = name + ".css";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "scripts")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".js")) {
                    name = name + ".js";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "templates")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".html")) {
                    name = name + ".html";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "data")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".dat")) {
                    name = name + ".dat";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "components")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                    name = name + ".cmp";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "datasources")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".ds")) {
                    name = name + ".ds";
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.type, "variables")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".var")) {
                    name = name + ".var";
                }
            }
            this.file.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, this.type, new NewFileStructureEventListener.NewFileStructureEventListener$0(this));
        }
    }
    NewFileStructureEventListener["__class"] = "framework.builder.editors.NewFileStructureEventListener";
    NewFileStructureEventListener["__interfaces"] = ["framework.EventListener"];



    export namespace NewFileStructureEventListener {

        export class NewFileStructureEventListener$0 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                this.__parent.structure.reload$java_lang_String(this.__parent.type);
                this.__parent.structure.render();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        NewFileStructureEventListener$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


    }

}
namespace framework.builder.editors {
    export interface Visitor {
        doVisit(host : framework.design.Designable);
    }
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
            for(let index13369=0; index13369 < keys.length; index13369++) {
                let key = keys[index13369];
                {
                    let value : string = component.styles[key].toString();
                    instance.setStyle(key, value);
                }
            }
        }

        configureParameters(instance : framework.design.Designable, component : framework.builder.marshalling.Component, designMode : boolean) {
            let keys : string[] = Object.keys(component.parameters);
            for(let index13370=0; index13370 < keys.length; index13370++) {
                let key = keys[index13370];
                {
                    if(component.parameters[key] != null) {
                        let value : string = component.parameters[key].toString();
                        instance.applyParam(key, value);
                    }
                }
            }
        }

        configureEvents(instance : framework.design.Designable, component : framework.builder.marshalling.Component) {
            for(let index13371=0; index13371 < component.events.length; index13371++) {
                let event = component.events[index13371];
                {
                    let listener : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(event.source, event.name, event.type);
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
            thIns.getComponent().custom = component.custom;
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
        /*private*/ factories : framework.util.Map<string, framework.builder.marshalling.ComponentFactory> = <any>(new framework.util.HashMap<any, any>());

        /**
         * 
         * @param {string} identifier
         * @param {*} factory
         */
        public registerComponentFactory(identifier : string, factory : framework.builder.marshalling.ComponentFactory) {
            if(!this.factories.containsKey(identifier)) {
                this.factories.put(identifier, factory);
            } else {
                throw Object.defineProperty(new Error("duplicate component factory:->" + identifier), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
                return null;
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

        public name : string;

        constructor() {
            this.type = null;
            this.source = null;
            this.name = null;
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

        public data : Object = <Object>new Object();

        public custom : Object = <Object>new Object();

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
            let parameters : Array<framework.design.Parameter> = designable.getParameters();
            {
                let array13373 = designable.getStyleNames();
                for(let index13372=0; index13372 < array13373.length; index13372++) {
                    let s = array13373[index13372];
                    {
                        c.styles[s] = designable.getStyle(s);
                    }
                }
            }
            for(let index13374=0; index13374 < parameters.length; index13374++) {
                let p = parameters[index13374];
                {
                    c.parameters[p.name] = p.extractValue(designable);
                }
            }
            {
                let array13376 = Object.keys(designable.getListeners());
                for(let index13375=0; index13375 < array13376.length; index13375++) {
                    let key = array13376[index13375];
                    {
                        {
                            let array13378 = <Array<framework.EventListener>>designable.getListeners()[key];
                            for(let index13377=0; index13377 < array13378.length; index13377++) {
                                let l = array13378[index13377];
                                {
                                    if(l != null && l instanceof <any>framework.builder.BuilderEventListener) {
                                        let bel : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>l;
                                        let be : framework.builder.marshalling.BuilderEvent = new framework.builder.marshalling.BuilderEvent();
                                        be.source = bel.getSource();
                                        be.type = key;
                                        be.name = designable.getName();
                                        c.events.push(be);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            {
                let array13380 = designable.getDesignables();
                for(let index13379=0; index13379 < array13380.length; index13379++) {
                    let child = array13380[index13379];
                    {
                        let childC : framework.builder.marshalling.Component = MarshallUtil.extract(child);
                        c.children.push(childC);
                    }
                }
            }
            if(designable.getComponent() != null) c.custom = designable.getComponent().custom;
            c.data = <Object>designable.getData();
            return c;
        }

        public static toDesignable(component : framework.builder.marshalling.Component) : framework.design.Designable {
            let des : framework.design.Designable = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, false);
            des['setData$java_lang_Object'](component.data);
            des.getComponent().custom = component.custom;
            if(component.children != null) {
                for(let index13381=0; index13381 < component.children.length; index13381++) {
                    let c = component.children[index13381];
                    {
                        let child : framework.design.Designable = MarshallUtil.toDesignable(c);
                        des.addDesignable(child);
                        let exp : string = child.getAttribute("exposeAs");
                        if(exp != null && exp.length > 0) {
                            new framework.designables.DesignableDelegate(child).exposeVariable(exp);
                        }
                    }
                }
            }
            return des;
        }

        public static generateController(component : framework.builder.marshalling.Component) {
            let s : string = "";
            MarshallUtil.controller(component, s);
            console.log(s);
        }

        public static controller(component : framework.builder.marshalling.Component, start : string) {
            let des : framework.design.Designable = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, false);
            des['setData$java_lang_Object'](component.data);
            for(let index13382=0; index13382 < component.events.length; index13382++) {
                let event = component.events[index13382];
                {
                    start = start + "\n" + des.getName() + ":function(source,event){\n" + event.source + "\n}";
                }
            }
            if(component.children != null) {
                for(let index13383=0; index13383 < component.children.length; index13383++) {
                    let c = component.children[index13383];
                    {
                        MarshallUtil.controller(c, start);
                    }
                }
            }
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
            cc.data = <Object>o["data"];
            let events : Array<Object> = <Array<Object>>o["events"];
            if(events != null && events.length > 0) {
                let bevents : Array<framework.builder.marshalling.BuilderEvent> = <any>(new Array<framework.builder.marshalling.BuilderEvent>());
                for(let index13384=0; index13384 < events.length; index13384++) {
                    let e = events[index13384];
                    {
                        let event : framework.builder.marshalling.BuilderEvent = new framework.builder.marshalling.BuilderEvent();
                        event.source = e["source"].toString();
                        event.type = e["type"].toString();
                        event.name = e["name"].toString();
                        bevents.push(event);
                    }
                }
                cc.events = bevents;
            }
            let bchildren : Array<framework.builder.marshalling.Component> = <any>(new Array<framework.builder.marshalling.Component>());
            let children : Array<Object> = <Array<Object>>o["children"];
            if(children != null && children.length > 0) {
                for(let index13385=0; index13385 < children.length; index13385++) {
                    let c = children[index13385];
                    {
                        bchildren.push(MarshallUtil.toComponent$jsweet_lang_Object(c));
                    }
                }
                cc.children = bchildren;
            }
            cc.custom = <Object>o["custom"];
            return cc;
        }
    }
    MarshallUtil["__class"] = "framework.builder.marshalling.MarshallUtil";

}
namespace framework.builder.properties {
    export interface ExtPropertiesEditor extends framework.builder.properties.PropertiesEditor {
        getLabel(me : framework.design.ExtDesignable) : string;
    }
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
            evt.stopPropagation();
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
        /*private*/ decorators : Array<framework.core.Decorator> = <any>(new Array<any>());

        /**
         * 
         * @param {*} decorator
         */
        public registerDecorator(decorator : framework.core.Decorator) {
            this.decorators.push(decorator);
        }

        /**
         * 
         * @return {*[]}
         */
        public getDecorators() : Array<framework.core.Decorator> {
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

        /*private*/ beans : Object = <Object>new Object();

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
            this.beans[mixxingName] = instance;
        }

        public getBeanOfType<T>(clazz : any) : T {
            {
                let array13387 = Object.keys(this.beans);
                for(let index13386=0; index13386 < array13387.length; index13386++) {
                    let key = array13387[index13386];
                    {
                        let bean : any = this.beans[key];
                        try {
                            if((<any>bean.constructor).isAssignableFrom(clazz)) {
                                return <T>bean;
                            }
                        } catch(e) {
                        };
                    }
                }
            }
            let mixing : string = clazz.toString();
            if(this.beans.hasOwnProperty(mixing)) {
                return <T>this.beans[mixing];
            }
            return null;
        }

        public getBean(name : string) : any {
            return this.beans[name];
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

        getDecorators() : Array<framework.core.Decorator>;
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

        getDesignables() : Array<Designable>;

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        getComponent(table? : any, value? : any, row? : any, column? : any) : any;

        getParameters() : Array<framework.design.Parameter>;

        addDesignable(designable : Designable);

        removeDesignable(designable : Designable);

        moveDesignable(designable : Designable, steps : number);

        getScope() : Object;
    }
}
namespace framework.design {
    export interface ExtDesignable extends framework.design.Designable {
        getExtEditors() : framework.builder.properties.ExtPropertiesEditor[];
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

        public options : Array<framework.design.Option> = <any>(new Array<any>());

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
    export class DataEvent extends Event {
        public data : Object;

        public constructor(type : string, data : Object) {
            super(type);
            this.data = null;
            this.data = data;
        }
    }
    DataEvent["__class"] = "framework.designables.DataEvent";

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
            let raw : string = value;
            this.component.parameters[key] = raw;
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
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "dhidden")) {
                this.ui.setVisible(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "draggable")) {
                this.ui.setAttribute("draggable", value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"exposeAs"))) {
                this.ui.setAttribute(key, value);
                this.exposeVariable(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"label"))) {
                this.ui.setAttribute(key, value);
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.ui.getTag(), "button")) {
                    this.ui.setHtml(value);
                }
            } else {
                if(value.length < 200) {
                    this.ui.setAttribute(key, value);
                }
            }
        }

        public static containsName$java_lang_String$framework_design_Designable(name : string, ui : framework.design.Designable) : boolean {
            {
                let array13389 = ui.getChildren();
                for(let index13388=0; index13388 < array13389.length; index13388++) {
                    let c = array13389[index13388];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getName(),name))) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        public static containsName(name? : any, ui? : any) : any {
            if(((typeof name === 'string') || name === null) && ((ui != null && (ui["__interfaces"] != null && ui["__interfaces"].indexOf("framework.design.Designable") >= 0 || ui.constructor != null && ui.constructor["__interfaces"] != null && ui.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || ui === null)) {
                return <any>framework.designables.DesignableDelegate.containsName$java_lang_String$framework_design_Designable(name, ui);
            } else if(((typeof name === 'string') || name === null) && ((ui != null && ui instanceof <any>Array) || ui === null)) {
                return <any>framework.designables.DesignableDelegate.containsName$java_lang_String$jsweet_lang_Array(name, ui);
            } else throw new Error('invalid overload');
        }

        /*private*/ static containsName$java_lang_String$jsweet_lang_Array(name : string, children : Array<framework.design.Designable>) : boolean {
            for(let index13390=0; index13390 < children.length; index13390++) {
                let c = children[index13390];
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
            while((DesignableDelegate.containsName$java_lang_String$framework_design_Designable(name, this.ui))) {
                count++;
                name = designable.getName() + "_" + count;
            };
            designable.applyParam("name", name);
            this.ui['addChild$framework_JSContainer'](<framework.JSContainer><any>designable);
        }

        public static guessName(children : Array<framework.design.Designable>, designable : framework.design.Designable) : string {
            let sname : string = designable.getName();
            let name : string = sname;
            let count : number = 0;
            while((DesignableDelegate.containsName$java_lang_String$jsweet_lang_Array(name, children))) {
                count++;
                name = sname + "_" + count;
            };
            designable.applyParam("name", name);
            return name;
        }

        public getComponent() : framework.builder.marshalling.Component {
            return this.component;
        }

        public static getScope(cont : framework.JSContainer) : Object {
            let r : framework.Renderable = cont;
            while((true)) {
                if(r == null) {
                    return null;
                }
                if(r != null && r instanceof <any>framework.lightning.LightningApplication) {
                    let l : framework.lightning.LightningApplication = <framework.lightning.LightningApplication><any>r;
                    return l.scope;
                }
                r = r.getParent();
            };
        }

        public exposeVariable(varName : string) {
            let r : framework.Renderable = this.ui;
            while((true)) {
                if(r == null) {
                    break;
                }
                if(r != null && r instanceof <any>framework.lightning.LightningApplication) {
                    let l : framework.lightning.LightningApplication = <framework.lightning.LightningApplication><any>r;
                    l.exposeAsVariable(varName, this.ui);
                    break;
                }
                r = r.getParent();
            };
        }

        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = <any>(new Array<any>());
            params.push(new framework.design.NameParameter("Name", "Basic"));
            params.push(new framework.design.AttributeParameter("class", "Style class", "Basic"));
            params.push(new framework.design.AttributeParameter("style", "Style", "Basic"));
            let hidden : framework.design.AttributeParameter = new framework.design.AttributeParameter("dhidden", "Hidden", "Basic");
            hidden.options.push(new framework.design.Option("", ""));
            let draggable : framework.design.AttributeParameter = new framework.design.AttributeParameter("draggable", "Draggable", "Basic");
            draggable.options.push(new framework.design.Option("", ""));
            let exposeAs : framework.design.AttributeParameter = new framework.design.AttributeParameter("exposeAs", "Expose with var", "Basic");
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.ui.getTag(), "button")) {
                let label : framework.design.AttributeParameter = new framework.design.AttributeParameter("label", "Label", "Basic");
                params.push(label);
            }
            params.push(hidden, draggable, exposeAs);
            return params;
        }

        public removeDesignable(designable : framework.design.Designable) {
            this.ui.removeChild(designable);
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
                } else if(nextIndex >= this.ui.getChildren().length - 1) {
                    nextIndex = this.ui.getChildren().length - 2;
                }
                if(index !== nextIndex) {
                    this.ui.removeChild(designable);
                    this.ui.addChildAt(nextIndex, designable);
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
    export class HerokuAdaptor implements framework.Adaptor {
        public Execute(component : any, serviceName : string, request : Object, callback : framework.ServiceCallback) {
            $.get("/service/dispatch/" + serviceName, <any>request, (t : any, u : string, v : JQueryXHR) => {
                callback(t, v.status);
                return true;
            }, "json");
        }

        constructor() {
        }
    }
    HerokuAdaptor["__class"] = "framework.HerokuAdaptor";
    HerokuAdaptor["__interfaces"] = ["framework.Adaptor"];


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

        public static types : string[]; public static types_$LI$() : string[] { if(InputTypes.types == null) InputTypes.types = [InputTypes.text, InputTypes.password, InputTypes.datetime, InputTypes.datetime_local, InputTypes.date, InputTypes.month, InputTypes.time, InputTypes.week, InputTypes.number, InputTypes.email, InputTypes.url, InputTypes.search, InputTypes.tel, InputTypes.color, InputTypes.checkbox, InputTypes.radio]; return InputTypes.types; };
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
        /*private*/ columns : Array<framework.lightning.table.TableColumn> = <any>(new Array<any>());

        public constructor() {
        }

        /**
         * 
         * @param {framework.lightning.table.TableColumn} aColumn
         */
        public addColumn(aColumn : framework.lightning.table.TableColumn) {
            this.columns.push(aColumn);
        }

        /**
         * 
         * @return {number}
         */
        public getColumnCount() : number {
            return this.columns.length;
        }

        /**
         * 
         * @param {*} columnIdentifier
         * @return {number}
         */
        public getColumnIndex(columnIdentifier : any) : number {
            for(let i : number = 0; i < this.columns.length; i++) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.columns[i].getIdentifier(),columnIdentifier))) {
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
            return this.columns[columnIndex];
        }
    }
    DefaultTableColumnModel["__class"] = "framework.lightning.table.DefaultTableColumnModel";
    DefaultTableColumnModel["__interfaces"] = ["framework.lightning.table.TableColumnModel"];


}
namespace framework.lightning.table {
    export interface TableCellRenderer {
        getComponent(table? : any, value? : any, row? : any, column? : any) : any;
    }
}
namespace framework.lightning.table {
    export interface TableColumnModel {
        addColumn(aColumn : framework.lightning.table.TableColumn);

        getColumnCount() : number;

        getColumnIndex(columnIdentifier : any) : number;

        getColumn(columnIndex : number) : framework.lightning.table.TableColumn;
    }
}
namespace framework.lightning.table {
    export class TableEvent extends Event {
        public firstIndex : number;

        public lastIndex : number;

        public srcEvent : Event;

        public constructor(type : string, evt : Event, first : number, last : number) {
            super(type);
            this.firstIndex = 0;
            this.lastIndex = 0;
            this.srcEvent = null;
            this.srcEvent = evt;
            this.firstIndex = first;
            this.lastIndex = last;
        }
    }
    TableEvent["__class"] = "framework.lightning.table.TableEvent";

}
namespace framework.lightning.table {
    export interface TableModel {
        getRowCount() : number;

        isCellEditable(rowIndex : number, columnIndex : number) : boolean;

        getValueAt(rowIndex : number, columnIndex : number) : any;

        setValueAt(aValue : any, rowIndex : number, columnIndex : number);
    }
}
namespace framework {
    export class ObjectBuilder {
        /*private*/ obj : Object;

        public static New$() : ObjectBuilder {
            return ObjectBuilder.New$jsweet_lang_Object(<Object>new Object());
        }

        public static New$jsweet_lang_Object(o : Object) : ObjectBuilder {
            let d : ObjectBuilder = new ObjectBuilder();
            d.obj = o;
            return d;
        }

        public static New(o? : any) : any {
            if(((o != null && o instanceof <any>Object) || o === null)) {
                return <any>framework.ObjectBuilder.New$jsweet_lang_Object(o);
            } else if(o === undefined) {
                return <any>framework.ObjectBuilder.New$();
            } else throw new Error('invalid overload');
        }

        public set(key : string, value : any) : ObjectBuilder {
            this.obj[key] = value;
            return this;
        }

        public setArray(key : string, ...value : any[]) : ObjectBuilder {
            this.obj[key] = value;
            return this;
        }

        public clear() : ObjectBuilder {
            {
                let array13392 = Object.keys(this.obj);
                for(let index13391=0; index13391 < array13392.length; index13391++) {
                    let s = array13392[index13391];
                    {
                        delete this.obj[s];
                    }
                }
            }
            return this;
        }

        public remove(key : string) : ObjectBuilder {
            delete this.obj[key];
            return this;
        }

        public done() : Object {
            return this.obj;
        }

        constructor() {
            this.obj = null;
        }
    }
    ObjectBuilder["__class"] = "framework.ObjectBuilder";

}
namespace framework {
    export interface Renderable {
        getChangedAttributes() : Array<string>;

        getChangedStyles() : Array<string>;

        getNative() : HTMLElement;

        getChild(name : string) : Renderable;

        removeChild(r : Renderable) : Renderable;

        clearChildren() : Renderable;

        getRenderers() : Array<framework.renderer.Renderer<any>>;

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

        getChildren() : Array<framework.JSContainer>;

        getStyleNames() : string[];

        getAttributeNames() : string[];

        getHtml() : string;

        setHtml(h : string) : Renderable;

        isRendered() : boolean;

        setRendered(b : boolean) : Renderable;

        getListeners() : Object;

        render(root? : any) : any;

        getData() : any;

        setData(data? : any) : any;

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
    export class ContainerRenderer implements framework.renderer.ExtendedRenderer<framework.JSContainer> {
        public static timeSpent : number = 0;

        public decorate(c : framework.JSContainer) {
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
                    if(parent != null && parent instanceof <any>framework.JSHTMLFragment) {
                        $("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
                    } else {
                        let index : number = parent.getChildren().indexOf(c);
                        let nextSib : framework.Renderable = null;
                        if(index < parent.getChildren().length - 1) {
                            nextSib = parent.getChildren()[index + 1];
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
                if(jq != null) {
                    this.renderAttributes(jq, c, true);
                    this.renderStyles(jq, c, true);
                    this.execCommands(jq, c);
                    c.flush("a28n12l10");
                }
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
            let keys : string[] = Object.keys(c.getListeners());
            for(let index13393=0; index13393 < keys.length; index13393++) {
                let key = keys[index13393];
                {
                    let listeners : Array<framework.EventListener> = <Array<framework.EventListener>>c.getListeners()[key];
                    njq.addEventListener(key, ((listeners) => {
                        return (evt) => {
                            for(let index13394=0; index13394 < listeners.length; index13394++) {
                                let l = listeners[index13394];
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
                    if(field != null) {
                        if(field.checked) {
                            inputField.setRawValue("true");
                        } else {
                            inputField.setRawValue("false");
                        }
                    } else {
                        console.warn("component #" + jsfield.getId() + " name:" + jsfield.getName() + " not present on page");
                    }
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(jsfield.getTag(),"input"))) {
                    let field : HTMLInputElement = <HTMLInputElement>document.getElementById(jsfield.getId());
                    if(field != null) {
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
                    } else {
                        console.warn("component #" + jsfield.getId() + " name:" + jsfield.getName() + " not present on page");
                    }
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "select")) {
                    let field : HTMLSelectElement = <HTMLSelectElement>document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.value;
                        inputField.setRawValue(value);
                    } else {
                        console.warn("component #" + jsfield.getId() + " name:" + jsfield.getName() + " not present on page");
                    }
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(jsfield.getTag(), "textarea")) {
                    let field : HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.value;
                        inputField.setRawValue(value);
                    } else {
                        console.warn("component #" + jsfield.getId() + " name:" + jsfield.getName() + " not present on page");
                    }
                } else {
                    let field : HTMLElement = document.getElementById(jsfield.getId());
                    if(field != null) {
                        let value : string = field.getAttribute("value");
                        inputField.setRawValue(value);
                    } else {
                        console.warn("component #" + jsfield.getId() + " name:" + jsfield.getName() + " not present on page");
                    }
                }
            }
            {
                let array13396 = jsfield.getChildren();
                for(let index13395=0; index13395 < array13396.length; index13395++) {
                    let c = array13396[index13395];
                    {
                        this.synchronizeFields(document.getElementById(c.getId()), c);
                    }
                }
            }
        }

        renderAttributes(njq : HTMLElement, c : framework.Renderable, changed : boolean) {
            if(changed) {
                {
                    let array13398 = c.getChangedAttributes();
                    for(let index13397=0; index13397 < array13398.length; index13397++) {
                        let key = array13398[index13397];
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
                {
                    let array13400 = c.getAttributeNames();
                    for(let index13399=0; index13399 < array13400.length; index13399++) {
                        let key = array13400[index13399];
                        {
                            if(c.getAttribute(key) != null) njq.setAttribute(key, c.getAttribute(key));
                        }
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
                    let array13402 = c.getChangedStyles();
                    for(let index13401=0; index13401 < array13402.length; index13401++) {
                        let key = array13402[index13401];
                        {
                            njq.style.setProperty(key, c.getStyle(key));
                        }
                    }
                }
            } else {
                {
                    let array13404 = c.getStyleNames();
                    for(let index13403=0; index13403 < array13404.length; index13403++) {
                        let key = array13404[index13403];
                        {
                            njq.style.setProperty(key, c.getStyle(key));
                        }
                    }
                }
            }
        }

        public postRender$framework_JSContainer$jsweet_dom_HTMLElement(c : framework.JSContainer, root : HTMLElement) {
            c.postRender$jsweet_dom_HTMLElement(root);
        }

        /**
         * 
         * @param {framework.JSContainer} c
         * @param {HTMLElement} root
         */
        public postRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.JSContainer) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.postRender$framework_JSContainer$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        constructor() {
        }
    }
    ContainerRenderer["__class"] = "framework.renderer.ContainerRenderer";
    ContainerRenderer["__interfaces"] = ["framework.renderer.ExtendedRenderer","framework.renderer.Renderer"];


}
namespace framework.renderer {
    export interface ExtendedRenderer<T extends framework.Renderable> extends framework.renderer.Renderer<T> {
        /**
         * 
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        postRender(c? : any, root? : any) : any;
    }
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
namespace framework {
    export class SalesforceAdaptor implements framework.Adaptor {
        public Execute(src : any, serviceName : string, request : Object, callback : framework.ServiceCallback) {
            let source : framework.JSContainer = <framework.JSContainer>src;
            let root : framework.JSContainer = source.getRoot();
            let o : any = root;
            let ss : Object = <Object>o;
            let helpersundar : Object = <Object>ss["helper"];
        }

        constructor() {
        }
    }
    SalesforceAdaptor["__class"] = "framework.SalesforceAdaptor";
    SalesforceAdaptor["__interfaces"] = ["framework.Adaptor"];


}
namespace framework {
    export interface ServiceCallback {
        (response : any, statusCode : number) : boolean;
    }
}
namespace framework.util {
    export class HashMap<K, V> implements framework.util.Map<K, V> {
        /*private*/ d : Object = <Object>new Object();

        /**
         * 
         * @return {*[]}
         */
        public keySet() : Array<K> {
            let result : Array<any> = <any>(new Array());
            {
                let array13406 = Object.keys(this.d);
                for(let index13405=0; index13405 < array13406.length; index13405++) {
                    let key = array13406[index13405];
                    {
                        result.push(key);
                    }
                }
            }
            return result;
        }

        /**
         * 
         * @param {*} key
         * @param {*} value
         * @return {*}
         */
        public put(key : K, value : V) : framework.util.Map<K, V> {
            this.d[<any>key] = value;
            return this;
        }

        /**
         * 
         * @param {*} key
         * @return {*}
         */
        public get(key : K) : V {
            return <V>this.d[<any>key];
        }

        /**
         * 
         * @param {*} key
         * @return {boolean}
         */
        public containsKey(key : K) : boolean {
            return this.keySet().indexOf(key) >= 0;
        }

        constructor() {
        }
    }
    HashMap["__class"] = "framework.util.HashMap";
    HashMap["__interfaces"] = ["framework.util.Map"];


}
namespace framework.util {
    export interface Map<K, V> {
        keySet() : Array<K>;

        put(key : K, value : V) : Map<K, V>;

        get(key : K) : V;

        containsKey(key : K) : boolean;
    }
}
class ui {}
ui["__class"] = "ui";


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

        public getFields(source : framework.JSContainer, listener : framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>>) {
            let cached : Array<Object> = <Array<Object>>this.object["fields"];
            if(cached == null) {
                framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").getDataStructure(source, new DataStructure.DataStructure$0(this, listener), this.getName());
            } else {
                let fields : Array<framework.builder.data.DataField> = <any>(new Array<any>());
                this.object["fields"] = cached;
                for(let index13407=0; index13407 < cached.length; index13407++) {
                    let oField = cached[index13407];
                    {
                        fields.push(new framework.builder.data.DataField(oField));
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
                let fields : Array<framework.builder.data.DataField> = <any>(new Array<any>());
                let oFields : Array<Object> = <Array<Object>>o["fields"];
                this.__parent.object["fields"] = oFields;
                for(let index13408=0; index13408 < oFields.length; index13408++) {
                    let oField = oFields[index13408];
                    {
                        fields.push(new framework.builder.data.DataField(oField));
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
            let tags : string[] = ["form", "fieldset", "button"];
            componentFactoryRegistry.registerComponentFactory("html:html", new Boot.Boot$0("html:html"));
            componentFactoryRegistry.registerComponentFactory("html:p", new Boot.Boot$1("html:p"));
            componentFactoryRegistry.registerComponentFactory("html:cmp", new Boot.Boot$2("html:cmp"));
            for(let index13409=0; index13409 < tags.length; index13409++) {
                let tag = tags[index13409];
                {
                    componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.BasicComponentFactory(tag));
                }
            }
            componentFactoryRegistry.registerComponentFactory("html:div", new Boot.Boot$3("html:div"));
            componentFactoryRegistry.registerComponentFactory("html:img", new Boot.Boot$4("html:img"));
            componentFactoryRegistry.registerComponentFactory("html:a", new Boot.Boot$5("html:a"));
            componentFactoryRegistry.registerComponentFactory("html:ul", new Boot.Boot$6("html:ul"));
            componentFactoryRegistry.registerComponentFactory("html:input", new Boot.Boot$7("html:input"));
            componentFactoryRegistry.registerComponentFactory("html:select", new Boot.Boot$8("html:select"));
            componentFactoryRegistry.registerComponentFactory("html:textarea", new Boot.Boot$9("html:textarea"));
            componentFactoryRegistry.registerComponentFactory("lgt:app", new Boot.Boot$10("lgt:app"));
            componentFactoryRegistry.registerComponentFactory("lgt:txt", new Boot.Boot$11("lgt:txt"));
            componentFactoryRegistry.registerComponentFactory("lgt:frm", new Boot.Boot$12("lgt:frm"));
            componentFactoryRegistry.registerComponentFactory("lgt:input", new Boot.Boot$13("lgt:input"));
            componentFactoryRegistry.registerComponentFactory("lgt:grid", new Boot.Boot$14("lgt:grid"));
            componentFactoryRegistry.registerComponentFactory("lgt:col", new Boot.Boot$15("lgt:col"));
            componentFactoryRegistry.registerComponentFactory("lgt:avatar", new Boot.Boot$16("lgt:avatar"));
            componentFactoryRegistry.registerComponentFactory("lgt:acc", new Boot.Boot$17("lgt:acc"));
            componentFactoryRegistry.registerComponentFactory("lgt:acc-item", new Boot.Boot$18("lgt:acc-item"));
            componentFactoryRegistry.registerComponentFactory("lgt:modal", new Boot.Boot$19("lgt:modal"));
            componentFactoryRegistry.registerComponentFactory("lgt:bcr", new Boot.Boot$20("lgt:bcr"));
            componentFactoryRegistry.registerComponentFactory("lgt:bcr-item", new Boot.Boot$21("lgt:bcr-item"));
            componentFactoryRegistry.registerComponentFactory("lgt:accitem", new Boot.Boot$22("lgt:accitem"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn", new Boot.Boot$23("lgt:btn"));
            componentFactoryRegistry.registerComponentFactory("lgt:icon-btn", new Boot.Boot$24("lgt:icon-btn"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn-grp", new Boot.Boot$25("lgt:btn-grp"));
            componentFactoryRegistry.registerComponentFactory("lgt:badge", new Boot.Boot$26("lgt:badge"));
            componentFactoryRegistry.registerComponentFactory("lgt:panel", new Boot.Boot$27("lgt:panel"));
            componentFactoryRegistry.registerComponentFactory("lgt:panel-section", new Boot.Boot$28("lgt:panel-section"));
            componentFactoryRegistry.registerComponentFactory("lgt:table", new Boot.Boot$29("lgt:table"));
            componentFactoryRegistry.registerComponentFactory("zs:iterator", new Boot.Boot$30("zs:iterator"));
            componentFactoryRegistry.registerComponentFactory("zs:iterable", new Boot.Boot$31("zs:iterable"));
            componentFactoryRegistry.registerComponentFactory("zs:http", new Boot.Boot$32("zs:http"));
            componentFactoryRegistry.registerComponentFactory("zs:service", new Boot.Boot$33("zs:service"));
            componentFactoryRegistry.registerComponentFactory("lgt:soql", new Boot.Boot$34("lgt:soql"));
            factory.addBean("framework.builder.libraries.ComponentFactoryRegistry", componentFactoryRegistry);
            factory.addBean("framework.builder.data.DataEnvironment", new framework.builder.data.BasicDataEnvironment());
            factory.addBean("framework.builder.data.ProjectService", new framework.builder.data.HerokuProjectService());
            factory.addBean("framework.Adaptor", new framework.HerokuAdaptor());
            let lightning : boolean = false;
            window["lightning"] = lightning;
            if(/* contains */window.location.href.indexOf("preview.html") != -1) {
                let name : string = window.location.href.split("#")[1];
                new framework.builder.Previewer(name).render();
            } else if(/* contains */window.location.href.indexOf("rtc.html") != -1) {
                new framework.rtc.Conference("conference").render();
            } else if(lightning) {
                eval("window.framework = framework");
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
                let cmp : framework.designables.JSDesignableTextComponent = new framework.designables.JSDesignableTextComponent("Text Item", "p");
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
                let input : framework.designables.JSDesignableSelect = new framework.designables.JSDesignableSelect("Select");
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
                let input : framework.designables.JSDesignableTextArea = new framework.designables.JSDesignableTextArea("TextArea");
                return input;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$9["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$10 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let app : framework.lightning.LightningApplication = new framework.lightning.LightningApplication("lightning app", "div");
                return app;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$10["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$11 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let t : framework.lightning.Text = new framework.lightning.Text("Text Item", "span");
                t.setHtml("Text Item");
                return t;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$11["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$12 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let btn : framework.lightning.designables.JSDesignableFormLayout = new framework.lightning.designables.JSDesignableFormLayout();
                return btn;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$12["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$13 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableLightningInput("Input Element");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$13["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$14 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableLightningGrid("Grid");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$14["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$15 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.Col("Col");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$15["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$16 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.Avatar("Avatar");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$16["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$17 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.Accordion("Accordion");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$17["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$18 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.AccordionItem("Item", "Accordion Item");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$18["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$19 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableModal("Modal");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$19["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$20 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.BreadCrumbs("BreadCrumb");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$20["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$21 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.BreadCrumbItem("Item", "Item");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$21["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$22 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.AccordionItem("Item", "Accordion Item");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$22["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$23 extends framework.builder.libraries.AbstractComponentFactory {
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
        Boot$23["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$24 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                let btn : framework.lightning.IconButton = new framework.lightning.IconButton("Icon Button");
                return btn;
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$24["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$25 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.ButtonGroup("Button Group");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$25["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$26 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.Badge("Badge", "div");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$26["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$27 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.Panel("Panel");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$27["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$28 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.PanelSection("Section", "div");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$28["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$29 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableTable("Table");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$29["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$30 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableIterator("Iterator");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$30["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$31 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableIterable("Iterable", "div");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$31["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$32 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.designables.JSDesignableHTTP();
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$32["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$33 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.designables.JSDesignableService();
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$33["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];



        export class Boot$34 extends framework.builder.libraries.AbstractComponentFactory {
            /**
             * 
             * @param {boolean} designMode
             * @return {*}
             */
            public createInstance(designMode : boolean) : framework.design.Designable {
                return new framework.lightning.designables.JSDesignableSOQL("soql");
            }

            constructor(__arg0: any) {
                super(__arg0);
            }
        }
        Boot$34["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];


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
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.tag, "button")) {
                container.applyParam("label", "Button");
            }
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
            if(this.options.length === 0) {
                let editor : framework.builder.properties.AttributeEditor = new framework.builder.properties.AttributeEditor();
                editor.setProperty(designable, this);
                return editor;
            } else if(this.options.length === 1) {
                let editor : framework.builder.properties.SingleOptionAttributeEditor = new framework.builder.properties.SingleOptionAttributeEditor();
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
            for(let index13410=0; index13410 < this.options.length; index13410++) {
                let opt = this.options[index13410];
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
                if(renderable.getRenderers().indexOf(InteractionsDecorator.draggableRenderer_$LI$()) <= 0) {
                    renderable.addRenderer(InteractionsDecorator.draggableRenderer_$LI$());
                }
            }
            if(renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) {
                if(renderable.getRenderers().indexOf(InteractionsDecorator.droppableRenderer_$LI$()) <= 0) {
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
        /*private*/ d : Object = <Object>new Object();

        /**
         * 
         * @param {string} evt
         * @param {*} listener
         */
        public on(evt : string, listener : EventListener) {
            this.addEventListener(new JSContainer.JSContainer$0(this, listener), evt);
        }

        public advancedEventTypes() : string[] {
            return [];
        }

        public fireListener(key : string, evt : Event) {
            let listeners : Array<framework.EventListener> = <Array<framework.EventListener>>this.getListeners()[key];
            if(listeners != null && listeners.length > 0) {
                for(let index13411=0; index13411 < listeners.length; index13411++) {
                    let l = listeners[index13411];
                    {
                        l.performAction(this, evt);
                    }
                }
            }
        }

        public getScope() : Object {
            return framework.designables.DesignableDelegate.getScope(this);
        }

        public find(path : string) : framework.Renderable {
            let sectins : string[] = path.split("/");
            let current : framework.Renderable = this;
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(path, "/")) {
                current = (<any>(this.getAncestorWithClass<any>("visual-editor"))).getRootItem();
            }
            for(let index13412=0; index13412 < sectins.length; index13412++) {
                let s = sectins[index13412];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,".."))) {
                        while((true)) {
                            current = current.getParent();
                            if(current == null) break;
                            if(current.getAttribute("identifier") != null && current.getAttribute("identifier").length > 0) {
                                break;
                            }
                        };
                        if(current == null) {
                            console.error("Cannot find root component for path " + path);
                            return null;
                        }
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"."))) {
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,""))) {
                    } else {
                        if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "]")) {
                            if(/* contains */s.indexOf("[") != -1) {
                                let ss : string[] = s.split("[");
                                let index : string = ss[1];
                                let onlyName : string = ss[0];
                                if(/* contains */index.indexOf("]") != -1) {
                                    index = /* replace */index.split("]").join("");
                                    let iIndex : number = parseInt(index);
                                    current = this.findDesignable(<framework.design.Designable><any>current, onlyName, iIndex);
                                    if(current == null) {
                                        console.error("error parsing path at ..." + s + "..., Cannot find component \'" + s + "\' while searching in path:" + path + ". Please check path");
                                        return null;
                                    }
                                } else {
                                    console.error("error parsing path at ..." + s + "...");
                                }
                            } else {
                                console.error("error parsing path at ..." + s + "...");
                            }
                        } else {
                            current = this.findDesignable(<framework.design.Designable><any>current, s, 0);
                            if(current == null) {
                                console.error("error parsing path at ..." + s + "...,Cannot find component \'" + s + "\' while searching in path:" + path + ". Please check path");
                                return null;
                            }
                        }
                    }
                }
            }
            return current;
        }

        /*private*/ findDesignable(des : framework.design.Designable, name : string, index : number) : framework.Renderable {
            let candidates : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
            {
                let array13414 = des.getDesignables();
                for(let index13413=0; index13413 < array13414.length; index13413++) {
                    let d = array13414[index13413];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(d.getName(),name))) {
                            candidates.push(d);
                        }
                    }
                }
            }
            if(index < candidates.length) {
                return candidates[index];
            } else {
                console.error("Cannot find child item with name " + name + " and index " + index + " total number of children with name " + name + " is " + candidates.length);
            }
            return null;
        }

        public getChild(name : string) : framework.Renderable {
            {
                let array13416 = this.getChildren();
                for(let index13415=0; index13415 < array13416.length; index13415++) {
                    let child = array13416[index13415];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(child.getName(),name))) {
                            return child;
                        }
                    }
                }
            }
            return null;
        }

        public removeChild(r : framework.Renderable) : framework.Renderable {
            let children : Array<JSContainer> = this.getChildren();
            this.d["children"] = children.filter((ctn, inde, lst) => {
                return !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ctn,r));
            });
            this.setRendered(false);
            return this;
        }

        public clearChildren() : framework.Renderable {
            this.d["children"] = new Array<any>();
            return this;
        }

        /**
         * 
         * @return {string[]}
         */
        public getChangedAttributes() : Array<string> {
            if(this.d["changedAttributes"] != null) {
                let changed : Array<string> = <Array<string>>this.d["changedAttributes"];
                return changed;
            } else {
                this.d["changedAttributes"] = new Array<any>();
                return this.getChangedAttributes();
            }
        }

        public getNative() : HTMLElement {
            let elem : HTMLElement = document.getElementById(this.getId());
            if(elem != null) {
                return elem;
            } else {
                return null;
            }
        }

        /**
         * 
         * @return {string[]}
         */
        public getChangedStyles() : Array<string> {
            if(this.d["changedStyles"] != null) {
                let changed : Array<string> = <Array<string>>this.d["changedStyles"];
                return changed;
            } else {
                this.d["changedStyles"] = new Array<any>();
                return this.getChangedStyles();
            }
        }

        public flush(s : string) {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"a28n12l10"))) {
                delete this.d["changedAttributes"];
                delete this.d["changedStyles"];
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getRenderers() : Array<framework.renderer.Renderer<any>> {
            let arr : Array<framework.renderer.Renderer<any>> = <Array<framework.renderer.Renderer<any>>>this.d["renderers"];
            if(arr != null) {
                return arr;
            } else {
                return <any>(new Array<framework.renderer.Renderer<any>>());
            }
        }

        /**
         * 
         * @param {*} renderer
         * @return {framework.JSContainer}
         */
        public addRenderer(renderer : framework.renderer.Renderer<any>) : JSContainer {
            let arr : Array<framework.renderer.Renderer<any>> = <Array<framework.renderer.Renderer<any>>>this.d["renderers"];
            if(arr == null) {
                arr = <any>(new Array<framework.renderer.Renderer<any>>());
                this.d["renderers"] = arr;
            }
            arr.push(renderer);
            this.d["renderers"] = arr;
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getId() : string {
            let id : string = <string>this.d["id"];
            if(id == null) {
                id = this.uid();
                this.d["id"] = id;
            }
            return id;
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
            for(let index13417=0; index13417 < aStyles.length; index13417++) {
                let style = aStyles[index13417];
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
            container.d["parent"] = this;
            this.getChildren().push(container);
            return this;
        }

        /**
         * 
         * @param {number} index
         * @param {framework.JSContainer} child
         * @return {framework.JSContainer}
         */
        public addChildAt(index : number, child : JSContainer) : JSContainer {
            child.d["parent"] = this;
            let children : Array<JSContainer> = <any>(new Array<JSContainer>());
            let i : number = 0;
            {
                let array13419 = this.getChildren();
                for(let index13418=0; index13418 < array13419.length; index13418++) {
                    let c = array13419[index13418];
                    {
                        if(i === index) {
                            children.push(c);
                        }
                        children.push(c);
                    }
                }
            }
            this.d["children"] = children;
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        public setVisible(b : boolean) : JSContainer {
            if(!b) {
                this.addClass("slds-hidden");
            } else {
                this.removeClass("slds-hidden");
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
            let listeners : Object = this.getListeners();
            if(listeners == null) {
                listeners = <Object>new Object();
                this.d["listeners"] = listeners;
            }
            if(!listeners.hasOwnProperty(type)) {
                listeners[type] = new Array<any>();
            }
            (<Array<framework.EventListener>>listeners[type]).push(listener);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getTag() : string {
            return this.getString("tag");
        }

        /**
         * 
         * @param {string} tag
         * @return {framework.JSContainer}
         */
        public setTag(tag : string) : JSContainer {
            this.setString("tag", tag);
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
            this.getChangedStyles().push(key);
            if(value != null) {
                if(this.d["styles"] == null) {
                    this.d["styles"] = <Object>new Object();
                }
                (<Object>this.d["styles"])[key] = value;
            } else {
                if(this.d["styles"] != null) {
                    delete (<Object>this.d["styles"])[key];
                    this.setRendered(false);
                }
            }
            return this;
        }

        /**
         * 
         * @param {string} key
         * @return {string}
         */
        public getStyle(key : string) : string {
            if(this.d["styles"] != null) {
                return <string>(<Object>this.d["styles"])[key];
            }
            return null;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        public setAttribute(key : string, value : string) : JSContainer {
            this.getChangedAttributes().push(key);
            if(value != null) {
                if(this.d["attributes"] == null) {
                    this.d["attributes"] = <Object>new Object();
                }
                (<Object>this.d["attributes"])[key] = value;
            } else {
                if(this.d["attributes"] != null) delete (<Object>this.d["attributes"])[key];
            }
            return this;
        }

        /**
         * 
         * @param {string} key
         * @return {string}
         */
        public getAttribute(key : string) : string {
            if(this.d["attributes"] != null) {
                return <string>(<Object>this.d["attributes"])[key];
            }
            return null;
        }

        /**
         * 
         * @return {string}
         */
        public getName() : string {
            let name : string = this.getAttribute("name");
            if(name == null) {
                return "";
            }
            return name;
        }

        /**
         * 
         * @param {string} name
         */
        public setName(name : string) {
            this.setAttribute("name", name);
        }

        /**
         * 
         * @return {framework.JSContainer}
         */
        public getParent() : JSContainer {
            return <JSContainer>this.d["parent"];
        }

        /**
         * 
         * @return {framework.JSContainer[]}
         */
        public getChildren() : Array<JSContainer> {
            let children : Array<JSContainer> = <Array<JSContainer>>this.d["children"];
            if(children != null) {
                return children;
            } else {
                this.d["children"] = new Array<any>();
                return this.getChildren();
            }
        }

        /**
         * 
         * @return {Array}
         */
        public getStyleNames() : string[] {
            let styles : Object = <Object>this.d["styles"];
            if(styles != null) {
                return Object.keys(styles);
            }
            return [];
        }

        /**
         * 
         * @return {Array}
         */
        public getAttributeNames() : string[] {
            let styles : Object = <Object>this.d["attributes"];
            if(styles != null) {
                return Object.keys(styles);
            }
            return [];
        }

        /**
         * 
         * @return {string}
         */
        public getHtml() : string {
            let html : string = this.getString("html");
            if(html == null) {
                return "";
            }
            return html;
        }

        /*private*/ setString(key : string, value : string) {
            this.d[key] = value;
        }

        /*private*/ getString(key : string) : string {
            return <string>this.d[key];
        }

        /**
         * 
         * @param {string} h
         * @return {framework.JSContainer}
         */
        public setHtml(h : string) : JSContainer {
            this.setString("html", h);
            this.setRendered(false);
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public isRendered() : boolean {
            return <boolean>this.d["rendered"];
        }

        /**
         * 
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        public setRendered(b : boolean) : JSContainer {
            this.d["rendered"] = b;
            if(!b) {
                {
                    let array13421 = this.getChildren();
                    for(let index13420=0; index13420 < array13421.length; index13420++) {
                        let child = array13421[index13420];
                        {
                            child.setRendered(b);
                        }
                    }
                }
            }
            return this;
        }

        /**
         * 
         * @return {Object}
         */
        public getListeners() : Object {
            let l : Object = <Object>this.d["listeners"];
            if(l == null) {
                this.d["listeners"] = <Object>new Object();
                return this.getListeners();
            }
            return l;
        }

        public render$() {
            if(this.getParent() == null) this.render$jsweet_dom_HTMLElement(null); else this.render$jsweet_dom_HTMLElement(document.getElementById(this.getParent().getId()));
        }

        /**
         * 
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        public postRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>HTMLElement) || c === null) && root === undefined) {
                return <any>this.postRender$jsweet_dom_HTMLElement(c);
            } else throw new Error('invalid overload');
        }

        public postRender$jsweet_dom_HTMLElement(root : HTMLElement) {
        }

        contains(lst : Array<any>, o : any) : boolean {
            for(let index13422=0; index13422 < lst.length; index13422++) {
                let oo = lst[index13422];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(oo,o))) {
                        return true;
                    }
                }
            }
            return false;
        }

        static defaultRenderer : framework.renderer.ContainerRenderer; public static defaultRenderer_$LI$() : framework.renderer.ContainerRenderer { if(JSContainer.defaultRenderer == null) JSContainer.defaultRenderer = new framework.renderer.ContainerRenderer(); return JSContainer.defaultRenderer; };

        public render$jsweet_dom_HTMLElement(parent : HTMLElement) {
            let renderers : Array<framework.renderer.Renderer<any>> = this.getRenderers();
            if(renderers.length === 0) {
                renderers.push(JSContainer.defaultRenderer_$LI$());
            }
            if(!this.contains(renderers, JSContainer.defaultRenderer_$LI$())) {
                let tmp : Array<framework.renderer.Renderer<any>> = <any>(new Array<framework.renderer.Renderer<any>>());
                tmp.push(JSContainer.defaultRenderer_$LI$());
                for(let index13423=0; index13423 < renderers.length; index13423++) {
                    let r = renderers[index13423];
                    {
                        tmp.push(r);
                    }
                }
                renderers = tmp;
            }
            for(let index13424=0; index13424 < renderers.length; index13424++) {
                let renderer = renderers[index13424];
                renderer.doRender(this, parent)
            }
            {
                let array13426 = this.getChildren();
                for(let index13425=0; index13425 < array13426.length; index13425++) {
                    let child = array13426[index13425];
                    {
                        child.render();
                    }
                }
            }
            for(let index13427=0; index13427 < renderers.length; index13427++) {
                let renderer = renderers[index13427];
                {
                    if(renderer != null && (renderer["__interfaces"] != null && renderer["__interfaces"].indexOf("framework.renderer.ExtendedRenderer") >= 0 || renderer.constructor != null && renderer.constructor["__interfaces"] != null && renderer.constructor["__interfaces"].indexOf("framework.renderer.ExtendedRenderer") >= 0)) (<framework.renderer.ExtendedRenderer<any>><any>renderer).postRender(this, parent);
                }
            }
            this.setRendered(true);
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
            return this.d["data"];
        }

        public setData(data? : any) : any {
            if(((data != null) || data === null)) {
                return <any>this.setData$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }

        public setData$java_lang_Object(data : any) {
            this.d["data"] = data;
        }

        public getAncestorWithClass<T extends JSContainer>(cls : string) : T {
            let parent : JSContainer = this.getParent();
            if(parent == null) {
                return null;
            }
            let clsss : string = parent.getAttribute("class");
            if(clsss != null) {
                {
                    let array13429 = parent.getAttribute("class").split(" ");
                    for(let index13428=0; index13428 < array13429.length; index13428++) {
                        let s = array13429[index13428];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s.trim(),cls))) return <T>parent;
                        }
                    }
                }
            }
            return <any>((<JSContainer>parent).getAncestorWithClass<any>(cls));
        }

        /**
         * 
         * @param {string} id
         * @return {framework.JSContainer}
         */
        public getAncestorById(id : string) : JSContainer {
            let parent : JSContainer = this.getParent();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getId(),id))) return <JSContainer>this;
            if(parent == null) {
                return null;
            }
            return parent.getAncestorById(id);
        }

        /**
         * 
         * @param {string} name
         * @return {framework.JSContainer}
         */
        public getAncestorByName(name : string) : JSContainer {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getName(),name))) return this;
            let parent : JSContainer = this.getParent();
            if(parent == null) {
                return null;
            }
            return parent.getAncestorByName(name);
        }

        /**
         * 
         * @return {framework.JSContainer}
         */
        public getRoot() : JSContainer {
            let parent : JSContainer = this.getParent();
            if(parent == null) {
                return this;
            } else {
                return parent.getRoot();
            }
        }

        /**
         * 
         * @return {*}
         */
        public getDroppableOptions() : JQueryUI.DroppableOptions {
            return <JQueryUI.DroppableOptions>this.d["droppableOptions"];
        }

        public setDroppableOptions(options : JQueryUI.DroppableOptions) {
            this.d["droppableOptions"] = options;
        }

        public constructor(name? : any, tag? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof tag === 'string') || tag === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.d = <Object>new Object();
                (() => {
                    this.setTag(tag);
                    this.setName(name);
                })();
            } else if(((typeof name === 'string') || name === null) && tag === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let tag : any = __args[0];
                this.d = <Object>new Object();
                (() => {
                    this.setTag(tag);
                })();
            } else throw new Error('invalid overload');
        }
    }
    JSContainer["__class"] = "framework.JSContainer";
    JSContainer["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace JSContainer {

        export class JSContainer$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.listener(evt);
            }

            constructor(__parent: any, private listener: any) {
                this.__parent = __parent;
            }
        }
        JSContainer$0["__interfaces"] = ["framework.EventListener"];


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
namespace framework.design {
    export class DatasourceParameter extends framework.design.AttributeParameter {
        public constructor(name : string, label : string, category : string) {
            super(name, label, category);
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
    DatasourceParameter["__class"] = "framework.design.DatasourceParameter";

}
namespace framework.builder {
    export class Component extends framework.JSContainer implements framework.EventListener {
        /*private*/ titleFigure : framework.JSContainer = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");

        /*private*/ avatar : framework.JSContainer = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large").setStyle("width", "100%");

        /*private*/ initial : framework.JSContainer = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-app-launcher__title-label").setStyle("width", "100%");

        /*private*/ componentFactoryRegistry : framework.builder.libraries.ComponentFactoryRegistry = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry"));

        /*private*/ identifier : string;

        /*private*/ ini : string;

        public constructor(identifier : string, initial : string, label : string) {
            super(identifier, "div");
            this.identifier = null;
            this.ini = null;
            this.addClass("component-design basic");
            this.setAttribute("identifier", identifier);
            this.identifier = identifier;
            this.addClass("designer-component");
            this.addChild$framework_JSContainer(this.titleFigure.setAttribute("identifier", identifier));
            this.titleFigure.addChild$framework_JSContainer(this.avatar.setAttribute("identifier", identifier));
            this.avatar.addChild$framework_JSContainer(this.initial.setAttribute("identifier", identifier));
            this.initial.setAttribute("title", label);
            this.initial.setHtml(label);
            this.titleFigure.addChild$framework_JSContainer(this.title.setAttribute("identifier", identifier));
            this.title.setHtml(label);
            this.addEventListener(this, "click");
            let me : Component = this;
            this.addEventListener(new Component.Component$0(this, me), "dblclick");
            this.ini = initial;
        }

        public getInital() : string {
            return this.ini;
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
            editor.setWillAddComponent(this, false);
        }
    }
    Component["__class"] = "framework.builder.Component";
    Component["__interfaces"] = ["framework.interactions.Droppable","framework.EventListener","framework.Renderable"];



    export namespace Component {

        export class Component$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let editor : framework.builder.editors.VisualEditor = <any>(this.__parent.getAncestorWithClass("visual-editor"));
                editor.setWillAddComponent(this.me, true);
            }

            constructor(__parent: any, private me: any) {
                this.__parent = __parent;
            }
        }
        Component$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.editors {
    export abstract class AbstractEditor<T> extends framework.JSContainer implements framework.builder.editors.Editor<T> {
        file : framework.builder.data.File;

        projectService : framework.builder.data.ProjectService = <any>(framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService"));

        rootEditor : framework.builder.editors.VisualEditor;

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
            if(item != null) {
                item.setStyle("color", "red");
                item.render();
            }
            if(this.getRootEditor() != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getRootEditor().getName(),this.getName()))) {
                this.getRootEditor().dirty();
            }
        }

        public clean() {
            let body : framework.lightning.TabBody = <any>(this.getAncestorWithClass<any>("slds-tabs_default__content"));
            let tabs : framework.lightning.Tabs = <any>(this.getAncestorWithClass<any>("editor-tabs"));
            let item : framework.lightning.TabItem = tabs.getTab(body);
            if(item != null) {
                item.setStyle("color", "#16325c");
                item.render();
            }
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
            this.projectService.saveFile(this, this.file, new AbstractEditor.AbstractEditor$0(this));
        }

        public abstract createNew(f : framework.builder.data.File) : T;

        public abstract unmarshall(f : framework.builder.data.File) : T;

        /**
         * 
         * @param {*} data
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
    export class JSONEditor extends framework.JSContainer {
        public constructor() {
            super("");
        }
    }
    JSONEditor["__class"] = "framework.builder.editors.JSONEditor";
    JSONEditor["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    export class Preview extends framework.JSContainer implements framework.builder.editors.DesignableEditor {
        /*private*/ root : framework.design.Designable;

        public constructor(file? : any) {
            if(((file != null && file instanceof <any>framework.builder.data.File) || file === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super("visualEditor", "div");
                this.root = null;
                this.root = null;
                (() => {
                    this.addClass("visual-editor");
                    this.consume(this.unmarshall$framework_builder_data_File(file));
                })();
            } else if(((typeof file === 'string') || file === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super("visualEditor", "div");
                this.root = null;
                this.root = null;
                (() => {
                    this.addClass("visual-editor");
                    this.consume(this.unmarshall$java_lang_String(file));
                })();
            } else throw new Error('invalid overload');
        }

        public static build(s : string) : Preview {
            return new Preview(s);
        }

        public unmarshall$framework_builder_data_File(f : framework.builder.data.File) : framework.builder.marshalling.Component {
            return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(f.getData());
        }

        public unmarshall(f? : any) : any {
            if(((f != null && f instanceof <any>framework.builder.data.File) || f === null)) {
                return <any>this.unmarshall$framework_builder_data_File(f);
            } else if(((typeof f === 'string') || f === null)) {
                return <any>this.unmarshall$java_lang_String(f);
            } else throw new Error('invalid overload');
        }

        public unmarshall$java_lang_String(f : string) : framework.builder.marshalling.Component {
            return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(f);
        }

        public build(component : framework.builder.marshalling.Component) : framework.design.Designable {
            framework.builder.marshalling.MarshallUtil.generateController(component);
            return framework.builder.marshalling.MarshallUtil.toDesignable(component);
        }

        public consume(component : framework.builder.marshalling.Component) {
            this.root = this.build(component);
            this.addChild$framework_JSContainer(<framework.JSContainer><any>this.root);
        }

        public getRootItem() : framework.design.Designable {
            return this.root;
        }
    }
    Preview["__class"] = "framework.builder.editors.Preview";
    Preview["__interfaces"] = ["framework.interactions.Droppable","framework.builder.editors.DesignableEditor","framework.Renderable"];


}
namespace framework.builder.editors {
    export class Structure extends framework.JSContainer {
        /*private*/ root : framework.design.Designable;

        /*private*/ ul : framework.JSContainer = new framework.JSContainer("ul");

        /*private*/ lis : framework.util.Map<string, framework.JSContainer> = <any>(new framework.util.HashMap<any, any>());

        /*private*/ liRoot : framework.JSContainer = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");

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
            if(itemS != null) {
                this.setSelected(itemS);
                this.getSelected().select(true);
                let parent : framework.JSContainer = <framework.JSContainer><any>designable;
                while((true)) {
                    parent = <framework.JSContainer>parent.getParent();
                    if(parent == null) {
                        return;
                    }
                    if(parent != null && (parent["__interfaces"] != null && parent["__interfaces"].indexOf("framework.design.Designable") >= 0 || parent.constructor != null && parent.constructor["__interfaces"] != null && parent.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) {
                        let itemP : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(<framework.design.Designable><any>parent, this.liRoot);
                        itemP.open();
                    }
                };
            } else {
                let parent : framework.JSContainer = <framework.JSContainer><any>designable;
                let stack : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
                while((true)) {
                    parent = <framework.JSContainer>parent.getParent();
                    if(parent == null) {
                        return;
                    }
                    if(parent != null && (parent["__interfaces"] != null && parent["__interfaces"].indexOf("framework.design.Designable") >= 0 || parent.constructor != null && parent.constructor["__interfaces"] != null && parent.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) {
                        let itemP : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(<framework.design.Designable><any>parent, this.liRoot);
                        if(itemP != null) {
                            stack.push(<framework.design.Designable><any>parent);
                            break;
                        } else {
                            stack.push(<framework.design.Designable><any>parent);
                        }
                    }
                };
                while((stack.length > 0)) {
                    let d : framework.design.Designable = stack.pop();
                    this.getItem$framework_design_Designable$framework_JSContainer(d, this.liRoot).open();
                };
                itemS = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
                if(itemS != null) {
                    this.setSelected(itemS);
                    this.getSelected().select(true);
                }
            }
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
            this.ul.clearChildren();
            this.ul.setRendered(false);
            this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
            this.ul.addChild$framework_JSContainer(this.liRoot.addClass("type-ui"));
            this.addNode(this.root, this.liRoot, 1, null);
            let items : string[] = ["scripts", "stylesheets", "templates", "components", "datasources", "variables", "types"];
            let labels : string[] = ["JS", "CSS", "HTML", "Components", "Datasources", "Variables", "Types"];
            for(let i : number = 0; i < items.length; i++) {
                let li : framework.JSContainer = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                this.addTreeItem(li, items[i], labels[i]);
                this.lis.put(items[i], li);
            };
            this.renderFiles();
        }

        /*private*/ addTreeItem(li : framework.JSContainer, type : string, label : string) {
            let item : framework.TreeItem = new framework.TreeItem("", label);
            item.addIcon("add", "utility", new framework.builder.editors.NewFileStructureEventListener(type, this.file, this));
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "types")) {
                item.addIcon("import", "utility", new Structure.Structure$1(this));
            }
            item.addClass("type-" + type).addEventListener(this.toggleSelect, "click");
            li.addChild$framework_JSContainer(item);
            this.ul.addChild$framework_JSContainer(li);
        }

        public getItem$framework_design_Designable$framework_JSContainer(designable : framework.design.Designable, currentNode : framework.JSContainer) : framework.builder.editors.StructureTreeItem {
            {
                let array13431 = currentNode.getChildren();
                for(let index13430=0; index13430 < array13431.length; index13430++) {
                    let des = array13431[index13430];
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
            return <framework.TreeItem>this.lis.get(type).getChildren()[0];
        }

        public reload$java_lang_String(type : string) {
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
            let item : framework.builder.editors.StructureTreeItem = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
            if(item != null) {
                let level : number = parseInt(item.getParent().getAttribute("aria-level"));
                let li : framework.JSContainer = item.getParent();
                li.clearChildren();
                li.setRendered(false);
                this.addNode(designable, li, /* intValue */(level|0), item.getParentDesignable()).open();
                item.open();
            }
        }

        public unselect(c : framework.JSContainer) {
        }

        public renderFiles() {
            {
                let array13433 = this.lis.keySet();
                for(let index13432=0; index13432 < array13433.length; index13432++) {
                    let type = array13433[index13432];
                    {
                        let cstylesheets : framework.JSContainer = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                        if(this.file.getChild(type) != null) {
                            {
                                let array13435 = this.file.getChild(type).getChildren();
                                for(let index13434=0; index13434 < array13435.length; index13434++) {
                                    let f = array13435[index13434];
                                    {
                                        let item : framework.TreeItem = new framework.builder.editors.FileTreeItem(f, type, framework.builder.Builder.getInstance(), this);
                                        item.addEventListener(this.toggleSelect, "click");
                                        let li : framework.JSContainer = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "3");
                                        this.lis.get(type).addChild$framework_JSContainer(cstylesheets.addChild$framework_JSContainer(li));
                                    }
                                }
                            }
                        } else {
                            this.lis.get(type).addChild$framework_JSContainer(cstylesheets);
                        }
                    }
                }
            }
        }

        public addNode(ctn : framework.design.Designable, li : framework.JSContainer, level : number, parent : framework.design.Designable) : framework.builder.editors.StructureTreeItem {
            let item : framework.builder.editors.StructureTreeItem = new framework.builder.editors.StructureTreeItem(ctn.getName(), ctn, this, parent);
            li.addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");
            let designables : Array<framework.design.Designable> = ctn.getDesignables();
            if(designables != null && designables.length > 0) {
                item.leaf(false);
                let children : framework.JSContainer = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                li.addChild$framework_JSContainer(children);
                {
                    let array13437 = ctn.getDesignables();
                    for(let index13436=0; index13436 < array13437.length; index13436++) {
                        let c = array13437[index13436];
                        {
                            let child : framework.JSContainer = new framework.JSContainer("li");
                            children.addChild$framework_JSContainer(child);
                            this.addNode(c, child, level + 1, ctn);
                        }
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



        export class Structure$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                alert("to implement: Import from salesforce");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Structure$1["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.editors {
    export class Zoom extends framework.JSContainer {
        /*private*/ value : framework.JSInput = new framework.JSInput("value");

        public constructor(name : string, editor : framework.builder.editors.VisualEditor) {
            super(name, "div");
            this.addClass("zoom");
            this.value.setType("number").setAttribute("min", "1");
            this.value.setValue$java_lang_String("100");
            this.addChild$framework_JSContainer(this.value);
            this.value.addEventListener(new Zoom.Zoom$0(this, editor), "change");
        }
    }
    Zoom["__class"] = "framework.builder.editors.Zoom";
    Zoom["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace Zoom {

        export class Zoom$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let svalue : string = this.__parent.value.getValue();
                let zoom : number = parseInt(svalue);
                this.editor.zoom(zoom);
            }

            constructor(__parent: any, private editor: any) {
                this.__parent = __parent;
            }
        }
        Zoom$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder {
    export class FilesList extends framework.JSContainer {
        /*private*/ itemSelectedListeners : Array<framework.builder.ItemSelectedListener> = <any>(new Array<any>());

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
            this.itemSelectedListeners.push(l);
        }

        public fireItemSelectedListeners(file : framework.builder.UIFile, selector : framework.builder.ItemSelector) {
            for(let index13438=0; index13438 < this.itemSelectedListeners.length; index13438++) {
                let l = this.itemSelectedListeners[index13438];
                {
                    l.itemSelected(file, selector);
                }
            }
        }

        public select(file : framework.builder.UIFile) {
            {
                let array13440 = this.getChildren();
                for(let index13439=0; index13439 < array13440.length; index13439++) {
                    let c = array13440[index13439];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getChildren()[0].getName(),file.getName()))) {
                            this.fireItemSelectedListeners(file, this.selector);
                            c.getChildren()[0].addClass("selected");
                        } else {
                            c.getChildren()[0].removeClass("selected");
                        }
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
                let templates : HTMLElement = document.getElementById("templates");
                document.body.innerHTML = "";
                document.body.appendChild(templates);
                let o : any = JSON.parse(t.data.toString());
                let template : HTMLElement = document.createElement("div");
                template.style.display = "none";
                template.setAttribute("id", "templates");
                document.body.appendChild(template);
                let f : framework.builder.data.File = new framework.builder.data.File(<Object>o);
                Previewer.project = f;
                let preview : framework.builder.editors.Preview = new framework.builder.editors.Preview(f);
                {
                    let array13442 = f.getStylesheets();
                    for(let index13441=0; index13441 < array13442.length; index13441++) {
                        let sc = array13442[index13441];
                        {
                            let elem : HTMLElement = document.createElement("style");
                            elem.textContent = sc.getData();
                            document.body.appendChild(elem);
                        }
                    }
                }
                {
                    let array13444 = f.getScripts();
                    for(let index13443=0; index13443 < array13444.length; index13443++) {
                        let sc = array13444[index13443];
                        {
                            let elem : HTMLElement = document.createElement("script");
                            elem.textContent = sc.getData();
                            document.body.appendChild(elem);
                        }
                    }
                }
                {
                    let array13446 = f.getTemplates();
                    for(let index13445=0; index13445 < array13446.length; index13445++) {
                        let sc = array13446[index13445];
                        {
                            let elem : HTMLElement = document.createElement("div");
                            elem.setAttribute("id", /* replace */sc.getName().split(".html").join(""));
                            elem.innerHTML = sc.getData();
                            template.appendChild(elem);
                        }
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
    export class Ruler extends framework.JSContainer implements framework.interactions.Draggable {
        /*private*/ unit : string = "px";

        /*private*/ accuracy : number = 8;

        /*private*/ chunk : number = 64;

        /*private*/ inner : framework.JSContainer = new framework.JSContainer("inner", "div");

        /*private*/ vertical : boolean = false;

        public constructor(vertical : boolean) {
            super("ruler", "div");
            this.addClass("ruler");
            this.addChild$framework_JSContainer(this.inner);
            this.inner.addClass("inner-ruler");
            this.vertical = vertical;
            if(vertical) {
                this.addClass("vertical");
            }
            this.renderRuler();
            this.addRenderer(new framework.interactions.DraggableRenderer());
        }

        public renderRuler() {
            let width : number = 1024;
            if(!this.vertical) this.inner.setStyle("width", width + this.unit); else this.inner.setStyle("height", width + this.unit);
            for(let i : number = 0; i < width; i = i + this.accuracy) {
                let scal : framework.JSContainer = new framework.JSContainer("div").setStyle("position", "absolute");
                if(!this.vertical) {
                    scal.setStyle("width", this.accuracy + this.unit);
                    scal.setStyle("left", i + this.unit);
                } else {
                    scal.setStyle("top", i + this.unit);
                    scal.setStyle("height", this.accuracy + this.unit);
                }
                this.inner.addChild$framework_JSContainer(scal);
                if((i % this.chunk) === 0) {
                    scal.addClass("big-scale").setHtml(i + "");
                } else {
                    scal.addClass("small-scale");
                }
            };
        }

        /**
         * 
         * @return {*}
         */
        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let opt : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            return opt;
        }
    }
    Ruler["__class"] = "framework.builder.Ruler";
    Ruler["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


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
                    this.visualEditor.getStructure().select(component);
                } catch(e) {
                };
                this.visualEditor.visit$framework_builder_editors_Visitor(new Selector.Selector$0(this));
                component.setAttribute("dssel", "true");
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



    export namespace Selector {

        export class Selector$0 implements framework.builder.editors.Visitor {
            public __parent: any;
            /**
             * 
             * @param {*} host
             */
            public doVisit(host : framework.design.Designable) {
                host.setAttribute("dssel", "false");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Selector$0["__interfaces"] = ["framework.builder.editors.Visitor"];


    }

}
namespace framework.builder {
    export class UIFile extends framework.JSContainer {
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
        /*private*/ figure : framework.JSContainer = new framework.JSContainer("div").setAttribute("class", "slds-app-launcher__tile-figure");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").setAttribute("class", "slds-app-launcher__tile-body");

        /*private*/ uiTitle : framework.JSContainer = new framework.JSContainer("span").addClass("slds-text-link");

        /*private*/ uiHelp : framework.JSContainer = new framework.JSContainer("p");

        /*private*/ abbr : framework.JSContainer = new framework.JSContainer("abbr").setAttribute("class", "slds-avatar__initials slds-icon-custom-27");

        public constructor(name : string) {
            super(name, "a");
            this.setAttribute("href", "javascript:void(0);");
            this.setAttribute("class", "slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
            this.addChild$framework_JSContainer(this.figure.addChild$framework_JSContainer(new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large").addChild$framework_JSContainer(this.abbr)));
            this.addChild$framework_JSContainer(this.body);
            this.body.addChild$framework_JSContainer(this.uiTitle);
            this.body.addChild$framework_JSContainer(this.uiHelp);
        }

        public setTitle(title : string) : UIFile {
            this.uiTitle.setHtml(title);
            this.abbr.setAttribute("title", title);
            return this;
        }

        public setAbbr(abbr : string) : UIFile {
            this.abbr.setHtml(abbr);
            return this;
        }

        public setHelp(help : string) : UIFile {
            this.uiHelp.setHtml(help);
            return this;
        }
    }
    UIFile["__class"] = "framework.builder.UIFile";
    UIFile["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder {
    export class WelcomeScreenItem extends framework.JSContainer {
        /*private*/ titleFigure : framework.JSContainer = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");

        /*private*/ avatar : framework.JSContainer = new framework.JSContainer("avatar").addClass("slds-avatar slds-avatar_large");

        /*private*/ abbr : framework.JSContainer = new framework.JSContainer("abbr").addClass("slds-avatar__initials");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("body").addClass("slds-app-launcher__tile-body");

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-text-link");

        /*private*/ description : framework.JSContainer = new framework.JSContainer("p");

        public constructor(name : string, abbrev : string, title : string, text : string, index : number) {
            super(name, "a");
            this.setAttribute("href", "javascript:void(0);");
            this.addClass("slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
            this.addChild$framework_JSContainer(this.titleFigure);
            this.titleFigure.addChild$framework_JSContainer(this.avatar);
            this.abbr.addClass("slds-icon-custom-" + index);
            this.avatar.addChild$framework_JSContainer(this.abbr);
            this.abbr.setHtml(abbrev);
            this.addChild$framework_JSContainer(this.body);
            this.body.addChild$framework_JSContainer(this.title);
            this.title.setHtml(title);
            this.body.addChild$framework_JSContainer(this.description);
            this.description.setHtml(text);
        }
    }
    WelcomeScreenItem["__class"] = "framework.builder.WelcomeScreenItem";
    WelcomeScreenItem["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignable extends framework.JSContainer implements framework.design.Designable {
        delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

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
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let l : Array<any> = this.getChildren();
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
    export class JSDesignableDataSource extends framework.JSContainer implements framework.design.Designable, framework.EventListener {
        /*private*/ datasource : framework.builder.data.RestDataSource = new framework.builder.data.RestDataSource();

        /*private*/ dsDelegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ previous : framework.lightning.IconButton = new framework.lightning.IconButton("previous");

        public next : framework.lightning.IconButton = new framework.lightning.IconButton("next");

        /*private*/ currentIndex : number = 0;

        public constructor(name : string) {
            super(name, "div");
            this.setVisible(false);
            this.addClass("table-paginator");
            let leftGrp : framework.lightning.ButtonGroup = new framework.lightning.ButtonGroup("leftGrp");
            this.previous.getIcon().setIconName("left");
            this.previous.getIcon().setType("utility");
            this.next.getIcon().setIconName("right");
            this.next.getIcon().setType("utility");
            leftGrp.addButton$framework_lightning_IconButton(this.previous.setBorder(true));
            leftGrp.addButton$framework_lightning_IconButton(this.next.setBorder(true));
            this.addChild$framework_JSContainer(leftGrp);
            this.previous.addEventListener(this, "click");
            this.next.addEventListener(this, "click");
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source.getName(),"previous"))) {
                if(this.currentIndex > 0) {
                    this.currentIndex = this.currentIndex - 1;
                    let cache : Array<Object> = this.datasource.getCached();
                    if(cache != null) {
                        cache[this.currentIndex];
                    }
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(source.getName(),"next"))) {
                let cache : Array<Object> = this.datasource.getCached();
                if(cache != null) {
                    if(cache.length > this.currentIndex) {
                        this.currentIndex = this.currentIndex + 1;
                        cache[this.currentIndex];
                    }
                }
            }
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "url")) {
                this.datasource.setUrl(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>());
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.dsDelegate.getComponent();
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.dsDelegate.getParameters();
            let url : framework.design.AttributeParameter = new framework.design.AttributeParameter("url", "Url", "Basic");
            parameters.push(url);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
    JSDesignableDataSource["__class"] = "framework.designables.JSDesignableDataSource";
    JSDesignableDataSource["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.EventListener","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableImage extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "img");
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            parameters.push(new framework.design.AttributeParameter("src", "Source", "Basic"));
            return parameters;
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
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
    JSDesignableImage["__class"] = "framework.designables.JSDesignableImage";
    JSDesignableImage["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableList extends framework.JSContainer implements framework.design.Designable {
        /*private*/ designables : Array<framework.design.Designable> = <any>(new Array<any>());

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
                {
                    let array13448 = this.getChildren();
                    for(let index13447=0; index13447 < array13448.length; index13447++) {
                        let c = array13448[index13447];
                        {
                            c.setAttribute("class", dec);
                        }
                    }
                }
            }
            let decStyle : string = this.getAttribute("decorate-style");
            if(decStyle != null) {
                {
                    let array13450 = this.getChildren();
                    for(let index13449=0; index13449 < array13450.length; index13449++) {
                        let c = array13450[index13449];
                        {
                            c.setAttribute("style", decStyle);
                        }
                    }
                }
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            tagParam.options.push(new framework.design.Option("Un-Ordered(ul)", "ul"));
            tagParam.options.push(new framework.design.Option("Ordered(ol)", "ol"));
            parameters.push(tagParam);
            let decoracteClass : framework.design.AttributeParameter = new framework.design.AttributeParameter("decorate-class", "Decorate class", "Basic");
            parameters.push(decoracteClass);
            let decoracteStyle : framework.design.AttributeParameter = new framework.design.AttributeParameter("decorate-style", "Decorate style", "Basic");
            parameters.push(decoracteStyle);
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
            this.designables.push(designable);
            designable.applyParam("name", "item_" + (this.getChildren().length - 1));
            this.decorate();
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.removeChild(designable.getParent());
            let tmp : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
            for(let index13451=0; index13451 < this.designables.length; index13451++) {
                let d = this.designables[index13451];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(d,designable))) {
                    } else {
                        tmp.push(d);
                    }
                }
            }
            this.designables = tmp;
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
            let el : HTMLInputElement = <HTMLInputElement>this.getNative();
            if(el != null) {
                return el.checked;
            }
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
            let el : HTMLInputElement = <HTMLInputElement>this.getNative();
            if(el != null) {
                this.setValue$java_lang_Boolean(el.checked);
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
            this.setAttribute("type", type);
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
            let nat : HTMLElement = this.getNative();
            if(nat != null) {
                let el : HTMLInputElement = <HTMLInputElement>nat;
                return el.value;
            }
            return this.getAttribute("value");
        }

        public setValue$java_lang_String(val : string) {
            let nat : HTMLElement = this.getNative();
            if(nat != null) {
                let el : HTMLInputElement = <HTMLInputElement>nat;
                el.value = val;
            }
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
            let ele : HTMLSelectElement = <HTMLSelectElement>this.getNative();
            if(ele != null) {
                return ele.value;
            }
            let val : string = this.getAttribute("value");
            {
                let array13453 = this.getChildren();
                for(let index13452=0; index13452 < array13453.length; index13452++) {
                    let opt = array13453[index13452];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(opt.getAttribute("value"),val))) {
                            return (<framework.JSOption>opt).getValue();
                        }
                    }
                }
            }
            return null;
        }

        public setValue$java_lang_String(val : string) {
            this.previousValue = this.getValue();
            let ele : HTMLSelectElement = <HTMLSelectElement>this.getNative();
            if(ele != null) {
                ele.value = val;
            }
            this.setAttribute("value", val);
            {
                let array13455 = this.getChildren();
                for(let index13454=0; index13454 < array13455.length; index13454++) {
                    let opt = array13455[index13454];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(opt.getAttribute("value"),val))) {
                            (<framework.JSOption>opt).setSelected(true);
                        }
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
            let elem : HTMLTextAreaElement = <HTMLTextAreaElement>this.getNative();
            if(elem != null) {
                return elem.value;
            }
            return this.getAttribute("value");
        }

        public setValue$java_lang_String(val : string) {
            let elem : HTMLTextAreaElement = <HTMLTextAreaElement>this.getNative();
            if(elem != null) {
                elem.value = val;
            }
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

        /*private*/ designables : Array<framework.design.Designable> = <any>(new Array<any>());

        public constructor(name : string) {
            super(name, "ul");
            this.addClass("slds-accordion");
        }

        /**
         * 
         * @param {framework.lightning.AccordionItem} item
         * @return
         * @return {framework.lightning.Accordion}
         */
        public addItem(item : framework.lightning.AccordionItem) : Accordion {
            this.addDesignable(item);
            let i : string;
            return this;
        }

        /**
         * 
         * @return {Array}
         */
        public advancedEventTypes() : string[] {
            return ["open", "close"];
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
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
                framework.designables.DesignableDelegate.guessName(this.getDesignables(), designable);
                li.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
                this.designables.push(designable);
            } else {
                throw new Error("Can only add Component of type JSAccordionItem in an Accordion Container");
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            let result : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
            for(let index13456=0; index13456 < this.designables.length; index13456++) {
                let des = this.designables[index13456];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(des,designable))) {
                    } else {
                        result.push(des);
                    }
                }
            }
            this.designables = result;
            designable.getParent().removeChild(designable);
            this.setRendered(false);
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
    Accordion["__class"] = "framework.lightning.Accordion";
    Accordion["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class AccordionItem extends framework.JSContainer implements framework.design.Designable {
        /*private*/ accordionContent : framework.JSContainer = <framework.designables.JSDesignable>new framework.JSContainer("accordionContent", "div").addClass("slds-accordion__content");

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ accSummary : framework.JSContainer = new framework.JSContainer("div").addClass("slds-accordion__summary");

        /*private*/ summaryHeading : framework.JSContainer = new framework.JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");

        /*private*/ uititle : framework.JSContainer = new framework.JSContainer("title", "span").addClass("slds-truncate").setHtml("Accordion Item");

        btn : framework.lightning.IconButton = new framework.lightning.IconButton("summaryAction");

        public constructor(name : string, title : string) {
            super(name, "section");
            this.addClass("slds-accordion__section");
            this.addChild$framework_JSContainer(this.accSummary);
            this.accSummary.addChild$framework_JSContainer(this.summaryHeading);
            this.summaryHeading.addEventListener(new AccordionItem.AccordionItem$0(this), "click");
            this.btn.setAttribute("class", "slds-button slds-button_reset slds-accordion__summary-action");
            this.summaryHeading.addChild$framework_JSContainer(this.btn);
            this.btn.addChild$framework_JSContainer(this.uititle.setHtml(title));
            this.btn.getIcon().setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
            this.btn.getIcon().setIconName("switch");
            this.btn.getIcon().setType("utility");
            let btnArrow : framework.lightning.IconButton = new framework.lightning.IconButton("arrow");
            btnArrow.setAttribute("class", "slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none");
            this.accSummary.addChild$framework_JSContainer(btnArrow);
            btnArrow.getIcon().setType("utility");
            btnArrow.getIcon().setIconName("down");
            this.addChild$framework_JSContainer(this.accordionContent);
        }

        public open() {
            this.addClass("slds-is-open");
            let evt : CustomEvent = new CustomEvent("open");
            evt["data"] = this;
            this.getParent().getParent().fireListener("open", evt);
        }

        public close() {
            this.removeClass("slds-is-open");
            let evt : CustomEvent = new CustomEvent("close");
            evt["data"] = this;
            this.getParent().getParent().fireListener("close", evt);
        }

        public setTitle(title : string) {
            this.uititle.setHtml(title);
        }

        public setIcon(iconType : string, iconName : string) {
            let icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("ss");
            icon.setType(iconType);
            icon.setIconName(iconName);
            this.btn.setIcon(icon);
            icon.setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"title"))) {
                this.setTitle(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let l : Array<any> = this.accordionContent.getChildren();
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let title : framework.design.AttributeParameter = new framework.design.AttributeParameter("title", "Title", "Basic");
            parameters.push(title);
            return parameters;
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

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.accordionContent.removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_JSContainer$int(this.accordionContent, steps);
        }
    }
    AccordionItem["__class"] = "framework.lightning.AccordionItem";
    AccordionItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];



    export namespace AccordionItem {

        export class AccordionItem$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let cls : string = this.__parent.getAttribute("class");
                if(/* contains */cls.indexOf("slds-is-open") != -1) {
                    this.__parent.close();
                } else {
                    this.__parent.open();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AccordionItem$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.lightning {
    export class Avatar extends framework.JSContainer implements framework.design.Designable {
        /*private*/ image : framework.designables.JSDesignableImage;

        public static SMALL : string = "slds-avatar_small";

        public static X_SMALL : string = "slds-avatar_x-small";

        public static MEDIUM : string = "slds-avatar_medium";

        public static LARGE : string = "slds-avatar_large";

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "span");
            this.image = null;
            this.addClass("slds-avatar");
            this.image = <framework.designables.JSDesignableImage><any>framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("html:img").build(new framework.builder.marshalling.Component(), false);
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

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"circle"))) {
                this.setCircle(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"size"))) {
                this.setSize(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>(this.image));
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let circle : framework.design.AttributeParameter = new framework.design.AttributeParameter("circle", "Make Circle", "Basic");
            circle.options.push(new framework.design.Option("", ""));
            parameters.push(circle);
            let size : framework.design.AttributeParameter = new framework.design.AttributeParameter("size", "Size", "Basic");
            size.options.push(new framework.design.Option("Normal", "Normal"));
            size.options.push(new framework.design.Option("Large", Avatar.LARGE));
            size.options.push(new framework.design.Option("Medium", Avatar.MEDIUM));
            size.options.push(new framework.design.Option("Small", Avatar.SMALL));
            size.options.push(new framework.design.Option("X Small", Avatar.X_SMALL));
            parameters.push(size);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
    Avatar["__class"] = "framework.lightning.Avatar";
    Avatar["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
    export class Badge extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-badge");
        }

        public setInverse(b : boolean) : Badge {
            if(b) {
                this.addClass("slds-badge_inverse");
            } else {
                this.removeClass("slds-badge_inverse");
            }
            return this;
        }

        public setLightest(b : boolean) : Badge {
            if(b) {
                this.addClass("slds-badge_lightest");
            } else {
                this.removeClass("slds-badge_lightest");
            }
            return this;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"inverse"))) {
                this.setInverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"lightest"))) {
                this.setLightest(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let inverse : framework.design.AttributeParameter = new framework.design.AttributeParameter("inverse", "Inverse", "Basic");
            inverse.options.push(new framework.design.Option("", ""));
            let lightest : framework.design.AttributeParameter = new framework.design.AttributeParameter("lightest", "Lightest", "Basic");
            lightest.options.push(new framework.design.Option("", ""));
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Html", "Basic");
            parameters.push(inverse, lightest, textParam);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
    Box["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class BreadCrumbItem extends framework.JSContainer implements framework.design.Designable {
        link : framework.JSContainer = new framework.JSContainer("link", "a").setAttribute("href", "javascript:void(0);");

        /*private*/ delagate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string, label : string) {
            super(name, "li");
            this.link.setHtml(label);
            this.addChild$framework_JSContainer(this.link);
            this.addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
        }

        public setLabel(label : string) : BreadCrumbItem {
            this.link.setHtml(label);
            return this;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delagate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"label"))) {
                this.setLabel(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delagate.getComponent();
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let param : Array<framework.design.Parameter> = this.delagate.getParameters();
            let label : framework.design.AttributeParameter = new framework.design.AttributeParameter("label", "Label", "Basic");
            param.push(label);
            return param;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
    BreadCrumbItem["__class"] = "framework.lightning.BreadCrumbItem";
    BreadCrumbItem["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class BreadCrumbs extends framework.JSContainer implements framework.design.Designable {
        /*private*/ breadcrumb : framework.lightning.HorizontalList = new framework.lightning.HorizontalList("breadcrumb");

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "nav");
            this.setAttribute("role", "navigation");
            this.setAttribute("aria-label", "Breadcrumbs");
            this.breadcrumb.setTag("ol");
            this.breadcrumb.addClass("slds-wrap");
            this.addChild$framework_JSContainer(this.breadcrumb);
        }

        public addItem(name : string, label : string) : BreadCrumbs {
            let item : framework.lightning.BreadCrumbItem = new framework.lightning.BreadCrumbItem(name, label);
            this.breadcrumb.addChild$framework_JSContainer(item);
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let children : Array<any> = this.breadcrumb.getChildren();
            return children;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.BreadCrumbItem) {
                this.breadcrumb.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            } else {
                console.error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
                throw new Error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.breadcrumb.removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            this.delegate.moveDesignable$framework_JSContainer$int(this.breadcrumb, steps);
        }
    }
    BreadCrumbs["__class"] = "framework.lightning.BreadCrumbs";
    BreadCrumbs["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
                    this.setAttribute("state", "neutral");
                    this.setState(Button.STATE_NEUTRAL);
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
                        this.setAttribute("state", "neutral");
                        this.setState(Button.STATE_NEUTRAL);
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
            for(let index13457=0; index13457 < Button.states_$LI$().length; index13457++) {
                let s = Button.states_$LI$()[index13457];
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
                this.setStateful(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"disabled"))) {
                this.setDisabled(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"inverse"))) {
                this.setInverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"label"))) {
                this.setLabel(value);
            } else {
            }
        }
    }
    Button["__class"] = "framework.lightning.Button";
    Button["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class ButtonGroup extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let result : Array<any> = this.getChildren();
            return result;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.Button) {
                this.addButton$framework_lightning_Button(<framework.lightning.Button><any>designable);
            } else if(designable != null && designable instanceof <any>framework.lightning.IconButton) {
                this.addButton$framework_lightning_IconButton(<framework.lightning.IconButton><any>designable);
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            designable.getParent().removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            designable.moveDesignable(designable, steps);
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
    export class Col extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-col");
            this.setAttribute("sections", "12");
            this.setAttribute("span", "3");
            this.refreshCls();
        }

        public setSections(sections : string) {
            this.setAttribute("sections", sections);
            this.refreshCls();
        }

        public setSpan(span : string) {
            this.setAttribute("span", span);
            this.refreshCls();
        }

        public getSpan() : number {
            return parseInt(this.getAttribute("span"));
        }

        public getSections() : number {
            return parseInt(this.getAttribute("sections"));
        }

        public refreshCls() {
            let cls : string[] = this.getAttribute("class").split(" ");
            let ncls : string = "";
            for(let index13458=0; index13458 < cls.length; index13458++) {
                let cl = cls[index13458];
                {
                    if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(cl, "slds-size_")) {
                    } else {
                        ncls = ncls + " " + cl;
                    }
                }
            }
            this.setAttribute("class", ncls);
            this.addClass("slds-size_" + this.getAttribute("span") + "-of-" + this.getAttribute("sections"));
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"sections"))) {
                this.setSections(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"span"))) {
                this.setSpan(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let res : Array<any> = this.getChildren();
            return res;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let pa : Array<framework.design.Parameter> = this.delegate.getParameters();
            let sections : framework.design.AttributeParameter = new framework.design.AttributeParameter("sections", "Grid Size", "Basic");
            sections.options.push(new framework.design.Option("12", "12"));
            sections.options.push(new framework.design.Option("6", "6"));
            sections.options.push(new framework.design.Option("4", "4"));
            sections.options.push(new framework.design.Option("3", "3"));
            sections.options.push(new framework.design.Option("2", "2"));
            sections.options.push(new framework.design.Option("1", "1"));
            let span : framework.design.AttributeParameter = new framework.design.AttributeParameter("span", "Col Span", "Basic");
            pa.push(sections, span);
            return pa;
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
            this.removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
        }
    }
    Col["__class"] = "framework.lightning.Col";
    Col["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning.designables {
    export class JSDesignableIterator extends framework.JSContainer implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ data : Array<Object> = <any>(new Array<Object>());

        /*private*/ templateCtn : framework.JSContainer = new framework.JSContainer("tmp", "div");

        /*private*/ list : framework.JSContainer = new framework.JSContainer("list", "div");

        public constructor(name : string) {
            super(name, "div");
            this.addChild$framework_JSContainer(this.templateCtn);
            let comp : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            comp.impl = "zs:iterable";
            let iterable : framework.lightning.designables.JSDesignableIterable = <framework.lightning.designables.JSDesignableIterable><any>framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("zs:iterable").build(comp, true);
            this.templateCtn.addChild$framework_JSContainer(iterable);
            this.addChild$framework_JSContainer(this.list);
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let res : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
            res.push(<framework.design.Designable><any>this.templateCtn.getChildren()[0]);
            return res;
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        public setData(obj : any) {
            super.setData$java_lang_Object(obj);
            let ls : Array<Object> = <Array<Object>>obj;
            let iterable : framework.lightning.designables.JSDesignableIterable = <framework.lightning.designables.JSDesignableIterable>this.templateCtn.getChildren()[0];
            for(let index13459=0; index13459 < ls.length; index13459++) {
                let o = ls[index13459];
                {
                    let ins : framework.lightning.designables.JSDesignableIterable = iterable.Clone();
                    this.list.addChild$framework_JSContainer(ins);
                    ins.setData(o);
                }
            }
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            return params;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.designables.JSDesignableIterable) {
                this.templateCtn.clearChildren();
                this.templateCtn.setRendered(false);
                this.templateCtn.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            } else {
                throw new Error("Cannot add directly to iterator. Please add in the Iterable instead");
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            throw new Error("Cannot remove the Iterable from the Iterator");
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            throw new Error("Cannot move the Iterable");
        }
    }
    JSDesignableIterator["__class"] = "framework.lightning.designables.JSDesignableIterator";
    JSDesignableIterator["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
            this.control.clearChildren();
            this.control.setRendered(false);
            this.control.addChild$framework_JSContainer(<framework.JSContainer><any>input);
            return this;
        }

        public getInput() : framework.InputField<any> {
            return <framework.InputField<any>><any>this.control.getChildren()[0];
        }

        public getControl() : framework.JSContainer {
            return this.control;
        }
    }
    FormElement["__class"] = "framework.lightning.FormElement";
    FormElement["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


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
    export class IconButton extends framework.JSContainer implements framework.design.Designable {
        /*private*/ icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("icon");

        static SMALL : string = "slds-button_icon-small";

        static EXTRA_SMALL : string = "slds-button_icon-x-small";

        static EXTRA_EXTRA_SMALL : string = "slds-button_icon-xx-small";

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "button");
            this.icon.setSvgClass("slds-button__icon");
            this.setAttribute("svgClass", "slds-button__icon");
            this.addChild$framework_JSContainer(this.icon);
            this.addClass("slds-button").addClass("slds-button_icon");
            this.setAttribute("iconAssetUrl", this.icon.getAssetsUrl());
            this.setAttribute("iconType", this.icon.getType());
            this.setAttribute("iconName", this.icon.getIconName());
        }

        public getIcon() : framework.lightning.SvgIcon {
            return this.icon;
        }

        public setIcon(icon : framework.lightning.SvgIcon) : IconButton {
            this.removeChild(this.icon);
            this.icon = icon;
            icon.setSvgClass("slds-button__icon");
            this.addChild$framework_JSContainer(icon);
            this.setRendered(false);
            return this;
        }

        /*private*/ toggleClass(cls : string, b : boolean) : IconButton {
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

        public setStateful(b : boolean) : IconButton {
            return this.setBorderFilled(b);
        }

        public isSelected() : boolean {
            let sclass : string = this.getAttribute("class");
            return sclass != null && /* contains */sclass.indexOf("slds-is-selected") != -1;
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"iconName"))) {
                this.icon.setIconName(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"iconType"))) {
                this.icon.setType(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"iconAssetUrl"))) {
                this.icon.setAssetsUrl(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"selected"))) {
                this.setSelected(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"more"))) {
                this.setMore(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"error"))) {
                this.setError(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"inverse"))) {
                this.setInverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"container"))) {
                this.setContainer(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"border"))) {
                this.setBorder(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderFilled"))) {
                this.setBorderFilled(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderInverse"))) {
                this.setBorderInverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"stateful"))) {
                this.setStateful(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"size"))) {
                this.setSize(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let keys : string[] = ["iconName", "iconType", "iconAssetUrl", "selected", "more", "error", "inverse", "container", "border", "borderFilled", "borderInverse", "stateful"];
            let labels : string[] = ["Icon Name", "Icon Type", "Icon Asset Url", "Selected", "Error", "Inverse", "Container", "Show Border", "Border Filled", "Border Inverse", "Stateful"];
            for(let i : number = 0; i < keys.length; i++) {
                let para : framework.design.AttributeParameter = new framework.design.AttributeParameter(keys[i], labels[i], "Basic");
                parameters.push(para);
                if(i >= 3) {
                    para.options.push(new framework.design.Option("", ""));
                }
            };
            let size : framework.design.AttributeParameter = new framework.design.AttributeParameter("size", "Size", "Basic");
            size.options.push(new framework.design.Option("Normal", "Normal"));
            size.options.push(new framework.design.Option("Small", IconButton.SMALL));
            size.options.push(new framework.design.Option("X Small", IconButton.EXTRA_SMALL));
            size.options.push(new framework.design.Option("XX Small", IconButton.EXTRA_EXTRA_SMALL));
            parameters.push(size);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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

        /*private*/ content : framework.JSContainer = new framework.designables.JSDesignable("content", "div").addClass("slds-modal__content");

        /*private*/ footer : framework.JSContainer = new framework.designables.JSDesignable("footer", "footer").addClass("slds-modal__footer");

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

        public static SIZE_LARGE : string = "slds-modal_large";

        public static SIZE_MEDIUM : string = "slds-modal_medium";

        public static SIZE_NORMAL : string = "slds-modal_normal";

        public setSize(size : string) : Modal {
            this.removeClass(Modal.SIZE_LARGE).removeClass(Modal.SIZE_MEDIUM);
            this.addClass(size);
            return this;
        }

        public setTitle(stitle : string) : Modal {
            this.title.setHtml(stitle);
            return this;
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

        public setBody(body : framework.JSContainer) : Modal {
            this.content.clearChildren();
            this.content.setRendered(false);
            this.content.addChild$framework_JSContainer(body);
            return this;
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
        /*private*/ html : string = "<div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div>";

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-spinner slds-spinner_medium");
            this.setAttribute("role", "status");
            this.setHtml(this.html);
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
                this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.5.2/icons";
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
                this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.5.2/icons";
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
        /*private*/ listeners : Array<framework.lightning.TabActionListener> = <any>(new Array<any>());

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
            this.listeners.push(listene);
        }

        public close() : TabItem {
            this.fireClose();
            this.active = false;
            this.body.getParent().removeChild(this.body);
            this.body.show(false);
            let currentIndex : number = this.getParent().getChildren().indexOf(this);
            this.getParent().removeChild(this);
            this.getParent().setRendered(false);
            this.body.getParent().setRendered(false);
            if(this.getParent().getChildren().length > 0) {
                if(currentIndex >= this.getParent().getChildren().length) {
                    currentIndex = this.getParent().getChildren().length - 1;
                }
                let item : TabItem = <TabItem>this.getParent().getChildren()[currentIndex];
                item.setActive(true);
            }
            return this;
        }

        public isActive() : boolean {
            return this.active;
        }

        public fireClose() {
            for(let index13460=0; index13460 < this.listeners.length; index13460++) {
                let li = this.listeners[index13460];
                {
                    li.onClose(this);
                }
            }
        }

        public fireActivate() {
            for(let index13461=0; index13461 < this.listeners.length; index13461++) {
                let li = this.listeners[index13461];
                {
                    li.onActivate(this);
                }
            }
        }

        public fireDeActivate() {
            for(let index13462=0; index13462 < this.listeners.length; index13462++) {
                let li = this.listeners[index13462];
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
    export class ExcelTable extends framework.JSContainer implements framework.renderer.Renderer<ExcelTable> {
        /*private*/ table : any;

        /*private*/ opt : ht.Options;

        public constructor(name : string) {
            super(name, "div");
            this.table = null;
            this.opt = null;
            this.addClass("ExcelTable");
            this.addRenderer(this);
        }

        public setOptions(options : ht.Options) {
            this.opt = options;
        }

        public doRender$framework_lightning_table_ExcelTable$jsweet_dom_HTMLElement(c : ExcelTable, root : HTMLElement) {
            if(!this.isRendered()) {
                let element : HTMLElement = document.getElementById(c.getId());
                if(this.opt == null) {
                    this.opt = <any>Object.defineProperty({

                    }, '__interfaces', { configurable: true, value: ["def.handsontable.ht.Options"] });
                }
                this.table = {};
            }
        }

        /**
         * 
         * @param {framework.lightning.table.ExcelTable} c
         * @param {HTMLElement} root
         */
        public doRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.lightning.table.ExcelTable) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_lightning_table_ExcelTable$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }
    }
    ExcelTable["__class"] = "framework.lightning.table.ExcelTable";
    ExcelTable["__interfaces"] = ["framework.interactions.Droppable","framework.renderer.Renderer","framework.Renderable"];


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
            this.pages.clearChildren();
            this.pages.setRendered(false);
            let pageSize : number = table.getPageSize();
            let model : framework.lightning.table.TableModel = table.getModel();
            this.numPages = Math.round(model.getRowCount() / pageSize);
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
            this.pages.getChildren()[0].setStyle("border-left", "none").setStyle("border-radius", "0");
            this.pages.getChildren()[this.pages.getChildren().length - 1].setStyle("border-right", "none").setStyle("border-radius", "0");
        }

        /*private*/ redisplayBtns(currentPage : number) {
            if(currentPage >= this.maxItem) {
                let rangeFrom : number = currentPage - this.maxItem;
                for(let i : number = 0; i < this.pages.getChildren().length; i++) {
                    if(i <= rangeFrom) {
                        this.pages.getChildren()[i].setVisible(false);
                    } else if(i > currentPage) {
                        this.pages.getChildren()[i].setVisible(false);
                    } else {
                        this.pages.getChildren()[i].setVisible(true);
                    }
                    if(i === currentPage) {
                        this.pages.getChildren()[i].addClass("slds-button_brand");
                    } else {
                        this.pages.getChildren()[i].removeClass("slds-button_brand");
                    }
                };
            } else {
                for(let i : number = 0; i < this.pages.getChildren().length; i++) {
                    if(i === currentPage) {
                        this.pages.getChildren()[i].addClass("slds-button_brand");
                    } else {
                        this.pages.getChildren()[i].removeClass("slds-button_brand");
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
                currentPage = /* parseInt */parseInt(source.getName());
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

        /**
         * 
         * @return {Array}
         */
        public advancedEventTypes() : string[] {
            return ["selectRows", "sort", "changePage"];
        }

        public setSelectRowOn(on : string) {
            this.selecteRowOn = on;
        }

        /*private*/ addEmptyRow() : framework.JSContainer {
            this.tbody.clearChildren();
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
            let evt : CustomEvent = new CustomEvent("changePage");
            evt["page"] = page + "";
            this.fireListener("changePage", evt);
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
            this.tbody.clearChildren();
            this.tbody.setRendered(false);
            if(this.model == null) {
                return;
            }
            if(this.tableColumnModel == null) {
                return;
            }
            if(this.tableCellRenderer == null) {
                return;
            }
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
                        let cell : framework.Renderable = this.tableCellRenderer['getComponent$framework_lightning_table_Table$java_lang_Object$int$int'](this, value, row, col);
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
            return this.tbody.getChildren()[index];
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
            this.thead.clearChildren();
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

        public setTopMagnet(b : boolean) : Table {
            this.setFeature("slds-has-top-magnet", b);
            return this;
        }

        public setNoRowHover(b : boolean) : Table {
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
                let table : framework.lightning.table.Table = <framework.lightning.table.Table>source.getParent().getParent();
                let page : number = table.currrentPage;
                index = (page * table.pageSize) + index;
                evt["first"] = index + "";
                evt["last"] = index + "";
                table.fireListener("selectRows", evt);
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

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").addClass("slds-tabs_default__content");

        public constructor(name : string) {
            super(name, "div");
            this.addClass("slds-tabs_default");
            this.addChild$framework_JSContainer(this.nav);
            this.addChild$framework_JSContainer(this.body);
            this.body.setAttribute("role", "tabpanel");
        }

        public addItem(label? : any, list? : any) : any {
            if(((label != null && label instanceof <any>framework.lightning.TabItem) || label === null) && list === undefined) {
                return <any>this.addItem$framework_lightning_TabItem(label);
            } else throw new Error('invalid overload');
        }

        public addItem$framework_lightning_TabItem(item : framework.lightning.TabItem) : Tabs {
            this.nav.addChild$framework_JSContainer(item);
            this.body.addChild$framework_JSContainer(item.body.show(false));
            return this;
        }

        public clear() : Tabs {
            this.nav.clearChildren();
            this.body.clearChildren();
            this.setRendered(false);
            return this;
        }

        public setActive(item : framework.lightning.TabItem) : Tabs {
            {
                let array13464 = this.getItems();
                for(let index13463=0; index13463 < array13464.length; index13463++) {
                    let tab = array13464[index13463];
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
            }
            return this;
        }

        public getTab(body : framework.lightning.TabBody) : framework.lightning.TabItem {
            {
                let array13466 = this.getItems();
                for(let index13465=0; index13465 < array13466.length; index13465++) {
                    let c = array13466[index13465];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(c.getBody(),body))) {
                            return c;
                        }
                    }
                }
            }
            return null;
        }

        public getActiveTab() : framework.lightning.TabItem {
            {
                let array13468 = this.getItems();
                for(let index13467=0; index13467 < array13468.length; index13467++) {
                    let item = array13468[index13467];
                    {
                        if(item.isActive()) {
                            return item;
                        }
                    }
                }
            }
            return null;
        }

        public getItems() : Array<framework.lightning.TabItem> {
            return <Array<any>>this.nav.getChildren();
        }
    }
    Tabs["__class"] = "framework.lightning.Tabs";
    Tabs["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Text extends framework.JSContainer implements framework.design.Designable {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!Text.__static_initialized) { Text.__static_initialized = true; Text.__static_initializer_0(); } }

        static LINK_NONE : string = "none";

        static LINK_RESET : string = "slds-text-link_reset";

        static LINK : string = "slds-text-link";

        static LINK_FAUX : string = "slds-text-link_faux";

        static NONE : string = "none";

        static BODY_REGULAR : string = "slds-text-body_regular";

        static BODY_SMALL : string = "slds-text-body_small";

        static HEADING_LARGE : string = "slds-text-heading_large";

        static HEADING_MEDIUM : string = "slds-text-heading_medium";

        static HEADING_SMALL : string = "slds-text-heading_small";

        static TITLE : string = "slds-text-title";

        static TILE_CAPS : string = "slds-text-title_caps";

        static COLOR_NONE : string = "none";

        static COLOR_DEFAULT : string = "slds-text-color_default";

        static COLOR_WEAK : string = "slds-text-color_weak";

        static COLOR_ERROR : string = "slds-text-color_error";

        static COLOR_SUCCESS : string = "slds-text-color_success";

        static COLOR_INVERSE_DEFAULT : string = "slds-text-color_inverse";

        static COLOR_INVERSE_WEAK : string = "slds-text-color_inverse-weak";

        static ALIGN_NONE : string = "none";

        static ALIGN_LEFT : string = "slds-text-align_left";

        static ALIGN_CENTER : string = "slds-text-align_center";

        static ALIGN_RIGHT : string = "slds-text-align_right";

        static LONG_FORM : string = "slds-text-longform";

        static TEXT_TYPES : string[]; public static TEXT_TYPES_$LI$() : string[] { Text.__static_initialize(); if(Text.TEXT_TYPES == null) Text.TEXT_TYPES = [Text.NONE, Text.BODY_REGULAR, Text.BODY_SMALL, Text.HEADING_LARGE, Text.HEADING_MEDIUM, Text.HEADING_SMALL, Text.TITLE, Text.TILE_CAPS]; return Text.TEXT_TYPES; };

        static TEXT_TYPES_LABELS : string[]; public static TEXT_TYPES_LABELS_$LI$() : string[] { Text.__static_initialize(); if(Text.TEXT_TYPES_LABELS == null) Text.TEXT_TYPES_LABELS = ["None", "Body Regular", "Body Small", "Heading Large", "Heading Medium", "Heading Small", "Title", "Title Caps"]; return Text.TEXT_TYPES_LABELS; };

        static COLORS : string[]; public static COLORS_$LI$() : string[] { Text.__static_initialize(); if(Text.COLORS == null) Text.COLORS = [Text.COLOR_NONE, Text.COLOR_DEFAULT, Text.COLOR_WEAK, Text.COLOR_ERROR, Text.COLOR_SUCCESS, Text.COLOR_INVERSE_DEFAULT, Text.COLOR_INVERSE_WEAK]; return Text.COLORS; };

        static COLORS_LABELS : string[]; public static COLORS_LABELS_$LI$() : string[] { Text.__static_initialize(); if(Text.COLORS_LABELS == null) Text.COLORS_LABELS = ["None", "Default", "Weak", "Error", "Success", "Inverse Default", "Inverse Inverse Weak"]; return Text.COLORS_LABELS; };

        static ALIGNS : string[]; public static ALIGNS_$LI$() : string[] { Text.__static_initialize(); if(Text.ALIGNS == null) Text.ALIGNS = [Text.ALIGN_NONE, Text.ALIGN_LEFT, Text.ALIGN_CENTER, Text.ALIGN_RIGHT]; return Text.ALIGNS; };

        static ALIGNS_LABELS : string[]; public static ALIGNS_LABELS_$LI$() : string[] { Text.__static_initialize(); if(Text.ALIGNS_LABELS == null) Text.ALIGNS_LABELS = ["None", "Align Left", "Align Center", "Align Right"]; return Text.ALIGNS_LABELS; };

        static DECORATIONS : string[]; public static DECORATIONS_$LI$() : string[] { Text.__static_initialize(); if(Text.DECORATIONS == null) Text.DECORATIONS = [Text.LINK_NONE, Text.LINK, Text.LINK_RESET, Text.LINK_FAUX]; return Text.DECORATIONS; };

        static DECORATIONS_LABELS : string[]; public static DECORATIONS_LABELS_$LI$() : string[] { Text.__static_initialize(); if(Text.DECORATIONS_LABELS == null) Text.DECORATIONS_LABELS = ["None", "Link", "Link Reset", "Link Faux"]; return Text.DECORATIONS_LABELS; };

        static textTags : Object; public static textTags_$LI$() : Object { Text.__static_initialize(); if(Text.textTags == null) Text.textTags = <Object>new Object(); return Text.textTags; };

        static __static_initializer_0() {
            Text.textTags_$LI$()["h1"] = "Heading 1";
            Text.textTags_$LI$()["h2"] = "Heading 2";
            Text.textTags_$LI$()["h3"] = "Heading 3";
            Text.textTags_$LI$()["h4"] = "Heading 4";
            Text.textTags_$LI$()["h5"] = "Heading 5";
            Text.textTags_$LI$()["label"] = "Label";
            Text.textTags_$LI$()["paragraph"] = "Paragraph";
            Text.textTags_$LI$()["span"] = "Span";
        }

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        public setAlign(align : string) : Text {
            for(let index13469=0; index13469 < Text.ALIGNS_$LI$().length; index13469++) {
                let s = Text.ALIGNS_$LI$()[index13469];
                {
                    this.removeClass(s);
                }
            }
            this.addClass(align);
            return this;
        }

        public setTextType(type : string) : Text {
            for(let index13470=0; index13470 < Text.TEXT_TYPES_$LI$().length; index13470++) {
                let s = Text.TEXT_TYPES_$LI$()[index13470];
                {
                    this.removeClass(s);
                }
            }
            this.addClass(type);
            return this;
        }

        public setColor(color : string) : Text {
            for(let index13471=0; index13471 < Text.COLORS_$LI$().length; index13471++) {
                let s = Text.COLORS_$LI$()[index13471];
                {
                    this.removeClass(s);
                }
            }
            this.addClass(color);
            return this;
        }

        public setDecoration(decoration : string) : Text {
            for(let index13472=0; index13472 < Text.DECORATIONS_$LI$().length; index13472++) {
                let s = Text.DECORATIONS_$LI$()[index13472];
                {
                    this.removeClass(s);
                }
            }
            this.addClass(decoration);
            return this;
        }

        public setLongForm(b : boolean) : Text {
            this.toggleClass(Text.LONG_FORM, b);
            return this;
        }

        /*private*/ toggleClass(cls : string, b : boolean) : Text {
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

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"textColor"))) {
                this.setColor(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"textAlign"))) {
                this.setAlign(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"textDecoration"))) {
                this.setDecoration(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"textType"))) {
                this.setTextType(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"longForm"))) {
                this.setLongForm(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"truncate"))) {
                this.setTruncate(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"true")));
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let children : Array<any> = this.getChildren();
            return children;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            {
                let array13474 = Object.keys(Text.textTags_$LI$());
                for(let index13473=0; index13473 < array13474.length; index13473++) {
                    let key = array13474[index13473];
                    {
                        tagParam.options.push(new framework.design.Option(<string>Text.textTags_$LI$()[key], key));
                    }
                }
            }
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Text", "Basic");
            let decorations : framework.design.AttributeParameter = new framework.design.AttributeParameter("textDecoration", "Decoration", "Advanced");
            for(let i : number = 0; i < Text.DECORATIONS_$LI$().length; i++) {
                decorations.options.push(new framework.design.Option(Text.DECORATIONS_LABELS_$LI$()[i], Text.DECORATIONS_$LI$()[i]));
            };
            let types : framework.design.AttributeParameter = new framework.design.AttributeParameter("textType", "Text Type", "Advanced");
            for(let i : number = 0; i < Text.TEXT_TYPES_$LI$().length; i++) {
                types.options.push(new framework.design.Option(Text.TEXT_TYPES_LABELS_$LI$()[i], Text.TEXT_TYPES_$LI$()[i]));
            };
            let colors : framework.design.AttributeParameter = new framework.design.AttributeParameter("textColor", "Color", "Advanced");
            for(let i : number = 0; i < Text.COLORS_$LI$().length; i++) {
                colors.options.push(new framework.design.Option(Text.COLORS_LABELS_$LI$()[i], Text.COLORS_$LI$()[i]));
            };
            let aligns : framework.design.AttributeParameter = new framework.design.AttributeParameter("textAlign", "Align", "Advanced");
            for(let i : number = 0; i < Text.ALIGNS_$LI$().length; i++) {
                aligns.options.push(new framework.design.Option(Text.ALIGNS_LABELS_$LI$()[i], Text.ALIGNS_$LI$()[i]));
            };
            let longForm : framework.design.AttributeParameter = new framework.design.AttributeParameter("longForm", "Long Form", "Advanced");
            longForm.options.push(new framework.design.Option("", ""));
            let truncate : framework.design.AttributeParameter = new framework.design.AttributeParameter("truncate", "Truncate", "Basic");
            truncate.options.push(new framework.design.Option("", ""));
            params.push(tagParam, textParam, truncate, decorations, types, colors, aligns, longForm);
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
            this.removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
        }
    }
    Text["__class"] = "framework.lightning.Text";
    Text["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.rtc {
    export class Conference extends framework.JSContainer implements framework.renderer.ExtendedRenderer<Conference> {
        /*private*/ localVideo : framework.rtc.LocalVideoContainer = new framework.rtc.LocalVideoContainer("local");

        /*private*/ remoteVideos : framework.util.Map<string, framework.rtc.VideoContainer> = <any>(new framework.util.HashMap<any, any>());

        /*private*/ remotes : framework.JSContainer = new framework.JSContainer("remotes", "div").addClass("remotes");

        /*private*/ webrtc : Object = null;

        public constructor(name : string) {
            super(name, "div");
            this.addChild$framework_JSContainer(this.localVideo);
            this.addChild$framework_JSContainer(this.remotes);
            this.addRenderer(this);
        }

        public readyToCall(o : Object) : Object {
            Conference.aler("readyToCall");
            let fn : Function = <Function>this.webrtc["joinRoom"];
            fn.call(this.webrtc, "myroom");
            return o;
        }

        public localStream(stream : Object) : Object {
            Conference.aler("localStream");
            return stream;
        }

        public localMediaError(err : Object) : Object {
            Conference.aler("localMediaError");
            return err;
        }

        public localScreenAdded(video : HTMLVideoElement) : Object {
            Conference.aler("localScreenAdded");
            return video;
        }

        public localScreenRemoved(video : HTMLVideoElement) : Object {
            Conference.aler("localScreenRemoved");
            this.localVideo.setVisible(false);
            return video;
        }

        public videoAdded(video : HTMLVideoElement, peer : Object) : Object {
            Conference.aler("videoAdded");
            let peerId : string = Conference.getIdentifier(peer);
            if(!this.remoteVideos.containsKey(peerId)) {
                let container : framework.rtc.VideoContainer = new framework.rtc.VideoContainer(peerId);
                container.setTitle(<string>peer["nick"]);
                this.remotes.addChild$framework_JSContainer(container);
                this.remoteVideos.put(peerId, container);
                container.open();
                this.render();
                container.setVideo(video);
                return video;
            } else {
                this.remoteVideos.get(peerId).setVideo(video);
                this.remoteVideos.get(peerId).open();
                this.render();
                return video;
            }
        }

        public static getIdentifier(peer : Object) : string {
            return <string>peer["nick"];
        }

        public videoRemoved(video : HTMLVideoElement, peer : Object) : Object {
            Conference.aler("removed");
            let peerId : string = Conference.getIdentifier(peer);
            if(!this.remoteVideos.containsKey(peerId)) {
                return null;
            } else {
                let cv : framework.rtc.VideoContainer = this.remoteVideos.get(peerId);
                cv.close();
                this.render();
                return video;
            }
        }

        public remoteVolumeChange(peer : Object, volume : string) : Object {
            let vd : framework.rtc.VideoContainer = this.remoteVideos.get(Conference.getIdentifier(peer));
            if(vd != null) {
                vd.setVolume(/* parseInt */parseInt(volume));
            }
            return null;
        }

        public volumeChange(volume : string, threshold : string) : Object {
            if(this.localVideo != null) {
                this.localVideo.setVolume(/* parseInt */parseInt(volume));
            }
            return null;
        }

        public static aler(s : string) {
        }

        public configure() : Object {
            let on : Function = <Function>this.webrtc["on"];
            let readyToCall : (p1: Object) => Object = (o) => { return this.readyToCall(o) };
            on.call(this.webrtc, "readyToCall", readyToCall);
            let localStream : (p1: Object) => Object = (stream) => { return this.localStream(stream) };
            let localMediaError : (p1: Object) => Object = (err) => { return this.localMediaError(err) };
            let localScreenAdded : (p1: HTMLVideoElement) => Object = (video) => { return this.localScreenAdded(video) };
            let localScreenRemoved : (p1: HTMLVideoElement) => Object = (video) => { return this.localScreenRemoved(video) };
            let videoAdded : (p1: HTMLVideoElement, p2: Object) => Object = (video,peer) => { return this.videoAdded(video,peer) };
            let videoRemoved : (p1: HTMLVideoElement, p2: Object) => Object = (video,peer) => { return this.videoRemoved(video,peer) };
            let remoteVolumeChange : (p1: Object, p2: string) => Object = (peer,volume) => { return this.remoteVolumeChange(peer,volume) };
            let volumeChange : (p1: string, p2: string) => Object = (volume,threshold) => { return this.volumeChange(volume,threshold) };
            on.call(this.webrtc, "localStream", localStream);
            on.call(this.webrtc, "localMediaError", localMediaError);
            on.call(this.webrtc, "localScreenAdded", localScreenAdded);
            on.call(this.webrtc, "localScreenRemoved", localScreenRemoved);
            on.call(this.webrtc, "videoAdded", videoAdded);
            on.call(this.webrtc, "videoRemoved", videoRemoved);
            on.call(this.webrtc, "remoteVolumeChange", remoteVolumeChange);
            on.call(this.webrtc, "volumeChange", volumeChange);
            return this.webrtc;
        }

        public doRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c : Conference, root : HTMLElement) {
        }

        /**
         * 
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        public doRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.rtc.Conference) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.doRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c, root);
            } else throw new Error('invalid overload');
        }

        public postRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c : Conference, root : HTMLElement) {
            if(this.webrtc != null) {
                return;
            }
            let x_data : Object = <Object>new Object();
            x_data["ident"] = "kureem@gmail.com";
            x_data["secret"] = "b2b95c52-fad8-11e7-a694-7a3d885581cf";
            x_data["domain"] = "eucleed.com";
            x_data["application"] = "default";
            x_data["secure"] = 1;
            let config : Object = <Object>new Object();
            config["localVideoEl"] = this.localVideo.getVideo().getNative();
            config["remoteVideosEl"] = "";
            config["autoRequestMedia"] = true;
            config["debug"] = false;
            config["detectSpeakingEvents"] = true;
            config["autoAdjustMic"] = false;
            config["nick"] = location.href.split("#")[1];
            this.webrtc = <Object>new Object();
            eval("this.webrtc = new SimpleWebRTC(config);");
            this.configure();
        }

        /**
         * 
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        public postRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>framework.rtc.Conference) || c === null) && ((root != null && root instanceof <any>HTMLElement) || root === null)) {
                return <any>this.postRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c, root);
            } else if(((c != null && c instanceof <any>HTMLElement) || c === null) && root === undefined) {
                return <any>this.postRender$jsweet_dom_HTMLElement(c);
            } else throw new Error('invalid overload');
        }
    }
    Conference["__class"] = "framework.rtc.Conference";
    Conference["__interfaces"] = ["framework.interactions.Droppable","framework.renderer.ExtendedRenderer","framework.renderer.Renderer","framework.Renderable"];


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

        /*private*/ iconRight : string = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";

        /*private*/ iconDown : string = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";

        /*private*/ title : framework.JSContainer = new framework.JSContainer("span").addClass("slds-truncate");

        /*private*/ __open : boolean = false;

        /*private*/ buttons : Array<framework.lightning.IconButton> = <any>(new Array<any>());

        /*private*/ buttonsCtn : framework.JSContainer = new framework.JSContainer("div").addClass("buttons-ctn slds-col_bump-left");

        /*private*/ leftIcon : framework.lightning.IconButton = new framework.lightning.IconButton("leftIcon");

        public constructor(name : string, title : string) {
            super(name, "div");
            this.addClass("slds-tree__item");
            this.addChild$framework_JSContainer(this.button);
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
            this.buttons.push(minimize);
        }

        public getButton() : framework.JSContainer {
            return this.button;
        }

        public open() {
            this.__open = true;
            this.button.setHtml(this.iconDown);
            if(this.getParent().getChildren().length > 1) {
                this.getParent().getChildren()[1].setStyle("display", "block");
            }
        }

        public close() {
            this.__open = false;
            this.button.setHtml(this.iconRight);
            if(this.getParent().getChildren().length > 1) {
                this.getParent().getChildren()[1].setStyle("display", "none");
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
namespace framework.builder.data {
    export class DataSourcesEditor extends framework.builder.editors.AbstractEditor<framework.builder.data.DataSource<Object>> {
        url : framework.JSInput = new framework.JSInput("url").setType(framework.InputTypes.url);

        body : framework.JSTextArea = new framework.JSTextArea("body");

        public constructor(name : string, rootEditor : framework.builder.editors.VisualEditor) {
            super(name, "div", rootEditor);
            let grid : framework.lightning.Grid = new framework.lightning.Grid("df", "div");
            grid.setWrap(true);
            let colFrm : framework.lightning.Col = new framework.lightning.Col("");
            colFrm.setSections("12");
            colFrm.setSpan("8");
            grid.addChild$framework_JSContainer(colFrm);
            this.addChild$framework_JSContainer(grid);
            let panel : framework.lightning.Panel = new framework.lightning.Panel("frm");
            colFrm.addChild$framework_JSContainer(panel);
            let section : framework.lightning.PanelSection = new framework.lightning.PanelSection("pane", "div");
            panel.addSection(section);
            let form : framework.lightning.FormLayout = new framework.lightning.FormLayout("form", "div");
            this.url.addClass("slds-input");
            this.body.addClass("slds-input");
            form.addFormElement(new framework.lightning.FormElement("url", "div").setInput(this.url).setLabel("Url"));
            form.addFormElement(new framework.lightning.FormElement("body", "div").setInput(this.body).setLabel("Body"));
            section.addChild$framework_JSContainer(form);
        }

        /**
         * 
         * @return {string}
         */
        public getMarshall() : string {
            let o : Object = <Object>new Object();
            o["url"] = this.url.getValue();
            o["body"] = this.body.getValue();
            return JSON.stringify(o);
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {*}
         */
        public createNew(f : framework.builder.data.File) : framework.builder.data.DataSource<Object> {
            return new framework.builder.data.RestDataSource();
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {*}
         */
        public unmarshall(f : framework.builder.data.File) : framework.builder.data.DataSource<Object> {
            let rest : framework.builder.data.RestDataSource = new framework.builder.data.RestDataSource();
            let data : string = f.getData();
            if(data != null && data.length > 0) {
                rest.setConfig(<Object>JSON.parse(data));
            }
            return rest;
        }

        public consume$framework_builder_data_DataSource(data : framework.builder.data.DataSource<Object>) {
            let ss : framework.builder.data.RestDataSource = <framework.builder.data.RestDataSource><any>data;
            let config : Object = ss.getConfig();
            if(config != null) {
                let surl : string = <string>config["url"];
                this.url.setValue$java_lang_String(surl);
                let sbody : string = <string>config["body"];
                this.body.setValue$java_lang_String(sbody);
            }
        }

        /**
         * 
         * @param {*} data
         */
        public consume(data? : any) : any {
            if(((data != null && (data["__interfaces"] != null && data["__interfaces"].indexOf("framework.builder.data.DataSource") >= 0 || data.constructor != null && data.constructor["__interfaces"] != null && data.constructor["__interfaces"].indexOf("framework.builder.data.DataSource") >= 0)) || data === null)) {
                return <any>this.consume$framework_builder_data_DataSource(data);
            } else if(((data != null) || data === null)) {
                return <any>this.consume$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }
    }
    DataSourcesEditor["__class"] = "framework.builder.data.DataSourcesEditor";
    DataSourcesEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.editors {
    export class ContextEditor extends framework.builder.editors.AbstractEditor<Object> {
        form : framework.builder.data.DynaForm = new framework.builder.data.DynaForm("form");

        public constructor(name : string, rootEditor : framework.builder.editors.VisualEditor) {
            super(name, "div", rootEditor);
        }

        /**
         * 
         * @return {string}
         */
        public getMarshall() : string {
            return JSON.stringify(this.form.getValue());
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {Object}
         */
        public createNew(f : framework.builder.data.File) : Object {
            let o : Object = <Object>new Object();
            this.form.setValue$jsweet_lang_Object(o);
            return o;
        }

        /**
         * 
         * @param {framework.builder.data.File} f
         * @return {Object}
         */
        public unmarshall(f : framework.builder.data.File) : Object {
            let data : string = f.getData();
            return <Object>JSON.parse(data);
        }

        public consume$jsweet_lang_Object(data : Object) {
            let fldName : Object = <Object>new Object();
            fldName["name"] = "name";
            fldName["label"] = "Name";
            fldName["type"] = "text";
            let fldLabel : Object = <Object>new Object();
            fldLabel["name"] = "label";
            fldLabel["type"] = "text";
            fldLabel["label"] = "Label";
            let fldType : Object = <Object>new Object();
            fldType["name"] = "type";
            fldType["type"] = "multi";
            fldType["label"] = "Type";
            let options : Object[] = [framework.ObjectBuilder.New().set("name", "Text").set("label", "Text").setArray("fields", framework.ObjectBuilder.New().set("name", "size").set("label", "Size").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "mask").set("label", "Mask").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "Default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Number").set("label", "Number").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Boolean").set("label", "Boolean").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "boolean").done()).done(), framework.ObjectBuilder.New().set("name", "Date").set("label", "Date").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Array").set("label", "Array").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Object").set("label", "Object").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Formula").set("label", "Formula").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "formula").set("label", "Formula").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done()];
            fldType["options"] = options;
            let fields : Array<Object> = <any>(new Array<Object>(fldName, fldLabel, fldType));
            let modal : framework.lightning.Modal = new framework.lightning.Modal("modal", "Edit Variable");
            let save : framework.lightning.Button = new framework.lightning.Button("save");
            save.setLabel("Save");
            save.setState(framework.lightning.Button.STATE_BRAND);
            modal.getFooter().addChild$framework_JSContainer(save);
            save.addEventListener(new ContextEditor.ContextEditor$0(this, modal), "click");
            let cancel : framework.lightning.Button = new framework.lightning.Button("cancel");
            cancel.setLabel("Cancel");
            modal.getFooter().addChild$framework_JSContainer(cancel);
            cancel.addEventListener(new ContextEditor.ContextEditor$1(this, modal), "click");
            this.form.setStyle("padding", "12px");
            this.form.setFields(fields);
            modal.setBody(this.form);
            this.addChild$framework_JSContainer(modal);
            let bd : framework.lightning.Backdrop = new framework.lightning.Backdrop("bd");
            this.addChild$framework_JSContainer(bd);
            modal.setBackdrop(bd);
            modal.open();
            bd.open();
            this.form.setValue$jsweet_lang_Object(data);
        }

        /**
         * 
         * @param {Object} data
         */
        public consume(data? : any) : any {
            if(((data != null && data instanceof <any>Object) || data === null)) {
                return <any>this.consume$jsweet_lang_Object(data);
            } else if(((data != null) || data === null)) {
                return <any>this.consume$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }
    }
    ContextEditor["__class"] = "framework.builder.editors.ContextEditor";
    ContextEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.Renderable"];



    export namespace ContextEditor {

        export class ContextEditor$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.save();
                close();
                this.modal.close();
                this.modal.getBackdrop().close();
            }

            constructor(__parent: any, private modal: any) {
                this.__parent = __parent;
            }
        }
        ContextEditor$0["__interfaces"] = ["framework.EventListener"];



        export class ContextEditor$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                close();
                this.modal.close();
                this.modal.getBackdrop().close();
            }

            constructor(__parent: any, private modal: any) {
                this.__parent = __parent;
            }
        }
        ContextEditor$1["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.editors {
    export class EventEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> {
        component : framework.JSContainer = new framework.JSContainer("label");

        /*private*/ functionName : framework.JSContainer = new framework.JSContainer("div");

        events : framework.JSSelect = new framework.JSSelect("events");

        /*private*/ root : framework.design.Designable;

        /*private*/ editor : framework.builder.editors.JavascriptEditor = new framework.builder.editors.JavascriptEditor("sd", null);

        /*private*/ justSaved : string = "";

        public constructor(name : string, root : framework.design.Designable, veditor : framework.builder.editors.VisualEditor) {
            super(name, "div", veditor);
            this.root = null;
            this.addClass("event-editor");
            this.editor.setRootEditor(veditor);
            let grid : framework.lightning.Grid = new framework.lightning.Grid("", "div");
            this.addChild$framework_JSContainer(grid);
            let colLeft : framework.JSContainer = new framework.JSContainer("div");
            let colRight : framework.JSContainer = new framework.JSContainer("div");
            grid.addChild$framework_JSContainer(colLeft.addClass("slds-col").addClass("col-left"));
            grid.addChild$framework_JSContainer(colRight.addClass("slds-col").addClass("col-right"));
            this.root = root;
            for(let index13475=0; index13475 < framework.builder.editors.EventTypes.events_$LI$().length; index13475++) {
                let s = framework.builder.editors.EventTypes.events_$LI$()[index13475];
                this.events.addOption(new framework.JSOption(/* replace */s.split("on").join(""), /* replace */s.split("on").join("")))
            }
            colLeft.addChild$framework_JSContainer(this.component.setStyle("width", "100%"));
            colLeft.addChild$framework_JSContainer(this.functionName);
            this.functionName.setHtml("function(JSContainer source, Event event){");
            colRight.addChild$framework_JSContainer(this.events.setStyle("width", "100%"));
            this.events.addEventListener(new EventEditor.EventEditor$0(this), "focus");
            this.events.addEventListener(new EventEditor.EventEditor$1(this, root), "change");
            this.addChild$framework_JSContainer(this.editor);
        }

        /*private*/ decoName() {
        }

        public fillValue(des : framework.design.Designable, updEvtSelect : boolean) {
            let s : boolean = false;
            this.component.setHtml(des.getName());
            if(!updEvtSelect) {
                let listeners : Array<framework.EventListener> = <Array<framework.EventListener>>des.getListeners()[this.events.getValue()];
                if(listeners != null) {
                    for(let index13476=0; index13476 < listeners.length; index13476++) {
                        let e = listeners[index13476];
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
            {
                let array13478 = this.events.getChildren();
                for(let index13477=0; index13477 < array13478.length; index13477++) {
                    let opt = array13478[index13477];
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
            let listeners : Array<framework.EventListener> = <Array<framework.EventListener>>des.getListeners()[type];
            if(listeners != null) {
                for(let index13479=0; index13479 < listeners.length; index13479++) {
                    let l = listeners[index13479];
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
            this.events.clearChildren();
            this.events.setRendered(false);
            {
                let array13481 = ((<framework.JSContainer><any>designable)).advancedEventTypes();
                for(let index13480=0; index13480 < array13481.length; index13480++) {
                    let s = array13481[index13480];
                    this.events.addOption(new framework.JSOption(/* replace */s.split("on").join(""), /* replace */s.split("on").join("")))
                }
            }
            for(let index13482=0; index13482 < framework.builder.editors.EventTypes.events_$LI$().length; index13482++) {
                let s = framework.builder.editors.EventTypes.events_$LI$()[index13482];
                this.events.addOption(new framework.JSOption(/* replace */s.split("on").join(""), /* replace */s.split("on").join("")))
            }
            this.fillValue(designable, true);
        }

        /*private*/ findDesignableById(parent : framework.design.Designable, id : string) : framework.design.Designable {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(parent.getId(),id))) {
                return parent;
            }
            {
                let array13484 = parent.getDesignables();
                for(let index13483=0; index13483 < array13484.length; index13483++) {
                    let des = array13484[index13483];
                    {
                        let res : framework.design.Designable = this.findDesignableById(des, id);
                        if(res != null) {
                            return res;
                        }
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
                let listeners : Array<framework.EventListener> = <Array<framework.EventListener>>des.getListeners()[type];
                if(listeners != null) {
                    for(let index13485=0; index13485 < listeners.length; index13485++) {
                        let l = listeners[index13485];
                        {
                            if(l != null && l instanceof <any>framework.builder.BuilderEventListener) {
                                let evt : framework.builder.BuilderEventListener = <framework.builder.BuilderEventListener><any>l;
                                evt.setSource(src);
                                return;
                            }
                        }
                    }
                    let l : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(src, des.getName(), type);
                    des.addEventListener(l, type);
                } else {
                    let l : framework.builder.BuilderEventListener = new framework.builder.BuilderEventListener(src, des.getName(), type);
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
    export class VisualEditor extends framework.builder.editors.AbstractEditor<framework.builder.marshalling.Component> implements framework.builder.editors.DesignableEditor {
        /*private*/ selectedItem : framework.design.Designable;

        /*private*/ root : framework.lightning.LightningApplication;

        /*private*/ workspace : framework.JSContainer = new framework.JSContainer("workspace", "div");

        /*private*/ selector : framework.builder.Selector;

        /*private*/ leftComposers : framework.JSContainer = new framework.JSContainer("leftComposers", "div");

        /*private*/ rightComposers : framework.JSContainer = new framework.JSContainer("rightComposers", "div");

        /*private*/ propertiesDockedComposer : framework.builder.properties.PropertiesDockedComposer = new framework.builder.properties.PropertiesDockedComposer("properties");

        /*private*/ libraryDockedComposer : framework.builder.libraries.LibrariesDockedComposer = new framework.builder.libraries.LibrariesDockedComposer("library");

        /*private*/ structureDockedComposer : framework.builder.editors.StructureDockedComposer;

        /*private*/ templates : framework.JSContainer = new framework.JSContainer("div").setVisible(false);

        /*private*/ leftOpen : boolean = true;

        /*private*/ rightOpen : boolean = true;

        /*private*/ iframe : framework.JSContainer = new framework.JSContainer("iframe");

        /*private*/ toggleOutline : framework.lightning.IconButton = new framework.lightning.IconButton("toggleOutline");

        /*private*/ toggleRuler : framework.lightning.IconButton = new framework.lightning.IconButton("toggleRuler");

        /*private*/ toggleDefinitions : framework.lightning.IconButton = new framework.lightning.IconButton("toggleDefinitions");

        /*private*/ jsonDef : framework.lightning.Modal = new framework.lightning.Modal("jsonDef", "Definition");

        json : framework.JSTextArea = new framework.JSTextArea("json");

        helper : framework.JSTextArea = new framework.JSTextArea("helper");

        /*private*/ hRule : framework.builder.Ruler = new framework.builder.Ruler(false);

        /*private*/ composer : framework.lightning.DockedComposer = new framework.lightning.DockedComposer("composer");

        /*private*/ bd : framework.lightning.Backdrop = new framework.lightning.Backdrop("backdrop");

        public constructor(name : string) {
            super(name, "div", null);
            this.selectedItem = null;
            this.root = null;
            this.selector = null;
            this.structureDockedComposer = null;
            this.addClass("visual-editor").addClass("slds-grid").addClass("slds-wrap");
            let frmjson : framework.lightning.FormLayout = new framework.lightning.FormLayout("frmjson", "div");
            frmjson.setStyle("margin", "8px");
            frmjson.addClass("defn-popup");
            let js : framework.lightning.FormElement = new framework.lightning.FormElement("js", "div");
            js.setLabel("Definition");
            js.setInput(this.json);
            let frmhel : framework.lightning.FormElement = new framework.lightning.FormElement("frmhel", "div");
            frmhel.setInput(this.helper);
            frmhel.setLabel("Helper");
            frmjson.addFormElement(js);
            frmjson.addFormElement(frmhel);
            this.jsonDef.getContent().addChild$framework_JSContainer(frmjson);
            this.addChild$framework_JSContainer(this.jsonDef);
            this.jsonDef.setBackdrop(this.bd);
            this.addChild$framework_JSContainer(this.bd);
            this.helper.addClass("slds-textarea");
            this.json.addClass("slds-textarea");
            this.setRootEditor(this);
            this.addChild$framework_JSContainer(this.leftComposers.addClass("slds-size_2-of-12"));
            this.addChild$framework_JSContainer(this.composer.addClass("slds-size_7-of-12"));
            this.composer.addClass("workspace");
            this.composer.getBody().addChild$framework_JSContainer(this.hRule);
            this.composer.getBody().addChild$framework_JSContainer(this.workspace);
            this.iframe.setAttribute("src", "preview.html#lightning.prj");
            this.addChild$framework_JSContainer(this.rightComposers.addClass("slds-size_3-of-12"));
            this.leftComposers.addClass("composers");
            this.rightComposers.addClass("composers");
            this.rightComposers.addChild$framework_JSContainer(this.propertiesDockedComposer);
            this.rightComposers.addChild$framework_JSContainer(this.libraryDockedComposer);
            this.selector = new framework.builder.Selector();
            this.selector.setVisualEditor(this);
            this.addChild$framework_JSContainer(this.selector);
            this.addChild$framework_JSContainer(this.templates);
            this.composer.getTools().clearChildren();
            this.composer.getTools().addChild$framework_JSContainer(new framework.builder.editors.Zoom("zoom", this));
            this.composer.getTools().addChild$framework_JSContainer(this.toggleOutline);
            this.composer.getTools().addChild$framework_JSContainer(this.toggleRuler);
            this.composer.getTools().addChild$framework_JSContainer(this.toggleDefinitions);
            this.toggleDefinitions.getIcon().setIconName("ad_set");
            this.toggleDefinitions.setStateful(true);
            this.toggleDefinitions.setSelected(true);
            this.toggleOutline.getIcon().setIconName("layout");
            this.toggleOutline.setStateful(true);
            this.toggleOutline.setSelected(true);
            this.toggleRuler.getIcon().setIconName("summarydetail");
            this.toggleRuler.setStateful(true);
            this.toggleRuler.setSelected(false);
            this.toggleDefinitions.addEventListener(new VisualEditor.VisualEditor$0(this), "click");
            this.toggleRuler.addEventListener(new VisualEditor.VisualEditor$1(this), "click");
            this.addClass("show-outline");
            this.toggleOutline.addEventListener(new VisualEditor.VisualEditor$2(this), "click");
            document.onkeyup = (e) => {
                if(e.which === 27) {
                    this.escape();
                    this.render();
                }
                return true;
            };
        }

        /*private*/ showDef : boolean = false;

        public toggleDefns() {
            $.get("/js/controller/" + this.getProject().getName(), (a, b, c) => {
                this.json.setValue$java_lang_String(this.getProject().getData());
                this.helper.setValue$java_lang_String(<string>a);
                this.jsonDef.open();
                this.render();
                return true;
            });
            if(this.showDef) {
                this.jsonDef.close();
            } else {
            }
        }

        public escape() {
            this.setWillAddComponent(null, false);
            this.structureDockedComposer.getStructure().clearClipboard();
        }

        public zoom(percent : number) {
            this.workspace.getChildren()[0].setStyle("zoom", (percent / 100) + "");
            this.hRule.setStyle("zoom", (percent / 100) + "");
        }

        public closeLeft() {
            this.leftComposers.setAttribute("class", "slds-size_0-of-12 composers");
            this.leftOpen = false;
            this.resizeWorkspace(this.composer);
        }

        public openLeft() {
            this.leftComposers.setAttribute("class", "slds-size_2-of-12 composers");
            this.leftOpen = true;
            this.resizeWorkspace(this.composer);
        }

        public closeRight() {
            this.rightComposers.setAttribute("class", "slds-size_0-of-12 composers");
            this.rightOpen = false;
            this.resizeWorkspace(this.composer);
        }

        public openRight() {
            this.rightComposers.setAttribute("class", "slds-size_3-of-12 composers");
            this.rightOpen = true;
            this.resizeWorkspace(this.composer);
        }

        /*private*/ resizeWorkspace(work : framework.JSContainer) {
            if(this.leftOpen && this.rightOpen) {
                work.addClass("slds-size_7-of-12");
                work.setStyle("width", "58.3333333333%");
            }
            if(!this.leftOpen && this.rightOpen) {
                work.removeClass("slds-size_7-of-12");
                work.setStyle("width", "calc(75% - (42px))");
            }
            if(this.leftOpen && !this.rightOpen) {
                work.removeClass("slds-size_7-of-12");
                work.setStyle("width", "calc(83.3333333333% - (42px))");
            }
            if(!this.leftOpen && !this.rightOpen) {
                work.removeClass("slds-size_7-of-12");
                work.setStyle("width", "calc(100% - (84px))");
            }
        }

        public save(type? : any) : any {
            if(type === undefined) {
                return <any>this.save$();
            } else throw new Error('invalid overload');
        }

        public save$() {
            let data : string = this.getMarshall();
            this.file.setData(data);
            this.projectService.saveFile(this, this.file, new VisualEditor.VisualEditor$3(this));
            if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.rootEditor.getId(),this.getId()))) {
                this.getRootEditor().getRootItem().getComponent().custom[this.file.getName()] = this.file.getData();
                this.rootEditor.libraryDockedComposer.refreshWithProject(this.rootEditor.root);
            }
        }

        public getRootItem() : framework.lightning.LightningApplication {
            return this.root;
        }

        public getSelectedItem() : framework.design.Designable {
            return this.selectedItem;
        }

        public selectItem(designable : framework.design.Designable) {
            this.propertiesDockedComposer.selectComponent(designable);
        }

        public visit$framework_builder_editors_Visitor(v : framework.builder.editors.Visitor) {
            this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, this.root);
        }

        public visit$framework_builder_editors_Visitor$framework_design_Designable(v : framework.builder.editors.Visitor, startAt : framework.design.Designable) {
            v.doVisit(startAt);
            {
                let array13487 = startAt.getDesignables();
                for(let index13486=0; index13486 < array13487.length; index13486++) {
                    let child = array13487[index13486];
                    {
                        this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, child);
                    }
                }
            }
        }

        public visit(v? : any, startAt? : any) : any {
            if(((v != null && (v["__interfaces"] != null && v["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0 || v.constructor != null && v.constructor["__interfaces"] != null && v.constructor["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0)) || v === null) && ((startAt != null && (startAt["__interfaces"] != null && startAt["__interfaces"].indexOf("framework.design.Designable") >= 0 || startAt.constructor != null && startAt.constructor["__interfaces"] != null && startAt.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || startAt === null)) {
                return <any>this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, startAt);
            } else if(((v != null && (v["__interfaces"] != null && v["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0 || v.constructor != null && v.constructor["__interfaces"] != null && v.constructor["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0)) || v === null) && startAt === undefined) {
                return <any>this.visit$framework_builder_editors_Visitor(v);
            } else throw new Error('invalid overload');
        }

        /*private*/ willAdd : framework.builder.Component = null;

        public persist : boolean = false;

        public setWillAddComponent(component : framework.builder.Component, persist : boolean) {
            this.persist = persist;
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

        public saveAsComponent(designable : framework.design.Designable) {
            designable.addClass("LightningActiveComponent");
            let comp : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.extract(designable);
            let component : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            component.impl = "lgt:app";
            component.parameters["name"] = designable.getName() + "_comp";
            let par : framework.design.Designable = framework.builder.marshalling.MarshallUtil.toDesignable(component);
            let chi : framework.design.Designable = framework.builder.marshalling.MarshallUtil.toDesignable(comp);
            par.addDesignable(chi);
            let marshall : string = JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(par));
            let project : framework.builder.data.File = this.getProject();
            let name : string = designable.getName();
            this.root.getComponent().custom[name] = marshall;
            this.libraryDockedComposer.refreshWithProject(this.root);
            if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                name = name + ".cmp";
            }
            project.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(this, name, "components", new VisualEditor.VisualEditor$4(this, marshall, designable));
        }

        public addNewComponent$framework_builder_Component$framework_design_Designable(component : framework.builder.Component, designable : framework.design.Designable) {
            let factory : framework.builder.marshalling.ComponentFactory = component.getFactory();
            let c : framework.builder.marshalling.Component = new framework.builder.marshalling.Component();
            let container : framework.design.Designable = factory.build(c, true);
            if(container != null && container instanceof <any>framework.designables.JSDesignableBuilderComponent) {
                container.applyParam("src", component.getInital());
            }
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
            if(!this.persist) this.setWillAddComponent(null, false);
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
            component.impl = "lgt:app";
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
            this.templates.clearChildren();
            this.templates.setRendered(false);
            {
                let array13489 = this.file.getTemplates();
                for(let index13488=0; index13488 < array13489.length; index13488++) {
                    let temp = array13489[index13488];
                    {
                        let t : framework.builder.editors.JSTemplate = new framework.builder.editors.JSTemplate(temp);
                        this.templates.addChild$framework_JSContainer(t);
                    }
                }
            }
            let des : framework.design.Designable = framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, true);
            des.addEventListener(new framework.builder.SelectComponentEvent(this.selector), "click");
            des['setData$java_lang_Object'](component.data);
            if(component.children != null) {
                for(let index13490=0; index13490 < component.children.length; index13490++) {
                    let c = component.children[index13490];
                    {
                        let child : framework.design.Designable = this.cona(c);
                        des.addDesignable(child);
                        let exp : string = child.getAttribute("exposeAs");
                        if(exp != null && exp.length > 0) {
                            new framework.designables.DesignableDelegate(child).exposeVariable(exp);
                        }
                    }
                }
            }
            return des;
        }

        public consume$framework_builder_marshalling_Component(component : framework.builder.marshalling.Component) {
            this.root = <framework.lightning.LightningApplication><any>this.cona(component);
            let components : Array<framework.builder.data.File> = this.file.getComponents();
            this.workspace.addChild$framework_JSContainer(<framework.JSContainer>this.root);
            this.libraryDockedComposer.refreshWithProject(this.root);
            this.structureDockedComposer = new framework.builder.editors.StructureDockedComposer("strucutru", this.root, this.file, this.selector);
            this.leftComposers.addChild$framework_JSContainer(this.structureDockedComposer);
            this.libraryDockedComposer.refreshWithProject(this.root);
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
    VisualEditor["__interfaces"] = ["framework.builder.editors.Editor","framework.interactions.Droppable","framework.builder.editors.DesignableEditor","framework.Renderable"];



    export namespace VisualEditor {

        export class VisualEditor$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.toggleDefns();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VisualEditor$0["__interfaces"] = ["framework.EventListener"];



        export class VisualEditor$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let selected : boolean = this.__parent.toggleRuler.isSelected();
                if(selected) {
                    this.__parent.toggleRuler.setSelected(false);
                    this.__parent.removeClass("show-ruler");
                } else {
                    this.__parent.toggleRuler.setSelected(true);
                    this.__parent.addClass("show-ruler");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VisualEditor$1["__interfaces"] = ["framework.EventListener"];



        export class VisualEditor$2 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let selected : boolean = this.__parent.toggleOutline.isSelected();
                if(selected) {
                    this.__parent.toggleOutline.setSelected(false);
                    this.__parent.removeClass("show-outline");
                } else {
                    this.__parent.toggleOutline.setSelected(true);
                    this.__parent.addClass("show-outline");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VisualEditor$2["__interfaces"] = ["framework.EventListener"];



        export class VisualEditor$3 implements framework.builder.data.RemoteDataListener<any> {
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
        VisualEditor$3["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export class VisualEditor$4 implements framework.builder.data.RemoteDataListener<any> {
            public __parent: any;
            /**
             * 
             * @param {*} data
             */
            public dataLoaded(data : any) {
                let fff : framework.builder.data.File = new framework.builder.data.File(<Object>data);
                fff.setData(this.marshall);
                framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").saveFile(<framework.JSContainer><any>this.designable, fff, new VisualEditor$4.VisualEditor$4$0(this));
                this.__parent.structureDockedComposer.getStructure().reload$java_lang_String("components");
                this.__parent.structureDockedComposer.getStructure().render();
            }

            constructor(__parent: any, private marshall: any, private designable: any) {
                this.__parent = __parent;
            }
        }
        VisualEditor$4["__interfaces"] = ["framework.builder.data.RemoteDataListener"];



        export namespace VisualEditor$4 {

            export class VisualEditor$4$0 implements framework.builder.data.RemoteDataListener<any> {
                public __parent: any;
                /**
                 * 
                 * @param {*} data
                 */
                public dataLoaded(data : any) {
                    console.log(data);
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            VisualEditor$4$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];


        }

    }

}
namespace framework.designables {
    export class JSDesignableBlockComponent extends framework.designables.JSDesignable {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = super.getParameters();
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Html", "Basic");
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            tagParam.options.push(new framework.design.Option("div", "div"));
            tagParam.options.push(new framework.design.Option("abbr", "abbr"));
            tagParam.options.push(new framework.design.Option("address", "address"));
            tagParam.options.push(new framework.design.Option("article", "article"));
            tagParam.options.push(new framework.design.Option("aside", "aside"));
            tagParam.options.push(new framework.design.Option("cite", "cite"));
            tagParam.options.push(new framework.design.Option("blockquote", "blockquote"));
            tagParam.options.push(new framework.design.Option("dl", "dl"));
            tagParam.options.push(new framework.design.Option("fieldset", "fieldset"));
            tagParam.options.push(new framework.design.Option("figure", "figure"));
            tagParam.options.push(new framework.design.Option("footer", "footer"));
            tagParam.options.push(new framework.design.Option("header", "header"));
            tagParam.options.push(new framework.design.Option("hgroup", "hgroup"));
            tagParam.options.push(new framework.design.Option("nav", "nav"));
            tagParam.options.push(new framework.design.Option("pre", "pre"));
            tagParam.options.push(new framework.design.Option("section", "section"));
            params.push(tagParam);
            params.push(textParam);
            return params;
        }
    }
    JSDesignableBlockComponent["__class"] = "framework.designables.JSDesignableBlockComponent";
    JSDesignableBlockComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = super.getParameters();
            let templates : framework.design.AttributeParameter = new framework.design.AttributeParameter("template", "Template", "Basic");
            let project : framework.builder.data.File = null;
            if(framework.builder.Builder.getInstance() != null) {
                project = framework.builder.Builder.getInstance().getProject();
            } else {
                project = framework.builder.Previewer.project;
            }
            templates.options.push(new framework.design.Option("Default", "#default"));
            {
                let array13492 = project.getTemplates();
                for(let index13491=0; index13491 < array13492.length; index13491++) {
                    let f = array13492[index13491];
                    {
                        templates.options.push(new framework.design.Option(f.getName(), "#" + /* replace */f.getName().split(".html").join("")));
                    }
                }
            }
            parameters.push(templates);
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
namespace framework.lightning.designables {
    export class JSDesignableIterable extends framework.designables.JSDesignable {
        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @return {Array}
         */
        public advancedEventTypes() : string[] {
            return ["DataReady"];
        }

        public setData(data : any) {
            super.setData$java_lang_Object(data);
            let evt : CustomEvent = new CustomEvent("DataReady");
            evt["data"] = data;
            this.fireListener("DataReady", evt);
        }

        public Clone() : JSDesignableIterable {
            let cmp : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.extract(this);
            return <JSDesignableIterable><any>framework.builder.marshalling.MarshallUtil.toDesignable(cmp);
        }
    }
    JSDesignableIterable["__class"] = "framework.lightning.designables.JSDesignableIterable";
    JSDesignableIterable["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class PanelSection extends framework.designables.JSDesignable {
        public constructor(name : string, tag : string) {
            super(name, tag);
            this.addClass("slds-panel__section");
        }
    }
    PanelSection["__class"] = "framework.lightning.PanelSection";
    PanelSection["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "type")) {
                this.setType(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>());
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            parameters.push(new framework.design.ValueParameter("value", "Value", "Basic"));
            let type : framework.design.AttributeParameter = new framework.design.AttributeParameter("type", "Type", "Basic");
            type.options.push(new framework.design.Option("text", "text"));
            type.options.push(new framework.design.Option("date", "date"));
            type.options.push(new framework.design.Option("datetime", "datetime"));
            type.options.push(new framework.design.Option("tel", "tel"));
            type.options.push(new framework.design.Option("color", "color"));
            type.options.push(new framework.design.Option("checkbox", "checkbox"));
            type.options.push(new framework.design.Option("password", "password"));
            type.options.push(new framework.design.Option("hidden", "hidden"));
            type.options.push(new framework.design.Option("radio", "radio"));
            type.options.push(new framework.design.Option("email", "email"));
            type.options.push(new framework.design.Option("file", "file"));
            type.options.push(new framework.design.Option("image", "image"));
            type.options.push(new framework.design.Option("month", "month"));
            type.options.push(new framework.design.Option("number", "number"));
            type.options.push(new framework.design.Option("range", "range"));
            type.options.push(new framework.design.Option("reset", "reset"));
            type.options.push(new framework.design.Option("button", "button"));
            type.options.push(new framework.design.Option("submit", "submit"));
            type.options.push(new framework.design.Option("time", "time"));
            type.options.push(new framework.design.Option("url", "url"));
            type.options.push(new framework.design.Option("week", "week"));
            parameters.push(type);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").saveFile(this, this.file, new CodeMirrorEditor.CodeMirrorEditor$0(this));
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            params.push(new framework.design.ValueParameter("value", "Value", "Basic"));
            return params;
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let result : Array<framework.design.Designable> = <any>(new Array<any>());
            return result;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
            this.setAttribute(key, value);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "label")) {
                this.setLabel(value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "statefull")) {
                this.setStateful(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "ldisabled")) {
                this.setDisabled(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "inverse")) {
                this.setInverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "state")) {
                this.setState(value);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>());
        }

        public getParameters() : Array<framework.design.Parameter> {
            let result : Array<framework.design.Parameter> = this.delegate.getParameters();
            result.push(this.createParameter("label", "Label", "String"));
            result.push(this.createParameter("statefull", "Statefull", "Boolean"));
            result.push(this.createParameter("ldisabled", "Disabled", "Boolean"));
            result.push(this.createParameter("inverse", "Inverse", "Boolean"));
            let paramstates : framework.design.Parameter = this.createParameter("state", "State", "select");
            for(let i : number = 0; i < JSDesignableButton.stateLabels_$LI$().length; i++) {
                let opt : framework.design.Option = new framework.design.Option();
                opt.text = JSDesignableButton.stateLabels_$LI$()[i];
                opt.value = framework.lightning.Button.states_$LI$()[i];
                paramstates.options.push(opt);
            };
            result.push(paramstates);
            return result;
        }

        /*private*/ createParameter(name : string, label : string, type : string) : framework.design.Parameter {
            let p : framework.design.AttributeParameter = new framework.design.AttributeParameter(name, label, "Basic");
            p.name = name;
            p.type = type;
            p.label = label;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "boolean")) {
                p.options.push(new framework.design.Option("", ""));
            }
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

        /*private*/ dataFields : Array<framework.builder.data.DataField>;

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
            this.fields.addEventListener(new DataItem.DataItem$0(this, l, item), "selectRows");
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
            this.dataStructure.getFields(this, new DataItem.DataItem$1(this));
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

        export class DataItem$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let e : framework.lightning.table.TableEvent = <framework.lightning.table.TableEvent>evt;
                let field : framework.builder.data.DataField = this.__parent.dataFields[e.firstIndex];
                this.l.onItemSelected(field, this.item);
            }

            constructor(__parent: any, private l: any, private item: any) {
                this.__parent = __parent;
            }
        }
        DataItem$0["__interfaces"] = ["framework.EventListener"];



        export class DataItem$1 implements framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>> {
            public __parent: any;
            public dataLoaded$jsweet_lang_Array(data_ : Array<framework.builder.data.DataField>) {
                this.__parent.dataFields = data_;
                this.__parent.fields.setModel(new DataItem$1.DataItem$1$0(this));
                this.__parent.fields.refreshData();
                this.__parent.fields.render();
            }

            /**
             * 
             * @param {framework.builder.data.DataField[]} data_
             */
            public dataLoaded(data_? : any) : any {
                if(((data_ != null && data_ instanceof <any>Array) || data_ === null)) {
                    return <any>this.dataLoaded$jsweet_lang_Array(data_);
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
                        return this.__parent.__parent.dataFields[rowIndex].getValue(this.__parent.__parent.labelsFields[columnIndex]);
                    } else {
                        return this.__parent.__parent.dataFields[rowIndex].getName();
                    }
                }

                /**
                 * 
                 * @return {number}
                 */
                public getRowCount() : number {
                    return this.__parent.__parent.dataFields.length;
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
namespace framework.lightning.designables {
    export class JSDesignableLightningInput extends framework.lightning.FormElement implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ input : framework.designables.JSDesignableInput = null;

        public constructor(name : string) {
            super(name, "div");
            this.input = <framework.designables.JSDesignableInput><any>framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("html:input").build(new framework.builder.marshalling.Component(), true);
            this.input.addClass("slds-input");
            this.setInput(this.input);
            this.getInput().addClass("slds-input");
            this.setLabel("Label");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "type")) {
                (<framework.JSInput><any>this.getInput()).setType(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"label"))) {
                this.setLabel(value);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(key, "disabled")) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("true", value)) {
                    this.setDisabled(true);
                } else {
                    this.setDisabled(false);
                }
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>(this.input));
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let label : framework.design.AttributeParameter = new framework.design.AttributeParameter("label", "Label", "Basic");
            parameters.push(label);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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

        public setDisabled(b : boolean) {
            if(b) {
                this.getInput().setAttribute("disabled", "true");
            } else {
                this.getInput().setAttribute("disabled", null);
            }
        }
    }
    JSDesignableLightningInput["__class"] = "framework.lightning.designables.JSDesignableLightningInput";
    JSDesignableLightningInput["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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

        /*private*/ btnGroup : framework.lightning.ButtonGroup = new framework.lightning.ButtonGroup("btnGroup");

        /*private*/ welcomeScreen : framework.builder.WelcomeScreen = new framework.builder.WelcomeScreen("welcome", this);

        public constructor(name : string) {
            super(name, "div");
            this.project = null;
            this.addClass("builder");
            this.editorTabs.addClass("editor-tabs");
            this.newFileModal.setBackdrop(this.backdrop);
            this.openProjectModal.setBackdrop(this.backdrop);
            this.welcomeScreen.setBackdrop(this.backdrop);
            let icon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("as", "utility", "save");
            this.saveButton.setIcon(icon);
            this.saveButton.setBorderFilled(true);
            this.saveButton.addEventListener(new Builder.Builder$0(this), "click");
            this.previewBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "preview"));
            this.previewBtn.setBorderFilled(true);
            this.openProjectBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "open"));
            this.openProjectBtn.setBorderFilled(true);
            this.openProjectBtn.addEventListener(new Builder.Builder$1(this), "click");
            let iconNew : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("as", "utility", "new");
            this.newFileButtn.setIcon(iconNew);
            this.newFileButtn.setBorderFilled(true);
            this.newFileButtn.addEventListener(new Builder.Builder$2(this), "click");
            this.previewBtn.setTag("a").setAttribute("target", "_blank");
            this.addChild$framework_JSContainer(this.openProjectModal);
            this.addChild$framework_JSContainer(this.newFileModal);
            this.addChild$framework_JSContainer(this.welcomeScreen);
            this.welcomeScreen.open();
            this.welcomeScreen.setTitle("ZEUS Application Builder");
            this.addChild$framework_JSContainer(this.backdrop);
            this.addChild$framework_JSContainer(this.btnGroup.addClass("builder-buttons"));
            this.btnGroup.addChild$framework_JSContainer(this.saveButton);
            this.btnGroup.addChild$framework_JSContainer(this.openProjectBtn);
            this.btnGroup.addChild$framework_JSContainer(this.newFileButtn);
            this.btnGroup.addChild$framework_JSContainer(this.openProjectBtn);
            this.btnGroup.addChild$framework_JSContainer(this.previewBtn);
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

        public openNewModal() {
            this.newFileModal.open();
            if(this.activeEditor != null) {
                this.newFileModal.init(this.activeEditor.getStructure());
            } else {
                this.newFileModal.init(null);
            }
            this.backdrop.open();
        }

        public openOpenProjectModal() {
            this.openProjectModal.open();
            this.openProjectModal.init();
            this.backdrop.open();
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
            {
                let array13494 = this.editorTabs.getItems();
                for(let index13493=0; index13493 < array13494.length; index13493++) {
                    let item = array13494[index13493];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(item.getName(),"editor_" + editorName))) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        public activateEditor(editorName : string) : framework.builder.editors.Editor<any> {
            {
                let array13496 = this.editorTabs.getItems();
                for(let index13495=0; index13495 < array13496.length; index13495++) {
                    let item = array13496[index13495];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(item.getName(),"editor_" + editorName))) {
                            this.editorTabs.setActive(item);
                            this.activeEditor = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren()[0];
                            return this.activeEditor;
                        }
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
                this.__parent.openNewModal();
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
                let edi : framework.builder.editors.Editor<any> = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren()[0];
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
                this.__parent.activeEditor = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren()[0];
                if(this.__parent.activeEditor != null && this.__parent.activeEditor instanceof <any>framework.builder.editors.EventEditor) {
                    (<framework.builder.editors.EventEditor><any>this.__parent.activeEditor).reactivate();
                }
            }

            /**
             * 
             * @param {framework.lightning.TabItem} item
             */
            public onDeactivate(item : framework.lightning.TabItem) {
                let edi : framework.builder.editors.Editor<any> = <framework.builder.editors.Editor<any>><any>item.getBody().getChildren()[0];
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
            {
                let array13498 = this.getChildren();
                for(let index13497=0; index13497 < array13498.length; index13497++) {
                    let child = array13498[index13497];
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
            this.clearChildren();
            this.setRendered(false);
            return this;
        }

        public getElements() : Array<framework.lightning.FormElement> {
            let l : Array<any> = this.getChildren();
            return l;
        }
    }
    FormLayout["__class"] = "framework.lightning.FormLayout";
    FormLayout["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.lightning {
    export class Grid extends framework.lightning.LTContainer {
        public static PULL_PADDED_NONE : string = "none";

        public static PULL_PADDED_XXX_SMALL : string = "slds-grid_pull-padded-xxx-small";

        public static PULL_PADDED_XX_SMALL : string = "slds-grid_pull-padded-xx-small";

        public static PULL_PADDED_X_SMALL : string = "slds-grid_pull-padded-x-small";

        public static PULL_PADDED_SMALL : string = "slds-grid_pull-padded-small";

        public static PULL_PADDED_MEDIUM : string = "slds-grid_pull-padded-medium";

        public static PULL_PADDED_LARGE : string = "slds-grid_pull-padded-large";

        public static PULL_PADDED_X_LARGE : string = "slds-grid_pull-padded-x-large";

        public static PULL_PADDED_XX_LARGE : string = "slds-grid_pull-padded-xx-large";

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
            this.setVertical(b);
            return this.toggleClass("slds-grid_vertical-reverse", b);
        }

        public setReverse(b : boolean) : Grid {
            return this.toggleClass("slds-grid_reverse", b);
        }

        public setPullPadded(b : boolean) : Grid {
            return this.toggleClass("slds-grid_pull-padded", b);
        }

        public setPullPaddedSize(size : string) : Grid {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Grid.PULL_PADDED_NONE, size)) {
                this.setPullPadded(false);
                this.removeClass(Grid.PULL_PADDED_X_LARGE).removeClass(Grid.PULL_PADDED_XX_LARGE).removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
            } else {
                this.setPullPadded(true);
                this.removeClass(Grid.PULL_PADDED_X_LARGE).removeClass(Grid.PULL_PADDED_XX_LARGE).removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
            }
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
            this.setVertical(b);
            return this.toggleClass("slds-grid_vertical-align-start", b);
        }

        public setVerticalAlignCenter(b : boolean) : Grid {
            this.setVertical(b);
            return this.toggleClass("slds-grid_vertical-align-center", b);
        }

        public setVerticalAlignEnd(b : boolean) : Grid {
            this.setVertical(b);
            return this.toggleClass("slds-grid_vertical-align-end", b);
        }

        public setVerticalStretch(b : boolean) : Grid {
            this.setVertical(b);
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
            this.setSize(framework.lightning.Modal.SIZE_LARGE);
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

        /*private*/ dataList : Array<T>;

        public constructor(name : string) {
            super(name, "div");
            this.dataList = null;
            this.addClass("data-item");
            this.getContent().addChild$framework_JSContainer(this.dataTable);
        }

        public addOnItemSeletedListener(l : framework.builder.properties.ItemSelectedListener<T>) {
            this.dataTable.addEventListener(new ItemSelector.ItemSelector$0(this, l), "selectRows");
        }

        public addColumn(column : framework.lightning.table.TableColumn) {
            this.tableColumModel.addColumn(column);
        }

        public setDataList(dataList : Array<T>) {
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

        export class ItemSelector$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let e : framework.lightning.table.TableEvent = <framework.lightning.table.TableEvent>evt;
                let field : any = this.__parent.dataList[e.firstIndex];
                this.l.onItemSelected(field);
            }

            constructor(__parent: any, private l: any) {
                this.__parent = __parent;
            }
        }
        ItemSelector$0["__interfaces"] = ["framework.EventListener"];



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
                return this.dataList.length;
            }

            constructor(__parent: any, private dataList: any) {
                this.__parent = __parent;
            }
        }
        ItemSelector$1["__interfaces"] = ["framework.lightning.table.TableModel"];


    }

}
namespace framework.builder {
    export class WelcomeScreen extends framework.lightning.Modal {
        /*private*/ section : framework.lightning.Section = new framework.lightning.Section("section", "All Options");

        /*private*/ options : framework.lightning.Grid = new framework.lightning.Grid("options", "ul");

        /*private*/ newItem : framework.builder.WelcomeScreenItem = new framework.builder.WelcomeScreenItem("new", "NEW", "Create a new application", "Start with a blank project or one via a wizard", 1);

        /*private*/ openComputerItem : framework.builder.WelcomeScreenItem = new framework.builder.WelcomeScreenItem("openComputer", "OPN", "Open a project from computer", "Browse your computer to select an application", 2);

        /*private*/ openUrlItem : framework.builder.WelcomeScreenItem = new framework.builder.WelcomeScreenItem("openUrl", "URL", "Open project from url", "Specify an URL of a project to fetch", 3);

        /*private*/ openLibrary : framework.builder.WelcomeScreenItem = new framework.builder.WelcomeScreenItem("openLibrary", "LIB", "Open project from library", "Project stored on server", 4);

        /*private*/ builder : framework.builder.Builder;

        public constructor(name : string, builder : framework.builder.Builder) {
            super(name, "div");
            this.builder = null;
            this.builder = builder;
            this.addClass("welcome-screen");
            this.setStyle("width", "50%");
            this.addClass("slds-fade-in-open slds-modal_large slds-app-launcher slds-align_absolute-center");
            this.section.addClass("slds-open");
            this.setBody(this.section);
            this.section.getContent().addChild$framework_JSContainer(this.options);
            this.options.setWrap(true);
            let items : framework.builder.WelcomeScreenItem[] = [this.newItem, this.openComputerItem, this.openUrlItem, this.openLibrary];
            for(let index13499=0; index13499 < items.length; index13499++) {
                let item = items[index13499];
                {
                    let li : framework.JSContainer = new framework.JSContainer("li");
                    this.options.addChild$framework_JSContainer(li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-1"));
                    li.addChild$framework_JSContainer(item);
                }
            }
            this.newItem.addEventListener(new WelcomeScreen.WelcomeScreen$0(this, builder), "click");
            this.openLibrary.addEventListener(new WelcomeScreen.WelcomeScreen$1(this, builder), "click");
        }
    }
    WelcomeScreen["__class"] = "framework.builder.WelcomeScreen";
    WelcomeScreen["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];



    export namespace WelcomeScreen {

        export class WelcomeScreen$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.close();
                this.builder.openNewModal();
            }

            constructor(__parent: any, private builder: any) {
                this.__parent = __parent;
            }
        }
        WelcomeScreen$0["__interfaces"] = ["framework.EventListener"];



        export class WelcomeScreen$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.close();
                this.builder.openOpenProjectModal();
            }

            constructor(__parent: any, private builder: any) {
                this.__parent = __parent;
            }
        }
        WelcomeScreen$1["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.lightning.designables {
    export class JSDesignableModal extends framework.lightning.Modal implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "");
            this.applyParam("title", "Modal Title");
            this.applyParam("showFooter", "true");
            this.applyParam("showHeader", "true");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"title"))) {
                this.setTitle(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"size"))) {
                this.setSize(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"showFooter"))) {
                this.getFooter().setVisible(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"showHeader"))) {
                this.getHeader().setVisible(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let res : Array<any> = <any>(new Array());
            res.push(this.getContent(), this.getFooter());
            return res;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let title : framework.design.AttributeParameter = new framework.design.AttributeParameter("title", "Title", "Basic");
            let size : framework.design.AttributeParameter = new framework.design.AttributeParameter("size", "Size", "Basic");
            size.options.push(new framework.design.Option("Normal", framework.lightning.Modal.SIZE_NORMAL));
            size.options.push(new framework.design.Option("Medium", framework.lightning.Modal.SIZE_MEDIUM));
            size.options.push(new framework.design.Option("Large", framework.lightning.Modal.SIZE_LARGE));
            let showHeader : framework.design.AttributeParameter = new framework.design.AttributeParameter("showHeader", "Show Header", "Basic");
            showHeader.options.push(new framework.design.Option("", ""));
            let showFooter : framework.design.AttributeParameter = new framework.design.AttributeParameter("showFooter", "Show Footer", "Basic");
            showFooter.options.push(new framework.design.Option("", ""));
            params.push(title, size, showHeader, showFooter);
            return params;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            this.getContent().addChild$framework_JSContainer(<framework.JSContainer><any>designable);
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.getContent().removeChild(designable);
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
        }
    }
    JSDesignableModal["__class"] = "framework.lightning.designables.JSDesignableModal";
    JSDesignableModal["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class ImageIcon extends framework.lightning.SvgIcon {
        img : framework.JSContainer = new framework.JSContainer("img");

        public constructor(name : string, url : string) {
            super(name);
            this.setHtml("");
            this.clearChildren();
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

        static textTags : Object; public static textTags_$LI$() : Object { JSDesignableTextComponent.__static_initialize(); if(JSDesignableTextComponent.textTags == null) JSDesignableTextComponent.textTags = <Object>new Object(); return JSDesignableTextComponent.textTags; };

        static __static_initializer_0() {
            JSDesignableTextComponent.textTags_$LI$()["h1"] = "Heading 1";
            JSDesignableTextComponent.textTags_$LI$()["h2"] = "Heading 2";
            JSDesignableTextComponent.textTags_$LI$()["h3"] = "Heading 3";
            JSDesignableTextComponent.textTags_$LI$()["h4"] = "Heading 4";
            JSDesignableTextComponent.textTags_$LI$()["h5"] = "Heading 5";
            JSDesignableTextComponent.textTags_$LI$()["label"] = "Label";
            JSDesignableTextComponent.textTags_$LI$()["paragraph"] = "Paragraph";
            JSDesignableTextComponent.textTags_$LI$()["span"] = "Span";
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let l : Array<any> = this.getChildren();
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let textParam : framework.design.TextParameter = new framework.design.TextParameter("text", "Text", "Basic");
            let tagParam : framework.design.TagParameter = new framework.design.TagParameter();
            {
                let array13501 = Object.keys(JSDesignableTextComponent.textTags_$LI$());
                for(let index13500=0; index13500 < array13501.length; index13500++) {
                    let key = array13501[index13500];
                    {
                        tagParam.options.push(new framework.design.Option(<string>JSDesignableTextComponent.textTags_$LI$()[key], key));
                    }
                }
            }
            params.push(tagParam);
            params.push(textParam);
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
            this.setData$java_lang_Object(f);
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
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".ds")) {
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
                editor.setRootEditor(veditor);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".ds")) {
                let editor : framework.builder.data.DataSourcesEditor = new framework.builder.data.DataSourcesEditor(f.getName(), veditor);
                this.builder.openEditor(f.getName(), editor);
                editor.open(f);
            } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".var")) {
                let editor : framework.builder.editors.ContextEditor = new framework.builder.editors.ContextEditor(f.getName(), veditor);
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
                this.builder.getProject().deleteFile(this, this.f.getName(), stype, new FileTreeItem.FileTreeItem$0(this, stype));
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
             * @param {framework.builder.data.DataField[]} data_
             */
            public dataLoaded(data_? : any) : any {
                if(((data_ != null) || data_ === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data_);
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

        /*private*/ parent : framework.design.Designable;

        /*private*/ dropdown : framework.lightning.DropDown = new framework.lightning.DropDown("rightclick");

        /*private*/ lsnClick : framework.EventListener = new StructureTreeItem.StructureTreeItem$0(this);

        /*private*/ lsnDblclick : framework.EventListener = new StructureTreeItem.StructureTreeItem$1(this);

        /*private*/ lsnDelete : framework.EventListener = new StructureTreeItem.StructureTreeItem$2(this);

        public paste() {
            let clip : framework.design.Designable = this.structure.getClipBoard();
            let cmp : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.extract(clip);
            let des : framework.design.Designable = framework.builder.marshalling.MarshallUtil.toDesignable(cmp);
            let editor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
            editor.persist = true;
            editor.addNewComponent$framework_design_Designable$framework_design_Designable(des, this.designable);
            editor.dirty();
        }

        public pasteBefore() {
            let clip : framework.design.Designable = this.structure.getClipBoard();
            this.Move(clip, true);
        }

        public pasteAfter() {
            let clip : framework.design.Designable = this.structure.getClipBoard();
            this.Move(clip, false);
        }

        /*private*/ Move(clip : framework.design.Designable, before : boolean) {
            let parent : framework.design.Designable = this.getParentDesignable();
            if(parent != null) {
                let children : Array<framework.design.Designable> = parent.getDesignables();
                let currentIndex : number = children.indexOf(this.designable);
                for(let index13502=0; index13502 < children.length; index13502++) {
                    let child = children[index13502];
                    {
                        parent.removeDesignable(child);
                    }
                }
                let result : Array<framework.design.Designable> = <any>(new Array<framework.design.Designable>());
                let cmp : framework.builder.marshalling.Component = framework.builder.marshalling.MarshallUtil.extract(clip);
                let d : framework.design.Designable = framework.builder.marshalling.MarshallUtil.toDesignable(cmp);
                for(let i : number = 0; i < children.length; i++) {
                    if(i === currentIndex) {
                        if(before) {
                            result.push(d);
                            result.push(children[i]);
                        } else {
                            result.push(children[i]);
                            result.push(d);
                        }
                    } else {
                        result.push(children[i]);
                    }
                };
                let editor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
                editor.persist = true;
                for(let index13503=0; index13503 < result.length; index13503++) {
                    let child = result[index13503];
                    {
                        editor.addNewComponent$framework_design_Designable$framework_design_Designable(child, parent);
                    }
                }
                parent.setRendered(false);
                editor.dirty();
                this.structure.reload$framework_design_Designable(parent);
                this.structure.render();
            }
        }

        public constructor(name : string, designable : framework.design.Designable, structure : framework.builder.editors.Structure, parent : framework.design.Designable) {
            super(name, designable.getName());
            this.designable = null;
            this.selector = null;
            this.structure = null;
            this.parent = null;
            this.selector = structure.getSelector();
            this.parent = parent;
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
            let pasteBefore : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("pasteBefore", "Paste Before");
            pasteBefore.setIcon("add_relationship", "action");
            let pasteAfter : framework.lightning.DropDownItem = new framework.lightning.DropDownItem("pasteAfter", "Paste After");
            pasteAfter.setIcon("add_relationship", "action");
            exportAs.addEventListener(new StructureTreeItem.StructureTreeItem$3(this), "click");
            copy.addEventListener(new StructureTreeItem.StructureTreeItem$4(this, structure, designable), "click");
            cut.addEventListener(new StructureTreeItem.StructureTreeItem$5(this, structure, designable), "click");
            paste.addEventListener(new StructureTreeItem.StructureTreeItem$6(this), "click");
            pasteBefore.addEventListener(new StructureTreeItem.StructureTreeItem$7(this), "click");
            pasteAfter.addEventListener(new StructureTreeItem.StructureTreeItem$8(this), "click");
            deleteMenu.addEventListener(this.lsnDelete, "click");
            this.dropdown.addItem(paste);
            this.dropdown.addItem(pasteBefore);
            this.dropdown.addItem(pasteAfter);
            this.dropdown.addItem(copy);
            this.dropdown.addItem(exportAs);
            this.dropdown.addItem(deleteMenu);
            this.dropdown.setVisible(false);
            this.addChild$framework_JSContainer(this.dropdown);
            document.addEventListener("click", (evt : Event) => {
                this.dropdown.setVisible(false);
                if(this.dropdown.isRendered()) this.dropdown.render();
            });
            this.addIcon("delete", "utility", this.lsnDelete);
            this.addEventListener(this.lsnClick, "click");
            this.addEventListener(this.lsnDblclick, "dblclick");
            this.addEventListener(new StructureTreeItem.StructureTreeItem$9(this, structure, paste, pasteAfter, pasteBefore), "contextmenu");
        }

        public getDesignable() : framework.design.Designable {
            return this.designable;
        }

        public getParentDesignable() : framework.design.Designable {
            return this.parent;
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
            let ve : framework.builder.editors.VisualEditor = <any>(this.structure.getAncestorWithClass<any>("visual-editor"));
            ve.saveAsComponent(this.designable);
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
                if(this.structure.getSelected() != null) this.structure.getSelected().select(true);
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
                if(this.__parent.parent != null) {
                    this.__parent.parent.removeDesignable(this.__parent.designable);
                    this.__parent.getParent().setVisible(false);
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
                this.__parent.pasteBefore();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$7["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$8 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.pasteAfter();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$8["__interfaces"] = ["framework.EventListener"];



        export class StructureTreeItem$9 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                evt.preventDefault();
                let e : PointerEvent = <PointerEvent>evt;
                if(this.structure.getClipBoard() == null) {
                    this.paste.getParent().setVisible(false);
                    this.pasteAfter.getParent().setVisible(false);
                    this.pasteBefore.getParent().setVisible(false);
                } else {
                    this.paste.getParent().setVisible(true);
                    this.pasteAfter.getParent().setVisible(true);
                    this.pasteBefore.getParent().setVisible(true);
                }
                this.__parent.dropdown.setVisible(true);
                this.__parent.dropdown.setStyle("left", (e.clientX + 80) + "px");
                this.__parent.dropdown.setStyle("top", (e.clientY - 80) + "px");
            }

            constructor(__parent: any, private structure: any, private paste: any, private pasteAfter: any, private pasteBefore: any) {
                this.__parent = __parent;
            }
        }
        StructureTreeItem$9["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.lightning {
    export class LightningApplication extends framework.designables.JSDesignableBlockComponent {
        public scope : Object = <Object>new Object();

        public constructor(name : string, tag : string) {
            super(name, tag);
        }

        /**
         * 
         * @return {Array}
         */
        public advancedEventTypes() : string[] {
            return ["ready"];
        }

        /**
         * 
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        public postRender(c? : any, root? : any) : any {
            if(((c != null && c instanceof <any>HTMLElement) || c === null) && root === undefined) {
                return <any>this.postRender$jsweet_dom_HTMLElement(c);
            } else throw new Error('invalid overload');
        }

        public postRender$jsweet_dom_HTMLElement(root : HTMLElement) {
            super.postRender$jsweet_dom_HTMLElement(root);
            if(!this.isRendered()) this.fireListener("ready", new Event("ready"));
        }

        public exposeAsVariable(variableName : string, item : framework.design.Designable) {
            this.scope[variableName] = item;
        }
    }
    LightningApplication["__class"] = "framework.lightning.LightningApplication";
    LightningApplication["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.rtc {
    export class LocalVideoContainer extends framework.JSHTMLFragment implements framework.interactions.Draggable {
        /*private*/ video : framework.JSContainer = new framework.JSContainer("video", "video");

        /*private*/ volume : framework.JSContainer = new framework.JSContainer("volume", "meter");

        /*private*/ jsTitle : framework.JSContainer = new framework.JSContainer("title", "h2").addClass("slds-trucate");

        public constructor(name : string) {
            super(name, "#videocontainer");
            this.addChild$framework_JSContainer(this.jsTitle.setHtml("Myself"));
            this.addClass("video-container");
            this.addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-open");
            this.addChild$framework_JSContainer(this.video);
            this.addChild$framework_JSContainer(this.volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40").setAttribute("high", "-25"));
            this.addRenderer(new framework.interactions.DraggableRenderer());
        }

        public setVolume(volume : number) {
            if(volume < -45) volume = -45;
            if(volume > -20) volume = -20;
            (<HTMLInputElement>this.volume.getNative()).value = volume + "";
        }

        public setTitle(title : string) {
            this.jsTitle.setHtml(title);
        }

        public getVideo() : framework.JSContainer {
            return this.video;
        }

        public getVolume() : framework.JSContainer {
            return this.volume;
        }

        /**
         * 
         * @return {*}
         */
        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let o : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            o.handle = "#" + this.getId() + " header";
            return o;
        }
    }
    LocalVideoContainer["__class"] = "framework.rtc.LocalVideoContainer";
    LocalVideoContainer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];


}
namespace framework.rtc {
    export class VideoContainer extends framework.JSHTMLFragment implements framework.interactions.Draggable {
        /*private*/ video : HTMLVideoElement;

        /*private*/ volume : framework.JSContainer = new framework.JSContainer("volume", "meter");

        /*private*/ jsTitle : framework.JSContainer = new framework.JSContainer("title", "h2").addClass("slds-trucate");

        /*private*/ minimize : framework.lightning.IconButton = new framework.lightning.IconButton("minimize");

        /*private*/ expand : framework.lightning.IconButton = new framework.lightning.IconButton("expand");

        /*private*/ __close : framework.lightning.IconButton = new framework.lightning.IconButton("close");

        public constructor(name : string) {
            super(name, "#videocontainer");
            this.video = null;
            this.addChild$framework_JSContainer(this.jsTitle.setHtml("Myself"));
            this.addChild$framework_JSContainer(this.minimize);
            this.addChild$framework_JSContainer(this.expand);
            this.addChild$framework_JSContainer(this.__close);
            this.minimize.setIcon(new framework.lightning.SvgIcon("", "utility", "minimize_window"));
            this.__close.setIcon(new framework.lightning.SvgIcon("", "utility", "close"));
            this.expand.setIcon(new framework.lightning.SvgIcon("", "utility", "expand_alt"));
            this.expand.setVisible(false);
            this.minimize.addEventListener(new VideoContainer.VideoContainer$0(this), "click");
            this.expand.addEventListener(new VideoContainer.VideoContainer$1(this), "click");
            this.__close.addEventListener(new VideoContainer.VideoContainer$2(this), "click");
            this.addClass("video-container");
            this.addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-closed");
            this.addChild$framework_JSContainer(this.volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40").setAttribute("high", "-25"));
            this.addRenderer(new framework.interactions.DraggableRenderer());
        }

        public close() {
            this.removeClass("slds-is-open");
            this.addClass("slds-is-closed");
        }

        public open() {
            this.addClass("slds-is-open");
            this.removeClass("slds-is-closed");
        }

        public setTitle(title : string) {
            this.jsTitle.setHtml(title);
        }

        public setVolume(volume : number) {
            if(volume < -45) volume = -45;
            if(volume > -20) volume = -20;
            (<HTMLInputElement>this.volume.getNative()).value = volume + "";
        }

        public setVideo(video : HTMLVideoElement) {
            if(this.video != null) {
                $(this.getNative()).find("video").replaceWith(video);
            } else {
                $(this.getNative()).find("*[name=video]").replaceWith(video);
            }
            this.video = video;
            this.open();
        }

        public getVolume() : framework.JSContainer {
            return this.volume;
        }

        /**
         * 
         * @return {*}
         */
        public getDraggableOptions() : JQueryUI.DraggableOptions {
            let o : JQueryUI.DraggableOptions = <any>Object.defineProperty({

            }, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions","def.jqueryui.jqueryui.DraggableEvents"] });
            o.handle = "#" + this.getId() + " header";
            return null;
        }
    }
    VideoContainer["__class"] = "framework.rtc.VideoContainer";
    VideoContainer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.design.Designable","framework.Renderable"];



    export namespace VideoContainer {

        export class VideoContainer$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.close();
                this.__parent.expand.setVisible(true);
                this.__parent.minimize.setVisible(false);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VideoContainer$0["__interfaces"] = ["framework.EventListener"];



        export class VideoContainer$1 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.open();
                this.__parent.expand.setVisible(false);
                this.__parent.minimize.setVisible(true);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VideoContainer$1["__interfaces"] = ["framework.EventListener"];



        export class VideoContainer$2 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VideoContainer$2["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.properties {
    export class SingleOptionAttributeEditor extends framework.builder.properties.AbstractCheckBoxPropertyEditor {
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
            if(value != null) {
                this.setValue$java_lang_Boolean(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value)));
            }
        }

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let attr : string = this.parameter.name;
            let value : boolean = this.getValue();
            if(value != null) {
                this.designable.setAttribute(attr, value.toString());
                this.designable.applyParam(attr, value.toString());
                this.designable.setRendered(false);
                let veditor : framework.builder.editors.VisualEditor = <any>(this.getAncestorWithClass<any>("visual-editor"));
                veditor.dirty();
            }
        }
    }
    SingleOptionAttributeEditor["__class"] = "framework.builder.properties.SingleOptionAttributeEditor";
    SingleOptionAttributeEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertyEditor","framework.EventListener","framework.Renderable","framework.InputField"];


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
            this.clearChildren();
            this.setRendered(false);
            for(let index13504=0; index13504 < parameter.options.length; index13504++) {
                let opt = parameter.options[index13504];
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
            {
                let array13506 = select.getChildren();
                for(let index13505=0; index13505 < array13506.length; index13505++) {
                    let c = array13506[index13505];
                    {
                        let opt : framework.JSOption = <framework.JSOption>c;
                        value = value + "\n" + opt.getText();
                    }
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
            select.clearChildren();
            select.setRendered(false);
            for(let index13507=0; index13507 < options.length; index13507++) {
                let opt = options[index13507];
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
namespace framework.designables {
    export abstract class JSDesignableDataProvider extends framework.lightning.DescriptionList implements framework.design.Designable {
        delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name);
        }

        /**
         * 
         * @return {Array}
         */
        public advancedEventTypes() : string[] {
            return ["success", "error"];
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, false);
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
        }

        /**
         * 
         * @return {framework.builder.marshalling.Component}
         */
        public getComponent() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        public abstract execute();

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public abstract getParameters() : Array<framework.design.Parameter>;

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
    JSDesignableDataProvider["__class"] = "framework.designables.JSDesignableDataProvider";
    JSDesignableDataProvider["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.data {
    export class DynaForm extends framework.lightning.FormLayout implements framework.InputField<Object> {
        public constructor(name : string) {
            super(name, "div");
        }

        public setFields(fields : Array<Object>) {
            for(let index13508=0; index13508 < fields.length; index13508++) {
                let o = fields[index13508];
                {
                    let name : string = <string>o["name"];
                    let type : string = <string>o["type"];
                    let label : string = <string>o["label"];
                    let element : framework.lightning.FormElement = new framework.lightning.FormElement("elem_" + name, "div");
                    element.setLabel(label);
                    let input : framework.InputField<any> = new framework.JSInput(name);
                    if(type == null || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type.trim(), "") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "string") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "text")) {
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "integer") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "numeric")) {
                        input = new framework.JSInput(name).setType(framework.InputTypes.number);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "select")) {
                        let options : Array<Object> = <Array<Object>>o["options"];
                        let select : framework.JSSelect = new framework.JSSelect(name);
                        for(let index13509=0; index13509 < options.length; index13509++) {
                            let opt = options[index13509];
                            {
                                let text : string = <string>opt["text"];
                                let value : string = <string>opt["value"];
                                select.addOption(new framework.JSOption(text, value));
                            }
                        }
                        input = select;
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "multi")) {
                        let multi : framework.builder.data.MultiForm = new framework.builder.data.MultiForm(name);
                        let options : Array<Object> = <Array<Object>>o["options"];
                        multi.setConfigs(options);
                        input = multi;
                    }
                    input.addClass("slds-input");
                    element.setInput(input);
                    this.addFormElement(element);
                }
            }
        }

        /**
         * 
         * @return {Object}
         */
        public getValue() : Object {
            let result : Object = <Object>new Object();
            {
                let array13511 = this.getElements();
                for(let index13510=0; index13510 < array13511.length; index13510++) {
                    let element = array13511[index13510];
                    {
                        let value : any = element.getInput().getValue();
                        result[element.getInput().getName()] = value;
                    }
                }
            }
            return result;
        }

        public setValue$jsweet_lang_Object(val : Object) {
            {
                let array13513 = this.getElements();
                for(let index13512=0; index13512 < array13513.length; index13512++) {
                    let element = array13513[index13512];
                    {
                        let name : string = element.getInput().getName();
                        if(val[name] != null) {
                            let o : any = val[name];
                            let __in : framework.InputField<any> = <framework.InputField<any>><any>element.getInput();
                            __in.setValue(o);
                        }
                    }
                }
            }
        }

        /**
         * 
         * @param {Object} val
         */
        public setValue(val? : any) : any {
            if(((val != null && val instanceof <any>Object) || val === null)) {
                return <any>this.setValue$jsweet_lang_Object(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
        }
    }
    DynaForm["__class"] = "framework.builder.data.DynaForm";
    DynaForm["__interfaces"] = ["framework.interactions.Droppable","framework.InputField","framework.Renderable"];


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
            let editor : framework.builder.properties.PropertyEditor = parameter.getEditor(this.component);
            if(editor != null) {
                let element : framework.lightning.FormElement = new framework.lightning.FormElement("elem", "div");
                element.setLabel(parameter.label);
                element.setInput(<framework.InputField<any>><any>editor);
                this.addFormElement(element);
            }
            return this;
        }
    }
    BasePropertiesEditor["__class"] = "framework.builder.properties.BasePropertiesEditor";
    BasePropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.lightning.designables {
    export class JSDesignableFormLayout extends framework.lightning.FormLayout implements framework.design.Designable {
        public constructor() {
            super("Form", "div");
        }

        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"layout"))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"horizontal"))) {
                    this.setHorizontal(true);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"stacked"))) {
                    this.setStacked(true);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, "inline")) {
                    this.setInline(true);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"compound"))) {
                    this.setCompound(true);
                } else {
                    this.setStacked(true);
                }
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let designable : Array<framework.design.Designable> = <any>(new Array<any>());
            {
                let array13515 = this.getElements();
                for(let index13514=0; index13514 < array13515.length; index13514++) {
                    let element = array13515[index13514];
                    {
                        if(element != null && element instanceof <any>framework.lightning.designables.JSDesignableLightningInput) designable.push(<framework.design.Designable><any>element); else designable.push(<framework.design.Designable><any>element.getInput());
                    }
                }
            }
            return designable;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let parameter : framework.design.AttributeParameter = new framework.design.AttributeParameter("layout", "Layout", "Basic");
            parameter.options.push(new framework.design.Option("Stacked", "stacked"));
            parameter.options.push(new framework.design.Option("Horizontal", "horizontal"));
            parameter.options.push(new framework.design.Option("inline", "inline"));
            parameter.options.push(new framework.design.Option("Compound", "compound"));
            parameters.push(parameter);
            return parameters;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.FormElement) {
                this.addFormElement(<framework.lightning.FormElement><any>designable);
            } else if(designable != null && designable instanceof <any>framework.JSInput) {
                let element : framework.lightning.FormElement = new framework.lightning.designables.JSDesignableLightningInput(designable.getName());
                designable.addClass("slds-input");
                element.setInput(<framework.InputField<any>><any>designable);
                this.addFormElement(element);
            } else if(designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.InputField") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.InputField") >= 0)) {
                let element : framework.lightning.FormElement = new framework.lightning.FormElement(designable.getName(), "div");
                element.setInput(<framework.InputField<any>><any>designable);
                this.addFormElement(element);
            } else {
                console.error("Designable of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>designable.constructor)) + " cannot be added to Form Layout");
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            {
                let array13517 = this.getElements();
                for(let index13516=0; index13516 < array13517.length; index13516++) {
                    let element = array13517[index13516];
                    {
                        let b : boolean = (element != null && element instanceof <any>framework.lightning.designables.JSDesignableLightningInput);
                        if(b) {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(element.getId(),designable.getId()))) {
                                this.removeChild(element);
                                this.setRendered(false);
                                return;
                            }
                        } else {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(element.getInput().getId(),designable.getId()))) {
                                this.removeChild(element);
                                this.setRendered(false);
                                return;
                            }
                        }
                    }
                }
            }
        }

        /**
         * 
         * @param {*} designable
         * @param {number} steps
         */
        public moveDesignable(designable : framework.design.Designable, steps : number) {
            {
                let array13519 = this.getElements();
                for(let index13518=0; index13518 < array13519.length; index13518++) {
                    let element = array13519[index13518];
                    {
                        let b : boolean = (element != null && element instanceof <any>framework.lightning.designables.JSDesignableLightningInput);
                        if(b) {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(element.getId(),designable.getId()))) {
                                this.delegate.moveDesignable$framework_JSContainer$int(element, steps);
                            }
                        } else {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(element.getInput().getId(),designable.getId()))) {
                                this.delegate.moveDesignable$framework_JSContainer$int(element, steps);
                            }
                        }
                    }
                }
            }
        }
    }
    JSDesignableFormLayout["__class"] = "framework.lightning.designables.JSDesignableFormLayout";
    JSDesignableFormLayout["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


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
            for(let index13520=0; index13520 < components.length; index13520++) {
                let com = components[index13520];
                {
                    let li : framework.JSContainer = new framework.JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-2");
                    this.addChild$framework_JSContainer(li);
                    li.addChild$framework_JSContainer(com);
                }
            }
            return this;
        }

        public clearComponent() {
            this.clearChildren();
            this.setRendered(false);
        }
    }
    ComponentsLibrary["__class"] = "framework.builder.ComponentsLibrary";
    ComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.properties {
    export abstract class KeyValueEditor extends framework.lightning.Grid implements framework.builder.properties.ExtPropertiesEditor, framework.EventListener {
        /*private*/ indexCol : framework.lightning.Col = new framework.lightning.Col("indexCol");

        /*private*/ keyCol : framework.lightning.Col = new framework.lightning.Col("keyCol");

        /*private*/ valueCol : framework.lightning.Col = new framework.lightning.Col("valueCol");

        data : Object = <Object>new Object();

        designable : framework.design.Designable;

        tabLabel : string = "Custom";

        public constructor(name : string) {
            super(name, "div");
            this.designable = null;
            this.addClass("key-value-editor");
            this.setWrap(true);
            this.addChild$framework_JSContainer(this.indexCol.addClass("header"));
            this.addChild$framework_JSContainer(this.keyCol.addClass("header"));
            this.addChild$framework_JSContainer(this.valueCol.addClass("header"));
            this.keyCol.setSections("12");
            this.indexCol.setSpan("1");
            this.keyCol.setSections("12");
            this.keyCol.setSpan("5");
            this.valueCol.setSections("12");
            this.valueCol.setSpan("6");
            this.keyCol.setHtml("Key");
            this.valueCol.setHtml("Value");
            for(let i : number = 0; i < 11; i++) this.addEmptyRow();
        }

        public setKeyLabel(label : string) {
            this.keyCol.setHtml(label);
        }

        public setValueLabel(label : string) {
            this.valueCol.setHtml(label);
        }

        /*private*/ addEmptyRow() {
            let rows : number = this.getChildren().length / 3;
            let index : framework.lightning.Col = new framework.lightning.Col("index");
            index.setAttribute("index", rows + "");
            index.setSections("12");
            index.setSpan("1");
            index.addClass("header");
            let key : framework.lightning.Col = new framework.lightning.Col("key");
            key.setAttribute("contentEditable", "true");
            key.setAttribute("index", rows + "");
            let value : framework.lightning.Col = new framework.lightning.Col("value");
            value.setAttribute("contentEditable", "true");
            value.setAttribute("index", rows + "");
            key.setSections("12");
            key.setSpan("5");
            key.addClass("key");
            key.addEventListener(this, "blur");
            value.setSections("12");
            value.setSpan("6");
            value.addClass("value");
            value.addEventListener(this, "blur");
            this.addChild$framework_JSContainer(index).addChild$framework_JSContainer(key).addChild$framework_JSContainer(value);
        }

        public save(index : number) {
            this.iterate((t) => {
                let key : string = t[0].getNative().innerHTML;
                let value : string = t[1].getNative().innerHTML;
                t[0].setHtml(key);
                t[1].setHtml(value);
                t[0].setRendered(true);
                t[1].setRendered(true);
                if(key != null && key.trim().length > 0) this.data[key] = value;
            });
            this.applyDataOnDesignable(this.designable, this.data);
        }

        public abstract applyDataOnDesignable(designable : framework.design.Designable, data : Object);

        public clearGrid() {
            this.data = <Object>new Object();
            this.iterate((t) => {
                t[0].setHtml("");
                t[1].setHtml("");
            });
        }

        /*private*/ index : number = 0;

        public setValue(o : Object) {
            let keys : string[] = Object.keys(o);
            this.iterate(((keys) => {
                return (t) => {
                    if(this.index < keys.length) {
                        t[0].setHtml(keys[this.index]);
                        t[1].setHtml(<string>o[keys[this.index]]);
                    }
                }
            })(keys));
        }

        public iterate(f : (p1: framework.JSContainer[]) => void) {
            let children : Array<framework.JSContainer> = this.getChildren();
            this.index = 0;
            for(let i : number = 3; i < children.length; i = i + 3) {
                (target => (typeof target === 'function')?target([children[i + 1], children[i + 2]]):(<any>target).accept([children[i + 1], children[i + 2]]))(f);
                this.index++;
            };
            this.index = 0;
        }

        /**
         * 
         * @param {*} designable
         */
        public setComponent(designable : framework.design.Designable) {
            this.designable = designable;
            this.clearGrid();
            this.data = this.getDataFromDesignable(designable);
            if(this.data == null) {
                this.data = <Object>new Object();
            }
            this.setValue(this.data);
            this.setRendered(false);
        }

        public abstract getDataFromDesignable(designable : framework.design.Designable) : Object;

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            let index : number = parseInt(source.getAttribute("index"));
            this.save(index - 1);
        }

        public setTabLabel(s : string) {
            this.tabLabel = s;
        }

        /**
         * 
         * @param {*} me
         * @return {string}
         */
        public getLabel(me : framework.design.ExtDesignable) : string {
            return this.tabLabel;
        }
    }
    KeyValueEditor["__class"] = "framework.builder.properties.KeyValueEditor";
    KeyValueEditor["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor","framework.interactions.Droppable","framework.EventListener","framework.builder.properties.PropertiesEditor","framework.Renderable"];


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
namespace framework.lightning.designables {
    export class JSDesignableLightningGrid extends framework.lightning.Grid implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "div");
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            let b : boolean = /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value));
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"align"))) {
                super.setAlignCenter(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"alignCenter")));
                super.setAlignEnd(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"alignEnd")));
                super.setAlignSpace(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"alignSpace")));
                super.setAlignSpread(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"alignSpread")));
                super.setReverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"reverse")));
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"frame"))) super.setFrame(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"pullPaddedSize"))) super.setPullPaddedSize(value);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"absoluteCenter"))) super.setAbsoluteCenter(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderBottom"))) super.setBorderBottom(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderLeft"))) super.setBorderLeft(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderRight"))) super.setBorderRight(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"borderTop"))) super.setBorderTop(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"float"))) super.setFloat(value);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"grow"))) super.setGrow(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"scrollableX"))) super.setScrollableX(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"scrollableY"))) super.setScrollableY(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"vertical"))) super.setVertical(b);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"valign"))) {
                super.setVerticalAlignCenter(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"verticalAlignCenter")));
                super.setVerticalAlignEnd(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"verticalAlignEnd")));
                super.setVerticalAlignStart(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"verticalAlignStart")));
                super.setVerticalReverse(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"verticalReverse")));
                super.setVerticalStretch(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"verticalStretch")));
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"wrap"))) super.setWrap(b);
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let children : Array<any> = this.getChildren();
            return children;
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = this.delegate.getParameters();
            let align : framework.design.AttributeParameter = new framework.design.AttributeParameter("align", "Align", "Advanced");
            align.options.push(new framework.design.Option("None", "alignNone"));
            align.options.push(new framework.design.Option("Center", "alignCenter"));
            align.options.push(new framework.design.Option("End", "alignEnd"));
            align.options.push(new framework.design.Option("Space", "alignSpace"));
            align.options.push(new framework.design.Option("Spread", "alignSpread"));
            align.options.push(new framework.design.Option("Reverse", "reverse"));
            parameters.push(align);
            let valign : framework.design.AttributeParameter = new framework.design.AttributeParameter("valign", "Vertical Align", "Advanced");
            valign.options.push(new framework.design.Option("None", "alignNone"));
            valign.options.push(new framework.design.Option("Center", "verticalAlignCenter"));
            valign.options.push(new framework.design.Option("End", "verticalAlignEnd"));
            valign.options.push(new framework.design.Option("Start", "verticalAlignStart"));
            valign.options.push(new framework.design.Option("Stretch", "verticalAlignStretch"));
            valign.options.push(new framework.design.Option("Reverse", "verticalReverse"));
            parameters.push(valign);
            let labels : string[] = ["Frame", "Absolute Center", "Border Bottom", "Border Left", "Border Right", "Border Top", "Grow", "Scrollable X", "Scrollable Y", "Wrap"];
            let keys : string[] = ["frame", "absoluteCenter", "borderBottom", "borderLeft", "borderRight", "borderTop", "grow", "scrollableX", "scrollableY", "wrap"];
            for(let i : number = 0; i < labels.length; i++) {
                let basic : boolean = /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(labels[i], "Border") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(labels[i], "Scrollable");
                let parameter : framework.design.AttributeParameter = new framework.design.AttributeParameter(keys[i], labels[i], basic?"Basic":"Advanced");
                parameters.push(parameter);
            };
            let pullPaddedSize : framework.design.AttributeParameter = new framework.design.AttributeParameter("pullPaddedSize", "Pull Padded Size", "Advanced");
            pullPaddedSize.options.push(new framework.design.Option("None", framework.lightning.Grid.PULL_PADDED_NONE));
            pullPaddedSize.options.push(new framework.design.Option("XX Large", framework.lightning.Grid.PULL_PADDED_XX_LARGE));
            pullPaddedSize.options.push(new framework.design.Option("X Large", framework.lightning.Grid.PULL_PADDED_X_LARGE));
            pullPaddedSize.options.push(new framework.design.Option("Large", framework.lightning.Grid.PULL_PADDED_LARGE));
            pullPaddedSize.options.push(new framework.design.Option("Medium", framework.lightning.Grid.PULL_PADDED_MEDIUM));
            pullPaddedSize.options.push(new framework.design.Option("Small", framework.lightning.Grid.PULL_PADDED_SMALL));
            pullPaddedSize.options.push(new framework.design.Option("X Small", framework.lightning.Grid.PULL_PADDED_X_SMALL));
            pullPaddedSize.options.push(new framework.design.Option("XX Small", framework.lightning.Grid.PULL_PADDED_XX_SMALL));
            pullPaddedSize.options.push(new framework.design.Option("XXX Small", framework.lightning.Grid.PULL_PADDED_XXX_SMALL));
            parameters.push(pullPaddedSize);
            let flt : framework.design.AttributeParameter = new framework.design.AttributeParameter("float", "Float", "Advanced");
            flt.options.push(new framework.design.Option("None", framework.lightning.Grid.FLOAT_NONE));
            flt.options.push(new framework.design.Option("Left", framework.lightning.Grid.FLOAT_LEFT));
            flt.options.push(new framework.design.Option("Right", framework.lightning.Grid.FLOAT_RIGHT));
            parameters.push(flt);
            return parameters;
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
    JSDesignableLightningGrid["__class"] = "framework.lightning.designables.JSDesignableLightningGrid";
    JSDesignableLightningGrid["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning {
    export class DockedComposer extends framework.lightning.Grid implements framework.interactions.Draggable {
        /*private*/ header : framework.lightning.Grid = <framework.lightning.Grid>new framework.lightning.Grid("header", "div").addClass("slds-docked-composer__header slds-shrink-none").setAttribute("aria-live", "assertive");

        /*private*/ headerTitle : framework.lightning.Media = new framework.lightning.Media("headerTitle");

        /*private*/ headerIconContainer : framework.JSContainer = new framework.JSContainer("div").addClass("slds-icon_container");

        /*private*/ headerIcon : framework.lightning.SvgIcon = new framework.lightning.SvgIcon("headerIcon").setSize(framework.lightning.SvgIcon.EXTRA_SMALL).setTextType(framework.lightning.SvgIcon.TEXT_DEFAULT);

        /*private*/ title : framework.lightning.Text = new framework.lightning.Text("title", "h2").setTruncate(true);

        /*private*/ tools : framework.JSContainer = new framework.JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");

        minimize : framework.lightning.IconButton = new framework.lightning.IconButton("minimize");

        /*private*/ expand : framework.lightning.IconButton = new framework.lightning.IconButton("expand");

        /*private*/ close : framework.lightning.IconButton = new framework.lightning.IconButton("close");

        /*private*/ body : framework.JSContainer = new framework.JSContainer("div").addClass("slds-docked-composer__body");

        /*private*/ footer : framework.JSContainer = new framework.JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");

        closed : boolean = false;

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
            this.expand.getIcon().setIconName("expand_alt");
            this.minimize.getIcon().setIconName("minimize_window");
            this.close.getIcon().setIconName("close");
            this.close.setVisible(false);
            this.expand.setVisible(false);
            this.addChild$framework_JSContainer(this.body);
            this.addChild$framework_JSContainer(this.footer);
            this.addClass("slds-docked-composer");
            this.addRenderer(new framework.interactions.DraggableRenderer());
            this.minimize.addEventListener(new DockedComposer.DockedComposer$0(this), "click");
        }

        public toggle() : DockedComposer {
            if(this.closed) {
                this.setOpen(true);
            } else {
                this.setClosed(true);
            }
            return this;
        }

        public setOpen(b : boolean) : DockedComposer {
            this.closed = !b;
            this.toggleClass("slds-is-open", b);
            this.toggleClass("slds-is-closed", !b);
            if(b) {
                this.body.removeClass("slds-hide");
                this.minimize.getIcon().setIconName("minimize_window");
            } else {
                this.body.addClass("slds-hide");
                this.minimize.getIcon().setIconName("erect_window");
            }
            return this;
        }

        public setClosed(b : boolean) : DockedComposer {
            this.closed = b;
            this.toggleClass("slds-is-closed", b);
            this.toggleClass("slds-is-open", !b);
            if(!b) {
                this.body.removeClass("slds-hide");
                this.minimize.getIcon().setIconName("minimize_window");
            } else {
                this.body.addClass("slds-hide");
                this.minimize.getIcon().setIconName("erect_window");
            }
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



    export namespace DockedComposer {

        export class DockedComposer$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                this.__parent.toggle();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DockedComposer$0["__interfaces"] = ["framework.EventListener"];


    }

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
    export class Panel extends framework.lightning.Grid implements framework.design.Designable {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        public constructor(name : string) {
            super(name, "div");
            this.setNoWrap(true).setVertical(true);
            this.addClass("slds-panel");
        }

        public addSection(section : framework.lightning.PanelSection) : Panel {
            this.addChild$framework_JSContainer(section);
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
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            let children : Array<any> = this.getChildren();
            return children;
        }

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table? : any, value? : any, row? : any, column? : any) : any {
            if(table === undefined && value === undefined && row === undefined && column === undefined) {
                return <any>this.getComponent$();
            } else throw new Error('invalid overload');
        }

        public getComponent$() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            return this.delegate.getParameters();
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
            if(designable != null && designable instanceof <any>framework.lightning.PanelSection) {
                this.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            } else {
                let section : framework.lightning.PanelSection = <framework.lightning.PanelSection><any>framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("lgt:panel-section").build(new framework.builder.marshalling.Component(), false);
                this.addChild$framework_JSContainer(section);
                section.addChild$framework_JSContainer(<framework.JSContainer><any>designable);
            }
        }

        /**
         * 
         * @param {*} designable
         */
        public removeDesignable(designable : framework.design.Designable) {
            this.removeChild(designable);
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
    Panel["__class"] = "framework.lightning.Panel";
    Panel["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder {
    export class NewFile extends framework.builder.ItemSelector {
        /*private*/ lightning : framework.builder.UIFile = new framework.builder.UIFile("lightning").setAbbr("LGT").setTitle("Lightning").setHelp("Salesforce Lightning Project");

        /*private*/ mobile : framework.builder.UIFile = new framework.builder.UIFile("mobile").setAbbr("MOB").setTitle("Mobile Application").setHelp("Mobile application using OnsenUI framework");

        /*private*/ html : framework.builder.UIFile = new framework.builder.UIFile("templates").setAbbr("HTM").setTitle("HTML template").setHelp("Create a fragment of HTML that can be used as template for other components");

        /*private*/ css : framework.builder.UIFile = new framework.builder.UIFile("stylesheets").setAbbr("CSS").setTitle("CSS sheet").setHelp("Create an cascading stylesheet to be included in project");

        /*private*/ javascript : framework.builder.UIFile = new framework.builder.UIFile("scripts").setAbbr("JS").setTitle("Javascript file").setHelp("Create a new javascript file to be included in project");

        /*private*/ data : framework.builder.UIFile = new framework.builder.UIFile("datasources").setAbbr("DAT").setTitle("Data Source").setHelp("Creates a new data source to be included inn the project");

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
            this.getFilesList().clearChildren();
            this.getFilesList().addFile(this.lightning);
            this.getFilesList().addFile(this.mobile);
            if(!this.builder.isProjectOpen()) {
            } else {
                this.getFilesList().addFile(this.html);
                this.getFilesList().addFile(this.css);
                this.getFilesList().addFile(this.javascript);
                this.getFilesList().addFile(this.data);
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
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "datasources")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".ds")) {
                    name = name + ".ds";
                }
            }
            let project : framework.builder.data.File = this.builder.getProject();
            project.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(this, name, type, new NewFile.NewFile$3(this, type));
        }

        public createLightning(name : string) {
            if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".prj")) {
                name = name + ".prj";
            }
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").createProject(this, name, name, new NewFile.NewFile$4(this));
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
             * @param {framework.builder.data.DataField[]} data_
             */
            public dataLoaded(data_? : any) : any {
                if(((data_ != null) || data_ === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data_);
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
             * @param {framework.builder.data.DataField[]} data_
             */
            public dataLoaded(data_? : any) : any {
                if(((data_ != null) || data_ === null)) {
                    return <any>this.dataLoaded$java_lang_Object(data_);
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
         * @param {framework.builder.data.DataField[]} data_
         */
        public dataLoaded(data_? : any) : any {
            if(((data_ != null) || data_ === null)) {
                return <any>this.dataLoaded$java_lang_Object(data_);
            } else throw new Error('invalid overload');
        }

        public dataLoaded$java_lang_Object(data : any) {
            let nprojects : Array<Object> = <Array<Object>>data;
            for(let index13521=0; index13521 < nprojects.length; index13521++) {
                let p = nprojects[index13521];
                {
                    let project : framework.builder.data.File = new framework.builder.data.File(p);
                    let file : framework.builder.UIFile = new framework.builder.UIFile(project.getName());
                    file.setTitle(project.getTitle());
                    file.setAbbr("LGT");
                    file.setData$java_lang_Object(project);
                    file.addEventListener(this, "click");
                    this.getFilesList().addFile(file);
                }
            }
            this.render();
        }

        public init() {
            this.getFilesList().clearChildren();
            this.getFilesList().setRendered(false);
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.builder.data.ProjectService").getProjects(this, this);
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
            structure.getFields(this, new FieldSelector.FieldSelector$0(this));
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

        export class FieldSelector$0 implements framework.builder.data.RemoteDataListener<Array<framework.builder.data.DataField>> {
            public __parent: any;
            public dataLoaded$jsweet_lang_Array(data : Array<framework.builder.data.DataField>) {
                this.__parent.setDataList(data);
            }

            /**
             * 
             * @param {framework.builder.data.DataField[]} data
             */
            public dataLoaded(data? : any) : any {
                if(((data != null && data instanceof <any>Array) || data === null)) {
                    return <any>this.dataLoaded$jsweet_lang_Array(data);
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = super.getParameters();
            let result : Array<framework.design.Parameter> = <any>(new Array<framework.design.Parameter>());
            for(let index13522=0; index13522 < parameters.length; index13522++) {
                let p = parameters[index13522];
                {
                    if(p != null && p instanceof <any>framework.design.TagParameter) {
                    } else {
                        result.push(p);
                    }
                }
            }
            result.push(new framework.design.AttributeParameter("href", "Href", "Basic"));
            result.push(new framework.design.AttributeParameter("target", "Target", "Basic"));
            return result;
        }
    }
    JSDesignableLink["__class"] = "framework.designables.JSDesignableLink";
    JSDesignableLink["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableBuilderComponent extends framework.lightning.LightningApplication {
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
                this.clearChildren();
                this.setRendered(false);
                let project : framework.builder.data.File = null;
                if(framework.builder.Builder.getInstance() != null) {
                    project = framework.builder.Builder.getInstance().getProject();
                } else {
                    project = framework.builder.Previewer.project;
                }
                {
                    let array13524 = project.getChild("components").getChildren();
                    for(let index13523=0; index13523 < array13524.length; index13523++) {
                        let f = array13524[index13523];
                        {
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(f.getName(),value))) {
                                this.content = framework.builder.marshalling.MarshallUtil.build(f.getData());
                                this.addChild$framework_JSContainer(<framework.JSContainer><any>this.content);
                                {
                                    let array13526 = f.getStylesheets();
                                    for(let index13525=0; index13525 < array13526.length; index13525++) {
                                        let sc = array13526[index13525];
                                        {
                                            let elem : HTMLElement = document.createElement("style");
                                            elem.textContent = sc.getData();
                                            document.body.appendChild(elem);
                                        }
                                    }
                                }
                                {
                                    let array13528 = f.getScripts();
                                    for(let index13527=0; index13527 < array13528.length; index13527++) {
                                        let sc = array13528[index13527];
                                        {
                                            let elem : HTMLElement = document.createElement("script");
                                            elem.textContent = sc.getData();
                                            document.body.appendChild(elem);
                                        }
                                    }
                                }
                                {
                                    let array13530 = f.getTemplates();
                                    for(let index13529=0; index13529 < array13530.length; index13529++) {
                                        let sc = array13530[index13529];
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
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"src"))) {
                this.content = framework.builder.marshalling.MarshallUtil.build(value);
                this.addChild$framework_JSContainer(<framework.JSContainer><any>this.content);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<any>());
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let parameters : Array<framework.design.Parameter> = super.getParameters();
            let component : framework.design.AttributeParameter = new framework.design.AttributeParameter("component", "Component Src", "Basic");
            let project : framework.builder.data.File = framework.builder.Builder.getInstance().getProject();
            component.options.push(new framework.design.Option("None", ""));
            {
                let array13532 = project.getChild("components").getChildren();
                for(let index13531=0; index13531 < array13532.length; index13531++) {
                    let f = array13532[index13531];
                    {
                        component.options.push(new framework.design.Option(f.getName(), f.getName()));
                    }
                }
            }
            let source : framework.design.AttributeParameter = new framework.design.AttributeParameter("src", "Src", "Basic");
            parameters.push(source);
            return parameters;
        }
    }
    JSDesignableBuilderComponent["__class"] = "framework.designables.JSDesignableBuilderComponent";
    JSDesignableBuilderComponent["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableHTTP extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        public constructor() {
            super("Http Connector");
            this.applyParam("method", "GET");
        }

        public execute() {
            let url : string = this.getAttribute("url");
            let method : string = this.getAttribute("method");
            let payload : string = this.getAttribute("payload");
            if(url != null && method != null && method.length > 0 && url.length > 0) {
                if(payload == null || payload.length <= 0) {
                    payload = "{}";
                }
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("get", method)) {
                    $.get(url, JSON.parse(payload), (a, b, c) => {
                        let evt : CustomEvent = new CustomEvent("success");
                        evt["data"] = a;
                        this.fireListener("success", evt);
                        return true;
                    });
                } else {
                    $.post(url, JSON.parse(payload), (a, b, c) => {
                        let evt : framework.designables.DataEvent = new framework.designables.DataEvent("success", <Object>a);
                        this.fireListener("success", evt);
                        return true;
                    });
                }
            }
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let url : framework.design.AttributeParameter = new framework.design.AttributeParameter("url", "Url", "Basic");
            let method : framework.design.AttributeParameter = new framework.design.AttributeParameter("method", "Method", "Basic");
            method.options.push(new framework.design.Option("GET", "GET"));
            method.options.push(new framework.design.Option("POST", "POST"));
            let payload : framework.design.AttributeParameter = new framework.design.AttributeParameter("payload", "Payload", "Basic");
            params.push(url, method, payload);
            return params;
        }
    }
    JSDesignableHTTP["__class"] = "framework.designables.JSDesignableHTTP";
    JSDesignableHTTP["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableService extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        public constructor() {
            super("Service");
        }

        public execute() {
            let serviceName : string = this.getAttribute("service");
            let method : string = this.getAttribute("method");
            let payload : string = this.getAttribute("payload");
            let opl : Object = <Object>new Object();
            if(payload == null || payload.length === 0) {
                payload = "{}";
            } else {
                opl = <Object>JSON.parse(payload);
            }
            opl["method"] = method;
            framework.core.BeanFactory.getInstance().getBeanOfType<any>("framework.Adaptor").Execute(this, serviceName, opl, (response : any, statusCode : number) => {
                this.fireListener("success", new framework.designables.DataEvent("success", <Object>response));
                return true;
            });
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let url : framework.design.AttributeParameter = new framework.design.AttributeParameter("service", "Service", "Basic");
            let method : framework.design.AttributeParameter = new framework.design.AttributeParameter("method", "Method", "Basic");
            let payload : framework.design.AttributeParameter = new framework.design.AttributeParameter("payload", "Payload", "Basic");
            params.push(url, method, payload);
            return params;
        }
    }
    JSDesignableService["__class"] = "framework.designables.JSDesignableService";
    JSDesignableService["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.lightning.designables {
    export class JSDesignableSOQL extends framework.designables.JSDesignableDataProvider implements framework.design.Designable {
        public constructor(name : string) {
            super(name);
            this.applyParam("limit", "10");
            this.applyParam("offset", "0");
        }

        /**
         * 
         */
        public execute() {
            let query : string = this.getAttribute("query");
            let offset : string = this.getAttribute("offset");
            let limit : string = this.getAttribute("limit");
            if(limit != null && limit.length > 0) {
                query = query + " LIMIT " + limit;
            }
            if(offset != null && offset.length > 0) {
                query = query + " OFFSET " + offset;
            }
            let payload : Object = <Object>new Object();
            payload["q"] = query;
            $.get("/objects/query", payload, (a, b, c) => {
                let evt : CustomEvent = new CustomEvent("success");
                evt["data"] = a;
                this.fireListener("success", evt);
                return true;
            });
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = <any>(new Array<any>());
            params.push(new framework.design.NameParameter("Name", "Basic"));
            let hidden : framework.design.AttributeParameter = new framework.design.AttributeParameter("dhidden", "Hidden", "Basic");
            hidden.options.push(new framework.design.Option("", ""));
            let exposeAs : framework.design.AttributeParameter = new framework.design.AttributeParameter("exposeAs", "Expose with var", "Basic");
            params.push(hidden, exposeAs);
            let query : framework.design.AttributeParameter = new framework.design.AttributeParameter("query", "Query", "Basic");
            let limit : framework.design.AttributeParameter = new framework.design.AttributeParameter("limit", "Limit", "Basic");
            let offset : framework.design.AttributeParameter = new framework.design.AttributeParameter("offset", "Offset", "Basic");
            params.push(query, limit, offset);
            return params;
        }
    }
    JSDesignableSOQL["__class"] = "framework.lightning.designables.JSDesignableSOQL";
    JSDesignableSOQL["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class AdvancedPropertiesEditor extends framework.builder.properties.BasePropertiesEditor {
        public constructor() {
            super("advanced");
        }

        public setComponent(designable : framework.design.Designable) {
            super.setComponent(designable);
            this.clear();
            {
                let array13534 = this.component.getParameters();
                for(let index13533=0; index13533 < array13534.length; index13533++) {
                    let p = array13534[index13533];
                    {
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(p.category, "advanced")) this.addProperty$framework_design_Parameter$framework_design_Designable(p, designable);
                    }
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
            {
                let array13536 = designable.getParameters();
                for(let index13535=0; index13535 < array13536.length; index13535++) {
                    let param = array13536[index13535];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(param.category,"Basic"))) {
                            this.addProperty$framework_design_Parameter$framework_design_Designable(param, designable);
                        }
                    }
                }
            }
        }
    }
    BasicPropertiesEditor["__class"] = "framework.builder.properties.BasicPropertiesEditor";
    BasicPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable","framework.builder.properties.PropertiesEditor","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class BasicComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Basic");
            this.addComponents(new framework.builder.BasicComponent("p", "TXT", "Text Element"), new framework.builder.BasicComponent("a", "LNK", "Hyper Link"), new framework.builder.BasicComponent("img", "IMG", "Image"), new framework.builder.BasicComponent("div", "BLK", "Block Component"), new framework.builder.BasicComponent("ul", "LST", "List Component"), new framework.builder.BasicComponent("form", "FRM", "Form"), new framework.builder.BasicComponent("input", "IN", "Input"), new framework.builder.BasicComponent("select", "SEL", "Select"), new framework.builder.BasicComponent("textarea", "TA", "Text Area"), new framework.builder.BasicComponent("button", "BTN", "Button"), new framework.builder.BasicComponent("cmp", "CMP", "Component"), new framework.builder.BasicComponent("html", "HTM", "Html Template"));
        }
    }
    BasicComponentLibrary["__class"] = "framework.builder.libraries.BasicComponentLibrary";
    BasicComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class CustomComponentsLibrary extends framework.builder.ComponentsLibrary {
        public constructor(name : string) {
            super(name);
        }
    }
    CustomComponentsLibrary["__class"] = "framework.builder.libraries.CustomComponentsLibrary";
    CustomComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LightningComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Lightning");
            this.addComponents(new framework.builder.Component("lgt:avatar", "AVTR", "Avatar"));
            this.addComponents(new framework.builder.Component("lgt:badge", "BDG", "Badge"));
            this.addComponents(new framework.builder.Component("lgt:txt", "TXT", "Text Element"));
            this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button"));
            this.addComponents(new framework.builder.Component("lgt:icon-btn", "ICO", "Icon Button"));
            this.addComponents(new framework.builder.Component("lgt:btn-grp", "GRP", "Button Group"));
            this.addComponents(new framework.builder.Component("lgt:frm", "FRM", "Lightning Form"));
            this.addComponents(new framework.builder.Component("lgt:input", "INP", "Lightning Input"));
            this.addComponents(new framework.builder.Component("lgt:table", "TABLE", "Data Table"));
            this.addComponents(new framework.builder.Component("zs:iterator", "ITER", "Iterator"));
        }
    }
    LightningComponentLibrary["__class"] = "framework.builder.libraries.LightningComponentLibrary";
    LightningComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.builder.libraries {
    export class LightningContainerComponentLibrary extends framework.builder.ComponentsLibrary {
        public constructor() {
            super("Containers");
            this.addComponents(new framework.builder.Component("lgt:bcr", "BRDC", "BreadCrumb"));
            this.addComponents(new framework.builder.Component("lgt:bcr-item", "BRDCI", "BreadCrumb Item"));
            this.addComponents(new framework.builder.Component("lgt:grid", "GRID", "Grid"));
            this.addComponents(new framework.builder.Component("lgt:col", "COL", "Column"));
            this.addComponents(new framework.builder.Component("lgt:panel", "PANE", "Panel"));
            this.addComponents(new framework.builder.Component("lgt:panel-section", "SEC", "Panel Section"));
            this.addComponents(new framework.builder.Component("lgt:modal", "MODAL", "Modal"));
            this.addComponents(new framework.builder.Component("lgt:acc", "ACC", "Accordion"));
            this.addComponents(new framework.builder.Component("lgt:acc-item", "ACCI", "Accordion Item"));
            this.addComponents(new framework.builder.Component("zs:http", "REST", "Rest Webservice"));
            this.addComponents(new framework.builder.Component("zs:service", "SERV", "Remote Service"));
            this.addComponents(new framework.builder.Component("lgt:soql", "SOQL", "Salesforce Query"));
        }
    }
    LightningContainerComponentLibrary["__class"] = "framework.builder.libraries.LightningContainerComponentLibrary";
    LightningContainerComponentLibrary["__interfaces"] = ["framework.interactions.Droppable","framework.Renderable"];


}
namespace framework.designables {
    export class JSDesignableSelect extends framework.JSSelect implements framework.design.ExtDesignable {
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
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"options"))) {
                if(value != null) {
                    let o : Object = <Object>JSON.parse(value);
                    this.clearChildren();
                    this.setRendered(false);
                    {
                        let array13538 = Object.keys(o);
                        for(let index13537=0; index13537 < array13538.length; index13537++) {
                            let val = array13538[index13537];
                            {
                                let txt : string = <string>o[val];
                                this.addOption(new framework.JSOption(txt, val));
                            }
                        }
                    }
                }
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
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
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let options : framework.design.AttributeParameter = new framework.design.AttributeParameter("options", "Options", "Extended");
            params.push(options);
            return params;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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

        /**
         * 
         * @return {Array}
         */
        public getExtEditors() : framework.builder.properties.ExtPropertiesEditor[] {
            let options : framework.builder.properties.KeyValueEditor = new JSDesignableSelect.JSDesignableSelect$0(this, "options");
            options.setKeyLabel("Value");
            options.setValueLabel("Text");
            options.setTabLabel("Options");
            let customPropertiesEditorBody : framework.builder.properties.KeyValueEditor = new JSDesignableSelect.JSDesignableSelect$1(this, "custom");
            customPropertiesEditorBody.setTabLabel("Custom");
            return [options, customPropertiesEditorBody];
        }
    }
    JSDesignableSelect["__class"] = "framework.designables.JSDesignableSelect";
    JSDesignableSelect["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.design.ExtDesignable","framework.Renderable","framework.InputField"];



    export namespace JSDesignableSelect {

        export class JSDesignableSelect$0 extends framework.builder.properties.KeyValueEditor {
            public __parent: any;
            /**
             * 
             * @param {*} designable
             * @param {Object} data
             */
            public applyDataOnDesignable(designable : framework.design.Designable, data : Object) {
                designable.applyParam("options", JSON.stringify(data));
            }

            /**
             * 
             * @param {*} designable
             * @return {Object}
             */
            public getDataFromDesignable(designable : framework.design.Designable) : Object {
                let options : string = designable.getAttribute("options");
                if(options != null && options.length > 0) {
                    let data : Object = <Object>JSON.parse(options);
                    if(data != null) {
                        return data;
                    }
                }
                return <Object>new Object();
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
            }
        }
        JSDesignableSelect$0["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor","framework.interactions.Droppable","framework.EventListener","framework.builder.properties.PropertiesEditor","framework.Renderable"];



        export class JSDesignableSelect$1 extends framework.builder.properties.KeyValueEditor {
            public __parent: any;
            /**
             * 
             * @param {*} designable
             * @param {Object} data
             */
            public applyDataOnDesignable(designable : framework.design.Designable, data : Object) {
                designable['setData$java_lang_Object'](data);
            }

            /**
             * 
             * @param {*} designable
             * @return {Object}
             */
            public getDataFromDesignable(designable : framework.design.Designable) : Object {
                return <Object>designable.getData();
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
            }
        }
        JSDesignableSelect$1["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor","framework.interactions.Droppable","framework.EventListener","framework.builder.properties.PropertiesEditor","framework.Renderable"];


    }

}
namespace framework.lightning.designables {
    export class JSDesignableTable extends framework.lightning.table.Table implements framework.design.ExtDesignable, framework.lightning.table.TableColumnModel, framework.lightning.table.TableModel, framework.lightning.table.TableCellRenderer {
        /*private*/ delegate : framework.designables.DesignableDelegate = new framework.designables.DesignableDelegate(this);

        /*private*/ fields : Array<framework.lightning.table.TableColumn> = <any>(new Array<framework.lightning.table.TableColumn>());

        /*private*/ tableData : Array<Object> = <any>(new Array<Object>());

        public constructor(name : string) {
            super(name);
            this.setTableCellRenderer(this);
            for(let i : number = 1; i <= 5; i++) {
                this.addColumn(new framework.lightning.table.TableColumn("field" + i, "field" + i, "Field " + i));
            };
            this.applyParam("PageSize", "10");
            this.setTableColumnModel(this);
            this.refreshColumns();
            this.setModel(this);
        }

        /**
         * 
         */
        public refreshData() {
            super.refreshData();
            let evt : CustomEvent = new CustomEvent("dataLoaded");
            evt["data"] = this.tableData;
        }

        public getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable {
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

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table? : any, value? : any, row? : any, column? : any) : any {
            if(((table != null && table instanceof <any>framework.lightning.table.Table) || table === null) && ((value != null) || value === null) && ((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table, value, row, column);
            } else if(table === undefined && value === undefined && row === undefined && column === undefined) {
                return <any>this.getComponent$();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} key
         * @param {string} value
         */
        public applyParam(key : string, value : string) {
            this.delegate.applyParameter(key, value, true);
            let b : boolean = /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",value));
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"fields"))) {
                this.fields = <any>(new Array<framework.lightning.table.TableColumn>());
                if(value != null) {
                    let o : Object = <Object>JSON.parse(value);
                    {
                        let array13540 = Object.keys(o);
                        for(let index13539=0; index13539 < array13540.length; index13539++) {
                            let val = array13540[index13539];
                            {
                                let txt : string = <string>o[val];
                                let col : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn(val, val, txt);
                                this.fields.push(col);
                            }
                        }
                    }
                }
                this.refreshColumns();
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"PageSize"))) {
                this.setPageSize((<number>parseInt(value)|0));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"Bordered"))) {
                this.setBordered(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"CellBuffered"))) {
                this.setCellBuffered(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"ColBordered"))) {
                this.setColBordered(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"FixedLayout"))) {
                this.setFixedLayout(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"MultiSelectable"))) {
                this.setMultiSelectable(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"NoRowHover"))) {
                this.setNoRowHover(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"Striped"))) {
                this.setStriped(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"Selectable"))) {
                this.setSelectable(b);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(key,"ResizableCol"))) {
                this.setResizableCol(b);
            }
        }

        /**
         * 
         * @return {*[]}
         */
        public getDesignables() : Array<framework.design.Designable> {
            return <any>(new Array<framework.design.Designable>());
        }

        public getComponent$() : framework.builder.marshalling.Component {
            return this.delegate.getComponent();
        }

        /**
         * 
         * @return {framework.design.Parameter[]}
         */
        public getParameters() : Array<framework.design.Parameter> {
            let params : Array<framework.design.Parameter> = this.delegate.getParameters();
            let options : framework.design.AttributeParameter = new framework.design.AttributeParameter("fields", "Fields", "Extended");
            params.push(options);
            let boolParams : string[] = ["Bordered", "CellBuffered", "ColBordered", "FixedLayout", "MultiSelectable", "NoRowHover", "Striped", "Selectable", "ResizableCol"];
            for(let index13541=0; index13541 < boolParams.length; index13541++) {
                let param = boolParams[index13541];
                {
                    let parameter : framework.design.AttributeParameter = new framework.design.AttributeParameter(param, param, "Advanced");
                    parameter.options.push(new framework.design.Option("", ""));
                    params.push(parameter);
                }
            }
            let parameter : framework.design.AttributeParameter = new framework.design.AttributeParameter("PageSize", "Page Size", "Basic");
            parameter.options.push(new framework.design.Option("5", "5"));
            parameter.options.push(new framework.design.Option("10", "10"));
            parameter.options.push(new framework.design.Option("15", "15"));
            parameter.options.push(new framework.design.Option("20", "20"));
            parameter.options.push(new framework.design.Option("30", "30"));
            parameter.options.push(new framework.design.Option("50", "50"));
            params.push(parameter);
            let selectOn : framework.design.AttributeParameter = new framework.design.AttributeParameter("SelectRow", "Select On", "Basic");
            selectOn.options.push(new framework.design.Option("click", "Click"));
            selectOn.options.push(new framework.design.Option("dblclick", "Double Click"));
            params.push(selectOn);
            return params;
        }

        /**
         * 
         * @param {*} designable
         */
        public addDesignable(designable : framework.design.Designable) {
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
         * @param {framework.lightning.table.TableColumn} aColumn
         */
        public addColumn(aColumn : framework.lightning.table.TableColumn) {
            this.fields.push(aColumn);
            this.refreshColumns();
        }

        public setTableData(data : Array<Object>) {
            this.tableData = data;
            this.refreshData();
        }

        /**
         * 
         * @return {number}
         */
        public getColumnCount() : number {
            return this.fields.length;
        }

        /**
         * 
         * @param {*} columnIdentifier
         * @return {number}
         */
        public getColumnIndex(columnIdentifier : any) : number {
            for(let i : number = 0; i < this.fields.length; i++) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.fields[i].getIdentifier(),columnIdentifier))) {
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
            return this.fields[columnIndex];
        }

        /**
         * 
         * @return {Array}
         */
        public getExtEditors() : framework.builder.properties.ExtPropertiesEditor[] {
            let fields : framework.builder.properties.KeyValueEditor = new JSDesignableTable.JSDesignableTable$0(this, "fields");
            fields.setKeyLabel("Name");
            fields.setValueLabel("Label");
            fields.setTabLabel("Fields");
            return [fields];
        }

        /**
         * 
         * @return {number}
         */
        public getRowCount() : number {
            return this.tableData.length;
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
            if(this.tableData.length > rowIndex) {
                let line : Object = this.tableData[rowIndex];
                if(line != null) {
                    if(this.fields.length > columnIndex) {
                        let col : framework.lightning.table.TableColumn = this.fields[columnIndex];
                        if(col != null) {
                            let key : string = <string>col.getIdentifier();
                            return line[key];
                        }
                    }
                }
            }
            return "";
        }

        /**
         * 
         * @param {*} aValue
         * @param {number} rowIndex
         * @param {number} columnIndex
         */
        public setValueAt(aValue : any, rowIndex : number, columnIndex : number) {
        }
    }
    JSDesignableTable["__class"] = "framework.lightning.designables.JSDesignableTable";
    JSDesignableTable["__interfaces"] = ["framework.lightning.table.TableModel","framework.interactions.Droppable","framework.lightning.table.TableColumnModel","framework.lightning.table.TableCellRenderer","framework.design.Designable","framework.design.ExtDesignable","framework.Renderable"];



    export namespace JSDesignableTable {

        export class JSDesignableTable$0 extends framework.builder.properties.KeyValueEditor {
            public __parent: any;
            /**
             * 
             * @param {*} designable
             * @param {Object} data
             */
            public applyDataOnDesignable(designable : framework.design.Designable, data : Object) {
                designable.applyParam("fields", JSON.stringify(data));
            }

            /**
             * 
             * @param {*} designable
             * @return {Object}
             */
            public getDataFromDesignable(designable : framework.design.Designable) : Object {
                let options : string = designable.getAttribute("fields");
                if(options != null && options.length > 0) {
                    let data : Object = <Object>JSON.parse(options);
                    if(data != null) {
                        return data;
                    }
                }
                return <Object>new Object();
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
            }
        }
        JSDesignableTable$0["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor","framework.interactions.Droppable","framework.EventListener","framework.builder.properties.PropertiesEditor","framework.Renderable"];


    }

}
namespace framework.builder.editors {
    export class StructureDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ structure : framework.builder.editors.Structure;

        public constructor(name : string, root : framework.design.Designable, f : framework.builder.data.File, selector : framework.builder.Selector) {
            super(name);
            this.structure = null;
            this.addClass("structure");
            this.getTitle().setHtml("Structure");
            this.structure = new framework.builder.editors.Structure("strcy", root, f, selector);
            this.getBody().addChild$framework_JSContainer(this.structure);
            this.minimize.addEventListener(new StructureDockedComposer.StructureDockedComposer$0(this), "click");
        }

        public getStructure() : framework.builder.editors.Structure {
            return this.structure;
        }
    }
    StructureDockedComposer["__class"] = "framework.builder.editors.StructureDockedComposer";
    StructureDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];



    export namespace StructureDockedComposer {

        export class StructureDockedComposer$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let editor : framework.builder.editors.VisualEditor = <any>(this.__parent.getAncestorWithClass("visual-editor"));
                if(this.__parent.closed) editor.closeLeft(); else editor.openLeft();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        StructureDockedComposer$0["__interfaces"] = ["framework.EventListener"];


    }

}
namespace framework.builder.libraries {
    export class LibrariesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ basicComponentLib : framework.builder.libraries.BasicComponentLibrary = new framework.builder.libraries.BasicComponentLibrary();

        /*private*/ lightningComponentLib : framework.builder.libraries.LightningComponentLibrary = new framework.builder.libraries.LightningComponentLibrary();

        /*private*/ containerComponentLib : framework.builder.libraries.LightningContainerComponentLibrary = new framework.builder.libraries.LightningContainerComponentLibrary();

        /*private*/ customComponents : framework.builder.libraries.CustomComponentsLibrary = new framework.builder.libraries.CustomComponentsLibrary("custom");

        /*private*/ componentsTabs : framework.builder.ComponentsTabs = new framework.builder.ComponentsTabs("componentsTabs");

        public constructor(name : string) {
            super(name);
            this.addClass("library-composer");
            this.getTitle().setHtml("Components Library");
            this.getBody().addChild$framework_JSContainer(this.componentsTabs);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", this.basicComponentLib);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", this.lightningComponentLib);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Containers", this.containerComponentLib);
            this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Custom", this.customComponents);
            this.componentsTabs.getItems()[0].setActive(true);
        }

        public refreshWithProject(des : framework.design.Designable) {
            let customs : Object = des.getComponent().custom;
            this.customComponents.clearComponent();
            {
                let array13543 = Object.keys(customs);
                for(let index13542=0; index13542 < array13543.length; index13542++) {
                    let s = array13543[index13542];
                    {
                        this.customComponents.addComponents(new framework.builder.Component("html:cmp", <string>customs[s], s));
                    }
                }
            }
        }
    }
    LibrariesDockedComposer["__class"] = "framework.builder.libraries.LibrariesDockedComposer";
    LibrariesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];


}
namespace framework.builder.properties {
    export class PropertiesDockedComposer extends framework.lightning.DockedComposer {
        /*private*/ mainEditor : framework.builder.properties.ProtertiesEditorTabs = new framework.builder.properties.ProtertiesEditorTabs("mainEditor");

        /*private*/ basicEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.BasicPropertiesEditor("basic");

        public constructor(name : string) {
            super(name);
            this.getTitle().setHtml("Properties");
            this.addClass("properties-composer");
            this.getBody().addChild$framework_JSContainer(this.mainEditor);
            this.minimize.addEventListener(new PropertiesDockedComposer.PropertiesDockedComposer$0(this), "click");
        }

        public selectComponent(designable : framework.design.Designable) {
            this.mainEditor.clear();
            this.basicEditorBody.setRendered(false);
            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Basic", this.basicEditorBody).setActive(true);
            this.basicEditorBody.setComponent(designable);
            let advancedPropertiesEditorBody : framework.builder.properties.PropertiesEditor = new framework.builder.properties.AdvancedPropertiesEditor();
            let adv : framework.lightning.TabItem = this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Advanced", advancedPropertiesEditorBody);
            advancedPropertiesEditorBody.setComponent(designable);
            if(advancedPropertiesEditorBody.getChildren().length === 0) {
                adv.setVisible(false);
            } else {
                adv.setVisible(true);
            }
            if(designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0)) {
            } else {
                let customPropertiesEditorBody : framework.builder.properties.KeyValueEditor = new PropertiesDockedComposer.PropertiesDockedComposer$1(this, "custom");
                this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Custom", customPropertiesEditorBody);
                customPropertiesEditorBody.setComponent(designable);
            }
            if(designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0)) {
                let editors : framework.builder.properties.ExtPropertiesEditor[] = (<framework.design.ExtDesignable><any>designable).getExtEditors();
                if(editors != null && editors.length > 0) {
                    for(let index13544=0; index13544 < editors.length; index13544++) {
                        let e = editors[index13544];
                        {
                            e.setComponent(designable);
                            this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor(e.getLabel(<framework.design.ExtDesignable><any>designable), e).setActive(false);
                        }
                    }
                }
            }
        }
    }
    PropertiesDockedComposer["__class"] = "framework.builder.properties.PropertiesDockedComposer";
    PropertiesDockedComposer["__interfaces"] = ["framework.interactions.Droppable","framework.interactions.Draggable","framework.Renderable"];



    export namespace PropertiesDockedComposer {

        export class PropertiesDockedComposer$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let editor : framework.builder.editors.VisualEditor = <any>(this.__parent.getAncestorWithClass("visual-editor"));
                if(this.__parent.closed) editor.closeRight(); else editor.openRight();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        PropertiesDockedComposer$0["__interfaces"] = ["framework.EventListener"];



        export class PropertiesDockedComposer$1 extends framework.builder.properties.KeyValueEditor {
            public __parent: any;
            /**
             * 
             * @param {*} designable
             * @param {Object} data
             */
            public applyDataOnDesignable(designable : framework.design.Designable, data : Object) {
                designable['setData$java_lang_Object'](data);
            }

            /**
             * 
             * @param {*} designable
             * @return {Object}
             */
            public getDataFromDesignable(designable : framework.design.Designable) : Object {
                return <Object>designable.getData();
            }

            constructor(__parent: any, __arg0: any) {
                super(__arg0);
                this.__parent = __parent;
            }
        }
        PropertiesDockedComposer$1["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor","framework.interactions.Droppable","framework.EventListener","framework.builder.properties.PropertiesEditor","framework.Renderable"];


    }

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
namespace framework.builder.data {
    export abstract class CrudTable extends framework.lightning.Panel implements framework.lightning.table.TableModel, framework.lightning.table.TableCellRenderer, framework.EventListener {
        /*private*/ configs : Object = <Object>new Object();

        /*private*/ list : framework.lightning.table.Table = new framework.lightning.table.Table("list");

        /*private*/ buttons : framework.lightning.PanelSection = new framework.lightning.PanelSection("buttons", "div");

        /*private*/ listSection : framework.lightning.PanelSection = new framework.lightning.PanelSection("listSection", "div");

        /*private*/ addNew : framework.lightning.Button = new framework.lightning.Button("addNew").setLabel("Add New").setState(framework.lightning.Button.STATE_BRAND);

        public constructor(name : string) {
            super(name);
            this.addClass("CrudTable");
            this.addSection(this.buttons);
            this.addSection(this.listSection);
            this.buttons.addChild$framework_JSContainer(this.addNew);
            this.listSection.addChild$framework_JSContainer(this.list);
            this.addNew.addEventListener(this, "click");
        }

        public setFields(fields : Array<Object>) {
            this.configs["fields"] = fields;
            for(let index13545=0; index13545 < fields.length; index13545++) {
                let field = fields[index13545];
                {
                    let name : string = <string>field["name"];
                    let label : string = <string>field["label"];
                    let col : framework.lightning.table.TableColumn = new framework.lightning.table.TableColumn(name, name, label);
                    this.list.getTableColumnModel().addColumn(col);
                }
            }
            this.list.refreshColumns();
        }

        public setData$jsweet_lang_Array(data : Array<Object>) {
            this.configs["data"] = data;
            this.list.setModel(this);
            this.list.refreshData();
        }

        public setData(data? : any) : any {
            if(((data != null && data instanceof <any>Array) || data === null)) {
                return <any>this.setData$jsweet_lang_Array(data);
            } else if(((data != null) || data === null)) {
                return <any>this.setData$java_lang_Object(data);
            } else throw new Error('invalid overload');
        }

        public getFields() : Array<Object> {
            return <Array<Object>>this.configs["fields"];
        }

        public getData() : Array<Object> {
            return <Array<Object>>this.configs["data"];
        }

        public getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table : framework.lightning.table.Table, value : any, row : number, column : number) : framework.Renderable {
            let cell : framework.JSContainer = new framework.JSContainer("div");
            let data : Object = this.getData()[row];
            cell.setHtml(data.toString());
            return cell;
        }

        /**
         * 
         * @param {framework.lightning.table.Table} table
         * @param {*} value
         * @param {number} row
         * @param {number} column
         * @return {*}
         */
        public getComponent(table? : any, value? : any, row? : any, column? : any) : any {
            if(((table != null && table instanceof <any>framework.lightning.table.Table) || table === null) && ((value != null) || value === null) && ((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table, value, row, column);
            } else if(table === undefined && value === undefined && row === undefined && column === undefined) {
                return <any>this.getComponent$();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {number}
         */
        public getRowCount() : number {
            if(this.getData() != null) {
                return this.getData().length;
            }
            return 0;
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
            if(this.getData() != null) {
                let line : Object = this.getData()[rowIndex];
                if(this.getFields() != null) {
                    let cell : Object = this.getFields()[columnIndex];
                    let field : string = <string>cell["name"];
                    return line[field];
                }
            }
            return null;
        }

        /**
         * 
         * @param {*} aValue
         * @param {number} rowIndex
         * @param {number} columnIndex
         */
        public setValueAt(aValue : any, rowIndex : number, columnIndex : number) {
            let name : string = <string>this.getFields()[columnIndex]["name"];
            this.getData()[rowIndex][name] = aValue;
        }

        public abstract showForm(source : framework.JSContainer, evt : Event);

        /**
         * 
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        public performAction(source : framework.JSContainer, evt : Event) {
            this.showForm(source, evt);
        }
    }
    CrudTable["__class"] = "framework.builder.data.CrudTable";
    CrudTable["__interfaces"] = ["framework.lightning.table.TableModel","framework.interactions.Droppable","framework.lightning.table.TableCellRenderer","framework.EventListener","framework.design.Designable","framework.Renderable"];


}
namespace framework.builder.data {
    export class MultiForm extends framework.lightning.Panel implements framework.InputField<Object> {
        /*private*/ rootElement : framework.lightning.FormElement;

        /*private*/ section0 : framework.lightning.PanelSection = new framework.lightning.PanelSection("secion0", "div");

        /*private*/ map : framework.util.Map<string, framework.lightning.PanelSection> = <any>(new framework.util.HashMap<any, any>());

        select : framework.JSSelect = new framework.JSSelect("root");

        public constructor(name : string) {
            super(name);
            this.rootElement = null;
            this.addSection(this.section0);
            this.rootElement = new framework.lightning.FormElement("root", "div");
            this.rootElement.setLabel("");
            this.section0.addChild$framework_JSContainer(this.rootElement);
        }

        public setConfigs(fields : Array<Object>) {
            let count : number = 0;
            for(let index13546=0; index13546 < fields.length; index13546++) {
                let opt = fields[index13546];
                {
                    let name : string = <string>opt["name"];
                    let label : string = <string>opt["label"];
                    this.select.addOption(new framework.JSOption(label, name));
                    let form : framework.builder.data.DynaForm = new framework.builder.data.DynaForm(name);
                    let options : Array<Object> = <Array<Object>>opt["options"];
                    if(options == null) {
                        options = <Array<Object>>opt["fields"];
                    }
                    let s : framework.lightning.PanelSection = new framework.lightning.PanelSection("", "div");
                    s.addChild$framework_JSContainer(form);
                    this.addSection(s);
                    form.setFields(options);
                    s.setVisible(count === 0);
                    this.map.put(name, s);
                    count++;
                }
            }
            this.select.addEventListener(new MultiForm.MultiForm$0(this), "change");
            this.rootElement.setLabel("Type");
            this.rootElement.setInput(this.select);
            this.select.addClass("slds-input");
        }

        /**
         * 
         * @return {Object}
         */
        public getValue() : Object {
            let result : Object = <Object>new Object();
            let type : string = this.select.getValue();
            result["type"] = type;
            {
                let array13548 = this.map.keySet();
                for(let index13547=0; index13547 < array13548.length; index13547++) {
                    let name = array13548[index13547];
                    {
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,type))) {
                            let form : framework.builder.data.DynaForm = <framework.builder.data.DynaForm>this.map.get(name).getChildren()[0];
                            result[name] = form.getValue();
                            break;
                        }
                    }
                }
            }
            return result;
        }

        public setValue$jsweet_lang_Object(val : Object) {
            {
                let array13550 = this.map.keySet();
                for(let index13549=0; index13549 < array13550.length; index13549++) {
                    let name = array13550[index13549];
                    {
                        if(val[name] != null) {
                            let form : framework.builder.data.DynaForm = <framework.builder.data.DynaForm>this.map.get(name).getChildren()[0];
                            form.setValue$jsweet_lang_Object(<Object>val[name]);
                        }
                    }
                }
            }
            let type : string = <string>val["type"];
            this.select.setValue$java_lang_String(type);
            {
                let array13552 = this.map.keySet();
                for(let index13551=0; index13551 < array13552.length; index13551++) {
                    let name = array13552[index13551];
                    {
                        this.map.get(name).setVisible(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,type)));
                    }
                }
            }
        }

        /**
         * 
         * @param {Object} val
         */
        public setValue(val? : any) : any {
            if(((val != null && val instanceof <any>Object) || val === null)) {
                return <any>this.setValue$jsweet_lang_Object(val);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {string} value
         */
        public setRawValue(value : string) {
        }
    }
    MultiForm["__class"] = "framework.builder.data.MultiForm";
    MultiForm["__interfaces"] = ["framework.interactions.Droppable","framework.design.Designable","framework.InputField","framework.Renderable"];



    export namespace MultiForm {

        export class MultiForm$0 implements framework.EventListener {
            public __parent: any;
            /**
             * 
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            public performAction(source : framework.JSContainer, evt : Event) {
                let value : string = this.__parent.select.getValue();
                {
                    let array13554 = this.__parent.map.keySet();
                    for(let index13553=0; index13553 < array13554.length; index13553++) {
                        let name = array13554[index13553];
                        {
                            this.__parent.map.get(name).setVisible(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,value)));
                        }
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MultiForm$0["__interfaces"] = ["framework.EventListener"];


    }

}


framework.designables.JSDesignableTextComponent.textTags_$LI$();

framework.designables.JSDesignableTextComponent.__static_initialize();

framework.builder.Builder.websocket_$LI$();

framework.designables.JSDesignableButton.stateLabels_$LI$();

framework.lightning.Text.textTags_$LI$();

framework.lightning.Text.DECORATIONS_LABELS_$LI$();

framework.lightning.Text.DECORATIONS_$LI$();

framework.lightning.Text.ALIGNS_LABELS_$LI$();

framework.lightning.Text.ALIGNS_$LI$();

framework.lightning.Text.COLORS_LABELS_$LI$();

framework.lightning.Text.COLORS_$LI$();

framework.lightning.Text.TEXT_TYPES_LABELS_$LI$();

framework.lightning.Text.TEXT_TYPES_$LI$();

framework.lightning.Text.__static_initialize();

framework.lightning.table.Table.SELECT_ROW_EVT_$LI$();

framework.lightning.Button.states_$LI$();

framework.JSContainer.defaultRenderer_$LI$();

framework.interactions.InteractionsDecorator.droppableRenderer_$LI$();

framework.interactions.InteractionsDecorator.draggableRenderer_$LI$();

framework.InputTypes.types_$LI$();

framework.core.BeanFactory.INSTANCE_$LI$();

framework.builder.editors.EventTypes.events_$LI$();

framework.builder.data.DataType.Types_$LI$();

framework.builder.data.BasicDataEnvironment.structures_$LI$();

framework.Boot.main(null);
