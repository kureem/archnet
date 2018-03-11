var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var framework;
(function (framework) {
    var builder;
    (function (builder) {
        var BuilderEventListener = (function () {
            function BuilderEventListener(jsSource, name, type) {
                this.jsSource = null;
                this.name = null;
                this.type = null;
                this.jsSource = jsSource;
                this.name = name;
                this.type = type;
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
                    var $scope = source.getScope();
                    $scope["xx"] = "";
                    if (window["lightning"]) {
                        var fn = this.name + "_" + this.type;
                        var myapp = source.getRoot();
                        myapp.constructor;
                        eval("myapp.helper." + fn + "(source,evt);");
                    }
                    else {
                        eval(this.jsSource);
                    }
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
        (function (data_1) {
            var BasicDataEnvironment = (function () {
                function BasicDataEnvironment() {
                }
                BasicDataEnvironment.structures_$LI$ = function () { if (BasicDataEnvironment.structures == null)
                    BasicDataEnvironment.structures = (new Array()); return BasicDataEnvironment.structures; };
                ;
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {*} listener
                 */
                BasicDataEnvironment.prototype.getDataStructures = function (source, listener) {
                    if (BasicDataEnvironment.structures_$LI$().length === 0) {
                        framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").getDataStructures(source, new BasicDataEnvironment.BasicDataEnvironment$0(this, listener));
                    }
                    else {
                        listener.dataLoaded(BasicDataEnvironment.structures_$LI$());
                    }
                };
                /**
                 *
                 * @param {framework.builder.data.DataStructure} datastructure
                 */
                BasicDataEnvironment.prototype.saveStructure = function (datastructure) {
                };
                /**
                 *
                 * @param {string} name
                 */
                BasicDataEnvironment.prototype.deleteStructure = function (name) {
                    var tmp = (new Array());
                    for (var index6440 = 0; index6440 < BasicDataEnvironment.structures_$LI$().length; index6440++) {
                        var structure = BasicDataEnvironment.structures_$LI$()[index6440];
                        {
                            if (!(function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(structure.getName(), name)) {
                                tmp.push(structure);
                            }
                        }
                    }
                    BasicDataEnvironment.structures = tmp;
                };
                return BasicDataEnvironment;
            }());
            data_1.BasicDataEnvironment = BasicDataEnvironment;
            BasicDataEnvironment["__class"] = "framework.builder.data.BasicDataEnvironment";
            BasicDataEnvironment["__interfaces"] = ["framework.builder.data.DataEnvironment"];
            (function (BasicDataEnvironment) {
                var BasicDataEnvironment$0 = (function () {
                    function BasicDataEnvironment$0(__parent, listener) {
                        this.listener = listener;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    BasicDataEnvironment$0.prototype.dataLoaded = function (data) {
                        var obj = data;
                        var sobjects = obj["sobjects"];
                        for (var index6441 = 0; index6441 < sobjects.length; index6441++) {
                            var o = sobjects[index6441];
                            {
                                var structure = new framework.builder.data.DataStructure(o);
                                framework.builder.data.BasicDataEnvironment.structures_$LI$().push(structure);
                            }
                        }
                        this.listener.dataLoaded(framework.builder.data.BasicDataEnvironment.structures_$LI$());
                    };
                    return BasicDataEnvironment$0;
                }());
                BasicDataEnvironment.BasicDataEnvironment$0 = BasicDataEnvironment$0;
                BasicDataEnvironment$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(BasicDataEnvironment = data_1.BasicDataEnvironment || (data_1.BasicDataEnvironment = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var DataField = (function () {
                function DataField(o) {
                    var _this = this;
                    if (((o != null && o instanceof Object) || o === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        this.object = null;
                        this.object = null;
                        (function () {
                            _this.object = o;
                        })();
                    }
                    else if (o === undefined) {
                        var __args = Array.prototype.slice.call(arguments);
                        this.object = null;
                        this.object = null;
                        (function () {
                            _this.object = new Object();
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
                DataField.prototype.getNative = function () {
                    return this.object;
                };
                DataField.prototype.getName = function () {
                    return this.object["name"];
                };
                DataField.prototype.getType = function () {
                    return this.object["type"];
                };
                DataField.prototype.getLabel = function () {
                    return this.object["label"];
                };
                DataField.prototype.getFormat = function () {
                    return this.object["format"];
                };
                DataField.prototype.getPrimaryKey = function () {
                    return this.object["primaryKey"];
                };
                DataField.prototype.getAutoNumber = function () {
                    return this.object["autoNumber"];
                };
                DataField.prototype.getByteLength = function () {
                    return this.object["byteLength"];
                };
                DataField.prototype.getCalculated = function () {
                    return this.object["calculated"];
                };
                DataField.prototype.getCreateable = function () {
                    return this.object["createable"];
                };
                DataField.prototype.getDefaultedOnCreate = function () {
                    return this.object["defaultedOnCreate"];
                };
                DataField.prototype.getDependentPicklist = function () {
                    return this.object["dependentPicklist"];
                };
                DataField.prototype.getFilterable = function () {
                    return this.object["filterable"];
                };
                DataField.prototype.getHtmlFormatted = function () {
                    return this.object["htmlFormatted"];
                };
                DataField.prototype.getNillable = function () {
                    return this.object["nillable"];
                };
                DataField.prototype.getRestrictedPicklist = function () {
                    return this.object["restrictedPicklist"];
                };
                DataField.prototype.getUnique = function () {
                    return this.object["unique"];
                };
                DataField.prototype.getUpdateable = function () {
                    return this.object["updateable"];
                };
                DataField.prototype.getCalculatedFormula = function () {
                    return this.object["calculatedFormula"];
                };
                DataField.prototype.getDefaultValue = function () {
                    return this.object["defaultValue"];
                };
                DataField.prototype.getDefaultValueFormula = function () {
                    return this.object["defaultValueFormula"];
                };
                DataField.prototype.getDigits = function () {
                    return this.object["digits"];
                };
                DataField.prototype.getLength = function () {
                    return this.object["length"];
                };
                DataField.prototype.getPicklistValues = function () {
                    return this.object["picklistValues"];
                };
                DataField.prototype.getPrecision = function () {
                    return this.object["precision"];
                };
                DataField.prototype.getRelationshipName = function () {
                    return this.object["relationshipName"];
                };
                DataField.prototype.getScale = function () {
                    return this.object["scale"];
                };
                DataField.prototype.getSortable = function () {
                    return this.object["sortable"];
                };
                DataField.prototype.getValue = function (field) {
                    var o = this.object[field];
                    return o;
                };
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
        (function (data_2) {
            var DataService = (function () {
                function DataService() {
                }
                DataService.prototype.getDataTypes = function (listener) {
                    $.get("/objects/describe", function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                DataService.prototype.describe = function (type, listener) {
                    $.get("/objects/describe/" + type, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                DataService.prototype.query = function (query, listener) {
                    $.get("/objects/query?q=" + query, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                DataService.prototype.create = function (type, fields, listener) {
                    var data = new Object();
                    {
                        var array6443 = fields.keySet();
                        for (var index6442 = 0; index6442 < array6443.length; index6442++) {
                            var key = array6443[index6442];
                            {
                                data[key] = fields.get(key);
                            }
                        }
                    }
                    $.post("/projects/create?name=" + type, data, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                DataService.prototype.update = function (type, objectId, fields, listener) {
                    var data = new Object();
                    {
                        var array6445 = fields.keySet();
                        for (var index6444 = 0; index6444 < array6445.length; index6444++) {
                            var key = array6445[index6444];
                            {
                                data[key] = fields.get(key);
                            }
                        }
                    }
                    $.post("/projects/update?name=" + type + "&id=" + objectId, data, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                DataService.prototype.delete = function (type, objectId, listener) {
                    $.get("/projects/delete?name=" + type + "&id=" + objectId, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                return DataService;
            }());
            data_2.DataService = DataService;
            DataService["__class"] = "framework.builder.data.DataService";
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
        (function (data_3) {
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
                File.prototype.getDataSources = function () {
                    return this.getChild("datasources").getChildren();
                };
                File.prototype.getDataStructures = function (source, listener) {
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.DataEnvironment").getDataStructures(source, listener);
                };
                File.prototype.getComponents = function () {
                    return this.getChild("components").getChildren();
                };
                File.prototype.getFile = function (name, type) {
                    return this.getChild(type).getChild(name);
                };
                File.prototype.deleteFile = function (source, name, type, l) {
                    var f = this.getFile(name, type);
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").deleteFile(source, f.getPath(), new File.File$0(this, l));
                };
                File.prototype.getChild = function (name) {
                    {
                        var array6447 = this.getChildren();
                        for (var index6446 = 0; index6446 < array6447.length; index6446++) {
                            var f = array6447[index6446];
                            {
                                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(f.getName(), name)) {
                                    return f;
                                }
                            }
                        }
                    }
                    return null;
                };
                File.prototype.createCss = function (source, name, listener) {
                    this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "stylesheets", listener);
                };
                File.prototype.createTemplate = function (source, name, listener) {
                    this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "templates", listener);
                };
                File.prototype.createScript = function (source, name, listener) {
                    this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, "scripts", listener);
                };
                File.prototype.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener = function (source, name, type, listener) {
                    this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, name, type, listener);
                };
                File.prototype.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener = function (source, name, title, dir, listener) {
                    var path = this.getPath() + "/" + dir;
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").createFile(source, name, title, path, new File.File$1(this, dir, listener));
                };
                File.prototype.createFile = function (source, name, title, dir, listener) {
                    if (((source != null && source instanceof framework.JSContainer) || source === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof dir === 'string') || dir === null) && ((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || listener === null)) {
                        return this.createFile$framework_JSContainer$java_lang_String$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, title, dir, listener);
                    }
                    else if (((source != null && source instanceof framework.JSContainer) || source === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((dir != null && (dir["__interfaces"] != null && dir["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || dir.constructor != null && dir.constructor["__interfaces"] != null && dir.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || dir === null) && listener === undefined) {
                        return this.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, title, dir);
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
                File.prototype.removeFile = function (f) {
                    var children = (new Array());
                    {
                        var array6449 = this.file["children"];
                        for (var index6448 = 0; index6448 < array6449.length; index6448++) {
                            var o = array6449[index6448];
                            {
                                if (!(function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(o["name"], f.getName())) {
                                    children.push(o);
                                }
                            }
                        }
                    }
                    this.file["children"] = children;
                };
                File.prototype.getChildren = function () {
                    var result = (new Array());
                    {
                        var array6451 = this.file["children"];
                        for (var index6450 = 0; index6450 < array6451.length; index6450++) {
                            var o = array6451[index6450];
                            {
                                result.push(new File(o));
                            }
                        }
                    }
                    return result;
                };
                return File;
            }());
            data_3.File = File;
            File["__class"] = "framework.builder.data.File";
            (function (File) {
                var File$0 = (function () {
                    function File$0(__parent, l) {
                        this.l = l;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    File$0.prototype.dataLoaded = function (data) {
                        this.l.dataLoaded(data);
                    };
                    return File$0;
                }());
                File.File$0 = File$0;
                File$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
                var File$1 = (function () {
                    function File$1(__parent, dir, listener) {
                        this.dir = dir;
                        this.listener = listener;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    File$1.prototype.dataLoaded = function (data) {
                        this.__parent.getChild(this.dir).getNative()["children"].push(data);
                        this.listener.dataLoaded(data);
                    };
                    return File$1;
                }());
                File.File$1 = File$1;
                File$1["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(File = data_3.File || (data_3.File = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_4) {
            var HerokuProjectService = (function () {
                function HerokuProjectService() {
                }
                HerokuProjectService.prototype.createProject = function (source, name, title, listener) {
                    var data = new Object();
                    data["name"] = name;
                    data["title"] = title;
                    $.get("/projects/create-project", data, function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    }, "json");
                };
                HerokuProjectService.prototype.getProjects = function (source, listener) {
                    $.get("/projects/get-projects", function (t, u, v) {
                        listener.dataLoaded(t);
                        return null;
                    });
                };
                HerokuProjectService.prototype.saveFile = function (source, file, listener) {
                    $.post("/projects/update-file", file.getNative(), function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                HerokuProjectService.prototype.createFile = function (source, name, title, dir, listener) {
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
                HerokuProjectService.prototype.deleteFile = function (source, path, listener) {
                    var data = new Object();
                    data["path"] = path;
                    $.get("/projects/delete-file", data, function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                HerokuProjectService.prototype.getDataStructures = function (source, listener) {
                    $.get("/projects/structures", new Object(), function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                HerokuProjectService.prototype.getDataStructure = function (source, listener, name) {
                    $.get("/projects/structures/" + name, new Object(), function (t, u, v) {
                        if (listener != null)
                            listener.dataLoaded(t);
                        return t;
                    });
                };
                return HerokuProjectService;
            }());
            data_4.HerokuProjectService = HerokuProjectService;
            HerokuProjectService["__class"] = "framework.builder.data.HerokuProjectService";
            HerokuProjectService["__interfaces"] = ["framework.builder.data.ProjectService"];
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_5) {
            var RestDataSource = (function () {
                function RestDataSource() {
                    /*private*/ this.cached = (new Array());
                    this.config = null;
                }
                RestDataSource.prototype.getConfig = function () {
                    return this.config;
                };
                RestDataSource.prototype.setUrl = function (url) {
                    this.config["url"] = url;
                };
                RestDataSource.prototype.setFilter = function (filter) {
                    this.config["filter"] = filter;
                };
                RestDataSource.prototype.setConfig = function (config) {
                    this.config = config;
                };
                RestDataSource.prototype.getCached = function () {
                    return this.cached;
                };
                /**
                 *
                 * @param {*} loader
                 * @param {number} offset
                 * @param {number} max
                 */
                RestDataSource.prototype.getList = function (loader, offset, max) {
                    var _this = this;
                    var url = this.config["url"];
                    var filter = this.config["filter"];
                    if (filter == null) {
                        filter = new Object();
                    }
                    filter["offset"] = offset;
                    filter["max"] = max;
                    $.get(url, filter, function (t, u, v) {
                        _this.cached = t;
                        loader.dataLoaded(t);
                        return null;
                    }, "json");
                };
                RestDataSource.prototype.save$jsweet_lang_Object$framework_builder_data_RemoteDataListener = function (data, response) {
                    var url = this.config["url"];
                    $.post(url, data, function (t, u, v) {
                        response.dataLoaded(t);
                        return null;
                    }, "json");
                };
                /**
                 *
                 * @param {Object} data
                 * @param {*} response
                 */
                RestDataSource.prototype.save = function (data, response) {
                    if (((data != null && data instanceof Object) || data === null) && ((response != null && (response["__interfaces"] != null && response["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || response.constructor != null && response.constructor["__interfaces"] != null && response.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || response === null)) {
                        return this.save$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data, response);
                    }
                    else
                        throw new Error('invalid overload');
                };
                RestDataSource.prototype.delete$jsweet_lang_Object$framework_builder_data_RemoteDataListener = function (data, response) {
                    var url = this.config["url"];
                    $.post(url + "/delete", data, function (t, u, v) {
                        response.dataLoaded(t);
                        return null;
                    }, "json");
                };
                /**
                 *
                 * @param {Object} data
                 * @param {*} response
                 */
                RestDataSource.prototype.delete = function (data, response) {
                    if (((data != null && data instanceof Object) || data === null) && ((response != null && (response["__interfaces"] != null && response["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || response.constructor != null && response.constructor["__interfaces"] != null && response.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || response === null)) {
                        return this.delete$jsweet_lang_Object$framework_builder_data_RemoteDataListener(data, response);
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @param {*} loader
                 */
                RestDataSource.prototype.count = function (loader) {
                    var url = this.config["url"];
                    var filter = this.config["filter"];
                    if (filter == null) {
                        filter = new Object();
                    }
                    $.get(url + "/count", filter, function (t, u, v) {
                        loader.dataLoaded(t);
                        return null;
                    }, "json");
                };
                RestDataSource.prototype.getItem$jsweet_lang_Object$framework_builder_data_RemoteDataListener = function (item, loader) {
                    var url = this.config["url"];
                    $.get(url + "/load", item, function (t, u, v) {
                        loader.dataLoaded(t);
                        return null;
                    }, "json");
                };
                /**
                 *
                 * @param {Object} item
                 * @param {*} loader
                 */
                RestDataSource.prototype.getItem = function (item, loader) {
                    if (((item != null && item instanceof Object) || item === null) && ((loader != null && (loader["__interfaces"] != null && loader["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0 || loader.constructor != null && loader.constructor["__interfaces"] != null && loader.constructor["__interfaces"].indexOf("framework.builder.data.RemoteDataListener") >= 0)) || loader === null)) {
                        return this.getItem$jsweet_lang_Object$framework_builder_data_RemoteDataListener(item, loader);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return RestDataSource;
            }());
            data_5.RestDataSource = RestDataSource;
            RestDataSource["__class"] = "framework.builder.data.RestDataSource";
            RestDataSource["__interfaces"] = ["framework.builder.data.DataSource"];
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var SalesforceProjectService = (function () {
                function SalesforceProjectService() {
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {string} name
                 * @param {string} title
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.createProject = function (source, name, title, listener) {
                    var request = new Object();
                    request["name"] = name;
                    request["title"] = title;
                    request["method"] = "createProject";
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(source, "ProjectService", request, function (a, b) {
                        listener.dataLoaded(a);
                        return true;
                    });
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.getProjects = function (source, listener) {
                    var request = new Object();
                    request["method"] = "getProjects";
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(source, "ProjectService", request, function (a, b) {
                        listener.dataLoaded(a);
                        return true;
                    });
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {framework.builder.data.File} file
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.saveFile = function (source, file, listener) {
                    var request = new Object();
                    request["file"] = file;
                    request["method"] = "saveFile";
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(source, "ProjectService", request, function (a, b) {
                        listener.dataLoaded(a);
                        return true;
                    });
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {string} name
                 * @param {string} title
                 * @param {string} dir
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.createFile = function (source, name, title, dir, listener) {
                    var request = new Object();
                    request["name"] = name;
                    request["title"] = title;
                    request["dir"] = dir;
                    request["method"] = "createFile";
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(source, "ProjectService", request, function (a, b) {
                        listener.dataLoaded(a);
                        return true;
                    });
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {string} path
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.deleteFile = function (source, path, listener) {
                    var request = new Object();
                    request["path"] = path;
                    request["method"] = "deleteFile";
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(source, "ProjectService", request, function (a, b) {
                        listener.dataLoaded(a);
                        return true;
                    });
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {*} listener
                 */
                SalesforceProjectService.prototype.getDataStructures = function (source, listener) {
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {*} listener
                 * @param {string} name
                 */
                SalesforceProjectService.prototype.getDataStructure = function (source, listener, name) {
                };
                return SalesforceProjectService;
            }());
            data.SalesforceProjectService = SalesforceProjectService;
            SalesforceProjectService["__class"] = "framework.builder.data.SalesforceProjectService";
            SalesforceProjectService["__interfaces"] = ["framework.builder.data.ProjectService"];
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
        var editors;
        (function (editors) {
            var NewFileStructureEventListener = (function () {
                function NewFileStructureEventListener(type, file, structure) {
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
                NewFileStructureEventListener.prototype.performAction = function (source, evt) {
                    var name = prompt("Enter the name");
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "stylesheets")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".css")) {
                            name = name + ".css";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "scripts")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".js")) {
                            name = name + ".js";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "templates")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".html")) {
                            name = name + ".html";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "data")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".dat")) {
                            name = name + ".dat";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "components")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                            name = name + ".cmp";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "datasources")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".ds")) {
                            name = name + ".ds";
                        }
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.type, "variables")) {
                        if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".var")) {
                            name = name + ".var";
                        }
                    }
                    this.file.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(source, name, this.type, new NewFileStructureEventListener.NewFileStructureEventListener$0(this));
                };
                return NewFileStructureEventListener;
            }());
            editors.NewFileStructureEventListener = NewFileStructureEventListener;
            NewFileStructureEventListener["__class"] = "framework.builder.editors.NewFileStructureEventListener";
            NewFileStructureEventListener["__interfaces"] = ["framework.EventListener"];
            (function (NewFileStructureEventListener) {
                var NewFileStructureEventListener$0 = (function () {
                    function NewFileStructureEventListener$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    NewFileStructureEventListener$0.prototype.dataLoaded = function (data) {
                        this.__parent.structure.reload$java_lang_String(this.__parent.type);
                        this.__parent.structure.render();
                    };
                    return NewFileStructureEventListener$0;
                }());
                NewFileStructureEventListener.NewFileStructureEventListener$0 = NewFileStructureEventListener$0;
                NewFileStructureEventListener$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(NewFileStructureEventListener = editors.NewFileStructureEventListener || (editors.NewFileStructureEventListener = {}));
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
                    for (var index6452 = 0; index6452 < keys.length; index6452++) {
                        var key = keys[index6452];
                        {
                            var value = component.styles[key].toString();
                            instance.setStyle(key, value);
                        }
                    }
                };
                AbstractComponentFactory.prototype.configureParameters = function (instance, component, designMode) {
                    var keys = Object.keys(component.parameters);
                    for (var index6453 = 0; index6453 < keys.length; index6453++) {
                        var key = keys[index6453];
                        {
                            if (component.parameters[key] != null) {
                                var value = component.parameters[key].toString();
                                instance.applyParam(key, value);
                            }
                        }
                    }
                };
                AbstractComponentFactory.prototype.configureEvents = function (instance, component) {
                    for (var index6454 = 0; index6454 < component.events.length; index6454++) {
                        var event_1 = component.events[index6454];
                        {
                            var listener = new framework.builder.BuilderEventListener(event_1.source, event_1.name, event_1.type);
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
                    var thIns = this.createInstance(designMode);
                    thIns.setAttribute("identifier", this.impl);
                    this.configureStyles(thIns, component);
                    this.configureParameters(thIns, component, designMode);
                    this.configureEvents(thIns, component);
                    this.decorateForDesignMode(thIns, designMode);
                    thIns.getComponent().custom = component.custom;
                    return thIns;
                };
                AbstractComponentFactory.prototype.decorateForDesignMode = function (instance, designMode) {
                    this.decorateCallSelector(instance, designMode);
                };
                AbstractComponentFactory.prototype.decorateCallSelector = function (container, designMode) {
                    if (designMode) {
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
                    /*private*/ this.factories = (new framework.util.HashMap());
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
                        throw Object.defineProperty(new Error("duplicate component factory:->" + identifier), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
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
                        return null;
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
                    this.name = null;
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
                    this.data = new Object();
                    this.custom = new Object();
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
                    c.impl = designable.getAttribute("identifier");
                    var parameters = designable.getParameters();
                    {
                        var array6456 = designable.getStyleNames();
                        for (var index6455 = 0; index6455 < array6456.length; index6455++) {
                            var s = array6456[index6455];
                            {
                                c.styles[s] = designable.getStyle(s);
                            }
                        }
                    }
                    for (var index6457 = 0; index6457 < parameters.length; index6457++) {
                        var p = parameters[index6457];
                        {
                            c.parameters[p.name] = p.extractValue(designable);
                        }
                    }
                    {
                        var array6459 = Object.keys(designable.getListeners());
                        for (var index6458 = 0; index6458 < array6459.length; index6458++) {
                            var key = array6459[index6458];
                            {
                                {
                                    var array6461 = designable.getListeners()[key];
                                    for (var index6460 = 0; index6460 < array6461.length; index6460++) {
                                        var l = array6461[index6460];
                                        {
                                            if (l != null && l instanceof framework.builder.BuilderEventListener) {
                                                var bel = l;
                                                var be = new framework.builder.marshalling.BuilderEvent();
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
                        var array6463 = designable.getDesignables();
                        for (var index6462 = 0; index6462 < array6463.length; index6462++) {
                            var child = array6463[index6462];
                            {
                                var childC = MarshallUtil.extract(child);
                                c.children.push(childC);
                            }
                        }
                    }
                    if (designable.getComponent() != null)
                        c.custom = designable.getComponent().custom;
                    c.data = designable.getData();
                    return c;
                };
                MarshallUtil.toDesignable = function (component, design, selector) {
                    var des = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, false);
                    des['setData$java_lang_Object'](component.data);
                    des.getComponent().custom = component.custom;
                    var exp = des.getAttribute("exposeAs");
                    if (exp != null && exp.length > 0) {
                        new framework.designables.DesignableDelegate(des).exposeVariable(exp);
                    }
                    if (design) {
                        des.addEventListener(new framework.builder.SelectComponentEvent(selector), "click");
                    }
                    if (component.children != null) {
                        for (var index6464 = 0; index6464 < component.children.length; index6464++) {
                            var c = component.children[index6464];
                            {
                                var child = MarshallUtil.toDesignable(c, design, selector);
                                des.addDesignable(child);
                            }
                        }
                    }
                    return des;
                };
                MarshallUtil.generateController = function (component) {
                    var s = "";
                    MarshallUtil.controller(component, s);
                    console.log(s);
                };
                MarshallUtil.controller = function (component, start) {
                    var des = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory(component.impl).build(component, false);
                    des['setData$java_lang_Object'](component.data);
                    for (var index6465 = 0; index6465 < component.events.length; index6465++) {
                        var event_2 = component.events[index6465];
                        {
                            start = start + "\n" + des.getName() + ":function(source,event){\n" + event_2.source + "\n}";
                        }
                    }
                    if (component.children != null) {
                        for (var index6466 = 0; index6466 < component.children.length; index6466++) {
                            var c = component.children[index6466];
                            {
                                MarshallUtil.controller(c, start);
                            }
                        }
                    }
                };
                MarshallUtil.build = function (s) {
                    return MarshallUtil.toDesignable(MarshallUtil.toComponent$java_lang_String(s), false, null);
                };
                MarshallUtil.toComponent$java_lang_String = function (s) {
                    var c = JSON.parse(s);
                    return MarshallUtil.toComponent$jsweet_lang_Object(c);
                };
                MarshallUtil.toComponent = function (s) {
                    if (((typeof s === 'string') || s === null)) {
                        return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(s);
                    }
                    else if (((s != null && s instanceof Object) || s === null)) {
                        return framework.builder.marshalling.MarshallUtil.toComponent$jsweet_lang_Object(s);
                    }
                    else
                        throw new Error('invalid overload');
                };
                MarshallUtil.toComponent$jsweet_lang_Object = function (o) {
                    var cc = new framework.builder.marshalling.Component();
                    if (o["impl"] == null) {
                        o["impl"] = "html:div";
                    }
                    cc.impl = o["impl"].toString();
                    cc.styles = o["styles"];
                    cc.parameters = o["parameters"];
                    cc.data = o["data"];
                    var events = o["events"];
                    if (events != null && events.length > 0) {
                        var bevents = (new Array());
                        for (var index6467 = 0; index6467 < events.length; index6467++) {
                            var e = events[index6467];
                            {
                                var event_3 = new framework.builder.marshalling.BuilderEvent();
                                event_3.source = e["source"].toString();
                                event_3.type = e["type"].toString();
                                event_3.name = e["name"].toString();
                                bevents.push(event_3);
                            }
                        }
                        cc.events = bevents;
                    }
                    var bchildren = (new Array());
                    var children = o["children"];
                    if (children != null && children.length > 0) {
                        for (var index6468 = 0; index6468 < children.length; index6468++) {
                            var c = children[index6468];
                            {
                                bchildren.push(MarshallUtil.toComponent$jsweet_lang_Object(c));
                            }
                        }
                        cc.children = bchildren;
                    }
                    cc.custom = o["custom"];
                    return cc;
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
        var properties;
        (function (properties) {
            var FieldEditor = (function () {
                function FieldEditor() {
                }
                return FieldEditor;
            }());
            properties.FieldEditor = FieldEditor;
            FieldEditor["__class"] = "framework.builder.properties.FieldEditor";
        })(properties = builder.properties || (builder.properties = {}));
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
                var editor = (source.getAncestorWithClass("visual-editor"));
                if (editor != null && editor.getWillAddComponent() != null) {
                    var willAdd = editor.getWillAddComponent();
                    editor.addNewComponent$framework_builder_Component$framework_design_Designable(willAdd, source);
                }
                else {
                    evt.stopPropagation();
                    this.selector.select(source);
                }
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
                /*private*/ this.decorators = (new Array());
            }
            /**
             *
             * @param {*} decorator
             */
            BasicDecoratorRegistry.prototype.registerDecorator = function (decorator) {
                this.decorators.push(decorator);
            };
            /**
             *
             * @return {*[]}
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
                /*private*/ this.beans = new Object();
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
                this.beans[mixxingName] = instance;
            };
            BeanFactory.prototype.getBeanOfType = function (clazz) {
                {
                    var array6470 = Object.keys(this.beans);
                    for (var index6469 = 0; index6469 < array6470.length; index6469++) {
                        var key = array6470[index6469];
                        {
                            var bean = this.beans[key];
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
                }
                var mixing = clazz.toString();
                if (this.beans.hasOwnProperty(mixing)) {
                    return this.beans[mixing];
                }
                return null;
            };
            BeanFactory.prototype.getBean = function (name) {
                return this.beans[name];
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
                this.options = (new Array());
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
        var DataEvent = (function (_super) {
            __extends(DataEvent, _super);
            function DataEvent(type, data) {
                var _this = _super.call(this, type) || this;
                _this.data = null;
                _this.data = data;
                return _this;
            }
            return DataEvent;
        }(Event));
        designables.DataEvent = DataEvent;
        DataEvent["__class"] = "framework.designables.DataEvent";
    })(designables = framework.designables || (framework.designables = {}));
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
            DesignableDelegate.prototype.applyParameter = function (key, value, designMode) {
                var raw = value;
                this.component.parameters[key] = raw;
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "text") || (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "html")) {
                    this.ui.setHtml(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "name")) {
                    this.ui.setName(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "tag")) {
                    this.ui.setTag(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "href")) {
                    this.ui.setAttribute("href", value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "target")) {
                    this.ui.setAttribute("target", value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "src")) {
                    this.ui.setAttribute("src", value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "style")) {
                    this.ui.setAttribute("style", value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "class")) {
                    this.ui.setAttribute("class", value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "dhidden")) {
                    this.ui.setVisible(!(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "draggable")) {
                    this.ui.setAttribute("draggable", value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "exposeAs")) {
                    this.ui.setAttribute(key, value);
                    this.exposeVariable(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "label")) {
                    this.ui.setAttribute(key, value);
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.ui.getTag(), "button")) {
                        this.ui.setHtml(value);
                    }
                }
                else {
                    if (value.length < 200) {
                        this.ui.setAttribute(key, value);
                    }
                }
            };
            DesignableDelegate.containsName$java_lang_String$framework_design_Designable = function (name, ui) {
                {
                    var array6472 = ui.getChildren();
                    for (var index6471 = 0; index6471 < array6472.length; index6471++) {
                        var c = array6472[index6471];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(c.getName(), name)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            DesignableDelegate.containsName = function (name, ui) {
                if (((typeof name === 'string') || name === null) && ((ui != null && (ui["__interfaces"] != null && ui["__interfaces"].indexOf("framework.design.Designable") >= 0 || ui.constructor != null && ui.constructor["__interfaces"] != null && ui.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || ui === null)) {
                    return framework.designables.DesignableDelegate.containsName$java_lang_String$framework_design_Designable(name, ui);
                }
                else if (((typeof name === 'string') || name === null) && ((ui != null && ui instanceof Array) || ui === null)) {
                    return framework.designables.DesignableDelegate.containsName$java_lang_String$jsweet_lang_Array(name, ui);
                }
                else
                    throw new Error('invalid overload');
            };
            /*private*/ DesignableDelegate.containsName$java_lang_String$jsweet_lang_Array = function (name, children) {
                for (var index6473 = 0; index6473 < children.length; index6473++) {
                    var c = children[index6473];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(c.getName(), name)) {
                            return true;
                        }
                    }
                }
                return false;
            };
            DesignableDelegate.prototype.addDesignable = function (designable) {
                var name = designable.getName();
                var count = 0;
                while ((DesignableDelegate.containsName$java_lang_String$framework_design_Designable(name, this.ui))) {
                    count++;
                    name = designable.getName() + "_" + count;
                }
                ;
                designable.applyParam("name", name);
                this.ui['addChild$framework_JSContainer'](designable);
            };
            DesignableDelegate.guessName = function (children, designable) {
                var sname = designable.getName();
                var name = sname;
                var count = 0;
                while ((DesignableDelegate.containsName$java_lang_String$jsweet_lang_Array(name, children))) {
                    count++;
                    name = sname + "_" + count;
                }
                ;
                designable.applyParam("name", name);
                return name;
            };
            DesignableDelegate.prototype.getComponent = function () {
                return this.component;
            };
            DesignableDelegate.getScope = function (cont) {
                var r = cont;
                while ((true)) {
                    if (r == null) {
                        return null;
                    }
                    if (r != null && r instanceof framework.lightning.LightningApplication) {
                        var l = r;
                        return l.scope;
                    }
                    r = r.getParent();
                }
                ;
            };
            DesignableDelegate.prototype.exposeVariable = function (varName) {
                var r = this.ui;
                while ((true)) {
                    if (r == null) {
                        break;
                    }
                    if (r != null && r instanceof framework.lightning.LightningApplication) {
                        var l = r;
                        l.exposeAsVariable(varName, this.ui);
                        break;
                    }
                    r = r.getParent();
                }
                ;
            };
            DesignableDelegate.prototype.getParameters = function () {
                var params = (new Array());
                params.push(new framework.design.NameParameter("Name", "Basic"));
                params.push(new framework.design.AttributeParameter("class", "Style class", "Basic"));
                params.push(new framework.design.AttributeParameter("style", "Style", "Basic"));
                var hidden = new framework.design.AttributeParameter("dhidden", "Hidden", "Basic");
                hidden.options.push(new framework.design.Option("", ""));
                var draggable = new framework.design.AttributeParameter("draggable", "Draggable", "Basic");
                draggable.options.push(new framework.design.Option("", ""));
                var exposeAs = new framework.design.AttributeParameter("exposeAs", "Expose with var", "Basic");
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.ui.getTag(), "button")) {
                    var label = new framework.design.AttributeParameter("label", "Label", "Basic");
                    params.push(label);
                }
                params.push(hidden, draggable, exposeAs);
                return params;
            };
            DesignableDelegate.prototype.removeDesignable = function (designable) {
                this.ui.removeChild(designable);
                this.ui.setRendered(false);
            };
            DesignableDelegate.prototype.moveDesignable$framework_design_Designable$int = function (designable, steps) {
                this.moveDesignable$framework_JSContainer$int(designable, steps);
            };
            DesignableDelegate.prototype.moveDesignable = function (designable, steps) {
                if (((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null) && ((typeof steps === 'number') || steps === null)) {
                    return this.moveDesignable$framework_design_Designable$int(designable, steps);
                }
                else if (((designable != null && designable instanceof framework.JSContainer) || designable === null) && ((typeof steps === 'number') || steps === null)) {
                    return this.moveDesignable$framework_JSContainer$int(designable, steps);
                }
                else
                    throw new Error('invalid overload');
            };
            DesignableDelegate.prototype.moveDesignable$framework_JSContainer$int = function (designable, steps) {
                if (steps !== 0) {
                    var index = this.ui.getChildren().indexOf(designable);
                    var nextIndex = index + steps;
                    if (nextIndex < 0) {
                        nextIndex = 0;
                    }
                    else if (nextIndex >= this.ui.getChildren().length - 1) {
                        nextIndex = this.ui.getChildren().length - 2;
                    }
                    if (index !== nextIndex) {
                        this.ui.removeChild(designable);
                        this.ui.addChildAt(nextIndex, designable);
                        this.ui.setRendered(false);
                    }
                }
            };
            return DesignableDelegate;
        }());
        designables.DesignableDelegate = DesignableDelegate;
        DesignableDelegate["__class"] = "framework.designables.DesignableDelegate";
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var HerokuAdaptor = (function () {
        function HerokuAdaptor() {
        }
        HerokuAdaptor.prototype.Execute = function (component, serviceName, request, callback) {
            $.get("/service/dispatch/" + serviceName, request, function (t, u, v) {
                callback(t, v.status);
                return true;
            }, "json");
        };
        return HerokuAdaptor;
    }());
    framework.HerokuAdaptor = HerokuAdaptor;
    HerokuAdaptor["__class"] = "framework.HerokuAdaptor";
    HerokuAdaptor["__interfaces"] = ["framework.Adaptor"];
})(framework || (framework = {}));
(function (framework) {
    var InputTypes = (function () {
        function InputTypes() {
        }
        InputTypes.types_$LI$ = function () { if (InputTypes.types == null)
            InputTypes.types = [InputTypes.text, InputTypes.password, InputTypes.datetime, InputTypes.datetime_local, InputTypes.date, InputTypes.month, InputTypes.time, InputTypes.week, InputTypes.number, InputTypes.email, InputTypes.url, InputTypes.search, InputTypes.tel, InputTypes.color, InputTypes.checkbox, InputTypes.radio]; return InputTypes.types; };
        ;
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
                    if (value != null && (typeof value === 'boolean')) {
                        var ch = new framework.lightning.CheckBox("");
                        ch.setValue$java_lang_Boolean(value);
                        return ch;
                    }
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
                    /*private*/ this.columns = (new Array());
                }
                /**
                 *
                 * @param {framework.lightning.table.TableColumn} aColumn
                 */
                DefaultTableColumnModel.prototype.addColumn = function (aColumn) {
                    this.columns.push(aColumn);
                };
                /**
                 *
                 * @return {number}
                 */
                DefaultTableColumnModel.prototype.getColumnCount = function () {
                    return this.columns.length;
                };
                /**
                 *
                 * @param {*} columnIdentifier
                 * @return {number}
                 */
                DefaultTableColumnModel.prototype.getColumnIndex = function (columnIdentifier) {
                    for (var i = 0; i < this.columns.length; i++) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.columns[i].getIdentifier(), columnIdentifier)) {
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
                    return this.columns[columnIndex];
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
    var lightning;
    (function (lightning) {
        var table;
        (function (table) {
            var TableEvent = (function (_super) {
                __extends(TableEvent, _super);
                function TableEvent(type, evt, first, last) {
                    var _this = _super.call(this, type) || this;
                    _this.firstIndex = 0;
                    _this.lastIndex = 0;
                    _this.srcEvent = null;
                    _this.srcEvent = evt;
                    _this.firstIndex = first;
                    _this.lastIndex = last;
                    return _this;
                }
                return TableEvent;
            }(Event));
            table.TableEvent = TableEvent;
            TableEvent["__class"] = "framework.lightning.table.TableEvent";
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var ObjectBuilder = (function () {
        function ObjectBuilder() {
            this.obj = null;
        }
        ObjectBuilder.New$ = function () {
            return ObjectBuilder.New$jsweet_lang_Object(new Object());
        };
        ObjectBuilder.New$jsweet_lang_Object = function (o) {
            var d = new ObjectBuilder();
            d.obj = o;
            return d;
        };
        ObjectBuilder.New = function (o) {
            if (((o != null && o instanceof Object) || o === null)) {
                return framework.ObjectBuilder.New$jsweet_lang_Object(o);
            }
            else if (o === undefined) {
                return framework.ObjectBuilder.New$();
            }
            else
                throw new Error('invalid overload');
        };
        ObjectBuilder.prototype.set = function (key, value) {
            this.obj[key] = value;
            return this;
        };
        ObjectBuilder.prototype.setArray = function (key) {
            var value = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                value[_i - 1] = arguments[_i];
            }
            this.obj[key] = value;
            return this;
        };
        ObjectBuilder.prototype.clear = function () {
            {
                var array6475 = Object.keys(this.obj);
                for (var index6474 = 0; index6474 < array6475.length; index6474++) {
                    var s = array6475[index6474];
                    {
                        delete this.obj[s];
                    }
                }
            }
            return this;
        };
        ObjectBuilder.prototype.remove = function (key) {
            delete this.obj[key];
            return this;
        };
        ObjectBuilder.prototype.done = function () {
            return this.obj;
        };
        return ObjectBuilder;
    }());
    framework.ObjectBuilder = ObjectBuilder;
    ObjectBuilder["__class"] = "framework.ObjectBuilder";
})(framework || (framework = {}));
(function (framework) {
    var renderer;
    (function (renderer) {
        var ContainerRenderer = (function () {
            function ContainerRenderer() {
            }
            ContainerRenderer.prototype.decorate = function (c) {
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
                        if (parent != null && parent instanceof framework.JSHTMLFragment) {
                            $("#" + parent.getId() + " [name=" + name + "]").replaceWith(njq);
                        }
                        else {
                            var index = parent.getChildren().indexOf(c);
                            var nextSib = null;
                            if (index < parent.getChildren().length - 1) {
                                nextSib = parent.getChildren()[index + 1];
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
                    if (jq != null) {
                        this.renderAttributes(jq, c, true);
                        this.renderStyles(jq, c, true);
                        this.execCommands(jq, c);
                        c.flush("a28n12l10");
                    }
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
            };
            ContainerRenderer.prototype.renderEvents = function (njq, c) {
                var keys = Object.keys(c.getListeners());
                for (var index6476 = 0; index6476 < keys.length; index6476++) {
                    var key = keys[index6476];
                    {
                        var listeners = c.getListeners()[key];
                        njq.addEventListener(key, (function (listeners) {
                            return function (evt) {
                                for (var index6477 = 0; index6477 < listeners.length; index6477++) {
                                    var l = listeners[index6477];
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
            ContainerRenderer.prototype.renderAttributes = function (njq, c, changed) {
                if (changed) {
                    {
                        var array6479 = c.getChangedAttributes();
                        for (var index6478 = 0; index6478 < array6479.length; index6478++) {
                            var key = array6479[index6478];
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
                    {
                        var array6481 = c.getAttributeNames();
                        for (var index6480 = 0; index6480 < array6481.length; index6480++) {
                            var key = array6481[index6480];
                            {
                                if (c.getAttribute(key) != null)
                                    njq.setAttribute(key, c.getAttribute(key));
                            }
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
                        var array6483 = c.getChangedStyles();
                        for (var index6482 = 0; index6482 < array6483.length; index6482++) {
                            var key = array6483[index6482];
                            {
                                njq.style.setProperty(key, c.getStyle(key));
                            }
                        }
                    }
                }
                else {
                    {
                        var array6485 = c.getStyleNames();
                        for (var index6484 = 0; index6484 < array6485.length; index6484++) {
                            var key = array6485[index6484];
                            {
                                njq.style.setProperty(key, c.getStyle(key));
                            }
                        }
                    }
                }
            };
            ContainerRenderer.prototype.postRender$framework_JSContainer$jsweet_dom_HTMLElement = function (c, root) {
                c.postRender$jsweet_dom_HTMLElement(root);
            };
            /**
             *
             * @param {framework.JSContainer} c
             * @param {HTMLElement} root
             */
            ContainerRenderer.prototype.postRender = function (c, root) {
                if (((c != null && c instanceof framework.JSContainer) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.postRender$framework_JSContainer$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            return ContainerRenderer;
        }());
        ContainerRenderer.timeSpent = 0;
        renderer.ContainerRenderer = ContainerRenderer;
        ContainerRenderer["__class"] = "framework.renderer.ContainerRenderer";
        ContainerRenderer["__interfaces"] = ["framework.renderer.ExtendedRenderer", "framework.renderer.Renderer"];
    })(renderer = framework.renderer || (framework.renderer = {}));
})(framework || (framework = {}));
(function (framework) {
    var SalesforceAdaptor = (function () {
        function SalesforceAdaptor() {
        }
        SalesforceAdaptor.prototype.Execute = function (src, serviceName, request, callback) {
            var source = src;
            var root = source.getRoot();
            var o = root;
            var ss = o;
            var helpersundar = ss["helper"];
        };
        return SalesforceAdaptor;
    }());
    framework.SalesforceAdaptor = SalesforceAdaptor;
    SalesforceAdaptor["__class"] = "framework.SalesforceAdaptor";
    SalesforceAdaptor["__interfaces"] = ["framework.Adaptor"];
})(framework || (framework = {}));
(function (framework) {
    var util;
    (function (util) {
        var HashMap = (function () {
            function HashMap() {
                /*private*/ this.d = new Object();
            }
            /**
             *
             * @return {*[]}
             */
            HashMap.prototype.keySet = function () {
                var result = (new Array());
                {
                    var array6487 = Object.keys(this.d);
                    for (var index6486 = 0; index6486 < array6487.length; index6486++) {
                        var key = array6487[index6486];
                        {
                            result.push(key);
                        }
                    }
                }
                return result;
            };
            /**
             *
             * @param {*} key
             * @param {*} value
             * @return {*}
             */
            HashMap.prototype.put = function (key, value) {
                this.d[key] = value;
                return this;
            };
            /**
             *
             * @param {*} key
             * @return {*}
             */
            HashMap.prototype.get = function (key) {
                return this.d[key];
            };
            /**
             *
             * @param {*} key
             * @return {boolean}
             */
            HashMap.prototype.containsKey = function (key) {
                return this.keySet().indexOf(key) >= 0;
            };
            return HashMap;
        }());
        util.HashMap = HashMap;
        HashMap["__class"] = "framework.util.HashMap";
        HashMap["__interfaces"] = ["framework.util.Map"];
    })(util = framework.util || (framework.util = {}));
})(framework || (framework = {}));
var ui = (function () {
    function ui() {
    }
    return ui;
}());
ui["__class"] = "ui";
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_6) {
            var DataStructure = (function (_super) {
                __extends(DataStructure, _super);
                function DataStructure(object) {
                    var _this = _super.call(this, object) || this;
                    _this.object = null;
                    _this.object = object;
                    return _this;
                }
                DataStructure.prototype.getName = function () {
                    return this.object["name"];
                };
                DataStructure.prototype.getLabel = function () {
                    return this.object["label"];
                };
                DataStructure.prototype.getTitle = function () {
                    return this.object["label"];
                };
                DataStructure.prototype.isDeletable = function () {
                    return this.object["deletable"];
                };
                DataStructure.prototype.getLabelPlural = function () {
                    return this.object["labelPlural"];
                };
                DataStructure.prototype.isQueryable = function () {
                    return this.object["queryable"];
                };
                DataStructure.prototype.getSearchable = function () {
                    return this.object["searchable"];
                };
                DataStructure.prototype.isUpdateable = function () {
                    return this.object["updateable"];
                };
                DataStructure.prototype.getFields = function (source, listener) {
                    var cached = this.object["fields"];
                    if (cached == null) {
                        framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").getDataStructure(source, new DataStructure.DataStructure$0(this, listener), this.getName());
                    }
                    else {
                        var fields = (new Array());
                        this.object["fields"] = cached;
                        for (var index6488 = 0; index6488 < cached.length; index6488++) {
                            var oField = cached[index6488];
                            {
                                fields.push(new framework.builder.data.DataField(oField));
                            }
                        }
                        listener.dataLoaded(fields);
                    }
                };
                return DataStructure;
            }(framework.builder.data.File));
            data_6.DataStructure = DataStructure;
            DataStructure["__class"] = "framework.builder.data.DataStructure";
            (function (DataStructure) {
                var DataStructure$0 = (function () {
                    function DataStructure$0(__parent, listener) {
                        this.listener = listener;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    DataStructure$0.prototype.dataLoaded = function (data) {
                        var o = data;
                        var fields = (new Array());
                        var oFields = o["fields"];
                        this.__parent.object["fields"] = oFields;
                        for (var index6489 = 0; index6489 < oFields.length; index6489++) {
                            var oField = oFields[index6489];
                            {
                                fields.push(new framework.builder.data.DataField(oField));
                            }
                        }
                        this.listener.dataLoaded(fields);
                    };
                    return DataStructure$0;
                }());
                DataStructure.DataStructure$0 = DataStructure$0;
                DataStructure$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(DataStructure = data_6.DataStructure || (data_6.DataStructure = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
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
            var tags = ["form", "fieldset", "button"];
            componentFactoryRegistry.registerComponentFactory("html:html", new Boot.Boot$0("html:html"));
            componentFactoryRegistry.registerComponentFactory("html:p", new Boot.Boot$1("html:p"));
            componentFactoryRegistry.registerComponentFactory("html:cmp", new Boot.Boot$2("html:cmp"));
            for (var index6490 = 0; index6490 < tags.length; index6490++) {
                var tag = tags[index6490];
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
            componentFactoryRegistry.registerComponentFactory("lgt:checkboxgroup", new Boot.Boot$14("lgt:checkboxgroup"));
            componentFactoryRegistry.registerComponentFactory("lgt:grid", new Boot.Boot$15("lgt:grid"));
            componentFactoryRegistry.registerComponentFactory("lgt:col", new Boot.Boot$16("lgt:col"));
            componentFactoryRegistry.registerComponentFactory("lgt:avatar", new Boot.Boot$17("lgt:avatar"));
            componentFactoryRegistry.registerComponentFactory("lgt:acc", new Boot.Boot$18("lgt:acc"));
            componentFactoryRegistry.registerComponentFactory("lgt:acc-item", new Boot.Boot$19("lgt:acc-item"));
            componentFactoryRegistry.registerComponentFactory("lgt:modal", new Boot.Boot$20("lgt:modal"));
            componentFactoryRegistry.registerComponentFactory("lgt:modal-body", new Boot.Boot$21("lgt:modal-body"));
            componentFactoryRegistry.registerComponentFactory("lgt:modal-footer", new Boot.Boot$22("lgt:modal-footer"));
            componentFactoryRegistry.registerComponentFactory("lgt:bcr", new Boot.Boot$23("lgt:bcr"));
            componentFactoryRegistry.registerComponentFactory("lgt:bcr-item", new Boot.Boot$24("lgt:bcr-item"));
            componentFactoryRegistry.registerComponentFactory("lgt:accitem", new Boot.Boot$25("lgt:accitem"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn", new Boot.Boot$26("lgt:btn"));
            componentFactoryRegistry.registerComponentFactory("lgt:icon-btn", new Boot.Boot$27("lgt:icon-btn"));
            componentFactoryRegistry.registerComponentFactory("lgt:btn-grp", new Boot.Boot$28("lgt:btn-grp"));
            componentFactoryRegistry.registerComponentFactory("lgt:badge", new Boot.Boot$29("lgt:badge"));
            componentFactoryRegistry.registerComponentFactory("lgt:panel", new Boot.Boot$30("lgt:panel"));
            componentFactoryRegistry.registerComponentFactory("lgt:panel-section", new Boot.Boot$31("lgt:panel-section"));
            componentFactoryRegistry.registerComponentFactory("lgt:table", new Boot.Boot$32("lgt:table"));
            componentFactoryRegistry.registerComponentFactory("lgt:popover", new Boot.Boot$33("lgt:popover"));
            componentFactoryRegistry.registerComponentFactory("lgt:listbox", new Boot.Boot$34("lgt:listbox"));
            componentFactoryRegistry.registerComponentFactory("lgt:listbox-item", new Boot.Boot$35("lgt:listbox-item"));
            componentFactoryRegistry.registerComponentFactory("lgt:popover-footer-item", new Boot.Boot$36("lgt:popover-footer-item"));
            componentFactoryRegistry.registerComponentFactory("zs:iterator", new Boot.Boot$37("zs:iterator"));
            componentFactoryRegistry.registerComponentFactory("zs:iterable", new Boot.Boot$38("zs:iterable"));
            componentFactoryRegistry.registerComponentFactory("zs:http", new Boot.Boot$39("zs:http"));
            componentFactoryRegistry.registerComponentFactory("zs:service", new Boot.Boot$40("zs:service"));
            componentFactoryRegistry.registerComponentFactory("lgt:soql", new Boot.Boot$41("lgt:soql"));
            factory.addBean("framework.builder.libraries.ComponentFactoryRegistry", componentFactoryRegistry);
            factory.addBean("framework.builder.data.DataEnvironment", new framework.builder.data.BasicDataEnvironment());
            factory.addBean("framework.builder.data.ProjectService", new framework.builder.data.HerokuProjectService());
            factory.addBean("framework.Adaptor", new framework.HerokuAdaptor());
            var lightning = false;
            window["lightning"] = lightning;
            if (window.location.href.indexOf("preview.html") != -1) {
                var name_1 = window.location.href.split("#")[1];
                new framework.builder.Previewer(name_1).render();
            }
            else if (window.location.href.indexOf("rtc.html") != -1) {
                new framework.rtc.Conference("conference").render();
            }
            else if (lightning) {
                eval("window.framework = framework");
            }
            else {
                new framework.builder.Builder("builder").render();
            }
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
                var cmp = new framework.JSHTMLFragment("html fragment", "#default");
                return cmp;
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
                var cmp = new framework.designables.JSDesignableTextComponent("Text Item", "p");
                cmp.setHtml("Text Item");
                return cmp;
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
                var cmp = new framework.designables.JSDesignableBuilderComponent("component");
                return cmp;
            };
            return Boot$2;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$2 = Boot$2;
        Boot$2["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$3 = (function (_super) {
            __extends(Boot$3, _super);
            function Boot$3(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$3.prototype.createInstance = function (designMode) {
                return new framework.designables.JSDesignableBlockComponent("panel", "div");
            };
            return Boot$3;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$3 = Boot$3;
        Boot$3["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$4 = (function (_super) {
            __extends(Boot$4, _super);
            function Boot$4(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$4.prototype.createInstance = function (designMode) {
                var img = new framework.designables.JSDesignableImage("image");
                return img;
            };
            return Boot$4;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$4 = Boot$4;
        Boot$4["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$5 = (function (_super) {
            __extends(Boot$5, _super);
            function Boot$5(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$5.prototype.createInstance = function (designMode) {
                var link = new framework.designables.JSDesignableLink("link");
                link.setHtml("link");
                link.setAttribute("href", "#link");
                return link;
            };
            return Boot$5;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$5 = Boot$5;
        Boot$5["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$6 = (function (_super) {
            __extends(Boot$6, _super);
            function Boot$6(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$6.prototype.createInstance = function (designMode) {
                var list = new framework.designables.JSDesignableList("list");
                return list;
            };
            return Boot$6;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$6 = Boot$6;
        Boot$6["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$7 = (function (_super) {
            __extends(Boot$7, _super);
            function Boot$7(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$7.prototype.createInstance = function (designMode) {
                var input = new framework.designables.JSDesignableInput("Input");
                return input;
            };
            return Boot$7;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$7 = Boot$7;
        Boot$7["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$8 = (function (_super) {
            __extends(Boot$8, _super);
            function Boot$8(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$8.prototype.createInstance = function (designMode) {
                var input = new framework.designables.JSDesignableSelect("Select");
                return input;
            };
            return Boot$8;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$8 = Boot$8;
        Boot$8["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$9 = (function (_super) {
            __extends(Boot$9, _super);
            function Boot$9(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$9.prototype.createInstance = function (designMode) {
                var input = new framework.designables.JSDesignableTextArea("TextArea");
                return input;
            };
            return Boot$9;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$9 = Boot$9;
        Boot$9["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$10 = (function (_super) {
            __extends(Boot$10, _super);
            function Boot$10(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$10.prototype.createInstance = function (designMode) {
                var app = new framework.lightning.LightningApplication("lightning app", "div");
                return app;
            };
            return Boot$10;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$10 = Boot$10;
        Boot$10["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$11 = (function (_super) {
            __extends(Boot$11, _super);
            function Boot$11(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$11.prototype.createInstance = function (designMode) {
                var t = new framework.lightning.Text("Text Item", "span");
                t.setHtml("Text Item");
                return t;
            };
            return Boot$11;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$11 = Boot$11;
        Boot$11["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$12 = (function (_super) {
            __extends(Boot$12, _super);
            function Boot$12(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$12.prototype.createInstance = function (designMode) {
                var btn = new framework.lightning.designables.JSDesignableFormLayout();
                return btn;
            };
            return Boot$12;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$12 = Boot$12;
        Boot$12["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$13 = (function (_super) {
            __extends(Boot$13, _super);
            function Boot$13(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$13.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableFormElement("Input Element");
            };
            return Boot$13;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$13 = Boot$13;
        Boot$13["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$14 = (function (_super) {
            __extends(Boot$14, _super);
            function Boot$14(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$14.prototype.createInstance = function (designMode) {
                var grp = new framework.lightning.CheckBoxGroup("Input Element");
                grp.addOption(new framework.design.Option("Option 1", "opt1"));
                grp.addOption(new framework.design.Option("Option 2", "opt2"));
                grp.addOption(new framework.design.Option("Option 3", "opt3"));
                return grp;
            };
            return Boot$14;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$14 = Boot$14;
        Boot$14["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$15 = (function (_super) {
            __extends(Boot$15, _super);
            function Boot$15(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$15.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableLightningGrid("Grid");
            };
            return Boot$15;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$15 = Boot$15;
        Boot$15["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$16 = (function (_super) {
            __extends(Boot$16, _super);
            function Boot$16(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$16.prototype.createInstance = function (designMode) {
                return new framework.lightning.Col("Col");
            };
            return Boot$16;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$16 = Boot$16;
        Boot$16["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$17 = (function (_super) {
            __extends(Boot$17, _super);
            function Boot$17(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$17.prototype.createInstance = function (designMode) {
                return new framework.lightning.Avatar("Avatar");
            };
            return Boot$17;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$17 = Boot$17;
        Boot$17["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$18 = (function (_super) {
            __extends(Boot$18, _super);
            function Boot$18(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$18.prototype.createInstance = function (designMode) {
                return new framework.lightning.Accordion("Accordion");
            };
            return Boot$18;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$18 = Boot$18;
        Boot$18["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$19 = (function (_super) {
            __extends(Boot$19, _super);
            function Boot$19(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$19.prototype.createInstance = function (designMode) {
                return new framework.lightning.AccordionItem("Item", "Accordion Item");
            };
            return Boot$19;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$19 = Boot$19;
        Boot$19["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$20 = (function (_super) {
            __extends(Boot$20, _super);
            function Boot$20(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$20.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableModal("Modal");
            };
            return Boot$20;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$20 = Boot$20;
        Boot$20["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$21 = (function (_super) {
            __extends(Boot$21, _super);
            function Boot$21(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$21.prototype.createInstance = function (designMode) {
                return new framework.lightning.ModalBody("body");
            };
            return Boot$21;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$21 = Boot$21;
        Boot$21["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$22 = (function (_super) {
            __extends(Boot$22, _super);
            function Boot$22(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$22.prototype.createInstance = function (designMode) {
                return new framework.lightning.ModalFooter("Modal");
            };
            return Boot$22;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$22 = Boot$22;
        Boot$22["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$23 = (function (_super) {
            __extends(Boot$23, _super);
            function Boot$23(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$23.prototype.createInstance = function (designMode) {
                return new framework.lightning.BreadCrumbs("BreadCrumb");
            };
            return Boot$23;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$23 = Boot$23;
        Boot$23["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$24 = (function (_super) {
            __extends(Boot$24, _super);
            function Boot$24(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$24.prototype.createInstance = function (designMode) {
                return new framework.lightning.BreadCrumbItem("Item", "Item");
            };
            return Boot$24;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$24 = Boot$24;
        Boot$24["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$25 = (function (_super) {
            __extends(Boot$25, _super);
            function Boot$25(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$25.prototype.createInstance = function (designMode) {
                return new framework.lightning.AccordionItem("Item", "Accordion Item");
            };
            return Boot$25;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$25 = Boot$25;
        Boot$25["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$26 = (function (_super) {
            __extends(Boot$26, _super);
            function Boot$26(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$26.prototype.createInstance = function (designMode) {
                var btn = new framework.designables.JSDesignableButton("Button");
                btn.setLabel("Button");
                return btn;
            };
            return Boot$26;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$26 = Boot$26;
        Boot$26["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$27 = (function (_super) {
            __extends(Boot$27, _super);
            function Boot$27(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$27.prototype.createInstance = function (designMode) {
                var btn = new framework.lightning.IconButton("Icon Button");
                return btn;
            };
            return Boot$27;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$27 = Boot$27;
        Boot$27["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$28 = (function (_super) {
            __extends(Boot$28, _super);
            function Boot$28(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$28.prototype.createInstance = function (designMode) {
                return new framework.lightning.ButtonGroup("Button Group");
            };
            return Boot$28;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$28 = Boot$28;
        Boot$28["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$29 = (function (_super) {
            __extends(Boot$29, _super);
            function Boot$29(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$29.prototype.createInstance = function (designMode) {
                return new framework.lightning.Badge("Badge", "div");
            };
            return Boot$29;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$29 = Boot$29;
        Boot$29["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$30 = (function (_super) {
            __extends(Boot$30, _super);
            function Boot$30(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$30.prototype.createInstance = function (designMode) {
                return new framework.lightning.Panel("Panel");
            };
            return Boot$30;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$30 = Boot$30;
        Boot$30["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$31 = (function (_super) {
            __extends(Boot$31, _super);
            function Boot$31(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$31.prototype.createInstance = function (designMode) {
                return new framework.lightning.PanelSection("Section", "div");
            };
            return Boot$31;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$31 = Boot$31;
        Boot$31["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$32 = (function (_super) {
            __extends(Boot$32, _super);
            function Boot$32(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$32.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableTable("Table");
            };
            return Boot$32;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$32 = Boot$32;
        Boot$32["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$33 = (function (_super) {
            __extends(Boot$33, _super);
            function Boot$33(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$33.prototype.createInstance = function (designMode) {
                return new framework.lightning.ListPopOver("Pop Over");
            };
            return Boot$33;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$33 = Boot$33;
        Boot$33["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$34 = (function (_super) {
            __extends(Boot$34, _super);
            function Boot$34(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$34.prototype.createInstance = function (designMode) {
                return new framework.lightning.ListBox("List");
            };
            return Boot$34;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$34 = Boot$34;
        Boot$34["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$35 = (function (_super) {
            __extends(Boot$35, _super);
            function Boot$35(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$35.prototype.createInstance = function (designMode) {
                return new framework.lightning.ListBoxItem("List Item");
            };
            return Boot$35;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$35 = Boot$35;
        Boot$35["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$36 = (function (_super) {
            __extends(Boot$36, _super);
            function Boot$36(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$36.prototype.createInstance = function (designMode) {
                return new framework.lightning.PopOverFooterItem("Footer Item");
            };
            return Boot$36;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$36 = Boot$36;
        Boot$36["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$37 = (function (_super) {
            __extends(Boot$37, _super);
            function Boot$37(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$37.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableIterator("Iterator");
            };
            return Boot$37;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$37 = Boot$37;
        Boot$37["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$38 = (function (_super) {
            __extends(Boot$38, _super);
            function Boot$38(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$38.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableIterable("Iterable", "div");
            };
            return Boot$38;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$38 = Boot$38;
        Boot$38["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$39 = (function (_super) {
            __extends(Boot$39, _super);
            function Boot$39(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$39.prototype.createInstance = function (designMode) {
                return new framework.designables.JSDesignableHTTP();
            };
            return Boot$39;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$39 = Boot$39;
        Boot$39["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$40 = (function (_super) {
            __extends(Boot$40, _super);
            function Boot$40(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$40.prototype.createInstance = function (designMode) {
                return new framework.designables.JSDesignableService();
            };
            return Boot$40;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$40 = Boot$40;
        Boot$40["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
        var Boot$41 = (function (_super) {
            __extends(Boot$41, _super);
            function Boot$41(__arg0) {
                return _super.call(this, __arg0) || this;
            }
            /**
             *
             * @param {boolean} designMode
             * @return {*}
             */
            Boot$41.prototype.createInstance = function (designMode) {
                return new framework.lightning.designables.JSDesignableSOQL("soql");
            };
            return Boot$41;
        }(framework.builder.libraries.AbstractComponentFactory));
        Boot.Boot$41 = Boot$41;
        Boot$41["__interfaces"] = ["framework.builder.marshalling.ComponentFactory"];
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
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.tag, "button")) {
                        container.applyParam("label", "Button");
                    }
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
                if (this.options.length === 0) {
                    var editor = new framework.builder.properties.AttributeEditor();
                    editor.setProperty(designable, this);
                    return editor;
                }
                else if (this.options.length === 1) {
                    var editor = new framework.builder.properties.SingleOptionAttributeEditor();
                    editor.setProperty(designable, this);
                    return editor;
                }
                else {
                    var editor = new framework.builder.properties.AttributeWithOptionsEditor();
                    editor.setProperty(designable, this);
                    return editor;
                }
            };
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            AttributeParameter.prototype.extractValue = function (designable) {
                return designable.getAttribute(this.name);
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
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            NameParameter.prototype.extractValue = function (designable) {
                return designable.getName();
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
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            StyleParameter.prototype.extractValue = function (designable) {
                return designable.getStyle(this.name);
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
        var TagParameter = (function (_super) {
            __extends(TagParameter, _super);
            function TagParameter() {
                return _super.call(this, "tag", "Tag", "basic", "Basic") || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            TagParameter.prototype.getEditor = function (designable) {
                var editor = new framework.builder.properties.TagEditor("tagEditor");
                for (var index6491 = 0; index6491 < this.options.length; index6491++) {
                    var opt = this.options[index6491];
                    {
                        editor.addOption(new framework.JSOption(opt.text, opt.value));
                    }
                }
                editor.setProperty(designable, this);
                return editor;
            };
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            TagParameter.prototype.extractValue = function (designable) {
                return designable.getTag();
            };
            return TagParameter;
        }(framework.design.Parameter));
        design.TagParameter = TagParameter;
        TagParameter["__class"] = "framework.design.TagParameter";
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
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            TextParameter.prototype.extractValue = function (designable) {
                return designable.getHtml();
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
            /**
             *
             * @param {*} designable
             * @return {string}
             */
            ValueParameter.prototype.extractValue = function (designable) {
                var s = designable.getValue();
                if (s != null) {
                    return s.toString();
                }
                else {
                    return null;
                }
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
                    if (renderable.getRenderers().indexOf(InteractionsDecorator.draggableRenderer_$LI$()) <= 0) {
                        renderable.addRenderer(InteractionsDecorator.draggableRenderer_$LI$());
                    }
                }
                if (renderable != null && (renderable["__interfaces"] != null && renderable["__interfaces"].indexOf("framework.interactions.Droppable") >= 0 || renderable.constructor != null && renderable.constructor["__interfaces"] != null && renderable.constructor["__interfaces"].indexOf("framework.interactions.Droppable") >= 0)) {
                    if (renderable.getRenderers().indexOf(InteractionsDecorator.droppableRenderer_$LI$()) <= 0) {
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
            /*private*/ this.d = new Object();
            if (((typeof name === 'string') || name === null) && ((typeof tag === 'string') || tag === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.d = new Object();
                (function () {
                    _this.setTag(tag);
                    _this.setName(name);
                })();
            }
            else if (((typeof name === 'string') || name === null) && tag === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var tag_1 = __args[0];
                this.d = new Object();
                (function () {
                    _this.setTag(tag_1);
                })();
            }
            else
                throw new Error('invalid overload');
        }
        /**
         *
         * @param {string} evt
         * @param {*} listener
         */
        JSContainer.prototype.on = function (evt, listener) {
            this.addEventListener(new JSContainer.JSContainer$0(this, listener), evt);
        };
        JSContainer.prototype.advancedEventTypes = function () {
            return [];
        };
        JSContainer.prototype.fireListener = function (key, evt) {
            var listeners = this.getListeners()[key];
            if (listeners != null && listeners.length > 0) {
                for (var index6492 = 0; index6492 < listeners.length; index6492++) {
                    var l = listeners[index6492];
                    {
                        l.performAction(this, evt);
                    }
                }
            }
        };
        JSContainer.prototype.getScope = function () {
            return framework.designables.DesignableDelegate.getScope(this);
        };
        JSContainer.prototype.find = function (path) {
            var sectins = path.split("/");
            var current = this;
            if ((function (str, searchString, position) {
                if (position === void 0) { position = 0; }
                return str.substr(position, searchString.length) === searchString;
            })(path, "/")) {
                current = (this.getAncestorWithClass("visual-editor")).getRootItem();
            }
            for (var index6493 = 0; index6493 < sectins.length; index6493++) {
                var s = sectins[index6493];
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(s, "..")) {
                        while ((true)) {
                            current = current.getParent();
                            if (current == null)
                                break;
                            if (current.getAttribute("identifier") != null && current.getAttribute("identifier").length > 0) {
                                break;
                            }
                        }
                        ;
                        if (current == null) {
                            console.error("Cannot find root component for path " + path);
                            return null;
                        }
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(s, ".")) {
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(s, "")) {
                    }
                    else {
                        if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "]")) {
                            if (s.indexOf("[") != -1) {
                                var ss = s.split("[");
                                var index = ss[1];
                                var onlyName = ss[0];
                                if (index.indexOf("]") != -1) {
                                    index = index.split("]").join("");
                                    var iIndex = parseInt(index);
                                    current = this.findDesignable(current, onlyName, iIndex);
                                    if (current == null) {
                                        console.error("error parsing path at ..." + s + "..., Cannot find component \'" + s + "\' while searching in path:" + path + ". Please check path");
                                        return null;
                                    }
                                }
                                else {
                                    console.error("error parsing path at ..." + s + "...");
                                }
                            }
                            else {
                                console.error("error parsing path at ..." + s + "...");
                            }
                        }
                        else {
                            current = this.findDesignable(current, s, 0);
                            if (current == null) {
                                console.error("error parsing path at ..." + s + "...,Cannot find component \'" + s + "\' while searching in path:" + path + ". Please check path");
                                return null;
                            }
                        }
                    }
                }
            }
            return current;
        };
        /*private*/ JSContainer.prototype.findDesignable = function (des, name, index) {
            var candidates = (new Array());
            {
                var array6495 = des.getDesignables();
                for (var index6494 = 0; index6494 < array6495.length; index6494++) {
                    var d = array6495[index6494];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(d.getName(), name)) {
                            candidates.push(d);
                        }
                    }
                }
            }
            if (index < candidates.length) {
                return candidates[index];
            }
            else {
                console.error("Cannot find child item with name " + name + " and index " + index + " total number of children with name " + name + " is " + candidates.length);
            }
            return null;
        };
        JSContainer.prototype.getChild = function (name) {
            {
                var array6497 = this.getChildren();
                for (var index6496 = 0; index6496 < array6497.length; index6496++) {
                    var child = array6497[index6496];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(child.getName(), name)) {
                            return child;
                        }
                    }
                }
            }
            return null;
        };
        JSContainer.prototype.removeChild = function (r) {
            var children = this.getChildren();
            this.d["children"] = children.filter(function (ctn, inde, lst) {
                return !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(ctn, r);
            });
            this.setRendered(false);
            return this;
        };
        JSContainer.prototype.clearChildren = function () {
            this.d["children"] = new Array();
            return this;
        };
        /**
         *
         * @return {string[]}
         */
        JSContainer.prototype.getChangedAttributes = function () {
            if (this.d["changedAttributes"] != null) {
                var changed = this.d["changedAttributes"];
                return changed;
            }
            else {
                this.d["changedAttributes"] = new Array();
                return this.getChangedAttributes();
            }
        };
        JSContainer.prototype.getNative = function () {
            var elem = document.getElementById(this.getId());
            if (elem != null) {
                return elem;
            }
            else {
                return null;
            }
        };
        /**
         *
         * @return {string[]}
         */
        JSContainer.prototype.getChangedStyles = function () {
            if (this.d["changedStyles"] != null) {
                var changed = this.d["changedStyles"];
                return changed;
            }
            else {
                this.d["changedStyles"] = new Array();
                return this.getChangedStyles();
            }
        };
        JSContainer.prototype.flush = function (s) {
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(s, "a28n12l10")) {
                delete this.d["changedAttributes"];
                delete this.d["changedStyles"];
            }
        };
        /**
         *
         * @return {*[]}
         */
        JSContainer.prototype.getRenderers = function () {
            var arr = this.d["renderers"];
            if (arr != null) {
                return arr;
            }
            else {
                return (new Array());
            }
        };
        /**
         *
         * @param {*} renderer
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addRenderer = function (renderer) {
            var arr = this.d["renderers"];
            if (arr == null) {
                arr = (new Array());
                this.d["renderers"] = arr;
            }
            arr.push(renderer);
            this.d["renderers"] = arr;
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getId = function () {
            var id = this.d["id"];
            if (id == null) {
                id = this.uid();
                this.d["id"] = id;
            }
            return id;
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
            for (var index6498 = 0; index6498 < aStyles.length; index6498++) {
                var style = aStyles[index6498];
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
            container.d["parent"] = this;
            this.getChildren().push(container);
            return this;
        };
        /**
         *
         * @param {number} index
         * @param {framework.JSContainer} child
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.addChildAt = function (index, child) {
            child.d["parent"] = this;
            var children = (new Array());
            var i = 0;
            {
                var array6500 = this.getChildren();
                for (var index6499 = 0; index6499 < array6500.length; index6499++) {
                    var c = array6500[index6499];
                    {
                        if (i === index) {
                            children.push(c);
                        }
                        children.push(c);
                    }
                }
            }
            this.d["children"] = children;
            return this;
        };
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setVisible = function (b) {
            if (!b) {
                this.addClass("slds-hidden");
            }
            else {
                this.removeClass("slds-hidden");
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
            var listeners = this.getListeners();
            if (listeners == null) {
                listeners = new Object();
                this.d["listeners"] = listeners;
            }
            if (!listeners.hasOwnProperty(type)) {
                listeners[type] = new Array();
            }
            listeners[type].push(listener);
            return this;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getTag = function () {
            return this.getString("tag");
        };
        /**
         *
         * @param {string} tag
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setTag = function (tag) {
            this.setString("tag", tag);
            this.setRendered(false);
            return this;
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setStyle = function (key, value) {
            this.getChangedStyles().push(key);
            if (value != null) {
                if (this.d["styles"] == null) {
                    this.d["styles"] = new Object();
                }
                this.d["styles"][key] = value;
            }
            else {
                if (this.d["styles"] != null) {
                    delete this.d["styles"][key];
                    this.setRendered(false);
                }
            }
            return this;
        };
        /**
         *
         * @param {string} key
         * @return {string}
         */
        JSContainer.prototype.getStyle = function (key) {
            if (this.d["styles"] != null) {
                return this.d["styles"][key];
            }
            return null;
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setAttribute = function (key, value) {
            this.getChangedAttributes().push(key);
            if (value != null) {
                if (this.d["attributes"] == null) {
                    this.d["attributes"] = new Object();
                }
                this.d["attributes"][key] = value;
            }
            else {
                if (this.d["attributes"] != null)
                    delete this.d["attributes"][key];
            }
            return this;
        };
        /**
         *
         * @param {string} key
         * @return {string}
         */
        JSContainer.prototype.getAttribute = function (key) {
            if (this.d["attributes"] != null) {
                return this.d["attributes"][key];
            }
            return null;
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getName = function () {
            var name = this.getAttribute("name");
            if (name == null) {
                return "";
            }
            return name;
        };
        /**
         *
         * @param {string} name
         */
        JSContainer.prototype.setName = function (name) {
            this.setAttribute("name", name);
        };
        /**
         *
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getParent = function () {
            return this.d["parent"];
        };
        /**
         *
         * @return {framework.JSContainer[]}
         */
        JSContainer.prototype.getChildren = function () {
            var children = this.d["children"];
            if (children != null) {
                return children;
            }
            else {
                this.d["children"] = new Array();
                return this.getChildren();
            }
        };
        /**
         *
         * @return {Array}
         */
        JSContainer.prototype.getStyleNames = function () {
            var styles = this.d["styles"];
            if (styles != null) {
                return Object.keys(styles);
            }
            return [];
        };
        /**
         *
         * @return {Array}
         */
        JSContainer.prototype.getAttributeNames = function () {
            var styles = this.d["attributes"];
            if (styles != null) {
                return Object.keys(styles);
            }
            return [];
        };
        /**
         *
         * @return {string}
         */
        JSContainer.prototype.getHtml = function () {
            var html = this.getString("html");
            if (html == null) {
                return "";
            }
            return html;
        };
        /*private*/ JSContainer.prototype.setString = function (key, value) {
            this.d[key] = value;
        };
        /*private*/ JSContainer.prototype.getString = function (key) {
            return this.d[key];
        };
        /**
         *
         * @param {string} h
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setHtml = function (h) {
            this.setString("html", h);
            this.setRendered(false);
            return this;
        };
        /**
         *
         * @return {boolean}
         */
        JSContainer.prototype.isRendered = function () {
            return this.d["rendered"];
        };
        /**
         *
         * @param {boolean} b
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.setRendered = function (b) {
            this.d["rendered"] = b;
            if (!b) {
                {
                    var array6502 = this.getChildren();
                    for (var index6501 = 0; index6501 < array6502.length; index6501++) {
                        var child = array6502[index6501];
                        {
                            child.setRendered(b);
                        }
                    }
                }
            }
            return this;
        };
        /**
         *
         * @return {Object}
         */
        JSContainer.prototype.getListeners = function () {
            var l = this.d["listeners"];
            if (l == null) {
                this.d["listeners"] = new Object();
                return this.getListeners();
            }
            return l;
        };
        JSContainer.prototype.render$ = function () {
            if (this.getParent() == null)
                this.render$jsweet_dom_HTMLElement(null);
            else
                this.render$jsweet_dom_HTMLElement(document.getElementById(this.getParent().getId()));
        };
        /**
         *
         * @param {framework.rtc.Conference} c
         * @param {HTMLElement} root
         */
        JSContainer.prototype.postRender = function (c, root) {
            if (((c != null && c instanceof HTMLElement) || c === null) && root === undefined) {
                return this.postRender$jsweet_dom_HTMLElement(c);
            }
            else
                throw new Error('invalid overload');
        };
        JSContainer.prototype.postRender$jsweet_dom_HTMLElement = function (root) {
        };
        JSContainer.prototype.contains = function (lst, o) {
            for (var index6503 = 0; index6503 < lst.length; index6503++) {
                var oo = lst[index6503];
                {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(oo, o)) {
                        return true;
                    }
                }
            }
            return false;
        };
        JSContainer.defaultRenderer_$LI$ = function () { if (JSContainer.defaultRenderer == null)
            JSContainer.defaultRenderer = new framework.renderer.ContainerRenderer(); return JSContainer.defaultRenderer; };
        ;
        JSContainer.prototype.render$jsweet_dom_HTMLElement = function (parent) {
            var renderers = this.getRenderers();
            if (renderers.length === 0) {
                renderers.push(JSContainer.defaultRenderer_$LI$());
            }
            if (!this.contains(renderers, JSContainer.defaultRenderer_$LI$())) {
                var tmp = (new Array());
                tmp.push(JSContainer.defaultRenderer_$LI$());
                for (var index6504 = 0; index6504 < renderers.length; index6504++) {
                    var r = renderers[index6504];
                    {
                        tmp.push(r);
                    }
                }
                renderers = tmp;
            }
            for (var index6505 = 0; index6505 < renderers.length; index6505++) {
                var renderer_1 = renderers[index6505];
                renderer_1.doRender(this, parent);
            }
            {
                var array6507 = this.getChildren();
                for (var index6506 = 0; index6506 < array6507.length; index6506++) {
                    var child = array6507[index6506];
                    {
                        child.render();
                    }
                }
            }
            for (var index6508 = 0; index6508 < renderers.length; index6508++) {
                var renderer_2 = renderers[index6508];
                {
                    if (renderer_2 != null && (renderer_2["__interfaces"] != null && renderer_2["__interfaces"].indexOf("framework.renderer.ExtendedRenderer") >= 0 || renderer_2.constructor != null && renderer_2.constructor["__interfaces"] != null && renderer_2.constructor["__interfaces"].indexOf("framework.renderer.ExtendedRenderer") >= 0))
                        renderer_2.postRender(this, parent);
                }
            }
            this.setRendered(true);
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
            return this.d["data"];
        };
        JSContainer.prototype.setData = function (data) {
            if (((data != null) || data === null)) {
                return this.setData$java_lang_Object(data);
            }
            else
                throw new Error('invalid overload');
        };
        JSContainer.prototype.setData$java_lang_Object = function (data) {
            this.d["data"] = data;
        };
        JSContainer.prototype.getAncestorWithClass = function (cls) {
            var parent = this.getParent();
            if (parent == null) {
                return null;
            }
            var clsss = parent.getAttribute("class");
            if (clsss != null) {
                {
                    var array6510 = parent.getAttribute("class").split(" ");
                    for (var index6509 = 0; index6509 < array6510.length; index6509++) {
                        var s = array6510[index6509];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(s.trim(), cls))
                                return parent;
                        }
                    }
                }
            }
            return (parent.getAncestorWithClass(cls));
        };
        /**
         *
         * @param {string} id
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getAncestorById = function (id) {
            var parent = this.getParent();
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getId(), id))
                return this;
            if (parent == null) {
                return null;
            }
            return parent.getAncestorById(id);
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
            var parent = this.getParent();
            if (parent == null) {
                return null;
            }
            return parent.getAncestorByName(name);
        };
        /**
         *
         * @return {framework.JSContainer}
         */
        JSContainer.prototype.getRoot = function () {
            var parent = this.getParent();
            if (parent == null) {
                return this;
            }
            else {
                return parent.getRoot();
            }
        };
        /**
         *
         * @return {*}
         */
        JSContainer.prototype.getDroppableOptions = function () {
            return this.d["droppableOptions"];
        };
        JSContainer.prototype.setDroppableOptions = function (options) {
            this.d["droppableOptions"] = options;
        };
        return JSContainer;
    }());
    framework.JSContainer = JSContainer;
    JSContainer["__class"] = "framework.JSContainer";
    JSContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    (function (JSContainer) {
        var JSContainer$0 = (function () {
            function JSContainer$0(__parent, listener) {
                this.listener = listener;
                this.__parent = __parent;
            }
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            JSContainer$0.prototype.performAction = function (source, evt) {
                this.listener(evt);
            };
            return JSContainer$0;
        }());
        JSContainer.JSContainer$0 = JSContainer$0;
        JSContainer$0["__interfaces"] = ["framework.EventListener"];
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
    var design;
    (function (design) {
        var DatasourceParameter = (function (_super) {
            __extends(DatasourceParameter, _super);
            function DatasourceParameter(name, label, category) {
                return _super.call(this, name, label, category) || this;
            }
            /**
             *
             * @param {*} designable
             * @return {*}
             */
            DatasourceParameter.prototype.getEditor = function (designable) {
                return null;
            };
            return DatasourceParameter;
        }(framework.design.AttributeParameter));
        design.DatasourceParameter = DatasourceParameter;
        DatasourceParameter["__class"] = "framework.design.DatasourceParameter";
    })(design = framework.design || (framework.design = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Component = (function (_super) {
            __extends(Component, _super);
            function Component(identifier, initial, label) {
                var _this = _super.call(this, identifier, "div") || this;
                /*private*/ _this.titleFigure = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");
                /*private*/ _this.avatar = new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large").setStyle("width", "100%");
                /*private*/ _this.initial = new framework.JSContainer("abbr").addClass("slds-avatar__initials slds-icon-custom-27");
                /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-app-launcher__title-label").setStyle("width", "100%");
                /*private*/ _this.componentFactoryRegistry = (framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry"));
                _this.identifier = null;
                _this.ini = null;
                _this.addClass("component-design basic");
                _this.setAttribute("identifier", identifier);
                _this.identifier = identifier;
                _this.addClass("designer-component");
                _this.addChild$framework_JSContainer(_this.titleFigure.setAttribute("identifier", identifier));
                _this.titleFigure.addChild$framework_JSContainer(_this.avatar.setAttribute("identifier", identifier));
                _this.avatar.addChild$framework_JSContainer(_this.initial.setAttribute("identifier", identifier));
                _this.initial.setAttribute("title", label);
                _this.initial.setHtml(label);
                _this.titleFigure.addChild$framework_JSContainer(_this.title.setAttribute("identifier", identifier));
                _this.title.setHtml(label);
                _this.addEventListener(_this, "click");
                var me = _this;
                _this.addEventListener(new Component.Component$0(_this, me), "dblclick");
                _this.ini = initial;
                return _this;
            }
            Component.prototype.getInital = function () {
                return this.ini;
            };
            Component.prototype.getFactory = function () {
                return this.componentFactoryRegistry.getComponentFactory(this.getName());
            };
            Component.prototype.getDraggableOptions = function () {
                var opts = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                opts.appendTo = "body";
                opts.revert = true;
                opts.zIndex = 1000;
                opts.helper = "clone";
                return opts;
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            Component.prototype.performAction = function (source, evt) {
                var editor = (this.getAncestorWithClass("visual-editor"));
                editor.setWillAddComponent(this, false);
            };
            return Component;
        }(framework.JSContainer));
        builder.Component = Component;
        Component["__class"] = "framework.builder.Component";
        Component["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
        (function (Component) {
            var Component$0 = (function () {
                function Component$0(__parent, me) {
                    this.me = me;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Component$0.prototype.performAction = function (source, evt) {
                    var editor = (this.__parent.getAncestorWithClass("visual-editor"));
                    editor.setWillAddComponent(this.me, true);
                };
                return Component$0;
            }());
            Component.Component$0 = Component$0;
            Component$0["__interfaces"] = ["framework.EventListener"];
        })(Component = builder.Component || (builder.Component = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var AbstractEditor = (function (_super) {
                __extends(AbstractEditor, _super);
                function AbstractEditor(name, tag, rootEditor) {
                    var _this = _super.call(this, name, tag) || this;
                    _this.projectService = (framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService"));
                    _this.file = null;
                    _this.rootEditor = null;
                    _this.rootEditor = rootEditor;
                    return _this;
                }
                AbstractEditor.prototype.setRootEditor = function (root) {
                    this.rootEditor = root;
                };
                AbstractEditor.prototype.getStructure = function () {
                    return this.rootEditor.getStructure();
                };
                AbstractEditor.prototype.dirty = function () {
                    var body = (this.getAncestorWithClass("slds-tabs_default__content"));
                    var tabs = (this.getAncestorWithClass("editor-tabs"));
                    var item = tabs.getTab(body);
                    if (item != null) {
                        item.setStyle("color", "red");
                        item.render();
                    }
                    if (this.getRootEditor() != null && !(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(this.getRootEditor().getName(), this.getName())) {
                        this.getRootEditor().dirty();
                    }
                };
                AbstractEditor.prototype.clean = function () {
                    var body = (this.getAncestorWithClass("slds-tabs_default__content"));
                    var tabs = (this.getAncestorWithClass("editor-tabs"));
                    var item = tabs.getTab(body);
                    if (item != null) {
                        item.setStyle("color", "#16325c");
                        item.render();
                    }
                };
                AbstractEditor.prototype.getRootEditor = function () {
                    return this.rootEditor;
                };
                AbstractEditor.prototype.save = function (type) {
                    if (type === undefined) {
                        return this.save$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                AbstractEditor.prototype.save$ = function () {
                    var data = this.getMarshall();
                    this.file.setData(data);
                    this.projectService.saveFile(this, this.file, new AbstractEditor.AbstractEditor$0(this));
                };
                /**
                 *
                 * @param {*} data
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
                        this.__parent.clean();
                        var title = this.__parent.getAttribute("title");
                        framework.builder.Builder.websocket_$LI$().send("open:" + title);
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
    (function (builder) {
        var editors;
        (function (editors) {
            var JSONEditor = (function (_super) {
                __extends(JSONEditor, _super);
                function JSONEditor() {
                    return _super.call(this, "") || this;
                }
                return JSONEditor;
            }(framework.JSContainer));
            editors.JSONEditor = JSONEditor;
            JSONEditor["__class"] = "framework.builder.editors.JSONEditor";
            JSONEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var JSTemplate = (function (_super) {
                __extends(JSTemplate, _super);
                function JSTemplate(f) {
                    var _this = _super.call(this, "div") || this;
                    _this.fileName = null;
                    _this.fileName = f.getName();
                    _this.setHtml(f.getData());
                    return _this;
                }
                JSTemplate.prototype.getId = function () {
                    return this.fileName.split(".html").join("");
                };
                return JSTemplate;
            }(framework.JSContainer));
            editors.JSTemplate = JSTemplate;
            JSTemplate["__class"] = "framework.builder.editors.JSTemplate";
            JSTemplate["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var Preview = (function (_super) {
                __extends(Preview, _super);
                function Preview(file) {
                    var _this = this;
                    if (((file != null && file instanceof framework.builder.data.File) || file === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        _this = _super.call(this, "visualEditor", "div") || this;
                        _this.root = null;
                        _this.root = null;
                        (function () {
                            _this.addClass("visual-editor");
                            _this.consume(_this.unmarshall$framework_builder_data_File(file));
                        })();
                    }
                    else if (((typeof file === 'string') || file === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        _this = _super.call(this, "visualEditor", "div") || this;
                        _this.root = null;
                        _this.root = null;
                        (function () {
                            _this.addClass("visual-editor");
                            _this.consume(_this.unmarshall$java_lang_String(file));
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                Preview.build = function (s) {
                    return new Preview(s);
                };
                Preview.prototype.unmarshall$framework_builder_data_File = function (f) {
                    return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(f.getData());
                };
                Preview.prototype.unmarshall = function (f) {
                    if (((f != null && f instanceof framework.builder.data.File) || f === null)) {
                        return this.unmarshall$framework_builder_data_File(f);
                    }
                    else if (((typeof f === 'string') || f === null)) {
                        return this.unmarshall$java_lang_String(f);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Preview.prototype.unmarshall$java_lang_String = function (f) {
                    return framework.builder.marshalling.MarshallUtil.toComponent$java_lang_String(f);
                };
                Preview.prototype.build = function (component) {
                    framework.builder.marshalling.MarshallUtil.generateController(component);
                    return framework.builder.marshalling.MarshallUtil.toDesignable(component, false, null);
                };
                Preview.prototype.consume = function (component) {
                    this.root = this.build(component);
                    this.addChild$framework_JSContainer(this.root);
                };
                Preview.prototype.getRootItem = function () {
                    return this.root;
                };
                return Preview;
            }(framework.JSContainer));
            editors.Preview = Preview;
            Preview["__class"] = "framework.builder.editors.Preview";
            Preview["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.editors.DesignableEditor", "framework.Renderable"];
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var Structure = (function (_super) {
                __extends(Structure, _super);
                function Structure(name, root, f, selector) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.ul = new framework.JSContainer("ul");
                    /*private*/ _this.lis = (new framework.util.HashMap());
                    /*private*/ _this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    /*private*/ _this.selected = null;
                    /*private*/ _this.__cut = false;
                    /*private*/ _this.clipboardItem = null;
                    _this.dataRoot = new framework.TreeItem("", "Data").setLeftIcon("https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif");
                    _this.toggleSelect = new Structure.Structure$0(_this);
                    _this.root = null;
                    _this.file = null;
                    _this.selector = null;
                    _this.addClass("structure");
                    _this.selector = selector;
                    _this.file = f;
                    _this.addClass("slds-tree_container");
                    _this.addChild$framework_JSContainer(_this.ul.addClass("slds-tree").setAttribute("role", "tree"));
                    _this.root = root;
                    _this.reload();
                    return _this;
                }
                Structure.prototype.copy = function (des) {
                    this.__cut = false;
                    this.clipboardItem = des;
                };
                Structure.prototype.cut = function (des) {
                    this.__cut = true;
                    this.clipboardItem = des;
                };
                Structure.prototype.isCut = function () {
                    return this.__cut;
                };
                Structure.prototype.getClipBoard = function () {
                    return this.clipboardItem;
                };
                Structure.prototype.clearClipboard = function () {
                    this.clipboardItem = null;
                };
                Structure.prototype.getFile = function () {
                    return this.file;
                };
                Structure.prototype.getSelector = function () {
                    return this.selector;
                };
                Structure.prototype.getRootUINode = function () {
                    return this.root;
                };
                Structure.prototype.select = function (designable) {
                    if (this.getSelected() != null) {
                        this.getSelected().select(false);
                    }
                    var itemS = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
                    if (itemS != null) {
                        this.setSelected(itemS);
                        this.getSelected().select(true);
                        var parent_1 = designable;
                        while ((true)) {
                            parent_1 = parent_1.getParent();
                            if (parent_1 == null) {
                                return;
                            }
                            if (parent_1 != null && (parent_1["__interfaces"] != null && parent_1["__interfaces"].indexOf("framework.design.Designable") >= 0 || parent_1.constructor != null && parent_1.constructor["__interfaces"] != null && parent_1.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) {
                                var itemP = this.getItem$framework_design_Designable$framework_JSContainer(parent_1, this.liRoot);
                                itemP.open();
                            }
                        }
                        ;
                    }
                    else {
                        var parent_2 = designable;
                        var stack = (new Array());
                        while ((true)) {
                            parent_2 = parent_2.getParent();
                            if (parent_2 == null) {
                                return;
                            }
                            if (parent_2 != null && (parent_2["__interfaces"] != null && parent_2["__interfaces"].indexOf("framework.design.Designable") >= 0 || parent_2.constructor != null && parent_2.constructor["__interfaces"] != null && parent_2.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) {
                                var itemP = this.getItem$framework_design_Designable$framework_JSContainer(parent_2, this.liRoot);
                                if (itemP != null) {
                                    stack.push(parent_2);
                                    break;
                                }
                                else {
                                    stack.push(parent_2);
                                }
                            }
                        }
                        ;
                        while ((stack.length > 0)) {
                            var d = stack.pop();
                            this.getItem$framework_design_Designable$framework_JSContainer(d, this.liRoot).open();
                        }
                        ;
                        itemS = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
                        if (itemS != null) {
                            this.setSelected(itemS);
                            this.getSelected().select(true);
                        }
                    }
                };
                Structure.prototype.setSelected = function (item) {
                    if (this.selected != null) {
                        this.selected.select(false);
                    }
                    this.selected = item;
                    this.selected.select(true);
                };
                Structure.prototype.getSelected = function () {
                    return this.selected;
                };
                Structure.prototype.reload$ = function () {
                    this.clipboardItem = null;
                    this.ul.clearChildren();
                    this.ul.setRendered(false);
                    this.liRoot = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                    this.ul.addChild$framework_JSContainer(this.liRoot.addClass("type-ui"));
                    this.addNode(this.root, this.liRoot, 1, null);
                    var items = ["scripts", "stylesheets", "templates", "components", "datasources", "variables", "types"];
                    var labels = ["JS", "CSS", "HTML", "Components", "Datasources", "Variables", "Types"];
                    for (var i = 0; i < items.length; i++) {
                        var li = new framework.JSContainer("li").setAttribute("role", "treeitem").setAttribute("aria-level", "1");
                        this.addTreeItem(li, items[i], labels[i]);
                        this.lis.put(items[i], li);
                    }
                    ;
                    this.renderFiles();
                };
                /*private*/ Structure.prototype.addTreeItem = function (li, type, label) {
                    var item = new framework.TreeItem("", label);
                    item.addIcon("add", "utility", new framework.builder.editors.NewFileStructureEventListener(type, this.file, this));
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "types")) {
                        item.addIcon("import", "utility", new Structure.Structure$1(this));
                    }
                    item.addClass("type-" + type).addEventListener(this.toggleSelect, "click");
                    li.addChild$framework_JSContainer(item);
                    this.ul.addChild$framework_JSContainer(li);
                };
                Structure.prototype.getItem$framework_design_Designable$framework_JSContainer = function (designable, currentNode) {
                    {
                        var array6512 = currentNode.getChildren();
                        for (var index6511 = 0; index6511 < array6512.length; index6511++) {
                            var des = array6512[index6511];
                            {
                                if (des != null && des instanceof framework.builder.editors.StructureTreeItem) {
                                    var titem = des;
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(designable.getId(), titem.getDesignable().getId())) {
                                        return titem;
                                    }
                                }
                                var child = this.getItem$framework_design_Designable$framework_JSContainer(designable, des);
                                if (child != null) {
                                    return child;
                                }
                            }
                        }
                    }
                    return null;
                };
                Structure.prototype.getItem = function (designable, currentNode) {
                    if (((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null) && ((currentNode != null && currentNode instanceof framework.JSContainer) || currentNode === null)) {
                        return this.getItem$framework_design_Designable$framework_JSContainer(designable, currentNode);
                    }
                    else if (((typeof designable === 'string') || designable === null) && currentNode === undefined) {
                        return this.getItem$java_lang_String(designable);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Structure.prototype.getItem$java_lang_String = function (type) {
                    return this.lis.get(type).getChildren()[0];
                };
                Structure.prototype.reload$java_lang_String = function (type) {
                    this.reload();
                    var item = this.getItem$java_lang_String(type);
                    item.open();
                };
                Structure.prototype.reload = function (type) {
                    if (((typeof type === 'string') || type === null)) {
                        return this.reload$java_lang_String(type);
                    }
                    else if (((type != null && (type["__interfaces"] != null && type["__interfaces"].indexOf("framework.design.Designable") >= 0 || type.constructor != null && type.constructor["__interfaces"] != null && type.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || type === null)) {
                        return this.reload$framework_design_Designable(type);
                    }
                    else if (type === undefined) {
                        return this.reload$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Structure.prototype.reload$framework_design_Designable = function (designable) {
                    var item = this.getItem$framework_design_Designable$framework_JSContainer(designable, this.liRoot);
                    if (item != null) {
                        var level = parseInt(item.getParent().getAttribute("aria-level"));
                        var li = item.getParent();
                        li.clearChildren();
                        li.setRendered(false);
                        this.addNode(designable, li, /* intValue */ (level | 0), item.getParentDesignable()).open();
                        item.open();
                    }
                };
                Structure.prototype.unselect = function (c) {
                };
                Structure.prototype.renderFiles = function () {
                    {
                        var array6514 = this.lis.keySet();
                        for (var index6513 = 0; index6513 < array6514.length; index6513++) {
                            var type = array6514[index6513];
                            {
                                var cstylesheets = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                                if (this.file.getChild(type) != null) {
                                    {
                                        var array6516 = this.file.getChild(type).getChildren();
                                        for (var index6515 = 0; index6515 < array6516.length; index6515++) {
                                            var f = array6516[index6515];
                                            {
                                                var item = new framework.builder.editors.FileTreeItem(f, type, framework.builder.Builder.getInstance(), this);
                                                item.addEventListener(this.toggleSelect, "click");
                                                var li = new framework.JSContainer("li").addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", "3");
                                                this.lis.get(type).addChild$framework_JSContainer(cstylesheets.addChild$framework_JSContainer(li));
                                            }
                                        }
                                    }
                                }
                                else {
                                    this.lis.get(type).addChild$framework_JSContainer(cstylesheets);
                                }
                            }
                        }
                    }
                };
                Structure.prototype.addNode = function (ctn, li, level, parent) {
                    var item = new framework.builder.editors.StructureTreeItem(ctn.getName(), ctn, this, parent);
                    li.addChild$framework_JSContainer(item).setAttribute("role", "treeitem").setAttribute("aria-level", level + "");
                    var designables = ctn.getDesignables();
                    if (designables != null && designables.length > 0) {
                        item.leaf(false);
                        var children = new framework.JSContainer("ul").setAttribute("role", "group").setStyle("display", "none");
                        li.addChild$framework_JSContainer(children);
                        {
                            var array6518 = ctn.getDesignables();
                            for (var index6517 = 0; index6517 < array6518.length; index6517++) {
                                var c = array6518[index6517];
                                {
                                    var child = new framework.JSContainer("li");
                                    children.addChild$framework_JSContainer(child);
                                    this.addNode(c, child, level + 1, ctn);
                                }
                            }
                        }
                    }
                    else {
                        item.leaf(true);
                    }
                    return item;
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
                        if (this.__parent.selected != null) {
                            this.__parent.selected.select(false);
                        }
                        this.__parent.selected = source;
                        source.select(true);
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
                        alert("to implement: Import from salesforce");
                    };
                    return Structure$1;
                }());
                Structure.Structure$1 = Structure$1;
                Structure$1["__interfaces"] = ["framework.EventListener"];
            })(Structure = editors.Structure || (editors.Structure = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var Zoom = (function (_super) {
                __extends(Zoom, _super);
                function Zoom(name, editor) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.value = new framework.JSInput("value");
                    _this.addClass("zoom");
                    _this.value.setType("number").setAttribute("min", "1");
                    _this.value.setValue$java_lang_String("100");
                    _this.addChild$framework_JSContainer(_this.value);
                    _this.value.addEventListener(new Zoom.Zoom$0(_this, editor), "change");
                    return _this;
                }
                return Zoom;
            }(framework.JSContainer));
            editors.Zoom = Zoom;
            Zoom["__class"] = "framework.builder.editors.Zoom";
            Zoom["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
            (function (Zoom) {
                var Zoom$0 = (function () {
                    function Zoom$0(__parent, editor) {
                        this.editor = editor;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    Zoom$0.prototype.performAction = function (source, evt) {
                        var svalue = this.__parent.value.getValue();
                        var zoom = parseInt(svalue);
                        this.editor.zoom(zoom);
                    };
                    return Zoom$0;
                }());
                Zoom.Zoom$0 = Zoom$0;
                Zoom$0["__interfaces"] = ["framework.EventListener"];
            })(Zoom = editors.Zoom || (editors.Zoom = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var FilesList = (function (_super) {
            __extends(FilesList, _super);
            function FilesList(name, selector) {
                var _this = _super.call(this, name, "ul") || this;
                /*private*/ _this.itemSelectedListeners = (new Array());
                /*private*/ _this.click = new FilesList.FilesList$0(_this);
                _this.selector = null;
                _this.selector = selector;
                _this.addClass("slds-grid slds-grid_pull-padded slds-wrap");
                return _this;
            }
            FilesList.prototype.addFile = function (file) {
                file.addEventListener(this.click, "click");
                var li = new framework.JSContainer("li");
                li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3");
                this.addChild$framework_JSContainer(li);
                li.addChild$framework_JSContainer(file);
                return this;
            };
            FilesList.prototype.addItemSelectedListener = function (l) {
                this.itemSelectedListeners.push(l);
            };
            FilesList.prototype.fireItemSelectedListeners = function (file, selector) {
                for (var index6519 = 0; index6519 < this.itemSelectedListeners.length; index6519++) {
                    var l = this.itemSelectedListeners[index6519];
                    {
                        l.itemSelected(file, selector);
                    }
                }
            };
            FilesList.prototype.select = function (file) {
                {
                    var array6521 = this.getChildren();
                    for (var index6520 = 0; index6520 < array6521.length; index6520++) {
                        var c = array6521[index6520];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(c.getChildren()[0].getName(), file.getName())) {
                                this.fireItemSelectedListeners(file, this.selector);
                                c.getChildren()[0].addClass("selected");
                            }
                            else {
                                c.getChildren()[0].removeClass("selected");
                            }
                        }
                    }
                }
            };
            return FilesList;
        }(framework.JSContainer));
        builder.FilesList = FilesList;
        FilesList["__class"] = "framework.builder.FilesList";
        FilesList["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (FilesList) {
            var FilesList$0 = (function () {
                function FilesList$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                FilesList$0.prototype.performAction = function (source, evt) {
                    evt.stopPropagation();
                    this.__parent.select(source);
                };
                return FilesList$0;
            }());
            FilesList.FilesList$0 = FilesList$0;
            FilesList$0["__interfaces"] = ["framework.EventListener"];
        })(FilesList = builder.FilesList || (builder.FilesList = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var DataComposer = (function (_super) {
                __extends(DataComposer, _super);
                function DataComposer(name, editor, structure) {
                    var _this = _super.call(this, name, "div") || this;
                    _this.editor = null;
                    _this.structure = null;
                    _this.editor = editor;
                    _this.structure = structure;
                    return _this;
                }
                /**
                 *
                 */
                DataComposer.prototype.save = function () {
                };
                /**
                 *
                 */
                DataComposer.prototype.dirty = function () {
                };
                /**
                 *
                 */
                DataComposer.prototype.clean = function () {
                };
                /**
                 *
                 * @param {framework.builder.data.File} file
                 */
                DataComposer.prototype.open = function (file) {
                    var struct = file;
                    var item = new framework.builder.libraries.DataItem(struct.getName(), struct);
                    this.addChild$framework_JSContainer(item);
                };
                /**
                 *
                 * @return {framework.builder.editors.Structure}
                 */
                DataComposer.prototype.getStructure = function () {
                    return this.structure;
                };
                /**
                 *
                 * @return {framework.builder.editors.VisualEditor}
                 */
                DataComposer.prototype.getRootEditor = function () {
                    return this.editor;
                };
                return DataComposer;
            }(framework.JSContainer));
            libraries.DataComposer = DataComposer;
            DataComposer["__class"] = "framework.builder.libraries.DataComposer";
            DataComposer["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Previewer = (function (_super) {
            __extends(Previewer, _super);
            function Previewer(name) {
                var _this = _super.call(this, "div") || this;
                var websocket = new WebSocket("ws:localhost:8080/preview");
                websocket.onopen = function (t) {
                    websocket.send("open:" + name);
                    return null;
                };
                websocket.onmessage = function (t) {
                    var templates = document.getElementById("templates");
                    document.body.innerHTML = "";
                    document.body.appendChild(templates);
                    var o = JSON.parse(t.data.toString());
                    var template = document.createElement("div");
                    template.style.display = "none";
                    template.setAttribute("id", "templates");
                    document.body.appendChild(template);
                    var f = new framework.builder.data.File(o);
                    Previewer.project = f;
                    var preview = new framework.builder.editors.Preview(f);
                    {
                        var array6523 = f.getStylesheets();
                        for (var index6522 = 0; index6522 < array6523.length; index6522++) {
                            var sc = array6523[index6522];
                            {
                                var elem = document.createElement("style");
                                elem.textContent = sc.getData();
                                document.body.appendChild(elem);
                            }
                        }
                    }
                    {
                        var array6525 = f.getScripts();
                        for (var index6524 = 0; index6524 < array6525.length; index6524++) {
                            var sc = array6525[index6524];
                            {
                                var elem = document.createElement("script");
                                elem.textContent = sc.getData();
                                document.body.appendChild(elem);
                            }
                        }
                    }
                    {
                        var array6527 = f.getTemplates();
                        for (var index6526 = 0; index6526 < array6527.length; index6526++) {
                            var sc = array6527[index6526];
                            {
                                var elem = document.createElement("div");
                                elem.setAttribute("id", /* replace */ sc.getName().split(".html").join(""));
                                elem.innerHTML = sc.getData();
                                template.appendChild(elem);
                            }
                        }
                    }
                    preview.render();
                    return null;
                };
                return _this;
            }
            return Previewer;
        }(framework.JSContainer));
        Previewer.project = null;
        builder.Previewer = Previewer;
        Previewer["__class"] = "framework.builder.Previewer";
        Previewer["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var Ruler = (function (_super) {
            __extends(Ruler, _super);
            function Ruler(vertical) {
                var _this = _super.call(this, "ruler", "div") || this;
                /*private*/ _this.unit = "px";
                /*private*/ _this.accuracy = 8;
                /*private*/ _this.chunk = 64;
                /*private*/ _this.inner = new framework.JSContainer("inner", "div");
                /*private*/ _this.vertical = false;
                _this.addClass("ruler");
                _this.addChild$framework_JSContainer(_this.inner);
                _this.inner.addClass("inner-ruler");
                _this.vertical = vertical;
                if (vertical) {
                    _this.addClass("vertical");
                }
                _this.renderRuler();
                _this.addRenderer(new framework.interactions.DraggableRenderer());
                return _this;
            }
            Ruler.prototype.renderRuler = function () {
                var width = 1024;
                if (!this.vertical)
                    this.inner.setStyle("width", width + this.unit);
                else
                    this.inner.setStyle("height", width + this.unit);
                for (var i = 0; i < width; i = i + this.accuracy) {
                    var scal = new framework.JSContainer("div").setStyle("position", "absolute");
                    if (!this.vertical) {
                        scal.setStyle("width", this.accuracy + this.unit);
                        scal.setStyle("left", i + this.unit);
                    }
                    else {
                        scal.setStyle("top", i + this.unit);
                        scal.setStyle("height", this.accuracy + this.unit);
                    }
                    this.inner.addChild$framework_JSContainer(scal);
                    if ((i % this.chunk) === 0) {
                        scal.addClass("big-scale").setHtml(i + "");
                    }
                    else {
                        scal.addClass("small-scale");
                    }
                }
                ;
            };
            /**
             *
             * @return {*}
             */
            Ruler.prototype.getDraggableOptions = function () {
                var opt = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                return opt;
            };
            return Ruler;
        }(framework.JSContainer));
        builder.Ruler = Ruler;
        Ruler["__class"] = "framework.builder.Ruler";
        Ruler["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
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
                if (this.selected == null || !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(component, this.selected)) {
                    try {
                        this.selected = component;
                        this.visualEditor.getStructure().select(component);
                    }
                    catch (e) {
                    }
                    ;
                    this.visualEditor.visit$framework_builder_editors_Visitor(new Selector.Selector$0(this));
                    component.setAttribute("dssel", "true");
                    this.visualEditor.selectItem(component);
                }
            };
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            Selector.prototype.performAction = function (source, evt) {
                source.setStyle("width", "0px");
                source.setStyle("height", "0px");
                this.selected = null;
            };
            return Selector;
        }(framework.JSContainer));
        builder.Selector = Selector;
        Selector["__class"] = "framework.builder.Selector";
        Selector["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
        (function (Selector) {
            var Selector$0 = (function () {
                function Selector$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} host
                 */
                Selector$0.prototype.doVisit = function (host) {
                    host.setAttribute("dssel", "false");
                };
                return Selector$0;
            }());
            Selector.Selector$0 = Selector$0;
            Selector$0["__interfaces"] = ["framework.builder.editors.Visitor"];
        })(Selector = builder.Selector || (builder.Selector = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var UIFile = (function (_super) {
            __extends(UIFile, _super);
            function UIFile(name) {
                var _this = _super.call(this, name, "a") || this;
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
                /*private*/ _this.figure = new framework.JSContainer("div").setAttribute("class", "slds-app-launcher__tile-figure");
                /*private*/ _this.body = new framework.JSContainer("div").setAttribute("class", "slds-app-launcher__tile-body");
                /*private*/ _this.uiTitle = new framework.JSContainer("span").addClass("slds-text-link");
                /*private*/ _this.uiHelp = new framework.JSContainer("p");
                /*private*/ _this.abbr = new framework.JSContainer("abbr").setAttribute("class", "slds-avatar__initials slds-icon-custom-27");
                _this.setAttribute("href", "javascript:void(0);");
                _this.setAttribute("class", "slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
                _this.addChild$framework_JSContainer(_this.figure.addChild$framework_JSContainer(new framework.JSContainer("span").addClass("slds-avatar slds-avatar_large").addChild$framework_JSContainer(_this.abbr)));
                _this.addChild$framework_JSContainer(_this.body);
                _this.body.addChild$framework_JSContainer(_this.uiTitle);
                _this.body.addChild$framework_JSContainer(_this.uiHelp);
                return _this;
            }
            UIFile.prototype.setTitle = function (title) {
                this.uiTitle.setHtml(title);
                this.abbr.setAttribute("title", title);
                return this;
            };
            UIFile.prototype.setAbbr = function (abbr) {
                this.abbr.setHtml(abbr);
                return this;
            };
            UIFile.prototype.setHelp = function (help) {
                this.uiHelp.setHtml(help);
                return this;
            };
            return UIFile;
        }(framework.JSContainer));
        builder.UIFile = UIFile;
        UIFile["__class"] = "framework.builder.UIFile";
        UIFile["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var WelcomeScreenItem = (function (_super) {
            __extends(WelcomeScreenItem, _super);
            function WelcomeScreenItem(name, abbrev, title, text, index) {
                var _this = _super.call(this, name, "a") || this;
                /*private*/ _this.titleFigure = new framework.JSContainer("div").addClass("slds-app-launcher__tile-figure");
                /*private*/ _this.avatar = new framework.JSContainer("avatar").addClass("slds-avatar slds-avatar_large");
                /*private*/ _this.abbr = new framework.JSContainer("abbr").addClass("slds-avatar__initials");
                /*private*/ _this.body = new framework.JSContainer("body").addClass("slds-app-launcher__tile-body");
                /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-text-link");
                /*private*/ _this.description = new framework.JSContainer("p");
                _this.setAttribute("href", "javascript:void(0);");
                _this.addClass("slds-app-launcher__tile slds-text-link_reset slds-is-draggable");
                _this.addChild$framework_JSContainer(_this.titleFigure);
                _this.titleFigure.addChild$framework_JSContainer(_this.avatar);
                _this.abbr.addClass("slds-icon-custom-" + index);
                _this.avatar.addChild$framework_JSContainer(_this.abbr);
                _this.abbr.setHtml(abbrev);
                _this.addChild$framework_JSContainer(_this.body);
                _this.body.addChild$framework_JSContainer(_this.title);
                _this.title.setHtml(title);
                _this.body.addChild$framework_JSContainer(_this.description);
                _this.description.setHtml(text);
                return _this;
            }
            return WelcomeScreenItem;
        }(framework.JSContainer));
        builder.WelcomeScreenItem = WelcomeScreenItem;
        WelcomeScreenItem["__class"] = "framework.builder.WelcomeScreenItem";
        WelcomeScreenItem["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignable = (function (_super) {
            __extends(JSDesignable, _super);
            function JSDesignable(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("identifier", "html:div");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignable.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignable.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignable.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignable.prototype.getDesignables = function () {
                var l = this.getChildren();
                return l;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignable.prototype.addDesignable = function (designable) {
                this.delegate.addDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignable.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignable.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            return JSDesignable;
        }(framework.JSContainer));
        designables.JSDesignable = JSDesignable;
        JSDesignable["__class"] = "framework.designables.JSDesignable";
        JSDesignable["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableDataSource = (function (_super) {
            __extends(JSDesignableDataSource, _super);
            function JSDesignableDataSource(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.datasource = new framework.builder.data.RestDataSource();
                /*private*/ _this.dsDelegate = new framework.designables.DesignableDelegate(_this);
                /*private*/ _this.previous = new framework.lightning.IconButton("previous");
                _this.next = new framework.lightning.IconButton("next");
                /*private*/ _this.currentIndex = 0;
                _this.setVisible(false);
                _this.addClass("table-paginator");
                var leftGrp = new framework.lightning.ButtonGroup("leftGrp");
                _this.previous.getIcon().setIconName("left");
                _this.previous.getIcon().setType("utility");
                _this.next.getIcon().setIconName("right");
                _this.next.getIcon().setType("utility");
                leftGrp.addButton$framework_lightning_IconButton(_this.previous.setBorder(true));
                leftGrp.addButton$framework_lightning_IconButton(_this.next.setBorder(true));
                _this.addChild$framework_JSContainer(leftGrp);
                _this.previous.addEventListener(_this, "click");
                _this.next.addEventListener(_this, "click");
                return _this;
            }
            /**
             *
             * @param {framework.JSContainer} source
             * @param {Event} evt
             */
            JSDesignableDataSource.prototype.performAction = function (source, evt) {
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(source.getName(), "previous")) {
                    if (this.currentIndex > 0) {
                        this.currentIndex = this.currentIndex - 1;
                        var cache = this.datasource.getCached();
                        if (cache != null) {
                            cache[this.currentIndex];
                        }
                    }
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(source.getName(), "next")) {
                    var cache = this.datasource.getCached();
                    if (cache != null) {
                        if (cache.length > this.currentIndex) {
                            this.currentIndex = this.currentIndex + 1;
                            cache[this.currentIndex];
                        }
                    }
                }
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableDataSource.prototype.applyParam = function (key, value) {
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "url")) {
                    this.datasource.setUrl(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableDataSource.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableDataSource.prototype.getComponent = function () {
                return this.dsDelegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableDataSource.prototype.getParameters = function () {
                var parameters = this.dsDelegate.getParameters();
                var url = new framework.design.AttributeParameter("url", "Url", "Basic");
                parameters.push(url);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableDataSource.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableDataSource.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableDataSource.prototype.moveDesignable = function (designable, steps) {
            };
            return JSDesignableDataSource;
        }(framework.JSContainer));
        designables.JSDesignableDataSource = JSDesignableDataSource;
        JSDesignableDataSource["__class"] = "framework.designables.JSDesignableDataSource";
        JSDesignableDataSource["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.EventListener", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableImage = (function (_super) {
            __extends(JSDesignableImage, _super);
            function JSDesignableImage(name) {
                var _this = _super.call(this, name, "img") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableImage.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                parameters.push(new framework.design.AttributeParameter("src", "Source", "Basic"));
                return parameters;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableImage.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableImage.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableImage.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableImage.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableImage.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableImage.prototype.moveDesignable = function (designable, steps) {
            };
            return JSDesignableImage;
        }(framework.JSContainer));
        designables.JSDesignableImage = JSDesignableImage;
        JSDesignableImage["__class"] = "framework.designables.JSDesignableImage";
        JSDesignableImage["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableList = (function (_super) {
            __extends(JSDesignableList, _super);
            function JSDesignableList(name) {
                var _this = _super.call(this, name, "ul") || this;
                /*private*/ _this.designables = (new Array());
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableList.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                this.setAttribute(key, value);
                if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(key, "decorate")) {
                    this.setAttribute(key, value);
                    this.decorate();
                }
            };
            JSDesignableList.prototype.decorate = function () {
                var dec = this.getAttribute("decorate-class");
                if (dec != null) {
                    {
                        var array6529 = this.getChildren();
                        for (var index6528 = 0; index6528 < array6529.length; index6528++) {
                            var c = array6529[index6528];
                            {
                                c.setAttribute("class", dec);
                            }
                        }
                    }
                }
                var decStyle = this.getAttribute("decorate-style");
                if (decStyle != null) {
                    {
                        var array6531 = this.getChildren();
                        for (var index6530 = 0; index6530 < array6531.length; index6530++) {
                            var c = array6531[index6530];
                            {
                                c.setAttribute("style", decStyle);
                            }
                        }
                    }
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableList.prototype.getDesignables = function () {
                return this.designables;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableList.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableList.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var tagParam = new framework.design.TagParameter();
                tagParam.options.push(new framework.design.Option("Un-Ordered(ul)", "ul"));
                tagParam.options.push(new framework.design.Option("Ordered(ol)", "ol"));
                parameters.push(tagParam);
                var decoracteClass = new framework.design.AttributeParameter("decorate-class", "Decorate class", "Basic");
                parameters.push(decoracteClass);
                var decoracteStyle = new framework.design.AttributeParameter("decorate-style", "Decorate style", "Basic");
                parameters.push(decoracteStyle);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableList.prototype.addDesignable = function (designable) {
                var li = new framework.JSContainer("li");
                this.addChild$framework_JSContainer(li);
                li.addChild$framework_JSContainer(designable);
                this.designables.push(designable);
                designable.applyParam("name", "item_" + (this.getChildren().length - 1));
                this.decorate();
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableList.prototype.removeDesignable = function (designable) {
                this.removeChild(designable.getParent());
                var tmp = (new Array());
                for (var index6532 = 0; index6532 < this.designables.length; index6532++) {
                    var d = this.designables[index6532];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(d, designable)) {
                        }
                        else {
                            tmp.push(d);
                        }
                    }
                }
                this.designables = tmp;
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableList.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_JSContainer$int(designable.getParent(), steps);
            };
            return JSDesignableList;
        }(framework.JSContainer));
        designables.JSDesignableList = JSDesignableList;
        JSDesignableList["__class"] = "framework.designables.JSDesignableList";
        JSDesignableList["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
            var el = this.getNative();
            if (el != null) {
                return el.checked;
            }
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
            var el = this.getNative();
            if (el != null) {
                this.setValue$java_lang_Boolean(el.checked);
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
    var JSInput = (function (_super) {
        __extends(JSInput, _super);
        function JSInput(name) {
            var _this = _super.call(this, name, "input") || this;
            _this.setType(framework.InputTypes.text);
            return _this;
        }
        JSInput.prototype.setType = function (type) {
            this.setAttribute("type", type);
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
            var nat = this.getNative();
            if (nat != null) {
                var el = nat;
                return el.value;
            }
            return this.getAttribute("value");
        };
        JSInput.prototype.setValue$java_lang_String = function (val) {
            var nat = this.getNative();
            if (nat != null) {
                var el = nat;
                el.value = val;
            }
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
            var _this = _super.call(this, name, "select") || this;
            _this.previousValue = null;
            return _this;
        }
        JSSelect.prototype.addOption = function (option) {
            this.addChild$framework_JSContainer(option);
            return this;
        };
        JSSelect.prototype.setMultiple = function (b) {
            if (b) {
                this.setAttribute("multiple", "true");
            }
            else {
                this.setAttribute("multiple", null);
            }
        };
        JSSelect.prototype.setSize = function (size) {
            this.setAttribute("size", size + "");
        };
        JSSelect.prototype.isMultiple = function () {
            return (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })("true", this.getAttribute("multiple"));
        };
        /**
         *
         * @return {*}
         */
        JSSelect.prototype.getValue = function () {
            var ele = this.getNative();
            if (ele != null) {
                if (ele.multiple) {
                    var result = (new Array());
                    for (var index6533 = 0; index6533 < ele.selectedOptions.length; index6533++) {
                        var e = ele.selectedOptions[index6533];
                        {
                            var opt = e;
                            result.push(opt.value);
                        }
                    }
                    return result;
                }
                else {
                    return ele.value;
                }
            }
            else {
                var val = this.getAttribute("value");
                {
                    var array6535 = this.getChildren();
                    for (var index6534 = 0; index6534 < array6535.length; index6534++) {
                        var opt = array6535[index6534];
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
                }
            }
            return null;
        };
        /**
         *
         * @param {boolean} b
         */
        JSSelect.prototype.setValue = function (b) {
            if (((b != null) || b === null)) {
                return this.setValue$java_lang_Object(b);
            }
            else
                throw new Error('invalid overload');
        };
        JSSelect.prototype.setValue$java_lang_Object = function (values) {
            this.previousValue = this.getValue();
            if (values != null) {
                var ele = this.getNative();
                var firstVal = values.toString();
                var arrVal = (new Array());
                if (values != null && values instanceof Array) {
                    arrVal = values;
                    if (arrVal.length > 0) {
                        firstVal = arrVal[0];
                    }
                    else {
                        firstVal = "";
                    }
                }
                else {
                    arrVal.push(values);
                }
                if (ele != null) {
                    ele.value = firstVal;
                }
                this.setAttribute("value", firstVal);
                {
                    var array6537 = this.getChildren();
                    for (var index6536 = 0; index6536 < array6537.length; index6536++) {
                        var opt = array6537[index6536];
                        {
                            opt.setSelected(false);
                            for (var index6538 = 0; index6538 < arrVal.length; index6538++) {
                                var val = arrVal[index6538];
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
                        }
                    }
                }
            }
            else {
                {
                    var array6540 = this.getChildren();
                    for (var index6539 = 0; index6539 < array6540.length; index6539++) {
                        var opt = array6540[index6539];
                        {
                            opt.setSelected(false);
                        }
                    }
                }
                var ele = this.getNative();
                if (ele != null) {
                    ele.value = "";
                }
                this.setAttribute("value", "");
            }
        };
        JSSelect.prototype.getPreviousValue = function () {
            return this.previousValue;
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
            var elem = this.getNative();
            if (elem != null) {
                return elem.value;
            }
            return this.getAttribute("value");
        };
        JSTextArea.prototype.setValue$java_lang_String = function (val) {
            var elem = this.getNative();
            if (elem != null) {
                elem.value = val;
            }
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
        return JSTextArea;
    }(framework.JSContainer));
    framework.JSTextArea = JSTextArea;
    JSTextArea["__class"] = "framework.JSTextArea";
    JSTextArea["__interfaces"] = ["framework.interactions.Droppable", "framework.InputField", "framework.Renderable"];
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
                /*private*/ _this.designables = (new Array());
                _this.addClass("slds-accordion");
                return _this;
            }
            /**
             *
             * @param {framework.lightning.AccordionItem} item
             * @return
             * @return {framework.lightning.Accordion}
             */
            Accordion.prototype.addItem = function (item) {
                this.addDesignable(item);
                var i;
                return this;
            };
            /**
             *
             * @return {Array}
             */
            Accordion.prototype.advancedEventTypes = function () {
                return ["open", "close"];
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Accordion.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
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
             * @return {framework.design.Parameter[]}
             */
            Accordion.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            Accordion.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.AccordionItem) {
                    var li = new framework.JSContainer("li").addClass("slds-accordion__list-item");
                    this.addChild$framework_JSContainer(li);
                    framework.designables.DesignableDelegate.guessName(this.getDesignables(), designable);
                    li.addChild$framework_JSContainer(designable);
                    this.designables.push(designable);
                }
                else {
                    throw new Error("Can only add Component of type JSAccordionItem in an Accordion Container");
                }
            };
            /**
             *
             * @param {*} designable
             */
            Accordion.prototype.removeDesignable = function (designable) {
                var result = (new Array());
                for (var index6541 = 0; index6541 < this.designables.length; index6541++) {
                    var des = this.designables[index6541];
                    {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(des, designable)) {
                        }
                        else {
                            result.push(des);
                        }
                    }
                }
                this.designables = result;
                designable.getParent().removeChild(designable);
                this.setRendered(false);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Accordion.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
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
        var AccordionItem = (function (_super) {
            __extends(AccordionItem, _super);
            function AccordionItem(name, title) {
                var _this = _super.call(this, name, "section") || this;
                /*private*/ _this.accordionContent = new framework.JSContainer("accordionContent", "div").addClass("slds-accordion__content");
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                /*private*/ _this.accSummary = new framework.JSContainer("div").addClass("slds-accordion__summary");
                /*private*/ _this.summaryHeading = new framework.JSContainer("h3").addClass("slds-text-heading_small slds-accordion__summary-heading");
                /*private*/ _this.uititle = new framework.JSContainer("title", "span").addClass("slds-truncate").setHtml("Accordion Item");
                _this.btn = new framework.lightning.IconButton("summaryAction");
                _this.addClass("slds-accordion__section");
                _this.addChild$framework_JSContainer(_this.accSummary);
                _this.accSummary.addChild$framework_JSContainer(_this.summaryHeading);
                _this.summaryHeading.addEventListener(new AccordionItem.AccordionItem$0(_this), "click");
                _this.btn.setAttribute("class", "slds-button slds-button_reset slds-accordion__summary-action");
                _this.summaryHeading.addChild$framework_JSContainer(_this.btn);
                _this.btn.addChild$framework_JSContainer(_this.uititle.setHtml(title));
                _this.btn.getIcon().setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
                _this.btn.getIcon().setIconName("switch");
                _this.btn.getIcon().setType("utility");
                var btnArrow = new framework.lightning.IconButton("arrow");
                btnArrow.setAttribute("class", "slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none");
                _this.accSummary.addChild$framework_JSContainer(btnArrow);
                btnArrow.getIcon().setType("utility");
                btnArrow.getIcon().setIconName("down");
                _this.addChild$framework_JSContainer(_this.accordionContent);
                return _this;
            }
            AccordionItem.prototype.open = function () {
                this.addClass("slds-is-open");
                var evt = new CustomEvent("open");
                evt["data"] = this;
                this.getParent().getParent().fireListener("open", evt);
            };
            AccordionItem.prototype.close = function () {
                this.removeClass("slds-is-open");
                var evt = new CustomEvent("close");
                evt["data"] = this;
                this.getParent().getParent().fireListener("close", evt);
            };
            AccordionItem.prototype.setTitle = function (title) {
                this.uititle.setHtml(title);
            };
            AccordionItem.prototype.setIcon = function (iconType, iconName) {
                var icon = new framework.lightning.SvgIcon("ss");
                icon.setType(iconType);
                icon.setIconName(iconName);
                this.btn.setIcon(icon);
                icon.setSvgClass("slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left");
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            AccordionItem.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "title")) {
                    this.setTitle(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            AccordionItem.prototype.getDesignables = function () {
                var l = this.accordionContent.getChildren();
                return l;
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
             * @return {framework.design.Parameter[]}
             */
            AccordionItem.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var title = new framework.design.AttributeParameter("title", "Title", "Basic");
                parameters.push(title);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            AccordionItem.prototype.addDesignable = function (designable) {
                this.accordionContent.addChild$framework_JSContainer(designable);
            };
            AccordionItem.prototype.getContent = function () {
                return this.accordionContent;
            };
            /**
             *
             * @param {*} designable
             */
            AccordionItem.prototype.removeDesignable = function (designable) {
                this.accordionContent.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            AccordionItem.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_JSContainer$int(this.accordionContent, steps);
            };
            return AccordionItem;
        }(framework.JSContainer));
        lightning.AccordionItem = AccordionItem;
        AccordionItem["__class"] = "framework.lightning.AccordionItem";
        AccordionItem["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        (function (AccordionItem) {
            var AccordionItem$0 = (function () {
                function AccordionItem$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                AccordionItem$0.prototype.performAction = function (source, evt) {
                    var cls = this.__parent.getAttribute("class");
                    if (cls.indexOf("slds-is-open") != -1) {
                        this.__parent.close();
                    }
                    else {
                        this.__parent.open();
                    }
                };
                return AccordionItem$0;
            }());
            AccordionItem.AccordionItem$0 = AccordionItem$0;
            AccordionItem$0["__interfaces"] = ["framework.EventListener"];
        })(AccordionItem = lightning.AccordionItem || (lightning.AccordionItem = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var Avatar = (function (_super) {
            __extends(Avatar, _super);
            function Avatar(name) {
                var _this = _super.call(this, name, "span") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.image = null;
                _this.addClass("slds-avatar");
                _this.image = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("html:img").build(new framework.builder.marshalling.Component(), false);
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
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Avatar.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "circle")) {
                    this.setCircle(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "size")) {
                    this.setSize(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            Avatar.prototype.getDesignables = function () {
                return (new Array(this.image));
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            Avatar.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            Avatar.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var circle = new framework.design.AttributeParameter("circle", "Make Circle", "Basic");
                circle.options.push(new framework.design.Option("", ""));
                parameters.push(circle);
                var size = new framework.design.AttributeParameter("size", "Size", "Basic");
                size.options.push(new framework.design.Option("Normal", "Normal"));
                size.options.push(new framework.design.Option("Large", Avatar.LARGE));
                size.options.push(new framework.design.Option("Medium", Avatar.MEDIUM));
                size.options.push(new framework.design.Option("Small", Avatar.SMALL));
                size.options.push(new framework.design.Option("X Small", Avatar.X_SMALL));
                parameters.push(size);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            Avatar.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            Avatar.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Avatar.prototype.moveDesignable = function (designable, steps) {
            };
            return Avatar;
        }(framework.JSContainer));
        Avatar.SMALL = "slds-avatar_small";
        Avatar.X_SMALL = "slds-avatar_x-small";
        Avatar.MEDIUM = "slds-avatar_medium";
        Avatar.LARGE = "slds-avatar_large";
        lightning.Avatar = Avatar;
        Avatar["__class"] = "framework.lightning.Avatar";
        Avatar["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.addClass("slds-badge");
                return _this;
            }
            Badge.prototype.setInverse = function (b) {
                if (b) {
                    this.addClass("slds-badge_inverse");
                }
                else {
                    this.removeClass("slds-badge_inverse");
                }
                return this;
            };
            Badge.prototype.setLightest = function (b) {
                if (b) {
                    this.addClass("slds-badge_lightest");
                }
                else {
                    this.removeClass("slds-badge_lightest");
                }
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Badge.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "inverse")) {
                    this.setInverse(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "lightest")) {
                    this.setLightest(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
            };
            /**
             *
             * @return {*[]}
             */
            Badge.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            Badge.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            Badge.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var inverse = new framework.design.AttributeParameter("inverse", "Inverse", "Basic");
                inverse.options.push(new framework.design.Option("", ""));
                var lightest = new framework.design.AttributeParameter("lightest", "Lightest", "Basic");
                lightest.options.push(new framework.design.Option("", ""));
                var textParam = new framework.design.TextParameter("text", "Html", "Basic");
                parameters.push(inverse, lightest, textParam);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            Badge.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            Badge.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Badge.prototype.moveDesignable = function (designable, steps) {
            };
            return Badge;
        }(framework.JSContainer));
        lightning.Badge = Badge;
        Badge["__class"] = "framework.lightning.Badge";
        Badge["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
        var BreadCrumbItem = (function (_super) {
            __extends(BreadCrumbItem, _super);
            function BreadCrumbItem(name, label) {
                var _this = _super.call(this, name, "li") || this;
                _this.link = new framework.JSContainer("link", "a").setAttribute("href", "javascript:void(0);");
                /*private*/ _this.delagate = new framework.designables.DesignableDelegate(_this);
                _this.link.setHtml(label);
                _this.addChild$framework_JSContainer(_this.link);
                _this.addClass("slds-breadcrumb__item").addClass("slds-text-title_caps");
                return _this;
            }
            BreadCrumbItem.prototype.setLabel = function (label) {
                this.link.setHtml(label);
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            BreadCrumbItem.prototype.applyParam = function (key, value) {
                this.delagate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "label")) {
                    this.setLabel(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            BreadCrumbItem.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            BreadCrumbItem.prototype.getComponent = function () {
                return this.delagate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            BreadCrumbItem.prototype.getParameters = function () {
                var param = this.delagate.getParameters();
                var label = new framework.design.AttributeParameter("label", "Label", "Basic");
                param.push(label);
                return param;
            };
            /**
             *
             * @param {*} designable
             */
            BreadCrumbItem.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            BreadCrumbItem.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            BreadCrumbItem.prototype.moveDesignable = function (designable, steps) {
            };
            return BreadCrumbItem;
        }(framework.JSContainer));
        lightning.BreadCrumbItem = BreadCrumbItem;
        BreadCrumbItem["__class"] = "framework.lightning.BreadCrumbItem";
        BreadCrumbItem["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var BreadCrumbs = (function (_super) {
            __extends(BreadCrumbs, _super);
            function BreadCrumbs(name) {
                var _this = _super.call(this, name, "nav") || this;
                /*private*/ _this.breadcrumb = new framework.lightning.HorizontalList("breadcrumb");
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("role", "navigation");
                _this.setAttribute("aria-label", "Breadcrumbs");
                _this.breadcrumb.setTag("ol");
                _this.breadcrumb.addClass("slds-wrap");
                _this.addChild$framework_JSContainer(_this.breadcrumb);
                return _this;
            }
            BreadCrumbs.prototype.addItem = function (name, label) {
                var item = new framework.lightning.BreadCrumbItem(name, label);
                this.breadcrumb.addChild$framework_JSContainer(item);
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            BreadCrumbs.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
             */
            BreadCrumbs.prototype.getDesignables = function () {
                var children = this.breadcrumb.getChildren();
                return children;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            BreadCrumbs.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            BreadCrumbs.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            BreadCrumbs.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.BreadCrumbItem) {
                    this.breadcrumb.addChild$framework_JSContainer(designable);
                }
                else {
                    console.error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
                    throw new Error("Only components of type BreadCrumbItem can be added to a BreadCrumb");
                }
            };
            /**
             *
             * @param {*} designable
             */
            BreadCrumbs.prototype.removeDesignable = function (designable) {
                this.breadcrumb.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            BreadCrumbs.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_JSContainer$int(this.breadcrumb, steps);
            };
            return BreadCrumbs;
        }(framework.JSContainer));
        lightning.BreadCrumbs = BreadCrumbs;
        BreadCrumbs["__class"] = "framework.lightning.BreadCrumbs";
        BreadCrumbs["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ButtonGroup = (function (_super) {
            __extends(ButtonGroup, _super);
            function ButtonGroup(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
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
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            ButtonGroup.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
             */
            ButtonGroup.prototype.getDesignables = function () {
                var result = this.getChildren();
                return result;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            ButtonGroup.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            ButtonGroup.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            ButtonGroup.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.Button) {
                    this.addButton$framework_lightning_Button(designable);
                }
                else if (designable != null && designable instanceof framework.lightning.IconButton) {
                    this.addButton$framework_lightning_IconButton(designable);
                }
            };
            /**
             *
             * @param {*} designable
             */
            ButtonGroup.prototype.removeDesignable = function (designable) {
                designable.getParent().removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            ButtonGroup.prototype.moveDesignable = function (designable, steps) {
                designable.moveDesignable(designable, steps);
            };
            return ButtonGroup;
        }(framework.JSContainer));
        lightning.ButtonGroup = ButtonGroup;
        ButtonGroup["__class"] = "framework.lightning.ButtonGroup";
        ButtonGroup["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
        var designables;
        (function (designables) {
            var JSDesignableIterator = (function (_super) {
                __extends(JSDesignableIterator, _super);
                function JSDesignableIterator(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                    /*private*/ _this.data = (new Array());
                    /*private*/ _this.templateCtn = new framework.JSContainer("tmp", "div");
                    /*private*/ _this.list = new framework.JSContainer("list", "div");
                    _this.addChild$framework_JSContainer(_this.templateCtn);
                    var comp = new framework.builder.marshalling.Component();
                    comp.impl = "zs:iterable";
                    var iterable = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("zs:iterable").build(comp, true);
                    _this.templateCtn.addChild$framework_JSContainer(iterable);
                    _this.addChild$framework_JSContainer(_this.list);
                    return _this;
                }
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableIterator.prototype.applyParam = function (key, value) {
                    this.delegate.applyParameter(key, value, true);
                };
                /**
                 *
                 * @return {*[]}
                 */
                JSDesignableIterator.prototype.getDesignables = function () {
                    var res = (new Array());
                    res.push(this.templateCtn.getChildren()[0]);
                    return res;
                };
                /**
                 *
                 * @return {framework.builder.marshalling.Component}
                 */
                JSDesignableIterator.prototype.getComponent = function () {
                    return this.delegate.getComponent();
                };
                JSDesignableIterator.prototype.setData = function (obj) {
                    _super.prototype.setData$java_lang_Object.call(this, obj);
                    var ls = obj;
                    var iterable = this.templateCtn.getChildren()[0];
                    for (var index6542 = 0; index6542 < ls.length; index6542++) {
                        var o = ls[index6542];
                        {
                            var ins = iterable.Clone();
                            this.list.addChild$framework_JSContainer(ins);
                            ins.setData(o);
                        }
                    }
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableIterator.prototype.getParameters = function () {
                    var params = this.delegate.getParameters();
                    return params;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableIterator.prototype.addDesignable = function (designable) {
                    if (designable != null && designable instanceof framework.lightning.designables.JSDesignableIterable) {
                        this.templateCtn.clearChildren();
                        this.templateCtn.setRendered(false);
                        this.templateCtn.addChild$framework_JSContainer(designable);
                    }
                    else {
                        throw new Error("Cannot add directly to iterator. Please add in the Iterable instead");
                    }
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableIterator.prototype.removeDesignable = function (designable) {
                    throw new Error("Cannot remove the Iterable from the Iterator");
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableIterator.prototype.moveDesignable = function (designable, steps) {
                    throw new Error("Cannot move the Iterable");
                };
                return JSDesignableIterator;
            }(framework.JSContainer));
            designables.JSDesignableIterator = JSDesignableIterator;
            JSDesignableIterator["__class"] = "framework.lightning.designables.JSDesignableIterator";
            JSDesignableIterator["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
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
                /*private*/ _this.label = new framework.lightning.SvgIcon("span");
                /*private*/ _this.txt = new framework.JSContainer("span");
                _this.setAttribute("role", "menuitem");
                _this.label.addClass("slds-truncate");
                _this.label.setTag("span");
                _this.label.setSvgClass("slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small");
                _this.addChild$framework_JSContainer(_this.label);
                _this.label.addChild$framework_JSContainer(_this.txt.setStyle("margin-left", "0.5rem"));
                _this.setLabel(label);
                return _this;
            }
            DropDownItem.prototype.setIcon = function (name, type) {
                this.label.setIconName(name);
                this.label.setType(type);
            };
            DropDownItem.prototype.setLabel = function (label) {
                this.txt.setHtml(label);
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
        var IconButton = (function (_super) {
            __extends(IconButton, _super);
            function IconButton(name) {
                var _this = _super.call(this, name, "button") || this;
                /*private*/ _this.icon = new framework.lightning.SvgIcon("icon");
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.icon.setSvgClass("slds-button__icon");
                _this.setAttribute("svgClass", "slds-button__icon");
                _this.addChild$framework_JSContainer(_this.icon);
                _this.addClass("slds-button").addClass("slds-button_icon");
                _this.setAttribute("iconAssetUrl", _this.icon.getAssetsUrl());
                _this.setAttribute("iconType", _this.icon.getType());
                _this.setAttribute("iconName", _this.icon.getIconName());
                return _this;
            }
            IconButton.prototype.getIcon = function () {
                return this.icon;
            };
            IconButton.prototype.setIcon = function (icon) {
                this.removeChild(this.icon);
                this.icon = icon;
                icon.setSvgClass("slds-button__icon");
                this.addChild$framework_JSContainer(icon);
                this.setRendered(false);
                return this;
            };
            /*private*/ IconButton.prototype.toggleClass = function (cls, b) {
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
            IconButton.prototype.setStateful = function (b) {
                return this.setBorderFilled(b);
            };
            IconButton.prototype.isSelected = function () {
                var sclass = this.getAttribute("class");
                return sclass != null && sclass.indexOf("slds-is-selected") != -1;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            IconButton.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "iconName")) {
                    this.icon.setIconName(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "iconType")) {
                    this.icon.setType(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "iconAssetUrl")) {
                    this.icon.setAssetsUrl(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "selected")) {
                    this.setSelected(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "more")) {
                    this.setMore(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "error")) {
                    this.setError(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "inverse")) {
                    this.setInverse(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "container")) {
                    this.setContainer(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "border")) {
                    this.setBorder(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "borderFilled")) {
                    this.setBorderFilled(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "borderInverse")) {
                    this.setBorderInverse(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "stateful")) {
                    this.setStateful(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "size")) {
                    this.setSize(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            IconButton.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            IconButton.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            IconButton.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var keys = ["iconName", "iconType", "iconAssetUrl", "selected", "more", "error", "inverse", "container", "border", "borderFilled", "borderInverse", "stateful"];
                var labels = ["Icon Name", "Icon Type", "Icon Asset Url", "Selected", "Error", "Inverse", "Container", "Show Border", "Border Filled", "Border Inverse", "Stateful"];
                for (var i = 0; i < keys.length; i++) {
                    var para = new framework.design.AttributeParameter(keys[i], labels[i], "Basic");
                    parameters.push(para);
                    if (i >= 3) {
                        para.options.push(new framework.design.Option("", ""));
                    }
                }
                ;
                var size = new framework.design.AttributeParameter("size", "Size", "Basic");
                size.options.push(new framework.design.Option("Normal", "Normal"));
                size.options.push(new framework.design.Option("Small", IconButton.SMALL));
                size.options.push(new framework.design.Option("X Small", IconButton.EXTRA_SMALL));
                size.options.push(new framework.design.Option("XX Small", IconButton.EXTRA_EXTRA_SMALL));
                parameters.push(size);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            IconButton.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            IconButton.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            IconButton.prototype.moveDesignable = function (designable, steps) {
            };
            return IconButton;
        }(framework.JSContainer));
        IconButton.SMALL = "slds-button_icon-small";
        IconButton.EXTRA_SMALL = "slds-button_icon-x-small";
        IconButton.EXTRA_EXTRA_SMALL = "slds-button_icon-xx-small";
        lightning.IconButton = IconButton;
        IconButton["__class"] = "framework.lightning.IconButton";
        IconButton["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ListBox = (function (_super) {
            __extends(ListBox, _super);
            function ListBox(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.ul = new framework.JSContainer("ul");
                /*private*/ _this.lengthSel = ListBox.LENGTH_DEFAULT;
                /*private*/ _this.withIcon = false;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("identifier", "lgt:listbox");
                _this.setAttribute("role", "listbox");
                _this.addChild$framework_JSContainer(_this.ul);
                _this.ul.addClass("slds-listbox");
                _this.applyParam("direction", "vertical");
                return _this;
            }
            ListBox.prototype.setLength = function (length) {
                this.lengthSel = length;
                return this.ref();
            };
            ListBox.prototype.setWithIcon = function (b) {
                this.withIcon = b;
                return this.ref();
            };
            ListBox.prototype.ref = function () {
                this.ul.removeClass(this.lengthSel);
                if (this.withIcon) {
                    if (this.lengthSel.indexOf("_length-with-icon") != -1 === false)
                        this.lengthSel = this.lengthSel.split("_length").join("_length-with-icon");
                }
                else {
                    this.lengthSel = this.lengthSel.split("_length-with-icon").join("_length");
                }
                this.ul.addClass(this.lengthSel);
                return this;
            };
            ListBox.prototype.addItem = function (option) {
                this.ul.addChild$framework_JSContainer(option);
                return this;
            };
            ListBox.prototype.setVertical = function (b) {
                if (b) {
                    this.ul.addClass("slds-listbox_vertical");
                }
                else {
                    this.ul.removeClass("slds-listbox_vertical");
                }
                return this;
            };
            ListBox.prototype.setHorizontal = function (b) {
                if (b) {
                    this.ul.addClass("slds-listbox_horizontal");
                }
                else {
                    this.ul.removeClass("slds-listbox_horizontal");
                }
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            ListBox.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "direction")) {
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "def")) {
                        this.setVertical(false);
                        this.setHorizontal(false);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "horizontal")) {
                        this.setVertical(false);
                        this.setHorizontal(true);
                    }
                    else {
                        this.setVertical(true);
                        this.setHorizontal(false);
                    }
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "withIcon")) {
                    this.setWithIcon(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "length")) {
                    this.setLength(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            ListBox.prototype.getDesignables = function () {
                var r = this.ul.getChildren();
                return r;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            ListBox.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            ListBox.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var withIcon = new framework.design.AttributeParameter("withIcon", "With Icon", "Basic");
                withIcon.options.push(new framework.design.Option("", ""));
                var direction = new framework.design.AttributeParameter("direction", "Direction", "Basic");
                direction.options.push(new framework.design.Option("Default", "def"));
                direction.options.push(new framework.design.Option("Vertical", "vertical"));
                direction.options.push(new framework.design.Option("Horizontal", "horizontal"));
                var length = new framework.design.AttributeParameter("length", "Length", "Basic");
                length.options.push(new framework.design.Option("Default", ListBox.LENGTH_DEFAULT));
                length.options.push(new framework.design.Option("5 Items", ListBox.LENGTH_5));
                length.options.push(new framework.design.Option("7 Items", ListBox.LENGTH_7));
                length.options.push(new framework.design.Option("10 Item", ListBox.LENGTH_10));
                params.push(direction, length, withIcon);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            ListBox.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.ListBoxItem) {
                    this.addItem(designable);
                }
                else {
                    throw new Error("Can only add component of type List Box Item in this container");
                }
            };
            /**
             *
             * @param {*} designable
             */
            ListBox.prototype.removeDesignable = function (designable) {
                this.ul.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            ListBox.prototype.moveDesignable = function (designable, steps) {
            };
            return ListBox;
        }(framework.JSContainer));
        ListBox.LENGTH_5 = "slds-dropdown_length-5";
        ListBox.LENGTH_7 = "slds-dropdown_length-7";
        ListBox.LENGTH_10 = "slds-dropdown_length-10";
        ListBox.LENGTH_DEFAULT = "slds-dropdown_length-def";
        lightning.ListBox = ListBox;
        ListBox["__class"] = "framework.lightning.ListBox";
        ListBox["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ListBoxItem = (function (_super) {
            __extends(ListBoxItem, _super);
            function ListBoxItem(name) {
                var _this = _super.call(this, name, "li") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.option = null;
                _this.setAttribute("role", "presentation");
                _this.addClass("slds-listbox__item");
                _this.setAttribute("identifier", "lgt:listbox-item");
                _this.option = new framework.lightning.ListBoxOption("option");
                _this.addChild$framework_JSContainer(_this.option);
                _this.applyParam("title", "List Item Title");
                _this.applyParam("subTitle", "Subtitle");
                _this.applyParam("type", framework.lightning.ListBoxOption.TYPE_ENTITY);
                _this.applyParam("iconName", "user");
                _this.applyParam("iconType", "utility");
                return _this;
            }
            ListBoxItem.prototype.setIconType = function (type) {
                this.option.setIconType(type);
                return this;
            };
            ListBoxItem.prototype.setIconName = function (name) {
                this.option.setIconName(name);
                return this;
            };
            ListBoxItem.prototype.setText = function (text) {
                this.option.setText(text);
                return this;
            };
            ListBoxItem.prototype.setMeta = function (text) {
                this.option.setMeta(text);
                return this;
            };
            ListBoxItem.prototype.setHasMeta = function (b) {
                this.option.setHasMeta(b);
                return this;
            };
            ListBoxItem.prototype.setType = function (type) {
                this.option.setType(type);
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            ListBoxItem.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "title")) {
                    this.setText(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "subTitle")) {
                    this.setMeta(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "iconName")) {
                    this.setIconName(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "iconType")) {
                    this.setIconType(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "type")) {
                    this.setType(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            ListBoxItem.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            ListBoxItem.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            ListBoxItem.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var title = new framework.design.AttributeParameter("title", "Title", "Basic");
                var subTitle = new framework.design.AttributeParameter("subTitle", "Sub Title", "Basic");
                var type = new framework.design.AttributeParameter("type", "Type", "Advanced");
                type.options.push(new framework.design.Option("Plain", framework.lightning.ListBoxOption.TYPE_PLAIN));
                type.options.push(new framework.design.Option("Entity", framework.lightning.ListBoxOption.TYPE_ENTITY));
                var iconType = new framework.design.AttributeParameter("iconType", "Icon Type", "Advanced");
                var iconName = new framework.design.AttributeParameter("iconName", "Icon Name", "Advanced");
                params.push(title, subTitle, type, iconType, iconName);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            ListBoxItem.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            ListBoxItem.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            ListBoxItem.prototype.moveDesignable = function (designable, steps) {
            };
            return ListBoxItem;
        }(framework.JSContainer));
        lightning.ListBoxItem = ListBoxItem;
        ListBoxItem["__class"] = "framework.lightning.ListBoxItem";
        ListBoxItem["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ListBoxOption = (function (_super) {
            __extends(ListBoxOption, _super);
            function ListBoxOption(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.leftIcon = new framework.lightning.SvgIcon("icon");
                /*private*/ _this.textElement = new framework.JSContainer("text", "span").addClass("slds-listbox__option-text slds-listbox__option-text_entity");
                /*private*/ _this.metaElement = new framework.JSContainer("text", "span").addClass("slds-listbox__option-meta slds-listbox__option-meta_entity");
                /*private*/ _this.plainTextElement = new framework.JSContainer("text", "h3").addClass("slds-text-title_caps");
                _this.media = null;
                _this.addClass("slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta");
                _this.media = new framework.lightning.Media("content");
                _this.addChild$framework_JSContainer(_this.media);
                _this.media.getFigureContainer().addChild$framework_JSContainer(_this.leftIcon);
                _this.leftIcon.addClass("slds-icon_container slds-icon-standard-account");
                _this.leftIcon.setSvgClass("slds-icon slds-icon_small");
                _this.media.getBodyContainer().addChild$framework_JSContainer(_this.textElement);
                _this.media.getBodyContainer().addChild$framework_JSContainer(_this.metaElement);
                _this.media.addChild$framework_JSContainer(_this.plainTextElement);
                _this.setType(ListBoxOption.TYPE_ENTITY);
                return _this;
            }
            ListBoxOption.prototype.getMedia = function () {
                return this.media;
            };
            ListBoxOption.prototype.setIconType = function (type) {
                this.leftIcon.setType(type);
                return this;
            };
            ListBoxOption.prototype.setIconName = function (name) {
                this.leftIcon.setIconName(name);
                return this;
            };
            ListBoxOption.prototype.setText = function (text) {
                this.textElement.setHtml(text);
                this.plainTextElement.setHtml(text);
                return this;
            };
            ListBoxOption.prototype.setMeta = function (text) {
                var hasMeta = false;
                if (text != null && text.length > 0) {
                    hasMeta = true;
                    this.metaElement.setHtml(text);
                }
                this.setHasMeta(hasMeta);
                return this;
            };
            ListBoxOption.prototype.setHasMeta = function (b) {
                if (b) {
                    this.addClass("slds-listbox__option_has-meta");
                }
                else {
                    this.removeClass("slds-listbox__option_has-meta");
                }
                this.metaElement.setVisible(b);
                return this;
            };
            ListBoxOption.prototype.setType = function (type) {
                this.removeClass(ListBoxOption.TYPE_ENTITY);
                this.removeClass(ListBoxOption.TYPE_PLAIN);
                this.addClass(type);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(type, ListBoxOption.TYPE_PLAIN)) {
                    this.media.getBodyContainer().setVisible(false);
                    this.media.getFigureContainer().setVisible(false);
                    this.plainTextElement.setVisible(true);
                }
                else {
                    this.media.getBodyContainer().setVisible(true);
                    this.media.getFigureContainer().setVisible(true);
                    this.plainTextElement.setVisible(false);
                }
                return this;
            };
            return ListBoxOption;
        }(framework.JSContainer));
        ListBoxOption.TYPE_PLAIN = "slds-listbox__option_plain";
        ListBoxOption.TYPE_ENTITY = "slds-listbox__option_entity";
        lightning.ListBoxOption = ListBoxOption;
        ListBoxOption["__class"] = "framework.lightning.ListBoxOption";
        ListBoxOption["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
            LTContainer.Sizes_$LI$ = function () { if (LTContainer.Sizes == null)
                LTContainer.Sizes = ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"]; return LTContainer.Sizes; };
            ;
            LTContainer.PADDING_SIZE_NONE_$LI$ = function () { if (LTContainer.PADDING_SIZE_NONE == null)
                LTContainer.PADDING_SIZE_NONE = LTContainer.Sizes_$LI$()[0]; return LTContainer.PADDING_SIZE_NONE; };
            ;
            LTContainer.PADDING_SIZE_XXX_SMALL_$LI$ = function () { if (LTContainer.PADDING_SIZE_XXX_SMALL == null)
                LTContainer.PADDING_SIZE_XXX_SMALL = LTContainer.Sizes_$LI$()[1]; return LTContainer.PADDING_SIZE_XXX_SMALL; };
            ;
            LTContainer.PADDING_SIZE_XX_SMALL_$LI$ = function () { if (LTContainer.PADDING_SIZE_XX_SMALL == null)
                LTContainer.PADDING_SIZE_XX_SMALL = LTContainer.Sizes_$LI$()[2]; return LTContainer.PADDING_SIZE_XX_SMALL; };
            ;
            LTContainer.PADDING_SIZE_X_SMALL_$LI$ = function () { if (LTContainer.PADDING_SIZE_X_SMALL == null)
                LTContainer.PADDING_SIZE_X_SMALL = LTContainer.Sizes_$LI$()[3]; return LTContainer.PADDING_SIZE_X_SMALL; };
            ;
            LTContainer.PADDING_SIZE_SMALL_$LI$ = function () { if (LTContainer.PADDING_SIZE_SMALL == null)
                LTContainer.PADDING_SIZE_SMALL = LTContainer.Sizes_$LI$()[4]; return LTContainer.PADDING_SIZE_SMALL; };
            ;
            LTContainer.PADDING_SIZE_MEDIUM_$LI$ = function () { if (LTContainer.PADDING_SIZE_MEDIUM == null)
                LTContainer.PADDING_SIZE_MEDIUM = LTContainer.Sizes_$LI$()[5]; return LTContainer.PADDING_SIZE_MEDIUM; };
            ;
            LTContainer.PADDING_SIZE_LARGE_$LI$ = function () { if (LTContainer.PADDING_SIZE_LARGE == null)
                LTContainer.PADDING_SIZE_LARGE = LTContainer.Sizes_$LI$()[6]; return LTContainer.PADDING_SIZE_LARGE; };
            ;
            LTContainer.PADDING_SIZE_X_LARGE_$LI$ = function () { if (LTContainer.PADDING_SIZE_X_LARGE == null)
                LTContainer.PADDING_SIZE_X_LARGE = LTContainer.Sizes_$LI$()[7]; return LTContainer.PADDING_SIZE_X_LARGE; };
            ;
            LTContainer.PADDING_SIZE_XX_LARGE_$LI$ = function () { if (LTContainer.PADDING_SIZE_XX_LARGE == null)
                LTContainer.PADDING_SIZE_XX_LARGE = LTContainer.Sizes_$LI$()[8]; return LTContainer.PADDING_SIZE_XX_LARGE; };
            ;
            LTContainer.prototype.setPaddingTop = function (size) {
                return this.setSizeAndPosition(size, "top");
            };
            LTContainer.prototype.setPaddingRight = function (size) {
                return this.setSizeAndPosition(size, "right");
            };
            LTContainer.prototype.setPaddingBottom = function (size) {
                return this.setSizeAndPosition(size, "bottom");
            };
            LTContainer.prototype.setPaddingLeft = function (size) {
                return this.setSizeAndPosition(size, "left");
            };
            /*private*/ LTContainer.prototype.setSizeAndPosition = function (size, position) {
                for (var index6543 = 0; index6543 < LTContainer.Sizes_$LI$().length; index6543++) {
                    var s = LTContainer.Sizes_$LI$()[index6543];
                    {
                        this.removeClass("slds-p-" + position + "_" + s);
                    }
                }
                this.addClass("slds-p-" + position + "_" + size);
                return this;
            };
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
                /*private*/ _this.content = new framework.lightning.ModalBody("content");
                /*private*/ _this.footer = new framework.lightning.ModalFooter("footer");
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
            Modal.prototype.setFooter = function (footer) {
                this.modalContainer.clearChildren();
                this.modalContainer.addChild$framework_JSContainer(this.header);
                this.modalContainer.addChild$framework_JSContainer(this.content);
                this.modalContainer.addChild$framework_JSContainer(footer);
                this.footer = footer;
            };
            Modal.prototype.setBody = function (body) {
                this.modalContainer.clearChildren();
                this.modalContainer.addChild$framework_JSContainer(this.header);
                this.modalContainer.addChild$framework_JSContainer(body);
                this.modalContainer.addChild$framework_JSContainer(this.footer);
                this.content = body;
            };
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
            Modal.prototype.setSize = function (size) {
                this.removeClass(Modal.SIZE_LARGE).removeClass(Modal.SIZE_MEDIUM);
                this.addClass(size);
                return this;
            };
            Modal.prototype.setTitle = function (stitle) {
                this.title.setHtml(stitle);
                return this;
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
            Modal.prototype.getBody = function () {
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
        Modal.SIZE_LARGE = "slds-modal_large";
        Modal.SIZE_MEDIUM = "slds-modal_medium";
        Modal.SIZE_NORMAL = "slds-modal_normal";
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
        var PopOver = (function (_super) {
            __extends(PopOver, _super);
            function PopOver(name) {
                var _this = _super.call(this, name, "section") || this;
                /*private*/ _this.body = new framework.designables.JSDesignable("body", "div");
                /*private*/ _this.footer = new framework.designables.JSDesignable("footer", "footer");
                _this.setAttribute("role", "dialog");
                _this.addClass("slds-popover");
                _this.addClass("slds-dynamic-menu");
                _this.body.addClass("slds-popover__body").addClass("slds-p-horizontal_none");
                _this.footer.addClass("slds-popover__footer");
                _this.addChild$framework_JSContainer(_this.body);
                _this.addChild$framework_JSContainer(_this.footer);
                return _this;
            }
            PopOver.NUBIN_POSITIONS_$LI$ = function () { if (PopOver.NUBIN_POSITIONS == null)
                PopOver.NUBIN_POSITIONS = [PopOver.NUBIN_NONE, PopOver.NUBIN_TOP_LEFT, PopOver.NUBIN_TOP_RIGHT, PopOver.NUBIN_BOTTOM_RIGHT, PopOver.NUBIN_BOTTOM_RIGHT]; return PopOver.NUBIN_POSITIONS; };
            ;
            PopOver.prototype.getFooter = function () {
                return this.footer;
            };
            PopOver.prototype.getBody = function () {
                return this.body;
            };
            PopOver.prototype.showFooter = function (b) {
                this.footer.setVisible(b);
                return this;
            };
            PopOver.prototype.showBody = function (b) {
                this.body.setVisible(b);
                return this;
            };
            PopOver.prototype.setNubin = function (position) {
                for (var index6544 = 0; index6544 < PopOver.NUBIN_POSITIONS_$LI$().length; index6544++) {
                    var s = PopOver.NUBIN_POSITIONS_$LI$()[index6544];
                    {
                        this.removeClass(s);
                    }
                }
                this.addClass(position);
                return this;
            };
            return PopOver;
        }(framework.JSContainer));
        PopOver.NUBIN_NONE = "slds-nubbin_none";
        PopOver.NUBIN_BOTTOM_RIGHT = "slds-nubbin_bottom-right";
        PopOver.NUBIN_BOTTOM_LEFT = "slds-nubbin_bottom-left";
        PopOver.NUBIN_TOP_RIGHT = "slds-nubbin_top-right";
        PopOver.NUBIN_TOP_LEFT = "slds-nubbin_top-left";
        lightning.PopOver = PopOver;
        PopOver["__class"] = "framework.lightning.PopOver";
        PopOver["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                /*private*/ _this.arrow = new framework.lightning.SvgIcon("arrow", "utility", "switch");
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
        var Spinner = (function (_super) {
            __extends(Spinner, _super);
            function Spinner(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.html = "<div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div>";
                _this.addClass("slds-spinner slds-spinner_medium");
                _this.setAttribute("role", "status");
                _this.setHtml(_this.html);
                return _this;
            }
            return Spinner;
        }(framework.JSContainer));
        lightning.Spinner = Spinner;
        Spinner["__class"] = "framework.lightning.Spinner";
        Spinner["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var SvgIcon = (function (_super) {
            __extends(SvgIcon, _super);
            function SvgIcon(name, type, iconName) {
                var _this = this;
                if (((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null) && ((typeof iconName === 'string') || iconName === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "div") || this;
                    _this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.5.2/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    _this.svgClass = "slds-icon";
                    _this.text = "";
                    _this.showIcon = true;
                    _this.isLeft = true;
                    (function () {
                        _this.type = type;
                        _this.iconName = iconName;
                        _this.refresh();
                    })();
                }
                else if (((typeof name === 'string') || name === null) && type === undefined && iconName === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name, "div") || this;
                    _this.assetsUrl = "/webjars/salesforce-lightning-design-system/2.5.2/icons";
                    _this.type = "utility";
                    _this.iconName = "settings";
                    _this.svgClass = "slds-icon";
                    _this.text = "";
                    _this.showIcon = true;
                    _this.isLeft = true;
                    (function () {
                        _this.refresh();
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            SvgIcon.prototype.setSvgClass = function (cls) {
                this.svgClass = cls;
                this.refresh();
            };
            SvgIcon.prototype.setShowIcon = function (b) {
                this.showIcon = b;
                this.refresh();
            };
            SvgIcon.prototype.setIconPosition = function (position) {
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(position, "right")) {
                    this.isLeft = false;
                    this.svgClass = "slds-button__icon slds-button__icon_right";
                }
                else {
                    this.svgClass = "slds-button__icon slds-button__icon_left";
                    this.isLeft = true;
                }
                this.refresh();
            };
            SvgIcon.prototype.setText = function (text) {
                this.text = text;
                this.refresh();
            };
            SvgIcon.prototype.refresh = function () {
                if (this.showIcon) {
                    var html = "<svg class=\'" + this.svgClass + "\'><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"" + this.assetsUrl + "/" + this.type + "-sprite/svg/symbols.svg#" + this.iconName + "\"></use></svg>";
                    if (this.isLeft) {
                        html = html + this.text;
                    }
                    else {
                        html = this.text + html;
                    }
                    this.setHtml(html);
                }
                else {
                    this.setHtml(this.text);
                }
            };
            SvgIcon.prototype.getAssetsUrl = function () {
                return this.assetsUrl;
            };
            SvgIcon.prototype.setAssetsUrl = function (assetsUrl) {
                this.assetsUrl = assetsUrl;
                this.refresh();
            };
            SvgIcon.prototype.getType = function () {
                return this.type;
            };
            SvgIcon.prototype.setType = function (type) {
                this.type = type;
                this.refresh();
            };
            SvgIcon.prototype.getIconName = function () {
                return this.iconName;
            };
            SvgIcon.prototype.setIconName = function (name) {
                this.iconName = name;
                this.refresh();
            };
            SvgIcon.prototype.setSize = function (size) {
                this.removeClass(SvgIcon.EXTRA_EXTRA_SMALL).removeClass(SvgIcon.EXTRA_SMALL).removeClass(SvgIcon.LARGE).removeClass(SvgIcon.SMALL);
                this.addClass(size);
                return this;
            };
            SvgIcon.prototype.setTextType = function (type) {
                this.removeClass(SvgIcon.TEXT_DEFAULT).removeClass(SvgIcon.TEXT_ERROR).removeClass(SvgIcon.TEXT_LIGHT).removeClass(SvgIcon.TEXT_WARNING).addClass(type);
                return this;
            };
            return SvgIcon;
        }(framework.JSContainer));
        SvgIcon.SMALL = "slds-button_icon_small";
        SvgIcon.EXTRA_SMALL = "slds-_icon_x-small";
        SvgIcon.EXTRA_EXTRA_SMALL = "slds-button_icon_xx-small";
        SvgIcon.LARGE = "slds-button_icon_large";
        SvgIcon.TEXT_DEFAULT = "slds-icon-text-default";
        SvgIcon.TEXT_WARNING = "slds-icon-text-warning";
        SvgIcon.TEXT_ERROR = "slds-icon-text-error";
        SvgIcon.TEXT_LIGHT = "slds-icon-text-light";
        lightning.SvgIcon = SvgIcon;
        SvgIcon["__class"] = "framework.lightning.SvgIcon";
        SvgIcon["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                /*private*/ _this.listeners = (new Array());
                /*private*/ _this.title = new framework.JSContainer("a").addClass("slds-tabs_default__link").setAttribute("href", "javascript:void(0)").setAttribute("role", "tab");
                /*private*/ _this.closeButton = new framework.lightning.SvgIcon("close", "utility", "close");
                /*private*/ _this.active = false;
                _this.body = null;
                _this.body = body;
                body.setAttribute("aria-labelledby", _this.getId());
                _this.addChild$framework_JSContainer(_this.title);
                _this.title.setAttribute("aria-controls", body.getId());
                _this.addClass("slds-tabs_default__item");
                _this.addChild$framework_JSContainer(_this.closeButton);
                _this.closeButton.setSvgClass("slds-button__icon");
                _this.closeButton.addClass("tab-close-button");
                _this.closeButton.addEventListener(_this, "click");
                _this.title.addEventListener(_this, "click");
                _this.setActive(false);
                _this.setClosable(false);
                return _this;
            }
            TabItem.prototype.setClosable = function (b) {
                this.closeButton.setVisible(b);
                return this;
            };
            TabItem.prototype.addTabActionListener = function (listene) {
                this.listeners.push(listene);
            };
            TabItem.prototype.close = function () {
                this.fireClose();
                this.active = false;
                this.body.getParent().removeChild(this.body);
                this.body.show(false);
                var currentIndex = this.getParent().getChildren().indexOf(this);
                this.getParent().removeChild(this);
                this.getParent().setRendered(false);
                this.body.getParent().setRendered(false);
                if (this.getParent().getChildren().length > 0) {
                    if (currentIndex >= this.getParent().getChildren().length) {
                        currentIndex = this.getParent().getChildren().length - 1;
                    }
                    var item = this.getParent().getChildren()[currentIndex];
                    item.setActive(true);
                }
                return this;
            };
            TabItem.prototype.isActive = function () {
                return this.active;
            };
            TabItem.prototype.fireClose = function () {
                for (var index6545 = 0; index6545 < this.listeners.length; index6545++) {
                    var li = this.listeners[index6545];
                    {
                        li.onClose(this);
                    }
                }
            };
            TabItem.prototype.fireActivate = function () {
                for (var index6546 = 0; index6546 < this.listeners.length; index6546++) {
                    var li = this.listeners[index6546];
                    {
                        li.onActivate(this);
                    }
                }
            };
            TabItem.prototype.fireDeActivate = function () {
                for (var index6547 = 0; index6547 < this.listeners.length; index6547++) {
                    var li = this.listeners[index6547];
                    {
                        li.onDeactivate(this);
                    }
                }
            };
            TabItem.prototype.setActive = function (b) {
                this.active = b;
                if (b) {
                    this.addClass("slds-active");
                    this.title.setAttribute("aria-selected", "true");
                    this.fireActivate();
                }
                else {
                    this.removeClass("slds-active");
                    this.title.setAttribute("aria-selected", "false");
                    this.fireDeActivate();
                }
                this.body.show(b);
                return this;
            };
            TabItem.prototype.getBody = function () {
                return this.body;
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
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(source, this.closeButton)) {
                    this.close();
                    return;
                }
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
            var ExcelTable = (function (_super) {
                __extends(ExcelTable, _super);
                function ExcelTable(name) {
                    var _this = _super.call(this, name, "div") || this;
                    _this.table = null;
                    _this.opt = null;
                    _this.addClass("ExcelTable");
                    _this.addRenderer(_this);
                    return _this;
                }
                ExcelTable.prototype.setOptions = function (options) {
                    this.opt = options;
                };
                ExcelTable.prototype.doRender$framework_lightning_table_ExcelTable$jsweet_dom_HTMLElement = function (c, root) {
                    if (!this.isRendered()) {
                        var element = document.getElementById(c.getId());
                        if (this.opt == null) {
                            this.opt = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.handsontable.ht.Options"] });
                        }
                        this.table = {};
                    }
                };
                /**
                 *
                 * @param {framework.lightning.table.ExcelTable} c
                 * @param {HTMLElement} root
                 */
                ExcelTable.prototype.doRender = function (c, root) {
                    if (((c != null && c instanceof framework.lightning.table.ExcelTable) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                        return this.doRender$framework_lightning_table_ExcelTable$jsweet_dom_HTMLElement(c, root);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return ExcelTable;
            }(framework.JSContainer));
            table.ExcelTable = ExcelTable;
            ExcelTable["__class"] = "framework.lightning.table.ExcelTable";
            ExcelTable["__interfaces"] = ["framework.interactions.Droppable", "framework.renderer.Renderer", "framework.Renderable"];
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table_2) {
            var Paginator = (function (_super) {
                __extends(Paginator, _super);
                function Paginator(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.previous = new framework.lightning.IconButton("previous");
                    _this.next = new framework.lightning.IconButton("next");
                    /*private*/ _this.pages = new framework.JSContainer("pages").addClass("pages");
                    _this.maxItem = 8;
                    _this.numPages = 0;
                    _this.table = null;
                    _this.setVisible(false);
                    _this.addClass("table-paginator");
                    var leftGrp = new framework.lightning.ButtonGroup("leftGrp");
                    _this.previous.getIcon().setIconName("left");
                    _this.previous.getIcon().setType("utility");
                    _this.next.getIcon().setIconName("right");
                    _this.next.getIcon().setType("utility");
                    leftGrp.addButton$framework_lightning_IconButton(_this.previous.setBorder(true)).addChild$framework_JSContainer(_this.pages);
                    leftGrp.addButton$framework_lightning_IconButton(_this.next.setBorder(true));
                    _this.addChild$framework_JSContainer(leftGrp);
                    _this.previous.addEventListener(_this, "click");
                    _this.next.addEventListener(_this, "click");
                    return _this;
                }
                Paginator.prototype.setTable = function (table) {
                    this.table = table;
                    this.pages.clearChildren();
                    this.pages.setRendered(false);
                    var pageSize = table.getPageSize();
                    var model = table.getModel();
                    this.numPages = Math.round(model.getRowCount() / pageSize);
                    if (this.numPages <= 1) {
                        this.setVisible(false);
                        return;
                    }
                    this.setVisible(true);
                    if (this.numPages < this.maxItem) {
                        this.maxItem = this.numPages;
                    }
                    for (var i = 0; i < this.numPages; i++) {
                        var btn = new framework.lightning.Button(i + "");
                        btn.addEventListener(this, "click");
                        btn.setState(framework.lightning.Button.STATE_NEUTRAL);
                        btn.setLabel((i + 1) + "");
                        this.pages.addChild$framework_JSContainer(btn);
                        if (i >= this.maxItem) {
                            btn.setVisible(false);
                        }
                        if (i === 0) {
                            btn.addClass("slds-button_brand");
                        }
                    }
                    ;
                    this.pages.getChildren()[0].setStyle("border-left", "none").setStyle("border-radius", "0");
                    this.pages.getChildren()[this.pages.getChildren().length - 1].setStyle("border-right", "none").setStyle("border-radius", "0");
                };
                /*private*/ Paginator.prototype.redisplayBtns = function (currentPage) {
                    if (currentPage >= this.maxItem) {
                        var rangeFrom = currentPage - this.maxItem;
                        for (var i = 0; i < this.pages.getChildren().length; i++) {
                            if (i <= rangeFrom) {
                                this.pages.getChildren()[i].setVisible(false);
                            }
                            else if (i > currentPage) {
                                this.pages.getChildren()[i].setVisible(false);
                            }
                            else {
                                this.pages.getChildren()[i].setVisible(true);
                            }
                            if (i === currentPage) {
                                this.pages.getChildren()[i].addClass("slds-button_brand");
                            }
                            else {
                                this.pages.getChildren()[i].removeClass("slds-button_brand");
                            }
                        }
                        ;
                    }
                    else {
                        for (var i = 0; i < this.pages.getChildren().length; i++) {
                            if (i === currentPage) {
                                this.pages.getChildren()[i].addClass("slds-button_brand");
                            }
                            else {
                                this.pages.getChildren()[i].removeClass("slds-button_brand");
                            }
                        }
                        ;
                    }
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                Paginator.prototype.performAction = function (source, evt) {
                    var currentPage = 0;
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(source.getName(), "previous")) {
                        currentPage = this.table.getPage();
                        if (currentPage > 0) {
                            currentPage = currentPage - 1;
                            this.table.setPage(currentPage);
                        }
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(source.getName(), "next")) {
                        currentPage = this.table.getPage();
                        if (currentPage < this.numPages - 1) {
                            currentPage = currentPage + 1;
                            this.table.setPage(currentPage);
                        }
                    }
                    else {
                        currentPage = parseInt(source.getName());
                        this.table.setPage(currentPage);
                    }
                    this.redisplayBtns(currentPage);
                };
                return Paginator;
            }(framework.JSContainer));
            table_2.Paginator = Paginator;
            Paginator["__class"] = "framework.lightning.table.Paginator";
            Paginator["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
        })(table = lightning.table || (lightning.table = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var table;
        (function (table_3) {
            var Table = (function (_super) {
                __extends(Table, _super);
                function Table(name) {
                    var _this = _super.call(this, name, "table") || this;
                    /*private*/ _this.thead = new framework.JSContainer("thead");
                    /*private*/ _this.tbody = new framework.JSContainer("tbody");
                    /*private*/ _this.tfoot = new framework.JSContainer("tfoot");
                    /*private*/ _this.tableCellRenderer = new framework.lightning.table.DefaultTableCellRenderer();
                    /*private*/ _this.tableColumnModel = new framework.lightning.table.DefaultTableColumnModel();
                    /*private*/ _this.currrentPage = 0;
                    /*private*/ _this.pageSize = 10;
                    _this.ftr = new framework.JSContainer("tr");
                    _this.ftd = new framework.JSContainer("td");
                    /*private*/ _this.paginator = new framework.lightning.table.Paginator("paginator");
                    /*private*/ _this.selectable = false;
                    /*private*/ _this.multiSelectable = false;
                    /*private*/ _this.selecteRowOn = "click";
                    /*private*/ _this.emptyTableMessage = "No data available";
                    _this.model = null;
                    _this.addClass("slds-table");
                    _this.addChild$framework_JSContainer(_this.thead);
                    _this.addChild$framework_JSContainer(_this.tbody);
                    _this.addChild$framework_JSContainer(_this.tfoot);
                    _this.tfoot.addChild$framework_JSContainer(_this.ftr.addChild$framework_JSContainer(_this.ftd));
                    _this.ftd.addChild$framework_JSContainer(_this.paginator);
                    _this.setBordered(true);
                    _this.tbody.setStyle("min-height", "250px");
                    _this.loading();
                    return _this;
                }
                Table.SELECT_ROW_EVT_$LI$ = function () { if (Table.SELECT_ROW_EVT == null)
                    Table.SELECT_ROW_EVT = new Table.Table$0(); return Table.SELECT_ROW_EVT; };
                ;
                /**
                 *
                 * @return {Array}
                 */
                Table.prototype.advancedEventTypes = function () {
                    return ["selectRows", "sort", "changePage"];
                };
                Table.prototype.setSelectRowOn = function (on) {
                    this.selecteRowOn = on;
                };
                /*private*/ Table.prototype.addEmptyRow = function () {
                    this.tbody.clearChildren();
                    var tr = new framework.JSContainer("tr");
                    var td = new framework.JSContainer("td").setAttribute("colspan", "1000");
                    tr.addChild$framework_JSContainer(td);
                    tr.addClass("empty-row");
                    this.tbody.addChild$framework_JSContainer(tr);
                    return td;
                };
                /*private*/ Table.prototype.loading = function () {
                    this.addEmptyRow().addChild$framework_JSContainer(new framework.lightning.Spinner("spinner"));
                };
                /*private*/ Table.prototype.emptyData = function () {
                    this.addEmptyRow().addChild$framework_JSContainer(new framework.JSContainer("p").setHtml(this.emptyTableMessage));
                };
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
                Table.prototype.setPage = function (page) {
                    this.currrentPage = page;
                    this.refreshData();
                    var evt = new CustomEvent("changePage");
                    evt["page"] = page + "";
                    this.fireListener("changePage", evt);
                };
                Table.prototype.getPage = function () {
                    return this.currrentPage;
                };
                Table.prototype.getPageSize = function () {
                    return this.pageSize;
                };
                Table.prototype.setPageSize = function (size) {
                    this.pageSize = size;
                    this.refreshData();
                };
                Table.prototype.refreshData = function () {
                    this.tbody.clearChildren();
                    this.tbody.setRendered(false);
                    if (this.model == null) {
                        return;
                    }
                    if (this.tableColumnModel == null) {
                        return;
                    }
                    if (this.tableCellRenderer == null) {
                        return;
                    }
                    var rows = this.model.getRowCount();
                    var cols = this.tableColumnModel.getColumnCount();
                    var iterSize = this.pageSize;
                    if (rows < this.pageSize) {
                        iterSize = rows;
                    }
                    if (rows === 0) {
                        this.emptyData();
                    }
                    else {
                        for (var row = 0; row < iterSize; row++) {
                            var realRow = (this.currrentPage * this.pageSize) + row;
                            if (realRow >= rows) {
                                break;
                            }
                            var tr = new framework.JSContainer("tr");
                            if (this.selectable) {
                                tr.addEventListener(Table.SELECT_ROW_EVT_$LI$(), this.selecteRowOn);
                            }
                            this.tbody.addChild$framework_JSContainer(tr.addClass("slds-hint-parent"));
                            for (var col = 0; col < cols; col++) {
                                var value = this.model.getValueAt(realRow, col);
                                var cell = this.tableCellRenderer['getComponent$framework_lightning_table_Table$java_lang_Object$int$int'](this, value, row, col);
                                var td = new framework.JSContainer("td").addClass("slds-cell-wrap").setAttribute("role", "gridcell");
                                if (value != null && (typeof value === 'boolean')) {
                                    td.addClass("boolean-cell");
                                }
                                else if (value != null && (typeof value === 'number')) {
                                    td.addClass("numeric-cell");
                                }
                                td.addClass("col_" + col);
                                tr.addChild$framework_JSContainer(td);
                                tr.addClass("row_" + row);
                                td.addChild$framework_JSContainer(cell);
                            }
                            ;
                        }
                        ;
                    }
                    this.paginator.setTable(this);
                    this.tfoot.setAttribute("colspan", cols + "");
                    this.ftd.setAttribute("colspan", cols + "");
                    this.ftr.setAttribute("colspan", cols + "");
                };
                Table.prototype.getRow = function (index) {
                    return this.tbody.getChildren()[index];
                };
                Table.prototype.getBody = function () {
                    return this.tbody;
                };
                Table.prototype.setSelectable = function (b) {
                    this.selectable = b;
                };
                Table.prototype.isSelectable = function () {
                    return this.selectable;
                };
                Table.prototype.setMultiSelectable = function (b) {
                    this.multiSelectable = b;
                };
                Table.prototype.isMultiSelectable = function () {
                    return this.multiSelectable;
                };
                Table.prototype.refreshColumns = function () {
                    this.thead.clearChildren();
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
                Table.prototype.setTopMagnet = function (b) {
                    this.setFeature("slds-has-top-magnet", b);
                    return this;
                };
                Table.prototype.setNoRowHover = function (b) {
                    this.setFeature("slds-no-row-hover", b);
                    return this;
                };
                Table.prototype.setStriped = function (b) {
                    this.setFeature("slds-table_striped", b);
                    return this;
                };
                return Table;
            }(framework.JSContainer));
            table_3.Table = Table;
            Table["__class"] = "framework.lightning.table.Table";
            Table["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
            (function (Table) {
                var Table$0 = (function () {
                    function Table$0() {
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    Table$0.prototype.performAction = function (source, evt) {
                        var index = source.getParent().getChildren().indexOf(source);
                        var table = source.getParent().getParent();
                        var page = table.currrentPage;
                        index = (page * table.pageSize) + index;
                        evt["first"] = index + "";
                        evt["last"] = index + "";
                        table.fireListener("selectRows", evt);
                    };
                    return Table$0;
                }());
                Table.Table$0 = Table$0;
                Table$0["__interfaces"] = ["framework.EventListener"];
            })(Table = table_3.Table || (table_3.Table = {}));
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
                TableColumn.prototype.setWidth = function (width) {
                    this.title.setStyle("width", width);
                    return this;
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
                /*private*/ _this.body = new framework.JSContainer("div").addClass("slds-tabs_default__content");
                _this.addClass("slds-tabs_default");
                _this.addChild$framework_JSContainer(_this.nav);
                _this.addChild$framework_JSContainer(_this.body);
                _this.body.setAttribute("role", "tabpanel");
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
                this.body.addChild$framework_JSContainer(item.body.show(false));
                return this;
            };
            Tabs.prototype.clear = function () {
                this.nav.clearChildren();
                this.body.clearChildren();
                this.setRendered(false);
                return this;
            };
            Tabs.prototype.setActive = function (item) {
                {
                    var array6549 = this.getItems();
                    for (var index6548 = 0; index6548 < array6549.length; index6548++) {
                        var tab = array6549[index6548];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(item.getId(), tab.getId())) {
                                if (!tab.isActive()) {
                                    tab.setActive(true);
                                }
                            }
                            else {
                                if (tab.isActive()) {
                                    tab.setActive(false);
                                }
                            }
                        }
                    }
                }
                return this;
            };
            Tabs.prototype.getTab = function (body) {
                {
                    var array6551 = this.getItems();
                    for (var index6550 = 0; index6550 < array6551.length; index6550++) {
                        var c = array6551[index6550];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(c.getBody(), body)) {
                                return c;
                            }
                        }
                    }
                }
                return null;
            };
            Tabs.prototype.getActiveTab = function () {
                {
                    var array6553 = this.getItems();
                    for (var index6552 = 0; index6552 < array6553.length; index6552++) {
                        var item = array6553[index6552];
                        {
                            if (item.isActive()) {
                                return item;
                            }
                        }
                    }
                }
                return null;
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
                var _this = _super.call(this, name, tag) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            Text.__static_initialize = function () { if (!Text.__static_initialized) {
                Text.__static_initialized = true;
                Text.__static_initializer_0();
            } };
            Text.TEXT_TYPES_$LI$ = function () { Text.__static_initialize(); if (Text.TEXT_TYPES == null)
                Text.TEXT_TYPES = [Text.NONE, Text.BODY_REGULAR, Text.BODY_SMALL, Text.HEADING_LARGE, Text.HEADING_MEDIUM, Text.HEADING_SMALL, Text.TITLE, Text.TILE_CAPS]; return Text.TEXT_TYPES; };
            ;
            Text.TEXT_TYPES_LABELS_$LI$ = function () { Text.__static_initialize(); if (Text.TEXT_TYPES_LABELS == null)
                Text.TEXT_TYPES_LABELS = ["None", "Body Regular", "Body Small", "Heading Large", "Heading Medium", "Heading Small", "Title", "Title Caps"]; return Text.TEXT_TYPES_LABELS; };
            ;
            Text.COLORS_$LI$ = function () { Text.__static_initialize(); if (Text.COLORS == null)
                Text.COLORS = [Text.COLOR_NONE, Text.COLOR_DEFAULT, Text.COLOR_WEAK, Text.COLOR_ERROR, Text.COLOR_SUCCESS, Text.COLOR_INVERSE_DEFAULT, Text.COLOR_INVERSE_WEAK]; return Text.COLORS; };
            ;
            Text.COLORS_LABELS_$LI$ = function () { Text.__static_initialize(); if (Text.COLORS_LABELS == null)
                Text.COLORS_LABELS = ["None", "Default", "Weak", "Error", "Success", "Inverse Default", "Inverse Inverse Weak"]; return Text.COLORS_LABELS; };
            ;
            Text.ALIGNS_$LI$ = function () { Text.__static_initialize(); if (Text.ALIGNS == null)
                Text.ALIGNS = [Text.ALIGN_NONE, Text.ALIGN_LEFT, Text.ALIGN_CENTER, Text.ALIGN_RIGHT]; return Text.ALIGNS; };
            ;
            Text.ALIGNS_LABELS_$LI$ = function () { Text.__static_initialize(); if (Text.ALIGNS_LABELS == null)
                Text.ALIGNS_LABELS = ["None", "Align Left", "Align Center", "Align Right"]; return Text.ALIGNS_LABELS; };
            ;
            Text.DECORATIONS_$LI$ = function () { Text.__static_initialize(); if (Text.DECORATIONS == null)
                Text.DECORATIONS = [Text.LINK_NONE, Text.LINK, Text.LINK_RESET, Text.LINK_FAUX]; return Text.DECORATIONS; };
            ;
            Text.DECORATIONS_LABELS_$LI$ = function () { Text.__static_initialize(); if (Text.DECORATIONS_LABELS == null)
                Text.DECORATIONS_LABELS = ["None", "Link", "Link Reset", "Link Faux"]; return Text.DECORATIONS_LABELS; };
            ;
            Text.textTags_$LI$ = function () { Text.__static_initialize(); if (Text.textTags == null)
                Text.textTags = new Object(); return Text.textTags; };
            ;
            Text.__static_initializer_0 = function () {
                Text.textTags_$LI$()["h1"] = "Heading 1";
                Text.textTags_$LI$()["h2"] = "Heading 2";
                Text.textTags_$LI$()["h3"] = "Heading 3";
                Text.textTags_$LI$()["h4"] = "Heading 4";
                Text.textTags_$LI$()["h5"] = "Heading 5";
                Text.textTags_$LI$()["label"] = "Label";
                Text.textTags_$LI$()["paragraph"] = "Paragraph";
                Text.textTags_$LI$()["span"] = "Span";
            };
            Text.prototype.setAlign = function (align) {
                for (var index6554 = 0; index6554 < Text.ALIGNS_$LI$().length; index6554++) {
                    var s = Text.ALIGNS_$LI$()[index6554];
                    {
                        this.removeClass(s);
                    }
                }
                this.addClass(align);
                return this;
            };
            Text.prototype.setTextType = function (type) {
                for (var index6555 = 0; index6555 < Text.TEXT_TYPES_$LI$().length; index6555++) {
                    var s = Text.TEXT_TYPES_$LI$()[index6555];
                    {
                        this.removeClass(s);
                    }
                }
                this.addClass(type);
                return this;
            };
            Text.prototype.setColor = function (color) {
                for (var index6556 = 0; index6556 < Text.COLORS_$LI$().length; index6556++) {
                    var s = Text.COLORS_$LI$()[index6556];
                    {
                        this.removeClass(s);
                    }
                }
                this.addClass(color);
                return this;
            };
            Text.prototype.setDecoration = function (decoration) {
                for (var index6557 = 0; index6557 < Text.DECORATIONS_$LI$().length; index6557++) {
                    var s = Text.DECORATIONS_$LI$()[index6557];
                    {
                        this.removeClass(s);
                    }
                }
                this.addClass(decoration);
                return this;
            };
            Text.prototype.setLongForm = function (b) {
                this.toggleClass(Text.LONG_FORM, b);
                return this;
            };
            /*private*/ Text.prototype.toggleClass = function (cls, b) {
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
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Text.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "textColor")) {
                    this.setColor(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "textAlign")) {
                    this.setAlign(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "textDecoration")) {
                    this.setDecoration(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "textType")) {
                    this.setTextType(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "longForm")) {
                    this.setLongForm(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "truncate")) {
                    this.setTruncate(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "true"));
                }
            };
            /**
             *
             * @return {*[]}
             */
            Text.prototype.getDesignables = function () {
                var children = this.getChildren();
                return children;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            Text.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            Text.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var tagParam = new framework.design.TagParameter();
                {
                    var array6559 = Object.keys(Text.textTags_$LI$());
                    for (var index6558 = 0; index6558 < array6559.length; index6558++) {
                        var key = array6559[index6558];
                        {
                            tagParam.options.push(new framework.design.Option(Text.textTags_$LI$()[key], key));
                        }
                    }
                }
                var textParam = new framework.design.TextParameter("text", "Text", "Basic");
                var decorations = new framework.design.AttributeParameter("textDecoration", "Decoration", "Advanced");
                for (var i = 0; i < Text.DECORATIONS_$LI$().length; i++) {
                    decorations.options.push(new framework.design.Option(Text.DECORATIONS_LABELS_$LI$()[i], Text.DECORATIONS_$LI$()[i]));
                }
                ;
                var types = new framework.design.AttributeParameter("textType", "Text Type", "Advanced");
                for (var i = 0; i < Text.TEXT_TYPES_$LI$().length; i++) {
                    types.options.push(new framework.design.Option(Text.TEXT_TYPES_LABELS_$LI$()[i], Text.TEXT_TYPES_$LI$()[i]));
                }
                ;
                var colors = new framework.design.AttributeParameter("textColor", "Color", "Advanced");
                for (var i = 0; i < Text.COLORS_$LI$().length; i++) {
                    colors.options.push(new framework.design.Option(Text.COLORS_LABELS_$LI$()[i], Text.COLORS_$LI$()[i]));
                }
                ;
                var aligns = new framework.design.AttributeParameter("textAlign", "Align", "Advanced");
                for (var i = 0; i < Text.ALIGNS_$LI$().length; i++) {
                    aligns.options.push(new framework.design.Option(Text.ALIGNS_LABELS_$LI$()[i], Text.ALIGNS_$LI$()[i]));
                }
                ;
                var longForm = new framework.design.AttributeParameter("longForm", "Long Form", "Advanced");
                longForm.options.push(new framework.design.Option("", ""));
                var truncate = new framework.design.AttributeParameter("truncate", "Truncate", "Basic");
                truncate.options.push(new framework.design.Option("", ""));
                params.push(tagParam, textParam, truncate, decorations, types, colors, aligns, longForm);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            Text.prototype.addDesignable = function (designable) {
                this.addChild$framework_JSContainer(designable);
            };
            /**
             *
             * @param {*} designable
             */
            Text.prototype.removeDesignable = function (designable) {
                this.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Text.prototype.moveDesignable = function (designable, steps) {
            };
            return Text;
        }(framework.JSContainer));
        Text.__static_initialized = false;
        Text.LINK_NONE = "none";
        Text.LINK_RESET = "slds-text-link_reset";
        Text.LINK = "slds-text-link";
        Text.LINK_FAUX = "slds-text-link_faux";
        Text.NONE = "none";
        Text.BODY_REGULAR = "slds-text-body_regular";
        Text.BODY_SMALL = "slds-text-body_small";
        Text.HEADING_LARGE = "slds-text-heading_large";
        Text.HEADING_MEDIUM = "slds-text-heading_medium";
        Text.HEADING_SMALL = "slds-text-heading_small";
        Text.TITLE = "slds-text-title";
        Text.TILE_CAPS = "slds-text-title_caps";
        Text.COLOR_NONE = "none";
        Text.COLOR_DEFAULT = "slds-text-color_default";
        Text.COLOR_WEAK = "slds-text-color_weak";
        Text.COLOR_ERROR = "slds-text-color_error";
        Text.COLOR_SUCCESS = "slds-text-color_success";
        Text.COLOR_INVERSE_DEFAULT = "slds-text-color_inverse";
        Text.COLOR_INVERSE_WEAK = "slds-text-color_inverse-weak";
        Text.ALIGN_NONE = "none";
        Text.ALIGN_LEFT = "slds-text-align_left";
        Text.ALIGN_CENTER = "slds-text-align_center";
        Text.ALIGN_RIGHT = "slds-text-align_right";
        Text.LONG_FORM = "slds-text-longform";
        lightning.Text = Text;
        Text["__class"] = "framework.lightning.Text";
        Text["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var rtc;
    (function (rtc) {
        var Conference = (function (_super) {
            __extends(Conference, _super);
            function Conference(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.localVideo = new framework.rtc.LocalVideoContainer("local");
                /*private*/ _this.remoteVideos = (new framework.util.HashMap());
                /*private*/ _this.remotes = new framework.JSContainer("remotes", "div").addClass("remotes");
                /*private*/ _this.webrtc = null;
                _this.addChild$framework_JSContainer(_this.localVideo);
                _this.addChild$framework_JSContainer(_this.remotes);
                _this.addRenderer(_this);
                return _this;
            }
            Conference.prototype.readyToCall = function (o) {
                Conference.aler("readyToCall");
                var fn = this.webrtc["joinRoom"];
                fn.call(this.webrtc, "myroom");
                return o;
            };
            Conference.prototype.localStream = function (stream) {
                Conference.aler("localStream");
                return stream;
            };
            Conference.prototype.localMediaError = function (err) {
                Conference.aler("localMediaError");
                return err;
            };
            Conference.prototype.localScreenAdded = function (video) {
                Conference.aler("localScreenAdded");
                return video;
            };
            Conference.prototype.localScreenRemoved = function (video) {
                Conference.aler("localScreenRemoved");
                this.localVideo.setVisible(false);
                return video;
            };
            Conference.prototype.videoAdded = function (video, peer) {
                Conference.aler("videoAdded");
                var peerId = Conference.getIdentifier(peer);
                if (!this.remoteVideos.containsKey(peerId)) {
                    var container = new framework.rtc.VideoContainer(peerId);
                    container.setTitle(peer["nick"]);
                    this.remotes.addChild$framework_JSContainer(container);
                    this.remoteVideos.put(peerId, container);
                    container.open();
                    this.render();
                    container.setVideo(video);
                    return video;
                }
                else {
                    this.remoteVideos.get(peerId).setVideo(video);
                    this.remoteVideos.get(peerId).open();
                    this.render();
                    return video;
                }
            };
            Conference.getIdentifier = function (peer) {
                return peer["nick"];
            };
            Conference.prototype.videoRemoved = function (video, peer) {
                Conference.aler("removed");
                var peerId = Conference.getIdentifier(peer);
                if (!this.remoteVideos.containsKey(peerId)) {
                    return null;
                }
                else {
                    var cv = this.remoteVideos.get(peerId);
                    cv.close();
                    this.render();
                    return video;
                }
            };
            Conference.prototype.remoteVolumeChange = function (peer, volume) {
                var vd = this.remoteVideos.get(Conference.getIdentifier(peer));
                if (vd != null) {
                    vd.setVolume(/* parseInt */ parseInt(volume));
                }
                return null;
            };
            Conference.prototype.volumeChange = function (volume, threshold) {
                if (this.localVideo != null) {
                    this.localVideo.setVolume(/* parseInt */ parseInt(volume));
                }
                return null;
            };
            Conference.aler = function (s) {
            };
            Conference.prototype.configure = function () {
                var _this = this;
                var on = this.webrtc["on"];
                var readyToCall = function (o) { return _this.readyToCall(o); };
                on.call(this.webrtc, "readyToCall", readyToCall);
                var localStream = function (stream) { return _this.localStream(stream); };
                var localMediaError = function (err) { return _this.localMediaError(err); };
                var localScreenAdded = function (video) { return _this.localScreenAdded(video); };
                var localScreenRemoved = function (video) { return _this.localScreenRemoved(video); };
                var videoAdded = function (video, peer) { return _this.videoAdded(video, peer); };
                var videoRemoved = function (video, peer) { return _this.videoRemoved(video, peer); };
                var remoteVolumeChange = function (peer, volume) { return _this.remoteVolumeChange(peer, volume); };
                var volumeChange = function (volume, threshold) { return _this.volumeChange(volume, threshold); };
                on.call(this.webrtc, "localStream", localStream);
                on.call(this.webrtc, "localMediaError", localMediaError);
                on.call(this.webrtc, "localScreenAdded", localScreenAdded);
                on.call(this.webrtc, "localScreenRemoved", localScreenRemoved);
                on.call(this.webrtc, "videoAdded", videoAdded);
                on.call(this.webrtc, "videoRemoved", videoRemoved);
                on.call(this.webrtc, "remoteVolumeChange", remoteVolumeChange);
                on.call(this.webrtc, "volumeChange", volumeChange);
                return this.webrtc;
            };
            Conference.prototype.doRender$framework_rtc_Conference$jsweet_dom_HTMLElement = function (c, root) {
            };
            /**
             *
             * @param {framework.rtc.Conference} c
             * @param {HTMLElement} root
             */
            Conference.prototype.doRender = function (c, root) {
                if (((c != null && c instanceof framework.rtc.Conference) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.doRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c, root);
                }
                else
                    throw new Error('invalid overload');
            };
            Conference.prototype.postRender$framework_rtc_Conference$jsweet_dom_HTMLElement = function (c, root) {
                if (this.webrtc != null) {
                    return;
                }
                var x_data = new Object();
                x_data["ident"] = "kureem@gmail.com";
                x_data["secret"] = "b2b95c52-fad8-11e7-a694-7a3d885581cf";
                x_data["domain"] = "eucleed.com";
                x_data["application"] = "default";
                x_data["secure"] = 1;
                var config = new Object();
                config["localVideoEl"] = this.localVideo.getVideo().getNative();
                config["remoteVideosEl"] = "";
                config["autoRequestMedia"] = true;
                config["debug"] = false;
                config["detectSpeakingEvents"] = true;
                config["autoAdjustMic"] = false;
                config["nick"] = location.href.split("#")[1];
                this.webrtc = new Object();
                eval("this.webrtc = new SimpleWebRTC(config);");
                this.configure();
            };
            /**
             *
             * @param {framework.rtc.Conference} c
             * @param {HTMLElement} root
             */
            Conference.prototype.postRender = function (c, root) {
                if (((c != null && c instanceof framework.rtc.Conference) || c === null) && ((root != null && root instanceof HTMLElement) || root === null)) {
                    return this.postRender$framework_rtc_Conference$jsweet_dom_HTMLElement(c, root);
                }
                else if (((c != null && c instanceof HTMLElement) || c === null) && root === undefined) {
                    return this.postRender$jsweet_dom_HTMLElement(c);
                }
                else
                    throw new Error('invalid overload');
            };
            return Conference;
        }(framework.JSContainer));
        rtc.Conference = Conference;
        Conference["__class"] = "framework.rtc.Conference";
        Conference["__interfaces"] = ["framework.interactions.Droppable", "framework.renderer.ExtendedRenderer", "framework.renderer.Renderer", "framework.Renderable"];
    })(rtc = framework.rtc || (framework.rtc = {}));
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
            /*private*/ _this.iconRight = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevronright\"></use></svg>";
            /*private*/ _this.iconDown = "<svg class=\"slds-button__icon slds-button__icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/webjars/salesforce-lightning-design-system/2.5.2/icons/utility-sprite/svg/symbols.svg#chevrondown\"></use></svg>";
            /*private*/ _this.title = new framework.JSContainer("span").addClass("slds-truncate");
            /*private*/ _this.__open = false;
            /*private*/ _this.buttons = (new Array());
            /*private*/ _this.buttonsCtn = new framework.JSContainer("div").addClass("buttons-ctn slds-col_bump-left");
            /*private*/ _this.leftIcon = new framework.lightning.IconButton("leftIcon");
            _this.addClass("slds-tree__item");
            _this.addChild$framework_JSContainer(_this.button);
            _this.button.setHtml(_this.iconRight);
            _this.addChild$framework_JSContainer(_this.leftIcon.addClass("left-icon"));
            _this.leftIcon.setStyle("margin-right", "0.25rem");
            _this.addChild$framework_JSContainer(_this.title.setHtml(title));
            _this.button.addEventListener(_this, "click");
            _this.addChild$framework_JSContainer(_this.buttonsCtn);
            _this.setLeftIcon$java_lang_String$java_lang_String("file", "utility");
            return _this;
        }
        TreeItem.prototype.setLeftIcon$java_lang_String$java_lang_String = function (name, type) {
            this.leftIcon.setIcon(new framework.lightning.SvgIcon(name, type, name));
            return this;
        };
        TreeItem.prototype.setLeftIcon = function (name, type) {
            if (((typeof name === 'string') || name === null) && ((typeof type === 'string') || type === null)) {
                return this.setLeftIcon$java_lang_String$java_lang_String(name, type);
            }
            else if (((typeof name === 'string') || name === null) && type === undefined) {
                return this.setLeftIcon$java_lang_String(name);
            }
            else
                throw new Error('invalid overload');
        };
        TreeItem.prototype.setLeftIcon$java_lang_String = function (name) {
            this.leftIcon.setIcon(new framework.lightning.ImageIcon(name, "https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif"));
            return this;
        };
        TreeItem.prototype.addIcon = function (name, type, listener) {
            var minimize = new framework.lightning.IconButton(name);
            minimize.setIcon(new framework.lightning.SvgIcon(name, type, name));
            this.buttonsCtn.addChild$framework_JSContainer(minimize);
            minimize.addEventListener(listener, "click");
            this.buttons.push(minimize);
        };
        TreeItem.prototype.getButton = function () {
            return this.button;
        };
        TreeItem.prototype.open = function () {
            this.__open = true;
            this.button.setHtml(this.iconDown);
            if (this.getParent().getChildren().length > 1) {
                this.getParent().getChildren()[1].setStyle("display", "block");
            }
        };
        TreeItem.prototype.close = function () {
            this.__open = false;
            this.button.setHtml(this.iconRight);
            if (this.getParent().getChildren().length > 1) {
                this.getParent().getChildren()[1].setStyle("display", "none");
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
        BasicComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_7) {
            var DataSourcesEditor = (function (_super) {
                __extends(DataSourcesEditor, _super);
                function DataSourcesEditor(name, rootEditor) {
                    var _this = _super.call(this, name, "div", rootEditor) || this;
                    _this.url = new framework.JSInput("url").setType(framework.InputTypes.url);
                    _this.body = new framework.JSTextArea("body");
                    var grid = new framework.lightning.Grid("df", "div");
                    grid.setWrap(true);
                    var colFrm = new framework.lightning.Col("");
                    colFrm.setSections("12");
                    colFrm.setSpan("8");
                    grid.addChild$framework_JSContainer(colFrm);
                    _this.addChild$framework_JSContainer(grid);
                    var panel = new framework.lightning.Panel("frm");
                    colFrm.addChild$framework_JSContainer(panel);
                    var section = new framework.lightning.PanelSection("pane", "div");
                    panel.addSection(section);
                    var form = new framework.lightning.FormLayout("form");
                    _this.url.addClass("slds-input");
                    _this.body.addClass("slds-input");
                    form.addFormElement(new framework.lightning.FormElement("url", "div").setInput(_this.url).setLabel("Url"));
                    form.addFormElement(new framework.lightning.FormElement("body", "div").setInput(_this.body).setLabel("Body"));
                    section.addChild$framework_JSContainer(form);
                    return _this;
                }
                /**
                 *
                 * @return {string}
                 */
                DataSourcesEditor.prototype.getMarshall = function () {
                    var o = new Object();
                    o["url"] = this.url.getValue();
                    o["body"] = this.body.getValue();
                    return JSON.stringify(o);
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {*}
                 */
                DataSourcesEditor.prototype.createNew = function (f) {
                    return new framework.builder.data.RestDataSource();
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {*}
                 */
                DataSourcesEditor.prototype.unmarshall = function (f) {
                    var rest = new framework.builder.data.RestDataSource();
                    var data = f.getData();
                    if (data != null && data.length > 0) {
                        rest.setConfig(JSON.parse(data));
                    }
                    return rest;
                };
                DataSourcesEditor.prototype.consume$framework_builder_data_DataSource = function (data) {
                    var ss = data;
                    var config = ss.getConfig();
                    if (config != null) {
                        var surl = config["url"];
                        this.url.setValue$java_lang_String(surl);
                        var sbody = config["body"];
                        this.body.setValue$java_lang_String(sbody);
                    }
                };
                /**
                 *
                 * @param {*} data
                 */
                DataSourcesEditor.prototype.consume = function (data) {
                    if (((data != null && (data["__interfaces"] != null && data["__interfaces"].indexOf("framework.builder.data.DataSource") >= 0 || data.constructor != null && data.constructor["__interfaces"] != null && data.constructor["__interfaces"].indexOf("framework.builder.data.DataSource") >= 0)) || data === null)) {
                        return this.consume$framework_builder_data_DataSource(data);
                    }
                    else if (((data != null) || data === null)) {
                        return this.consume$java_lang_Object(data);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return DataSourcesEditor;
            }(framework.builder.editors.AbstractEditor));
            data_7.DataSourcesEditor = DataSourcesEditor;
            DataSourcesEditor["__class"] = "framework.builder.data.DataSourcesEditor";
            DataSourcesEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var ContextEditor = (function (_super) {
                __extends(ContextEditor, _super);
                function ContextEditor(name, rootEditor) {
                    var _this = _super.call(this, name, "div", rootEditor) || this;
                    _this.form = new framework.builder.data.DynaForm("form");
                    return _this;
                }
                /**
                 *
                 * @return {string}
                 */
                ContextEditor.prototype.getMarshall = function () {
                    return JSON.stringify(this.form.getValue());
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {Object}
                 */
                ContextEditor.prototype.createNew = function (f) {
                    var o = new Object();
                    this.form.setValue$jsweet_lang_Object(o);
                    return o;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {Object}
                 */
                ContextEditor.prototype.unmarshall = function (f) {
                    var data = f.getData();
                    return JSON.parse(data);
                };
                ContextEditor.prototype.consume$jsweet_lang_Object = function (data) {
                    var fldName = new Object();
                    fldName["name"] = "name";
                    fldName["label"] = "Name";
                    fldName["type"] = "text";
                    var fldLabel = new Object();
                    fldLabel["name"] = "label";
                    fldLabel["type"] = "text";
                    fldLabel["label"] = "Label";
                    var fldType = new Object();
                    fldType["name"] = "type";
                    fldType["type"] = "multi";
                    fldType["label"] = "Type";
                    var options = [framework.ObjectBuilder.New().set("name", "Text").set("label", "Text").setArray("fields", framework.ObjectBuilder.New().set("name", "size").set("label", "Size").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "mask").set("label", "Mask").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "Default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Number").set("label", "Number").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Boolean").set("label", "Boolean").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "boolean").done()).done(), framework.ObjectBuilder.New().set("name", "Date").set("label", "Date").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "format").set("label", "Format").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Array").set("label", "Array").setArray("fields", framework.ObjectBuilder.New().set("name", "min").set("label", "Min").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "max").set("label", "Max").set("type", "number").done(), framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Object").set("label", "Object").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "type").set("label", "Type").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done(), framework.ObjectBuilder.New().set("name", "Formula").set("label", "Formula").setArray("fields", framework.ObjectBuilder.New().set("name", "required").set("label", "Required").set("type", "boolean").done(), framework.ObjectBuilder.New().set("name", "formula").set("label", "Formula").set("type", "String").done(), framework.ObjectBuilder.New().set("name", "default").set("label", "default").set("type", "String").done()).done()];
                    fldType["options"] = options;
                    var fields = (new Array(fldName, fldLabel, fldType));
                    var modal = new framework.lightning.Modal("modal", "Edit Variable");
                    var save = new framework.lightning.Button("save");
                    save.setLabel("Save");
                    save.setState(framework.lightning.Button.STATE_BRAND);
                    modal.getFooter().addChild$framework_JSContainer(save);
                    save.addEventListener(new ContextEditor.ContextEditor$0(this, modal), "click");
                    var cancel = new framework.lightning.Button("cancel");
                    cancel.setLabel("Cancel");
                    modal.getFooter().addChild$framework_JSContainer(cancel);
                    cancel.addEventListener(new ContextEditor.ContextEditor$1(this, modal), "click");
                    this.form.setStyle("padding", "12px");
                    this.form.setFields(fields);
                    modal.getBody().addChild$framework_JSContainer(this.form);
                    this.addChild$framework_JSContainer(modal);
                    var bd = new framework.lightning.Backdrop("bd");
                    this.addChild$framework_JSContainer(bd);
                    modal.setBackdrop(bd);
                    modal.open();
                    bd.open();
                    this.form.setValue$jsweet_lang_Object(data);
                };
                /**
                 *
                 * @param {Object} data
                 */
                ContextEditor.prototype.consume = function (data) {
                    if (((data != null && data instanceof Object) || data === null)) {
                        return this.consume$jsweet_lang_Object(data);
                    }
                    else if (((data != null) || data === null)) {
                        return this.consume$java_lang_Object(data);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return ContextEditor;
            }(framework.builder.editors.AbstractEditor));
            editors.ContextEditor = ContextEditor;
            ContextEditor["__class"] = "framework.builder.editors.ContextEditor";
            ContextEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.Renderable"];
            (function (ContextEditor) {
                var ContextEditor$0 = (function () {
                    function ContextEditor$0(__parent, modal) {
                        this.modal = modal;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    ContextEditor$0.prototype.performAction = function (source, evt) {
                        this.__parent.save();
                        close();
                        this.modal.close();
                        this.modal.getBackdrop().close();
                    };
                    return ContextEditor$0;
                }());
                ContextEditor.ContextEditor$0 = ContextEditor$0;
                ContextEditor$0["__interfaces"] = ["framework.EventListener"];
                var ContextEditor$1 = (function () {
                    function ContextEditor$1(__parent, modal) {
                        this.modal = modal;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    ContextEditor$1.prototype.performAction = function (source, evt) {
                        close();
                        this.modal.close();
                        this.modal.getBackdrop().close();
                    };
                    return ContextEditor$1;
                }());
                ContextEditor.ContextEditor$1 = ContextEditor$1;
                ContextEditor$1["__interfaces"] = ["framework.EventListener"];
            })(ContextEditor = editors.ContextEditor || (editors.ContextEditor = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var EventEditor = (function (_super) {
                __extends(EventEditor, _super);
                function EventEditor(name, root, veditor) {
                    var _this = _super.call(this, name, "div", veditor) || this;
                    _this.component = new framework.JSContainer("label");
                    /*private*/ _this.functionName = new framework.JSContainer("div");
                    _this.events = new framework.JSSelect("events");
                    /*private*/ _this.editor = new framework.builder.editors.JavascriptEditor("sd", null);
                    /*private*/ _this.justSaved = "";
                    _this.root = null;
                    _this.addClass("event-editor");
                    _this.editor.setRootEditor(veditor);
                    var grid = new framework.lightning.Grid("", "div");
                    _this.addChild$framework_JSContainer(grid);
                    var colLeft = new framework.JSContainer("div");
                    var colRight = new framework.JSContainer("div");
                    grid.addChild$framework_JSContainer(colLeft.addClass("slds-col").addClass("col-left"));
                    grid.addChild$framework_JSContainer(colRight.addClass("slds-col").addClass("col-right"));
                    _this.root = root;
                    for (var index6560 = 0; index6560 < framework.builder.editors.EventTypes.events_$LI$().length; index6560++) {
                        var s = framework.builder.editors.EventTypes.events_$LI$()[index6560];
                        _this.events.addOption(new framework.JSOption(/* replace */ s.split("on").join(""), /* replace */ s.split("on").join("")));
                    }
                    colLeft.addChild$framework_JSContainer(_this.component.setStyle("width", "100%"));
                    colLeft.addChild$framework_JSContainer(_this.functionName);
                    _this.functionName.setHtml("function(JSContainer source, Event event){");
                    colRight.addChild$framework_JSContainer(_this.events.setStyle("width", "100%"));
                    _this.events.addEventListener(new EventEditor.EventEditor$0(_this), "focus");
                    _this.events.addEventListener(new EventEditor.EventEditor$1(_this, root), "change");
                    _this.addChild$framework_JSContainer(_this.editor);
                    return _this;
                }
                /*private*/ EventEditor.prototype.decoName = function () {
                };
                EventEditor.prototype.fillValue = function (des, updEvtSelect) {
                    var s = false;
                    this.component.setHtml(des.getName());
                    if (!updEvtSelect) {
                        var listeners = des.getListeners()[this.events.getValue()];
                        if (listeners != null) {
                            for (var index6561 = 0; index6561 < listeners.length; index6561++) {
                                var e = listeners[index6561];
                                {
                                    if (e != null && e instanceof framework.builder.BuilderEventListener) {
                                        var bel = e;
                                        this.editor.setValue$java_lang_String(bel.getSource());
                                        if (this.editor.getEditor() != null) {
                                            this.editor.getEditor().setValue(bel.getSource());
                                        }
                                        else {
                                        }
                                        s = true;
                                    }
                                }
                            }
                        }
                        if (!s) {
                            if (this.editor != null && this.editor.getEditor() != null) {
                                this.editor.getEditor().setValue("");
                                this.editor.setValue$java_lang_String("");
                            }
                        }
                    }
                    var last = "click";
                    var lastSrc = this.getSource(des, last);
                    {
                        var array6563 = this.events.getChildren();
                        for (var index6562 = 0; index6562 < array6563.length; index6562++) {
                            var opt = array6563[index6562];
                            {
                                var option = opt;
                                var type = option.getValue();
                                var src = this.getSource(des, type);
                                if (src != null && src.trim().length > 0) {
                                    option.setStyle("font-weight", "bold");
                                    last = type;
                                    lastSrc = src;
                                }
                                else {
                                    option.setStyle("font-weight", "normal");
                                }
                            }
                        }
                    }
                    if (updEvtSelect && !s) {
                        this.events.setValue$java_lang_Object(last);
                        this.editor.setValue$java_lang_String(lastSrc);
                        if (this.editor.getEditor() != null) {
                            this.editor.getEditor().setValue(lastSrc);
                        }
                        else {
                        }
                    }
                };
                EventEditor.prototype.getSource = function (des, type) {
                    var listeners = des.getListeners()[type];
                    if (listeners != null) {
                        for (var index6564 = 0; index6564 < listeners.length; index6564++) {
                            var l = listeners[index6564];
                            {
                                if (l != null && l instanceof framework.builder.BuilderEventListener) {
                                    var evt = l;
                                    return evt.getSource();
                                }
                            }
                        }
                    }
                    return null;
                };
                EventEditor.prototype.reactivate = function () {
                    this.setDesignable(this.findDesignableById(this.root, this.component.getAttribute("desid")));
                };
                EventEditor.prototype.setDesignable = function (designable) {
                    this.component.setAttribute("desid", designable.getId());
                    this.events.clearChildren();
                    this.events.setRendered(false);
                    {
                        var array6566 = (designable).advancedEventTypes();
                        for (var index6565 = 0; index6565 < array6566.length; index6565++) {
                            var s = array6566[index6565];
                            this.events.addOption(new framework.JSOption(/* replace */ s.split("on").join(""), /* replace */ s.split("on").join("")));
                        }
                    }
                    for (var index6567 = 0; index6567 < framework.builder.editors.EventTypes.events_$LI$().length; index6567++) {
                        var s = framework.builder.editors.EventTypes.events_$LI$()[index6567];
                        this.events.addOption(new framework.JSOption(/* replace */ s.split("on").join(""), /* replace */ s.split("on").join("")));
                    }
                    this.fillValue(designable, true);
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
                    {
                        var array6569 = parent.getDesignables();
                        for (var index6568 = 0; index6568 < array6569.length; index6568++) {
                            var des = array6569[index6568];
                            {
                                var res = this.findDesignableById(des, id);
                                if (res != null) {
                                    return res;
                                }
                            }
                        }
                    }
                    return null;
                };
                EventEditor.prototype.save$ = function () {
                    var type = this.events.getValue();
                    this.save$java_lang_String(type);
                    this.clean();
                };
                EventEditor.prototype.save$java_lang_String = function (type) {
                    var componentId = this.component.getAttribute("desid");
                    var src = this.editor.getEditor().getValue();
                    var des = this.findDesignableById(this.root, componentId);
                    if (des != null) {
                        var listeners = des.getListeners()[type];
                        if (listeners != null) {
                            for (var index6570 = 0; index6570 < listeners.length; index6570++) {
                                var l_1 = listeners[index6570];
                                {
                                    if (l_1 != null && l_1 instanceof framework.builder.BuilderEventListener) {
                                        var evt = l_1;
                                        evt.setSource(src);
                                        return;
                                    }
                                }
                            }
                            var l = new framework.builder.BuilderEventListener(src, des.getName(), type);
                            des.addEventListener(l, type);
                        }
                        else {
                            var l = new framework.builder.BuilderEventListener(src, des.getName(), type);
                            des.addEventListener(l, type);
                        }
                    }
                };
                EventEditor.prototype.save = function (type) {
                    if (((typeof type === 'string') || type === null)) {
                        return this.save$java_lang_String(type);
                    }
                    else if (type === undefined) {
                        return this.save$();
                    }
                    else
                        throw new Error('invalid overload');
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
                 * @return {framework.builder.marshalling.Component}
                 */
                EventEditor.prototype.createNew = function (f) {
                    return null;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.Component}
                 */
                EventEditor.prototype.unmarshall = function (f) {
                    return null;
                };
                EventEditor.prototype.consume$framework_builder_marshalling_Component = function (data) {
                };
                /**
                 *
                 * @param {framework.builder.marshalling.Component} data
                 */
                EventEditor.prototype.consume = function (data) {
                    if (((data != null && data instanceof framework.builder.marshalling.Component) || data === null)) {
                        return this.consume$framework_builder_marshalling_Component(data);
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
            (function (EventEditor) {
                var EventEditor$0 = (function () {
                    function EventEditor$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    EventEditor$0.prototype.performAction = function (source, evt) {
                        if (!(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.__parent.justSaved, this.__parent.events.getValue())) {
                            this.__parent.justSaved = this.__parent.events.getValue();
                            this.__parent.save(this.__parent.events.getValue());
                        }
                    };
                    return EventEditor$0;
                }());
                EventEditor.EventEditor$0 = EventEditor$0;
                EventEditor$0["__interfaces"] = ["framework.EventListener"];
                var EventEditor$1 = (function () {
                    function EventEditor$1(__parent, root) {
                        this.root = root;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    EventEditor$1.prototype.performAction = function (source, evt) {
                        var id = this.__parent.component.getAttribute("desid");
                        var des = this.__parent.findDesignableById(this.root, id);
                        this.__parent.fillValue(des, false);
                    };
                    return EventEditor$1;
                }());
                EventEditor.EventEditor$1 = EventEditor$1;
                EventEditor$1["__interfaces"] = ["framework.EventListener"];
            })(EventEditor = editors.EventEditor || (editors.EventEditor = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var VisualEditor = (function (_super) {
                __extends(VisualEditor, _super);
                function VisualEditor(name) {
                    var _this = _super.call(this, name, "div", null) || this;
                    /*private*/ _this.workspace = new framework.JSContainer("workspace", "div");
                    /*private*/ _this.leftComposers = new framework.JSContainer("leftComposers", "div");
                    /*private*/ _this.rightComposers = new framework.JSContainer("rightComposers", "div");
                    /*private*/ _this.propertiesDockedComposer = new framework.builder.properties.PropertiesDockedComposer("properties");
                    /*private*/ _this.libraryDockedComposer = new framework.builder.libraries.LibrariesDockedComposer("library");
                    /*private*/ _this.leftOpen = true;
                    /*private*/ _this.rightOpen = true;
                    /*private*/ _this.iframe = new framework.JSContainer("iframe");
                    /*private*/ _this.toggleOutline = new framework.lightning.IconButton("toggleOutline");
                    /*private*/ _this.toggleRuler = new framework.lightning.IconButton("toggleRuler");
                    /*private*/ _this.toggleDefinitions = new framework.lightning.IconButton("toggleDefinitions");
                    /*private*/ _this.jsonDef = new framework.lightning.Modal("jsonDef", "Definition");
                    _this.json = new framework.JSTextArea("json");
                    _this.helper = new framework.JSTextArea("helper");
                    /*private*/ _this.hRule = new framework.builder.Ruler(false);
                    /*private*/ _this.composer = new framework.lightning.DockedComposer("composer");
                    /*private*/ _this.bd = new framework.lightning.Backdrop("backdrop");
                    /*private*/ _this.showDef = false;
                    /*private*/ _this.willAdd = null;
                    _this.persist = false;
                    _this.selectedItem = null;
                    _this.root = null;
                    _this.selector = null;
                    _this.structureDockedComposer = null;
                    _this.addClass("visual-editor").addClass("slds-grid").addClass("slds-wrap");
                    var frmjson = new framework.lightning.FormLayout("frmjson");
                    frmjson.setStyle("margin", "8px");
                    frmjson.addClass("defn-popup");
                    var js = new framework.lightning.FormElement("js", "div");
                    js.setLabel("Definition");
                    js.setInput(_this.json);
                    var frmhel = new framework.lightning.FormElement("frmhel", "div");
                    frmhel.setInput(_this.helper);
                    frmhel.setLabel("Helper");
                    frmjson.addFormElement(js);
                    frmjson.addFormElement(frmhel);
                    _this.jsonDef.getBody().addChild$framework_JSContainer(frmjson);
                    _this.addChild$framework_JSContainer(_this.jsonDef);
                    _this.jsonDef.setBackdrop(_this.bd);
                    _this.addChild$framework_JSContainer(_this.bd);
                    _this.helper.addClass("slds-textarea");
                    _this.json.addClass("slds-textarea");
                    _this.setRootEditor(_this);
                    _this.addChild$framework_JSContainer(_this.leftComposers.addClass("slds-size_2-of-12"));
                    _this.addChild$framework_JSContainer(_this.composer.addClass("slds-size_7-of-12"));
                    _this.composer.addClass("workspace");
                    _this.composer.getBody().addChild$framework_JSContainer(_this.hRule);
                    _this.composer.getBody().addChild$framework_JSContainer(_this.workspace);
                    _this.iframe.setAttribute("src", "preview.html#lightning.prj");
                    _this.addChild$framework_JSContainer(_this.rightComposers.addClass("slds-size_3-of-12"));
                    _this.leftComposers.addClass("composers");
                    _this.rightComposers.addClass("composers");
                    _this.rightComposers.addChild$framework_JSContainer(_this.propertiesDockedComposer);
                    _this.rightComposers.addChild$framework_JSContainer(_this.libraryDockedComposer);
                    _this.selector = new framework.builder.Selector();
                    _this.selector.setVisualEditor(_this);
                    _this.addChild$framework_JSContainer(_this.selector);
                    _this.composer.getTools().clearChildren();
                    _this.composer.getTools().addChild$framework_JSContainer(new framework.builder.editors.Zoom("zoom", _this));
                    _this.composer.getTools().addChild$framework_JSContainer(_this.toggleOutline);
                    _this.composer.getTools().addChild$framework_JSContainer(_this.toggleRuler);
                    _this.composer.getTools().addChild$framework_JSContainer(_this.toggleDefinitions);
                    _this.toggleDefinitions.getIcon().setIconName("ad_set");
                    _this.toggleDefinitions.setStateful(true);
                    _this.toggleDefinitions.setSelected(true);
                    _this.toggleOutline.getIcon().setIconName("layout");
                    _this.toggleOutline.setStateful(true);
                    _this.toggleOutline.setSelected(true);
                    _this.toggleRuler.getIcon().setIconName("summarydetail");
                    _this.toggleRuler.setStateful(true);
                    _this.toggleRuler.setSelected(false);
                    _this.toggleDefinitions.addEventListener(new VisualEditor.VisualEditor$0(_this), "click");
                    _this.toggleRuler.addEventListener(new VisualEditor.VisualEditor$1(_this), "click");
                    _this.addClass("show-outline");
                    _this.toggleOutline.addEventListener(new VisualEditor.VisualEditor$2(_this), "click");
                    document.onkeyup = function (e) {
                        if (e.which === 27) {
                            _this.escape();
                            _this.render();
                        }
                        return true;
                    };
                    return _this;
                }
                VisualEditor.prototype.toggleDefns = function () {
                    var _this = this;
                    $.get("/js/controller/" + this.getProject().getName(), function (a, b, c) {
                        _this.json.setValue$java_lang_String(_this.getProject().getData());
                        _this.helper.setValue$java_lang_String(a);
                        _this.jsonDef.open();
                        _this.render();
                        return true;
                    });
                    if (this.showDef) {
                        this.jsonDef.close();
                    }
                    else {
                    }
                };
                VisualEditor.prototype.escape = function () {
                    this.setWillAddComponent(null, false);
                    this.structureDockedComposer.getStructure().clearClipboard();
                };
                VisualEditor.prototype.zoom = function (percent) {
                    this.workspace.getChildren()[0].setStyle("zoom", (percent / 100) + "");
                    this.hRule.setStyle("zoom", (percent / 100) + "");
                };
                VisualEditor.prototype.closeLeft = function () {
                    this.leftComposers.setAttribute("class", "slds-size_0-of-12 composers");
                    this.leftOpen = false;
                    this.resizeWorkspace(this.composer);
                };
                VisualEditor.prototype.openLeft = function () {
                    this.leftComposers.setAttribute("class", "slds-size_2-of-12 composers");
                    this.leftOpen = true;
                    this.resizeWorkspace(this.composer);
                };
                VisualEditor.prototype.closeRight = function () {
                    this.rightComposers.setAttribute("class", "slds-size_0-of-12 composers");
                    this.rightOpen = false;
                    this.resizeWorkspace(this.composer);
                };
                VisualEditor.prototype.openRight = function () {
                    this.rightComposers.setAttribute("class", "slds-size_3-of-12 composers");
                    this.rightOpen = true;
                    this.resizeWorkspace(this.composer);
                };
                /*private*/ VisualEditor.prototype.resizeWorkspace = function (work) {
                    if (this.leftOpen && this.rightOpen) {
                        work.addClass("slds-size_7-of-12");
                        work.setStyle("width", "58.3333333333%");
                    }
                    if (!this.leftOpen && this.rightOpen) {
                        work.removeClass("slds-size_7-of-12");
                        work.setStyle("width", "calc(75% - (42px))");
                    }
                    if (this.leftOpen && !this.rightOpen) {
                        work.removeClass("slds-size_7-of-12");
                        work.setStyle("width", "calc(83.3333333333% - (42px))");
                    }
                    if (!this.leftOpen && !this.rightOpen) {
                        work.removeClass("slds-size_7-of-12");
                        work.setStyle("width", "calc(100% - (84px))");
                    }
                };
                VisualEditor.prototype.save = function (type) {
                    if (type === undefined) {
                        return this.save$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                VisualEditor.prototype.save$ = function () {
                    var data = this.getMarshall();
                    this.file.setData(data);
                    this.projectService.saveFile(this, this.file, new VisualEditor.VisualEditor$3(this));
                    if (!(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(this.rootEditor.getId(), this.getId())) {
                        this.getRootEditor().getRootItem().getComponent().custom[this.file.getName()] = this.file.getData();
                        this.rootEditor.libraryDockedComposer.refreshWithProject(this.rootEditor.root);
                    }
                };
                VisualEditor.prototype.getRootItem = function () {
                    return this.root;
                };
                VisualEditor.prototype.getSelectedItem = function () {
                    return this.selectedItem;
                };
                VisualEditor.prototype.selectItem = function (designable) {
                    this.propertiesDockedComposer.selectComponent(designable);
                };
                VisualEditor.prototype.visit$framework_builder_editors_Visitor = function (v) {
                    this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, this.root);
                };
                VisualEditor.prototype.visit$framework_builder_editors_Visitor$framework_design_Designable = function (v, startAt) {
                    v.doVisit(startAt);
                    {
                        var array6572 = startAt.getDesignables();
                        for (var index6571 = 0; index6571 < array6572.length; index6571++) {
                            var child = array6572[index6571];
                            {
                                this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, child);
                            }
                        }
                    }
                };
                VisualEditor.prototype.visit = function (v, startAt) {
                    if (((v != null && (v["__interfaces"] != null && v["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0 || v.constructor != null && v.constructor["__interfaces"] != null && v.constructor["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0)) || v === null) && ((startAt != null && (startAt["__interfaces"] != null && startAt["__interfaces"].indexOf("framework.design.Designable") >= 0 || startAt.constructor != null && startAt.constructor["__interfaces"] != null && startAt.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || startAt === null)) {
                        return this.visit$framework_builder_editors_Visitor$framework_design_Designable(v, startAt);
                    }
                    else if (((v != null && (v["__interfaces"] != null && v["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0 || v.constructor != null && v.constructor["__interfaces"] != null && v.constructor["__interfaces"].indexOf("framework.builder.editors.Visitor") >= 0)) || v === null) && startAt === undefined) {
                        return this.visit$framework_builder_editors_Visitor(v);
                    }
                    else
                        throw new Error('invalid overload');
                };
                VisualEditor.prototype.setWillAddComponent = function (component, persist) {
                    this.persist = persist;
                    if (this.willAdd != null) {
                        this.willAdd.removeClass("selected");
                    }
                    this.willAdd = component;
                    if (component == null) {
                        this.removeClass("add-mode");
                    }
                    else {
                        this.willAdd.addClass("selected");
                        this.addClass("add-mode");
                    }
                };
                VisualEditor.prototype.saveAsComponent = function (designable) {
                    designable.addClass("LightningActiveComponent");
                    var comp = framework.builder.marshalling.MarshallUtil.extract(designable);
                    var component = new framework.builder.marshalling.Component();
                    component.impl = "lgt:app";
                    component.parameters["name"] = designable.getName() + "_comp";
                    var par = framework.builder.marshalling.MarshallUtil.toDesignable(component, false, null);
                    var chi = framework.builder.marshalling.MarshallUtil.toDesignable(comp, false, null);
                    par.addDesignable(chi);
                    var marshall = JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(par));
                    var project = this.getProject();
                    var name = designable.getName();
                    this.root.getComponent().custom[name] = marshall;
                    this.libraryDockedComposer.refreshWithProject(this.root);
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                        name = name + ".cmp";
                    }
                    project.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(this, name, "components", new VisualEditor.VisualEditor$4(this, marshall, designable));
                };
                VisualEditor.prototype.addNewComponent$framework_builder_Component$framework_design_Designable = function (component, designable) {
                    var factory = component.getFactory();
                    var c = new framework.builder.marshalling.Component();
                    var container = factory.build(c, true);
                    if (container != null && container instanceof framework.designables.JSDesignableBuilderComponent) {
                        container.applyParam("src", component.getInital());
                    }
                    this.addNewComponent$framework_design_Designable$framework_design_Designable(container, designable);
                };
                VisualEditor.prototype.addNewComponent = function (component, designable) {
                    if (((component != null && component instanceof framework.builder.Component) || component === null) && ((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null)) {
                        return this.addNewComponent$framework_builder_Component$framework_design_Designable(component, designable);
                    }
                    else if (((component != null && (component["__interfaces"] != null && component["__interfaces"].indexOf("framework.design.Designable") >= 0 || component.constructor != null && component.constructor["__interfaces"] != null && component.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || component === null) && ((designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.Designable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.Designable") >= 0)) || designable === null)) {
                        return this.addNewComponent$framework_design_Designable$framework_design_Designable(component, designable);
                    }
                    else
                        throw new Error('invalid overload');
                };
                VisualEditor.prototype.addNewComponent$framework_design_Designable$framework_design_Designable = function (container, designable) {
                    try {
                        designable.addDesignable(container);
                        container.addEventListener(new framework.builder.SelectComponentEvent(this.selector), "click");
                    }
                    catch (e) {
                        alert(e.message);
                    }
                    ;
                    if (!this.persist)
                        this.setWillAddComponent(null, false);
                    this.getStructure().reload$framework_design_Designable(designable);
                    this.getStructure().render();
                };
                VisualEditor.prototype.getWillAddComponent = function () {
                    return this.willAdd;
                };
                VisualEditor.prototype.getProject = function () {
                    return this.file;
                };
                /**
                 *
                 * @return {string}
                 */
                VisualEditor.prototype.getMarshall = function () {
                    var marshall = JSON.stringify(framework.builder.marshalling.MarshallUtil.extract(this.root));
                    return marshall;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.Component}
                 */
                VisualEditor.prototype.createNew = function (f) {
                    var component = new framework.builder.marshalling.Component();
                    component.impl = "lgt:app";
                    component.parameters["name"] = f.getName();
                    return component;
                };
                /**
                 *
                 * @param {framework.builder.data.File} f
                 * @return {framework.builder.marshalling.Component}
                 */
                VisualEditor.prototype.unmarshall = function (f) {
                    var c = JSON.parse(f.getData());
                    var cc = framework.builder.marshalling.MarshallUtil.toComponent$jsweet_lang_Object(c);
                    return cc;
                };
                VisualEditor.prototype.cona = function (component) {
                    return framework.builder.marshalling.MarshallUtil.toDesignable(component, true, this.selector);
                };
                VisualEditor.prototype.consume$framework_builder_marshalling_Component = function (component) {
                    this.root = this.cona(component);
                    this.workspace.addChild$framework_JSContainer(this.root);
                    this.libraryDockedComposer.refreshWithProject(this.root);
                    this.structureDockedComposer = new framework.builder.editors.StructureDockedComposer("strucutru", this.root, this.file, this.selector);
                    this.leftComposers.addChild$framework_JSContainer(this.structureDockedComposer);
                    this.libraryDockedComposer.refreshWithProject(this.root);
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
                VisualEditor.prototype.getStructure = function () {
                    if (this.structureDockedComposer != null)
                        return this.structureDockedComposer.getStructure();
                    return null;
                };
                VisualEditor.prototype.getSelector = function () {
                    return this.selector;
                };
                return VisualEditor;
            }(framework.builder.editors.AbstractEditor));
            editors.VisualEditor = VisualEditor;
            VisualEditor["__class"] = "framework.builder.editors.VisualEditor";
            VisualEditor["__interfaces"] = ["framework.builder.editors.Editor", "framework.interactions.Droppable", "framework.builder.editors.DesignableEditor", "framework.Renderable"];
            (function (VisualEditor) {
                var VisualEditor$0 = (function () {
                    function VisualEditor$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    VisualEditor$0.prototype.performAction = function (source, evt) {
                        this.__parent.toggleDefns();
                    };
                    return VisualEditor$0;
                }());
                VisualEditor.VisualEditor$0 = VisualEditor$0;
                VisualEditor$0["__interfaces"] = ["framework.EventListener"];
                var VisualEditor$1 = (function () {
                    function VisualEditor$1(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    VisualEditor$1.prototype.performAction = function (source, evt) {
                        var selected = this.__parent.toggleRuler.isSelected();
                        if (selected) {
                            this.__parent.toggleRuler.setSelected(false);
                            this.__parent.removeClass("show-ruler");
                        }
                        else {
                            this.__parent.toggleRuler.setSelected(true);
                            this.__parent.addClass("show-ruler");
                        }
                    };
                    return VisualEditor$1;
                }());
                VisualEditor.VisualEditor$1 = VisualEditor$1;
                VisualEditor$1["__interfaces"] = ["framework.EventListener"];
                var VisualEditor$2 = (function () {
                    function VisualEditor$2(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    VisualEditor$2.prototype.performAction = function (source, evt) {
                        var selected = this.__parent.toggleOutline.isSelected();
                        if (selected) {
                            this.__parent.toggleOutline.setSelected(false);
                            this.__parent.removeClass("show-outline");
                        }
                        else {
                            this.__parent.toggleOutline.setSelected(true);
                            this.__parent.addClass("show-outline");
                        }
                    };
                    return VisualEditor$2;
                }());
                VisualEditor.VisualEditor$2 = VisualEditor$2;
                VisualEditor$2["__interfaces"] = ["framework.EventListener"];
                var VisualEditor$3 = (function () {
                    function VisualEditor$3(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    VisualEditor$3.prototype.dataLoaded = function (data) {
                        this.__parent.clean();
                        var title = this.__parent.getAttribute("title");
                        framework.builder.Builder.websocket_$LI$().send("open:" + title);
                    };
                    return VisualEditor$3;
                }());
                VisualEditor.VisualEditor$3 = VisualEditor$3;
                VisualEditor$3["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
                var VisualEditor$4 = (function () {
                    function VisualEditor$4(__parent, marshall, designable) {
                        this.marshall = marshall;
                        this.designable = designable;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} data
                     */
                    VisualEditor$4.prototype.dataLoaded = function (data) {
                        var fff = new framework.builder.data.File(data);
                        fff.setData(this.marshall);
                        framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").saveFile(this.designable, fff, new VisualEditor$4.VisualEditor$4$0(this));
                        this.__parent.structureDockedComposer.getStructure().reload$java_lang_String("components");
                        this.__parent.structureDockedComposer.getStructure().render();
                    };
                    return VisualEditor$4;
                }());
                VisualEditor.VisualEditor$4 = VisualEditor$4;
                VisualEditor$4["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
                (function (VisualEditor$4) {
                    var VisualEditor$4$0 = (function () {
                        function VisualEditor$4$0(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {*} data
                         */
                        VisualEditor$4$0.prototype.dataLoaded = function (data) {
                            console.log(data);
                        };
                        return VisualEditor$4$0;
                    }());
                    VisualEditor$4.VisualEditor$4$0 = VisualEditor$4$0;
                    VisualEditor$4$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
                })(VisualEditor$4 = VisualEditor.VisualEditor$4 || (VisualEditor.VisualEditor$4 = {}));
            })(VisualEditor = editors.VisualEditor || (editors.VisualEditor = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableBlockComponent = (function (_super) {
            __extends(JSDesignableBlockComponent, _super);
            function JSDesignableBlockComponent(name, tag) {
                return _super.call(this, name, tag) || this;
            }
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableBlockComponent.prototype.getParameters = function () {
                var params = _super.prototype.getParameters.call(this);
                var textParam = new framework.design.TextParameter("text", "Html", "Basic");
                var tagParam = new framework.design.TagParameter();
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
            };
            return JSDesignableBlockComponent;
        }(framework.designables.JSDesignable));
        designables.JSDesignableBlockComponent = JSDesignableBlockComponent;
        JSDesignableBlockComponent["__class"] = "framework.designables.JSDesignableBlockComponent";
        JSDesignableBlockComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var JSHTMLFragment = (function (_super) {
        __extends(JSHTMLFragment, _super);
        function JSHTMLFragment(name, template) {
            var _this = _super.call(this, name, "div") || this;
            _this.context = new Object();
            _this.setTemplate(template);
            return _this;
        }
        JSHTMLFragment.prototype.getTemplate = function () {
            return this.getAttribute("template");
        };
        JSHTMLFragment.prototype.setTemplate = function (template) {
            this.setAttribute("template", template);
            this.setRendered(false);
        };
        JSHTMLFragment.prototype.getContext = function () {
            return this.context;
        };
        /**
         *
         * @param {string} key
         * @param {string} value
         */
        JSHTMLFragment.prototype.applyParam = function (key, value) {
            _super.prototype.applyParam.call(this, key, value);
            if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "template")) {
                this.setTemplate(value);
            }
        };
        /**
         *
         * @return {framework.design.Parameter[]}
         */
        JSHTMLFragment.prototype.getParameters = function () {
            var parameters = _super.prototype.getParameters.call(this);
            var templates = new framework.design.AttributeParameter("template", "Template", "Basic");
            var project = null;
            if (framework.builder.Builder.getInstance() != null) {
                project = framework.builder.Builder.getInstance().getProject();
            }
            else {
                project = framework.builder.Previewer.project;
            }
            templates.options.push(new framework.design.Option("Default", "#default"));
            {
                var array6574 = project.getTemplates();
                for (var index6573 = 0; index6573 < array6574.length; index6573++) {
                    var f = array6574[index6573];
                    {
                        templates.options.push(new framework.design.Option(f.getName(), "#" + f.getName().split(".html").join("")));
                    }
                }
            }
            parameters.push(templates);
            return parameters;
        };
        JSHTMLFragment.prototype.render$jsweet_dom_HTMLElement = function (parent) {
            if (!this.isRendered()) {
                var html = $(this.getTemplate()).html();
                if (html != null) {
                    var cxt = this.context;
                    var rendered = "";
                    var js = "rendered = Mustache.render(html, cxt);";
                    eval(js);
                    this.setHtml(rendered);
                }
                else {
                    this.setHtml("Cannot load template:" + this.getTemplate());
                }
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
    }(framework.designables.JSDesignable));
    framework.JSHTMLFragment = JSHTMLFragment;
    JSHTMLFragment["__class"] = "framework.JSHTMLFragment";
    JSHTMLFragment["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableIterable = (function (_super) {
                __extends(JSDesignableIterable, _super);
                function JSDesignableIterable(name, tag) {
                    return _super.call(this, name, tag) || this;
                }
                /**
                 *
                 * @return {Array}
                 */
                JSDesignableIterable.prototype.advancedEventTypes = function () {
                    return ["DataReady"];
                };
                JSDesignableIterable.prototype.setData = function (data) {
                    _super.prototype.setData$java_lang_Object.call(this, data);
                    var evt = new CustomEvent("DataReady");
                    evt["data"] = data;
                    this.fireListener("DataReady", evt);
                };
                JSDesignableIterable.prototype.Clone = function () {
                    var cmp = framework.builder.marshalling.MarshallUtil.extract(this);
                    return framework.builder.marshalling.MarshallUtil.toDesignable(cmp, false, null);
                };
                return JSDesignableIterable;
            }(framework.designables.JSDesignable));
            designables.JSDesignableIterable = JSDesignableIterable;
            JSDesignableIterable["__class"] = "framework.lightning.designables.JSDesignableIterable";
            JSDesignableIterable["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ModalBody = (function (_super) {
            __extends(ModalBody, _super);
            function ModalBody(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.setAttribute("identifier", "lgt:modal-body");
                _this.addClass("slds-modal__content");
                return _this;
            }
            return ModalBody;
        }(framework.designables.JSDesignable));
        lightning.ModalBody = ModalBody;
        ModalBody["__class"] = "framework.lightning.ModalBody";
        ModalBody["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ModalFooter = (function (_super) {
            __extends(ModalFooter, _super);
            function ModalFooter(name) {
                var _this = _super.call(this, name, "footer") || this;
                _this.setAttribute("identifier", "lgt:modal-footer");
                _this.addClass("slds-modal__footer");
                return _this;
            }
            return ModalFooter;
        }(framework.designables.JSDesignable));
        lightning.ModalFooter = ModalFooter;
        ModalFooter["__class"] = "framework.lightning.ModalFooter";
        ModalFooter["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var PanelSection = (function (_super) {
            __extends(PanelSection, _super);
            function PanelSection(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.addClass("slds-panel__section");
                return _this;
            }
            return PanelSection;
        }(framework.designables.JSDesignable));
        lightning.PanelSection = PanelSection;
        PanelSection["__class"] = "framework.lightning.PanelSection";
        PanelSection["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
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
                _this.setAttribute("identifier", "html:input");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableInput.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "type")) {
                    var curVal = this.getValue();
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "date") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "datetime") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "currency") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "number") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "email") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "phone") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "password") || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(value, "text"))
                        this.setTag("input");
                    this.setType(value);
                    this.setValue$java_lang_String(curVal);
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableInput.prototype.getDesignables = function () {
                return (new Array());
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
             * @return {framework.design.Parameter[]}
             */
            JSDesignableInput.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                parameters.push(new framework.design.ValueParameter("value", "Value", "Basic"));
                var type = new framework.design.AttributeParameter("type", "Type", "Basic");
                type.options.push(new framework.design.Option("date", "date"));
                type.options.push(new framework.design.Option("datetime", "datetime"));
                type.options.push(new framework.design.Option("Currency", "currency"));
                type.options.push(new framework.design.Option("Number", "number"));
                type.options.push(new framework.design.Option("Email", "email"));
                type.options.push(new framework.design.Option("Phone", "phone"));
                type.options.push(new framework.design.Option("Text", "text"));
                type.options.push(new framework.design.Option("Password", "password"));
                type.options.push(new framework.design.Option("Url", "url"));
                parameters.push(type);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableInput.prototype.addDesignable = function (designable) {
                throw new Error("Cannot add children to this component");
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableInput.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableInput.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
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
                function CodeMirrorEditor(name, rootEditor) {
                    var _this = _super.call(this, name) || this;
                    _this.editor = null;
                    /*private*/ _this.file = null;
                    /*private*/ _this.value = "";
                    _this.config = null;
                    _this.rootEditor = null;
                    _this.rootEditor = rootEditor;
                    _this.addRenderer(_this);
                    _this.setStyle("position", "absolute");
                    return _this;
                }
                CodeMirrorEditor.prototype.setRootEditor = function (editor) {
                    this.rootEditor = editor;
                };
                CodeMirrorEditor.prototype.setConfig = function (config) {
                    this.config = config;
                };
                CodeMirrorEditor.prototype.doRender$framework_builder_editors_CodeMirrorEditor$jsweet_dom_HTMLElement = function (c, root) {
                    var _this = this;
                    this.value = this.value == null ? "" : this.value;
                    if (this.editor == null) {
                        this.editor = CodeMirror(root, this.config);
                        this.editor.setValue(this.value);
                        this.editor.on("change", function (t) {
                            _this.dirty();
                        });
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
                CodeMirrorEditor.prototype.setValue$java_lang_String = function (s) {
                    this.value = s;
                };
                CodeMirrorEditor.prototype.setValue = function (s) {
                    if (((typeof s === 'string') || s === null)) {
                        return this.setValue$java_lang_String(s);
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
                CodeMirrorEditor.prototype.save = function (type) {
                    if (type === undefined) {
                        return this.save$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                CodeMirrorEditor.prototype.save$ = function () {
                    if (this.editor == null) {
                        return;
                    }
                    var data = this.editor.getValue();
                    this.value = data;
                    this.file.setData(data);
                    framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").saveFile(this, this.file, new CodeMirrorEditor.CodeMirrorEditor$0(this));
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
                /**
                 *
                 * @return {framework.builder.editors.Structure}
                 */
                CodeMirrorEditor.prototype.getStructure = function () {
                    return this.rootEditor.getStructure();
                };
                /**
                 *
                 * @return {framework.builder.editors.VisualEditor}
                 */
                CodeMirrorEditor.prototype.getRootEditor = function () {
                    return this.rootEditor;
                };
                /**
                 *
                 */
                CodeMirrorEditor.prototype.dirty = function () {
                    var body = (this.getAncestorWithClass("slds-tabs_default__content"));
                    var tabs = (this.getAncestorWithClass("editor-tabs"));
                    var item = tabs.getTab(body);
                    item.setStyle("color", "red");
                    item.render();
                    if (this.getRootEditor() != null) {
                        this.getRootEditor().dirty();
                    }
                };
                /**
                 *
                 */
                CodeMirrorEditor.prototype.clean = function () {
                    var body = (this.getAncestorWithClass("slds-tabs_default__content"));
                    var tabs = (this.getAncestorWithClass("editor-tabs"));
                    var item = tabs.getTab(body);
                    item.setStyle("color", "#16325c");
                    item.render();
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
                        this.__parent.clean();
                        var title = this.__parent.getAttribute("title");
                        framework.builder.Builder.websocket_$LI$().send("open:" + title);
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
    var designables;
    (function (designables) {
        var JSDesignableTextArea = (function (_super) {
            __extends(JSDesignableTextArea, _super);
            function JSDesignableTextArea(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("identifier", "html:textarea");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableTextArea.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
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
             * @return {framework.design.Parameter[]}
             */
            JSDesignableTextArea.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                params.push(new framework.design.ValueParameter("value", "Value", "Basic"));
                return params;
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableTextArea.prototype.getDesignables = function () {
                var result = (new Array());
                return result;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextArea.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextArea.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableTextArea.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            return JSDesignableTextArea;
        }(framework.JSTextArea));
        designables.JSDesignableTextArea = JSDesignableTextArea;
        JSDesignableTextArea["__class"] = "framework.designables.JSDesignableTextArea";
        JSDesignableTextArea["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable", "framework.InputField"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var libraries;
        (function (libraries) {
            var DataItem = (function (_super) {
                __extends(DataItem, _super);
                function DataItem(name, structure, labels, fields) {
                    var _this = this;
                    if (((typeof name === 'string') || name === null) && ((structure != null && structure instanceof framework.builder.data.DataStructure) || structure === null) && ((labels != null && labels instanceof Array && (labels.length == 0 || labels[0] == null || (typeof labels[0] === 'string'))) || labels === null) && ((fields != null && fields instanceof Array && (fields.length == 0 || fields[0] == null || (typeof fields[0] === 'string'))) || fields === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        _this = _super.call(this, name, "div") || this;
                        _this.labels = null;
                        _this.labelsFields = null;
                        _this.dataFields = null;
                        _this.title = new framework.JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
                        _this.figure = new framework.lightning.SvgIcon("figure");
                        _this.fields = new framework.lightning.table.Table("fields");
                        _this.dataStructure = null;
                        _this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                        _this.labels = null;
                        _this.labelsFields = null;
                        _this.dataFields = null;
                        (function () {
                            _this.labels = labels;
                            _this.labelsFields = fields;
                            _this.addClass("data-item");
                            var grid = new framework.lightning.Grid("ds", "div");
                            grid.setAlignSpread(true);
                            grid.addClass("slds-grid_vertical-align-center");
                            _this.getHeaderMedia().addBody(grid);
                            var colLeft = new framework.JSContainer("div");
                            var colRight = new framework.JSContainer("div");
                            grid.addChild$framework_JSContainer(colLeft);
                            grid.addChild$framework_JSContainer(colRight);
                            var h2 = new framework.JSContainer("h2");
                            h2.addChild$framework_JSContainer(_this.title);
                            colLeft.addChild$framework_JSContainer(h2);
                            _this.figure.setIconName("contact");
                            _this.figure.setType("standard");
                            _this.figure.setTag("span");
                            _this.figure.addClass("slds-icon_container slds-icon-standard-contact");
                            _this.figure.setSvgClass("slds-icon slds-icon_small");
                            _this.getHeaderMedia().addFigure(_this.figure);
                            _this.getBody().addChild$framework_JSContainer(_this.fields);
                            _this.setDataStructure(structure);
                        })();
                    }
                    else if (((typeof name === 'string') || name === null) && ((structure != null && structure instanceof framework.builder.data.DataStructure) || structure === null) && labels === undefined && fields === undefined) {
                        var __args = Array.prototype.slice.call(arguments);
                        {
                            var __args_1 = Array.prototype.slice.call(arguments);
                            var labels_1 = ["Name", "Label", "Type", "Calculated", "Creatable", "Updatable", "Filterable", "Sortable", "Nillable", "Unique", "Length"];
                            var fields_1 = ["name", "label", "type", "calculated", "createable", "updateable", "filterable", "sortable", "nillable", "unique", "length"];
                            _this = _super.call(this, name, "div") || this;
                            _this.labels = null;
                            _this.labelsFields = null;
                            _this.dataFields = null;
                            _this.title = new framework.JSContainer("a").setAttribute("href", "javascript:void(0);").addClass("slds-card__header-link slds-truncate");
                            _this.figure = new framework.lightning.SvgIcon("figure");
                            _this.fields = new framework.lightning.table.Table("fields");
                            _this.dataStructure = null;
                            _this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                            _this.labels = null;
                            _this.labelsFields = null;
                            _this.dataFields = null;
                            (function () {
                                _this.labels = labels_1;
                                _this.labelsFields = fields_1;
                                _this.addClass("data-item");
                                var grid = new framework.lightning.Grid("ds", "div");
                                grid.setAlignSpread(true);
                                grid.addClass("slds-grid_vertical-align-center");
                                _this.getHeaderMedia().addBody(grid);
                                var colLeft = new framework.JSContainer("div");
                                var colRight = new framework.JSContainer("div");
                                grid.addChild$framework_JSContainer(colLeft);
                                grid.addChild$framework_JSContainer(colRight);
                                var h2 = new framework.JSContainer("h2");
                                h2.addChild$framework_JSContainer(_this.title);
                                colLeft.addChild$framework_JSContainer(h2);
                                _this.figure.setIconName("contact");
                                _this.figure.setType("standard");
                                _this.figure.setTag("span");
                                _this.figure.addClass("slds-icon_container slds-icon-standard-contact");
                                _this.figure.setSvgClass("slds-icon slds-icon_small");
                                _this.getHeaderMedia().addFigure(_this.figure);
                                _this.getBody().addChild$framework_JSContainer(_this.fields);
                                _this.setDataStructure(structure);
                            })();
                        }
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                DataItem.prototype.addOnFieldSeletedListener = function (l) {
                    var item = this;
                    this.fields.addEventListener(new DataItem.DataItem$0(this, l, item), "selectRows");
                };
                DataItem.prototype.setDataStructure = function (structure) {
                    this.dataStructure = structure;
                    this.title.setHtml(structure.getLabel());
                    var cmodel = new framework.lightning.table.DefaultTableColumnModel();
                    for (var i = 0; i < this.labels.length; i++) {
                        var col = new framework.lightning.table.TableColumn(this.labelsFields[i], this.labelsFields[i], this.labels[i]);
                        cmodel.addColumn(col);
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.labelsFields[i], "name")) {
                            col.setWidth("200px");
                        }
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.labelsFields[i], "label")) {
                            col.setWidth("200px");
                        }
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.labelsFields[i], "type")) {
                            col.setWidth("75px");
                        }
                    }
                    ;
                    var actions = new framework.lightning.table.TableColumn("actions", "actins", " ");
                    actions.setWidth("20px");
                    cmodel.addColumn(actions);
                    this.fields.setTableColumnModel(cmodel);
                    this.fields.refreshColumns();
                    this.fields.setTableCellRenderer(this);
                    this.fields.setStriped(true);
                    this.fields.setColBordered(true);
                    this.fields.setSelectable(true);
                    this.dataStructure.getFields(this, new DataItem.DataItem$1(this));
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
                    if (column === this.labels.length) {
                        var btn = new framework.lightning.IconButton("sdfs");
                        btn.setBorderFilled(true);
                        btn.addClass("slds-button_icon-x-small");
                        var icon = new framework.lightning.SvgIcon("edit");
                        icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                        icon.setType("utility");
                        icon.setIconName("right");
                        btn.setIcon(icon);
                        return btn;
                    }
                    else {
                        return this.delegate.getComponent(table, value, row, column);
                    }
                };
                return DataItem;
            }(framework.lightning.Card));
            libraries.DataItem = DataItem;
            DataItem["__class"] = "framework.builder.libraries.DataItem";
            DataItem["__interfaces"] = ["framework.interactions.Droppable", "framework.lightning.table.TableCellRenderer", "framework.Renderable"];
            (function (DataItem) {
                var DataItem$0 = (function () {
                    function DataItem$0(__parent, l, item) {
                        this.l = l;
                        this.item = item;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    DataItem$0.prototype.performAction = function (source, evt) {
                        var e = evt;
                        var field = this.__parent.dataFields[e.firstIndex];
                        this.l.onItemSelected(field, this.item);
                    };
                    return DataItem$0;
                }());
                DataItem.DataItem$0 = DataItem$0;
                DataItem$0["__interfaces"] = ["framework.EventListener"];
                var DataItem$1 = (function () {
                    function DataItem$1(__parent) {
                        this.__parent = __parent;
                    }
                    DataItem$1.prototype.dataLoaded$jsweet_lang_Array = function (data_) {
                        this.__parent.dataFields = data_;
                        this.__parent.fields.setModel(new DataItem$1.DataItem$1$0(this));
                        this.__parent.fields.refreshData();
                        this.__parent.fields.render();
                    };
                    /**
                     *
                     * @param {framework.builder.data.DataField[]} data_
                     */
                    DataItem$1.prototype.dataLoaded = function (data_) {
                        if (((data_ != null && data_ instanceof Array) || data_ === null)) {
                            return this.dataLoaded$jsweet_lang_Array(data_);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    return DataItem$1;
                }());
                DataItem.DataItem$1 = DataItem$1;
                DataItem$1["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
                (function (DataItem$1) {
                    var DataItem$1$0 = (function () {
                        function DataItem$1$0(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {*} aValue
                         * @param {number} rowIndex
                         * @param {number} columnIndex
                         */
                        DataItem$1$0.prototype.setValueAt = function (aValue, rowIndex, columnIndex) {
                        };
                        /**
                         *
                         * @param {number} rowIndex
                         * @param {number} columnIndex
                         * @return {boolean}
                         */
                        DataItem$1$0.prototype.isCellEditable = function (rowIndex, columnIndex) {
                            return false;
                        };
                        /**
                         *
                         * @param {number} rowIndex
                         * @param {number} columnIndex
                         * @return {*}
                         */
                        DataItem$1$0.prototype.getValueAt = function (rowIndex, columnIndex) {
                            if (columnIndex < this.__parent.__parent.labels.length) {
                                return this.__parent.__parent.dataFields[rowIndex].getValue(this.__parent.__parent.labelsFields[columnIndex]);
                            }
                            else {
                                return this.__parent.__parent.dataFields[rowIndex].getName();
                            }
                        };
                        /**
                         *
                         * @return {number}
                         */
                        DataItem$1$0.prototype.getRowCount = function () {
                            return this.__parent.__parent.dataFields.length;
                        };
                        return DataItem$1$0;
                    }());
                    DataItem$1.DataItem$1$0 = DataItem$1$0;
                    DataItem$1$0["__interfaces"] = ["framework.lightning.table.TableModel"];
                })(DataItem$1 = DataItem.DataItem$1 || (DataItem.DataItem$1 = {}));
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
                /*private*/ _this.previewBtn = new framework.lightning.IconButton("preview");
                /*private*/ _this.backdrop = new framework.lightning.Backdrop("backdrop");
                /*private*/ _this.activeEditor = null;
                /*private*/ _this.projectOpen = false;
                /*private*/ _this.btnGroup = new framework.lightning.ButtonGroup("btnGroup");
                /*private*/ _this.welcomeScreen = new framework.builder.WelcomeScreen("welcome", _this);
                _this.project = null;
                _this.addClass("builder");
                _this.editorTabs.addClass("editor-tabs");
                _this.newFileModal.setBackdrop(_this.backdrop);
                _this.openProjectModal.setBackdrop(_this.backdrop);
                _this.welcomeScreen.setBackdrop(_this.backdrop);
                var icon = new framework.lightning.SvgIcon("as", "utility", "save");
                _this.saveButton.setIcon(icon);
                _this.saveButton.setBorderFilled(true);
                _this.saveButton.addEventListener(new Builder.Builder$0(_this), "click");
                _this.previewBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "preview"));
                _this.previewBtn.setBorderFilled(true);
                _this.openProjectBtn.setIcon(new framework.lightning.SvgIcon("", "utility", "open"));
                _this.openProjectBtn.setBorderFilled(true);
                _this.openProjectBtn.addEventListener(new Builder.Builder$1(_this), "click");
                var iconNew = new framework.lightning.SvgIcon("as", "utility", "new");
                _this.newFileButtn.setIcon(iconNew);
                _this.newFileButtn.setBorderFilled(true);
                _this.newFileButtn.addEventListener(new Builder.Builder$2(_this), "click");
                _this.previewBtn.setTag("a").setAttribute("target", "_blank");
                _this.addChild$framework_JSContainer(_this.openProjectModal);
                _this.addChild$framework_JSContainer(_this.newFileModal);
                _this.addChild$framework_JSContainer(_this.welcomeScreen);
                _this.welcomeScreen.open();
                _this.welcomeScreen.setTitle("ZEUS Application Builder");
                _this.addChild$framework_JSContainer(_this.backdrop);
                _this.addChild$framework_JSContainer(_this.btnGroup.addClass("builder-buttons"));
                _this.btnGroup.addChild$framework_JSContainer(_this.saveButton);
                _this.btnGroup.addChild$framework_JSContainer(_this.openProjectBtn);
                _this.btnGroup.addChild$framework_JSContainer(_this.newFileButtn);
                _this.btnGroup.addChild$framework_JSContainer(_this.openProjectBtn);
                _this.btnGroup.addChild$framework_JSContainer(_this.previewBtn);
                _this.addChild$framework_JSContainer(_this.editorTabs);
                framework.core.BeanFactory.getInstance().addBean(Builder, _this);
                $(window).keydown(function (event) {
                    if (event.ctrlKey || event.metaKey) {
                        console.log(event.which);
                        if (event.which === 83) {
                            event.preventDefault();
                            if (_this.activeEditor != null) {
                                _this.activeEditor.save();
                            }
                        }
                    }
                    return true;
                });
                return _this;
            }
            Builder.websocket_$LI$ = function () { if (Builder.websocket == null)
                Builder.websocket = new WebSocket("ws:localhost:8080/preview"); return Builder.websocket; };
            ;
            Builder.prototype.openNewModal = function () {
                this.newFileModal.open();
                if (this.activeEditor != null) {
                    this.newFileModal.init(this.activeEditor.getStructure());
                }
                else {
                    this.newFileModal.init(null);
                }
                this.backdrop.open();
            };
            Builder.prototype.openOpenProjectModal = function () {
                this.openProjectModal.open();
                this.openProjectModal.init();
                this.backdrop.open();
            };
            Builder.getInstance = function () {
                try {
                    return (framework.core.BeanFactory.getInstance().getBeanOfType(Builder));
                }
                catch (e) {
                    return null;
                }
                ;
            };
            Builder.prototype.isProjectOpen = function () {
                return this.projectOpen;
            };
            Builder.prototype.openProject = function (file) {
                this.project = file;
                this.projectOpen = true;
                this.previewBtn.setAttribute("href", "/preview.html#" + this.getProject().getName());
                var editorName = file.getName();
                if (!this.isOpen(editorName)) {
                    var projectEditor = new framework.builder.editors.VisualEditor(editorName);
                    projectEditor.open(file);
                    this.openEditor(file.getName(), projectEditor);
                }
                else {
                    this.activateEditor(editorName);
                }
            };
            Builder.prototype.getProject = function () {
                if (this.activeEditor == null) {
                    return this.project;
                }
                else {
                    return this.activeEditor.getRootEditor().getProject();
                }
            };
            Builder.prototype.isOpen = function (editorName) {
                {
                    var array6576 = this.editorTabs.getItems();
                    for (var index6575 = 0; index6575 < array6576.length; index6575++) {
                        var item = array6576[index6575];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(item.getName(), "editor_" + editorName)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            Builder.prototype.activateEditor = function (editorName) {
                {
                    var array6578 = this.editorTabs.getItems();
                    for (var index6577 = 0; index6577 < array6578.length; index6577++) {
                        var item = array6578[index6577];
                        {
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(item.getName(), "editor_" + editorName)) {
                                this.editorTabs.setActive(item);
                                this.activeEditor = item.getBody().getChildren()[0];
                                return this.activeEditor;
                            }
                        }
                    }
                }
                return null;
            };
            Builder.prototype.openEditor = function (title, editor) {
                if (this.isOpen(editor.getName())) {
                    return this.activateEditor(editor.getName());
                }
                editor.setAttribute("title", title);
                var l = new Builder.Builder$3(this);
                var body = new framework.lightning.TabBody("editorBody");
                body.addChild$framework_JSContainer(editor);
                var item = new framework.lightning.TabItem("editor_" + editor.getName(), body);
                item.setTitle(title);
                item.setClosable(true);
                this.editorTabs.addItem$framework_lightning_TabItem(item);
                item.addTabActionListener(l);
                this.editorTabs.setActive(item);
                return editor;
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
                    this.__parent.openNewModal();
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
                    var edi = item.getBody().getChildren()[0];
                    if (edi != null) {
                        edi.save();
                        if (this.__parent.activeEditor != null && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(edi, this.__parent.activeEditor)) {
                            this.__parent.activeEditor = null;
                        }
                    }
                };
                /**
                 *
                 * @param {framework.lightning.TabItem} item
                 */
                Builder$3.prototype.onActivate = function (item) {
                    this.__parent.activeEditor = item.getBody().getChildren()[0];
                    if (this.__parent.activeEditor != null && this.__parent.activeEditor instanceof framework.builder.editors.EventEditor) {
                        this.__parent.activeEditor.reactivate();
                    }
                };
                /**
                 *
                 * @param {framework.lightning.TabItem} item
                 */
                Builder$3.prototype.onDeactivate = function (item) {
                    var edi = item.getBody().getChildren()[0];
                    if (edi != null) {
                        edi.save();
                    }
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
        var Col = (function (_super) {
            __extends(Col, _super);
            function Col(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.addClass("slds-col");
                _this.setAttribute("sections", "12");
                _this.setAttribute("span", "3");
                _this.refreshCls();
                return _this;
            }
            Col.prototype.setSections = function (sections) {
                this.setAttribute("sections", sections);
                this.refreshCls();
            };
            Col.prototype.setSpan = function (span) {
                this.setAttribute("span", span);
                this.refreshCls();
            };
            Col.prototype.getSpan = function () {
                return parseInt(this.getAttribute("span"));
            };
            Col.prototype.getSections = function () {
                return parseInt(this.getAttribute("sections"));
            };
            Col.prototype.refreshCls = function () {
                var cls = this.getAttribute("class").split(" ");
                var ncls = "";
                for (var index6579 = 0; index6579 < cls.length; index6579++) {
                    var cl = cls[index6579];
                    {
                        if ((function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(cl, "slds-size_")) {
                        }
                        else {
                            ncls = ncls + " " + cl;
                        }
                    }
                }
                this.setAttribute("class", ncls);
                this.addClass("slds-size_" + this.getAttribute("span") + "-of-" + this.getAttribute("sections"));
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Col.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "sections")) {
                    this.setSections(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "span")) {
                    this.setSpan(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            Col.prototype.getDesignables = function () {
                var res = this.getChildren();
                return res;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            Col.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            Col.prototype.getParameters = function () {
                var pa = this.delegate.getParameters();
                var sections = new framework.design.AttributeParameter("sections", "Grid Size", "Basic");
                sections.options.push(new framework.design.Option("12", "12"));
                sections.options.push(new framework.design.Option("6", "6"));
                sections.options.push(new framework.design.Option("4", "4"));
                sections.options.push(new framework.design.Option("3", "3"));
                sections.options.push(new framework.design.Option("2", "2"));
                sections.options.push(new framework.design.Option("1", "1"));
                var span = new framework.design.AttributeParameter("span", "Col Span", "Basic");
                pa.push(sections, span);
                return pa;
            };
            /**
             *
             * @param {*} designable
             */
            Col.prototype.addDesignable = function (designable) {
                this.addChild$framework_JSContainer(designable);
            };
            /**
             *
             * @param {*} designable
             */
            Col.prototype.removeDesignable = function (designable) {
                this.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Col.prototype.moveDesignable = function (designable, steps) {
            };
            return Col;
        }(framework.lightning.LTContainer));
        lightning.Col = Col;
        Col["__class"] = "framework.lightning.Col";
        Col["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
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
                {
                    var array6581 = this.getChildren();
                    for (var index6580 = 0; index6580 < array6581.length; index6580++) {
                        var child = array6581[index6580];
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
                this.setVertical(b);
                return this.toggleClass("slds-grid_vertical-reverse", b);
            };
            Grid.prototype.setReverse = function (b) {
                return this.toggleClass("slds-grid_reverse", b);
            };
            Grid.prototype.setPullPadded = function (b) {
                return this.toggleClass("slds-grid_pull-padded", b);
            };
            Grid.prototype.setPullPaddedSize = function (size) {
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(Grid.PULL_PADDED_NONE, size)) {
                    this.setPullPadded(false);
                    this.removeClass(Grid.PULL_PADDED_X_LARGE).removeClass(Grid.PULL_PADDED_XX_LARGE).removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
                }
                else {
                    this.setPullPadded(true);
                    this.removeClass(Grid.PULL_PADDED_X_LARGE).removeClass(Grid.PULL_PADDED_XX_LARGE).removeClass(Grid.PULL_PADDED_LARGE).removeClass(Grid.PULL_PADDED_MEDIUM).removeClass(Grid.PULL_PADDED_SMALL).removeClass(Grid.PULL_PADDED_X_SMALL).removeClass(Grid.PULL_PADDED_XX_SMALL).removeClass(Grid.PULL_PADDED_XXX_SMALL).addClass(size);
                }
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
                this.setVertical(b);
                return this.toggleClass("slds-grid_vertical-align-start", b);
            };
            Grid.prototype.setVerticalAlignCenter = function (b) {
                this.setVertical(b);
                return this.toggleClass("slds-grid_vertical-align-center", b);
            };
            Grid.prototype.setVerticalAlignEnd = function (b) {
                this.setVertical(b);
                return this.toggleClass("slds-grid_vertical-align-end", b);
            };
            Grid.prototype.setVerticalStretch = function (b) {
                this.setVertical(b);
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
        }(framework.lightning.LTContainer));
        Grid.PULL_PADDED_NONE = "none";
        Grid.PULL_PADDED_XXX_SMALL = "slds-grid_pull-padded-xxx-small";
        Grid.PULL_PADDED_XX_SMALL = "slds-grid_pull-padded-xx-small";
        Grid.PULL_PADDED_X_SMALL = "slds-grid_pull-padded-x-small";
        Grid.PULL_PADDED_SMALL = "slds-grid_pull-padded-small";
        Grid.PULL_PADDED_MEDIUM = "slds-grid_pull-padded-medium";
        Grid.PULL_PADDED_LARGE = "slds-grid_pull-padded-large";
        Grid.PULL_PADDED_X_LARGE = "slds-grid_pull-padded-x-large";
        Grid.PULL_PADDED_XX_LARGE = "slds-grid_pull-padded-xx-large";
        lightning.Grid = Grid;
        Grid["__class"] = "framework.lightning.Grid";
        Grid["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                /*private*/ _this.filesList = new framework.builder.FilesList("filesList", _this);
                _this.setTag("section");
                _this.addClass("slds-modal_large slds-app-launcher item-selector");
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
                _this.getBody().addChild$framework_JSContainer(_this.section);
                _this.getBody().addClass("slds-app-launcher__content slds-p-around_medium");
                _this.section.getContent().addChild$framework_JSContainer(_this.filesList);
                _this.setSize(framework.lightning.Modal.SIZE_LARGE);
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
        var properties;
        (function (properties) {
            var ItemSelector = (function (_super) {
                __extends(ItemSelector, _super);
                function ItemSelector(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.dataTable = new framework.lightning.table.Table("fields");
                    /*private*/ _this.delegate = new framework.lightning.table.DefaultTableCellRenderer();
                    /*private*/ _this.tableColumModel = new framework.lightning.table.DefaultTableColumnModel();
                    _this.dataList = null;
                    _this.addClass("data-item");
                    _this.getBody().addChild$framework_JSContainer(_this.dataTable);
                    return _this;
                }
                ItemSelector.prototype.addOnItemSeletedListener = function (l) {
                    this.dataTable.addEventListener(new ItemSelector.ItemSelector$0(this, l), "selectRows");
                };
                ItemSelector.prototype.addColumn = function (column) {
                    this.tableColumModel.addColumn(column);
                };
                ItemSelector.prototype.setDataList = function (dataList) {
                    this.dataList = dataList;
                    this.dataTable.setTableCellRenderer(this);
                    this.dataTable.setTableColumnModel(this.tableColumModel);
                    this.dataTable.refreshColumns();
                    this.dataTable.setModel(new ItemSelector.ItemSelector$1(this, dataList));
                    this.dataTable.refreshData();
                };
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {*}
                 */
                ItemSelector.prototype.getComponent = function (table, value, row, column) {
                    if (this.isActionColumn(table, value, row, column)) {
                        var btn = new framework.lightning.IconButton("sdfs");
                        btn.setBorderFilled(true);
                        btn.addClass("slds-button_icon-x-small");
                        var icon = new framework.lightning.SvgIcon("edit");
                        icon.setSvgClass("slds-button__icon slds-button__icon_hint slds-button__icon_small");
                        icon.setType("utility");
                        icon.setIconName("right");
                        btn.setIcon(icon);
                        return btn;
                    }
                    else {
                        return this.delegate.getComponent(table, value, row, column);
                    }
                };
                return ItemSelector;
            }(framework.lightning.Modal));
            properties.ItemSelector = ItemSelector;
            ItemSelector["__class"] = "framework.builder.properties.ItemSelector";
            ItemSelector["__interfaces"] = ["framework.interactions.Droppable", "framework.lightning.table.TableCellRenderer", "framework.Renderable"];
            (function (ItemSelector) {
                var ItemSelector$0 = (function () {
                    function ItemSelector$0(__parent, l) {
                        this.l = l;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    ItemSelector$0.prototype.performAction = function (source, evt) {
                        var e = evt;
                        var field = this.__parent.dataList[e.firstIndex];
                        this.l.onItemSelected(field);
                    };
                    return ItemSelector$0;
                }());
                ItemSelector.ItemSelector$0 = ItemSelector$0;
                ItemSelector$0["__interfaces"] = ["framework.EventListener"];
                var ItemSelector$1 = (function () {
                    function ItemSelector$1(__parent, dataList) {
                        this.dataList = dataList;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} aValue
                     * @param {number} rowIndex
                     * @param {number} columnIndex
                     */
                    ItemSelector$1.prototype.setValueAt = function (aValue, rowIndex, columnIndex) {
                    };
                    /**
                     *
                     * @param {number} rowIndex
                     * @param {number} columnIndex
                     * @return {boolean}
                     */
                    ItemSelector$1.prototype.isCellEditable = function (rowIndex, columnIndex) {
                        return false;
                    };
                    /**
                     *
                     * @param {number} rowIndex
                     * @param {number} columnIndex
                     * @return {*}
                     */
                    ItemSelector$1.prototype.getValueAt = function (rowIndex, columnIndex) {
                        return null;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    ItemSelector$1.prototype.getRowCount = function () {
                        return this.dataList.length;
                    };
                    return ItemSelector$1;
                }());
                ItemSelector.ItemSelector$1 = ItemSelector$1;
                ItemSelector$1["__interfaces"] = ["framework.lightning.table.TableModel"];
            })(ItemSelector = properties.ItemSelector || (properties.ItemSelector = {}));
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_1) {
        var WelcomeScreen = (function (_super) {
            __extends(WelcomeScreen, _super);
            function WelcomeScreen(name, builder) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.section = new framework.lightning.Section("section", "All Options");
                /*private*/ _this.options = new framework.lightning.Grid("options", "ul");
                /*private*/ _this.newItem = new framework.builder.WelcomeScreenItem("new", "NEW", "Create a new application", "Start with a blank project or one via a wizard", 1);
                /*private*/ _this.openComputerItem = new framework.builder.WelcomeScreenItem("openComputer", "OPN", "Open a project from computer", "Browse your computer to select an application", 2);
                /*private*/ _this.openUrlItem = new framework.builder.WelcomeScreenItem("openUrl", "URL", "Open project from url", "Specify an URL of a project to fetch", 3);
                /*private*/ _this.openLibrary = new framework.builder.WelcomeScreenItem("openLibrary", "LIB", "Open project from library", "Project stored on server", 4);
                _this.builder = null;
                _this.builder = builder;
                _this.addClass("welcome-screen");
                _this.setStyle("width", "50%");
                _this.addClass("slds-fade-in-open slds-modal_large slds-app-launcher slds-align_absolute-center");
                _this.section.addClass("slds-open");
                _this.getBody().addChild$framework_JSContainer(_this.section);
                _this.section.getContent().addChild$framework_JSContainer(_this.options);
                _this.options.setWrap(true);
                var items = [_this.newItem, _this.openComputerItem, _this.openUrlItem, _this.openLibrary];
                for (var index6582 = 0; index6582 < items.length; index6582++) {
                    var item = items[index6582];
                    {
                        var li = new framework.JSContainer("li");
                        _this.options.addChild$framework_JSContainer(li.addClass("slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-1"));
                        li.addChild$framework_JSContainer(item);
                    }
                }
                _this.newItem.addEventListener(new WelcomeScreen.WelcomeScreen$0(_this, builder), "click");
                _this.openLibrary.addEventListener(new WelcomeScreen.WelcomeScreen$1(_this, builder), "click");
                return _this;
            }
            return WelcomeScreen;
        }(framework.lightning.Modal));
        builder_1.WelcomeScreen = WelcomeScreen;
        WelcomeScreen["__class"] = "framework.builder.WelcomeScreen";
        WelcomeScreen["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        (function (WelcomeScreen) {
            var WelcomeScreen$0 = (function () {
                function WelcomeScreen$0(__parent, builder) {
                    this.builder = builder;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                WelcomeScreen$0.prototype.performAction = function (source, evt) {
                    this.__parent.close();
                    this.builder.openNewModal();
                };
                return WelcomeScreen$0;
            }());
            WelcomeScreen.WelcomeScreen$0 = WelcomeScreen$0;
            WelcomeScreen$0["__interfaces"] = ["framework.EventListener"];
            var WelcomeScreen$1 = (function () {
                function WelcomeScreen$1(__parent, builder) {
                    this.builder = builder;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                WelcomeScreen$1.prototype.performAction = function (source, evt) {
                    this.__parent.close();
                    this.builder.openOpenProjectModal();
                };
                return WelcomeScreen$1;
            }());
            WelcomeScreen.WelcomeScreen$1 = WelcomeScreen$1;
            WelcomeScreen$1["__interfaces"] = ["framework.EventListener"];
        })(WelcomeScreen = builder_1.WelcomeScreen || (builder_1.WelcomeScreen = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableModal = (function (_super) {
                __extends(JSDesignableModal, _super);
                function JSDesignableModal(name) {
                    var _this = _super.call(this, name, "") || this;
                    /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                    _this.applyParam("title", "Modal Title");
                    _this.applyParam("showFooter", "true");
                    _this.applyParam("showHeader", "true");
                    var bk = new framework.lightning.Backdrop("f");
                    bk.setStyle("z-index", "-1");
                    _this.addChild$framework_JSContainer(bk);
                    _this.setBackdrop(bk);
                    return _this;
                }
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableModal.prototype.applyParam = function (key, value) {
                    this.delegate.applyParameter(key, value, true);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "title")) {
                        this.setTitle(value);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "size")) {
                        this.setSize(value);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "showFooter")) {
                        this.getFooter().setVisible(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("true", value));
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "showHeader")) {
                        this.getHeader().setVisible(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("true", value));
                    }
                };
                /**
                 *
                 * @return {*[]}
                 */
                JSDesignableModal.prototype.getDesignables = function () {
                    var res = (new Array());
                    res.push(this.getBody(), this.getFooter());
                    return res;
                };
                /**
                 *
                 * @return {framework.builder.marshalling.Component}
                 */
                JSDesignableModal.prototype.getComponent = function () {
                    return this.delegate.getComponent();
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableModal.prototype.getParameters = function () {
                    var params = this.delegate.getParameters();
                    var title = new framework.design.AttributeParameter("title", "Title", "Basic");
                    var size = new framework.design.AttributeParameter("size", "Size", "Basic");
                    size.options.push(new framework.design.Option("Normal", framework.lightning.Modal.SIZE_NORMAL));
                    size.options.push(new framework.design.Option("Medium", framework.lightning.Modal.SIZE_MEDIUM));
                    size.options.push(new framework.design.Option("Large", framework.lightning.Modal.SIZE_LARGE));
                    var showHeader = new framework.design.AttributeParameter("showHeader", "Show Header", "Basic");
                    showHeader.options.push(new framework.design.Option("", ""));
                    var showFooter = new framework.design.AttributeParameter("showFooter", "Show Footer", "Basic");
                    showFooter.options.push(new framework.design.Option("", ""));
                    params.push(title, size, showHeader, showFooter);
                    return params;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableModal.prototype.addDesignable = function (designable) {
                    if (designable != null && designable instanceof framework.lightning.ModalBody) {
                        this.setBody(designable);
                    }
                    else if (designable != null && designable instanceof framework.lightning.ModalFooter) {
                        this.setFooter(designable);
                    }
                    else {
                        throw new Error("Can only add component of Modal Body or Modal Footer is this container");
                    }
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableModal.prototype.removeDesignable = function (designable) {
                    throw new Error("Cannot delete component from this container. Rather delete from the body or footer. Or consider hiding the body and or footer");
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableModal.prototype.moveDesignable = function (designable, steps) {
                };
                return JSDesignableModal;
            }(framework.lightning.Modal));
            designables.JSDesignableModal = JSDesignableModal;
            JSDesignableModal["__class"] = "framework.lightning.designables.JSDesignableModal";
            JSDesignableModal["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ListPopOver = (function (_super) {
            __extends(ListPopOver, _super);
            function ListPopOver(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.listBox = null;
                _this.listBox = new framework.lightning.ListBox("list");
                _this.getBody().addChild$framework_JSContainer(_this.listBox);
                _this.setAttribute("identifier", "lgt:popover");
                _this.applyParam("nubin", framework.lightning.PopOver.NUBIN_TOP_LEFT);
                _this.applyParam("showBody", "true");
                _this.applyParam("showFooter", "true");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            ListPopOver.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "nubin")) {
                    this.setNubin(value);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "showBody")) {
                    _super.prototype.showBody.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "showFooter")) {
                    _super.prototype.showFooter.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
            };
            /**
             *
             * @return {*[]}
             */
            ListPopOver.prototype.getDesignables = function () {
                var res = (new Array());
                res.push(this.listBox);
                res.push(this.getFooter());
                return res;
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            ListPopOver.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            ListPopOver.prototype.getParameters = function () {
                var parameters = this.delegate.getParameters();
                var nubin = new framework.design.AttributeParameter("nubin", "Nubin Position", "Basic");
                nubin.options.push(new framework.design.Option("None", framework.lightning.PopOver.NUBIN_NONE));
                nubin.options.push(new framework.design.Option("Top Left", framework.lightning.PopOver.NUBIN_TOP_LEFT));
                nubin.options.push(new framework.design.Option("Top Right", framework.lightning.PopOver.NUBIN_TOP_RIGHT));
                nubin.options.push(new framework.design.Option("Bottom Right", framework.lightning.PopOver.NUBIN_BOTTOM_RIGHT));
                nubin.options.push(new framework.design.Option("Bottom Left", framework.lightning.PopOver.NUBIN_BOTTOM_LEFT));
                var showBody = new framework.design.AttributeParameter("showBody", "Show Body", "Basic");
                showBody.options.push(new framework.design.Option("", ""));
                var showFooter = new framework.design.AttributeParameter("showFooter", "Show Footer", "Basic");
                showFooter.options.push(new framework.design.Option("", ""));
                parameters.push(nubin, showBody, showFooter);
                return parameters;
            };
            /**
             *
             * @param {*} designable
             */
            ListPopOver.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.ListBox) {
                    var lb = designable;
                    this.listBox = lb;
                    this.getBody().clearChildren();
                    this.getBody().addChild$framework_JSContainer(lb);
                }
                else {
                    var fotter = this.getFooter();
                    this.removeChild(fotter);
                    this.addChild$framework_JSContainer(designable);
                }
            };
            /**
             *
             * @param {*} designable
             */
            ListPopOver.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            ListPopOver.prototype.moveDesignable = function (designable, steps) {
            };
            return ListPopOver;
        }(framework.lightning.PopOver));
        lightning.ListPopOver = ListPopOver;
        ListPopOver["__class"] = "framework.lightning.ListPopOver";
        ListPopOver["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
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
                    _this = _super.call(this, name) || this;
                    (function () {
                        _this.setTag("button");
                        _this.addClass("slds-button");
                        _this.setAttribute("state", "neutral");
                        _this.setState(Button.STATE_NEUTRAL);
                        _this.setShowIcon(false);
                        _this.setSvgClass("slds-button__icon slds-button__icon_left");
                    })();
                }
                else if (name === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_2 = Array.prototype.slice.call(arguments);
                        var name_2 = "Button";
                        _this = _super.call(this, name_2) || this;
                        (function () {
                            _this.setTag("button");
                            _this.addClass("slds-button");
                            _this.setAttribute("state", "neutral");
                            _this.setState(Button.STATE_NEUTRAL);
                            _this.setShowIcon(false);
                            _this.setSvgClass("slds-button__icon slds-button__icon_left");
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Button.states_$LI$ = function () { if (Button.states == null)
                Button.states = ["neutral", "brand", "destructive", "success", "reset"]; return Button.states; };
            ;
            Button.prototype.setLabel = function (label) {
                this.setText(label);
                return this;
            };
            Button.prototype.setState = function (state) {
                for (var index6583 = 0; index6583 < Button.states_$LI$().length; index6583++) {
                    var s = Button.states_$LI$()[index6583];
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
            return Button;
        }(framework.lightning.SvgIcon));
        Button.STATE_NEUTRAL = "neutral";
        Button.STATE_BRAND = "brand";
        Button.STATE_DESTRUCTIVE = "destructive";
        Button.STATE_SUCCESS = "success";
        Button.STATE_RESET = "reset";
        lightning.Button = Button;
        Button["__class"] = "framework.lightning.Button";
        Button["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var ImageIcon = (function (_super) {
            __extends(ImageIcon, _super);
            function ImageIcon(name, url) {
                var _this = _super.call(this, name) || this;
                _this.img = new framework.JSContainer("img");
                _this.setHtml("");
                _this.clearChildren();
                _this.addChild$framework_JSContainer(_this.img);
                _this.img.setAttribute("src", "http://www.powells.com/Portals/0/Images/powells_images/loading.gif");
                return _this;
            }
            return ImageIcon;
        }(framework.lightning.SvgIcon));
        lightning.ImageIcon = ImageIcon;
        ImageIcon["__class"] = "framework.lightning.ImageIcon";
        ImageIcon["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                _this.setAttribute("identifier", "html:p");
                return _this;
            }
            JSDesignableTextComponent.__static_initialize = function () { if (!JSDesignableTextComponent.__static_initialized) {
                JSDesignableTextComponent.__static_initialized = true;
                JSDesignableTextComponent.__static_initializer_0();
            } };
            JSDesignableTextComponent.textTags_$LI$ = function () { JSDesignableTextComponent.__static_initialize(); if (JSDesignableTextComponent.textTags == null)
                JSDesignableTextComponent.textTags = new Object(); return JSDesignableTextComponent.textTags; };
            ;
            JSDesignableTextComponent.__static_initializer_0 = function () {
                JSDesignableTextComponent.textTags_$LI$()["h1"] = "Heading 1";
                JSDesignableTextComponent.textTags_$LI$()["h2"] = "Heading 2";
                JSDesignableTextComponent.textTags_$LI$()["h3"] = "Heading 3";
                JSDesignableTextComponent.textTags_$LI$()["h4"] = "Heading 4";
                JSDesignableTextComponent.textTags_$LI$()["h5"] = "Heading 5";
                JSDesignableTextComponent.textTags_$LI$()["label"] = "Label";
                JSDesignableTextComponent.textTags_$LI$()["paragraph"] = "Paragraph";
                JSDesignableTextComponent.textTags_$LI$()["span"] = "Span";
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableTextComponent.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableTextComponent.prototype.getDesignables = function () {
                var l = this.getChildren();
                return l;
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
             * @return {framework.design.Parameter[]}
             */
            JSDesignableTextComponent.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var textParam = new framework.design.TextParameter("text", "Text", "Basic");
                var tagParam = new framework.design.TagParameter();
                {
                    var array6585 = Object.keys(JSDesignableTextComponent.textTags_$LI$());
                    for (var index6584 = 0; index6584 < array6585.length; index6584++) {
                        var key = array6585[index6584];
                        {
                            tagParam.options.push(new framework.design.Option(JSDesignableTextComponent.textTags_$LI$()[key], key));
                        }
                    }
                }
                params.push(tagParam);
                params.push(textParam);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextComponent.prototype.addDesignable = function (designable) {
                this.addChild$framework_JSContainer(designable);
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableTextComponent.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableTextComponent.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            return JSDesignableTextComponent;
        }(framework.TextComponent));
        JSDesignableTextComponent.__static_initialized = false;
        designables.JSDesignableTextComponent = JSDesignableTextComponent;
        JSDesignableTextComponent["__class"] = "framework.designables.JSDesignableTextComponent";
        JSDesignableTextComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_2) {
        var editors;
        (function (editors) {
            var FileTreeItem = (function (_super) {
                __extends(FileTreeItem, _super);
                function FileTreeItem(f, type, builder, structure) {
                    var _this = _super.call(this, f.getName(), f.getTitle()) || this;
                    _this.builder = null;
                    _this.type = null;
                    _this.structure = null;
                    _this.f = null;
                    _this.builder = builder;
                    _this.type = type;
                    _this.structure = structure;
                    _this.f = f;
                    _this.addIcon("delete", "utility", _this);
                    _this.setData$java_lang_Object(f);
                    _this.addEventListener(_this, "click");
                    _this.addClass("file-tree-item");
                    _this.addClass("type-" + type);
                    if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "html")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("work_type", "standard");
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "css")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("topic", "standard");
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "js")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("custom_notification", "standard");
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "dat")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("database", "utility");
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".cmp")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("custom63", "custom");
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".ds")) {
                        _this.setLeftIcon$java_lang_String$java_lang_String("custom63", "custom");
                    }
                    return _this;
                }
                FileTreeItem.prototype.click = function (source, evt) {
                    var veditor = (this.structure.getRootUINode().getAncestorWithClass("visual-editor"));
                    var f = source.getData();
                    if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "html")) {
                        var editor = new framework.builder.editors.HTMLEditor(f.getName(), veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "css")) {
                        var editor = new framework.builder.editors.CSSEditor(f.getName(), veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "js")) {
                        var editor = new framework.builder.editors.JavascriptEditor(f.getName(), veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), "dat")) {
                        var editor = new framework.builder.libraries.DataComposer(f.getName(), veditor, this.structure);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".cmp")) {
                        var editor = new framework.builder.editors.VisualEditor(f.getName());
                        editor.setRootEditor(veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".ds")) {
                        var editor = new framework.builder.data.DataSourcesEditor(f.getName(), veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else if ((function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(f.getName(), ".var")) {
                        var editor = new framework.builder.editors.ContextEditor(f.getName(), veditor);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                    else {
                        var editor = new framework.builder.libraries.DataComposer(f.getName(), veditor, this.structure);
                        this.builder.openEditor(f.getName(), editor);
                        editor.open(f);
                    }
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                FileTreeItem.prototype.performAction = function (source, evt) {
                    evt.stopPropagation();
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(source, this)) {
                        this.click(source, evt);
                        return;
                    }
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(source.getName(), "delete")) {
                        var stype = this.type;
                        this.builder.getProject().deleteFile(this, this.f.getName(), stype, new FileTreeItem.FileTreeItem$0(this, stype));
                        this.builder.getProject().getChild(stype).removeFile(this.f);
                    }
                };
                return FileTreeItem;
            }(framework.TreeItem));
            editors.FileTreeItem = FileTreeItem;
            FileTreeItem["__class"] = "framework.builder.editors.FileTreeItem";
            FileTreeItem["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
            (function (FileTreeItem) {
                var FileTreeItem$0 = (function () {
                    function FileTreeItem$0(__parent, stype) {
                        this.stype = stype;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.builder.data.DataField[]} data_
                     */
                    FileTreeItem$0.prototype.dataLoaded = function (data_) {
                        if (((data_ != null) || data_ === null)) {
                            return this.dataLoaded$java_lang_Object(data_);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    FileTreeItem$0.prototype.dataLoaded$java_lang_Object = function (data) {
                        this.__parent.structure.reload();
                        this.__parent.structure.getItem$java_lang_String(this.stype).open();
                        this.__parent.structure.render();
                    };
                    return FileTreeItem$0;
                }());
                FileTreeItem.FileTreeItem$0 = FileTreeItem$0;
                FileTreeItem$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(FileTreeItem = editors.FileTreeItem || (editors.FileTreeItem = {}));
        })(editors = builder_2.editors || (builder_2.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var StructureTreeItem = (function (_super) {
                __extends(StructureTreeItem, _super);
                function StructureTreeItem(name, designable, structure, parent) {
                    var _this = _super.call(this, name, designable.getName()) || this;
                    /*private*/ _this.dropdown = new framework.lightning.DropDown("rightclick");
                    /*private*/ _this.lsnClick = new StructureTreeItem.StructureTreeItem$0(_this);
                    /*private*/ _this.lsnDblclick = new StructureTreeItem.StructureTreeItem$1(_this);
                    /*private*/ _this.lsnDelete = new StructureTreeItem.StructureTreeItem$2(_this);
                    _this.designable = null;
                    _this.selector = null;
                    _this.structure = null;
                    _this.parent = null;
                    _this.selector = structure.getSelector();
                    _this.parent = parent;
                    _this.structure = structure;
                    _this.designable = designable;
                    _this.addClass("structure-tree-item");
                    _this.setLeftIcon$java_lang_String$java_lang_String("template", "standard");
                    var deleteMenu = new framework.lightning.DropDownItem("delete", "Delete");
                    deleteMenu.setIcon("delete", "utility");
                    var copy = new framework.lightning.DropDownItem("copy", "Copy");
                    copy.setIcon("copy", "utility");
                    var cut = new framework.lightning.DropDownItem("cut", "Cut");
                    cut.setIcon("cut", "utility");
                    var paste = new framework.lightning.DropDownItem("paste", "Paste");
                    paste.setIcon("paste", "utility");
                    var exportAs = new framework.lightning.DropDownItem("export", "Export");
                    exportAs.setIcon("add_relationship", "action");
                    var pasteBefore = new framework.lightning.DropDownItem("pasteBefore", "Paste Before");
                    pasteBefore.setIcon("add_relationship", "action");
                    var pasteAfter = new framework.lightning.DropDownItem("pasteAfter", "Paste After");
                    pasteAfter.setIcon("add_relationship", "action");
                    exportAs.addEventListener(new StructureTreeItem.StructureTreeItem$3(_this), "click");
                    copy.addEventListener(new StructureTreeItem.StructureTreeItem$4(_this, structure, designable), "click");
                    cut.addEventListener(new StructureTreeItem.StructureTreeItem$5(_this, structure, designable), "click");
                    paste.addEventListener(new StructureTreeItem.StructureTreeItem$6(_this), "click");
                    pasteBefore.addEventListener(new StructureTreeItem.StructureTreeItem$7(_this), "click");
                    pasteAfter.addEventListener(new StructureTreeItem.StructureTreeItem$8(_this), "click");
                    deleteMenu.addEventListener(_this.lsnDelete, "click");
                    _this.dropdown.addItem(paste);
                    _this.dropdown.addItem(pasteBefore);
                    _this.dropdown.addItem(pasteAfter);
                    _this.dropdown.addItem(copy);
                    _this.dropdown.addItem(exportAs);
                    _this.dropdown.addItem(deleteMenu);
                    _this.dropdown.setVisible(false);
                    _this.addChild$framework_JSContainer(_this.dropdown);
                    document.addEventListener("click", function (evt) {
                        _this.dropdown.setVisible(false);
                        if (_this.dropdown.isRendered())
                            _this.dropdown.render();
                    });
                    _this.addIcon("delete", "utility", _this.lsnDelete);
                    _this.addEventListener(_this.lsnClick, "click");
                    _this.addEventListener(_this.lsnDblclick, "dblclick");
                    _this.addEventListener(new StructureTreeItem.StructureTreeItem$9(_this, structure, paste, pasteAfter, pasteBefore), "contextmenu");
                    return _this;
                }
                StructureTreeItem.prototype.paste = function () {
                    var clip = this.structure.getClipBoard();
                    var cmp = framework.builder.marshalling.MarshallUtil.extract(clip);
                    var des = framework.builder.marshalling.MarshallUtil.toDesignable(cmp, true, this.selector);
                    var editor = (this.getAncestorWithClass("visual-editor"));
                    editor.persist = true;
                    editor.addNewComponent$framework_design_Designable$framework_design_Designable(des, this.designable);
                    editor.dirty();
                };
                StructureTreeItem.prototype.pasteBefore = function () {
                    var clip = this.structure.getClipBoard();
                    this.Move(clip, true);
                };
                StructureTreeItem.prototype.pasteAfter = function () {
                    var clip = this.structure.getClipBoard();
                    this.Move(clip, false);
                };
                /*private*/ StructureTreeItem.prototype.Move = function (clip, before) {
                    var parent = this.getParentDesignable();
                    if (parent != null) {
                        var children = parent.getDesignables();
                        var currentIndex = children.indexOf(this.designable);
                        for (var index6586 = 0; index6586 < children.length; index6586++) {
                            var child = children[index6586];
                            {
                                parent.removeDesignable(child);
                            }
                        }
                        var result = (new Array());
                        var cmp = framework.builder.marshalling.MarshallUtil.extract(clip);
                        var d = framework.builder.marshalling.MarshallUtil.toDesignable(cmp, true, this.selector);
                        for (var i = 0; i < children.length; i++) {
                            if (i === currentIndex) {
                                if (before) {
                                    result.push(d);
                                    result.push(children[i]);
                                }
                                else {
                                    result.push(children[i]);
                                    result.push(d);
                                }
                            }
                            else {
                                result.push(children[i]);
                            }
                        }
                        ;
                        var editor = (this.getAncestorWithClass("visual-editor"));
                        editor.persist = true;
                        for (var index6587 = 0; index6587 < result.length; index6587++) {
                            var child = result[index6587];
                            {
                                editor.addNewComponent$framework_design_Designable$framework_design_Designable(child, parent);
                            }
                        }
                        parent.setRendered(false);
                        editor.dirty();
                        this.structure.reload$framework_design_Designable(parent);
                        this.structure.render();
                    }
                };
                StructureTreeItem.prototype.getDesignable = function () {
                    return this.designable;
                };
                StructureTreeItem.prototype.getParentDesignable = function () {
                    return this.parent;
                };
                /**
                 *
                 * @param {boolean} b
                 */
                StructureTreeItem.prototype.select = function (b) {
                    _super.prototype.select.call(this, b);
                    this.selector.select(this.designable);
                };
                StructureTreeItem.prototype.saveAsComponent = function () {
                    var ve = (this.structure.getAncestorWithClass("visual-editor"));
                    ve.saveAsComponent(this.designable);
                };
                StructureTreeItem.prototype.dblclick = function (source, evt) {
                    evt.stopPropagation();
                    var desgianble = this.getDesignable();
                    var editorName = "editor:" + desgianble.getName();
                    if (framework.builder.Builder.getInstance().isOpen(editorName)) {
                        var ee = framework.builder.Builder.getInstance().activateEditor(editorName);
                        if (ee != null && ee instanceof framework.builder.editors.EventEditor) {
                            ee.setDesignable(desgianble);
                        }
                    }
                    else {
                        var veditor = (this.structure.getRootUINode().getAncestorWithClass("visual-editor"));
                        var editor = new framework.builder.editors.EventEditor(editorName, this.structure.getRootUINode(), veditor);
                        editor.setDesignable(desgianble);
                        var ed = framework.builder.Builder.getInstance().openEditor("Event(" + desgianble.getName() + ")", editor);
                        ed.setDesignable(desgianble);
                    }
                };
                StructureTreeItem.prototype.click = function (source, evt) {
                    evt.stopPropagation();
                    var editor = (this.structure.getRootUINode().getAncestorWithClass("visual-editor"));
                    var willAdd = editor.getWillAddComponent();
                    if (willAdd != null) {
                        var itemS = source;
                        editor.addNewComponent$framework_builder_Component$framework_design_Designable(willAdd, itemS.getDesignable());
                        editor.dirty();
                    }
                    else {
                        var itemS = source;
                        if (this.structure.getSelected() != null) {
                            this.structure.getSelected().select(false);
                        }
                        this.structure.setSelected(itemS);
                        if (this.structure.getSelected() != null)
                            this.structure.getSelected().select(true);
                    }
                };
                return StructureTreeItem;
            }(framework.TreeItem));
            editors.StructureTreeItem = StructureTreeItem;
            StructureTreeItem["__class"] = "framework.builder.editors.StructureTreeItem";
            StructureTreeItem["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.Renderable"];
            (function (StructureTreeItem) {
                var StructureTreeItem$0 = (function () {
                    function StructureTreeItem$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$0.prototype.performAction = function (source, evt) {
                        this.__parent.click(source, evt);
                    };
                    return StructureTreeItem$0;
                }());
                StructureTreeItem.StructureTreeItem$0 = StructureTreeItem$0;
                StructureTreeItem$0["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$1 = (function () {
                    function StructureTreeItem$1(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$1.prototype.performAction = function (source, evt) {
                        this.__parent.dblclick(source, evt);
                    };
                    return StructureTreeItem$1;
                }());
                StructureTreeItem.StructureTreeItem$1 = StructureTreeItem$1;
                StructureTreeItem$1["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$2 = (function () {
                    function StructureTreeItem$2(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$2.prototype.performAction = function (source, evt) {
                        if (this.__parent.parent != null) {
                            try {
                                this.__parent.parent.removeDesignable(this.__parent.designable);
                                this.__parent.getParent().setVisible(false);
                                var editor = (this.__parent.getAncestorWithClass("visual-editor"));
                                editor.dirty();
                            }
                            catch (e) {
                                alert(e.message);
                            }
                            ;
                        }
                    };
                    return StructureTreeItem$2;
                }());
                StructureTreeItem.StructureTreeItem$2 = StructureTreeItem$2;
                StructureTreeItem$2["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$3 = (function () {
                    function StructureTreeItem$3(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$3.prototype.performAction = function (source, evt) {
                        this.__parent.saveAsComponent();
                    };
                    return StructureTreeItem$3;
                }());
                StructureTreeItem.StructureTreeItem$3 = StructureTreeItem$3;
                StructureTreeItem$3["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$4 = (function () {
                    function StructureTreeItem$4(__parent, structure, designable) {
                        this.structure = structure;
                        this.designable = designable;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$4.prototype.performAction = function (source, evt) {
                        this.structure.copy(this.designable);
                        this.__parent.dropdown.setVisible(false);
                    };
                    return StructureTreeItem$4;
                }());
                StructureTreeItem.StructureTreeItem$4 = StructureTreeItem$4;
                StructureTreeItem$4["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$5 = (function () {
                    function StructureTreeItem$5(__parent, structure, designable) {
                        this.structure = structure;
                        this.designable = designable;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$5.prototype.performAction = function (source, evt) {
                        this.__parent.setStyle("opacity", "0.5");
                        this.structure.cut(this.designable);
                        this.__parent.dropdown.setVisible(false);
                    };
                    return StructureTreeItem$5;
                }());
                StructureTreeItem.StructureTreeItem$5 = StructureTreeItem$5;
                StructureTreeItem$5["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$6 = (function () {
                    function StructureTreeItem$6(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$6.prototype.performAction = function (source, evt) {
                        this.__parent.paste();
                    };
                    return StructureTreeItem$6;
                }());
                StructureTreeItem.StructureTreeItem$6 = StructureTreeItem$6;
                StructureTreeItem$6["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$7 = (function () {
                    function StructureTreeItem$7(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$7.prototype.performAction = function (source, evt) {
                        this.__parent.pasteBefore();
                    };
                    return StructureTreeItem$7;
                }());
                StructureTreeItem.StructureTreeItem$7 = StructureTreeItem$7;
                StructureTreeItem$7["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$8 = (function () {
                    function StructureTreeItem$8(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$8.prototype.performAction = function (source, evt) {
                        this.__parent.pasteAfter();
                    };
                    return StructureTreeItem$8;
                }());
                StructureTreeItem.StructureTreeItem$8 = StructureTreeItem$8;
                StructureTreeItem$8["__interfaces"] = ["framework.EventListener"];
                var StructureTreeItem$9 = (function () {
                    function StructureTreeItem$9(__parent, structure, paste, pasteAfter, pasteBefore) {
                        this.structure = structure;
                        this.paste = paste;
                        this.pasteAfter = pasteAfter;
                        this.pasteBefore = pasteBefore;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureTreeItem$9.prototype.performAction = function (source, evt) {
                        evt.preventDefault();
                        var e = evt;
                        if (this.structure.getClipBoard() == null) {
                            this.paste.getParent().setVisible(false);
                            this.pasteAfter.getParent().setVisible(false);
                            this.pasteBefore.getParent().setVisible(false);
                        }
                        else {
                            this.paste.getParent().setVisible(true);
                            this.pasteAfter.getParent().setVisible(true);
                            this.pasteBefore.getParent().setVisible(true);
                        }
                        this.__parent.dropdown.setVisible(true);
                        this.__parent.dropdown.setStyle("left", (e.clientX + 80) + "px");
                        this.__parent.dropdown.setStyle("top", (e.clientY - 80) + "px");
                    };
                    return StructureTreeItem$9;
                }());
                StructureTreeItem.StructureTreeItem$9 = StructureTreeItem$9;
                StructureTreeItem$9["__interfaces"] = ["framework.EventListener"];
            })(StructureTreeItem = editors.StructureTreeItem || (editors.StructureTreeItem = {}));
        })(editors = builder.editors || (builder.editors = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var LightningApplication = (function (_super) {
            __extends(LightningApplication, _super);
            function LightningApplication(name, tag) {
                var _this = _super.call(this, name, tag) || this;
                _this.scope = new Object();
                return _this;
            }
            /**
             *
             * @return {Array}
             */
            LightningApplication.prototype.advancedEventTypes = function () {
                return ["ready"];
            };
            /**
             *
             * @param {framework.rtc.Conference} c
             * @param {HTMLElement} root
             */
            LightningApplication.prototype.postRender = function (c, root) {
                if (((c != null && c instanceof HTMLElement) || c === null) && root === undefined) {
                    return this.postRender$jsweet_dom_HTMLElement(c);
                }
                else
                    throw new Error('invalid overload');
            };
            LightningApplication.prototype.postRender$jsweet_dom_HTMLElement = function (root) {
                _super.prototype.postRender$jsweet_dom_HTMLElement.call(this, root);
                if (!this.isRendered())
                    this.fireListener("ready", new Event("ready"));
            };
            LightningApplication.prototype.exposeAsVariable = function (variableName, item) {
                this.scope[variableName] = item;
            };
            return LightningApplication;
        }(framework.designables.JSDesignableBlockComponent));
        lightning.LightningApplication = LightningApplication;
        LightningApplication["__class"] = "framework.lightning.LightningApplication";
        LightningApplication["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var rtc;
    (function (rtc) {
        var LocalVideoContainer = (function (_super) {
            __extends(LocalVideoContainer, _super);
            function LocalVideoContainer(name) {
                var _this = _super.call(this, name, "#videocontainer") || this;
                /*private*/ _this.video = new framework.JSContainer("video", "video");
                /*private*/ _this.volume = new framework.JSContainer("volume", "meter");
                /*private*/ _this.jsTitle = new framework.JSContainer("title", "h2").addClass("slds-trucate");
                _this.addChild$framework_JSContainer(_this.jsTitle.setHtml("Myself"));
                _this.addClass("video-container");
                _this.addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-open");
                _this.addChild$framework_JSContainer(_this.video);
                _this.addChild$framework_JSContainer(_this.volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40").setAttribute("high", "-25"));
                _this.addRenderer(new framework.interactions.DraggableRenderer());
                return _this;
            }
            LocalVideoContainer.prototype.setVolume = function (volume) {
                if (volume < -45)
                    volume = -45;
                if (volume > -20)
                    volume = -20;
                this.volume.getNative().value = volume + "";
            };
            LocalVideoContainer.prototype.setTitle = function (title) {
                this.jsTitle.setHtml(title);
            };
            LocalVideoContainer.prototype.getVideo = function () {
                return this.video;
            };
            LocalVideoContainer.prototype.getVolume = function () {
                return this.volume;
            };
            /**
             *
             * @return {*}
             */
            LocalVideoContainer.prototype.getDraggableOptions = function () {
                var o = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                o.handle = "#" + this.getId() + " header";
                return o;
            };
            return LocalVideoContainer;
        }(framework.JSHTMLFragment));
        rtc.LocalVideoContainer = LocalVideoContainer;
        LocalVideoContainer["__class"] = "framework.rtc.LocalVideoContainer";
        LocalVideoContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.design.Designable", "framework.Renderable"];
    })(rtc = framework.rtc || (framework.rtc = {}));
})(framework || (framework = {}));
(function (framework) {
    var rtc;
    (function (rtc) {
        var VideoContainer = (function (_super) {
            __extends(VideoContainer, _super);
            function VideoContainer(name) {
                var _this = _super.call(this, name, "#videocontainer") || this;
                /*private*/ _this.volume = new framework.JSContainer("volume", "meter");
                /*private*/ _this.jsTitle = new framework.JSContainer("title", "h2").addClass("slds-trucate");
                /*private*/ _this.minimize = new framework.lightning.IconButton("minimize");
                /*private*/ _this.expand = new framework.lightning.IconButton("expand");
                /*private*/ _this.__close = new framework.lightning.IconButton("close");
                _this.video = null;
                _this.addChild$framework_JSContainer(_this.jsTitle.setHtml("Myself"));
                _this.addChild$framework_JSContainer(_this.minimize);
                _this.addChild$framework_JSContainer(_this.expand);
                _this.addChild$framework_JSContainer(_this.__close);
                _this.minimize.setIcon(new framework.lightning.SvgIcon("", "utility", "minimize_window"));
                _this.__close.setIcon(new framework.lightning.SvgIcon("", "utility", "close"));
                _this.expand.setIcon(new framework.lightning.SvgIcon("", "utility", "expand_alt"));
                _this.expand.setVisible(false);
                _this.minimize.addEventListener(new VideoContainer.VideoContainer$0(_this), "click");
                _this.expand.addEventListener(new VideoContainer.VideoContainer$1(_this), "click");
                _this.__close.addEventListener(new VideoContainer.VideoContainer$2(_this), "click");
                _this.addClass("video-container");
                _this.addClass("slds-docked-composer slds-grid slds-grid_vertical slds-is-closed");
                _this.addChild$framework_JSContainer(_this.volume.setAttribute("min", "-40").setAttribute("max", "-20").setAttribute("low", "-40").setAttribute("high", "-25"));
                _this.addRenderer(new framework.interactions.DraggableRenderer());
                return _this;
            }
            VideoContainer.prototype.close = function () {
                this.removeClass("slds-is-open");
                this.addClass("slds-is-closed");
            };
            VideoContainer.prototype.open = function () {
                this.addClass("slds-is-open");
                this.removeClass("slds-is-closed");
            };
            VideoContainer.prototype.setTitle = function (title) {
                this.jsTitle.setHtml(title);
            };
            VideoContainer.prototype.setVolume = function (volume) {
                if (volume < -45)
                    volume = -45;
                if (volume > -20)
                    volume = -20;
                this.volume.getNative().value = volume + "";
            };
            VideoContainer.prototype.setVideo = function (video) {
                if (this.video != null) {
                    $(this.getNative()).find("video").replaceWith(video);
                }
                else {
                    $(this.getNative()).find("*[name=video]").replaceWith(video);
                }
                this.video = video;
                this.open();
            };
            VideoContainer.prototype.getVolume = function () {
                return this.volume;
            };
            /**
             *
             * @return {*}
             */
            VideoContainer.prototype.getDraggableOptions = function () {
                var o = Object.defineProperty({}, '__interfaces', { configurable: true, value: ["def.jqueryui.jqueryui.DraggableOptions", "def.jqueryui.jqueryui.DraggableEvents"] });
                o.handle = "#" + this.getId() + " header";
                return null;
            };
            return VideoContainer;
        }(framework.JSHTMLFragment));
        rtc.VideoContainer = VideoContainer;
        VideoContainer["__class"] = "framework.rtc.VideoContainer";
        VideoContainer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.design.Designable", "framework.Renderable"];
        (function (VideoContainer) {
            var VideoContainer$0 = (function () {
                function VideoContainer$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                VideoContainer$0.prototype.performAction = function (source, evt) {
                    this.__parent.close();
                    this.__parent.expand.setVisible(true);
                    this.__parent.minimize.setVisible(false);
                };
                return VideoContainer$0;
            }());
            VideoContainer.VideoContainer$0 = VideoContainer$0;
            VideoContainer$0["__interfaces"] = ["framework.EventListener"];
            var VideoContainer$1 = (function () {
                function VideoContainer$1(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                VideoContainer$1.prototype.performAction = function (source, evt) {
                    this.__parent.open();
                    this.__parent.expand.setVisible(false);
                    this.__parent.minimize.setVisible(true);
                };
                return VideoContainer$1;
            }());
            VideoContainer.VideoContainer$1 = VideoContainer$1;
            VideoContainer$1["__interfaces"] = ["framework.EventListener"];
            var VideoContainer$2 = (function () {
                function VideoContainer$2(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                VideoContainer$2.prototype.performAction = function (source, evt) {
                };
                return VideoContainer$2;
            }());
            VideoContainer.VideoContainer$2 = VideoContainer$2;
            VideoContainer$2["__interfaces"] = ["framework.EventListener"];
        })(VideoContainer = rtc.VideoContainer || (rtc.VideoContainer = {}));
    })(rtc = framework.rtc || (framework.rtc = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var SingleOptionAttributeEditor = (function (_super) {
                __extends(SingleOptionAttributeEditor, _super);
                function SingleOptionAttributeEditor() {
                    return _super.call(this, "attribute") || this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                SingleOptionAttributeEditor.prototype.initEditor = function (designable, parameter) {
                    var attr = parameter.name;
                    var value = designable.getAttribute(attr);
                    if (value != null) {
                        this.setValue$java_lang_Boolean(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("true", value));
                    }
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                SingleOptionAttributeEditor.prototype.performAction = function (source, evt) {
                    var attr = this.parameter.name;
                    var value = this.getValue();
                    if (value != null) {
                        this.designable.setAttribute(attr, value.toString());
                        this.designable.applyParam(attr, value.toString());
                        this.designable.setRendered(false);
                        var veditor = (this.getAncestorWithClass("visual-editor"));
                        veditor.dirty();
                    }
                };
                return SingleOptionAttributeEditor;
            }(framework.builder.properties.AbstractCheckBoxPropertyEditor));
            properties.SingleOptionAttributeEditor = SingleOptionAttributeEditor;
            SingleOptionAttributeEditor["__class"] = "framework.builder.properties.SingleOptionAttributeEditor";
            SingleOptionAttributeEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
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
                    this.designable.applyParam(attr, value);
                    this.designable.setRendered(false);
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
            var InputWithSelectorEditor = (function (_super) {
                __extends(InputWithSelectorEditor, _super);
                function InputWithSelectorEditor(name, modal) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.icon = null;
                    _this.modal = null;
                    _this.selectedItem = null;
                    _this.modal = modal;
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                InputWithSelectorEditor.prototype.initEditor = function (designable, parameter) {
                    if (this.icon == null) {
                        this.icon = new framework.lightning.IconButton("icon");
                        this.getParent().addChild$framework_JSContainer(this.icon.addClass("input-icon"));
                        this.getParent().addChild$framework_JSContainer(this.modal);
                        this.icon.addEventListener(new InputWithSelectorEditor.InputWithSelectorEditor$0(this), "click");
                        this.modal.addOnItemSeletedListener(new InputWithSelectorEditor.InputWithSelectorEditor$1(this));
                    }
                };
                return InputWithSelectorEditor;
            }(framework.builder.properties.AbstractInputPropertyEditor));
            properties.InputWithSelectorEditor = InputWithSelectorEditor;
            InputWithSelectorEditor["__class"] = "framework.builder.properties.InputWithSelectorEditor";
            InputWithSelectorEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
            (function (InputWithSelectorEditor) {
                var InputWithSelectorEditor$0 = (function () {
                    function InputWithSelectorEditor$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    InputWithSelectorEditor$0.prototype.performAction = function (source, evt) {
                        this.__parent.modal.open();
                    };
                    return InputWithSelectorEditor$0;
                }());
                InputWithSelectorEditor.InputWithSelectorEditor$0 = InputWithSelectorEditor$0;
                InputWithSelectorEditor$0["__interfaces"] = ["framework.EventListener"];
                var InputWithSelectorEditor$1 = (function () {
                    function InputWithSelectorEditor$1(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} item
                     */
                    InputWithSelectorEditor$1.prototype.onItemSelected = function (item) {
                        this.__parent.selectedItem = item;
                    };
                    return InputWithSelectorEditor$1;
                }());
                InputWithSelectorEditor.InputWithSelectorEditor$1 = InputWithSelectorEditor$1;
                InputWithSelectorEditor$1["__interfaces"] = ["framework.builder.properties.ItemSelectedListener"];
            })(InputWithSelectorEditor = properties.InputWithSelectorEditor || (properties.InputWithSelectorEditor = {}));
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
                    this.designable.applyParam("name", name);
                    this.designable.setName(name);
                    var editor = (this.getAncestorWithClass("visual-editor"));
                    editor.getStructure().reload$framework_design_Designable(this.designable);
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
                    this.designable.applyParam("text", text);
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
            var AttributeWithOptionsEditor = (function (_super) {
                __extends(AttributeWithOptionsEditor, _super);
                function AttributeWithOptionsEditor() {
                    return _super.call(this, "attribute") || this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                AttributeWithOptionsEditor.prototype.initEditor = function (designable, parameter) {
                    var attr = parameter.name;
                    var value = designable.getAttribute(attr);
                    this.clearChildren();
                    this.setRendered(false);
                    for (var index6588 = 0; index6588 < parameter.options.length; index6588++) {
                        var opt = parameter.options[index6588];
                        {
                            this.addOption(new framework.JSOption(opt.text, opt.value));
                        }
                    }
                    this.setValue$java_lang_Object(value);
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                AttributeWithOptionsEditor.prototype.performAction = function (source, evt) {
                    var attr = this.parameter.name;
                    var value = this.getValue();
                    this.designable.setAttribute(attr, value);
                    this.designable.applyParam(attr, value);
                    this.designable.setRendered(false);
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
                };
                return AttributeWithOptionsEditor;
            }(framework.builder.properties.AbstractSelectPropertyEditor));
            properties.AttributeWithOptionsEditor = AttributeWithOptionsEditor;
            AttributeWithOptionsEditor["__class"] = "framework.builder.properties.AttributeWithOptionsEditor";
            AttributeWithOptionsEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var TagEditor = (function (_super) {
                __extends(TagEditor, _super);
                function TagEditor(name) {
                    return _super.call(this, name) || this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {framework.design.Parameter} parameter
                 */
                TagEditor.prototype.initEditor = function (designable, parameter) {
                    this.designable = designable;
                    this.setValue$java_lang_Object(designable.getTag());
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                TagEditor.prototype.performAction = function (source, evt) {
                    this.designable.applyParam("tag", this.getValue());
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
                };
                return TagEditor;
            }(framework.builder.properties.AbstractSelectPropertyEditor));
            properties.TagEditor = TagEditor;
            TagEditor["__class"] = "framework.builder.properties.TagEditor";
            TagEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.builder.properties.PropertyEditor", "framework.EventListener", "framework.Renderable", "framework.InputField"];
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
                function CSSEditor(name, editor) {
                    var _this = _super.call(this, name, editor) || this;
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
                function HTMLEditor(name, editor) {
                    var _this = _super.call(this, name, editor) || this;
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
                function JavascriptEditor(name, editor) {
                    var _this = _super.call(this, name, editor) || this;
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
                    {
                        var array6590 = select.getChildren();
                        for (var index6589 = 0; index6589 < array6590.length; index6589++) {
                            var c = array6590[index6589];
                            {
                                var opt = c;
                                value = value + "\n" + opt.getText();
                            }
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
                    select.clearChildren();
                    select.setRendered(false);
                    for (var index6591 = 0; index6591 < options.length; index6591++) {
                        var opt = options[index6591];
                        {
                            var option = new framework.JSOption(opt, opt);
                            select.addOption(option);
                        }
                    }
                    var veditor = (this.getAncestorWithClass("visual-editor"));
                    veditor.dirty();
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
    var lightning;
    (function (lightning) {
        var FormElement = (function (_super) {
            __extends(FormElement, _super);
            function FormElement(name, tag) {
                var _this = _super.call(this, name) || this;
                _this.label = new framework.JSContainer("label", "label").addClass("slds-form-element__label");
                /*private*/ _this.control = new framework.JSContainer("div").addClass("slds-form-element__control");
                _this.addClass("slds-form-element");
                _this.addChild$framework_JSContainer(_this.label);
                _this.addChild$framework_JSContainer(_this.control);
                _this.setAttribute("sections", "12");
                _this.setAttribute("span", "12");
                _this.refreshCls();
                return _this;
            }
            FormElement.prototype.setLabel = function (label) {
                this.label.setHtml(label);
                return this;
            };
            FormElement.prototype.setInput = function (input) {
                this.control.clearChildren();
                this.control.setRendered(false);
                this.control.addChild$framework_JSContainer(input);
                return this;
            };
            FormElement.prototype.getInput = function () {
                return this.control.getChildren()[0];
            };
            FormElement.prototype.getControl = function () {
                return this.control;
            };
            return FormElement;
        }(framework.lightning.Col));
        lightning.FormElement = FormElement;
        FormElement["__class"] = "framework.lightning.FormElement";
        FormElement["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableDataProvider = (function (_super) {
            __extends(JSDesignableDataProvider, _super);
            function JSDesignableDataProvider(name) {
                var _this = _super.call(this, name) || this;
                _this.delegate = new framework.designables.DesignableDelegate(_this);
                return _this;
            }
            /**
             *
             * @return {Array}
             */
            JSDesignableDataProvider.prototype.advancedEventTypes = function () {
                return ["success", "error"];
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableDataProvider.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, false);
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableDataProvider.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableDataProvider.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableDataProvider.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableDataProvider.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableDataProvider.prototype.moveDesignable = function (designable, steps) {
            };
            return JSDesignableDataProvider;
        }(framework.lightning.DescriptionList));
        designables.JSDesignableDataProvider = JSDesignableDataProvider;
        JSDesignableDataProvider["__class"] = "framework.designables.JSDesignableDataProvider";
        JSDesignableDataProvider["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
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
                for (var index6592 = 0; index6592 < components.length; index6592++) {
                    var com = components[index6592];
                    {
                        var li = new framework.JSContainer("li").addClass("slds-p-horizontal_small slds-size_1-of-2");
                        this.addChild$framework_JSContainer(li);
                        li.addChild$framework_JSContainer(com);
                    }
                }
                return this;
            };
            ComponentsLibrary.prototype.clearComponent = function () {
                this.clearChildren();
                this.setRendered(false);
            };
            return ComponentsLibrary;
        }(framework.lightning.Grid));
        builder.ComponentsLibrary = ComponentsLibrary;
        ComponentsLibrary["__class"] = "framework.builder.ComponentsLibrary";
        ComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var properties;
        (function (properties) {
            var KeyValueEditor = (function (_super) {
                __extends(KeyValueEditor, _super);
                function KeyValueEditor(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.indexCol = new framework.lightning.Col("indexCol");
                    /*private*/ _this.keyCol = new framework.lightning.Col("keyCol");
                    /*private*/ _this.valueCol = new framework.lightning.Col("valueCol");
                    _this.data = new Object();
                    _this.tabLabel = "Custom";
                    /*private*/ _this.index = 0;
                    _this.designable = null;
                    _this.addClass("key-value-editor");
                    _this.setWrap(true);
                    _this.addChild$framework_JSContainer(_this.indexCol.addClass("header"));
                    _this.addChild$framework_JSContainer(_this.keyCol.addClass("header"));
                    _this.addChild$framework_JSContainer(_this.valueCol.addClass("header"));
                    _this.keyCol.setSections("12");
                    _this.indexCol.setSpan("1");
                    _this.keyCol.setSections("12");
                    _this.keyCol.setSpan("5");
                    _this.valueCol.setSections("12");
                    _this.valueCol.setSpan("6");
                    _this.keyCol.setHtml("Key");
                    _this.valueCol.setHtml("Value");
                    for (var i = 0; i < 11; i++)
                        _this.addEmptyRow();
                    return _this;
                }
                KeyValueEditor.prototype.setKeyLabel = function (label) {
                    this.keyCol.setHtml(label);
                };
                KeyValueEditor.prototype.setValueLabel = function (label) {
                    this.valueCol.setHtml(label);
                };
                /*private*/ KeyValueEditor.prototype.addEmptyRow = function () {
                    var rows = this.getChildren().length / 3;
                    var index = new framework.lightning.Col("index");
                    index.setAttribute("index", rows + "");
                    index.setSections("12");
                    index.setSpan("1");
                    index.addClass("header");
                    var key = new framework.lightning.Col("key");
                    key.setAttribute("contentEditable", "true");
                    key.setAttribute("index", rows + "");
                    var value = new framework.lightning.Col("value");
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
                };
                KeyValueEditor.prototype.save = function (index) {
                    var _this = this;
                    this.iterate(function (t) {
                        var key = t[0].getNative().innerHTML;
                        var value = t[1].getNative().innerHTML;
                        t[0].setHtml(key);
                        t[1].setHtml(value);
                        t[0].setRendered(true);
                        t[1].setRendered(true);
                        if (key != null && key.trim().length > 0)
                            _this.data[key] = value;
                    });
                    this.applyDataOnDesignable(this.designable, this.data);
                };
                KeyValueEditor.prototype.clearGrid = function () {
                    this.data = new Object();
                    this.iterate(function (t) {
                        t[0].setHtml("");
                        t[1].setHtml("");
                    });
                };
                KeyValueEditor.prototype.setValue = function (o) {
                    var _this = this;
                    var keys = Object.keys(o);
                    this.iterate((function (keys) {
                        return function (t) {
                            if (_this.index < keys.length) {
                                t[0].setHtml(keys[_this.index]);
                                t[1].setHtml(o[keys[_this.index]]);
                            }
                        };
                    })(keys));
                };
                KeyValueEditor.prototype.iterate = function (f) {
                    var children = this.getChildren();
                    this.index = 0;
                    var _loop_1 = function (i) {
                        (function (target) { return (typeof target === 'function') ? target([children[i + 1], children[i + 2]]) : target.accept([children[i + 1], children[i + 2]]); })(f);
                        this_1.index++;
                    };
                    var this_1 = this;
                    for (var i = 3; i < children.length; i = i + 3) {
                        _loop_1(i);
                    }
                    ;
                    this.index = 0;
                };
                /**
                 *
                 * @param {*} designable
                 */
                KeyValueEditor.prototype.setComponent = function (designable) {
                    this.designable = designable;
                    this.clearGrid();
                    this.data = this.getDataFromDesignable(designable);
                    if (this.data == null) {
                        this.data = new Object();
                    }
                    this.setValue(this.data);
                    this.setRendered(false);
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                KeyValueEditor.prototype.performAction = function (source, evt) {
                    var index = parseInt(source.getAttribute("index"));
                    this.save(index - 1);
                };
                KeyValueEditor.prototype.setTabLabel = function (s) {
                    this.tabLabel = s;
                };
                /**
                 *
                 * @param {*} me
                 * @return {string}
                 */
                KeyValueEditor.prototype.getLabel = function (me) {
                    return this.tabLabel;
                };
                return KeyValueEditor;
            }(framework.lightning.Grid));
            properties.KeyValueEditor = KeyValueEditor;
            KeyValueEditor["__class"] = "framework.builder.properties.KeyValueEditor";
            KeyValueEditor["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
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
        var designables;
        (function (designables) {
            var JSDesignableLightningGrid = (function (_super) {
                __extends(JSDesignableLightningGrid, _super);
                function JSDesignableLightningGrid(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                    return _this;
                }
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableLightningGrid.prototype.applyParam = function (key, value) {
                    this.delegate.applyParameter(key, value, true);
                    var b = (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "align")) {
                        _super.prototype.setAlignCenter.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "alignCenter"));
                        _super.prototype.setAlignEnd.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "alignEnd"));
                        _super.prototype.setAlignSpace.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "alignSpace"));
                        _super.prototype.setAlignSpread.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "alignSpread"));
                        _super.prototype.setReverse.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "reverse"));
                    }
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "frame"))
                        _super.prototype.setFrame.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "pullPaddedSize"))
                        _super.prototype.setPullPaddedSize.call(this, value);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "absoluteCenter"))
                        _super.prototype.setAbsoluteCenter.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "borderBottom"))
                        _super.prototype.setBorderBottom.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "borderLeft"))
                        _super.prototype.setBorderLeft.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "borderRight"))
                        _super.prototype.setBorderRight.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "borderTop"))
                        _super.prototype.setBorderTop.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "float"))
                        _super.prototype.setFloat.call(this, value);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "grow"))
                        _super.prototype.setGrow.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "scrollableX"))
                        _super.prototype.setScrollableX.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "scrollableY"))
                        _super.prototype.setScrollableY.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "vertical"))
                        _super.prototype.setVertical.call(this, b);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "valign")) {
                        _super.prototype.setVerticalAlignCenter.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "verticalAlignCenter"));
                        _super.prototype.setVerticalAlignEnd.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "verticalAlignEnd"));
                        _super.prototype.setVerticalAlignStart.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "verticalAlignStart"));
                        _super.prototype.setVerticalReverse.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "verticalReverse"));
                        _super.prototype.setVerticalStretch.call(this, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "verticalStretch"));
                    }
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "wrap"))
                        _super.prototype.setWrap.call(this, b);
                };
                /**
                 *
                 * @return {*[]}
                 */
                JSDesignableLightningGrid.prototype.getDesignables = function () {
                    var children = this.getChildren();
                    return children;
                };
                /**
                 *
                 * @return {framework.builder.marshalling.Component}
                 */
                JSDesignableLightningGrid.prototype.getComponent = function () {
                    return this.delegate.getComponent();
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableLightningGrid.prototype.getParameters = function () {
                    var parameters = this.delegate.getParameters();
                    var align = new framework.design.AttributeParameter("align", "Align", "Advanced");
                    align.options.push(new framework.design.Option("None", "alignNone"));
                    align.options.push(new framework.design.Option("Center", "alignCenter"));
                    align.options.push(new framework.design.Option("End", "alignEnd"));
                    align.options.push(new framework.design.Option("Space", "alignSpace"));
                    align.options.push(new framework.design.Option("Spread", "alignSpread"));
                    align.options.push(new framework.design.Option("Reverse", "reverse"));
                    parameters.push(align);
                    var valign = new framework.design.AttributeParameter("valign", "Vertical Align", "Advanced");
                    valign.options.push(new framework.design.Option("None", "alignNone"));
                    valign.options.push(new framework.design.Option("Center", "verticalAlignCenter"));
                    valign.options.push(new framework.design.Option("End", "verticalAlignEnd"));
                    valign.options.push(new framework.design.Option("Start", "verticalAlignStart"));
                    valign.options.push(new framework.design.Option("Stretch", "verticalAlignStretch"));
                    valign.options.push(new framework.design.Option("Reverse", "verticalReverse"));
                    parameters.push(valign);
                    var labels = ["Frame", "Absolute Center", "Border Bottom", "Border Left", "Border Right", "Border Top", "Grow", "Scrollable X", "Scrollable Y", "Wrap"];
                    var keys = ["frame", "absoluteCenter", "borderBottom", "borderLeft", "borderRight", "borderTop", "grow", "scrollableX", "scrollableY", "wrap"];
                    for (var i = 0; i < labels.length; i++) {
                        var basic = (function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(labels[i], "Border") || (function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(labels[i], "Scrollable");
                        var parameter = new framework.design.AttributeParameter(keys[i], labels[i], basic ? "Basic" : "Advanced");
                        parameters.push(parameter);
                    }
                    ;
                    var pullPaddedSize = new framework.design.AttributeParameter("pullPaddedSize", "Pull Padded Size", "Advanced");
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
                    var flt = new framework.design.AttributeParameter("float", "Float", "Advanced");
                    flt.options.push(new framework.design.Option("None", framework.lightning.Grid.FLOAT_NONE));
                    flt.options.push(new framework.design.Option("Left", framework.lightning.Grid.FLOAT_LEFT));
                    flt.options.push(new framework.design.Option("Right", framework.lightning.Grid.FLOAT_RIGHT));
                    parameters.push(flt);
                    return parameters;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableLightningGrid.prototype.addDesignable = function (designable) {
                    this.addChild$framework_JSContainer(designable);
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableLightningGrid.prototype.removeDesignable = function (designable) {
                    this.delegate.removeDesignable(designable);
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableLightningGrid.prototype.moveDesignable = function (designable, steps) {
                    this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
                };
                return JSDesignableLightningGrid;
            }(framework.lightning.Grid));
            designables.JSDesignableLightningGrid = JSDesignableLightningGrid;
            JSDesignableLightningGrid["__class"] = "framework.lightning.designables.JSDesignableLightningGrid";
            JSDesignableLightningGrid["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
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
                /*private*/ _this.headerIcon = new framework.lightning.SvgIcon("headerIcon").setSize(framework.lightning.SvgIcon.EXTRA_SMALL).setTextType(framework.lightning.SvgIcon.TEXT_DEFAULT);
                /*private*/ _this.title = new framework.lightning.Text("title", "h2").setTruncate(true);
                /*private*/ _this.tools = new framework.JSContainer("div").addClass("slds-col_bump-left slds-shrink-none");
                _this.minimize = new framework.lightning.IconButton("minimize");
                /*private*/ _this.expand = new framework.lightning.IconButton("expand");
                /*private*/ _this.close = new framework.lightning.IconButton("close");
                /*private*/ _this.body = new framework.JSContainer("div").addClass("slds-docked-composer__body");
                /*private*/ _this.footer = new framework.JSContainer("footer").addClass("slds-docked-composer__footer slds-shrink-none");
                _this.closed = false;
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
                _this.expand.getIcon().setIconName("expand_alt");
                _this.minimize.getIcon().setIconName("minimize_window");
                _this.close.getIcon().setIconName("close");
                _this.close.setVisible(false);
                _this.expand.setVisible(false);
                _this.addChild$framework_JSContainer(_this.body);
                _this.addChild$framework_JSContainer(_this.footer);
                _this.addClass("slds-docked-composer");
                _this.addRenderer(new framework.interactions.DraggableRenderer());
                _this.minimize.addEventListener(new DockedComposer.DockedComposer$0(_this), "click");
                return _this;
            }
            DockedComposer.prototype.toggle = function () {
                if (this.closed) {
                    this.setOpen(true);
                }
                else {
                    this.setClosed(true);
                }
                return this;
            };
            DockedComposer.prototype.setOpen = function (b) {
                this.closed = !b;
                this.toggleClass("slds-is-open", b);
                this.toggleClass("slds-is-closed", !b);
                if (b) {
                    this.body.removeClass("slds-hide");
                    this.minimize.getIcon().setIconName("minimize_window");
                }
                else {
                    this.body.addClass("slds-hide");
                    this.minimize.getIcon().setIconName("erect_window");
                }
                return this;
            };
            DockedComposer.prototype.setClosed = function (b) {
                this.closed = b;
                this.toggleClass("slds-is-closed", b);
                this.toggleClass("slds-is-open", !b);
                if (!b) {
                    this.body.removeClass("slds-hide");
                    this.minimize.getIcon().setIconName("minimize_window");
                }
                else {
                    this.body.addClass("slds-hide");
                    this.minimize.getIcon().setIconName("erect_window");
                }
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
        (function (DockedComposer) {
            var DockedComposer$0 = (function () {
                function DockedComposer$0(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                DockedComposer$0.prototype.performAction = function (source, evt) {
                    this.__parent.toggle();
                };
                return DockedComposer$0;
            }());
            DockedComposer.DockedComposer$0 = DockedComposer$0;
            DockedComposer$0["__interfaces"] = ["framework.EventListener"];
        })(DockedComposer = lightning.DockedComposer || (lightning.DockedComposer = {}));
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
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setNoWrap(true).setVertical(true);
                _this.addClass("slds-panel");
                return _this;
            }
            Panel.prototype.addSection = function (section) {
                this.addChild$framework_JSContainer(section);
                return this;
            };
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            Panel.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
            };
            /**
             *
             * @return {*[]}
             */
            Panel.prototype.getDesignables = function () {
                var children = this.getChildren();
                return children;
            };
            /**
             *
             * @param {framework.lightning.table.Table} table
             * @param {*} value
             * @param {number} row
             * @param {number} column
             * @return {*}
             */
            Panel.prototype.getComponent = function (table, value, row, column) {
                if (table === undefined && value === undefined && row === undefined && column === undefined) {
                    return this.getComponent$();
                }
                else
                    throw new Error('invalid overload');
            };
            Panel.prototype.getComponent$ = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            Panel.prototype.getParameters = function () {
                return this.delegate.getParameters();
            };
            /**
             *
             * @param {*} designable
             */
            Panel.prototype.addDesignable = function (designable) {
                if (designable != null && designable instanceof framework.lightning.PanelSection) {
                    this.addChild$framework_JSContainer(designable);
                }
                else {
                    var section = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("lgt:panel-section").build(new framework.builder.marshalling.Component(), false);
                    this.addChild$framework_JSContainer(section);
                    section.addChild$framework_JSContainer(designable);
                }
            };
            /**
             *
             * @param {*} designable
             */
            Panel.prototype.removeDesignable = function (designable) {
                this.removeChild(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            Panel.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            return Panel;
        }(framework.lightning.Grid));
        lightning.Panel = Panel;
        Panel["__class"] = "framework.lightning.Panel";
        Panel["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
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
                /*private*/ _this.html = new framework.builder.UIFile("templates").setAbbr("HTM").setTitle("HTML template").setHelp("Create a fragment of HTML that can be used as template for other components");
                /*private*/ _this.css = new framework.builder.UIFile("stylesheets").setAbbr("CSS").setTitle("CSS sheet").setHelp("Create an cascading stylesheet to be included in project");
                /*private*/ _this.javascript = new framework.builder.UIFile("scripts").setAbbr("JS").setTitle("Javascript file").setHelp("Create a new javascript file to be included in project");
                /*private*/ _this.data = new framework.builder.UIFile("datasources").setAbbr("DAT").setTitle("Data Source").setHelp("Creates a new data source to be included inn the project");
                /*private*/ _this.fileType = null;
                _this.builder = null;
                _this.structure = null;
                _this.builder = builder_;
                _this.getFilesList().addItemSelectedListener(new NewFile.NewFile$0(_this));
                _this.getSaveButton().addEventListener(new NewFile.NewFile$1(_this), "click");
                return _this;
            }
            NewFile.prototype.click = function () {
                if (this.fileType == null) {
                    alert("Please select a file type");
                    return;
                }
                var name = this.getInput().getValue();
                if (name == null || name.trim().length <= 0) {
                    alert("Please enter a name for the file");
                    return;
                }
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.fileType, "lightning")) {
                    this.createLightning(name);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.fileType, "mobile")) {
                }
                else {
                    this.createFile(name, this.fileType);
                }
            };
            NewFile.prototype.init = function (structure) {
                this.getInput().setValue$java_lang_String("");
                this.getInput().addEventListener(new NewFile.NewFile$2(this), "keypress");
                this.structure = structure;
                this.getFilesList().clearChildren();
                this.getFilesList().addFile(this.lightning);
                this.getFilesList().addFile(this.mobile);
                if (!this.builder.isProjectOpen()) {
                }
                else {
                    this.getFilesList().addFile(this.html);
                    this.getFilesList().addFile(this.css);
                    this.getFilesList().addFile(this.javascript);
                    this.getFilesList().addFile(this.data);
                }
                this.getFilesList().setRendered(false);
            };
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
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "components")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".cmp")) {
                        name = name + ".cmp";
                    }
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "datasources")) {
                    if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".ds")) {
                        name = name + ".ds";
                    }
                }
                var project = this.builder.getProject();
                project.createFile$framework_JSContainer$java_lang_String$java_lang_String$framework_builder_data_RemoteDataListener(this, name, type, new NewFile.NewFile$3(this, type));
            };
            NewFile.prototype.createLightning = function (name) {
                if (!(function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, ".prj")) {
                    name = name + ".prj";
                }
                framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").createProject(this, name, name, new NewFile.NewFile$4(this));
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
                 * @param {framework.builder.UIFile} file
                 * @param {framework.builder.ItemSelector} selector
                 */
                NewFile$0.prototype.itemSelected = function (file, selector) {
                    this.__parent.fileType = file.getName();
                };
                return NewFile$0;
            }());
            NewFile.NewFile$0 = NewFile$0;
            NewFile$0["__interfaces"] = ["framework.builder.ItemSelectedListener"];
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
                    this.__parent.click();
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
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                NewFile$2.prototype.performAction = function (source, evt) {
                    var kevt = evt;
                    if (kevt.keyCode === 13 || kevt.which === 13) {
                        this.__parent.click();
                    }
                };
                return NewFile$2;
            }());
            NewFile.NewFile$2 = NewFile$2;
            NewFile$2["__interfaces"] = ["framework.EventListener"];
            var NewFile$3 = (function () {
                function NewFile$3(__parent, type) {
                    this.type = type;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.builder.data.DataField[]} data_
                 */
                NewFile$3.prototype.dataLoaded = function (data_) {
                    if (((data_ != null) || data_ === null)) {
                        return this.dataLoaded$java_lang_Object(data_);
                    }
                    else
                        throw new Error('invalid overload');
                };
                NewFile$3.prototype.dataLoaded$java_lang_Object = function (data) {
                    this.__parent.close();
                    this.__parent.render();
                    this.__parent.getBackdrop().render();
                    if (this.__parent.structure != null) {
                        this.__parent.structure.reload$java_lang_String(this.type);
                        this.__parent.structure.render();
                    }
                };
                return NewFile$3;
            }());
            NewFile.NewFile$3 = NewFile$3;
            NewFile$3["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            var NewFile$4 = (function () {
                function NewFile$4(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {framework.builder.data.DataField[]} data_
                 */
                NewFile$4.prototype.dataLoaded = function (data_) {
                    if (((data_ != null) || data_ === null)) {
                        return this.dataLoaded$java_lang_Object(data_);
                    }
                    else
                        throw new Error('invalid overload');
                };
                NewFile$4.prototype.dataLoaded$java_lang_Object = function (data) {
                    var project = new framework.builder.data.File(new Object(data));
                    this.__parent.close();
                    this.__parent.render();
                    this.__parent.getBackdrop().render();
                    this.__parent.builder.openProject(project);
                    this.__parent.builder.render();
                };
                return NewFile$4;
            }());
            NewFile.NewFile$4 = NewFile$4;
            NewFile$4["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
        })(NewFile = builder.NewFile || (builder.NewFile = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder_3) {
        var OpenProject = (function (_super) {
            __extends(OpenProject, _super);
            function OpenProject(name, builder) {
                var _this = _super.call(this, name, "Open Project") || this;
                /*private*/ _this.selectedItem = null;
                _this.builder_ = null;
                _this.builder_ = builder;
                _this.getSaveButton().addEventListener(_this, "click");
                _this.getInput().setVisible(false);
                _this.getSaveButton().setLabel("Open");
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
             * @param {framework.builder.data.DataField[]} data_
             */
            OpenProject.prototype.dataLoaded = function (data_) {
                if (((data_ != null) || data_ === null)) {
                    return this.dataLoaded$java_lang_Object(data_);
                }
                else
                    throw new Error('invalid overload');
            };
            OpenProject.prototype.dataLoaded$java_lang_Object = function (data) {
                var nprojects = data;
                for (var index6593 = 0; index6593 < nprojects.length; index6593++) {
                    var p = nprojects[index6593];
                    {
                        var project = new framework.builder.data.File(p);
                        var file = new framework.builder.UIFile(project.getName());
                        file.setTitle(project.getTitle());
                        file.setAbbr("LGT");
                        file.setData$java_lang_Object(project);
                        file.addEventListener(this, "click");
                        this.getFilesList().addFile(file);
                    }
                }
                this.render();
            };
            OpenProject.prototype.init = function () {
                this.getFilesList().clearChildren();
                this.getFilesList().setRendered(false);
                framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.data.ProjectService").getProjects(this, this);
            };
            return OpenProject;
        }(framework.builder.ItemSelector));
        builder_3.OpenProject = OpenProject;
        OpenProject["__class"] = "framework.builder.OpenProject";
        OpenProject["__interfaces"] = ["framework.interactions.Droppable", "framework.EventListener", "framework.builder.data.RemoteDataListener", "framework.Renderable"];
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data_8) {
            var FieldSelector = (function (_super) {
                __extends(FieldSelector, _super);
                function FieldSelector(name, structure) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.labels = ["Name", "Label", "Type"];
                    /*private*/ _this.fields = ["name", "label", "type"];
                    for (var i = 0; i < _this.labels.length; i++) {
                        var col = new framework.lightning.table.TableColumn(_this.fields[i], _this.fields[i], _this.labels[i]);
                        _this.addColumn(col);
                    }
                    ;
                    var actions = new framework.lightning.table.TableColumn("actions", "actins", " ");
                    actions.setWidth("20px");
                    structure.getFields(_this, new FieldSelector.FieldSelector$0(_this));
                    return _this;
                }
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {boolean}
                 */
                FieldSelector.prototype.isActionColumn = function (table, value, row, column) {
                    return column === this.labels.length;
                };
                return FieldSelector;
            }(framework.builder.properties.ItemSelector));
            data_8.FieldSelector = FieldSelector;
            FieldSelector["__class"] = "framework.builder.data.FieldSelector";
            FieldSelector["__interfaces"] = ["framework.interactions.Droppable", "framework.lightning.table.TableCellRenderer", "framework.Renderable"];
            (function (FieldSelector) {
                var FieldSelector$0 = (function () {
                    function FieldSelector$0(__parent) {
                        this.__parent = __parent;
                    }
                    FieldSelector$0.prototype.dataLoaded$jsweet_lang_Array = function (data) {
                        this.__parent.setDataList(data);
                    };
                    /**
                     *
                     * @param {framework.builder.data.DataField[]} data
                     */
                    FieldSelector$0.prototype.dataLoaded = function (data) {
                        if (((data != null && data instanceof Array) || data === null)) {
                            return this.dataLoaded$jsweet_lang_Array(data);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    return FieldSelector$0;
                }());
                FieldSelector.FieldSelector$0 = FieldSelector$0;
                FieldSelector$0["__interfaces"] = ["framework.builder.data.RemoteDataListener"];
            })(FieldSelector = data_8.FieldSelector || (data_8.FieldSelector = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableButton = (function (_super) {
            __extends(JSDesignableButton, _super);
            function JSDesignableButton(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.applyParam("state", framework.lightning.Button.STATE_NEUTRAL);
                _this.applyParam("showIcon", "false");
                _this.applyParam("label", "Button");
                _this.applyParam("position", "left");
                _this.applyParam("iconName", "user");
                _this.applyParam("iconType", "utility");
                return _this;
            }
            JSDesignableButton.stateLabels_$LI$ = function () { if (JSDesignableButton.stateLabels == null)
                JSDesignableButton.stateLabels = ["Neutral", "Brand", "Destructive", "Success", "Reset"]; return JSDesignableButton.stateLabels; };
            ;
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableButton.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                this.setAttribute(key, value);
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "label")) {
                    this.setLabel(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "statefull")) {
                    this.setStateful(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "ldisabled")) {
                    this.setDisabled(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "inverse")) {
                    this.setInverse(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "state")) {
                    this.setState(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "showIcon")) {
                    this.setShowIcon(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "iconName")) {
                    this.setIconName(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "iconType")) {
                    this.setType(value);
                }
                else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "iconPosition")) {
                    this.setIconPosition(value);
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableButton.prototype.getDesignables = function () {
                return (new Array());
            };
            JSDesignableButton.prototype.getParameters = function () {
                var result = this.delegate.getParameters();
                result.push(this.createParameter("label", "Label", "String"));
                result.push(this.createParameter("statefull", "Statefull", "Boolean"));
                result.push(this.createParameter("ldisabled", "Disabled", "Boolean"));
                result.push(this.createParameter("inverse", "Inverse", "Boolean"));
                var paramstates = this.createParameter("state", "State", "select");
                for (var i = 0; i < JSDesignableButton.stateLabels_$LI$().length; i++) {
                    var opt = new framework.design.Option();
                    opt.text = JSDesignableButton.stateLabels_$LI$()[i];
                    opt.value = framework.lightning.Button.states_$LI$()[i];
                    paramstates.options.push(opt);
                }
                ;
                var showIcon = new framework.design.AttributeParameter("showIcon", "Show Icon", "Advanced");
                showIcon.options.push(new framework.design.Option("", ""));
                var iconType = new framework.design.AttributeParameter("iconType", "Icon Type", "Advanced");
                var iconName = new framework.design.AttributeParameter("iconName", "Icon Name", "Advanced");
                var iconPosition = new framework.design.AttributeParameter("iconPosition", "Icon Position", "Advanced");
                iconPosition.options.push(new framework.design.Option("Left", "left"));
                iconPosition.options.push(new framework.design.Option("Right", "right"));
                result.push(paramstates, showIcon, iconType, iconName, iconPosition);
                return result;
            };
            /*private*/ JSDesignableButton.prototype.createParameter = function (name, label, type) {
                var p = new framework.design.AttributeParameter(name, label, "Basic");
                p.name = name;
                p.type = type;
                p.label = label;
                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "boolean")) {
                    p.options.push(new framework.design.Option("", ""));
                }
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
                throw new Error("Cannot add children to this component");
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableButton.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableButton.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            return JSDesignableButton;
        }(framework.lightning.Button));
        designables.JSDesignableButton = JSDesignableButton;
        JSDesignableButton["__class"] = "framework.designables.JSDesignableButton";
        JSDesignableButton["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableLink = (function (_super) {
            __extends(JSDesignableLink, _super);
            function JSDesignableLink(name) {
                return _super.call(this, name, "a") || this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableLink.prototype.applyParam = function (key, value) {
                _super.prototype.applyParam.call(this, key, value);
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableLink.prototype.getParameters = function () {
                var parameters = _super.prototype.getParameters.call(this);
                var result = (new Array());
                for (var index6594 = 0; index6594 < parameters.length; index6594++) {
                    var p = parameters[index6594];
                    {
                        if (p != null && p instanceof framework.design.TagParameter) {
                        }
                        else {
                            result.push(p);
                        }
                    }
                }
                result.push(new framework.design.AttributeParameter("href", "Href", "Basic"));
                result.push(new framework.design.AttributeParameter("target", "Target", "Basic"));
                return result;
            };
            return JSDesignableLink;
        }(framework.designables.JSDesignableTextComponent));
        designables.JSDesignableLink = JSDesignableLink;
        JSDesignableLink["__class"] = "framework.designables.JSDesignableLink";
        JSDesignableLink["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableBuilderComponent = (function (_super) {
            __extends(JSDesignableBuilderComponent, _super);
            function JSDesignableBuilderComponent(name) {
                var _this = _super.call(this, name, "div") || this;
                _this.content = null;
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableBuilderComponent.prototype.applyParam = function (key, value) {
                _super.prototype.applyParam.call(this, key, value);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "component")) {
                    this.clearChildren();
                    this.setRendered(false);
                    var project = null;
                    if (framework.builder.Builder.getInstance() != null) {
                        project = framework.builder.Builder.getInstance().getProject();
                    }
                    else {
                        project = framework.builder.Previewer.project;
                    }
                    {
                        var array6596 = project.getChild("components").getChildren();
                        for (var index6595 = 0; index6595 < array6596.length; index6595++) {
                            var f = array6596[index6595];
                            {
                                if ((function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(f.getName(), value)) {
                                    this.content = framework.builder.marshalling.MarshallUtil.build(f.getData());
                                    this.addChild$framework_JSContainer(this.content);
                                    {
                                        var array6598 = f.getStylesheets();
                                        for (var index6597 = 0; index6597 < array6598.length; index6597++) {
                                            var sc = array6598[index6597];
                                            {
                                                var elem = document.createElement("style");
                                                elem.textContent = sc.getData();
                                                document.body.appendChild(elem);
                                            }
                                        }
                                    }
                                    {
                                        var array6600 = f.getScripts();
                                        for (var index6599 = 0; index6599 < array6600.length; index6599++) {
                                            var sc = array6600[index6599];
                                            {
                                                var elem = document.createElement("script");
                                                elem.textContent = sc.getData();
                                                document.body.appendChild(elem);
                                            }
                                        }
                                    }
                                    {
                                        var array6602 = f.getTemplates();
                                        for (var index6601 = 0; index6601 < array6602.length; index6601++) {
                                            var sc = array6602[index6601];
                                            {
                                                var elem = document.createElement("div");
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
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "src")) {
                    this.content = framework.builder.marshalling.MarshallUtil.build(value);
                    this.addChild$framework_JSContainer(this.content);
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableBuilderComponent.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableBuilderComponent.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableBuilderComponent.prototype.moveDesignable = function (designable, steps) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableBuilderComponent.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableBuilderComponent.prototype.getParameters = function () {
                var parameters = _super.prototype.getParameters.call(this);
                var component = new framework.design.AttributeParameter("component", "Component Src", "Basic");
                var project = framework.builder.Builder.getInstance().getProject();
                component.options.push(new framework.design.Option("None", ""));
                {
                    var array6604 = project.getChild("components").getChildren();
                    for (var index6603 = 0; index6603 < array6604.length; index6603++) {
                        var f = array6604[index6603];
                        {
                            component.options.push(new framework.design.Option(f.getName(), f.getName()));
                        }
                    }
                }
                var source = new framework.design.AttributeParameter("src", "Src", "Basic");
                parameters.push(source);
                return parameters;
            };
            return JSDesignableBuilderComponent;
        }(framework.lightning.LightningApplication));
        designables.JSDesignableBuilderComponent = JSDesignableBuilderComponent;
        JSDesignableBuilderComponent["__class"] = "framework.designables.JSDesignableBuilderComponent";
        JSDesignableBuilderComponent["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableFormElement = (function (_super) {
                __extends(JSDesignableFormElement, _super);
                function JSDesignableFormElement(name) {
                    var _this = _super.call(this, name, "div") || this;
                    /*private*/ _this.input = null;
                    var padding = framework.lightning.LTContainer.PADDING_SIZE_XX_SMALL_$LI$();
                    _this.setPaddingBottom(padding).setPaddingLeft(padding).setPaddingTop(padding).setPaddingRight(padding);
                    _this.input = framework.core.BeanFactory.getInstance().getBeanOfType("framework.builder.libraries.ComponentFactoryRegistry").getComponentFactory("html:input").build(new framework.builder.marshalling.Component(), true);
                    _this.input.addClass("slds-input");
                    _this.setInput(_this.input);
                    _this.getInput().addClass("slds-input");
                    _this.applyParam("label", "Label");
                    _this.setAttribute("identifier", "lgt:input");
                    return _this;
                }
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableFormElement.prototype.applyParam = function (key, value) {
                    _super.prototype.applyParam.call(this, key, value);
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "type")) {
                        var curVal = this.getValue();
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "date") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "datetime") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "currency") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "number") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "email") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "phone") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "password") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "text")) {
                            var des = new framework.designables.JSDesignableInput(this.input.getName());
                            des.applyParam("type", value);
                            this.addDesignable(des);
                            this.label.setVisible(true);
                            this.setTag("div");
                            this.input.addClass("slds-input");
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "checkbox")) {
                            var des = new framework.lightning.CheckBox(this.input.getName());
                            this.addDesignable(des);
                            des.setLabel(this.label.getHtml());
                            this.label.setVisible(false);
                            this.setTag("fieldset");
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "picklist") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "multipicklist")) {
                            var des = new framework.designables.JSDesignableSelect(this.input.getName());
                            this.label.setVisible(true);
                            this.setTag("div");
                            this.addDesignable(des);
                            if ((function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(value, "multipicklist")) {
                                des.setMultiple(true);
                                des.setSize(6);
                            }
                            des.addClass("slds-select");
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "textarea") || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "richtext")) {
                            var des = new framework.designables.JSDesignableTextArea(this.input.getName());
                            this.label.setVisible(true);
                            this.setTag("div");
                            this.addDesignable(des);
                            des.addClass("slds-textarea");
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "lookup")) {
                        }
                        this.setRendered(false);
                        var editor = (this.getAncestorWithClass("visual-editor"));
                        if (editor != null) {
                            editor.getStructure().reload$framework_design_Designable(this);
                        }
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "label")) {
                        this.setLabel(value);
                    }
                    else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(key, "disabled")) {
                        if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })("true", value)) {
                            this.setDisabled(true);
                        }
                        else {
                            this.setDisabled(false);
                        }
                    }
                };
                JSDesignableFormElement.prototype.getValue = function () {
                    return this.input.getValue();
                };
                /**
                 *
                 * @return {*[]}
                 */
                JSDesignableFormElement.prototype.getDesignables = function () {
                    return (new Array(this.input));
                };
                /**
                 *
                 * @return {framework.builder.marshalling.Component}
                 */
                JSDesignableFormElement.prototype.getComponent = function () {
                    return _super.prototype.getComponent.call(this);
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableFormElement.prototype.getParameters = function () {
                    var parameters = _super.prototype.getParameters.call(this);
                    var type = new framework.design.AttributeParameter("type", "Type", "Basic");
                    type.options.push(new framework.design.Option("date", "date"));
                    type.options.push(new framework.design.Option("datetime", "datetime"));
                    type.options.push(new framework.design.Option("Currency", "currency"));
                    type.options.push(new framework.design.Option("Number", "number"));
                    type.options.push(new framework.design.Option("Email", "email"));
                    type.options.push(new framework.design.Option("Phone", "phone"));
                    type.options.push(new framework.design.Option("Text", "text"));
                    type.options.push(new framework.design.Option("Password", "password"));
                    type.options.push(new framework.design.Option("Url", "url"));
                    type.options.push(new framework.design.Option("Checkbox", "checkbox"));
                    type.options.push(new framework.design.Option("Lookup", "lookup"));
                    type.options.push(new framework.design.Option("Ext Lookup", "extlookup"));
                    type.options.push(new framework.design.Option("Pick List", "picklist"));
                    type.options.push(new framework.design.Option("Multi Pick List", "multipicklist"));
                    type.options.push(new framework.design.Option("Long Text", "textarea"));
                    type.options.push(new framework.design.Option("Rich Text", "richtext"));
                    var label = new framework.design.AttributeParameter("label", "Label", "Basic");
                    parameters.push(type, label);
                    return parameters;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableFormElement.prototype.addDesignable = function (designable) {
                    if (designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.InputField") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.InputField") >= 0)) {
                        this.input = designable;
                        this.setInput(designable);
                    }
                    else {
                        throw new Error("Can only add component of type Input");
                    }
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableFormElement.prototype.removeDesignable = function (designable) {
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableFormElement.prototype.moveDesignable = function (designable, steps) {
                };
                JSDesignableFormElement.prototype.setDisabled = function (b) {
                    if (b) {
                        this.getInput().setAttribute("disabled", "true");
                    }
                    else {
                        this.getInput().setAttribute("disabled", null);
                    }
                };
                /**
                 *
                 */
                JSDesignableFormElement.prototype.prepare = function () {
                };
                return JSDesignableFormElement;
            }(framework.lightning.FormElement));
            designables.JSDesignableFormElement = JSDesignableFormElement;
            JSDesignableFormElement["__class"] = "framework.lightning.designables.JSDesignableFormElement";
            JSDesignableFormElement["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.design.Preparable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableHTTP = (function (_super) {
            __extends(JSDesignableHTTP, _super);
            function JSDesignableHTTP() {
                var _this = _super.call(this, "Http Connector") || this;
                _this.applyParam("method", "GET");
                return _this;
            }
            JSDesignableHTTP.prototype.execute = function () {
                var _this = this;
                var url = this.getAttribute("url");
                var method = this.getAttribute("method");
                var payload = this.getAttribute("payload");
                if (url != null && method != null && method.length > 0 && url.length > 0) {
                    if (payload == null || payload.length <= 0) {
                        payload = "{}";
                    }
                    if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })("get", method)) {
                        $.get(url, JSON.parse(payload), function (a, b, c) {
                            var evt = new CustomEvent("success");
                            evt["data"] = a;
                            _this.fireListener("success", evt);
                            return true;
                        });
                    }
                    else {
                        $.post(url, JSON.parse(payload), function (a, b, c) {
                            var evt = new framework.designables.DataEvent("success", a);
                            _this.fireListener("success", evt);
                            return true;
                        });
                    }
                }
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableHTTP.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var url = new framework.design.AttributeParameter("url", "Url", "Basic");
                var method = new framework.design.AttributeParameter("method", "Method", "Basic");
                method.options.push(new framework.design.Option("GET", "GET"));
                method.options.push(new framework.design.Option("POST", "POST"));
                var payload = new framework.design.AttributeParameter("payload", "Payload", "Basic");
                params.push(url, method, payload);
                return params;
            };
            return JSDesignableHTTP;
        }(framework.designables.JSDesignableDataProvider));
        designables.JSDesignableHTTP = JSDesignableHTTP;
        JSDesignableHTTP["__class"] = "framework.designables.JSDesignableHTTP";
        JSDesignableHTTP["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableService = (function (_super) {
            __extends(JSDesignableService, _super);
            function JSDesignableService() {
                return _super.call(this, "Service") || this;
            }
            JSDesignableService.prototype.execute = function () {
                var _this = this;
                var serviceName = this.getAttribute("service");
                var method = this.getAttribute("method");
                var payload = this.getAttribute("payload");
                var opl = new Object();
                if (payload == null || payload.length === 0) {
                    payload = "{}";
                }
                else {
                    opl = JSON.parse(payload);
                }
                opl["method"] = method;
                framework.core.BeanFactory.getInstance().getBeanOfType("framework.Adaptor").Execute(this, serviceName, opl, function (response, statusCode) {
                    _this.fireListener("success", new framework.designables.DataEvent("success", response));
                    return true;
                });
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableService.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var url = new framework.design.AttributeParameter("service", "Service", "Basic");
                var method = new framework.design.AttributeParameter("method", "Method", "Basic");
                var payload = new framework.design.AttributeParameter("payload", "Payload", "Basic");
                params.push(url, method, payload);
                return params;
            };
            return JSDesignableService;
        }(framework.designables.JSDesignableDataProvider));
        designables.JSDesignableService = JSDesignableService;
        JSDesignableService["__class"] = "framework.designables.JSDesignableService";
        JSDesignableService["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableSOQL = (function (_super) {
                __extends(JSDesignableSOQL, _super);
                function JSDesignableSOQL(name) {
                    var _this = _super.call(this, name) || this;
                    _this.applyParam("limit", "10");
                    _this.applyParam("offset", "0");
                    return _this;
                }
                /**
                 *
                 */
                JSDesignableSOQL.prototype.execute = function () {
                    var _this = this;
                    var query = this.getAttribute("query");
                    var offset = this.getAttribute("offset");
                    var limit = this.getAttribute("limit");
                    if (limit != null && limit.length > 0) {
                        query = query + " LIMIT " + limit;
                    }
                    if (offset != null && offset.length > 0) {
                        query = query + " OFFSET " + offset;
                    }
                    var payload = new Object();
                    payload["q"] = query;
                    $.get("/objects/query", payload, function (a, b, c) {
                        var evt = new CustomEvent("success");
                        evt["data"] = a;
                        _this.fireListener("success", evt);
                        return true;
                    });
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableSOQL.prototype.getParameters = function () {
                    var params = (new Array());
                    params.push(new framework.design.NameParameter("Name", "Basic"));
                    var hidden = new framework.design.AttributeParameter("dhidden", "Hidden", "Basic");
                    hidden.options.push(new framework.design.Option("", ""));
                    var exposeAs = new framework.design.AttributeParameter("exposeAs", "Expose with var", "Basic");
                    params.push(hidden, exposeAs);
                    var query = new framework.design.AttributeParameter("query", "Query", "Basic");
                    var limit = new framework.design.AttributeParameter("limit", "Limit", "Basic");
                    var offset = new framework.design.AttributeParameter("offset", "Offset", "Basic");
                    params.push(query, limit, offset);
                    return params;
                };
                return JSDesignableSOQL;
            }(framework.designables.JSDesignableDataProvider));
            designables.JSDesignableSOQL = JSDesignableSOQL;
            JSDesignableSOQL["__class"] = "framework.lightning.designables.JSDesignableSOQL";
            JSDesignableSOQL["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
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
                    _this.addComponents(new framework.builder.BasicComponent("p", "TXT", "Text Element"), new framework.builder.BasicComponent("a", "LNK", "Hyper Link"), new framework.builder.BasicComponent("img", "IMG", "Image"), new framework.builder.BasicComponent("div", "BLK", "Block Component"), new framework.builder.BasicComponent("ul", "LST", "List Component"), new framework.builder.BasicComponent("form", "FRM", "Form"), new framework.builder.BasicComponent("input", "IN", "Input"), new framework.builder.BasicComponent("select", "SEL", "Select"), new framework.builder.BasicComponent("textarea", "TA", "Text Area"), new framework.builder.BasicComponent("button", "BTN", "Button"), new framework.builder.BasicComponent("cmp", "CMP", "Component"), new framework.builder.BasicComponent("html", "HTM", "Html Template"));
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
            var CustomComponentsLibrary = (function (_super) {
                __extends(CustomComponentsLibrary, _super);
                function CustomComponentsLibrary(name) {
                    return _super.call(this, name) || this;
                }
                return CustomComponentsLibrary;
            }(framework.builder.ComponentsLibrary));
            libraries.CustomComponentsLibrary = CustomComponentsLibrary;
            CustomComponentsLibrary["__class"] = "framework.builder.libraries.CustomComponentsLibrary";
            CustomComponentsLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
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
                    _this.addComponents(new framework.builder.Component("lgt:avatar", "AVTR", "Avatar"));
                    _this.addComponents(new framework.builder.Component("lgt:badge", "BDG", "Badge"));
                    _this.addComponents(new framework.builder.Component("lgt:txt", "TXT", "Text Element"));
                    _this.addComponents(new framework.builder.Component("lgt:btn", "BTN", "Button"));
                    _this.addComponents(new framework.builder.Component("lgt:icon-btn", "ICO", "Icon Button"));
                    _this.addComponents(new framework.builder.Component("lgt:btn-grp", "GRP", "Button Group"));
                    _this.addComponents(new framework.builder.Component("lgt:frm", "FRM", "Lightning Form"));
                    _this.addComponents(new framework.builder.Component("lgt:input", "INP", "Lightning Input"));
                    _this.addComponents(new framework.builder.Component("lgt:table", "TABLE", "Data Table"));
                    _this.addComponents(new framework.builder.Component("zs:iterator", "ITER", "Iterator"));
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
    (function (builder) {
        var libraries;
        (function (libraries) {
            var LightningContainerComponentLibrary = (function (_super) {
                __extends(LightningContainerComponentLibrary, _super);
                function LightningContainerComponentLibrary() {
                    var _this = _super.call(this, "Containers") || this;
                    _this.addComponents(new framework.builder.Component("lgt:bcr", "BRDC", "BreadCrumb"));
                    _this.addComponents(new framework.builder.Component("lgt:bcr-item", "BRDCI", "BreadCrumb Item"));
                    _this.addComponents(new framework.builder.Component("lgt:grid", "GRID", "Grid"));
                    _this.addComponents(new framework.builder.Component("lgt:col", "COL", "Column"));
                    _this.addComponents(new framework.builder.Component("lgt:panel", "PANE", "Panel"));
                    _this.addComponents(new framework.builder.Component("lgt:panel-section", "SEC", "Panel Section"));
                    _this.addComponents(new framework.builder.Component("lgt:modal", "MODAL", "Modal"));
                    _this.addComponents(new framework.builder.Component("lgt:acc", "ACC", "Accordion"));
                    _this.addComponents(new framework.builder.Component("lgt:acc-item", "ACCI", "Accordion Item"));
                    _this.addComponents(new framework.builder.Component("lgt:popover", "POPOVER", "Pop Over"));
                    _this.addComponents(new framework.builder.Component("lgt:popover-footer-item", "LSTBXFI", "List Box Footer Item"));
                    _this.addComponents(new framework.builder.Component("lgt:listbox", "LSTBX", "List Box"));
                    _this.addComponents(new framework.builder.Component("lgt:listbox-item", "LSTBXI", "List Box Item"));
                    _this.addComponents(new framework.builder.Component("zs:http", "REST", "Rest Webservice"));
                    _this.addComponents(new framework.builder.Component("zs:service", "SERV", "Remote Service"));
                    _this.addComponents(new framework.builder.Component("lgt:soql", "SOQL", "Salesforce Query"));
                    return _this;
                }
                return LightningContainerComponentLibrary;
            }(framework.builder.ComponentsLibrary));
            libraries.LightningContainerComponentLibrary = LightningContainerComponentLibrary;
            LightningContainerComponentLibrary["__class"] = "framework.builder.libraries.LightningContainerComponentLibrary";
            LightningContainerComponentLibrary["__interfaces"] = ["framework.interactions.Droppable", "framework.Renderable"];
        })(libraries = builder.libraries || (builder.libraries = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var designables;
    (function (designables) {
        var JSDesignableSelect = (function (_super) {
            __extends(JSDesignableSelect, _super);
            function JSDesignableSelect(name) {
                var _this = _super.call(this, name) || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("identifier", "html:select");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            JSDesignableSelect.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "options")) {
                    if (value != null) {
                        var o = JSON.parse(value);
                        this.clearChildren();
                        this.setRendered(false);
                        {
                            var array6606 = Object.keys(o);
                            for (var index6605 = 0; index6605 < array6606.length; index6605++) {
                                var val = array6606[index6605];
                                {
                                    var txt = o[val];
                                    this.addOption(new framework.JSOption(txt, val));
                                }
                            }
                        }
                    }
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "size")) {
                    this.setSize(parseInt(value));
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "multiple")) {
                    this.setMultiple(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value));
                }
            };
            /**
             *
             * @return {*[]}
             */
            JSDesignableSelect.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            JSDesignableSelect.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            JSDesignableSelect.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var options = new framework.design.AttributeParameter("options", "Options", "Extended");
                params.push(options);
                var multiple = new framework.design.AttributeParameter("multiple", "Multiple", "Basic");
                multiple.options.push(new framework.design.Option("", ""));
                var size = new framework.design.AttributeParameter("size", "Size", "Basic");
                params.push(options, multiple, size);
                return params;
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableSelect.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            JSDesignableSelect.prototype.removeDesignable = function (designable) {
                this.delegate.removeDesignable(designable);
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            JSDesignableSelect.prototype.moveDesignable = function (designable, steps) {
                this.delegate.moveDesignable$framework_design_Designable$int(designable, steps);
            };
            /**
             *
             * @return {Array}
             */
            JSDesignableSelect.prototype.getExtEditors = function () {
                var options = new JSDesignableSelect.JSDesignableSelect$0(this, "options");
                options.setKeyLabel("Value");
                options.setValueLabel("Text");
                options.setTabLabel("Options");
                var customPropertiesEditorBody = new JSDesignableSelect.JSDesignableSelect$1(this, "custom");
                customPropertiesEditorBody.setTabLabel("Custom");
                return [options, customPropertiesEditorBody];
            };
            return JSDesignableSelect;
        }(framework.JSSelect));
        designables.JSDesignableSelect = JSDesignableSelect;
        JSDesignableSelect["__class"] = "framework.designables.JSDesignableSelect";
        JSDesignableSelect["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.design.ExtDesignable", "framework.Renderable", "framework.InputField"];
        (function (JSDesignableSelect) {
            var JSDesignableSelect$0 = (function (_super) {
                __extends(JSDesignableSelect$0, _super);
                function JSDesignableSelect$0(__parent, __arg0) {
                    var _this = _super.call(this, __arg0) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {Object} data
                 */
                JSDesignableSelect$0.prototype.applyDataOnDesignable = function (designable, data) {
                    designable.applyParam("options", JSON.stringify(data));
                };
                /**
                 *
                 * @param {*} designable
                 * @return {Object}
                 */
                JSDesignableSelect$0.prototype.getDataFromDesignable = function (designable) {
                    var options = designable.getAttribute("options");
                    if (options != null && options.length > 0) {
                        var data = JSON.parse(options);
                        if (data != null) {
                            return data;
                        }
                    }
                    return new Object();
                };
                return JSDesignableSelect$0;
            }(framework.builder.properties.KeyValueEditor));
            JSDesignableSelect.JSDesignableSelect$0 = JSDesignableSelect$0;
            JSDesignableSelect$0["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
            var JSDesignableSelect$1 = (function (_super) {
                __extends(JSDesignableSelect$1, _super);
                function JSDesignableSelect$1(__parent, __arg0) {
                    var _this = _super.call(this, __arg0) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {Object} data
                 */
                JSDesignableSelect$1.prototype.applyDataOnDesignable = function (designable, data) {
                    designable['setData$java_lang_Object'](data);
                };
                /**
                 *
                 * @param {*} designable
                 * @return {Object}
                 */
                JSDesignableSelect$1.prototype.getDataFromDesignable = function (designable) {
                    return designable.getData();
                };
                return JSDesignableSelect$1;
            }(framework.builder.properties.KeyValueEditor));
            JSDesignableSelect.JSDesignableSelect$1 = JSDesignableSelect$1;
            JSDesignableSelect$1["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(JSDesignableSelect = designables.JSDesignableSelect || (designables.JSDesignableSelect = {}));
    })(designables = framework.designables || (framework.designables = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var CheckBoxGroup = (function (_super) {
            __extends(CheckBoxGroup, _super);
            function CheckBoxGroup(name) {
                var _this = _super.call(this, name, "div") || this;
                /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                _this.setAttribute("identifier", "lgt:checkboxgroup");
                _this.addClass("slds-form-element__control");
                return _this;
            }
            /**
             *
             * @param {string} key
             * @param {string} value
             */
            CheckBoxGroup.prototype.applyParam = function (key, value) {
                this.delegate.applyParameter(key, value, true);
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(key, "options")) {
                    this.clearChildren();
                    this.setRendered(false);
                    var options = JSON.parse(value);
                    {
                        var array6608 = Object.keys(options);
                        for (var index6607 = 0; index6607 < array6608.length; index6607++) {
                            var optval = array6608[index6607];
                            {
                                var checkbox = new framework.lightning.CheckBox(optval);
                                checkbox.setLabel(options[optval]);
                                this.addChild$framework_JSContainer(checkbox);
                            }
                        }
                    }
                }
            };
            /**
             *
             * @return {*[]}
             */
            CheckBoxGroup.prototype.getDesignables = function () {
                return (new Array());
            };
            /**
             *
             * @return {framework.builder.marshalling.Component}
             */
            CheckBoxGroup.prototype.getComponent = function () {
                return this.delegate.getComponent();
            };
            /**
             *
             * @return {framework.design.Parameter[]}
             */
            CheckBoxGroup.prototype.getParameters = function () {
                var params = this.delegate.getParameters();
                var options = new framework.design.AttributeParameter("options", "Options", "Extended");
                params.push(options);
                return params;
            };
            CheckBoxGroup.prototype.setData = function (obj) {
                if (obj != null && obj instanceof Array) {
                    var options = obj;
                    this.setOptions(options);
                }
                else {
                    this.applyParam("options", JSON.stringify(obj));
                }
            };
            CheckBoxGroup.prototype.setOptions = function (options) {
                this.clearChildren();
                for (var index6609 = 0; index6609 < options.length; index6609++) {
                    var opt = options[index6609];
                    {
                        this.addOption(opt);
                    }
                }
            };
            CheckBoxGroup.prototype.addOption = function (option) {
                var checkbox = new framework.lightning.CheckBox(option.value);
                checkbox.setLabel(option.text);
                this.addChild$framework_JSContainer(checkbox);
            };
            /**
             *
             * @param {*} designable
             */
            CheckBoxGroup.prototype.addDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             */
            CheckBoxGroup.prototype.removeDesignable = function (designable) {
            };
            /**
             *
             * @param {*} designable
             * @param {number} steps
             */
            CheckBoxGroup.prototype.moveDesignable = function (designable, steps) {
            };
            /**
             *
             * @return {string[]}
             */
            CheckBoxGroup.prototype.getValue = function () {
                var result = (new Array());
                {
                    var array6611 = this.getChildren();
                    for (var index6610 = 0; index6610 < array6611.length; index6610++) {
                        var child = array6611[index6610];
                        {
                            var cb = child;
                            if (cb.getValue() === true) {
                                result.push(cb.getName());
                            }
                        }
                    }
                }
                return result;
            };
            CheckBoxGroup.prototype.setValue$jsweet_lang_Array = function (val) {
                this.clearAll();
                for (var index6612 = 0; index6612 < val.length; index6612++) {
                    var s = val[index6612];
                    {
                        {
                            var array6614 = this.getChildren();
                            for (var index6613 = 0; index6613 < array6614.length; index6613++) {
                                var child = array6614[index6613];
                                {
                                    var cb = child;
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(cb.getName(), s)) {
                                        cb.setValue$java_lang_Boolean(true);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            /**
             *
             * @param {string[]} val
             */
            CheckBoxGroup.prototype.setValue = function (val) {
                if (((val != null && val instanceof Array) || val === null)) {
                    return this.setValue$jsweet_lang_Array(val);
                }
                else
                    throw new Error('invalid overload');
            };
            CheckBoxGroup.prototype.clearAll = function () {
                {
                    var array6616 = this.getChildren();
                    for (var index6615 = 0; index6615 < array6616.length; index6615++) {
                        var child = array6616[index6615];
                        {
                            var cb = child;
                            cb.setValue$java_lang_Boolean(false);
                        }
                    }
                }
            };
            /**
             *
             * @return {Array}
             */
            CheckBoxGroup.prototype.getExtEditors = function () {
                var options = new CheckBoxGroup.CheckBoxGroup$0(this, "options");
                options.setKeyLabel("Value");
                options.setValueLabel("Text");
                options.setTabLabel("Options");
                var customPropertiesEditorBody = new CheckBoxGroup.CheckBoxGroup$1(this, "custom");
                customPropertiesEditorBody.setTabLabel("Custom");
                return [options, customPropertiesEditorBody];
            };
            return CheckBoxGroup;
        }(framework.JSContainer));
        lightning.CheckBoxGroup = CheckBoxGroup;
        CheckBoxGroup["__class"] = "framework.lightning.CheckBoxGroup";
        CheckBoxGroup["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.design.ExtDesignable", "framework.Renderable", "framework.InputField"];
        (function (CheckBoxGroup) {
            var CheckBoxGroup$0 = (function (_super) {
                __extends(CheckBoxGroup$0, _super);
                function CheckBoxGroup$0(__parent, __arg0) {
                    var _this = _super.call(this, __arg0) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {Object} data
                 */
                CheckBoxGroup$0.prototype.applyDataOnDesignable = function (designable, data) {
                    designable.applyParam("options", JSON.stringify(data));
                };
                /**
                 *
                 * @param {*} designable
                 * @return {Object}
                 */
                CheckBoxGroup$0.prototype.getDataFromDesignable = function (designable) {
                    var options = designable.getAttribute("options");
                    if (options != null && options.length > 0) {
                        var data = JSON.parse(options);
                        if (data != null) {
                            return data;
                        }
                    }
                    return new Object();
                };
                return CheckBoxGroup$0;
            }(framework.builder.properties.KeyValueEditor));
            CheckBoxGroup.CheckBoxGroup$0 = CheckBoxGroup$0;
            CheckBoxGroup$0["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
            var CheckBoxGroup$1 = (function (_super) {
                __extends(CheckBoxGroup$1, _super);
                function CheckBoxGroup$1(__parent, __arg0) {
                    var _this = _super.call(this, __arg0) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 * @param {*} designable
                 * @param {Object} data
                 */
                CheckBoxGroup$1.prototype.applyDataOnDesignable = function (designable, data) {
                    designable['setData$java_lang_Object'](data);
                };
                /**
                 *
                 * @param {*} designable
                 * @return {Object}
                 */
                CheckBoxGroup$1.prototype.getDataFromDesignable = function (designable) {
                    return designable.getData();
                };
                return CheckBoxGroup$1;
            }(framework.builder.properties.KeyValueEditor));
            CheckBoxGroup.CheckBoxGroup$1 = CheckBoxGroup$1;
            CheckBoxGroup$1["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(CheckBoxGroup = lightning.CheckBoxGroup || (lightning.CheckBoxGroup = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableTable = (function (_super) {
                __extends(JSDesignableTable, _super);
                function JSDesignableTable(name) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.delegate = new framework.designables.DesignableDelegate(_this);
                    /*private*/ _this.fields = (new Array());
                    /*private*/ _this.tableData = (new Array());
                    _this.setTableCellRenderer(_this);
                    for (var i = 1; i <= 5; i++) {
                        _this.addColumn(new framework.lightning.table.TableColumn("field" + i, "field" + i, "Field " + i));
                    }
                    ;
                    _this.applyParam("PageSize", "10");
                    _this.setTableColumnModel(_this);
                    _this.refreshColumns();
                    _this.setModel(_this);
                    return _this;
                }
                /**
                 *
                 */
                JSDesignableTable.prototype.refreshData = function () {
                    _super.prototype.refreshData.call(this);
                    var evt = new CustomEvent("dataLoaded");
                    evt["data"] = this.tableData;
                };
                JSDesignableTable.prototype.getComponent$framework_lightning_table_Table$java_lang_Object$int$int = function (table, value, row, column) {
                    if (value != null && (typeof value === 'boolean')) {
                        var ch = new framework.lightning.CheckBox("");
                        ch.setValue$java_lang_Boolean(value);
                        return ch;
                    }
                    var truncate = new framework.JSContainer("div").addClass("slds-truncate");
                    var s = "";
                    if (value != null) {
                        s = value.toString();
                    }
                    truncate.setHtml(s).setAttribute("title", s);
                    return truncate;
                };
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {*}
                 */
                JSDesignableTable.prototype.getComponent = function (table, value, row, column) {
                    if (((table != null && table instanceof framework.lightning.table.Table) || table === null) && ((value != null) || value === null) && ((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                        return this.getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table, value, row, column);
                    }
                    else if (table === undefined && value === undefined && row === undefined && column === undefined) {
                        return this.getComponent$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableTable.prototype.applyParam = function (key, value) {
                    this.delegate.applyParameter(key, value, true);
                    var b = (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })("true", value);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "fields")) {
                        this.fields = (new Array());
                        if (value != null) {
                            var o = JSON.parse(value);
                            {
                                var array6618 = Object.keys(o);
                                for (var index6617 = 0; index6617 < array6618.length; index6617++) {
                                    var val = array6618[index6617];
                                    {
                                        var txt = o[val];
                                        var col = new framework.lightning.table.TableColumn(val, val, txt);
                                        this.fields.push(col);
                                    }
                                }
                            }
                        }
                        this.refreshColumns();
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "PageSize")) {
                        this.setPageSize((parseInt(value) | 0));
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "Bordered")) {
                        this.setBordered(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "CellBuffered")) {
                        this.setCellBuffered(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "ColBordered")) {
                        this.setColBordered(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "FixedLayout")) {
                        this.setFixedLayout(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "MultiSelectable")) {
                        this.setMultiSelectable(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "NoRowHover")) {
                        this.setNoRowHover(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "Striped")) {
                        this.setStriped(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "Selectable")) {
                        this.setSelectable(b);
                    }
                    else if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "ResizableCol")) {
                        this.setResizableCol(b);
                    }
                };
                /**
                 *
                 * @return {*[]}
                 */
                JSDesignableTable.prototype.getDesignables = function () {
                    return (new Array());
                };
                JSDesignableTable.prototype.getComponent$ = function () {
                    return this.delegate.getComponent();
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableTable.prototype.getParameters = function () {
                    var params = this.delegate.getParameters();
                    var options = new framework.design.AttributeParameter("fields", "Fields", "Extended");
                    params.push(options);
                    var boolParams = ["Bordered", "CellBuffered", "ColBordered", "FixedLayout", "MultiSelectable", "NoRowHover", "Striped", "Selectable", "ResizableCol"];
                    for (var index6619 = 0; index6619 < boolParams.length; index6619++) {
                        var param = boolParams[index6619];
                        {
                            var parameter_1 = new framework.design.AttributeParameter(param, param, "Advanced");
                            parameter_1.options.push(new framework.design.Option("", ""));
                            params.push(parameter_1);
                        }
                    }
                    var parameter = new framework.design.AttributeParameter("PageSize", "Page Size", "Basic");
                    parameter.options.push(new framework.design.Option("5", "5"));
                    parameter.options.push(new framework.design.Option("10", "10"));
                    parameter.options.push(new framework.design.Option("15", "15"));
                    parameter.options.push(new framework.design.Option("20", "20"));
                    parameter.options.push(new framework.design.Option("30", "30"));
                    parameter.options.push(new framework.design.Option("50", "50"));
                    params.push(parameter);
                    var selectOn = new framework.design.AttributeParameter("SelectRow", "Select On", "Basic");
                    selectOn.options.push(new framework.design.Option("click", "Click"));
                    selectOn.options.push(new framework.design.Option("dblclick", "Double Click"));
                    params.push(selectOn);
                    return params;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableTable.prototype.addDesignable = function (designable) {
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableTable.prototype.removeDesignable = function (designable) {
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableTable.prototype.moveDesignable = function (designable, steps) {
                };
                /**
                 *
                 * @param {framework.lightning.table.TableColumn} aColumn
                 */
                JSDesignableTable.prototype.addColumn = function (aColumn) {
                    this.fields.push(aColumn);
                    this.refreshColumns();
                };
                JSDesignableTable.prototype.setTableData = function (data) {
                    this.tableData = data;
                    this.refreshData();
                };
                /**
                 *
                 * @return {number}
                 */
                JSDesignableTable.prototype.getColumnCount = function () {
                    return this.fields.length;
                };
                /**
                 *
                 * @param {*} columnIdentifier
                 * @return {number}
                 */
                JSDesignableTable.prototype.getColumnIndex = function (columnIdentifier) {
                    for (var i = 0; i < this.fields.length; i++) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.fields[i].getIdentifier(), columnIdentifier)) {
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
                JSDesignableTable.prototype.getColumn = function (columnIndex) {
                    return this.fields[columnIndex];
                };
                /**
                 *
                 * @return {Array}
                 */
                JSDesignableTable.prototype.getExtEditors = function () {
                    var fields = new JSDesignableTable.JSDesignableTable$0(this, "fields");
                    fields.setKeyLabel("Name");
                    fields.setValueLabel("Label");
                    fields.setTabLabel("Fields");
                    return [fields];
                };
                /**
                 *
                 * @return {number}
                 */
                JSDesignableTable.prototype.getRowCount = function () {
                    return this.tableData.length;
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {boolean}
                 */
                JSDesignableTable.prototype.isCellEditable = function (rowIndex, columnIndex) {
                    return false;
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {*}
                 */
                JSDesignableTable.prototype.getValueAt = function (rowIndex, columnIndex) {
                    if (this.tableData.length > rowIndex) {
                        var line = this.tableData[rowIndex];
                        if (line != null) {
                            if (this.fields.length > columnIndex) {
                                var col = this.fields[columnIndex];
                                if (col != null) {
                                    var key = col.getIdentifier();
                                    return line[key];
                                }
                            }
                        }
                    }
                    return "";
                };
                /**
                 *
                 * @param {*} aValue
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 */
                JSDesignableTable.prototype.setValueAt = function (aValue, rowIndex, columnIndex) {
                };
                return JSDesignableTable;
            }(framework.lightning.table.Table));
            designables.JSDesignableTable = JSDesignableTable;
            JSDesignableTable["__class"] = "framework.lightning.designables.JSDesignableTable";
            JSDesignableTable["__interfaces"] = ["framework.lightning.table.TableModel", "framework.interactions.Droppable", "framework.lightning.table.TableColumnModel", "framework.lightning.table.TableCellRenderer", "framework.design.Designable", "framework.design.ExtDesignable", "framework.Renderable"];
            (function (JSDesignableTable) {
                var JSDesignableTable$0 = (function (_super) {
                    __extends(JSDesignableTable$0, _super);
                    function JSDesignableTable$0(__parent, __arg0) {
                        var _this = _super.call(this, __arg0) || this;
                        _this.__parent = __parent;
                        return _this;
                    }
                    /**
                     *
                     * @param {*} designable
                     * @param {Object} data
                     */
                    JSDesignableTable$0.prototype.applyDataOnDesignable = function (designable, data) {
                        designable.applyParam("fields", JSON.stringify(data));
                    };
                    /**
                     *
                     * @param {*} designable
                     * @return {Object}
                     */
                    JSDesignableTable$0.prototype.getDataFromDesignable = function (designable) {
                        var options = designable.getAttribute("fields");
                        if (options != null && options.length > 0) {
                            var data = JSON.parse(options);
                            if (data != null) {
                                return data;
                            }
                        }
                        return new Object();
                    };
                    return JSDesignableTable$0;
                }(framework.builder.properties.KeyValueEditor));
                JSDesignableTable.JSDesignableTable$0 = JSDesignableTable$0;
                JSDesignableTable$0["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
            })(JSDesignableTable = designables.JSDesignableTable || (designables.JSDesignableTable = {}));
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var FormLayout = (function (_super) {
            __extends(FormLayout, _super);
            function FormLayout(name) {
                var _this = _super.call(this, name) || this;
                _this.labels = ["XXX Small", "XX Small", "X Small", "Small", "Medium", "Large", "X Large", "XX Large"];
                _this.addClass("slds-form");
                _this.applyParam("wrap", "true");
                _this.setCompound(true);
                return _this;
            }
            FormLayout.SPACING_XXX_SMALL_$LI$ = function () { if (FormLayout.SPACING_XXX_SMALL == null)
                FormLayout.SPACING_XXX_SMALL = framework.lightning.LTContainer.PADDING_SIZE_XXX_SMALL_$LI$(); return FormLayout.SPACING_XXX_SMALL; };
            ;
            FormLayout.SPACING_XX_SMALL_$LI$ = function () { if (FormLayout.SPACING_XX_SMALL == null)
                FormLayout.SPACING_XX_SMALL = framework.lightning.LTContainer.PADDING_SIZE_XX_SMALL_$LI$(); return FormLayout.SPACING_XX_SMALL; };
            ;
            FormLayout.SPACING_X_SMALL_$LI$ = function () { if (FormLayout.SPACING_X_SMALL == null)
                FormLayout.SPACING_X_SMALL = framework.lightning.LTContainer.PADDING_SIZE_X_SMALL_$LI$(); return FormLayout.SPACING_X_SMALL; };
            ;
            FormLayout.SPACING_SMALL_$LI$ = function () { if (FormLayout.SPACING_SMALL == null)
                FormLayout.SPACING_SMALL = framework.lightning.LTContainer.PADDING_SIZE_SMALL_$LI$(); return FormLayout.SPACING_SMALL; };
            ;
            FormLayout.SPACING_MEDIUM_$LI$ = function () { if (FormLayout.SPACING_MEDIUM == null)
                FormLayout.SPACING_MEDIUM = framework.lightning.LTContainer.PADDING_SIZE_MEDIUM_$LI$(); return FormLayout.SPACING_MEDIUM; };
            ;
            FormLayout.SPACING_LARGE_$LI$ = function () { if (FormLayout.SPACING_LARGE == null)
                FormLayout.SPACING_LARGE = framework.lightning.LTContainer.PADDING_SIZE_LARGE_$LI$(); return FormLayout.SPACING_LARGE; };
            ;
            FormLayout.SPACING_X_LARGE_$LI$ = function () { if (FormLayout.SPACING_X_LARGE == null)
                FormLayout.SPACING_X_LARGE = framework.lightning.LTContainer.PADDING_SIZE_X_LARGE_$LI$(); return FormLayout.SPACING_X_LARGE; };
            ;
            FormLayout.SPACING_XX_LARGE_$LI$ = function () { if (FormLayout.SPACING_XX_LARGE == null)
                FormLayout.SPACING_XX_LARGE = framework.lightning.LTContainer.PADDING_SIZE_XX_LARGE_$LI$(); return FormLayout.SPACING_XX_LARGE; };
            ;
            FormLayout.prototype.setSpacing = function (spacing) {
                {
                    var array6621 = this.getChildren();
                    for (var index6620 = 0; index6620 < array6621.length; index6620++) {
                        var container = array6621[index6620];
                        {
                            var lt = container;
                            lt.setPaddingBottom(spacing).setPaddingLeft(spacing).setPaddingRight(spacing).setPaddingTop(spacing);
                        }
                    }
                }
                return this;
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
                this.clearChildren();
                this.setRendered(false);
                return this;
            };
            FormLayout.prototype.getElements = function () {
                var l = this.getChildren();
                return l;
            };
            return FormLayout;
        }(framework.lightning.designables.JSDesignableLightningGrid));
        lightning.FormLayout = FormLayout;
        FormLayout["__class"] = "framework.lightning.FormLayout";
        FormLayout["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var editors;
        (function (editors) {
            var StructureDockedComposer = (function (_super) {
                __extends(StructureDockedComposer, _super);
                function StructureDockedComposer(name, root, f, selector) {
                    var _this = _super.call(this, name) || this;
                    _this.structure = null;
                    _this.addClass("structure");
                    _this.getTitle().setHtml("Structure");
                    _this.structure = new framework.builder.editors.Structure("strcy", root, f, selector);
                    _this.getBody().addChild$framework_JSContainer(_this.structure);
                    _this.minimize.addEventListener(new StructureDockedComposer.StructureDockedComposer$0(_this), "click");
                    return _this;
                }
                StructureDockedComposer.prototype.getStructure = function () {
                    return this.structure;
                };
                return StructureDockedComposer;
            }(framework.lightning.DockedComposer));
            editors.StructureDockedComposer = StructureDockedComposer;
            StructureDockedComposer["__class"] = "framework.builder.editors.StructureDockedComposer";
            StructureDockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
            (function (StructureDockedComposer) {
                var StructureDockedComposer$0 = (function () {
                    function StructureDockedComposer$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    StructureDockedComposer$0.prototype.performAction = function (source, evt) {
                        var editor = (this.__parent.getAncestorWithClass("visual-editor"));
                        if (this.__parent.closed)
                            editor.closeLeft();
                        else
                            editor.openLeft();
                    };
                    return StructureDockedComposer$0;
                }());
                StructureDockedComposer.StructureDockedComposer$0 = StructureDockedComposer$0;
                StructureDockedComposer$0["__interfaces"] = ["framework.EventListener"];
            })(StructureDockedComposer = editors.StructureDockedComposer || (editors.StructureDockedComposer = {}));
        })(editors = builder.editors || (builder.editors = {}));
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
                    /*private*/ _this.containerComponentLib = new framework.builder.libraries.LightningContainerComponentLibrary();
                    /*private*/ _this.customComponents = new framework.builder.libraries.CustomComponentsLibrary("custom");
                    /*private*/ _this.componentsTabs = new framework.builder.ComponentsTabs("componentsTabs");
                    _this.addClass("library-composer");
                    _this.getTitle().setHtml("Components Library");
                    _this.getBody().addChild$framework_JSContainer(_this.componentsTabs);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Basic", _this.basicComponentLib);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Lightning", _this.lightningComponentLib);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Containers", _this.containerComponentLib);
                    _this.componentsTabs.addItem$java_lang_String$framework_builder_ComponentsLibrary("Custom", _this.customComponents);
                    _this.componentsTabs.getItems()[0].setActive(true);
                    return _this;
                }
                LibrariesDockedComposer.prototype.refreshWithProject = function (des) {
                    var customs = des.getComponent().custom;
                    this.customComponents.clearComponent();
                    {
                        var array6623 = Object.keys(customs);
                        for (var index6622 = 0; index6622 < array6623.length; index6622++) {
                            var s = array6623[index6622];
                            {
                                this.customComponents.addComponents(new framework.builder.Component("html:cmp", customs[s], s));
                            }
                        }
                    }
                };
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
                    _this.getTitle().setHtml("Properties");
                    _this.addClass("properties-composer");
                    _this.getBody().addChild$framework_JSContainer(_this.mainEditor);
                    _this.minimize.addEventListener(new PropertiesDockedComposer.PropertiesDockedComposer$0(_this), "click");
                    return _this;
                }
                PropertiesDockedComposer.prototype.selectComponent = function (designable) {
                    this.mainEditor.clear();
                    this.basicEditorBody.setRendered(false);
                    this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Basic", this.basicEditorBody).setActive(true);
                    this.basicEditorBody.setComponent(designable);
                    var advancedPropertiesEditorBody = new framework.builder.properties.AdvancedPropertiesEditor();
                    var adv = this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Advanced", advancedPropertiesEditorBody);
                    advancedPropertiesEditorBody.setComponent(designable);
                    if (advancedPropertiesEditorBody.getChildren().length === 0) {
                        adv.setVisible(false);
                    }
                    else {
                        adv.setVisible(true);
                    }
                    if (designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0)) {
                    }
                    else {
                        var customPropertiesEditorBody = new PropertiesDockedComposer.PropertiesDockedComposer$1(this, "custom");
                        this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor("Custom", customPropertiesEditorBody);
                        customPropertiesEditorBody.setComponent(designable);
                    }
                    if (designable != null && (designable["__interfaces"] != null && designable["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0 || designable.constructor != null && designable.constructor["__interfaces"] != null && designable.constructor["__interfaces"].indexOf("framework.design.ExtDesignable") >= 0)) {
                        var editors_1 = designable.getExtEditors();
                        if (editors_1 != null && editors_1.length > 0) {
                            for (var index6624 = 0; index6624 < editors_1.length; index6624++) {
                                var e = editors_1[index6624];
                                {
                                    e.setComponent(designable);
                                    this.mainEditor.addItem$java_lang_String$framework_builder_properties_PropertiesEditor(e.getLabel(designable), e).setActive(false);
                                }
                            }
                        }
                    }
                };
                return PropertiesDockedComposer;
            }(framework.lightning.DockedComposer));
            properties.PropertiesDockedComposer = PropertiesDockedComposer;
            PropertiesDockedComposer["__class"] = "framework.builder.properties.PropertiesDockedComposer";
            PropertiesDockedComposer["__interfaces"] = ["framework.interactions.Droppable", "framework.interactions.Draggable", "framework.Renderable"];
            (function (PropertiesDockedComposer) {
                var PropertiesDockedComposer$0 = (function () {
                    function PropertiesDockedComposer$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    PropertiesDockedComposer$0.prototype.performAction = function (source, evt) {
                        var editor = (this.__parent.getAncestorWithClass("visual-editor"));
                        if (this.__parent.closed)
                            editor.closeRight();
                        else
                            editor.openRight();
                    };
                    return PropertiesDockedComposer$0;
                }());
                PropertiesDockedComposer.PropertiesDockedComposer$0 = PropertiesDockedComposer$0;
                PropertiesDockedComposer$0["__interfaces"] = ["framework.EventListener"];
                var PropertiesDockedComposer$1 = (function (_super) {
                    __extends(PropertiesDockedComposer$1, _super);
                    function PropertiesDockedComposer$1(__parent, __arg0) {
                        var _this = _super.call(this, __arg0) || this;
                        _this.__parent = __parent;
                        return _this;
                    }
                    /**
                     *
                     * @param {*} designable
                     * @param {Object} data
                     */
                    PropertiesDockedComposer$1.prototype.applyDataOnDesignable = function (designable, data) {
                        designable['setData$java_lang_Object'](data);
                    };
                    /**
                     *
                     * @param {*} designable
                     * @return {Object}
                     */
                    PropertiesDockedComposer$1.prototype.getDataFromDesignable = function (designable) {
                        return designable.getData();
                    };
                    return PropertiesDockedComposer$1;
                }(framework.builder.properties.KeyValueEditor));
                PropertiesDockedComposer.PropertiesDockedComposer$1 = PropertiesDockedComposer$1;
                PropertiesDockedComposer$1["__interfaces"] = ["framework.builder.properties.ExtPropertiesEditor", "framework.interactions.Droppable", "framework.EventListener", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
            })(PropertiesDockedComposer = properties.PropertiesDockedComposer || (properties.PropertiesDockedComposer = {}));
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
        var data;
        (function (data_9) {
            var CrudTable = (function (_super) {
                __extends(CrudTable, _super);
                function CrudTable(name) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.configs = new Object();
                    /*private*/ _this.list = new framework.lightning.table.Table("list");
                    /*private*/ _this.buttons = new framework.lightning.PanelSection("buttons", "div");
                    /*private*/ _this.listSection = new framework.lightning.PanelSection("listSection", "div");
                    /*private*/ _this.addNew = new framework.lightning.Button("addNew").setLabel("Add New").setState(framework.lightning.Button.STATE_BRAND);
                    _this.addClass("CrudTable");
                    _this.addSection(_this.buttons);
                    _this.addSection(_this.listSection);
                    _this.buttons.addChild$framework_JSContainer(_this.addNew);
                    _this.listSection.addChild$framework_JSContainer(_this.list);
                    _this.addNew.addEventListener(_this, "click");
                    return _this;
                }
                CrudTable.prototype.setFields = function (fields) {
                    this.configs["fields"] = fields;
                    for (var index6625 = 0; index6625 < fields.length; index6625++) {
                        var field = fields[index6625];
                        {
                            var name_3 = field["name"];
                            var label = field["label"];
                            var col = new framework.lightning.table.TableColumn(name_3, name_3, label);
                            this.list.getTableColumnModel().addColumn(col);
                        }
                    }
                    this.list.refreshColumns();
                };
                CrudTable.prototype.setData$jsweet_lang_Array = function (data) {
                    this.configs["data"] = data;
                    this.list.setModel(this);
                    this.list.refreshData();
                };
                CrudTable.prototype.setData = function (data) {
                    if (((data != null && data instanceof Array) || data === null)) {
                        return this.setData$jsweet_lang_Array(data);
                    }
                    else if (((data != null) || data === null)) {
                        return this.setData$java_lang_Object(data);
                    }
                    else
                        throw new Error('invalid overload');
                };
                CrudTable.prototype.getFields = function () {
                    return this.configs["fields"];
                };
                CrudTable.prototype.getData = function () {
                    return this.configs["data"];
                };
                CrudTable.prototype.getComponent$framework_lightning_table_Table$java_lang_Object$int$int = function (table, value, row, column) {
                    var cell = new framework.JSContainer("div");
                    var data = this.getData()[row];
                    cell.setHtml(data.toString());
                    return cell;
                };
                /**
                 *
                 * @param {framework.lightning.table.Table} table
                 * @param {*} value
                 * @param {number} row
                 * @param {number} column
                 * @return {*}
                 */
                CrudTable.prototype.getComponent = function (table, value, row, column) {
                    if (((table != null && table instanceof framework.lightning.table.Table) || table === null) && ((value != null) || value === null) && ((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                        return this.getComponent$framework_lightning_table_Table$java_lang_Object$int$int(table, value, row, column);
                    }
                    else if (table === undefined && value === undefined && row === undefined && column === undefined) {
                        return this.getComponent$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @return {number}
                 */
                CrudTable.prototype.getRowCount = function () {
                    if (this.getData() != null) {
                        return this.getData().length;
                    }
                    return 0;
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {boolean}
                 */
                CrudTable.prototype.isCellEditable = function (rowIndex, columnIndex) {
                    return false;
                };
                /**
                 *
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 * @return {*}
                 */
                CrudTable.prototype.getValueAt = function (rowIndex, columnIndex) {
                    if (this.getData() != null) {
                        var line = this.getData()[rowIndex];
                        if (this.getFields() != null) {
                            var cell = this.getFields()[columnIndex];
                            var field = cell["name"];
                            return line[field];
                        }
                    }
                    return null;
                };
                /**
                 *
                 * @param {*} aValue
                 * @param {number} rowIndex
                 * @param {number} columnIndex
                 */
                CrudTable.prototype.setValueAt = function (aValue, rowIndex, columnIndex) {
                    var name = this.getFields()[columnIndex]["name"];
                    this.getData()[rowIndex][name] = aValue;
                };
                /**
                 *
                 * @param {framework.JSContainer} source
                 * @param {Event} evt
                 */
                CrudTable.prototype.performAction = function (source, evt) {
                    this.showForm(source, evt);
                };
                return CrudTable;
            }(framework.lightning.Panel));
            data_9.CrudTable = CrudTable;
            CrudTable["__class"] = "framework.builder.data.CrudTable";
            CrudTable["__interfaces"] = ["framework.lightning.table.TableModel", "framework.interactions.Droppable", "framework.lightning.table.TableCellRenderer", "framework.EventListener", "framework.design.Designable", "framework.Renderable"];
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var MultiForm = (function (_super) {
                __extends(MultiForm, _super);
                function MultiForm(name) {
                    var _this = _super.call(this, name) || this;
                    /*private*/ _this.section0 = new framework.lightning.PanelSection("secion0", "div");
                    /*private*/ _this.map = (new framework.util.HashMap());
                    _this.select = new framework.JSSelect("root");
                    _this.rootElement = null;
                    _this.addSection(_this.section0);
                    _this.rootElement = new framework.lightning.FormElement("root", "div");
                    _this.rootElement.setLabel("");
                    _this.section0.addChild$framework_JSContainer(_this.rootElement);
                    return _this;
                }
                MultiForm.prototype.setConfigs = function (fields) {
                    var count = 0;
                    for (var index6626 = 0; index6626 < fields.length; index6626++) {
                        var opt = fields[index6626];
                        {
                            var name_4 = opt["name"];
                            var label = opt["label"];
                            this.select.addOption(new framework.JSOption(label, name_4));
                            var form = new framework.builder.data.DynaForm(name_4);
                            var options = opt["options"];
                            if (options == null) {
                                options = opt["fields"];
                            }
                            var s = new framework.lightning.PanelSection("", "div");
                            s.addChild$framework_JSContainer(form);
                            this.addSection(s);
                            form.setFields(options);
                            s.setVisible(count === 0);
                            this.map.put(name_4, s);
                            count++;
                        }
                    }
                    this.select.addEventListener(new MultiForm.MultiForm$0(this), "change");
                    this.rootElement.setLabel("Type");
                    this.rootElement.setInput(this.select);
                    this.select.addClass("slds-input");
                };
                /**
                 *
                 * @return {Object}
                 */
                MultiForm.prototype.getValue = function () {
                    var result = new Object();
                    var type = this.select.getValue();
                    result["type"] = type;
                    {
                        var array6628 = this.map.keySet();
                        for (var index6627 = 0; index6627 < array6628.length; index6627++) {
                            var name_5 = array6628[index6627];
                            {
                                if ((function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(name_5, type)) {
                                    var form = this.map.get(name_5).getChildren()[0];
                                    result[name_5] = form.getValue();
                                    break;
                                }
                            }
                        }
                    }
                    return result;
                };
                MultiForm.prototype.setValue$jsweet_lang_Object = function (val) {
                    {
                        var array6630 = this.map.keySet();
                        for (var index6629 = 0; index6629 < array6630.length; index6629++) {
                            var name_6 = array6630[index6629];
                            {
                                if (val[name_6] != null) {
                                    var form = this.map.get(name_6).getChildren()[0];
                                    form.setValue$jsweet_lang_Object(val[name_6]);
                                }
                            }
                        }
                    }
                    var type = val["type"];
                    this.select.setValue$java_lang_Object(type);
                    {
                        var array6632 = this.map.keySet();
                        for (var index6631 = 0; index6631 < array6632.length; index6631++) {
                            var name_7 = array6632[index6631];
                            {
                                this.map.get(name_7).setVisible(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                    return o1.equals(o2);
                                }
                                else {
                                    return o1 === o2;
                                } })(name_7, type));
                            }
                        }
                    }
                };
                /**
                 *
                 * @param {Object} val
                 */
                MultiForm.prototype.setValue = function (val) {
                    if (((val != null && val instanceof Object) || val === null)) {
                        return this.setValue$jsweet_lang_Object(val);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return MultiForm;
            }(framework.lightning.Panel));
            data.MultiForm = MultiForm;
            MultiForm["__class"] = "framework.builder.data.MultiForm";
            MultiForm["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.InputField", "framework.Renderable"];
            (function (MultiForm) {
                var MultiForm$0 = (function () {
                    function MultiForm$0(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {framework.JSContainer} source
                     * @param {Event} evt
                     */
                    MultiForm$0.prototype.performAction = function (source, evt) {
                        var value = this.__parent.select.getValue();
                        {
                            var array6634 = this.__parent.map.keySet();
                            for (var index6633 = 0; index6633 < array6634.length; index6633++) {
                                var name_8 = array6634[index6633];
                                {
                                    this.__parent.map.get(name_8).setVisible(/* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(name_8, value));
                                }
                            }
                        }
                    };
                    return MultiForm$0;
                }());
                MultiForm.MultiForm$0 = MultiForm$0;
                MultiForm$0["__interfaces"] = ["framework.EventListener"];
            })(MultiForm = data.MultiForm || (data.MultiForm = {}));
        })(data = builder.data || (builder.data = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var PopOverFooterItem = (function (_super) {
            __extends(PopOverFooterItem, _super);
            function PopOverFooterItem(name) {
                var _this = this;
                if (((typeof name === 'string') || name === null)) {
                    var __args = Array.prototype.slice.call(arguments);
                    _this = _super.call(this, name) || this;
                    (function () {
                        _this.setAttribute("identifier", "lgt:popover-footer-item");
                        _this.applyParam("state", framework.lightning.Button.STATE_RESET);
                        _this.addClass("slds-p-vertical").addClass("xx-small slds-size_1-of-1");
                        _this.applyParam("label", "Footer Item");
                    })();
                }
                else if (name === undefined) {
                    var __args = Array.prototype.slice.call(arguments);
                    {
                        var __args_3 = Array.prototype.slice.call(arguments);
                        var name_9 = "item";
                        _this = _super.call(this, name_9) || this;
                        (function () {
                            _this.setAttribute("identifier", "lgt:popover-footer-item");
                            _this.applyParam("state", framework.lightning.Button.STATE_RESET);
                            _this.addClass("slds-p-vertical").addClass("xx-small slds-size_1-of-1");
                            _this.applyParam("label", "Footer Item");
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return PopOverFooterItem;
        }(framework.designables.JSDesignableButton));
        lightning.PopOverFooterItem = PopOverFooterItem;
        PopOverFooterItem["__class"] = "framework.lightning.PopOverFooterItem";
        PopOverFooterItem["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
    })(lightning = framework.lightning || (framework.lightning = {}));
})(framework || (framework = {}));
(function (framework) {
    var builder;
    (function (builder) {
        var data;
        (function (data) {
            var DynaForm = (function (_super) {
                __extends(DynaForm, _super);
                function DynaForm(name) {
                    return _super.call(this, name) || this;
                }
                DynaForm.prototype.setFields = function (fields) {
                    for (var index6635 = 0; index6635 < fields.length; index6635++) {
                        var o = fields[index6635];
                        {
                            var name_10 = o["name"];
                            var type = o["type"];
                            var label = o["label"];
                            var element = new framework.lightning.FormElement("elem_" + name_10, "div");
                            element.setLabel(label);
                            var input = new framework.JSInput(name_10);
                            if (type == null || (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type.trim(), "") || (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "string") || (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "text")) {
                            }
                            else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "integer") || (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "numeric")) {
                                input = new framework.JSInput(name_10).setType(framework.InputTypes.number);
                            }
                            else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "select")) {
                                var options = o["options"];
                                var select = new framework.JSSelect(name_10);
                                for (var index6636 = 0; index6636 < options.length; index6636++) {
                                    var opt = options[index6636];
                                    {
                                        var text = opt["text"];
                                        var value = opt["value"];
                                        select.addOption(new framework.JSOption(text, value));
                                    }
                                }
                                input = select;
                            }
                            else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "multi")) {
                                var multi = new framework.builder.data.MultiForm(name_10);
                                var options = o["options"];
                                multi.setConfigs(options);
                                input = multi;
                            }
                            input.addClass("slds-input");
                            element.setInput(input);
                            this.addFormElement(element);
                        }
                    }
                };
                /**
                 *
                 * @return {Object}
                 */
                DynaForm.prototype.getValue = function () {
                    var result = new Object();
                    {
                        var array6638 = this.getElements();
                        for (var index6637 = 0; index6637 < array6638.length; index6637++) {
                            var element = array6638[index6637];
                            {
                                var value = element.getInput().getValue();
                                result[element.getInput().getName()] = value;
                            }
                        }
                    }
                    return result;
                };
                DynaForm.prototype.setValue$jsweet_lang_Object = function (val) {
                    {
                        var array6640 = this.getElements();
                        for (var index6639 = 0; index6639 < array6640.length; index6639++) {
                            var element = array6640[index6639];
                            {
                                var name_11 = element.getInput().getName();
                                if (val[name_11] != null) {
                                    var o = val[name_11];
                                    var __in = element.getInput();
                                    __in.setValue(o);
                                }
                            }
                        }
                    }
                };
                /**
                 *
                 * @param {Object} val
                 */
                DynaForm.prototype.setValue = function (val) {
                    if (((val != null && val instanceof Object) || val === null)) {
                        return this.setValue$jsweet_lang_Object(val);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return DynaForm;
            }(framework.lightning.FormLayout));
            data.DynaForm = DynaForm;
            DynaForm["__class"] = "framework.builder.data.DynaForm";
            DynaForm["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.InputField", "framework.Renderable"];
        })(data = builder.data || (builder.data = {}));
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
                    var _this = _super.call(this, name) || this;
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
                    var editor = parameter.getEditor(this.component);
                    if (editor != null) {
                        var element = new framework.lightning.FormElement("elem", "div");
                        element.setLabel(parameter.label);
                        element.setInput(editor);
                        this.addFormElement(element);
                    }
                    return this;
                };
                return BasePropertiesEditor;
            }(framework.lightning.FormLayout));
            properties.BasePropertiesEditor = BasePropertiesEditor;
            BasePropertiesEditor["__class"] = "framework.builder.properties.BasePropertiesEditor";
            BasePropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
(function (framework) {
    var lightning;
    (function (lightning) {
        var designables;
        (function (designables) {
            var JSDesignableFormLayout = (function (_super) {
                __extends(JSDesignableFormLayout, _super);
                function JSDesignableFormLayout() {
                    var _this = _super.call(this, "Form Layout") || this;
                    _this.applyParam("layout", "compound");
                    return _this;
                }
                /**
                 *
                 * @param {string} key
                 * @param {string} value
                 */
                JSDesignableFormLayout.prototype.applyParam = function (key, value) {
                    _super.prototype.applyParam.call(this, key, value);
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(key, "layout")) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "horizontal")) {
                            this.setHorizontal(true);
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "stacked")) {
                            this.setStacked(true);
                        }
                        else if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(value, "inline")) {
                            this.setInline(true);
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(value, "compound")) {
                            this.setCompound(true);
                        }
                        else {
                            this.setStacked(true);
                        }
                    }
                };
                /**
                 *
                 * @return {framework.design.Parameter[]}
                 */
                JSDesignableFormLayout.prototype.getParameters = function () {
                    var parameters = _super.prototype.getParameters.call(this);
                    var parameter = new framework.design.AttributeParameter("layout", "Layout", "Basic");
                    parameter.options.push(new framework.design.Option("Stacked", "stacked"));
                    parameter.options.push(new framework.design.Option("Horizontal", "horizontal"));
                    parameter.options.push(new framework.design.Option("inline", "inline"));
                    parameter.options.push(new framework.design.Option("Compound", "compound"));
                    parameters.push(parameter);
                    return parameters;
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableFormLayout.prototype.addDesignable = function (designable) {
                    if (designable != null && designable instanceof framework.lightning.FormElement) {
                        this.addFormElement(designable);
                    }
                    else {
                        console.error("Designable of type " + (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(designable.constructor) + " cannot be added to Form Layout");
                    }
                };
                /**
                 *
                 * @param {*} designable
                 */
                JSDesignableFormLayout.prototype.removeDesignable = function (designable) {
                    {
                        var array6642 = this.getElements();
                        for (var index6641 = 0; index6641 < array6642.length; index6641++) {
                            var element = array6642[index6641];
                            {
                                var b = (element != null && element instanceof framework.lightning.designables.JSDesignableFormElement);
                                if (b) {
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(element.getId(), designable.getId())) {
                                        this.removeChild(element);
                                        this.setRendered(false);
                                        return;
                                    }
                                }
                                else {
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(element.getInput().getId(), designable.getId())) {
                                        this.removeChild(element);
                                        this.setRendered(false);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                };
                /**
                 *
                 * @param {*} designable
                 * @param {number} steps
                 */
                JSDesignableFormLayout.prototype.moveDesignable = function (designable, steps) {
                    {
                        var array6644 = this.getElements();
                        for (var index6643 = 0; index6643 < array6644.length; index6643++) {
                            var element = array6644[index6643];
                            {
                                var b = (element != null && element instanceof framework.lightning.designables.JSDesignableFormElement);
                                if (b) {
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(element.getId(), designable.getId())) {
                                        _super.prototype.moveDesignable.call(this, element, steps);
                                    }
                                }
                                else {
                                    if ((function (o1, o2) { if (o1 && o1.equals) {
                                        return o1.equals(o2);
                                    }
                                    else {
                                        return o1 === o2;
                                    } })(element.getInput().getId(), designable.getId())) {
                                        _super.prototype.moveDesignable.call(this, element, steps);
                                    }
                                }
                            }
                        }
                    }
                };
                return JSDesignableFormLayout;
            }(framework.lightning.FormLayout));
            designables.JSDesignableFormLayout = JSDesignableFormLayout;
            JSDesignableFormLayout["__class"] = "framework.lightning.designables.JSDesignableFormLayout";
            JSDesignableFormLayout["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.Renderable"];
        })(designables = lightning.designables || (lightning.designables = {}));
    })(lightning = framework.lightning || (framework.lightning = {}));
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
                    {
                        var array6646 = this.component.getParameters();
                        for (var index6645 = 0; index6645 < array6646.length; index6645++) {
                            var p = array6646[index6645];
                            {
                                if ((function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(p.category, "advanced"))
                                    this.addProperty$framework_design_Parameter$framework_design_Designable(p, designable);
                            }
                        }
                    }
                };
                return AdvancedPropertiesEditor;
            }(framework.builder.properties.BasePropertiesEditor));
            properties.AdvancedPropertiesEditor = AdvancedPropertiesEditor;
            AdvancedPropertiesEditor["__class"] = "framework.builder.properties.AdvancedPropertiesEditor";
            AdvancedPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
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
                    {
                        var array6648 = designable.getParameters();
                        for (var index6647 = 0; index6647 < array6648.length; index6647++) {
                            var param = array6648[index6647];
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
                    }
                };
                return BasicPropertiesEditor;
            }(framework.builder.properties.BasePropertiesEditor));
            properties.BasicPropertiesEditor = BasicPropertiesEditor;
            BasicPropertiesEditor["__class"] = "framework.builder.properties.BasicPropertiesEditor";
            BasicPropertiesEditor["__interfaces"] = ["framework.interactions.Droppable", "framework.design.Designable", "framework.builder.properties.PropertiesEditor", "framework.Renderable"];
        })(properties = builder.properties || (builder.properties = {}));
    })(builder = framework.builder || (framework.builder = {}));
})(framework || (framework = {}));
framework.lightning.FormLayout.SPACING_XX_LARGE_$LI$();
framework.lightning.FormLayout.SPACING_X_LARGE_$LI$();
framework.lightning.FormLayout.SPACING_LARGE_$LI$();
framework.lightning.FormLayout.SPACING_MEDIUM_$LI$();
framework.lightning.FormLayout.SPACING_SMALL_$LI$();
framework.lightning.FormLayout.SPACING_X_SMALL_$LI$();
framework.lightning.FormLayout.SPACING_XX_SMALL_$LI$();
framework.lightning.FormLayout.SPACING_XXX_SMALL_$LI$();
framework.designables.JSDesignableButton.stateLabels_$LI$();
framework.designables.JSDesignableTextComponent.textTags_$LI$();
framework.designables.JSDesignableTextComponent.__static_initialize();
framework.lightning.Button.states_$LI$();
framework.builder.Builder.websocket_$LI$();
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
framework.lightning.PopOver.NUBIN_POSITIONS_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_XX_LARGE_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_X_LARGE_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_LARGE_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_MEDIUM_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_SMALL_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_X_SMALL_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_XX_SMALL_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_XXX_SMALL_$LI$();
framework.lightning.LTContainer.PADDING_SIZE_NONE_$LI$();
framework.lightning.LTContainer.Sizes_$LI$();
framework.JSContainer.defaultRenderer_$LI$();
framework.interactions.InteractionsDecorator.droppableRenderer_$LI$();
framework.interactions.InteractionsDecorator.draggableRenderer_$LI$();
framework.InputTypes.types_$LI$();
framework.core.BeanFactory.INSTANCE_$LI$();
framework.builder.editors.EventTypes.events_$LI$();
framework.builder.data.DataType.Types_$LI$();
framework.builder.data.BasicDataEnvironment.structures_$LI$();
framework.Boot.main(null);
