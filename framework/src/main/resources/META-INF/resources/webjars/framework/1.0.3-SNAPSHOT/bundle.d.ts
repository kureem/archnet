declare namespace framework {
    interface Clickable<T> {
        addOnClick(l: framework.EventListener): T;
        addOnDoubleClick(l: framework.EventListener): T;
    }
}
declare namespace framework {
    class Data {
    }
}
declare namespace framework {
    interface EventListener {
        performAction(source: framework.JSContainer, evt: Event): any;
    }
}
declare namespace framework {
    interface InputField<T> {
        getValue(): T;
        /**
         *
         * @param {string} val
         */
        setValue(val?: any): any;
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
declare namespace framework {
    class JSMap extends Object {
        getJavascript(): string;
    }
}
declare namespace framework {
    class Main {
        static main(args: string[]): void;
    }
    namespace Main {
        class Main$0 implements framework.EventListener {
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
declare namespace framework {
    interface Renderable {
        getChangedAttributes(): string[];
        getChangedStyles(): string[];
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
        setParameters(parameters: java.util.Map<string, string>): any;
    }
}
declare namespace framework.renderer {
    class ContainerRenderer implements framework.renderer.Renderer<framework.JSContainer> {
        doRender(c: framework.JSContainer, root: HTMLElement): void;
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
        doRender(c: framework.JSContainer, root: HTMLElement): any;
    }
}
declare namespace framework {
    class Static {
        static idCount: number;
    }
}
declare namespace framework {
    class TreeNode {
        text: string;
        nodes: java.util.List<TreeNode>;
        userObject: any;
        getText(): string;
        setText(text: string): void;
        getNodes(): java.util.List<TreeNode>;
        setNodes(nodes: java.util.List<TreeNode>): void;
        getUserObject(): any;
        setUserObject(userObject: any): void;
        constructor();
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
    /**
     *
     * @author Kurreem
     * @param {string} name
     * @param {string} tag
     * @class
     */
    class JSContainer implements framework.Renderable {
        /**
         *
         */
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
        getAncestorOfType<T extends JSContainer>(classType: any): T;
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
         * @param {*} parameters
         */
        setParameters(parameters: java.util.Map<string, string>): void;
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
    class JSTable extends framework.JSContainer {
        tbody: framework.JSContainer;
        thead: framework.JSContainer;
        tfoot: framework.JSContainer;
        constructor(name: string);
        toggleCls(b: boolean, cls: string): JSTable;
        setStriped(b: boolean): JSTable;
        setBordered(b: boolean): JSTable;
        setCondensed(b: boolean): JSTable;
        setHoverRows(b: boolean): JSTable;
        addHeaderCell(th: framework.JSContainer): JSTable;
        addFooterCell(td: framework.JSContainer): JSTable;
        addRow(): framework.Renderable;
        addRowAt(index: number): framework.Renderable;
    }
}
declare namespace framework {
    class JSTextArea extends framework.JSContainer {
        constructor(name: string);
    }
}
declare namespace framework {
    class JSTree extends framework.JSContainer {
        nodes: java.util.List<framework.TreeNode>;
        tree_: framework.JSContainer;
        constructor(name: string);
        getNodes(): java.util.List<framework.TreeNode>;
        setNodes(nodes: java.util.List<framework.TreeNode>): void;
        renderNodes(nodes: java.util.List<framework.TreeNode>, parent: framework.Renderable): void;
        getNodeUI(node: framework.TreeNode): framework.JSContainer;
        /**
         *
         * @param {HTMLElement} parent
         */
        render(parent?: any): any;
        render$(): void;
    }
}
declare namespace framework {
    class JSXHTMLFragment extends framework.JSContainer {
        templateId: string;
        constructor(name: string, templateId: string);
        getTemplateId(): string;
        setTemplateId(templateId: string): void;
        /**
         *
         * @return {string}
         */
        getHtml(): string;
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
    class BorderLayout extends framework.JSContainer {
        top: framework.JSContainer;
        left: framework.JSContainer;
        center: framework.JSContainer;
        right: framework.JSContainer;
        bottom: framework.JSContainer;
        constructor(name: string);
        addChild$framework_JSContainer$java_lang_String(child: framework.JSContainer, layoutData: string): BorderLayout;
        addChild(child?: any, layoutData?: any): any;
    }
}
declare namespace framework.lightning {
    class Button extends framework.JSContainer {
        static states: string[];
        static states_$LI$(): string[];
        constructor(name: string);
        addIcon(icon: framework.lightning.Icon): void;
        setState(state: string): void;
        setInverse(b: boolean): void;
        setDisabled(b: boolean): void;
        setStateful(b: boolean): void;
        setParameter(key: string, value: string): void;
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
    class GlobalHeader extends framework.JSContainer {
        constructor(name: string);
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
        use: framework.JSContainer;
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
    class Text extends framework.JSContainer {
        constructor(name: string, tag: string);
        toggleClass(cls: string, b: boolean): Text;
        setTruncate(b: boolean): Text;
    }
}
declare namespace framework {
    class JSPanel extends framework.JSXHTMLFragment {
        constructor(name: string);
    }
}
declare namespace framework.lightning {
    class DockedComposer extends framework.lightning.Grid {
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
    }
}
