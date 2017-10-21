var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
var framework;
(function (framework) {
    var builder;
    (function (builder) {
        var BuilderEventListener = (function () {
            function BuilderEventListener(jsSource) {
                this.jsSource = null;
                this.jsSource = jsSource;
            }
            BuilderEventListener.prototype.getSource = function () {
                return this.jsSource;
            };
            BuilderEventListener.prototype.setSource = function (s) {
                this.jsSource = s;
            };
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
        var data;
        (function (data) {
            var BasicDataEnvironment = (function () {
                function BasicDataEnvironment() {
                }
                BasicDataEnvironment.structures_$LI$ = function () { if (BasicDataEnvironment.structures == null)
                    BasicDataEnvironment.structures = (new java.util.LinkedList()); return BasicDataEnvironment.structures; };
                ;
                /**
                 *
                 * @return {*}
                 */
                BasicDataEnvironment.prototype.getDataStructures = function () {
                    return BasicDataEnvironment.structures_$LI$();
                };
                /**
                 *
                 * @param {framework.builder.data.DataStructure} datastructure
                 */
                BasicDataEnvironment.prototype.saveStructure = function (datastructure) {
                    for (var index4132 = BasicDataEnvironment.structures_$LI$().iterator(); index4132.hasNext();) {
                        var structure = index4132.next();
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(structure.name, datastructure.name)) {
                                structure.label = datastructure.label;
                                structure.fields = datastructure.fields;
                                return;
                            }
                        }
                    }
                    BasicDataEnvironment.structures_$LI$().add(datastructure);
                };
                /**
                 *
                 * @param {string} name
                 */
                BasicDataEnvironment.prototype.deleteStructure = function (name) {
                    for (var index4133 = BasicDataEnvironment.structures_$LI$().iterator(); index4133.hasNext();) {
                        var structure = index4133.next();
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(structure.name, name)) {
                                BasicDataEnvironment.structures_$LI$().remove(structure);
                                return;
                            }
                        }
                    }
                };
                return BasicDataEnvironment;
            }());
            data.BasicDataEnvironment = BasicDataEnvironment;
            BasicDataEnvironment["__class"] = "framework.builder.data.BasicDataEnvironment";
            BasicDataEnvironment["__interfaces"] = ["framework.builder.data.DataEnvironment"];
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var DataField = (function () {
                function DataField() {
                    this.type = framework.builder.data.DataType.TEXT;
                    this.primaryKey = false;
                    this.name = null;
                    this.label = null;
                    this.format = null;
                }
                return DataField;
            }());
            data.DataField = DataField;
            DataField["__class"] = "framework.builder.data.DataField";
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var DataStructure = (function () {
                function DataStructure() {
                    this.fields = (new java.util.LinkedList());
                    this.name = null;
                    this.label = null;
                }
                return DataStructure;
            }());
            data.DataStructure = DataStructure;
            DataStructure["__class"] = "framework.builder.data.DataStructure";
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var DataType = (function () {
                function DataType() {
                }
                DataType.Types_$LI$ = function () { if (DataType.Types == null)
                    DataType.Types = [DataType.TEXT, DataType.RICH_TEXT, DataType.DOUBLE, DataType.INTEGER, DataType.DATE, DataType.DATE_TIME, DataType.BOOLEAN, DataType.REFERENCE, DataType.FORMULA]; return DataType.Types; };
                ;
                return DataType;
            }());
            DataType.TEXT = "TEXT";
            DataType.RICH_TEXT = "RICH_TEXT";
            DataType.DOUBLE = "DOUBLE";
            DataType.INTEGER = "INTEGER";
            DataType.DATE = "DATE";
            DataType.DATE_TIME = "DATE_TIME";
            DataType.BOOLEAN = "BOOLEAN";
            DataType.REFERENCE = "REFERENCE";
            DataType.FORMULA = "FORMULA";
            data.DataType = DataType;
            DataType["__class"] = "framework.builder.data.DataType";
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_1) {
            var File = (function () {
                function File(file) {
                    this.file = null;
                    this.file = file;
                }
                File.prototype.getNative = function () {
                    return this.file;
                };
                File.prototype.getStylesheets = function () {
                    return this.getChild("stylesheets").getChildren();
                };
                File.prototype.getScripts = function () {
                    return this.getChild("scripts").getChildren();
                };
                File.prototype.getTemplates = function () {
                    return this.getChild("templates").getChildren();
                };
                File.prototype.getDataEnvironment = function () {
                    return this.getChild("data").getChildren();
                };
                File.prototype.getChild = function (name) {
                    for (var index4134 = this.getChildren().iterator(); index4134.hasNext();) {
                        var f = index4134.next();
                        {
                            if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(f.getName(), name)) {
                                return f;
                            }
                        }
                    }
                    return null;
                };
                File.prototype.createCss = function (name, listener) {
                    this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "stylesheets", listener);
                };
                File.prototype.createTemplate = function (name, listener) {
                    this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "templates", listener);
                };
                File.prototype.createScript = function (name, listener) {
                    this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, "scripts", listener);
                };
                File.prototype.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener = function (name, type, listener) {
                    this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, name, type, listener);
                };
                File.prototype.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener = function (name, title, dir, listener) {
                    var path = this.getPath() + "/" + dir;
                    framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.data.ProjectService).createFile(name, title, path, new File.File$0(this, dir, listener));
                };
                File.prototype.createFile = function (name, title, dir, listener) {
                    if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof dir === 'string') || dir === null) && ((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || listener === null)) {
                        return this.createFile$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, title, dir, listener);
                    }
                    else if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((dir != null && (dir["__interfaces"] != null && dir["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || dir.constructor != null && dir.constructor["__interfaces"] != null && dir.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || dir === null) && listener === undefined) {
                        return this.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, title, dir);
                    }
                    else
                        throw new Error('invalid overload');
                };
                File.prototype.getName = function () {
                    return this.file["name"];
                };
                File.prototype.getPath = function () {
                    return this.file["path"];
                };
                File.prototype.getData = function () {
                    return this.file["data"];
                };
                File.prototype.setData = function (data) {
                    this.file["data"] = data;
                };
                File.prototype.getDateCreated = function () {
                    return this.file["dateCreated"];
                };
                File.prototype.getDateModified = function () {
                    return this.file["dateModified"];
                };
                File.prototype.getAuthor = function () {
                    return this.file["author"];
                };
                File.prototype.getType = function () {
                    return this.file["type"];
                };
                File.prototype.getProjectType = function () {
                    return this.file["projectType"];
                };
                File.prototype.getTitle = function () {
                    return this.file["title"];
                };
                File.prototype.getChildren = function () {
                    var result = (new java.util.LinkedList());
                    {
                        var array4136 = this.file["children"];
                        for (var index4135 = 0; index4135 < array4136.length; index4135++) {
                            var o = array4136[index4135];
                            {
                                result.add(new File(o));
                            }
                        }
                    }
                    return result;
                };
                return File;
            }());
            data_1.File = File;
            File["__class"] = "framework.builder.data.File";
            (function (File) {
                var File$0 = (function () {
                    function File$0(__parent, dir, listener) {
                        this.dir = dir;
                        this.listener = listener;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    File$0.prototype.dataLoaded = function (data) {
                        this.__parent.getChild(this.dir).getNative()["children"].push(data);
                        this.listener.dataLoaded(data);
                    };
                    return File$0;
                }());
                File.File$0 = File$0;
                File$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(File = data_1.File || (data_1.File = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_2) {
            var ProjectService = (function () {
                function ProjectService() {
                }
                ProjectService.prototype.createProject = function (name, title, listener) {
                    var data = new Object();
                    data["name"] = name;
                    data["title"] = title;
                    $.get("/projects/create-project", data, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                ProjectService.prototype.getProjects = function (listener) {
                    $.get("/projects/get-projects", function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    });
                };
                ProjectService.prototype.saveFile = function (file, listener) {
                    $.post("/projects/update-file", file.getNative(), function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                ProjectService.prototype.createFile = function (name, title, dir, listener) {
                    var data = new Object();
                    data["name"] = name;
                    data["title"] = title;
                    data["dir"] = dir;
                    $.post("/projects/create-file", data, function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                return ProjectService;
            }());
            data_2.ProjectService = ProjectService;
            ProjectService["__class"] = "framework.builder.data.ProjectService";
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var EventTypes = (function () {
                function EventTypes() {
                }
                EventTypes.events_$LI$ = function () { if (EventTypes.events == null)
                    EventTypes.events = ["onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"]; return EventTypes.events; };
                ;
                return EventTypes;
            }());
            editors.EventTypes = EventTypes;
            EventTypes["__class"] = "framework.builder.editors.EventTypes";
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
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
                    for (var index4137 = 0; index4137 < keys.length; index4137++) {
                        var key = keys[index4137];
                        {
                            var value = component.styles[key];
                            instance.setStyle(key, value);
                        }
                    }
                };
                AbstractComponentFactory.prototype.configureParameters = function (instance, component, designMode) {
                    var keys = Object.keys(component.parameters);
                    for (var index4138 = 0; index4138 < keys.length; index4138++) {
                        var key = keys[index4138];
                        {
                            var value = component.parameters[key];
                            instance['setParameter$java_lang_String$java_lang_String$boolean'](key, value, designMode);
                        }
                    }
                };
                AbstractComponentFactory.prototype.configureEvents = function (instance, component) {
                    for (var index4139 = 0; index4139 < component.events.length; index4139++) {
                        var event_1 = component.events[index4139];
                        {
                            var listener = new framework.builder.BuilderEventListener(event_1.source);
                            instance.addEventListener(listener, event_1.type);
                        }
                    }
                };
                /**
                 *
                 * @param {framework.builder.marshalling.Component} component
                 * @param {boolean} designMode
                 * @return {*}
                 */
                AbstractComponentFactory.prototype.build = function (component, designMode) {
                    var instance = this.createInstance(designMode);
                    this.configureStyles(instance, component);
                    this.configureParameters(instance, component, designMode);
                    this.configureEvents(instance, component);
                    this.decorateForDesignMode(instance, designMode);
                    return instance;
                };
                AbstractComponentFactory.prototype.decorateForDesignMode = function (instance, designMode) {
                    this.decorateDroppable(instance, designMode);
                    this.decorateCallSelector(instance, designMode);
                };
                AbstractComponentFactory.prototype.decorateDroppable = function (instance, designMode) {
                    framework.designables.DesignableDelegate.setDroppableOptions(instance, designMode);
                };
                AbstractComponentFactory.prototype.decorateCallSelector = function (container, designMode) {
                    if (designMode) {
                        container.addEventListener(new framework.builder.SelectComponentEvent((framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.Selector))), "click");
                    }
                };
                return AbstractComponentFactory;
            }());
            libraries.AbstractComponentFactory = AbstractComponentFactory;
            AbstractComponentFactory["__class"] = "framework.builder.libraries.AbstractComponentFactory";
            AbstractComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var BasicComponentFactoryRegistry = (function () {
                function BasicComponentFactoryRegistry() {
                    /*private*/ this.factories = (new java.util.HashMap());
                }
                /**
                 *
                 * @param {string} identifier
                 * @param {*} factory
                 */
                BasicComponentFactoryRegistry.prototype.registerComponentFactory = function (identifier, factory) {
                    if (!this.factories.containsKey(identifier)) {
                        this.factories.put(identifier, factory);
                    }
                    else {
                        throw new java.lang.RuntimeException("duplicate component factory:->" + identifier);
                    }
                };
                /**
                 *
                 * @param {string} identifier
                 * @return {*}
                 */
                BasicComponentFactoryRegistry.prototype.getComponentFactory = function (identifier) {
                    if (this.factories.containsKey(identifier)) {
                        return this.factories.get(identifier);
                    }
                    else {
                        throw new java.lang.RuntimeException("Missing ComponentFactory with identifier:" + identifier);
                    }
                };
                return BasicComponentFactoryRegistry;
            }());
            libraries.BasicComponentFactoryRegistry = BasicComponentFactoryRegistry;
            BasicComponentFactoryRegistry["__class"] = "framework.builder.libraries.BasicComponentFactoryRegistry";
            BasicComponentFactoryRegistry["__interfaces"] = ["framework.builder.libraries.ComponentFactoryRegistry"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var marshalling;
        (function (marshalling) {
            var BuilderEvent = (function () {
                function BuilderEvent() {
                    this.type = null;
                    this.source = null;
                }
                return BuilderEvent;
            }());
            marshalling.BuilderEvent = BuilderEvent;
            BuilderEvent["__class"] = "framework.builder.marshalling.BuilderEvent";
        })(marshalling = builder.marshalling || (builder.marshalling = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var marshalling;
        (function (marshalling) {
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
            marshalling.Component = Component;
            Component["__class"] = "framework.builder.marshalling.Component";
        })(marshalling = builder.marshalling || (builder.marshalling = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var marshalling;
        (function (marshalling) {
            var MarshallUtil = (function () {
                function MarshallUtil() {
                }
                MarshallUtil.extract = function (designable) {
                    var c = new framework.builder.marshalling.Component();
                    for (var index4140 = designable.getStyleNames().iterator(); index4140.hasNext();) {
                        var s = index4140.next();
                        {
                            c.styles[s] = designable.getStyle(s);
                        }
                    }
                    for (var index4141 = designable.getAttributeNames().iterator(); index4141.hasNext();) {
                        var s = index4141.next();
                        {
                            c.parameters[s] = designable.getAttribute(s);
                        }
                    }
                    for (var index4142 = designable.getListeners().keySet().iterator(); index4142.hasNext();) {
                        var key = index4142.next();
                        {
                            for (var index4143 = designable.getListeners().get(key).iterator(); index4143.hasNext();) {
                                var l = index4143.next();
                                {
                                    if (l != null && l instanceof framework.builder.BuilderEventListener) {
                                        var bel = l;
                                        var be = new framework.builder.marshalling.BuilderEvent();
                                        be.source = bel.getSource();
                                        be.type = key;
                                        c.events.push(be);
                                    }
                                }
                            }
                        }
                    }
                    for (var index4144 = designable.getDesignables().iterator(); index4144.hasNext();) {
                        var child = index4144.next();
                        {
                            var childC = MarshallUtil.extract(child);
                            c.children.push(childC);
                        }
                    }
                    return c;
                };
                return MarshallUtil;
            }());
            marshalling.MarshallUtil = MarshallUtil;
            MarshallUtil["__class"] = "framework.builder.marshalling.MarshallUtil";
        })(marshalling = builder.marshalling || (builder.marshalling = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var SelectComponentEvent = (function () {
            function SelectComponentEvent(selector) {
                /*private*/ this.selector = null;
                this.selector = selector;
            }
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            SelectComponentEvent.prototype.performAction = function (source, evt) {
                evt.stopPropagation();
                this.selector.select(source);
            };
            return SelectComponentEvent;
        }());
        builder.SelectComponentEvent = SelectComponentEvent;
        SelectComponentEvent["__class"] = "framework.builder.SelectComponentEvent";
        SelectComponentEvent["__interfaces"] = ["framework.EventListener"];
    })(builder = framework.builder || (framework.builder = {}));
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
            return BasicDecoratorRegistry;
        }());
        core.BasicDecoratorRegistry = BasicDecoratorRegistry;
        BasicDecoratorRegistry["__class"] = "framework.core.BasicDecoratorRegistry";
        BasicDecoratorRegistry["__interfaces"] = ["framework.core.DecoratorsRegistry"];
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
                for (var index4145 = this.beans.keySet().iterator(); index4145.hasNext();) {
                    var key = index4145.next();
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
        var Global = (function (_super) {
            __extends(Global, _super);
            function Global() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Global;
        }(Object));
        Global.idCount = 0;
        core.Global = Global;
        Global["__class"] = "framework.core.Global";
    })(core = framework.core || (framework.core = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
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
        design.Option = Option;
        Option["__class"] = "framework.design.Option";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var Parameter = (function () {
            function Parameter(name, label, type, category) {
                this.options = (new java.util.LinkedList());
                this.name = null;
                this.label = null;
                this.type = null;
                this.category = null;
                this.name = name;
                this.label = label;
                this.type = type;
                this.category = category;
            }
            return Parameter;
        }());
        design.Parameter = Parameter;
        Parameter["__class"] = "framework.design.Parameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var DesignableDelegate = (function () {
            function DesignableDelegate(ui) {
                /*private*/ this.component = new framework.builder.marshalling.Component();
                this.ui = null;
                this.ui = ui;
            }
            DesignableDelegate.prototype.getDesignable = function () {
                return this.ui;
            };
            DesignableDelegate.prototype.setParameter = function (key, value, designMode) {
                this.component.parameters[key] = value;
            };
            DesignableDelegate.prototype.getComponent = function () {
                return this.component;
            };
            DesignableDelegate.prototype.getParameters = function () {
                var params = (new java.util.LinkedList());
                params.add(new framework.design.NameParameter("Name", "Basic"));
                params.add(new framework.design.AttributeParameter("class", "Style class", "Basic"));
                return params;
            };
            DesignableDelegate.setDroppableOptions = function (instance, designMode) {
                if (designMode) {
                    var options = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DroppableOptions", "def.jqueryui.jqueryui.DroppableEvents"] });
                    options.greedy = true;
                    options.accept = ".designer-component";
                    options.tolerance = "pointer";
                    options.activeClass = "drop-active";
                    options.drop = function (event, param) {
                        event.stopPropagation();
                        var identifier = event.srcElement.getAttribute("identifier");
                        var factory = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(identifier);
                        var container = factory.build(new framework.builder.marshalling.Component(), true);
                        try {
                            instance.addDesignable(container);
                        }
                        catch (e) {
                            alert(e.message);
                        }
                        ;
                        container.render();
                        framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.editors.Structure).reload();
                        framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.editors.Structure).render();
                    };
                    instance.setDroppableOptions(options);
                }
            };
            return DesignableDelegate;
        }());
        designables.DesignableDelegate = DesignableDelegate;
        DesignableDelegate["__class"] = "framework.designables.DesignableDelegate";
    })(designables = framework.designables || (framework.designables = {}));
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
                if (opts == null) {
                }
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
    var lightning;
    (function (lightning) {
        var table;
        (function (table) {
            var Alignment;
            (function (Alignment) {
                Alignment[Alignment["RIGHT"] = 0] = "RIGHT";
                Alignment[Alignment["LEFT"] = 1] = "LEFT";
                Alignment[Alignment["NONE"] = 2] = "NONE";
            })(Alignment = table.Alignment || (table.Alignment = {}));
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table_1) {
            var DefaultTableCellRenderer = (function () {
                function DefaultTableCellRenderer() {
                }
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {*}
                 */
                DefaultTableCellRenderer.prototype.getComponent = function (table, value, row, column) {
                    var truncate = new framework.JSContainer("div").addClass("slds-truncate");
                    var s = "";
                    if (value != null) {
                        s = value.toString();
                    }
                    truncate.setHtml(s).setAttribute("title", s);
                    return truncate;
                };
                return DefaultTableCellRenderer;
            }());
            table_1.DefaultTableCellRenderer = DefaultTableCellRenderer;
            DefaultTableCellRenderer["__class"] = "framework.lightning.table.DefaultTableCellRenderer";
            DefaultTableCellRenderer["__interfaces"] = ["framework.lightning.table.TableCellRenderer"];
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table) {
            var DefaultTableColumnModel = (function () {
                function DefaultTableColumnModel() {
                    /*private*/ this.columns = (new java.util.LinkedList());
                }
                /**
                 *
                 * @param {framework.lightning.table.TableColumn} aColumn
                 */
                DefaultTableColumnModel.prototype.addColumn = function (aColumn) {
                    this.columns.add(aColumn);
                };
                /**
                 *
                 * @param {framework.lightning.table.TableColumn} column
                 */
                DefaultTableColumnModel.prototype.removeColumn = function (column) {
                    this.columns.remove(column);
                };
                /**
                 *
                 * @return {number}
                 */
                DefaultTableColumnModel.prototype.getColumnCount = function () {
                    return this.columns.size();
                };
                /**
                 *
                 * @param {*} columnIdentifier
                 * @return {number}
                 */
                DefaultTableColumnModel.prototype.getColumnIndex = function (columnIdentifier) {
                    for (var i = 0; i < this.columns.size(); i++) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.columns.get(i).getIdentifier(), columnIdentifier)) {
                            return i;
                        }
                    }
                    ;
                    return -1;
                };
                /**
                 *
                 * @param {number} columnIndex
                 * @return {framework.lightning.table.TableColumn}
                 */
                DefaultTableColumnModel.prototype.getColumn = function (columnIndex) {
                    return this.columns.get(columnIndex);
                };
                return DefaultTableColumnModel;
            }());
            table.DefaultTableColumnModel = DefaultTableColumnModel;
            DefaultTableColumnModel["__class"] = "framework.lightning.table.DefaultTableColumnModel";
            DefaultTableColumnModel["__interfaces"] = ["framework.lightning.table.TableColumnModel"];
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var renderer;
    (function (renderer) {
        var ContainerRenderer = (function () {
            function ContainerRenderer() {
            }
            ContainerRenderer.prototype.decorate = function (c) {
                for (var index4146 = framework.core.BeanFactory.getInstance().getBeanOfType("framework.core.DecoratorsRegistry").getDecorators().iterator(); index4146.hasNext();) {
                    var dec = index4146.next();
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
                            if (parent != null && parent instanceof framework.JSHTMLFragment) {
                                $(parent).find("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
                            }
                            else {
                                root.appendChild(njq);
                            }
                        }
                    }
                    else {
                        if (parent != null && parent instanceof framework.JSHTMLFragment) {
                            $("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
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
                for (var index4147 = container.getCommands().iterator(); index4147.hasNext();) {
                    var command = index4147.next();
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
                for (var index4148 = c.getListeners().keySet().iterator(); index4148.hasNext();) {
                    var key = index4148.next();
                    {
                        var listeners = c.getListeners().get(key);
                        njq.addEventListener(key, (function (listeners) {
                            return function (evt) {
                                _this.synchronizeFields(c.getRoot().getNative(), c.getRoot());
                                for (var index4149 = listeners.iterator(); index4149.hasNext();) {
                                    var l = index4149.next();
                                    {
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
                for (var index4150 = jsfield.getChildren().iterator(); index4150.hasNext();) {
                    var c = index4150.next();
                    {
                        this.synchronizeFields(document.getElementById(c.getId()), c);
                    }
                }
            };
            ContainerRenderer.prototype.renderAttributes = function (njq, c, changed) {
                if (changed) {
                    {
                        var array4152 = c.getChangedAttributes();
                        for (var index4151 = 0; index4151 < array4152.length; index4151++) {
                            var key = array4152[index4151];
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
                    for (var index4153 = c.getAttributeNames().iterator(); index4153.hasNext();) {
                        var key = index4153.next();
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
                        var array4155 = c.getChangedStyles();
                        for (var index4154 = 0; index4154 < array4155.length; index4154++) {
                            var key = array4155[index4154];
                            {
                                njq.style.setProperty(key, c.getStyle(key));
                            }
                        }
                    }
                }
                else {
                    for (var index4156 = c.getStyleNames().iterator(); index4156.hasNext();) {
                        var key = index4156.next();
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
    var Boot = (function () {
        function Boot() {
        }
        Boot.main = function (args) {
            var factory = framework.core.BeanFactory.getInstance();
            var decoratorRegistry = new framework.core.BasicDecoratorRegistry();
            decoratorRegistry.registerDecorator(new framework.interactions.InteractionsDecorator());
            factory.addBean("framework.core.DecoratorsRegistry", decoratorRegistry);
            var componentFactoryRegistry = new framework.builder.libraries.BasicComponentFactoryRegistry();
            var txtTags = ["h1", "h2", "h3", "h4", "h5", "span", "p", "label"];
            var txtTagsLabels = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Normal Text", "paragraph", "Label"];
            var tags = ["div", "a", "img", "ol", "ul", "li", "form", "fieldset", "select", "button"];
            for (var i = 0; i < txtTags.length; i++) {
                var tag = txtTags[i];
                var defaultText = txtTagsLabels[i];
                componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.TextComponentFactory(tag, defaultText));
            }
            ;
            for (var index4157 = 0; index4157 < tags.length; index4157++) {
                var tag = tags[index4157];
                {
                    componentFactoryRegistry.registerComponentFactory("html:" + tag, new framework.builder.libraries.BasicComponentFactory(tag));
                }
            }
            componentFactoryRegistry.registerComponentFactory("html:input", new Boot.Boot$0("html:input"));
            componentFactoryRegistry.registerComponentFactory("html:textarea", new Boot.Boot$1("html:input"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn", new Boot.Boot$2("lgt:btn"));
            factory.addBean("framework.builder.libraries.ComponentFactoryRegistry", componentFactoryRegistry);
            factory.addBean(framework.builder.Selector, new framework.builder.Selector());
            factory.addBean("framework.builder.data.DataEnvironment", new framework.builder.data.BasicDataEnvironment());
            factory.addBean(framework.builder.data.ProjectService, new framework.builder.data.ProjectService());
            new framework.builder.Builder("builder").render();
        };
        return Boot;
    }());
    framework.Boot = Boot;
    Boot["__class"] = "framework.Boot";
    (function (Boot) {
        var Boot$0 = (function (_super) {
            __extends(Boot$0, _super);
            function Boot$0(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$0.prototype.createInstance = function (designMode) {
                var input = new framework.designables.JSDesignableInput("Input");
                return input;
            };
            return Boot$0;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$0 = Boot$0;
        Boot$0["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$1 = (function (_super) {
            __extends(Boot$1, _super);
            function Boot$1(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$1.prototype.createInstance = function (designMode) {
                var input = new framework.designables.JSDesignableTextArea("TextArea");
                return input;
            };
            return Boot$1;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$1 = Boot$1;
        Boot$1["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$2 = (function (_super) {
            __extends(Boot$2, _super);
            function Boot$2(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$2.prototype.createInstance = function (designMode) {
                var btn = new framework.designables.JSDesignableButton("Button");
                btn.setLabel("Button");
                return btn;
            };
            return Boot$2;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$2 = Boot$2;
        Boot$2["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
    })(Boot = framework.Boot || (framework.Boot = {}));
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
                 * @param {boolean} designMode
                 * @return {*}
                 */
                BasicComponentFactory.prototype.createInstance = function (designMode) {
                    var container = new framework.designables.JSDesignable(this.tag, this.tag);
                    return container;
                };
                return BasicComponentFactory;
            }(framework.builder.libraries.AbstractComponentFactory));
            libraries.BasicComponentFactory = BasicComponentFactory;
            BasicComponentFactory["__class"] = "framework.builder.libraries.BasicComponentFactory";
            BasicComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var AbstractBooleanParameter = (function (_super) {
            __extends(AbstractBooleanParameter, _super);
            function AbstractBooleanParameter(name, label, category) {
                return _super.call(this, name, label, "Boolean", category) || this;
            }
            return AbstractBooleanParameter;
        }(framework.design.Parameter));
        design.AbstractBooleanParameter = AbstractBooleanParameter;
        AbstractBooleanParameter["__class"] = "framework.design.AbstractBooleanParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var AttributeParameter = (function (_super) {
            __extends(AttributeParameter, _super);
            function AttributeParameter(name, label, category) {
                return _super.call(this, name, label, "String", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            AttributeParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.AttributeEditor();
                editor.setProperty(designable, this);
                return editor;
            };
            return AttributeParameter;
        }(framework.design.Parameter));
        design.AttributeParameter = AttributeParameter;
        AttributeParameter["__class"] = "framework.design.AttributeParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var EventScriptParameter = (function (_super) {
            __extends(EventScriptParameter, _super);
            function EventScriptParameter(name, label, category) {
                var _this = _super.call(this, name, label, "textarea", category) || this;
                _this.eventTypeEditor = null;
                return _this;
            }
            EventScriptParameter.prototype.setEventTypeEditor = function (editor) {
                this.eventTypeEditor = editor;
            };
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            EventScriptParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.EventScriptEditor("script", this.eventTypeEditor);
                editor.setProperty(designable, this);
                return editor;
            };
            return EventScriptParameter;
        }(framework.design.Parameter));
        design.EventScriptParameter = EventScriptParameter;
        EventScriptParameter["__class"] = "framework.design.EventScriptParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var EventTypeParameter = (function (_super) {
            __extends(EventTypeParameter, _super);
            function EventTypeParameter(name, label, category) {
                return _super.call(this, name, label, "select", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            EventTypeParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.EventTypeEditor("eventType");
                for (var index4158 = this.options.iterator(); index4158.hasNext();) {
                    var opt = index4158.next();
                    {
                        var o = new framework.JSOption(opt.text, opt.value);
                        editor.addOption(o);
                    }
                }
                editor.setProperty(designable, this);
                return editor;
            };
            return EventTypeParameter;
        }(framework.design.Parameter));
        design.EventTypeParameter = EventTypeParameter;
        EventTypeParameter["__class"] = "framework.design.EventTypeParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var NameParameter = (function (_super) {
            __extends(NameParameter, _super);
            function NameParameter(label, category) {
                return _super.call(this, "name", label, "String", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            NameParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.NameEditor();
                editor.setProperty(designable, this);
                return editor;
            };
            return NameParameter;
        }(framework.design.Parameter));
        design.NameParameter = NameParameter;
        NameParameter["__class"] = "framework.design.NameParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var SelectParameter = (function (_super) {
            __extends(SelectParameter, _super);
            function SelectParameter(name, label, category) {
                return _super.call(this, name, label, "select", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            SelectParameter.prototype.getEditor = function (designable) {
                return null;
            };
            return SelectParameter;
        }(framework.design.Parameter));
        design.SelectParameter = SelectParameter;
        SelectParameter["__class"] = "framework.design.SelectParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var StyleParameter = (function (_super) {
            __extends(StyleParameter, _super);
            function StyleParameter(name, label, category) {
                return _super.call(this, name, label, "String", "Basic") || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            StyleParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.StyleEditor();
                editor.setProperty(designable, this);
                return editor;
            };
            return StyleParameter;
        }(framework.design.Parameter));
        design.StyleParameter = StyleParameter;
        StyleParameter["__class"] = "framework.design.StyleParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var TextParameter = (function (_super) {
            __extends(TextParameter, _super);
            function TextParameter(name, label, category) {
                return _super.call(this, name, label, "string", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            TextParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.TextEditor("text");
                editor.setProperty(designable, this);
                return editor;
            };
            return TextParameter;
        }(framework.design.Parameter));
        design.TextParameter = TextParameter;
        TextParameter["__class"] = "framework.design.TextParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var design;
    (function (design) {
        var ValueParameter = (function (_super) {
            __extends(ValueParameter, _super);
            function ValueParameter(name, label, category) {
                return _super.call(this, name, label, "String", category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            ValueParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.ValuePropertyEditor("s");
                editor.setProperty(designable, this);
                return editor;
            };
            return ValueParameter;
        }(framework.design.Parameter));
        design.ValueParameter = ValueParameter;
        ValueParameter["__class"] = "framework.design.ValueParameter";
    })(design = framework.design || (framework.design = {}));
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
            /**
             *
             */
            /*private*/ this.droppableOptions = null;
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
            if (((typeof name === 'string') || name === null) && ((typeof tag === 'string') || tag === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.id = null;
                this.data = null;
                this.parent = null;
                this.droppableOptions = null;
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
                this.droppableOptions = null;
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
        JSContainer.prototype.getNative = function () {
            var elem = document.getElementById(this.getId());
            if (elem != null) {
                return elem;
            }
            else {
                throw new java.lang.RuntimeException("The component " + this.getId() + " has not been rendered yet. Cannot retrieve native dom");
            }
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
            framework.core.Global.idCount++;
            return framework.core.Global.idCount + "";
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
            for (var index4159 = 0; index4159 < aStyles.length; index4159++) {
                var style = aStyles[index4159];
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
            this.setAttribute("name", name);
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
                for (var index4160 = this.children.iterator(); index4160.hasNext();) {
                    var child = index4160.next();
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
            if (this.parent == null)
                this.render$jsweet_dom_HTMLElement(null);
            else
                this.render$jsweet_dom_HTMLElement(document.getElementById(this.parent.getId()));
        };
        JSContainer.prototype.render$jsweet_dom_HTMLElement = function (parent) {
            if (this.renderers.isEmpty()) {
                this.renderers.add(JSContainer.DEFAULT_RENDERER_$LI$());
            }
            if (!this.renderers.contains(JSContainer.DEFAULT_RENDERER_$LI$())) {
                this.renderers.add(0, JSContainer.DEFAULT_RENDERER_$LI$());
            }
            for (var index4161 = this.renderers.iterator(); index4161.hasNext();) {
                var renderer_1 = index4161.next();
                renderer_1.doRender(this, parent);
            }
            for (var index4162 = this.getChildren().iterator(); index4162.hasNext();) {
                var child = index4162.next();
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
                var array4164 = this.parent.getAttribute("class").split(" ");
                for (var index4163 = 0; index4163 < array4164.length; index4163++) {
                    var s = array4164[index4163];
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
         * @return {*}
         */
        JSContainer.prototype.getDroppableOptions = function () {
            return this.droppableOptions;
        };
        JSContainer.prototype.setDroppableOptions = function (options) {
            this.droppableOptions = options;
        };
        return JSContainer;
    }());
    framework.JSContainer = JSContainer;
    JSContainer["__class"] = "framework.JSContainer";
    JSContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        var libraries;
        (function (libraries) {
            var TextComponentFactory = (function (_super) {
                __extends(TextComponentFactory, _super);
                function TextComponentFactory(tag, defaultTxt) {
                    var _this = _super.call(this, tag) || this;
                    _this.defaultText = null;
                    _this.defaultText = defaultTxt;
                    return _this;
                }
                /**
                 *
                 * @param {boolean} designMode
                 * @return {*}
                 */
                TextComponentFactory.prototype.createInstance = function (designMode) {
                    var instance = new framework.designables.JSDesignableTextComponent(this.tag, this.tag);
                    instance.setHtml(this.defaultText);
                    return instance;
                };
                return TextComponentFactory;
            }(framework.builder.libraries.BasicComponentFactory));
            libraries.TextComponentFactory = TextComponentFactory;
            TextComponentFactory["__class"] = "framework.builder.libraries.TextComponentFactory";
            TextComponentFactory["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Component = (function (_super) {
            __extends(Component, _super);
            function Component(identifier, initial, label) {
                var _this = _super.call(this, identifier, "div") || this;
                /*private*/ _this.titleFigure = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");
                /*private*/ _this.avatar = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large");
                /*private*/ _this.initial = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");
                /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-app-launcher__title-label");
                /*private*/ _this.componentFactoryRegistry = (framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry"));
                _this.setAttribute("identifier", identifier);
                _this.addClass("designer-component");
                _this.addChild$framework_JSContainer(_this.titleFigure.setAttribute("identifier", identifier));
                _this.titleFigure.addChild$framework_JSContainer(_this.avatar.setAttribute("identifier", identifier));
                _this.avatar.addChild$framework_JSContainer(_this.initial.setAttribute("identifier", identifier));
                _this.initial.setAttribute("title", label);
                _this.initial.setHtml(initial);
                _this.titleFigure.addChild$framework_JSContainer(_this.title.setAttribute("identifier", identifier));
                _this.title.setHtml(label);
                return _this;
            }
            Component.prototype.getFactory = function () {
                return this.componentFactoryRegistry.getComponentFactory(this.getName());
            };
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
        Component["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var AbstractEditor = (function (_super) {
                __extends(AbstractEditor, _super);
                function AbstractEditor(name, tag) {
                    var _this = _super.call(this, name, tag) || this;
                    /*private*/ _this.projectService = (framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.data.ProjectService));
                    _this.file = null;
                    return _this;
                }
                AbstractEditor.prototype.save = function () {
                    var data = this.getMarshall();
                    this.file.setData(data);
                    this.projectService.saveFile(this.file, new AbstractEditor.AbstractEditor$0(this));
                };
                /**
                 *
                 * @param {framework.builder.marshalling.BuilderEvent} data
                 */
                AbstractEditor.prototype.consume = function (data) {
                    if (((data != null) || data === null)) {
                        return this.consume$java_lang_Object(data);
                    }
                    else
                        throw new Error('invalid overload');
                };
                AbstractEditor.prototype.consume$java_lang_Object = function (data) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                AbstractEditor.prototype.open = function (f) {
                    this.file = f;
                    if (this.file.getData() != null && this.file.getData().length > 0) {
                        var unmarshaled = this.unmarshall(this.file);
                        this.consume(unmarshaled);
                    }
                    else {
                        this.consume(this.createNew(this.file));
                    }
                };
                return AbstractEditor;
            }(framework.JSContainer));
            editors.AbstractEditor = AbstractEditor;
            AbstractEditor["__class"] = "framework.builder.editors.AbstractEditor";
            AbstractEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
            (function (AbstractEditor) {
                var AbstractEditor$0 = (function () {
                    function AbstractEditor$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    AbstractEditor$0.prototype.dataLoaded = function (data) {
                        alert(JSON.stringify(data));
                    };
                    return AbstractEditor$0;
                }());
                AbstractEditor.AbstractEditor$0 = AbstractEditor$0;
                AbstractEditor$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(AbstractEditor = editors.AbstractEditor || (editors.AbstractEditor = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_1) {
        var editors;
        (function (editors) {
            var Structure = (function (_super) {
                __extends(Structure, _super);
                function Structure(name, root, builder) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.ul = new framework.JSContainer("ul");
                    /*private*/ _this.liCss = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    /*private*/ _this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    /*private*/ _this.selected = null;
                    /*private*/ _this.builder = null;
                    _this.root = null;
                    _this.liJS = null;
                    _this.liData = null;
                    _this.liTemplates = null;
                    _this.addClass("structure");
                    _this.builder = builder;
                    _this.addClass("slds-tree_container");
                    _this.addChild$framework_JSContainer(_this.ul.addClass("slds-tree").setAttribute("role", "tree"));
                    _this.root = root;
                    _this.reload();
                    return _this;
                }
                Structure.prototype.reload = function () {
                    this.ul.getChildren().clear();
                    this.ul.setRendered(false);
                    this.liJS = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.liCss = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.liData = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.liTemplates = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.ul.addChild$framework_JSContainer(this.liRoot);
                    this.addNode(this.root, this.liRoot, 1);
                    this.liJS.addChild$framework_JSContainer(new framework.TreeItem("", "JS"));
                    this.ul.addChild$framework_JSContainer(this.liJS);
                    this.liCss.addChild$framework_JSContainer(new framework.TreeItem("", "CSS"));
                    this.ul.addChild$framework_JSContainer(this.liCss);
                    this.liTemplates.addChild$framework_JSContainer(new framework.TreeItem("", "Templates"));
                    this.ul.addChild$framework_JSContainer(this.liTemplates);
                    this.liData.addChild$framework_JSContainer(new framework.TreeItem("", "Data"));
                    this.ul.addChild$framework_JSContainer(this.liData);
                    this.renderFiles();
                };
                Structure.prototype.unselect = function (c) {
                };
                Structure.prototype.renderFiles = function () {
                    var listener = new Structure.Structure$0(this);
                    for (var index4165 = this.builder.getProject().getStylesheets().iterator(); index4165.hasNext();) {
                        var f = index4165.next();
                        {
                            var item = new framework.TreeItem(f.getName(), f.getTitle());
                            item.setData(f);
                            item.addEventListener(listener, "click");
                            var li = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                            this.liCss.addChild$framework_JSContainer(li);
                        }
                    }
                    for (var index4166 = this.builder.getProject().getScripts().iterator(); index4166.hasNext();) {
                        var f = index4166.next();
                        {
                            var item = new framework.TreeItem(f.getName(), f.getTitle());
                            item.setData(f);
                            item.addEventListener(listener, "click");
                            var li = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                            this.liJS.addChild$framework_JSContainer(li);
                        }
                    }
                    for (var index4167 = this.builder.getProject().getDataEnvironment().iterator(); index4167.hasNext();) {
                        var f = index4167.next();
                        {
                            var item = new framework.TreeItem(f.getName(), f.getTitle());
                            item.setData(f);
                            item.addEventListener(listener, "click");
                            var li = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                            this.liData.addChild$framework_JSContainer(li);
                        }
                    }
                    for (var index4168 = this.builder.getProject().getTemplates().iterator(); index4168.hasNext();) {
                        var f = index4168.next();
                        {
                            var item = new framework.TreeItem(f.getName(), f.getTitle());
                            item.setData(f);
                            item.addEventListener(listener, "click");
                            var li = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "2");
                            this.liTemplates.addChild$framework_JSContainer(li);
                        }
                    }
                };
                Structure.prototype.addNode = function (ctn, li, level) {
                    var item = new framework.builder.editors.StructureTreeItem(ctn.getName(), ctn);
                    li.addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");
                    item.addEventListener(new Structure.Structure$1(this), "click");
                    item.addEventListener(new Structure.Structure$2(this, item), "dblclick");
                    var designables = ctn.getDesignables();
                    if (designables != null && designables.size() > 0) {
                        item.leaf(false);
                        var children = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                        li.addChild$framework_JSContainer(children);
                        for (var index4169 = ctn.getDesignables().iterator(); index4169.hasNext();) {
                            var c = index4169.next();
                            {
                                var child = new framework.JSContainer("li");
                                children.addChild$framework_JSContainer(child);
                                this.addNode(c, child, level + 1);
                            }
                        }
                    }
                    else {
                        item.leaf(true);
                    }
                };
                return Structure;
            }(framework.JSContainer));
            editors.Structure = Structure;
            Structure["__class"] = "framework.builder.editors.Structure";
            Structure["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
            (function (Structure) {
                var Structure$0 = (function () {
                    function Structure$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    Structure$0.prototype.performAction = function (source, evt) {
                        var f = source.getData();
                        if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "html")) {
                            var editor = new framework.builder.editors.HTMLEditor(f.getName());
                            this.__parent.builder.openEditor(f.getName(), editor);
                            editor.open(f);
                        }
                        else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "css")) {
                            var editor = new framework.builder.editors.CSSEditor(f.getName());
                            this.__parent.builder.openEditor(f.getName(), editor);
                            editor.open(f);
                        }
                        else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "js")) {
                            var editor = new framework.builder.editors.JavascriptEditor(f.getName());
                            this.__parent.builder.openEditor(f.getName(), editor);
                            editor.open(f);
                        }
                    };
                    return Structure$0;
                }());
                Structure.Structure$0 = Structure$0;
                Structure$0["__interfaces"] = ["framework.EventListener"];
                var Structure$1 = (function () {
                    function Structure$1(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    Structure$1.prototype.performAction = function (source, evt) {
                        evt.stopPropagation();
                        var itemS = source;
                        if (this.__parent.selected != null) {
                            this.__parent.selected.select(false);
                        }
                        this.__parent.selected = itemS;
                        this.__parent.selected.select(true);
                    };
                    return Structure$1;
                }());
                Structure.Structure$1 = Structure$1;
                Structure$1["__interfaces"] = ["framework.EventListener"];
                var Structure$2 = (function () {
                    function Structure$2(__parent, item) {
                        this.item = item;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    Structure$2.prototype.performAction = function (source, evt) {
                        evt.stopPropagation();
                        var editor = new framework.builder.editors.EventEditor("editor", this.__parent.root);
                        this.__parent.builder.openEditor("Event editor", editor);
                        editor.setDesignable(this.item.getDesignable());
                    };
                    return Structure$2;
                }());
                Structure.Structure$2 = Structure$2;
                Structure$2["__interfaces"] = ["framework.EventListener"];
            })(Structure = editors.Structure || (editors.Structure = {}));
        })(editors = builder_1.editors || (builder_1.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var FilesList = (function (_super) {
            __extends(FilesList, _super);
            function FilesList(name) {
                var _this = _super.call(this, name, "ul") || this;
                _this.addClass("slds-grid slds-grid_pull-padded slds-wrap");
                return _this;
            }
            FilesList.prototype.addFile = function (file) {
                var li = new framework.JSContainer("li");
                li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3");
                this.addChild$framework_JSContainer(li);
                li.addChild$framework_JSContainer(file);
                return this;
            };
            return FilesList;
        }(framework.JSContainer));
        builder.FilesList = FilesList;
        FilesList["__class"] = "framework.builder.FilesList";
        FilesList["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var DataComposer = (function (_super) {
                __extends(DataComposer, _super);
                function DataComposer(name, tag) {
                    var _this = _super.call(this, name, tag) || this;
                    /*private*/ _this.header = new framework.lightning.GlobalHeader("header");
                    /*private*/ _this.addNew = new framework.lightning.Button();
                    _this.dataEnvironment = null;
                    _this.dataEnvironment = (framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.DataEnvironment"));
                    _this.addNew.setLabel("Add New");
                    _this.header.addChild$framework_JSContainer(_this.addNew);
                    _this.addChild$framework_JSContainer(_this.header);
                    _this.addNew.setState(framework.lightning.Button.STATE_BRAND);
                    _this.addNew.addEventListener(new DataComposer.DataComposer$0(_this), "click");
                    return _this;
                }
                return DataComposer;
            }(framework.JSContainer));
            libraries.DataComposer = DataComposer;
            DataComposer["__class"] = "framework.builder.libraries.DataComposer";
            DataComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
            (function (DataComposer) {
                var DataComposer$0 = (function () {
                    function DataComposer$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataComposer$0.prototype.performAction = function (source, evt) {
                        var name = prompt("Label of Data structure");
                        var structure = new framework.builder.data.DataStructure();
                        structure.name = name;
                        structure.label = name;
                        this.__parent.dataEnvironment.saveStructure(structure);
                        var item = new framework.builder.libraries.DataItem(name, structure);
                        this.__parent.addChild(item);
                    };
                    return DataComposer$0;
                }());
                DataComposer.DataComposer$0 = DataComposer$0;
                DataComposer$0["__interfaces"] = ["framework.EventListener"];
            })(DataComposer = libraries.DataComposer || (libraries.DataComposer = {}));
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Selector = (function (_super) {
            __extends(Selector, _super);
            function Selector() {
                var _this = _super.call(this, "selector", "div") || this;
                /*private*/ _this.selected = null;
                _this.visualEditor = null;
                _this.addClass("designer-selector");
                _this.addEventListener(_this, "click");
                return _this;
            }
            Selector.prototype.setVisualEditor = function (editor) {
                this.visualEditor = editor;
            };
            Selector.prototype.getSelected = function () {
                return this.selected;
            };
            Selector.prototype.select = function (component) {
                try {
                    var jqSelector = $(this.getNative());
                    var jqComponent = $(component.getNative());
                    jqSelector.width(jqComponent.outerWidth());
                    jqSelector.height(jqComponent.outerHeight());
                    var options = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.JQueryPositionOptions"] });
                    options.my = "top left";
                    options.at = "top left";
                    options.of = jqComponent;
                    jqSelector.position(options);
                    this.visualEditor.selectItem(component);
                }
                catch (e) {
                }
                ;
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            Selector.prototype.performAction = function (source, evt) {
                source.setStyle("width", "0px");
                source.setStyle("height", "0px");
            };
            return Selector;
        }(framework.JSContainer));
        builder.Selector = Selector;
        Selector["__class"] = "framework.builder.Selector";
        Selector["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignable = (function (_super) {
            __extends(JSDesignable, _super);
            function JSDesignable(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.component = new framework.builder.marshalling.Component();
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            JSDesignable.prototype.setParameter = function (key, value, designMode) {
                this.component.parameters[key] = value;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignable.prototype.getComponent = function () {
                return this.component;
            };
            /**
             *
             * @return {*}
             */
            JSDesignable.prototype.getParameters = function () {
                var params = (new java.util.LinkedList());
                params.add(new framework.design.NameParameter("Name", "Basic"));
                params.add(new framework.design.AttributeParameter("class", "Style class", "Basic"));
                params.add(new framework.design.StyleParameter("width", "Width", "Basic"));
                params.add(new framework.design.StyleParameter("height", "Height", "Basic"));
                var eventTypes = new framework.design.EventTypeParameter("eventType", "Event", "event");
                eventTypes.options.add(new framework.design.Option("Click", "click"));
                eventTypes.options.add(new framework.design.Option("Double click", "dblclick"));
                params.add(eventTypes);
                var script = new framework.design.EventScriptParameter("script", "Script", "event");
                params.add(script);
                return params;
            };
            /**
             *
             * @return {*}
             */
            JSDesignable.prototype.getDesignables = function () {
                var result = (new java.util.LinkedList());
                for (var index4170 = this.getChildren().iterator(); index4170.hasNext();) {
                    var child = index4170.next();
                    {
                        result.add(child);
                    }
                }
                return result;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignable.prototype.addDesignable = function (designable) {
                this.addChild$framework_JSContainer(designable);
            };
            return JSDesignable;
        }(framework.JSContainer));
        designables.JSDesignable = JSDesignable;
        JSDesignable["__class"] = "framework.designables.JSDesignable";
        JSDesignable["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
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
    JSCheckBox["__interfaces"] = ["framework.interactions.Droppable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSHTMLFragment = (function (_super) {
        __extends(JSHTMLFragment, _super);
        function JSHTMLFragment(name, template) {
            var _this = _super.call(this, name, "div") || this;
            _this.context = new Object();
            _this.template = null;
            _this.template = template;
            return _this;
        }
        JSHTMLFragment.prototype.getTemplate = function () {
            return this.template;
        };
        JSHTMLFragment.prototype.setTemplate = function (template) {
            this.template = template;
            this.setRendered(false);
        };
        JSHTMLFragment.prototype.getContext = function () {
            return this.context;
        };
        JSHTMLFragment.prototype.render$jsweet_dom_HTMLElement = function (parent) {
            if (!this.isRendered()) {
                var html = $(this.template).html();
                var cxt = this.context;
                var rendered = "";
                var js = "rendered = Mustache.render(html, cxt);";
                eval(js);
                this.setHtml(rendered);
            }
            _super.prototype.render$jsweet_dom_HTMLElement.call(this, parent);
        };
        /**
         *
         * @param {HTMLElement} parent
         */
        JSHTMLFragment.prototype.render = function (parent) {
            if (((parent != null && parent instanceof HTMLElement) || parent === null)) {
                return this.render$jsweet_dom_HTMLElement(parent);
            }
            else if (parent === undefined) {
                return this.render$();
            }
            else
                throw new Error('invalid overload');
        };
        return JSHTMLFragment;
    }(framework.JSContainer));
    framework.JSHTMLFragment = JSHTMLFragment;
    JSHTMLFragment["__class"] = "framework.JSHTMLFragment";
    JSHTMLFragment["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
    JSInput["__interfaces"] = ["framework.interactions.Droppable", "framework.InputField", "framework.Renderable"];
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
    JSOption["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            for (var index4171 = this.getChildren().iterator(); index4171.hasNext();) {
                var opt = index4171.next();
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
            for (var index4172 = this.getChildren().iterator(); index4172.hasNext();) {
                var opt = index4172.next();
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
    JSSelect["__interfaces"] = ["framework.interactions.Droppable", "framework.InputField", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var JSTextArea = (function (_super) {
        __extends(JSTextArea, _super);
        function JSTextArea(name) {
            var _this = _super.call(this, name, "textarea") || this;
            _this.addRenderer(JSTextArea.TEXT_AREA_RENDERER_$LI$());
            return _this;
        }
        JSTextArea.TEXT_AREA_RENDERER_$LI$ = function () { if (JSTextArea.TEXT_AREA_RENDERER == null)
            JSTextArea.TEXT_AREA_RENDERER = new JSTextArea.JSTextArea$0(); return JSTextArea.TEXT_AREA_RENDERER; };
        ;
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
    JSTextArea["__interfaces"] = ["framework.interactions.Droppable", "framework.InputField", "framework.Renderable"];
    (function (JSTextArea) {
        var JSTextArea$0 = (function () {
            function JSTextArea$0() {
            }
            JSTextArea$0.prototype.doRender$framework_JSTextArea$jsweet_dom_HTMLElement = function (c, root) {
                var elem = root;
                elem.value = c.getValue();
            };
            /**
             *
             * @param {framework.JSTextArea} c
             * @param {HTMLElement} root
             */
            JSTextArea$0.prototype.doRender = function (c, root) {
                if (((c != null && c instanceof framework.JSTextArea) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.doRender$framework_JSTextArea$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            return JSTextArea$0;
        }());
        JSTextArea.JSTextArea$0 = JSTextArea$0;
        JSTextArea$0["__interfaces"] = ["framework.renderer.Renderer"];
    })(JSTextArea = framework.JSTextArea || (framework.JSTextArea = {}));
})(framework || (framework = {}));
(function (framework) {
    var JSTree = (function (_super) {
        __extends(JSTree, _super);
        function JSTree(name) {
            var _this = _super.call(this, name, "div") || this;
            /*private*/ _this.ul = new framework.JSContainer("ul").addClass("slds-tree").setAttribute("role", "tree");
            /*private*/ _this.title = new framework.JSContainer("h4").addClass("slds-text-title_caps");
            _this.addClass("slds-tree_container");
            _this.addChild$framework_JSContainer(_this.title);
            _this.addChild$framework_JSContainer(_this.ul);
            return _this;
        }
        JSTree.prototype.setTitle = function (title) {
            this.title.setHtml(title);
        };
        return JSTree;
    }(framework.JSContainer));
    framework.JSTree = JSTree;
    JSTree["__class"] = "framework.JSTree";
    JSTree["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Accordion = (function (_super) {
            __extends(Accordion, _super);
            function Accordion(name) {
                var _this = _super.call(this, name, "ul") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                /*private*/ _this.designables = (new java.util.LinkedList());
                _this.addClass("slds-accordion");
                return _this;
            }
            Accordion.prototype.addItem = function (item) {
                this.addDesignable(item);
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            Accordion.prototype.setParameter = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @return {*}
             */
            Accordion.prototype.getDesignables = function () {
                return this.designables;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            Accordion.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {*}
             */
            Accordion.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            Accordion.prototype.addDesignable = function (designable) {
                var li = new framework.JSContainer("li").addClass("slds-accordion__list-item");
                this.addChild$framework_JSContainer(li);
                if (designable != null && designable instanceof framework.lightning.AccordionItem) {
                    li.addChild$framework_JSContainer(designable);
                }
                else {
                    throw new java.lang.RuntimeException("Can only add Component of type JSAccordionItem in an Accordion Container");
                }
            };
            return Accordion;
        }(framework.JSContainer));
        lightning.Accordion = Accordion;
        Accordion["__class"] = "framework.lightning.Accordion";
        Accordion["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
        Avatar["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Backdrop = (function (_super) {
            __extends(Backdrop, _super);
            function Backdrop(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.addClass("slds-backdrop");
                return _this;
            }
            Backdrop.prototype.open = function () {
                this.addClass("slds-backdrop_open");
                return this;
            };
            Backdrop.prototype.close = function () {
                this.removeClass("slds-backdrop_open");
                return this;
            };
            return Backdrop;
        }(framework.JSContainer));
        lightning.Backdrop = Backdrop;
        Backdrop["__class"] = "framework.lightning.Backdrop";
        Backdrop["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Badge["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Box["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        BreadcrumbItem["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Breadcrumbs["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                    _this.component = new framework.builder.marshalling.Component();
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
                        _this.component = new framework.builder.marshalling.Component();
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
                for (var index4173 = 0; index4173 < Button.states_$LI$().length; index4173++) {
                    var s = Button.states_$LI$()[index4173];
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
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            Button.prototype.setParameter = function (key, value, designMode) {
                if (((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && designMode === undefined) {
                    return this.setParameter$java_lang_String$java_lang_String(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            Button.prototype.setParameter$java_lang_String$java_lang_String = function (key, value) {
                this.component.parameters[key] = value;
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
            return Button;
        }(framework.JSContainer));
        Button.STATE_NEUTRAL = "neutral";
        Button.STATE_BRAND = "brand";
        Button.STATE_DESTRUCTIVE = "destructive";
        Button.STATE_SUCCESS = "success";
        lightning.Button = Button;
        Button["__class"] = "framework.lightning.Button";
        Button["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        ButtonGroup["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                _this.headerMedia.addClass("slds-has-flexi-truncate");
                _this.headerMedia.setCentered(true);
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
        Card["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        CheckBox["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.InputField", "framework.Renderable"];
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
        CheckBoxButtonGroup["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        DockedComposerContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DropDown = (function (_super) {
            __extends(DropDown, _super);
            function DropDown(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.ul = new framework.JSContainer("ul").addClass("slds-dropdown__list");
                _this.addClass("slds-dropdown");
                _this.addChild$framework_JSContainer(_this.ul);
                return _this;
            }
            DropDown.prototype.addItem = function (item) {
                var li = new framework.JSContainer("li").addClass("slds-dropdown__item").setAttribute("role", "presentation");
                this.ul.addChild$framework_JSContainer(li);
                li.addChild$framework_JSContainer(item);
                return this;
            };
            DropDown.prototype.setSize = function (size) {
                this.removeClass(DropDown.SMALL);
                this.removeClass(DropDown.XX_SMALL);
                this.removeClass(DropDown.X_SMALL);
                this.removeClass(DropDown.MEDIUM);
                this.removeClass(DropDown.LARGE);
                this.addClass(size);
                return this;
            };
            DropDown.prototype.setPosition = function (position) {
                this.removeClass(DropDown.LEFT).removeClass(DropDown.RIGHT).removeClass(DropDown.BOTTOM).addClass(position);
                return this;
            };
            return DropDown;
        }(framework.JSContainer));
        DropDown.SMALL = "slds-dropdown_small";
        DropDown.XX_SMALL = "slds-dropdown_xx-small";
        DropDown.X_SMALL = "slds-dropdown_x-small";
        DropDown.MEDIUM = "slds-dropdown_medium";
        DropDown.LARGE = "slds-dropdown_large";
        DropDown.LEFT = "slds-dropdown_left";
        DropDown.RIGHT = "slds-dropdown_right";
        DropDown.BOTTOM = "slds-dropdown_bottom";
        lightning.DropDown = DropDown;
        DropDown["__class"] = "framework.lightning.DropDown";
        DropDown["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DropDownItem = (function (_super) {
            __extends(DropDownItem, _super);
            function DropDownItem(name, label) {
                var _this = _super.call(this, name, "a") || this;
                /*private*/ _this.label = new framework.JSContainer("span").addClass("slds-truncate");
                _this.setAttribute("role", "menuitem");
                _this.addChild$framework_JSContainer(_this.label.setHtml(label));
                return _this;
            }
            DropDownItem.prototype.setLabel = function (label) {
                this.label.setHtml(label);
            };
            return DropDownItem;
        }(framework.JSContainer));
        lightning.DropDownItem = DropDownItem;
        DropDownItem["__class"] = "framework.lightning.DropDownItem";
        DropDownItem["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var DropDownTrigger = (function (_super) {
            __extends(DropDownTrigger, _super);
            function DropDownTrigger(name, button, dropdown) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.open = false;
                _this.addClass("slds-dropdown-trigger");
                _this.addClass("slds-dropdown-trigger_click");
                _this.addChild$framework_JSContainer(button.addEventListener(new DropDownTrigger.DropDownTrigger$0(_this), "click"));
                _this.addChild$framework_JSContainer(dropdown);
                return _this;
            }
            return DropDownTrigger;
        }(framework.JSContainer));
        lightning.DropDownTrigger = DropDownTrigger;
        DropDownTrigger["__class"] = "framework.lightning.DropDownTrigger";
        DropDownTrigger["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (DropDownTrigger) {
            var DropDownTrigger$0 = (function () {
                function DropDownTrigger$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                DropDownTrigger$0.prototype.performAction = function (source, evt) {
                    if (!this.__parent.open) {
                        this.__parent.addClass("slds-is-open");
                        this.__parent.open = true;
                    }
                    else {
                        this.__parent.removeClass("slds-is-open");
                        this.__parent.open = false;
                    }
                };
                return DropDownTrigger$0;
            }());
            DropDownTrigger.DropDownTrigger$0 = DropDownTrigger$0;
            DropDownTrigger$0["__interfaces"] = ["framework.EventListener"];
        })(DropDownTrigger = lightning.DropDownTrigger || (lightning.DropDownTrigger = {}));
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
                this.control.getChildren().clear();
                this.control.setRendered(false);
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
        FormElement["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            Grid.prototype.setAlignSpread = function (b) {
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
        Grid["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        HorizontalList["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                    _this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    _this.svgClass = "slds-icon";
                    (function () {
                        _this.type = type;
                        _this.iconName = iconName;
                        _this.refresh();
                    })();
                }
                else if (((typeof name === 'string') || name === null) && type === undefined && iconName === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "div") || this;
                    _this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    _this.svgClass = "slds-icon";
                    (function () {
                        _this.refresh();
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Icon.prototype.setSvgClass = function (cls) {
                this.svgClass = cls;
                this.refresh();
            };
            Icon.prototype.refresh = function () {
                var html = "<svg class=\'" + this.svgClass + "\'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"" + this.assetsUrl + "/" + this.type + "-sprite/svg/symbols.svg#" + this.iconName + "\"></use></svg>";
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
        Icon["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                _this.icon.setSvgClass("slds-button__icon");
                _this.addChild$framework_JSContainer(_this.icon);
                _this.addClass("slds-button").addClass("slds-button_icon");
                return _this;
            }
            IconButton.prototype.getIcon = function () {
                return this.icon;
            };
            IconButton.prototype.setIcon = function (icon) {
                this.getChildren().remove(this.icon);
                this.icon = icon;
                icon.setSvgClass("slds-button__icon");
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
        IconButton["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Lookup["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        LTContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Media["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Modal = (function (_super) {
            __extends(Modal, _super);
            function Modal(name, stitle) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.modalContainer = new framework.JSContainer("div").addClass("slds-modal__container");
                /*private*/ _this.header = new framework.JSContainer("header").addClass("slds-modal__header");
                /*private*/ _this.content = new framework.JSContainer("div").addClass("slds-modal__content");
                /*private*/ _this.footer = new framework.JSContainer("footer").addClass("slds-modal__footer");
                /*private*/ _this.closeButton = new framework.lightning.IconButton("closeButton");
                /*private*/ _this.title = new framework.JSContainer("h2").addClass("slds-text-heading_medium slds-hyphenate");
                /*private*/ _this.backdrop = null;
                _this.addClass("slds-modal");
                _this.setAttribute("role", "dialog").setAttribute("tabindex", "-1").setAttribute("aria-modal", "true");
                _this.addChild$framework_JSContainer(_this.modalContainer);
                _this.modalContainer.addChild$framework_JSContainer(_this.header);
                _this.modalContainer.addChild$framework_JSContainer(_this.content);
                _this.modalContainer.addChild$framework_JSContainer(_this.footer);
                _this.closeButton.addClass("slds-modal__close");
                _this.closeButton.setInverse(true);
                _this.closeButton.getIcon().setIconName("close");
                _this.header.addChild$framework_JSContainer(_this.closeButton);
                _this.header.addChild$framework_JSContainer(_this.title);
                _this.title.setHtml(stitle);
                _this.closeButton.addEventListener(new Modal.Modal$0(_this), "click");
                _this.close();
                return _this;
            }
            Modal.prototype.getBackdrop = function () {
                return this.backdrop;
            };
            Modal.prototype.setBackdrop = function (backdrop) {
                this.backdrop = backdrop;
            };
            Modal.prototype.open = function () {
                this.addClass("slds-fade-in-open");
                if (this.backdrop != null) {
                    this.backdrop.open();
                }
                this.setVisible(true);
            };
            Modal.prototype.close = function () {
                this.removeClass("slds-fade-in-open");
                if (this.backdrop != null) {
                    this.backdrop.close();
                }
                this.setVisible(false);
            };
            Modal.prototype.setLarge = function (b) {
                if (b) {
                    this.addClass("slds-modal_large");
                }
                else {
                    this.removeClass("slds-modal_large");
                }
                return this;
            };
            Modal.prototype.setTitle = function (stitle) {
                this.title.setHtml(stitle);
            };
            Modal.prototype.getTitle = function () {
                return this.title;
            };
            Modal.prototype.getModalContainer = function () {
                return this.modalContainer;
            };
            Modal.prototype.getHeader = function () {
                return this.header;
            };
            Modal.prototype.getContent = function () {
                return this.content;
            };
            Modal.prototype.getFooter = function () {
                return this.footer;
            };
            Modal.prototype.getCloseButton = function () {
                return this.closeButton;
            };
            return Modal;
        }(framework.JSContainer));
        lightning.Modal = Modal;
        Modal["__class"] = "framework.lightning.Modal";
        Modal["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (Modal) {
            var Modal$0 = (function () {
                function Modal$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Modal$0.prototype.performAction = function (source, evt) {
                    this.__parent.close();
                };
                return Modal$0;
            }());
            Modal.Modal$0 = Modal$0;
            Modal$0["__interfaces"] = ["framework.EventListener"];
        })(Modal = lightning.Modal || (lightning.Modal = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Section = (function (_super) {
            __extends(Section, _super);
            function Section(name, title) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.titleContainer = new framework.JSContainer("h3").addClass("slds-section__title");
                /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-truncate");
                /*private*/ _this.arrow = new framework.lightning.Icon("arrow", "utility", "switch");
                /*private*/ _this.content = new framework.JSContainer("div").addClass("slds-section__content");
                _this.addClass("slds-section");
                _this.addChild$framework_JSContainer(_this.titleContainer);
                _this.arrow.setTag("button");
                _this.arrow.setAttribute("class", "slds-button slds-section__title-action");
                _this.arrow.setSvgClass("slds-section__title-action-icon slds-button__icon slds-button__icon_left");
                _this.titleContainer.addChild$framework_JSContainer(_this.arrow);
                _this.arrow.addChild$framework_JSContainer(_this.title.setHtml(title));
                _this.addChild$framework_JSContainer(_this.content);
                _this.open();
                return _this;
            }
            Section.prototype.open = function () {
                this.addClass("slds-is-open");
                return this;
            };
            Section.prototype.close = function () {
                this.removeClass("slds-is-open");
                return this;
            };
            Section.prototype.setTitle = function (stitle) {
                this.title.setHtml(stitle);
                return this;
            };
            Section.prototype.getContent = function () {
                return this.content;
            };
            Section.prototype.getTitleContainer = function () {
                return this.titleContainer;
            };
            return Section;
        }(framework.JSContainer));
        lightning.Section = Section;
        Section["__class"] = "framework.lightning.Section";
        Section["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                this.setVisible(b);
                return this;
            };
            TabBody.prototype.hide = function (b) {
                return this.show(!b);
            };
            return TabBody;
        }(framework.JSContainer));
        lightning.TabBody = TabBody;
        TabBody["__class"] = "framework.lightning.TabBody";
        TabBody["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var TabItem = (function (_super) {
            __extends(TabItem, _super);
            function TabItem(name, body) {
                var _this = _super.call(this, name, "li") || this;
                /*private*/ _this.__framework_lightning_TabItem_listeners = (new java.util.ArrayList());
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
            TabItem.prototype.addTabActionListener = function (listene) {
                this.__framework_lightning_TabItem_listeners.add(listene);
            };
            TabItem.prototype.setActive = function (b) {
                if (b) {
                    this.addClass("slds-active");
                    this.title.setAttribute("aria-selected", "true");
                    for (var index4174 = this.__framework_lightning_TabItem_listeners.iterator(); index4174.hasNext();) {
                        var li = index4174.next();
                        {
                            li.onActivate(this);
                        }
                    }
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
        TabItem["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table) {
            var Table = (function (_super) {
                __extends(Table, _super);
                function Table(name) {
                    var _this = _super.call(this, name, "table") || this;
                    /*private*/ _this.thead = new framework.JSContainer("thead");
                    /*private*/ _this.tbody = new framework.JSContainer("tbody");
                    /*private*/ _this.tableCellRenderer = new framework.lightning.table.DefaultTableCellRenderer();
                    /*private*/ _this.tableColumnModel = new framework.lightning.table.DefaultTableColumnModel();
                    _this.model = null;
                    _this.addClass("slds-table");
                    _this.addChild$framework_JSContainer(_this.thead);
                    _this.addChild$framework_JSContainer(_this.tbody);
                    _this.setBordered(true);
                    return _this;
                }
                Table.prototype.getModel = function () {
                    return this.model;
                };
                Table.prototype.setModel = function (model) {
                    this.model = model;
                };
                Table.prototype.getTableCellRenderer = function () {
                    return this.tableCellRenderer;
                };
                Table.prototype.setTableCellRenderer = function (tableCellRenderer) {
                    this.tableCellRenderer = tableCellRenderer;
                };
                Table.prototype.getTableColumnModel = function () {
                    return this.tableColumnModel;
                };
                Table.prototype.setTableColumnModel = function (tableColumnModel) {
                    this.tableColumnModel = tableColumnModel;
                };
                Table.prototype.getThead = function () {
                    return this.thead;
                };
                Table.prototype.getTbody = function () {
                    return this.tbody;
                };
                Table.prototype.refreshData = function () {
                    this.tbody.getChildren().clear();
                    this.tbody.setRendered(false);
                    var rows = this.model.getRowCount();
                    var cols = this.model.getColumnCount();
                    for (var row = 0; row < rows; row++) {
                        var tr = new framework.JSContainer("tr");
                        this.tbody.addChild$framework_JSContainer(tr.addClass("slds-hint-parent"));
                        for (var col = 0; col < cols; col++) {
                            var value = this.model.getValueAt(row, col);
                            var cell = this.tableCellRenderer.getComponent(this, value, row, col);
                            var td = new framework.JSContainer("td").addClass("slds-cell-wrap").setAttribute("role", "gridcell");
                            tr.addChild$framework_JSContainer(td);
                            td.addChild$framework_JSContainer(cell);
                        }
                        ;
                    }
                    ;
                };
                Table.prototype.getRow = function (index) {
                    return this.tbody.getChildren().get(index);
                };
                Table.prototype.getBody = function () {
                    return this.tbody;
                };
                Table.prototype.refreshColumns = function () {
                    this.thead.getChildren().clear();
                    this.thead.setRendered(false);
                    var tr = new framework.JSContainer("tr").addClass("slds-text-title_caps");
                    this.thead.addChild$framework_JSContainer(tr);
                    for (var i = 0; i < this.tableColumnModel.getColumnCount(); i++) {
                        var col = this.tableColumnModel.getColumn(i);
                        tr.addChild$framework_JSContainer(col);
                    }
                    ;
                };
                Table.prototype.setBordered = function (b) {
                    this.setFeature("slds-table_bordered", b);
                    return this;
                };
                Table.prototype.setFixedLayout = function (b) {
                    this.setFeature("slds-table_fixed-layout", b);
                    return this;
                };
                Table.prototype.setResizableCol = function (b) {
                    this.setFeature("slds-table_resizable-cols", b);
                    return this;
                };
                Table.prototype.setFeature = function (cls, b) {
                    if (b) {
                        this.addClass(cls);
                    }
                    else {
                        this.removeClass(cls);
                    }
                };
                Table.prototype.setColBordered = function (b) {
                    this.setFeature("slds-table_col-bordered", b);
                    return this;
                };
                Table.prototype.setCellBuffered = function (b) {
                    this.setFeature("slds-table_cell-buffer", b);
                    return this;
                };
                Table.prototype.setHasTopMagnet = function (b) {
                    this.setFeature("slds-has-top-magnet", b);
                    return this;
                };
                Table.prototype.setHasNoRowHover = function (b) {
                    this.setFeature("slds-no-row-hover", b);
                    return this;
                };
                Table.prototype.setStriped = function (b) {
                    this.setFeature("slds-table_striped", b);
                    return this;
                };
                return Table;
            }(framework.JSContainer));
            table.Table = Table;
            Table["__class"] = "framework.lightning.table.Table";
            Table["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table) {
            var TableColumn = (function (_super) {
                __extends(TableColumn, _super);
                function TableColumn(name, identifier, label) {
                    var _this = _super.call(this, name, "th") || this;
                    /*private*/ _this.title = new framework.JSContainer("div").addClass("slds-truncate");
                    _this.identifier = null;
                    _this.identifier = identifier;
                    _this.addChild$framework_JSContainer(_this.title);
                    _this.setLabel(label);
                    _this.setAttribute("scope", "col");
                    return _this;
                }
                TableColumn.prototype.getIdentifier = function () {
                    return this.identifier;
                };
                TableColumn.prototype.setLabel = function (title) {
                    this.title.setHtml(title);
                    return this;
                };
                TableColumn.prototype.setFeature = function (cls, b) {
                    if (b) {
                        this.addClass(cls);
                    }
                    else {
                        this.removeClass(cls);
                    }
                };
                return TableColumn;
            }(framework.JSContainer));
            table.TableColumn = TableColumn;
            TableColumn["__class"] = "framework.lightning.table.TableColumn";
            TableColumn["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(table = lightning.table || (lightning.table = {}));
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
                for (var index4175 = this.nav.getChildren().iterator(); index4175.hasNext();) {
                    var c = index4175.next();
                    {
                        var tab = c;
                        tab.setActive(false);
                    }
                }
                item.setActive(true);
                return this;
            };
            Tabs.prototype.getItems = function () {
                return this.nav.getChildren();
            };
            return Tabs;
        }(framework.JSContainer));
        lightning.Tabs = Tabs;
        Tabs["__class"] = "framework.lightning.Tabs";
        Tabs["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Text["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var TextComponent = (function (_super) {
        __extends(TextComponent, _super);
        function TextComponent(name, tag) {
            return _super.call(this, name, tag) || this;
        }
        return TextComponent;
    }(framework.JSContainer));
    framework.TextComponent = TextComponent;
    TextComponent["__class"] = "framework.TextComponent";
    TextComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var TreeItem = (function (_super) {
        __extends(TreeItem, _super);
        function TreeItem(name, title) {
            var _this = _super.call(this, name, "div") || this;
            /*private*/ _this.button = new framework.JSContainer("button").addClass("slds-button slds-button_icon slds-button_icon slds-m-right_x-small");
            /*private*/ _this.iconRight = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";
            /*private*/ _this.iconDown = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.4.1/assets/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";
            /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-truncate");
            /*private*/ _this.__open = false;
            _this.addClass("slds-tree__item");
            _this.addChild$framework_JSContainer(_this.button);
            _this.button.setHtml(_this.iconRight);
            _this.addChild$framework_JSContainer(_this.title.setHtml(title));
            _this.button.addEventListener(_this, "click");
            return _this;
        }
        TreeItem.prototype.getButton = function () {
            return this.button;
        };
        TreeItem.prototype.open = function () {
            this.__open = true;
            this.button.setHtml(this.iconDown);
            if (this.getParent().getChildren().size() > 1) {
                this.getParent().getChildren().get(1).setStyle("display", "block");
            }
        };
        TreeItem.prototype.close = function () {
            this.__open = false;
            this.button.setHtml(this.iconRight);
            if (this.getParent().getChildren().size() > 1) {
                this.getParent().getChildren().get(1).setStyle("display", "none");
            }
        };
        TreeItem.prototype.select = function (b) {
            if (b) {
                this.addClass("slds-is-selected");
            }
            else {
                this.removeClass("slds-is-selected");
            }
        };
        TreeItem.prototype.setFocus = function (b) {
            if (b) {
                this.addClass("slds-is-focused");
            }
            else {
                this.removeClass("slds-is-focused");
            }
        };
        TreeItem.prototype.leaf = function (b) {
            if (b) {
                this.button.addClass("slds-is-disabled");
            }
            else {
                this.button.removeClass("slds-is-disabled");
            }
        };
        /**
         *
         * @param {framework.JSContainer} source
         * @param {Event} evt
         */
        TreeItem.prototype.performAction = function (source, evt) {
            if (this.__open)
                this.close();
            else
                this.open();
        };
        return TreeItem;
    }(framework.JSContainer));
    framework.TreeItem = TreeItem;
    TreeItem["__class"] = "framework.TreeItem";
    TreeItem["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var BasicComponent = (function (_super) {
            __extends(BasicComponent, _super);
            function BasicComponent(name, initial, label) {
                var _this = _super.call(this, "html:" + name, initial, label) || this;
                _this.addClass("designer-component");
                return _this;
            }
            return BasicComponent;
        }(framework.builder.Component));
        builder.BasicComponent = BasicComponent;
        BasicComponent["__class"] = "framework.builder.BasicComponent";
        BasicComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var EventEditor = (function (_super) {
                __extends(EventEditor, _super);
                function EventEditor(name, root) {
                    var _this = _super.call(this, name, "div") || this;
                    _this.component = new framework.JSSelect("components");
                    _this.events = new framework.JSSelect("events");
                    /*private*/ _this.editor = new framework.builder.editors.JavascriptEditor("sd");
                    _this.root = null;
                    var grid = new framework.lightning.Grid("", "div");
                    _this.addChild$framework_JSContainer(grid);
                    var colLeft = new framework.JSContainer("div");
                    var colRight = new framework.JSContainer("div");
                    grid.addChild$framework_JSContainer(colLeft.addClass("slds-col"));
                    grid.addChild$framework_JSContainer(colRight.addClass("slds-col"));
                    _this.root = root;
                    for (var index4176 = 0; index4176 < framework.builder.editors.EventTypes.events_$LI$().length; index4176++) {
                        var s = framework.builder.editors.EventTypes.events_$LI$()[index4176];
                        _this.events.addOption(new framework.JSOption(s, s));
                    }
                    colLeft.addChild$framework_JSContainer(_this.component.setStyle("width", "100%"));
                    colRight.addChild$framework_JSContainer(_this.events.setStyle("width", "100%"));
                    _this.addChild$framework_JSContainer(_this.editor);
                    return _this;
                }
                EventEditor.prototype.addComponentOption = function (designable) {
                    this.component.addOption(new framework.JSOption(designable.getName(), designable.getId()));
                    for (var index4177 = designable.getDesignables().iterator(); index4177.hasNext();) {
                        var des = index4177.next();
                        {
                            this.addComponentOption(des);
                        }
                    }
                };
                EventEditor.prototype.setDesignable = function (designable) {
                    this.component.getChildren().clear();
                    this.component.setRendered(false);
                    this.addComponentOption(this.root);
                    this.component.setValue$java_lang_String(designable.getName());
                };
                /*private*/ EventEditor.prototype.findDesignableById = function (parent, id) {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(parent.getId(), id)) {
                        return parent;
                    }
                    for (var index4178 = parent.getDesignables().iterator(); index4178.hasNext();) {
                        var des = index4178.next();
                        {
                            var res = this.findDesignableById(des, id);
                            if (res != null) {
                                return res;
                            }
                        }
                    }
                    return null;
                };
                /**
                 *
                 */
                EventEditor.prototype.save = function () {
                    var componentId = this.component.getValue();
                    var type = this.events.getValue();
                    var src = this.editor.getEditor().getValue();
                    var des = this.findDesignableById(this.root, componentId);
                    if (des != null) {
                        var listeners = des.getListeners().get(type);
                        for (var index4179 = listeners.iterator(); index4179.hasNext();) {
                            var l_1 = index4179.next();
                            {
                                if (l_1 != null && l_1 instanceof framework.builder.BuilderEventListener) {
                                    var evt = l_1;
                                    evt.setSource(src);
                                    return;
                                }
                            }
                        }
                        var l = new framework.builder.BuilderEventListener(src);
                        des.addEventListener(l, type);
                    }
                };
                /**
                 *
                 * @return {string}
                 */
                EventEditor.prototype.getMarshall = function () {
                    return null;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.BuilderEvent}
                 */
                EventEditor.prototype.createNew = function (f) {
                    return null;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.BuilderEvent}
                 */
                EventEditor.prototype.unmarshall = function (f) {
                    return null;
                };
                EventEditor.prototype.consume$framework_builder_marshalling_BuilderEvent = function (data) {
                };
                /**
                 *
                 * @param {framework.builder.marshalling.BuilderEvent} data
                 */
                EventEditor.prototype.consume = function (data) {
                    if (((data != null && data instanceof framework.builder.marshalling.BuilderEvent) || data === null)) {
                        return this.consume$framework_builder_marshalling_BuilderEvent(data);
                    }
                    else if (((data != null) || data === null)) {
                        return this.consume$java_lang_Object(data);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return EventEditor;
            }(framework.builder.editors.AbstractEditor));
            editors.EventEditor = EventEditor;
            EventEditor["__class"] = "framework.builder.editors.EventEditor";
            EventEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_2) {
        var editors;
        (function (editors) {
            var VisualEditor = (function (_super) {
                __extends(VisualEditor, _super);
                function VisualEditor(builder) {
                    var _this = _super.call(this, "visualEditor", "div") || this;
                    /*private*/ _this.composers = new framework.JSContainer("composers", "div");
                    /*private*/ _this.propertiesDockedComposer = new framework.builder.properties.PropertiesDockedComposer("properties");
                    /*private*/ _this.libraryDockedComposer = new framework.builder.libraries.LibrariesDockedComposer("library");
                    _this.builder = null;
                    _this.selectedItem = null;
                    _this.root = null;
                    _this.selector = null;
                    _this.structureDockedComposer = null;
                    _this.addClass("visual-editor");
                    _this.addChild$framework_JSContainer(_this.composers);
                    _this.composers.addClass("composers");
                    _this.composers.addChild$framework_JSContainer(_this.propertiesDockedComposer);
                    _this.composers.addChild$framework_JSContainer(_this.libraryDockedComposer);
                    _this.propertiesDockedComposer.setStyle("left", "1017px");
                    _this.libraryDockedComposer.setStyle("left", "1017px").setStyle("top", "500px");
                    _this.builder = builder;
                    _this.selector = (framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.Selector));
                    _this.selector.setVisualEditor(_this);
                    _this.addChild$framework_JSContainer(_this.selector);
                    return _this;
                }
                VisualEditor.prototype.getRootItem = function () {
                    return this.root;
                };
                VisualEditor.prototype.getSelectedItem = function () {
                    return this.selectedItem;
                };
                VisualEditor.prototype.selectItem = function (designable) {
                    this.propertiesDockedComposer.selectComponent(designable);
                };
                VisualEditor.prototype.getBuilder = function () {
                    return this.builder;
                };
                /**
                 *
                 * @return {string}
                 */
                VisualEditor.prototype.getMarshall = function () {
                    return JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(this.root));
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.Component}
                 */
                VisualEditor.prototype.createNew = function (f) {
                    var component = new framework.builder.marshalling.Component();
                    component.impl = "html:div";
                    return component;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.Component}
                 */
                VisualEditor.prototype.unmarshall = function (f) {
                    return JSON.parse(f.getData());
                };
                VisualEditor.prototype.consume$framework_builder_marshalling_Component = function (component) {
                    this.root = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, true);
                    this.root.setStyle("width", "100%");
                    this.root.setStyle("height", "200px");
                    this.addChild$framework_JSContainer(this.root);
                    this.structureDockedComposer = new framework.builder.editors.StructureDockedComposer("strucutru", this.root, this.builder);
                    this.composers.addChild$framework_JSContainer(this.structureDockedComposer);
                    this.structureDockedComposer.setStyle("left", "0px");
                };
                /**
                 *
                 * @param {framework.builder.marshalling.Component} component
                 */
                VisualEditor.prototype.consume = function (component) {
                    if (((component != null && component instanceof framework.builder.marshalling.Component) || component === null)) {
                        return this.consume$framework_builder_marshalling_Component(component);
                    }
                    else if (((component != null) || component === null)) {
                        return this.consume$java_lang_Object(component);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return VisualEditor;
            }(framework.builder.editors.AbstractEditor));
            editors.VisualEditor = VisualEditor;
            VisualEditor["__class"] = "framework.builder.editors.VisualEditor";
            VisualEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
        })(editors = builder_2.editors || (builder_2.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AbstractCheckBoxPropertyEditor = (function (_super) {
                __extends(AbstractCheckBoxPropertyEditor, _super);
                function AbstractCheckBoxPropertyEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.designable = null;
                    _this.parameter = null;
                    _this.addEventListener(_this, "change");
                    return _this;
                }
                AbstractCheckBoxPropertyEditor.prototype.setProperty = function (designable, parameter) {
                    this.parameter = parameter;
                    this.designable = designable;
                    this.initEditor(designable, parameter);
                };
                return AbstractCheckBoxPropertyEditor;
            }(framework.JSCheckBox));
            properties.AbstractCheckBoxPropertyEditor = AbstractCheckBoxPropertyEditor;
            AbstractCheckBoxPropertyEditor["__class"] = "framework.builder.properties.AbstractCheckBoxPropertyEditor";
            AbstractCheckBoxPropertyEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var UIFile = (function (_super) {
            __extends(UIFile, _super);
            function UIFile(name) {
                return _super.call(this, name, "#uiFile") || this;
            }
            UIFile.prototype.setTitle = function (title) {
                this.getContext()["title"] = title;
                this.setRendered(false);
                return this;
            };
            UIFile.prototype.setAbbr = function (abbr) {
                this.getContext()["abbr"] = abbr;
                this.setRendered(false);
                return this;
            };
            UIFile.prototype.setHelp = function (help) {
                this.getContext()["help"] = help;
                this.setRendered(false);
                return this;
            };
            return UIFile;
        }(framework.JSHTMLFragment));
        builder.UIFile = UIFile;
        UIFile["__class"] = "framework.builder.UIFile";
        UIFile["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var AccordionItem = (function (_super) {
            __extends(AccordionItem, _super);
            function AccordionItem(name, title) {
                var _this = _super.call(this, name, "#accordionSection") || this;
                /*private*/ _this.accordionContent = new framework.designables.JSDesignable("accordionContent", "div").addClass("slds-accordion__content");
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                /*private*/ _this.configured = false;
                _this.addChild$framework_JSContainer(_this.accordionContent);
                _this.getContext()["openClass"] = "";
                _this.getContext()["iconType"] = "utility";
                _this.getContext()["iconsLocation"] = "/webjars/salesforce-lightning-design-system/2.4.1/assets/icons";
                _this.getContext()["iconName"] = "switch";
                _this.getContext()["title"] = title;
                return _this;
            }
            AccordionItem.prototype.open = function () {
                this.getContext()["openClass"] = "slds-is-open";
            };
            AccordionItem.prototype.close = function () {
                this.getContext()["openClass"] = "";
            };
            AccordionItem.prototype.setTitle = function (title) {
                this.getContext()["title"] = title;
            };
            AccordionItem.prototype.setIcon = function (iconType, iconName) {
                this.getContext()["iconType"] = "utility";
                this.getContext()["iconName"] = "switch";
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            AccordionItem.prototype.setParameter = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @return {*}
             */
            AccordionItem.prototype.getDesignables = function () {
                var result = (new java.util.LinkedList());
                result.add(this.accordionContent);
                return result;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            AccordionItem.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {*}
             */
            AccordionItem.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            AccordionItem.prototype.addDesignable = function (designable) {
                this.accordionContent.addDesignable(designable);
            };
            AccordionItem.prototype.getContent = function () {
                return this.accordionContent;
            };
            AccordionItem.prototype.render$jsweet_dom_HTMLElement = function (parent) {
                var _this = this;
                _super.prototype.render$jsweet_dom_HTMLElement.call(this, parent);
                if (!this.configured) {
                    $("#" + this.getId() + " .slds-accordion__summary").click(function (t) {
                        var cls = _this.getContext()["openClass"].toString();
                        if (cls.length > 0) {
                            _this.close();
                        }
                        else {
                            _this.open();
                        }
                        _this.configured = false;
                        _this.setRendered(false);
                        _this.render();
                        return null;
                    });
                }
                this.configured = true;
            };
            /**
             *
             * @param {HTMLElement} parent
             */
            AccordionItem.prototype.render = function (parent) {
                if (((parent != null && parent instanceof HTMLElement) || parent === null)) {
                    return this.render$jsweet_dom_HTMLElement(parent);
                }
                else if (parent === undefined) {
                    return this.render$();
                }
                else
                    throw new Error('invalid overload');
            };
            return AccordionItem;
        }(framework.JSHTMLFragment));
        lightning.AccordionItem = AccordionItem;
        AccordionItem["__class"] = "framework.lightning.AccordionItem";
        AccordionItem["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AbstractInputPropertyEditor = (function (_super) {
                __extends(AbstractInputPropertyEditor, _super);
                function AbstractInputPropertyEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.designable = null;
                    _this.parameter = null;
                    _this.addEventListener(_this, "change");
                    _this.addClass("slds-input");
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                AbstractInputPropertyEditor.prototype.setProperty = function (designable, parameter) {
                    this.parameter = parameter;
                    this.designable = designable;
                    this.initEditor(designable, parameter);
                };
                return AbstractInputPropertyEditor;
            }(framework.JSInput));
            properties.AbstractInputPropertyEditor = AbstractInputPropertyEditor;
            AbstractInputPropertyEditor["__class"] = "framework.builder.properties.AbstractInputPropertyEditor";
            AbstractInputPropertyEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableInput = (function (_super) {
            __extends(JSDesignableInput, _super);
            function JSDesignableInput(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            JSDesignableInput.prototype.setParameter = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @return {*}
             */
            JSDesignableInput.prototype.getDesignables = function () {
                return (new java.util.LinkedList());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableInput.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {*}
             */
            JSDesignableInput.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                parameters.add(new framework.design.ValueParameter("value", "Value", "Basic"));
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableInput.prototype.addDesignable = function (designable) {
                throw new java.lang.RuntimeException("Cannot add children to this component");
            };
            return JSDesignableInput;
        }(framework.JSInput));
        designables.JSDesignableInput = JSDesignableInput;
        JSDesignableInput["__class"] = "framework.designables.JSDesignableInput";
        JSDesignableInput["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable", "framework.InputField"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AbstractSelectPropertyEditor = (function (_super) {
                __extends(AbstractSelectPropertyEditor, _super);
                function AbstractSelectPropertyEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.designable = null;
                    _this.parameter = null;
                    _this.addEventListener(_this, "change");
                    _this.addClass("slds-select");
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                AbstractSelectPropertyEditor.prototype.setProperty = function (designable, parameter) {
                    this.parameter = parameter;
                    this.designable = designable;
                    this.initEditor(designable, parameter);
                };
                return AbstractSelectPropertyEditor;
            }(framework.JSSelect));
            properties.AbstractSelectPropertyEditor = AbstractSelectPropertyEditor;
            AbstractSelectPropertyEditor["__class"] = "framework.builder.properties.AbstractSelectPropertyEditor";
            AbstractSelectPropertyEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var CodeMirrorEditor = (function (_super) {
                __extends(CodeMirrorEditor, _super);
                function CodeMirrorEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.editor = null;
                    /*private*/ _this.file = null;
                    /*private*/ _this.value = "";
                    _this.config = null;
                    _this.addRenderer(_this);
                    return _this;
                }
                CodeMirrorEditor.prototype.setConfig = function (config) {
                    this.config = config;
                };
                CodeMirrorEditor.prototype.doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement = function (c, root) {
                    this.value = this.value == null ? "" : this.value;
                    if (this.editor == null) {
                        this.editor = CodeMirror(root, this.config);
                        this.editor.setValue(this.value);
                    }
                };
                /**
                 *
                 * @param {framework.builder.editors.CodeMirrorEditor} c
                 * @param {HTMLElement} root
                 */
                CodeMirrorEditor.prototype.doRender = function (c, root) {
                    if (((c != null && c instanceof framework.builder.editors.CodeMirrorEditor) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                        return this.doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement(c, root);
                    }
                    else
                        throw new Error('invalid overload');
                };
                CodeMirrorEditor.prototype.destroy = function () {
                    if (this.editor != null) {
                        this.editor = null;
                    }
                };
                CodeMirrorEditor.prototype.getEditor = function () {
                    return this.editor;
                };
                /**
                 *
                 */
                CodeMirrorEditor.prototype.save = function () {
                    var data = this.editor.getValue();
                    this.file.setData(data);
                    framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.data.ProjectService).saveFile(this.file, new CodeMirrorEditor.CodeMirrorEditor$0(this));
                };
                /**
                 *
                 * @param {boolean} b
                 * @return {framework.JSContainer}
                 */
                CodeMirrorEditor.prototype.setRendered = function (b) {
                    if (!b) {
                        this.destroy();
                    }
                    return _super.prototype.setRendered.call(this, b);
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 */
                CodeMirrorEditor.prototype.open = function (f) {
                    this.file = f;
                    this.value = f.getData();
                    this.setRendered(false);
                };
                return CodeMirrorEditor;
            }(framework.JSTextArea));
            editors.CodeMirrorEditor = CodeMirrorEditor;
            CodeMirrorEditor["__class"] = "framework.builder.editors.CodeMirrorEditor";
            CodeMirrorEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.renderer.Renderer", "framework.Renderable", "framework.InputField"];
            (function (CodeMirrorEditor) {
                var CodeMirrorEditor$0 = (function () {
                    function CodeMirrorEditor$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    CodeMirrorEditor$0.prototype.dataLoaded = function (data) {
                    };
                    return CodeMirrorEditor$0;
                }());
                CodeMirrorEditor.CodeMirrorEditor$0 = CodeMirrorEditor$0;
                CodeMirrorEditor$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(CodeMirrorEditor = editors.CodeMirrorEditor || (editors.CodeMirrorEditor = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AbstractTextAreaPropertyEditor = (function (_super) {
                __extends(AbstractTextAreaPropertyEditor, _super);
                function AbstractTextAreaPropertyEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.designable = null;
                    _this.parameter = null;
                    _this.addClass("slds-textarea");
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                AbstractTextAreaPropertyEditor.prototype.setProperty = function (designable, parameter) {
                    this.parameter = parameter;
                    this.designable = designable;
                    this.initEditor(designable, parameter);
                };
                return AbstractTextAreaPropertyEditor;
            }(framework.JSTextArea));
            properties.AbstractTextAreaPropertyEditor = AbstractTextAreaPropertyEditor;
            AbstractTextAreaPropertyEditor["__class"] = "framework.builder.properties.AbstractTextAreaPropertyEditor";
            AbstractTextAreaPropertyEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var EventScriptEditor = (function (_super) {
                __extends(EventScriptEditor, _super);
                function EventScriptEditor(name, eventTypeEditor) {
                    var _this = _super.call(this, name) || this;
                    _this.designable = null;
                    _this.parameter = null;
                    _this.eventTypeEditor = null;
                    _this.eventTypeEditor = eventTypeEditor;
                    _this.addClass("slds-textarea");
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                EventScriptEditor.prototype.setProperty = function (designable, parameter) {
                    this.parameter = parameter;
                    this.designable = designable;
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                EventScriptEditor.prototype.performAction = function (source, evt) {
                    var script = this.getValue();
                    var type = this.eventTypeEditor.getValue();
                    this.designable['setParameter$java_lang_String$java_lang_String$boolean'](type, script, true);
                };
                return EventScriptEditor;
            }(framework.JSTextArea));
            properties.EventScriptEditor = EventScriptEditor;
            EventScriptEditor["__class"] = "framework.builder.properties.EventScriptEditor";
            EventScriptEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableTextArea = (function (_super) {
            __extends(JSDesignableTextArea, _super);
            function JSDesignableTextArea(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            JSDesignableTextArea.prototype.setParameter = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableTextArea.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {*}
             */
            JSDesignableTextArea.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                params.add(new framework.design.ValueParameter("value", "Value", "Basic"));
                return params;
            };
            /**
             *
             * @return {*}
             */
            JSDesignableTextArea.prototype.getDesignables = function () {
                var result = (new java.util.LinkedList());
                return result;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextArea.prototype.addDesignable = function (designable) {
                throw new java.lang.RuntimeException("Cannot add children to this component");
            };
            return JSDesignableTextArea;
        }(framework.JSTextArea));
        designables.JSDesignableTextArea = JSDesignableTextArea;
        JSDesignableTextArea["__class"] = "framework.designables.JSDesignableTextArea";
        JSDesignableTextArea["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable", "framework.InputField"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableButton = (function (_super) {
            __extends(JSDesignableButton, _super);
            function JSDesignableButton(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            JSDesignableButton.stateLabels_$LI$ = function () { if (JSDesignableButton.stateLabels == null)
                JSDesignableButton.stateLabels = ["Neutral", "Brand", "Destructive", "Success"]; return JSDesignableButton.stateLabels; };
            ;
            JSDesignableButton.prototype.setParameter$java_lang_String$java_lang_String$boolean = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            JSDesignableButton.prototype.setParameter = function (key, value, designMode) {
                if (((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((typeof designMode === 'boolean') || designMode === null)) {
                    return this.setParameter$java_lang_String$java_lang_String$boolean(key, value, designMode);
                }
                else if (((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && designMode === undefined) {
                    return this.setParameter$java_lang_String$java_lang_String(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {*}
             */
            JSDesignableButton.prototype.getDesignables = function () {
                return (new java.util.LinkedList());
            };
            JSDesignableButton.prototype.getParameters = function () {
                var result = this.delegate.getParameters();
                result.add(this.createParameter("label", "Label", "String"));
                result.add(this.createParameter("stateful", "Stateful", "Boolean"));
                result.add(this.createParameter("disabled", "Disabled", "Boolean"));
                result.add(this.createParameter("inverse", "Inverse", "Boolean"));
                var paramstates = this.createParameter("state", "State", "select");
                for (var i = 0; i < JSDesignableButton.stateLabels_$LI$().length; i++) {
                    var opt = new framework.design.Option();
                    opt.text = JSDesignableButton.stateLabels_$LI$()[i];
                    opt.value = framework.lightning.Button.states_$LI$()[i];
                    paramstates.options.add(opt);
                }
                ;
                result.add(paramstates);
                return result;
            };
            /*private*/ JSDesignableButton.prototype.createParameter = function (name, label, type) {
                var p = new framework.design.AttributeParameter(name, label, "advanced");
                p.name = name;
                p.type = type;
                p.label = label;
                return p;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableButton.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableButton.prototype.addDesignable = function (designable) {
                throw new java.lang.RuntimeException("Cannot add children to this component");
            };
            return JSDesignableButton;
        }(framework.lightning.Button));
        designables.JSDesignableButton = JSDesignableButton;
        JSDesignableButton["__class"] = "framework.designables.JSDesignableButton";
        JSDesignableButton["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var DataItem = (function (_super) {
                __extends(DataItem, _super);
                function DataItem(name, structure) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.title = new framework.JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
                    /*private*/ _this.figure = new framework.lightning.Icon("figure");
                    /*private*/ _this.fields = new framework.lightning.table.Table("fields");
                    /*private*/ _this.dataStructure = null;
                    /*private*/ _this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                    /*private*/ _this.editTitle = new framework.JSInput("editTitle");
                    /*private*/ _this.addNew = new framework.lightning.Button("addNew").setLabel("Add Field");
                    /*private*/ _this.deleteStructure = new framework.lightning.Button("delete").setLabel("Delete Structure");
                    /*private*/ _this.addNewMode = false;
                    _this.editMode = false;
                    _this.dataEnvironment = null;
                    _this.addClass("data-item");
                    _this.dataEnvironment = (framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.DataEnvironment"));
                    _this.addNew.addClass("slds-button_small");
                    _this.addNew.addEventListener(new DataItem.DataItem$0(_this), "click");
                    _this.deleteStructure.addEventListener(new DataItem.DataItem$1(_this), "click");
                    var grid = new framework.lightning.Grid("ds", "div");
                    grid.setAlignSpread(true);
                    grid.addClass("slds-grid_vertical-align-center");
                    _this.getHeaderMedia().addBody(grid);
                    var colLeft = new framework.JSContainer("div");
                    var colRight = new framework.JSContainer("div");
                    grid.addChild$framework_JSContainer(colLeft);
                    grid.addChild$framework_JSContainer(colRight);
                    var h2 = new framework.JSContainer("h2");
                    _this.editTitle.setVisible(false);
                    h2.addChild$framework_JSContainer(_this.editTitle);
                    h2.addChild$framework_JSContainer(_this.title);
                    colLeft.addChild$framework_JSContainer(h2);
                    _this.title.addEventListener(new DataItem.DataItem$2(_this), "click");
                    _this.editTitle.addEventListener(new DataItem.DataItem$3(_this), "blur");
                    _this.addNew.setState(framework.lightning.Button.STATE_BRAND);
                    colRight.addChild$framework_JSContainer(_this.addNew);
                    _this.deleteStructure.setState(framework.lightning.Button.STATE_DESTRUCTIVE);
                    colRight.addChild$framework_JSContainer(_this.deleteStructure);
                    _this.figure.setIconName("contact");
                    _this.figure.setType("standard");
                    _this.figure.setTag("span");
                    _this.figure.addClass("slds-icon_container slds-icon-standard-contact");
                    _this.figure.setSvgClass("slds-icon slds-icon_small");
                    _this.getHeaderMedia().addFigure(_this.figure);
                    _this.getBody().addChild$framework_JSContainer(_this.fields);
                    _this.setStyle("width", "450px");
                    _this.setDataStructure(structure);
                    return _this;
                }
                DataItem.prototype.deleteField = function (row) {
                    this.dataStructure.fields.remove(row);
                    this.dataEnvironment.saveStructure(this.dataStructure);
                    this.setDataStructure(this.dataStructure);
                };
                DataItem.prototype.save = function (row) {
                    if (row === -1) {
                        var tr = this.fields.getBody().getChildren().get(this.fields.getBody().getChildren().size() - 1);
                        var name_3 = tr.getChildren().get(0).getChildren().get(0);
                        var label = tr.getChildren().get(1).getChildren().get(0);
                        var type = tr.getChildren().get(2).getChildren().get(0);
                        var field = new framework.builder.data.DataField();
                        field.label = label.getValue();
                        field.name = name_3.getValue();
                        field.type = type.getValue();
                        this.dataStructure.fields.add(field);
                        this.setDataStructure(this.dataStructure);
                        this.addNewMode = false;
                        this.addNew.setDisabled(false);
                        this.dataEnvironment.saveStructure(this.dataStructure);
                    }
                    else {
                        var tr = this.fields.getBody().getChildren().get(row);
                        var name_4 = tr.getChildren().get(0).getChildren().get(0);
                        var label = tr.getChildren().get(1).getChildren().get(0);
                        var type = tr.getChildren().get(2).getChildren().get(0);
                        var field = this.dataStructure.fields.get(row);
                        field.label = label.getValue();
                        field.name = name_4.getValue();
                        field.type = type.getValue();
                        this.setDataStructure(this.dataStructure);
                        this.dataEnvironment.saveStructure(this.dataStructure);
                        this.editMode = false;
                        this.addNew.setDisabled(false);
                    }
                };
                DataItem.prototype.addNewRow = function () {
                    var body = this.fields.getBody();
                    var tr = new framework.JSContainer("tr");
                    tr.addClass(" slds-hint-parent");
                    var name = new framework.JSInput("name");
                    var label = new framework.JSInput("label");
                    var type = new framework.JSSelect("type");
                    for (var index4180 = 0; index4180 < framework.builder.data.DataType.Types_$LI$().length; index4180++) {
                        var stype = framework.builder.data.DataType.Types_$LI$()[index4180];
                        {
                            type.addOption(new framework.JSOption(stype, stype));
                        }
                    }
                    var btn = new framework.lightning.IconButton("sdfs");
                    btn.setBorderFilled(true);
                    btn.addClass("slds-button_icon-x-small");
                    var icon = new framework.lightning.Icon("edit");
                    icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                    icon.setType("utility");
                    btn.setIcon(icon);
                    btn.addEventListener(new DataItem.DataItem$4(this), "click");
                    var td = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td1 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td2 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td3 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    tr.addChild$framework_JSContainer(td);
                    tr.addChild$framework_JSContainer(td1);
                    tr.addChild$framework_JSContainer(td2);
                    tr.addChild$framework_JSContainer(td3);
                    td.addChild$framework_JSContainer(name);
                    td1.addChild$framework_JSContainer(label);
                    td2.addChild$framework_JSContainer(type);
                    td3.addChild$framework_JSContainer(btn);
                    body.addChild$framework_JSContainer(tr);
                };
                DataItem.prototype.editRow = function (row) {
                    this.editMode = true;
                    var name = new framework.JSInput("name");
                    var label = new framework.JSInput("label");
                    var type = new framework.JSSelect("type");
                    for (var index4181 = 0; index4181 < framework.builder.data.DataType.Types_$LI$().length; index4181++) {
                        var stype = framework.builder.data.DataType.Types_$LI$()[index4181];
                        {
                            type.addOption(new framework.JSOption(stype, stype));
                        }
                    }
                    var btn = new framework.lightning.IconButton("sdfs");
                    btn.setBorderFilled(true);
                    btn.addClass("slds-button_icon-x-small");
                    var icon = new framework.lightning.Icon("edit");
                    icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                    icon.setType("utility");
                    btn.setIcon(icon);
                    btn.addEventListener(new DataItem.DataItem$5(this, row), "click");
                    name.setValue$java_lang_String(this.dataStructure.fields.get(row).name);
                    label.setValue$java_lang_String(this.dataStructure.fields.get(row).label);
                    type.setValue$java_lang_String(this.dataStructure.fields.get(row).type);
                    var tr = this.fields.getRow(row);
                    tr.getChildren().clear();
                    tr.setRendered(false);
                    var td = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td1 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td2 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    var td3 = new framework.JSContainer("td");
                    td.addClass(" slds-cell-wrap");
                    tr.addChild$framework_JSContainer(td);
                    tr.addChild$framework_JSContainer(td1);
                    tr.addChild$framework_JSContainer(td2);
                    tr.addChild$framework_JSContainer(td3);
                    td.addChild$framework_JSContainer(name);
                    td1.addChild$framework_JSContainer(label);
                    td2.addChild$framework_JSContainer(type);
                    td3.addChild$framework_JSContainer(btn);
                };
                DataItem.prototype.setDataStructure = function (structure) {
                    this.dataStructure = structure;
                    this.title.setHtml(structure.label);
                    this.editTitle.setValue$java_lang_String(structure.label);
                    var cmodel = new framework.lightning.table.DefaultTableColumnModel();
                    var name = new framework.lightning.table.TableColumn("name", "name", "Name");
                    var label = new framework.lightning.table.TableColumn("label", "label", "Label");
                    var type = new framework.lightning.table.TableColumn("type", "type", "Type");
                    var actions = new framework.lightning.table.TableColumn("actions", "actins", " ");
                    actions.setStyle("width", "10%");
                    cmodel.addColumn(name);
                    cmodel.addColumn(label);
                    cmodel.addColumn(type);
                    cmodel.addColumn(actions);
                    this.fields.setTableCellRenderer(this);
                    this.fields.setStriped(true);
                    this.fields.setColBordered(true);
                    this.fields.setModel(this);
                    this.fields.setTableColumnModel(cmodel);
                    this.fields.refreshColumns();
                    this.fields.refreshData();
                };
                /**
                 *
                 * @return {number}
                 */
                DataItem.prototype.getRowCount = function () {
                    return this.dataStructure.fields.size();
                };
                /**
                 *
                 * @return {number}
                 */
                DataItem.prototype.getColumnCount = function () {
                    return 4;
                };
                /**
                 *
                 * @param {number} columnIndex
                 * @return {string}
                 */
                DataItem.prototype.getColumnName = function (columnIndex) {
                    return "";
                };
                /**
                 *
                 * @param {number} columnIndex
                 * @return {string}
                 */
                DataItem.prototype.getColumnType = function (columnIndex) {
                    return "string";
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {boolean}
                 */
                DataItem.prototype.isCellEditable = function (rowIndex, columnIndex) {
                    return false;
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {*}
                 */
                DataItem.prototype.getValueAt = function (rowIndex, columnIndex) {
                    if (columnIndex === 0) {
                        return this.dataStructure.fields.get(rowIndex).name;
                    }
                    else if (columnIndex === 1) {
                        return this.dataStructure.fields.get(rowIndex).label;
                    }
                    else if (columnIndex === 2) {
                        return this.dataStructure.fields.get(rowIndex).type;
                    }
                    else {
                        return this.dataStructure.fields.get(rowIndex).name;
                    }
                };
                /**
                 *
                 * @param {*} aValue
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 */
                DataItem.prototype.setValueAt = function (aValue, rowIndex, columnIndex) {
                };
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {*}
                 */
                DataItem.prototype.getComponent = function (table, value, row, column) {
                    if (column === 3) {
                        var btn = new framework.lightning.IconButton("sdfs");
                        btn.setBorderFilled(true);
                        btn.addClass("slds-button_icon-x-small");
                        var icon = new framework.lightning.Icon("edit");
                        icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                        icon.setType("utility");
                        icon.setIconName("down");
                        btn.setIcon(icon);
                        var dp = new framework.lightning.DropDown("dp");
                        var editItem = new framework.lightning.DropDownItem("edit", "Edit");
                        var deleteItem = new framework.lightning.DropDownItem("delete", "Delete");
                        dp.addItem(editItem);
                        dp.addItem(deleteItem);
                        editItem.setAttribute("row", row + "");
                        deleteItem.setAttribute("row", row + "");
                        editItem.addEventListener(new DataItem.DataItem$6(this), "click");
                        deleteItem.addEventListener(new DataItem.DataItem$7(this), "click");
                        var trigger = new framework.lightning.DropDownTrigger(value, btn, dp);
                        return trigger;
                    }
                    else {
                        return this.delegate.getComponent(table, value, row, column);
                    }
                };
                return DataItem;
            }(framework.lightning.Card));
            libraries.DataItem = DataItem;
            DataItem["__class"] = "framework.builder.libraries.DataItem";
            DataItem["__interfaces"] = ["framework.lightning.table.TableModel", "framework.interactions.Droppable", "framework.lightning.table.TableCellRenderer", "framework.Renderable"];
            (function (DataItem) {
                var DataItem$0 = (function () {
                    function DataItem$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$0.prototype.performAction = function (source, evt) {
                        if (!this.__parent.addNewMode && !this.__parent.editMode) {
                            this.__parent.addNewMode = true;
                            this.__parent.addNew.setDisabled(true);
                            this.__parent.addNewRow();
                        }
                    };
                    return DataItem$0;
                }());
                DataItem.DataItem$0 = DataItem$0;
                DataItem$0["__interfaces"] = ["framework.EventListener"];
                var DataItem$1 = (function () {
                    function DataItem$1(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$1.prototype.performAction = function (source, evt) {
                        this.__parent.dataEnvironment.deleteStructure(this.__parent.dataStructure.name);
                        this.__parent.setVisible(false);
                    };
                    return DataItem$1;
                }());
                DataItem.DataItem$1 = DataItem$1;
                DataItem$1["__interfaces"] = ["framework.EventListener"];
                var DataItem$2 = (function () {
                    function DataItem$2(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$2.prototype.performAction = function (source, evt) {
                        this.__parent.title.setVisible(false);
                        this.__parent.editTitle.setVisible(true);
                        this.__parent.editMode = true;
                        this.__parent.addNew.setVisible(false);
                        this.__parent.deleteStructure.setVisible(false);
                    };
                    return DataItem$2;
                }());
                DataItem.DataItem$2 = DataItem$2;
                DataItem$2["__interfaces"] = ["framework.EventListener"];
                var DataItem$3 = (function () {
                    function DataItem$3(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$3.prototype.performAction = function (source, evt) {
                        var newTitle = this.__parent.editTitle.getValue();
                        this.__parent.dataStructure.name = newTitle;
                        this.__parent.dataStructure.label = newTitle;
                        this.__parent.setDataStructure(this.__parent.dataStructure);
                        this.__parent.title.setVisible(true);
                        this.__parent.editTitle.setVisible(false);
                        this.__parent.addNew.setVisible(true);
                        this.__parent.deleteStructure.setVisible(true);
                        this.__parent.editMode = false;
                    };
                    return DataItem$3;
                }());
                DataItem.DataItem$3 = DataItem$3;
                DataItem$3["__interfaces"] = ["framework.EventListener"];
                var DataItem$4 = (function () {
                    function DataItem$4(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$4.prototype.performAction = function (source, evt) {
                        this.__parent.save(-1);
                    };
                    return DataItem$4;
                }());
                DataItem.DataItem$4 = DataItem$4;
                DataItem$4["__interfaces"] = ["framework.EventListener"];
                var DataItem$5 = (function () {
                    function DataItem$5(__parent, row) {
                        this.row = row;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$5.prototype.performAction = function (source, evt) {
                        this.__parent.save(this.row);
                    };
                    return DataItem$5;
                }());
                DataItem.DataItem$5 = DataItem$5;
                DataItem$5["__interfaces"] = ["framework.EventListener"];
                var DataItem$6 = (function () {
                    function DataItem$6(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$6.prototype.performAction = function (source, evt) {
                        var rrow = javaemul.internal.IntegerHelper.parseInt(source.getAttribute("row"));
                        this.__parent.editRow(rrow);
                    };
                    return DataItem$6;
                }());
                DataItem.DataItem$6 = DataItem$6;
                DataItem$6["__interfaces"] = ["framework.EventListener"];
                var DataItem$7 = (function () {
                    function DataItem$7(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$7.prototype.performAction = function (source, evt) {
                        var rrow = javaemul.internal.IntegerHelper.parseInt(source.getAttribute("row"));
                        this.__parent.deleteField(rrow);
                    };
                    return DataItem$7;
                }());
                DataItem.DataItem$7 = DataItem$7;
                DataItem$7["__interfaces"] = ["framework.EventListener"];
            })(DataItem = libraries.DataItem || (libraries.DataItem = {}));
        })(libraries = builder.libraries || (builder.libraries = {}));
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
        CheckBoxButton["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.InputField", "framework.Renderable"];
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
                for (var index4182 = 0; index4182 < components.length; index4182++) {
                    var com = components[index4182];
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
        ComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        BorderLayout["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                _this.headerIcon.setSvgClass("slds-button__icon");
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
        DockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var GlobalHeader = (function (_super) {
            __extends(GlobalHeader, _super);
            function GlobalHeader(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.setAlignSpread(true);
                _this.addClass("slds-global-header");
                return _this;
            }
            return GlobalHeader;
        }(framework.lightning.Grid));
        lightning.GlobalHeader = GlobalHeader;
        GlobalHeader["__class"] = "framework.lightning.GlobalHeader";
        GlobalHeader["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            GlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            SearchGlobalHeaderItem["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        Panel["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            PanelSection["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                /*private*/ _this.topMenu = new framework.builder.TopMenu("header");
                /*private*/ _this.editorTabs = new framework.lightning.Tabs("editorTabs");
                /*private*/ _this.saveButton = new framework.lightning.IconButton("save");
                /*private*/ _this.newFileModal = new framework.builder.NewFile("newFile", _this);
                /*private*/ _this.openProjectModal = new framework.builder.OpenProject("openproject", _this);
                /*private*/ _this.newFileButtn = new framework.lightning.IconButton("newFile");
                /*private*/ _this.openProjectBtn = new framework.lightning.IconButton("openProject");
                /*private*/ _this.backdrop = new framework.lightning.Backdrop("backdrop");
                /*private*/ _this.activeEditor = null;
                _this.project = null;
                _this.addChild$framework_JSContainer(_this.openProjectModal);
                _this.addChild$framework_JSContainer(_this.newFileModal);
                _this.addChild$framework_JSContainer(_this.backdrop);
                _this.newFileModal.setBackdrop(_this.backdrop);
                _this.openProjectModal.setBackdrop(_this.backdrop);
                _this.addClass("builder");
                var icon = new framework.lightning.Icon("as", "utility", "save");
                _this.saveButton.setIcon(icon);
                _this.saveButton.setBorderFilled(true);
                _this.saveButton.addClass("slds-button_icon-container").addClass("save-button");
                _this.saveButton.addEventListener(new Builder.Builder$0(_this), "click");
                _this.addChild$framework_JSContainer(_this.saveButton);
                _this.addChild$framework_JSContainer(_this.openProjectBtn);
                _this.openProjectBtn.setIcon(new framework.lightning.Icon("", "utility", "open"));
                _this.openProjectBtn.setBorderFilled(true);
                _this.openProjectBtn.addClass("slds-button_icon-container").addClass("new-button").setStyle("right", "10%");
                _this.openProjectBtn.addEventListener(new Builder.Builder$1(_this), "click");
                var iconNew = new framework.lightning.Icon("as", "utility", "new");
                _this.newFileButtn.setIcon(iconNew);
                _this.newFileButtn.setBorderFilled(true);
                _this.newFileButtn.addClass("slds-button_icon-container").addClass("new-button");
                _this.newFileButtn.addEventListener(new Builder.Builder$2(_this), "click");
                _this.addChild$framework_JSContainer(_this.newFileButtn);
                _this.addChild$framework_JSContainer(_this.openProjectBtn);
                _this.addChild$framework_JSContainer(_this.editorTabs);
                return _this;
            }
            Builder.prototype.openProject = function (file) {
                this.project = file;
                var editor = new framework.builder.editors.VisualEditor(this);
                editor.open(file);
                this.openEditor(file.getName(), editor);
            };
            Builder.prototype.getProject = function () {
                return this.project;
            };
            Builder.prototype.openEditor = function (title, editor) {
                var l = new Builder.Builder$3(this);
                var body = new framework.lightning.TabBody("editorBody");
                body.addChild$framework_JSContainer(editor);
                var item = new framework.lightning.TabItem("visualEditor", body);
                item.setTitle(title);
                this.editorTabs.addItem$framework_lightning_TabItem(item);
                this.activeEditor = editor;
                item.addTabActionListener(l);
                this.editorTabs.setActive(item);
                return item;
            };
            return Builder;
        }(framework.lightning.LTContainer));
        builder.Builder = Builder;
        Builder["__class"] = "framework.builder.Builder";
        Builder["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (Builder) {
            var Builder$0 = (function () {
                function Builder$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Builder$0.prototype.performAction = function (source, evt) {
                    if (this.__parent.activeEditor != null) {
                        this.__parent.activeEditor.save();
                    }
                };
                return Builder$0;
            }());
            Builder.Builder$0 = Builder$0;
            Builder$0["__interfaces"] = ["framework.EventListener"];
            var Builder$1 = (function () {
                function Builder$1(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Builder$1.prototype.performAction = function (source, evt) {
                    this.__parent.openProjectModal.open();
                    this.__parent.openProjectModal.init();
                    this.__parent.backdrop.open();
                };
                return Builder$1;
            }());
            Builder.Builder$1 = Builder$1;
            Builder$1["__interfaces"] = ["framework.EventListener"];
            var Builder$2 = (function () {
                function Builder$2(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Builder$2.prototype.performAction = function (source, evt) {
                    this.__parent.newFileModal.open();
                    this.__parent.backdrop.open();
                };
                return Builder$2;
            }());
            Builder.Builder$2 = Builder$2;
            Builder$2["__interfaces"] = ["framework.EventListener"];
            var Builder$3 = (function () {
                function Builder$3(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.lightning.TabItem} item
                 */
                Builder$3.prototype.onClose = function (item) {
                };
                /**
                 *
                 * @param {framework.lightning.TabItem} item
                 */
                Builder$3.prototype.onActivate = function (item) {
                    this.__parent.activeEditor.setRendered(false);
                };
                return Builder$3;
            }());
            Builder.Builder$3 = Builder$3;
            Builder$3["__interfaces"] = ["framework.lightning.TabActionListener"];
        })(Builder = builder.Builder || (builder.Builder = {}));
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
                for (var index4183 = this.getChildren().iterator(); index4183.hasNext();) {
                    var child = index4183.next();
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
        DescriptionList["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
        FormLayout["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var ItemSelector = (function (_super) {
            __extends(ItemSelector, _super);
            function ItemSelector(name, stitle) {
                var _this = _super.call(this, name, stitle) || this;
                /*private*/ _this.input = new framework.JSInput("input");
                /*private*/ _this.saveButton = new framework.lightning.Button().setLabel("Save");
                /*private*/ _this.section = new framework.lightning.Section("section", "All Files");
                /*private*/ _this.filesList = new framework.builder.FilesList("filesList");
                _this.setTag("section");
                _this.addClass("slds-modal_large slds-app-launcher");
                _this.getHeader().addClass("slds-app-launcher__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center");
                _this.getTitle().setAttribute("class", "slds-text-heading_small");
                _this.getTitle().setTag("label");
                var inputElement = new framework.lightning.FormElement("inputElement", "div");
                inputElement.setLabel("");
                inputElement.setInput(_this.input);
                _this.input.addClass("slds-input");
                var headerInput = new framework.JSContainer("div").addClass("slds-app-launcher__header-search");
                headerInput.addChild$framework_JSContainer(inputElement);
                _this.getHeader().addChild$framework_JSContainer(headerInput);
                _this.saveButton.setState(framework.lightning.Button.STATE_NEUTRAL);
                _this.getHeader().addChild$framework_JSContainer(_this.saveButton);
                _this.getContent().addChild$framework_JSContainer(_this.section);
                _this.getContent().addClass("slds-app-launcher__content slds-p-around_medium");
                _this.section.getContent().addChild$framework_JSContainer(_this.filesList);
                _this.setLarge(true);
                _this.setStyle("width", "80%");
                return _this;
            }
            ItemSelector.prototype.getInput = function () {
                return this.input;
            };
            ItemSelector.prototype.getSaveButton = function () {
                return this.saveButton;
            };
            ItemSelector.prototype.getSection = function () {
                return this.section;
            };
            ItemSelector.prototype.getFilesList = function () {
                return this.filesList;
            };
            return ItemSelector;
        }(framework.lightning.Modal));
        builder.ItemSelector = ItemSelector;
        ItemSelector["__class"] = "framework.builder.ItemSelector";
        ItemSelector["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
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
        ComponentsTabs["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var ProtertiesEditorTabs = (function (_super) {
                __extends(ProtertiesEditorTabs, _super);
                function ProtertiesEditorTabs(name) {
                    var _this = _super.call(this, name) || this;
                    _this.addClass("slds-tabs_compact");
                    return _this;
                }
                ProtertiesEditorTabs.prototype.addItem$java_lang_String$framework_builder_properties_PropertiesEditor = function (label, editor) {
                    var body = new framework.lightning.TabBody("edi");
                    body.addChild$framework_JSContainer(editor);
                    var item = new framework.lightning.TabItem("tabItem_" + editor.getName(), body).setTitle(label);
                    this.addItem$framework_lightning_TabItem(item);
                    return item;
                };
                ProtertiesEditorTabs.prototype.addItem = function (label, editor) {
                    if (((typeof label === 'string') || label === null) && ((editor != null && (editor["__interfaces"] != null && editor["__interfaces"].indexOf("framework.builder.properties.PropertiesEditor") >= 0 || editor.constructor != null && editor.constructor["__interfaces"] != null && editor.constructor["__interfaces"].indexOf("framework.builder.properties.PropertiesEditor") >= 0)) || editor === null)) {
                        return this.addItem$java_lang_String$framework_builder_properties_PropertiesEditor(label, editor);
                    }
                    else if (((label != null && label instanceof framework.lightning.TabItem) || label === null) && editor === undefined) {
                        return this.addItem$framework_lightning_TabItem(label);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return ProtertiesEditorTabs;
            }(framework.lightning.Tabs));
            properties.ProtertiesEditorTabs = ProtertiesEditorTabs;
            ProtertiesEditorTabs["__class"] = "framework.builder.properties.ProtertiesEditorTabs";
            ProtertiesEditorTabs["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableTextComponent = (function (_super) {
            __extends(JSDesignableTextComponent, _super);
            function JSDesignableTextComponent(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            JSDesignableTextComponent.prototype.setParameter$java_lang_String$java_lang_String$boolean = function (key, value, designMode) {
                this.delegate.setParameter(key, value, designMode);
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             * @param {boolean} designMode
             */
            JSDesignableTextComponent.prototype.setParameter = function (key, value, designMode) {
                if (((typeof key === 'string') || key === null) && ((typeof value === 'string') || value === null) && ((typeof designMode === 'boolean') || designMode === null)) {
                    return this.setParameter$java_lang_String$java_lang_String$boolean(key, value, designMode);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             *
             * @return {*}
             */
            JSDesignableTextComponent.prototype.getDesignables = function () {
                return (new java.util.LinkedList());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableTextComponent.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {*}
             */
            JSDesignableTextComponent.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var param = new framework.design.TextParameter("text", "Text", "Basic");
                params.add(param);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextComponent.prototype.addDesignable = function (designable) {
                throw new java.lang.RuntimeException("Cannot add children to this component");
            };
            return JSDesignableTextComponent;
        }(framework.TextComponent));
        designables.JSDesignableTextComponent = JSDesignableTextComponent;
        JSDesignableTextComponent["__class"] = "framework.designables.JSDesignableTextComponent";
        JSDesignableTextComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var StructureTreeItem = (function (_super) {
                __extends(StructureTreeItem, _super);
                function StructureTreeItem(name, designable) {
                    var _this = _super.call(this, name, designable.getName()) || this;
                    _this.designable = null;
                    _this.designable = designable;
                    framework.designables.DesignableDelegate.setDroppableOptions(designable, true);
                    var options = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DroppableOptions", "def.jqueryui.jqueryui.DroppableEvents"] });
                    options.greedy = true;
                    options.accept = ".designer-component";
                    options.tolerance = "pointer";
                    options.activeClass = "drop-active";
                    options.drop = function (event, param) {
                        event.stopPropagation();
                        var identifier = event.srcElement.getAttribute("identifier");
                        var factory = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(identifier);
                        var container = factory.build(new framework.builder.marshalling.Component(), true);
                        try {
                            designable.addDesignable(container);
                        }
                        catch (e) {
                            alert(e.message);
                        }
                        ;
                        container.render();
                        framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.editors.Structure).reload();
                        framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.editors.Structure).render();
                    };
                    _this.setDroppableOptions(options);
                    return _this;
                }
                StructureTreeItem.prototype.getDesignable = function () {
                    return this.designable;
                };
                /**
                 *
                 * @param {boolean} b
                 */
                StructureTreeItem.prototype.select = function (b) {
                    _super.prototype.select.call(this, b);
                    framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.Selector).select(this.designable);
                };
                return StructureTreeItem;
            }(framework.TreeItem));
            editors.StructureTreeItem = StructureTreeItem;
            StructureTreeItem["__class"] = "framework.builder.editors.StructureTreeItem";
            StructureTreeItem["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AttributeEditor = (function (_super) {
                __extends(AttributeEditor, _super);
                function AttributeEditor() {
                    return _super.call(this, "attribute") || this;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                AttributeEditor.prototype.performAction = function (source, evt) {
                    var attr = this.parameter.name;
                    var value = this.getValue();
                    this.designable.setAttribute(attr, value);
                };
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                AttributeEditor.prototype.initEditor = function (designable, parameter) {
                    var attr = parameter.name;
                    var value = designable.getAttribute(attr);
                    this.setValue$java_lang_String(value);
                };
                return AttributeEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.AttributeEditor = AttributeEditor;
            AttributeEditor["__class"] = "framework.builder.properties.AttributeEditor";
            AttributeEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var NameEditor = (function (_super) {
                __extends(NameEditor, _super);
                function NameEditor() {
                    return _super.call(this, "NameEditor") || this;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                NameEditor.prototype.performAction = function (source, evt) {
                    var name = this.getValue();
                    this.designable['setParameter$java_lang_String$java_lang_String$boolean']("name", name, true);
                    this.designable.setName(name);
                };
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                NameEditor.prototype.initEditor = function (designable, parameter) {
                    this.setValue$java_lang_String(designable.getName());
                };
                return NameEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.NameEditor = NameEditor;
            NameEditor["__class"] = "framework.builder.properties.NameEditor";
            NameEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var StyleEditor = (function (_super) {
                __extends(StyleEditor, _super);
                function StyleEditor() {
                    return _super.call(this, "styleEditor") || this;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                StyleEditor.prototype.performAction = function (source, evt) {
                    var style = this.parameter.name;
                    var value = this.getValue();
                    this.designable.setStyle(style, value);
                };
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                StyleEditor.prototype.initEditor = function (designable, parameter) {
                    this.setValue$java_lang_String(designable.getStyle(parameter.name));
                };
                return StyleEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.StyleEditor = StyleEditor;
            StyleEditor["__class"] = "framework.builder.properties.StyleEditor";
            StyleEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var TextEditor = (function (_super) {
                __extends(TextEditor, _super);
                function TextEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                TextEditor.prototype.performAction = function (source, evt) {
                    var text = this.getValue();
                    this.designable.setHtml(text);
                };
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                TextEditor.prototype.initEditor = function (designable, parameter) {
                    this.setValue$java_lang_String(designable.getHtml());
                };
                return TextEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.TextEditor = TextEditor;
            TextEditor["__class"] = "framework.builder.properties.TextEditor";
            TextEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var ValuePropertyEditor = (function (_super) {
                __extends(ValuePropertyEditor, _super);
                function ValuePropertyEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                ValuePropertyEditor.prototype.initEditor = function (designable, parameter) {
                    this.setValue$java_lang_String(designable.getValue().toString());
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                ValuePropertyEditor.prototype.performAction = function (source, evt) {
                    var value = this.getValue();
                    source.setValue(value);
                };
                return ValuePropertyEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.ValuePropertyEditor = ValuePropertyEditor;
            ValuePropertyEditor["__class"] = "framework.builder.properties.ValuePropertyEditor";
            ValuePropertyEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var EventTypeEditor = (function (_super) {
                __extends(EventTypeEditor, _super);
                function EventTypeEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                EventTypeEditor.prototype.performAction = function (source, evt) {
                    console.info("dsfds");
                };
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                EventTypeEditor.prototype.initEditor = function (designable, parameter) {
                };
                return EventTypeEditor;
            }(framework.builder.properties.AbstractSelectPropertyEditor));
            properties.EventTypeEditor = EventTypeEditor;
            EventTypeEditor["__class"] = "framework.builder.properties.EventTypeEditor";
            EventTypeEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var CSSEditor = (function (_super) {
                __extends(CSSEditor, _super);
                function CSSEditor(name) {
                    var _this = _super.call(this, name) || this;
                    _this.editor = null;
                    var config = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
                    config.autofocus = true;
                    config.lineNumbers = true;
                    var keys = new Object();
                    keys["Ctrl-Space"] = "autocomplete";
                    config.extraKeys = keys;
                    config.mode = "text/css";
                    _this.setConfig(config);
                    return _this;
                }
                return CSSEditor;
            }(framework.builder.editors.CodeMirrorEditor));
            editors.CSSEditor = CSSEditor;
            CSSEditor["__class"] = "framework.builder.editors.CSSEditor";
            CSSEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.renderer.Renderer", "framework.Renderable", "framework.InputField"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var HTMLEditor = (function (_super) {
                __extends(HTMLEditor, _super);
                function HTMLEditor(name) {
                    var _this = _super.call(this, name) || this;
                    var config = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
                    config.autofocus = true;
                    config.lineNumbers = true;
                    var keys = new Object();
                    keys["Ctrl-Space"] = "autocomplete";
                    config.extraKeys = keys;
                    var mode = new Object();
                    mode["name"] = "html";
                    config.mode = mode;
                    _this.setConfig(config);
                    return _this;
                }
                return HTMLEditor;
            }(framework.builder.editors.CodeMirrorEditor));
            editors.HTMLEditor = HTMLEditor;
            HTMLEditor["__class"] = "framework.builder.editors.HTMLEditor";
            HTMLEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.renderer.Renderer", "framework.Renderable", "framework.InputField"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var JavascriptEditor = (function (_super) {
                __extends(JavascriptEditor, _super);
                function JavascriptEditor(name) {
                    var _this = _super.call(this, name) || this;
                    var config = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.codemirror.codemirror.EditorConfiguration"] });
                    config.autofocus = true;
                    config.lineNumbers = true;
                    var keys = new Object();
                    keys["Ctrl-Space"] = "autocomplete";
                    config.extraKeys = keys;
                    var mode = new Object();
                    mode["name"] = "javascript";
                    mode["globalVars"] = true;
                    config.mode = mode;
                    _this.setConfig(config);
                    return _this;
                }
                return JavascriptEditor;
            }(framework.builder.editors.CodeMirrorEditor));
            editors.JavascriptEditor = JavascriptEditor;
            JavascriptEditor["__class"] = "framework.builder.editors.JavascriptEditor";
            JavascriptEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.renderer.Renderer", "framework.Renderable", "framework.InputField"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var OptionsEditor = (function (_super) {
                __extends(OptionsEditor, _super);
                function OptionsEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                OptionsEditor.prototype.initEditor = function (designable, parameter) {
                    var value = "";
                    var select = designable;
                    for (var index4184 = select.getChildren().iterator(); index4184.hasNext();) {
                        var c = index4184.next();
                        {
                            var opt = c;
                            value = value + "\n" + opt.getText();
                        }
                    }
                    this.setValue$java_lang_String(value);
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                OptionsEditor.prototype.performAction = function (source, evt) {
                    var value = this.getValue();
                    var options = value.split("\n");
                    var select = this.designable;
                    select.getChildren().clear();
                    select.setRendered(false);
                    for (var index4185 = 0; index4185 < options.length; index4185++) {
                        var opt = options[index4185];
                        {
                            var option = new framework.JSOption(opt, opt);
                            select.addOption(option);
                        }
                    }
                };
                return OptionsEditor;
            }(framework.builder.properties.AbstractTextAreaPropertyEditor));
            properties.OptionsEditor = OptionsEditor;
            OptionsEditor["__class"] = "framework.builder.properties.OptionsEditor";
            OptionsEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
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
            BasicComponentLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                    _this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button"));
                    return _this;
                }
                return LightningComponentLibrary;
            }(framework.builder.ComponentsLibrary));
            libraries.LightningComponentLibrary = LightningComponentLibrary;
            LightningComponentLibrary["__class"] = "framework.builder.libraries.LightningComponentLibrary";
            LightningComponentLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_3) {
        var editors;
        (function (editors) {
            var StructureDockedComposer = (function (_super) {
                __extends(StructureDockedComposer, _super);
                function StructureDockedComposer(name, root, builder) {
                    var _this = _super.call(this, name) || this;
                    _this.structure = null;
                    _this.getTitle().setHtml("Structure");
                    var bf = framework.core.BeanFactory.getInstance();
                    _this.structure = new framework.builder.editors.Structure("strcy", root, builder);
                    bf.addBean(framework.builder.editors.Structure, _this.structure);
                    _this.getBody().addChild$framework_JSContainer(_this.structure);
                    return _this;
                }
                return StructureDockedComposer;
            }(framework.lightning.DockedComposer));
            editors.StructureDockedComposer = StructureDockedComposer;
            StructureDockedComposer["__class"] = "framework.builder.editors.StructureDockedComposer";
            StructureDockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
        })(editors = builder_3.editors || (builder_3.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var LibrariesDockedComposer = (function (_super) {
                __extends(LibrariesDockedComposer, _super);
                function LibrariesDockedComposer(name) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.basicComponentLib = new framework.builder.libraries.BasicComponentLibrary();
                    /*private*/ _this.lightningComponentLib = new framework.builder.libraries.LightningComponentLibrary();
                    /*private*/ _this.componentsTabs = new framework.builder.ComponentsTabs("componentsTabs");
                    _this.getTitle().setHtml("Components Library");
                    _this.getBody().addChild$framework_JSContainer(_this.componentsTabs);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", _this.basicComponentLib);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", _this.lightningComponentLib);
                    _this.componentsTabs.getItems().get(0).setActive(true);
                    return _this;
                }
                return LibrariesDockedComposer;
            }(framework.lightning.DockedComposer));
            libraries.LibrariesDockedComposer = LibrariesDockedComposer;
            LibrariesDockedComposer["__class"] = "framework.builder.libraries.LibrariesDockedComposer";
            LibrariesDockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var PropertiesDockedComposer = (function (_super) {
                __extends(PropertiesDockedComposer, _super);
                function PropertiesDockedComposer(name) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.mainEditor = new framework.builder.properties.ProtertiesEditorTabs("mainEditor");
                    /*private*/ _this.basicEditorBody = new framework.builder.properties.BasicPropertiesEditor("basic");
                    /*private*/ _this.advancedPropertiesEditorBody = new framework.builder.properties.AdvancedPropertiesEditor();
                    _this.getTitle().setHtml("Properties");
                    _this.addClass("properties-composer");
                    _this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Basic", _this.basicEditorBody).setActive(true);
                    _this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Advanced", _this.advancedPropertiesEditorBody);
                    _this.getBody().addChild$framework_JSContainer(_this.mainEditor);
                    return _this;
                }
                PropertiesDockedComposer.prototype.selectComponent = function (designable) {
                    this.basicEditorBody.setComponent(designable);
                    this.advancedPropertiesEditorBody.setComponent(designable);
                    this.mainEditor.getItems().get(0).setActive(true);
                };
                return PropertiesDockedComposer;
            }(framework.lightning.DockedComposer));
            properties.PropertiesDockedComposer = PropertiesDockedComposer;
            PropertiesDockedComposer["__class"] = "framework.builder.properties.PropertiesDockedComposer";
            PropertiesDockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var TopMenu = (function (_super) {
            __extends(TopMenu, _super);
            function TopMenu(name) {
                var _this = _super.call(this, name) || this;
                var actions = new framework.lightning.ButtonGroup("actions");
                actions.addButton$framework_lightning_Button(new framework.lightning.Button("new").setLabel("New").setState(framework.lightning.Button.STATE_NEUTRAL));
                actions.addButton$framework_lightning_Button(new framework.lightning.Button("edit").setLabel("Edit").setState(framework.lightning.Button.STATE_NEUTRAL));
                _this.addChild$framework_JSContainer(actions);
                return _this;
            }
            return TopMenu;
        }(framework.lightning.GlobalHeader));
        builder.TopMenu = TopMenu;
        TopMenu["__class"] = "framework.builder.TopMenu";
        TopMenu["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var BasePropertiesEditor = (function (_super) {
                __extends(BasePropertiesEditor, _super);
                function BasePropertiesEditor(name) {
                    var _this = _super.call(this, name, "div") || this;
                    _this.component = null;
                    _this.setHorizontal(true).addClass("slds-form_compact");
                    return _this;
                }
                BasePropertiesEditor.prototype.setComponent = function (designable) {
                    this.component = designable;
                };
                BasePropertiesEditor.prototype.addProperty$java_lang_String$framework_JSInput = function (label, input) {
                    var width = new framework.lightning.FormElement("elem", "div");
                    width.setLabel(label);
                    input.addClass("slds-input");
                    width.setInput(input);
                    this.addFormElement(width);
                    return this;
                };
                BasePropertiesEditor.prototype.addProperty = function (label, input) {
                    if (((typeof label === 'string') || label === null) && ((input != null && input instanceof framework.JSInput) || input === null)) {
                        return this.addProperty$java_lang_String$framework_JSInput(label, input);
                    }
                    else if (((label != null && label instanceof framework.design.Parameter) || label === null) && ((input != null && (input["__interfaces"] != null && input["__interfaces"].indexOf("framework.design.Designable") >= 0 || input.constructor != null && input.constructor["__interfaces"] != null && input.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || input === null)) {
                        return this.addProperty$framework_design_Parameter$framework_design_Designable(label, input);
                    }
                    else
                        throw new Error('invalid overload');
                };
                BasePropertiesEditor.prototype.addProperty$framework_design_Parameter$framework_design_Designable = function (parameter, designable) {
                    var element = new framework.lightning.FormElement("elem", "div");
                    element.setLabel(parameter.label);
                    var editor = parameter.getEditor(this.component);
                    element.setInput(editor);
                    this.addFormElement(element);
                    return this;
                };
                return BasePropertiesEditor;
            }(framework.lightning.FormLayout));
            properties.BasePropertiesEditor = BasePropertiesEditor;
            BasePropertiesEditor["__class"] = "framework.builder.properties.BasePropertiesEditor";
            BasePropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var NewFile = (function (_super) {
            __extends(NewFile, _super);
            function NewFile(name, builder_) {
                var _this = _super.call(this, name, "New File") || this;
                /*private*/ _this.lightning = new framework.builder.UIFile("lightning").setAbbr("LGT").setTitle("Lightning").setHelp("Salesforce Lightning Project");
                /*private*/ _this.mobile = new framework.builder.UIFile("mobile").setAbbr("MOB").setTitle("Mobile Application").setHelp("Mobile application using OnsenUI framework");
                /*private*/ _this.__framework_builder_NewFile_html = new framework.builder.UIFile("templates").setAbbr("HTM").setTitle("HTML template").setHelp("Create a fragment of HTML that can be used as template for other components");
                /*private*/ _this.css = new framework.builder.UIFile("stylesheets").setAbbr("CSS").setTitle("CSS sheet").setHelp("Create an cascading stylesheet to be included in project");
                /*private*/ _this.javascript = new framework.builder.UIFile("scripts").setAbbr("JS").setTitle("Javascript file").setHelp("Create a new javascript file to be included in project");
                /*private*/ _this.files = (new java.util.LinkedList());
                /*private*/ _this.fileType = null;
                _this.builder = null;
                _this.builder = builder_;
                _this.getFilesList().addFile(_this.lightning);
                _this.getFilesList().addFile(_this.mobile);
                _this.getFilesList().addFile(_this.__framework_builder_NewFile_html);
                _this.getFilesList().addFile(_this.css);
                _this.getFilesList().addFile(_this.javascript);
                _this.files.add(_this.lightning);
                _this.files.add(_this.mobile);
                _this.files.add(_this.__framework_builder_NewFile_html);
                _this.files.add(_this.css);
                _this.files.add(_this.javascript);
                for (var index4186 = _this.files.iterator(); index4186.hasNext();) {
                    var file = index4186.next();
                    {
                        file.addEventListener(new NewFile.NewFile$0(_this), "click");
                    }
                }
                _this.getSaveButton().addEventListener(new NewFile.NewFile$1(_this), "click");
                return _this;
            }
            NewFile.prototype.createFile = function (name, type) {
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "stylesheets")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".css")) {
                        name = name + ".css";
                    }
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "scripts")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".js")) {
                        name = name + ".js";
                    }
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "templates")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".html")) {
                        name = name + ".html";
                    }
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "data")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".dat")) {
                        name = name + ".dat";
                    }
                }
                var project = this.builder.getProject();
                project.createFile$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(name, type, new NewFile.NewFile$2(this));
            };
            NewFile.prototype.createLightning = function (name) {
                if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".prj")) {
                    name = name + ".prj";
                }
                framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.data.ProjectService).createProject(name, name, new NewFile.NewFile$3(this));
            };
            return NewFile;
        }(framework.builder.ItemSelector));
        builder.NewFile = NewFile;
        NewFile["__class"] = "framework.builder.NewFile";
        NewFile["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (NewFile) {
            var NewFile$0 = (function () {
                function NewFile$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                NewFile$0.prototype.performAction = function (source, evt) {
                    this.__parent.fileType = source.getName();
                };
                return NewFile$0;
            }());
            NewFile.NewFile$0 = NewFile$0;
            NewFile$0["__interfaces"] = ["framework.EventListener"];
            var NewFile$1 = (function () {
                function NewFile$1(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                NewFile$1.prototype.performAction = function (source, evt) {
                    if (this.__parent.fileType == null) {
                        alert("Please select a file type");
                        return;
                    }
                    var name = this.__parent.getInput().getValue();
                    if (name == null || name.trim().length <= 0) {
                        alert("Please enter a name for the file");
                        return;
                    }
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.__parent.fileType, "lightning")) {
                        this.__parent.createLightning(name);
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.__parent.fileType, "mobile")) {
                    }
                    else {
                        this.__parent.createFile(name, this.__parent.fileType);
                    }
                };
                return NewFile$1;
            }());
            NewFile.NewFile$1 = NewFile$1;
            NewFile$1["__interfaces"] = ["framework.EventListener"];
            var NewFile$2 = (function () {
                function NewFile$2(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} data
                 */
                NewFile$2.prototype.dataLoaded = function (data) {
                    alert(JSON.stringify(data));
                };
                return NewFile$2;
            }());
            NewFile.NewFile$2 = NewFile$2;
            NewFile$2["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            var NewFile$3 = (function () {
                function NewFile$3(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} data
                 */
                NewFile$3.prototype.dataLoaded = function (data) {
                    var project = new framework.builder.data.File(new Object(data));
                    this.__parent.close();
                    this.__parent.render();
                    this.__parent.getBackdrop().render();
                    this.__parent.builder.openProject(project);
                    this.__parent.builder.render();
                };
                return NewFile$3;
            }());
            NewFile.NewFile$3 = NewFile$3;
            NewFile$3["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
        })(NewFile = builder.NewFile || (builder.NewFile = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_4) {
        var OpenProject = (function (_super) {
            __extends(OpenProject, _super);
            function OpenProject(name, builder) {
                var _this = _super.call(this, name, "Open Project") || this;
                /*private*/ _this.selectedItem = null;
                _this.builder_ = null;
                _this.builder_ = builder;
                _this.getSaveButton().addEventListener(_this, "click");
                _this.getInput().setVisible(false);
                return _this;
            }
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            OpenProject.prototype.performAction = function (source, evt) {
                if (source != null && source instanceof framework.builder.UIFile) {
                    this.selectedItem = source;
                }
                else if (this.selectedItem != null) {
                    var p = this.selectedItem.getData();
                    this.builder_.openProject(p);
                    this.close();
                    this.getBackdrop().close();
                }
            };
            /**
             *
             * @param {*} data
             */
            OpenProject.prototype.dataLoaded = function (data) {
                var nprojects = data;
                for (var index4187 = 0; index4187 < nprojects.length; index4187++) {
                    var p = nprojects[index4187];
                    {
                        var project = new framework.builder.data.File(p);
                        var file = new framework.builder.UIFile(project.getName());
                        file.setTitle(project.getTitle());
                        file.setAbbr("LGT");
                        file.setData(project);
                        file.addEventListener(this, "click");
                        this.getFilesList().addFile(file);
                    }
                }
                this.render();
            };
            OpenProject.prototype.init = function () {
                this.getFilesList().getChildren().clear();
                this.getFilesList().setRendered(false);
                framework.core.BeanFactory.getInstance().getBeanOfType(framework.builder.data.ProjectService).getProjects(this);
            };
            return OpenProject;
        }(framework.builder.ItemSelector));
        builder_4.OpenProject = OpenProject;
        OpenProject["__class"] = "framework.builder.OpenProject";
        OpenProject["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.builder.data.RemoteDataListener", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var AdvancedPropertiesEditor = (function (_super) {
                __extends(AdvancedPropertiesEditor, _super);
                function AdvancedPropertiesEditor() {
                    return _super.call(this, "advanced") || this;
                }
                AdvancedPropertiesEditor.prototype.setComponent = function (designable) {
                    _super.prototype.setComponent.call(this, designable);
                    this.clear();
                    for (var index4188 = this.component.getParameters().iterator(); index4188.hasNext();) {
                        var p = index4188.next();
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(p.category, "advanced"))
                                this.addProperty$framework_design_Parameter$framework_design_Designable(p, designable);
                        }
                    }
                };
                return AdvancedPropertiesEditor;
            }(framework.builder.properties.BasePropertiesEditor));
            properties.AdvancedPropertiesEditor = AdvancedPropertiesEditor;
            AdvancedPropertiesEditor["__class"] = "framework.builder.properties.AdvancedPropertiesEditor";
            AdvancedPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var BasicPropertiesEditor = (function (_super) {
                __extends(BasicPropertiesEditor, _super);
                function BasicPropertiesEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {*} designable
                 */
                BasicPropertiesEditor.prototype.setComponent = function (designable) {
                    _super.prototype.setComponent.call(this, designable);
                    this.clear();
                    for (var index4189 = designable.getParameters().iterator(); index4189.hasNext();) {
                        var param = index4189.next();
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(param.category, "Basic")) {
                                this.addProperty$framework_design_Parameter$framework_design_Designable(param, designable);
                            }
                        }
                    }
                };
                return BasicPropertiesEditor;
            }(framework.builder.properties.BasePropertiesEditor));
            properties.BasicPropertiesEditor = BasicPropertiesEditor;
            BasicPropertiesEditor["__class"] = "framework.builder.properties.BasicPropertiesEditor";
            BasicPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var EventsPropertiesEditor = (function (_super) {
                __extends(EventsPropertiesEditor, _super);
                function EventsPropertiesEditor() {
                    var _this = _super.call(this, "events") || this;
                    _this.setStacked(true);
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 */
                EventsPropertiesEditor.prototype.setComponent = function (designable) {
                    _super.prototype.setComponent.call(this, designable);
                    this.clear();
                    for (var index4190 = designable.getParameters().iterator(); index4190.hasNext();) {
                        var param = index4190.next();
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(param.category, "event")) {
                                this.addProperty$framework_design_Parameter$framework_design_Designable(param, designable);
                            }
                        }
                    }
                };
                return EventsPropertiesEditor;
            }(framework.builder.properties.BasePropertiesEditor));
            properties.EventsPropertiesEditor = EventsPropertiesEditor;
            EventsPropertiesEditor["__class"] = "framework.builder.properties.EventsPropertiesEditor";
            EventsPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
framework.designables.JSDesignableButton.stateLabels_$LI$();
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
