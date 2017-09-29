/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
declare namespace JQueryUI {
    export interface AccordionEvents {
        activate? : any;

        beforeActivate? : any;

        create? : any;
    }
}
declare namespace JQueryUI {
    export interface SortableEvents {
        activate? : any;

        beforeStop? : any;

        change? : any;

        deactivate? : any;

        out? : any;

        over? : any;

        receive? : any;

        remove? : any;

        sort? : any;

        start? : any;

        stop? : any;

        update? : any;
    }
}
declare namespace JQueryUI {
    export interface ScaleEffect {
        direction? : string;

        origin? : string[];

        percent? : number;

        scale? : string;
    }
}
declare namespace JQueryUI {
    export interface Accordion extends JQueryUI.Widget {
        active? : any;

        animate? : any;

        collapsible? : boolean;

        disabled? : boolean;

        event? : string;

        header? : string;

        heightStyle? : string;

        icons? : any;
    }
}
declare namespace JQueryUI {
    export interface Sortable extends JQueryUI.Widget {
        appendTo? : any;

        axis? : string;

        cancel? : any;

        connectWith? : any;

        containment? : any;

        cursor? : string;

        cursorAt? : any;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        dropOnEmpty? : boolean;

        forceHelperSize? : boolean;

        forcePlaceholderSize? : boolean;

        grid? : number[];

        helper? : ((string)|((p1: Event, p2: Sortable) => Element));

        handle? : any;

        items? : any;

        opacity? : number;

        placeholder? : string;

        revert? : any;

        scroll? : boolean;

        scrollSensitivity? : number;

        scrollSpeed? : number;

        tolerance? : string;

        zIndex? : number;

        activate? : any;

        beforeStop? : any;

        change? : any;

        deactivate? : any;

        out? : any;

        over? : any;

        receive? : any;

        remove? : any;

        sort? : any;

        start? : any;

        stop? : any;

        update? : any;
    }
}
declare namespace JQueryUI {
    export interface DialogEvents {
        beforeClose? : any;

        close? : any;

        create? : any;

        drag? : any;

        dragStart? : any;

        dragStop? : any;

        focus? : any;

        open? : any;

        resize? : any;

        resizeStart? : any;

        resizeStop? : any;
    }
}
declare namespace JQueryUI {
    export interface SpinnerOptions extends JQueryUI.SpinnerEvents {
        culture? : string;

        disabled? : boolean;

        icons? : any;

        incremental? : any;

        max? : any;

        min? : any;

        numberFormat? : string;

        page? : number;

        step? : any;
    }
}
declare namespace JQueryUI {
    export interface DialogOptions extends JQueryUI.DialogEvents {
        autoOpen? : boolean;

        buttons? : ((any)|(JQueryUI.DialogButtonOptions[]));

        closeOnEscape? : boolean;

        closeText? : string;

        appendTo? : string;

        dialogClass? : string;

        disabled? : boolean;

        draggable? : boolean;

        height? : ((number)|(string));

        hide? : any;

        maxHeight? : number;

        maxWidth? : number;

        minHeight? : number;

        minWidth? : number;

        modal? : boolean;

        position? : any;

        resizable? : boolean;

        show? : any;

        stack? : boolean;

        title? : string;

        width? : any;

        zIndex? : number;

        open? : any;

        close? : any;
    }
}
declare namespace JQueryUI {
    export interface DialogButtonOptions {
        icons? : any;

        showText? : ((string)|(boolean));

        text? : string;

        click? : (p1: JQueryEventObject) => any;

        [attr : string]: any;
    }
}
declare namespace JQueryUI {
    export interface ResizableEvent {
        (event : Event, ui : JQueryUI.ResizableUIParams);
    }
}
declare namespace JQueryUI {
    export interface Tabs extends JQueryUI.Widget {
        active? : any;

        collapsible? : boolean;

        disabled? : any;

        event? : string;

        heightStyle? : string;

        hide? : any;

        show? : any;
    }
}
declare namespace JQueryUI {
    export interface DialogEvent {
        (event : Event, ui : JQueryUI.DialogUIParams);
    }
}
declare namespace JQueryUI {
    export interface Button extends JQueryUI.Widget {
        disabled? : boolean;

        icons? : any;

        label? : string;

        text? : ((string)|(boolean));

        click? : (p1: Event) => void;
    }
}
declare namespace JQueryUI {
    export interface MenuEvents {
        blur? : any;

        create? : any;

        focus? : any;

        select? : any;
    }
}
declare namespace JQueryUI {
    export interface ProgressbarOptions extends JQueryUI.ProgressbarEvents {
        disabled? : boolean;

        value? : ((number)|(boolean));

        max? : number;
    }
}
declare namespace JQueryUI {
    export interface TabsOptions extends JQueryUI.TabsEvents {
        active? : any;

        collapsible? : boolean;

        disabled? : any;

        event? : string;

        heightStyle? : string;

        hide? : any;

        show? : any;
    }
}
declare namespace JQueryUI {
    export interface AutocompleteUIParams {
        /**
         * The item selected from the menu, if any. Otherwise the property is null
         */
        item? : any;
    }
}
declare namespace JQueryUI {
    export interface PulsateEffect {
        times? : number;
    }
}
declare namespace JQueryUI {
    export interface MenuOptions extends JQueryUI.MenuEvents {
        disabled? : boolean;

        icons? : any;

        menus? : string;

        position? : any;

        role? : string;
    }
}
declare namespace JQueryUI {
    export interface TabsCreateOrLoadUIParams {
        tab : JQuery;

        panel : JQuery;
    }
}
declare namespace JQueryUI {
    export interface SpinnerEvents {
        change? : any;

        create? : any;

        spin? : any;

        start? : any;

        stop? : any;
    }
}
declare namespace JQueryUI {
    export interface SelectMenuEvents {
        change? : any;

        close? : any;

        create? : any;

        focus? : any;

        open? : any;

        select? : any;
    }
}
declare namespace JQueryUI {
    export interface AutocompleteEvent {
        (event : Event, ui : JQueryUI.AutocompleteUIParams);
    }
}
declare namespace JQueryUI {
    export interface FoldEffect {
        size? : any;

        horizFirst? : boolean;
    }
}
declare namespace JQueryUI {
    export interface SpinnerEvent<T> {
        (event : Event, ui : T);
    }
}
declare namespace JQueryUI {
    export interface SortableOptions extends JQueryUI.SortableEvents {
        appendTo? : any;

        axis? : string;

        cancel? : any;

        connectWith? : any;

        containment? : any;

        cursor? : string;

        cursorAt? : any;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        dropOnEmpty? : boolean;

        forceHelperSize? : boolean;

        forcePlaceholderSize? : boolean;

        grid? : number[];

        helper? : ((string)|((p1: Event, p2: JQueryUI.Sortable) => Element));

        handle? : any;

        items? : any;

        opacity? : number;

        placeholder? : string;

        revert? : any;

        scroll? : boolean;

        scrollSensitivity? : number;

        scrollSpeed? : number;

        tolerance? : string;

        zIndex? : number;
    }
}
declare namespace JQueryUI {
    export interface DraggableEvents {
        create? : any;

        start? : any;

        drag? : any;

        stop? : any;
    }
}
declare namespace JQueryUI {}
declare namespace JQueryUI {
    export interface TooltipUIParams {    }
}
declare namespace JQueryUI {
    export interface SizeEffect {
        to? : any;

        origin? : string[];

        scale? : string;
    }
}
declare namespace JQueryUI {
    export interface DroppableEvent {
        (event : Event, ui : JQueryUI.DroppableEventUIParam);
    }
}
declare namespace JQueryUI {
    export interface ProgressbarEvent {
        (event : Event, ui : JQueryUI.ProgressbarUIParams);
    }
}
declare namespace JQueryUI {
    export interface TooltipOptions extends JQueryUI.TooltipEvents {
        content? : any;

        disabled? : boolean;

        hide? : any;

        items? : string;

        position? : any;

        show? : any;

        tooltipClass? : string;

        track? : boolean;
    }
}
declare namespace JQueryUI {
    export interface Tooltip extends JQueryUI.Widget {
        content? : any;

        disabled? : boolean;

        hide? : any;

        items? : string;

        position? : any;

        show? : any;

        tooltipClass? : string;

        track? : boolean;
    }
}
declare namespace JQueryUI {
    export interface SortableEvent {
        (event : JQueryEventObject, ui : JQueryUI.SortableUIParams);
    }
}
declare namespace JQueryUI {
    export interface Slider extends JQueryUI.Widget {
        animate? : any;

        disabled? : boolean;

        max? : number;

        min? : number;

        orientation? : string;

        range? : any;

        step? : number;

        value? : number;

        values? : number[];

        highlight? : boolean;
    }
}
declare namespace JQueryUI {
    export interface ClipEffect {
        direction? : number;
    }
}
declare namespace JQueryUI {
    export interface HighlightEffect {
        color? : string;
    }
}
declare namespace JQueryUI {
    export interface EffectOptions {
        effect : string;

        easing? : string;

        duration? : number;

        complete : any;
    }
}
declare namespace JQueryUI {
    export interface Spinner extends JQueryUI.Widget {
        culture? : string;

        disabled? : boolean;

        icons? : any;

        incremental? : any;

        max? : any;

        min? : any;

        numberFormat? : string;

        page? : number;

        step? : any;
    }
}
declare namespace JQueryUI {
    export interface TabsEvent<UI> {
        (event : Event, ui : UI);
    }
}
declare namespace JQueryUI {
    export interface Droppable extends JQueryUI.Widget {
        accept? : any;

        activeClass? : string;

        addClasses? : boolean;

        disabled? : boolean;

        greedy? : boolean;

        hoverClass? : string;

        scope? : string;

        tolerance? : string;
    }
}
declare namespace JQueryUI {
    export interface AutocompleteEvents {
        change? : any;

        close? : any;

        create? : any;

        focus? : any;

        open? : any;

        response? : any;

        search? : any;

        select? : any;
    }
}
declare namespace JQueryUI {
    export interface JQueryPositionOptions {
        my? : string;

        at? : string;

        of? : any;

        collision? : string;

        using? : any;

        within? : any;
    }
}
declare namespace JQueryUI {
    export interface MenuEvent {
        (event : Event, ui : JQueryUI.MenuUIParams);
    }
}
declare namespace JQueryUI {
    export interface Selectable extends JQueryUI.Widget {
        autoRefresh? : boolean;

        cancel? : string;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        filter? : string;

        tolerance? : string;
    }
}
declare namespace JQueryUI {
    export interface DraggableEvent {
        (event : Event, ui : JQueryUI.DraggableEventUIParams);
    }
}
declare namespace JQueryUI {
    export interface ShakeEffect {
        direction? : string;

        distance? : number;

        times? : number;
    }
}
declare namespace JQueryUI {
    export interface WidgetOptions {
        disabled? : boolean;

        hide? : any;

        show? : any;
    }
}
declare namespace JQueryUI {
    export interface SortableUIParams {
        helper : JQuery;

        item : JQuery;

        offset : any;

        position : any;

        originalPosition : any;

        sender : JQuery;

        placeholder : JQuery;
    }
}
declare namespace JQueryUI {
    export interface DialogShowHideOptions {
        effect : string;

        delay? : number;

        duration? : number;

        easing? : string;
    }
}
declare namespace JQueryUI {
    export interface DroppableEventUIParam {
        draggable : JQuery;

        helper : JQuery;

        position : any;

        offset : any;
    }
}
declare namespace JQueryUI {
    export interface Progressbar extends JQueryUI.Widget {
        disabled? : boolean;

        value? : ((number)|(boolean));

        max? : number;
    }
}
declare namespace JQueryUI {
    export interface SliderOptions extends JQueryUI.SliderEvents {
        animate? : any;

        disabled? : boolean;

        max? : number;

        min? : number;

        orientation? : string;

        range? : any;

        step? : number;

        value? : number;

        values? : number[];

        highlight? : boolean;
    }
}
declare namespace JQueryUI {
    export interface SelectableOptions extends JQueryUI.SelectableEvents {
        autoRefresh? : boolean;

        cancel? : string;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        filter? : string;

        tolerance? : string;
    }
}
declare namespace JQueryUI {
    export interface MenuUIParams {
        item? : JQuery;
    }
}
declare namespace JQueryUI {
    export interface ResizableUIParams {
        element : JQuery;

        helper : JQuery;

        originalElement : JQuery;

        originalPosition : any;

        originalSize : any;

        position : any;

        size : any;
    }
}
declare namespace JQueryUI {
    export interface SelectMenuUIParams {
        item? : JQuery;
    }
}
declare namespace JQueryUI {
    export interface KeyCode {
        BACKSPACE : number;

        COMMA : number;

        DELETE : number;

        DOWN : number;

        END : number;

        ENTER : number;

        ESCAPE : number;

        HOME : number;

        LEFT : number;

        NUMPAD_ADD : number;

        NUMPAD_DECIMAL : number;

        NUMPAD_DIVIDE : number;

        NUMPAD_ENTER : number;

        NUMPAD_MULTIPLY : number;

        NUMPAD_SUBTRACT : number;

        PAGE_DOWN : number;

        PAGE_UP : number;

        PERIOD : number;

        RIGHT : number;

        SPACE : number;

        TAB : number;

        UP : number;
    }
}
declare namespace JQueryUI {
    export interface ButtonOptions {
        disabled? : boolean;

        icons? : any;

        label? : string;

        text? : ((string)|(boolean));

        click? : (p1: Event) => void;
    }
}
declare namespace JQueryUI {
    export interface DroppableEvents {
        create? : any;

        activate? : any;

        deactivate? : any;

        over? : any;

        out? : any;

        drop? : any;
    }
}
declare namespace JQueryUI {
    export interface ProgressbarUIParams {    }
}
declare namespace JQueryUI {
    export interface SelectableEvents {
        selected(event : Event, ui : any);

        selecting(event : Event, ui : any);

        start(event : Event, ui : any);

        stop(event : Event, ui : any);

        unselected(event : Event, ui : any);

        unselecting(event : Event, ui : any);
    }
}
declare namespace JQueryUI {
    export interface AccordionUIParams {
        newHeader : JQuery;

        oldHeader : JQuery;

        newPanel : JQuery;

        oldPanel : JQuery;
    }
}
declare namespace JQueryUI {
    export interface SelectMenu extends JQueryUI.Widget {
        appendTo? : string;

        disabled? : boolean;

        icons? : any;

        position? : JQueryUI.JQueryPositionOptions;

        width? : number;
    }
}
declare namespace JQueryUI {
    export interface Draggable extends JQueryUI.Widget {
        disabled? : boolean;

        addClasses? : boolean;

        appendTo? : any;

        axis? : string;

        cancel? : string;

        connectToSortable? : any;

        containment? : any;

        cursor? : string;

        cursorAt? : any;

        delay? : number;

        distance? : number;

        grid? : number[];

        handle? : any;

        helper? : any;

        iframeFix? : any;

        opacity? : number;

        refreshPositions? : boolean;

        revert? : any;

        revertDuration? : number;

        scope? : string;

        scroll? : boolean;

        scrollSensitivity? : number;

        scrollSpeed? : number;

        snap? : any;

        snapMode? : string;

        snapTolerance? : number;

        stack? : string;

        zIndex? : number;
    }
}
declare namespace JQueryUI {
    export interface DatepickerOptions {
        /**
         * An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
         */
        altField? : any;

        /**
         * The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function
         */
        altFormat? : string;

        /**
         * The text to display after each date field, e.g., to show the required format.
         */
        appendText? : string;

        /**
         * Set to true to automatically resize the input field to accommodate dates in the current dateFormat.
         */
        autoSize? : boolean;

        /**
         * A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
         */
        beforeShow? : (p1: Element, p2: any) => JQueryUI.DatepickerOptions;

        /**
         * A function that takes a date as a parameter and must return an array with:
         * [0]: true/false indicating whether or not this date is selectable
         * [1]: a CSS class name to add to the date's cell or "" for the default presentation
         * [2]: an optional popup tooltip for this date
         * The function is called for each day in the datepicker before it is displayed.
         */
        beforeShowDay? : (p1: Date) => any[];

        /**
         * A URL of an image to use to display the datepicker when the showOn option is set to "button" or "both". If set, the buttonText option becomes the alt value and is not directly displayed.
         */
        buttonImage? : string;

        /**
         * Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set.
         */
        buttonImageOnly? : boolean;

        /**
         * The text to display on the trigger button. Use in conjunction with the showOn option set to "button" or "both".
         */
        buttonText? : string;

        /**
         * A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.
         */
        calculateWeek? : (p1: Date) => string;

        /**
         * Whether the month should be rendered as a dropdown instead of text.
         */
        changeMonth? : boolean;

        /**
         * Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection.
         */
        changeYear? : boolean;

        /**
         * The text to display for the close link. Use the showButtonPanel option to display this button.
         */
        closeText? : string;

        /**
         * When true, entry in the input field is constrained to those characters allowed by the current dateFormat option.
         */
        constrainInput? : boolean;

        /**
         * The text to display for the current day link. Use the showButtonPanel option to display this button.
         */
        currentText? : string;

        /**
         * The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function.
         */
        dateFormat? : string;

        /**
         * The list of long day names, starting from Sunday, for use as requested via the dateFormat option.
         */
        dayNames? : string[];

        /**
         * The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.
         */
        dayNamesMin? : string[];

        /**
         * The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option.
         */
        dayNamesShort? : string[];

        /**
         * Set the date to highlight on first opening if the field is blank. Specify either an actual date via a Date object or as a string in the current dateFormat, or a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +7d'), or null for today.
         * Multiple types supported:
         * Date: A date object containing the default date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        defaultDate? : any;

        /**
         * Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
         */
        duration? : string;

        /**
         * Set the first day of the week: Sunday is 0, Monday is 1, etc.
         */
        firstDay? : number;

        /**
         * When true, the current day link moves to the currently selected date instead of today.
         */
        gotoCurrent? : boolean;

        /**
         * Normally the previous and next links are disabled when not applicable (see the minDate and maxDate options). You can hide them altogether by setting this attribute to true.
         */
        hideIfNoPrevNext? : boolean;

        /**
         * Whether the current language is drawn from right to left.
         */
        isRTL? : boolean;

        /**
         * The maximum selectable date. When set to null, there is no maximum.
         * Multiple types supported:
         * Date: A date object containing the maximum date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        maxDate? : any;

        /**
         * The minimum selectable date. When set to null, there is no minimum.
         * Multiple types supported:
         * Date: A date object containing the minimum date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        minDate? : any;

        /**
         * The list of full month names, for use as requested via the dateFormat option.
         */
        monthNames? : string[];

        /**
         * The list of abbreviated month names, as used in the month header on each datepicker and as requested via the dateFormat option.
         */
        monthNamesShort? : string[];

        /**
         * Whether the prevText and nextText options should be parsed as dates by the formatDate function, allowing them to display the target month names for example.
         */
        navigationAsDateFormat? : boolean;

        /**
         * The text to display for the next month link. With the standard ThemeRoller styling, this value is replaced by an icon.
         */
        nextText? : string;

        /**
         * The number of months to show at once.
         * Multiple types supported:
         * Number: The number of months to display in a single row.
         * Array: An array defining the number of rows and columns to display.
         */
        numberOfMonths? : any;

        /**
         * Called when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. this refers to the associated input field.
         */
        onChangeMonthYear? : (p1: number, p2: number, p3: any) => void;

        /**
         * Called when the datepicker is closed, whether or not a date is selected. The function receives the selected date as text ("" if none) and the datepicker instance as parameters. this refers to the associated input field.
         */
        onClose? : (p1: string, p2: any) => void;

        /**
         * Called when the datepicker is selected. The function receives the selected date as text and the datepicker instance as parameters. this refers to the associated input field.
         */
        onSelect? : (p1: string, p2: any) => void;

        /**
         * The text to display for the previous month link. With the standard ThemeRoller styling, this value is replaced by an icon.
         */
        prevText? : string;

        /**
         * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
         */
        selectOtherMonths? : boolean;

        /**
         * The cutoff year for determining the century for a date (used in conjunction with dateFormat 'y'). Any dates entered with a year value less than or equal to the cutoff year are considered to be in the current century, while those greater than it are deemed to be in the previous century.
         * Multiple types supported:
         * Number: A value between 0 and 99 indicating the cutoff year.
         * String: A relative number of years from the current year, e.g., "+3" or "-5".
         */
        shortYearCutoff? : any;

        /**
         * The name of the animation used to show and hide the datepicker. Use "show" (the default), "slideDown", "fadeIn", any of the jQuery UI effects. Set to an empty string to disable animation.
         */
        showAnim? : string;

        /**
         * Whether to display a button pane underneath the calendar. The button pane contains two buttons, a Today button that links to the current day, and a Done button that closes the datepicker. The buttons' text can be customized using the currentText and closeText options respectively.
         */
        showButtonPanel? : boolean;

        /**
         * When displaying multiple months via the numberOfMonths option, the showCurrentAtPos option defines which position to display the current month in.
         */
        showCurrentAtPos? : number;

        /**
         * Whether to show the month after the year in the header.
         */
        showMonthAfterYear? : boolean;

        /**
         * When the datepicker should appear. The datepicker can appear when the field receives focus ("focus"), when a button is clicked ("button"), or when either event occurs ("both").
         */
        showOn? : string;

        /**
         * If using one of the jQuery UI effects for the showAnim option, you can provide additional settings for that animation via this option.
         */
        showOptions? : any;

        /**
         * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
         */
        showOtherMonths? : boolean;

        /**
         * When true, a column is added to show the week of the year. The calculateWeek option determines how the week of the year is calculated. You may also want to change the firstDay option.
         */
        showWeek? : boolean;

        /**
         * Set how many months to move when clicking the previous/next links.
         */
        stepMonths? : number;

        /**
         * The text to display for the week of the year column heading. Use the showWeek option to display this column.
         */
        weekHeader? : string;

        /**
         * The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn"). Note that this option only affects what appears in the drop-down, to restrict which dates may be selected use the minDate and/or maxDate options.
         */
        yearRange? : string;

        /**
         * Additional text to display after the year in the month headers.
         */
        yearSuffix? : string;

        /**
         * Set to true to automatically hide the datepicker.
         */
        autohide? : boolean;

        /**
         * Set to date to automatically enddate the datepicker.
         */
        endDate? : Date;
    }
}
declare namespace JQueryUI {
    export interface UI {
        mouse(method : string) : JQuery;

        mouse(options : JQueryUI.MouseOptions) : JQuery;

        mouse(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

        mouse(optionLiteral : string, optionValue : any) : any;

        accordion : JQueryUI.Accordion;

        autocomplete : JQueryUI.Autocomplete;

        button : JQueryUI.Button;

        buttonset : JQueryUI.Button;

        datepicker : JQueryUI.Datepicker;

        dialog : JQueryUI.Dialog;

        keyCode : JQueryUI.KeyCode;

        menu : JQueryUI.Menu;

        progressbar : JQueryUI.Progressbar;

        slider : JQueryUI.Slider;

        spinner : JQueryUI.Spinner;

        tabs : JQueryUI.Tabs;

        tooltip : JQueryUI.Tooltip;

        version : string;
    }
}
declare namespace JQueryUI {
    export interface AutocompleteOptions extends JQueryUI.AutocompleteEvents {
        appendTo? : any;

        autoFocus? : boolean;

        delay? : number;

        disabled? : boolean;

        minLength? : number;

        position? : any;

        source? : any;
    }
}
declare namespace JQueryUI {
    export interface SelectMenuEvent {
        (event : Event, ui : JQueryUI.SelectMenuUIParams);
    }
}
declare namespace JQueryUI {
    export interface SpinnerUIParam {
        value : number;
    }
}
declare namespace JQueryUI {
    export interface DraggableOptions extends JQueryUI.DraggableEvents {
        disabled? : boolean;

        addClasses? : boolean;

        appendTo? : any;

        axis? : string;

        cancel? : string;

        connectToSortable? : any;

        containment? : any;

        cursor? : string;

        cursorAt? : any;

        delay? : number;

        distance? : number;

        grid? : number[];

        handle? : any;

        helper? : any;

        iframeFix? : any;

        opacity? : number;

        refreshPositions? : boolean;

        revert? : any;

        revertDuration? : number;

        scope? : string;

        scroll? : boolean;

        scrollSensitivity? : number;

        scrollSpeed? : number;

        snap? : any;

        snapMode? : string;

        snapTolerance? : number;

        stack? : string;

        zIndex? : number;
    }
}
declare namespace JQueryUI {
    export interface SliderEvents {
        change? : any;

        create? : any;

        slide? : any;

        start? : any;

        stop? : any;
    }
}
declare namespace JQueryUI {
    export interface SlideEffect {
        direction? : string;

        distance? : number;
    }
}
declare namespace JQueryUI {
    export interface Autocomplete extends JQueryUI.Widget {
        escapeRegex : (p1: string) => string;

        filter : (p1: any, p2: string) => any;

        appendTo? : any;

        autoFocus? : boolean;

        delay? : number;

        disabled? : boolean;

        minLength? : number;

        position? : any;

        source? : any;
    }
}
declare namespace JQueryUI {
    export interface ResizableOptions extends JQueryUI.ResizableEvents {
        alsoResize? : any;

        animate? : boolean;

        animateDuration? : any;

        animateEasing? : string;

        aspectRatio? : any;

        autoHide? : boolean;

        cancel? : string;

        containment? : any;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        ghost? : boolean;

        grid? : any;

        handles? : any;

        helper? : string;

        maxHeight? : number;

        maxWidth? : number;

        minHeight? : number;

        minWidth? : number;
    }
}
declare namespace JQueryUI {
    export interface PuffEffect {
        percent? : number;
    }
}
declare namespace JQueryUI {
    export interface DraggableEventUIParams {
        helper : JQuery;

        position : any;

        offset : any;
    }
}
declare namespace JQueryUI {
    export interface AccordionEvent {
        (event : Event, ui : JQueryUI.AccordionUIParams);
    }
}
declare namespace JQueryUI {
    export interface DatepickerFormatDateOptions {
        dayNamesShort? : string[];

        dayNames? : string[];

        monthNamesShort? : string[];

        monthNames? : string[];
    }
}
declare namespace JQueryUI {
    export interface Dialog extends JQueryUI.Widget {
        autoOpen? : boolean;

        buttons? : ((any)|(JQueryUI.DialogButtonOptions[]));

        closeOnEscape? : boolean;

        closeText? : string;

        appendTo? : string;

        dialogClass? : string;

        disabled? : boolean;

        draggable? : boolean;

        height? : ((number)|(string));

        hide? : any;

        maxHeight? : number;

        maxWidth? : number;

        minHeight? : number;

        minWidth? : number;

        modal? : boolean;

        position? : any;

        resizable? : boolean;

        show? : any;

        stack? : boolean;

        title? : string;

        width? : any;

        zIndex? : number;

        open? : any;

        close? : any;
    }
}
declare namespace JQueryUI {
    export interface Resizable extends JQueryUI.Widget {
        alsoResize? : any;

        animate? : boolean;

        animateDuration? : any;

        animateEasing? : string;

        aspectRatio? : any;

        autoHide? : boolean;

        cancel? : string;

        containment? : any;

        delay? : number;

        disabled? : boolean;

        distance? : number;

        ghost? : boolean;

        grid? : any;

        handles? : any;

        helper? : string;

        maxHeight? : number;

        maxWidth? : number;

        minHeight? : number;

        minWidth? : number;
    }
}
declare namespace JQueryUI {
    export interface DropEffect {
        direction? : number;
    }
}
declare namespace JQueryUI {
    export interface ResizableEvents {
        resize? : any;

        start? : any;

        stop? : any;

        create? : any;
    }
}
declare namespace JQueryUI {
    export interface ProgressbarEvents {
        change? : any;

        complete? : any;

        create? : any;
    }
}
declare namespace JQueryUI {
    export interface Datepicker extends JQueryUI.Widget {
        regional : any;

        setDefaults(defaults : JQueryUI.DatepickerOptions);

        formatDate(format : string, date : Date, settings : JQueryUI.DatepickerFormatDateOptions) : string;

        parseDate(format : string, date : string, settings : JQueryUI.DatepickerFormatDateOptions) : Date;

        iso8601Week(date : Date) : number;

        noWeekends(date : Date) : any[];

        /**
         * An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
         */
        altField? : any;

        /**
         * The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function
         */
        altFormat? : string;

        /**
         * The text to display after each date field, e.g., to show the required format.
         */
        appendText? : string;

        /**
         * Set to true to automatically resize the input field to accommodate dates in the current dateFormat.
         */
        autoSize? : boolean;

        /**
         * A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
         */
        beforeShow? : (p1: Element, p2: any) => JQueryUI.DatepickerOptions;

        /**
         * A function that takes a date as a parameter and must return an array with:
         * [0]: true/false indicating whether or not this date is selectable
         * [1]: a CSS class name to add to the date's cell or "" for the default presentation
         * [2]: an optional popup tooltip for this date
         * The function is called for each day in the datepicker before it is displayed.
         */
        beforeShowDay? : (p1: Date) => any[];

        /**
         * A URL of an image to use to display the datepicker when the showOn option is set to "button" or "both". If set, the buttonText option becomes the alt value and is not directly displayed.
         */
        buttonImage? : string;

        /**
         * Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set.
         */
        buttonImageOnly? : boolean;

        /**
         * The text to display on the trigger button. Use in conjunction with the showOn option set to "button" or "both".
         */
        buttonText? : string;

        /**
         * A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.
         */
        calculateWeek? : (p1: Date) => string;

        /**
         * Whether the month should be rendered as a dropdown instead of text.
         */
        changeMonth? : boolean;

        /**
         * Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection.
         */
        changeYear? : boolean;

        /**
         * The text to display for the close link. Use the showButtonPanel option to display this button.
         */
        closeText? : string;

        /**
         * When true, entry in the input field is constrained to those characters allowed by the current dateFormat option.
         */
        constrainInput? : boolean;

        /**
         * The text to display for the current day link. Use the showButtonPanel option to display this button.
         */
        currentText? : string;

        /**
         * The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function.
         */
        dateFormat? : string;

        /**
         * The list of long day names, starting from Sunday, for use as requested via the dateFormat option.
         */
        dayNames? : string[];

        /**
         * The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.
         */
        dayNamesMin? : string[];

        /**
         * The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option.
         */
        dayNamesShort? : string[];

        /**
         * Set the date to highlight on first opening if the field is blank. Specify either an actual date via a Date object or as a string in the current dateFormat, or a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +7d'), or null for today.
         * Multiple types supported:
         * Date: A date object containing the default date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        defaultDate? : any;

        /**
         * Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
         */
        duration? : string;

        /**
         * Set the first day of the week: Sunday is 0, Monday is 1, etc.
         */
        firstDay? : number;

        /**
         * When true, the current day link moves to the currently selected date instead of today.
         */
        gotoCurrent? : boolean;

        /**
         * Normally the previous and next links are disabled when not applicable (see the minDate and maxDate options). You can hide them altogether by setting this attribute to true.
         */
        hideIfNoPrevNext? : boolean;

        /**
         * Whether the current language is drawn from right to left.
         */
        isRTL? : boolean;

        /**
         * The maximum selectable date. When set to null, there is no maximum.
         * Multiple types supported:
         * Date: A date object containing the maximum date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        maxDate? : any;

        /**
         * The minimum selectable date. When set to null, there is no minimum.
         * Multiple types supported:
         * Date: A date object containing the minimum date.
         * Number: A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
         * String: A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
         */
        minDate? : any;

        /**
         * The list of full month names, for use as requested via the dateFormat option.
         */
        monthNames? : string[];

        /**
         * The list of abbreviated month names, as used in the month header on each datepicker and as requested via the dateFormat option.
         */
        monthNamesShort? : string[];

        /**
         * Whether the prevText and nextText options should be parsed as dates by the formatDate function, allowing them to display the target month names for example.
         */
        navigationAsDateFormat? : boolean;

        /**
         * The text to display for the next month link. With the standard ThemeRoller styling, this value is replaced by an icon.
         */
        nextText? : string;

        /**
         * The number of months to show at once.
         * Multiple types supported:
         * Number: The number of months to display in a single row.
         * Array: An array defining the number of rows and columns to display.
         */
        numberOfMonths? : any;

        /**
         * Called when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. this refers to the associated input field.
         */
        onChangeMonthYear? : (p1: number, p2: number, p3: any) => void;

        /**
         * Called when the datepicker is closed, whether or not a date is selected. The function receives the selected date as text ("" if none) and the datepicker instance as parameters. this refers to the associated input field.
         */
        onClose? : (p1: string, p2: any) => void;

        /**
         * Called when the datepicker is selected. The function receives the selected date as text and the datepicker instance as parameters. this refers to the associated input field.
         */
        onSelect? : (p1: string, p2: any) => void;

        /**
         * The text to display for the previous month link. With the standard ThemeRoller styling, this value is replaced by an icon.
         */
        prevText? : string;

        /**
         * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
         */
        selectOtherMonths? : boolean;

        /**
         * The cutoff year for determining the century for a date (used in conjunction with dateFormat 'y'). Any dates entered with a year value less than or equal to the cutoff year are considered to be in the current century, while those greater than it are deemed to be in the previous century.
         * Multiple types supported:
         * Number: A value between 0 and 99 indicating the cutoff year.
         * String: A relative number of years from the current year, e.g., "+3" or "-5".
         */
        shortYearCutoff? : any;

        /**
         * The name of the animation used to show and hide the datepicker. Use "show" (the default), "slideDown", "fadeIn", any of the jQuery UI effects. Set to an empty string to disable animation.
         */
        showAnim? : string;

        /**
         * Whether to display a button pane underneath the calendar. The button pane contains two buttons, a Today button that links to the current day, and a Done button that closes the datepicker. The buttons' text can be customized using the currentText and closeText options respectively.
         */
        showButtonPanel? : boolean;

        /**
         * When displaying multiple months via the numberOfMonths option, the showCurrentAtPos option defines which position to display the current month in.
         */
        showCurrentAtPos? : number;

        /**
         * Whether to show the month after the year in the header.
         */
        showMonthAfterYear? : boolean;

        /**
         * When the datepicker should appear. The datepicker can appear when the field receives focus ("focus"), when a button is clicked ("button"), or when either event occurs ("both").
         */
        showOn? : string;

        /**
         * If using one of the jQuery UI effects for the showAnim option, you can provide additional settings for that animation via this option.
         */
        showOptions? : any;

        /**
         * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
         */
        showOtherMonths? : boolean;

        /**
         * When true, a column is added to show the week of the year. The calculateWeek option determines how the week of the year is calculated. You may also want to change the firstDay option.
         */
        showWeek? : boolean;

        /**
         * Set how many months to move when clicking the previous/next links.
         */
        stepMonths? : number;

        /**
         * The text to display for the week of the year column heading. Use the showWeek option to display this column.
         */
        weekHeader? : string;

        /**
         * The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn"). Note that this option only affects what appears in the drop-down, to restrict which dates may be selected use the minDate and/or maxDate options.
         */
        yearRange? : string;

        /**
         * Additional text to display after the year in the month headers.
         */
        yearSuffix? : string;

        /**
         * Set to true to automatically hide the datepicker.
         */
        autohide? : boolean;

        /**
         * Set to date to automatically enddate the datepicker.
         */
        endDate? : Date;

        formatDate(format : string, date : Date) : string;

        parseDate(format : string, date : string) : Date;
    }
}
declare namespace JQueryUI {
    export interface TabsEvents {
        activate? : any;

        beforeActivate? : any;

        beforeLoad? : any;

        load? : any;

        create? : any;
    }
}
declare namespace JQueryUI {
    export interface TabsActivationUIParams {
        newTab : JQuery;

        oldTab : JQuery;

        newPanel : JQuery;

        oldPanel : JQuery;
    }
}
declare namespace JQueryUI {
    export interface AccordionOptions extends JQueryUI.AccordionEvents {
        active? : any;

        animate? : any;

        collapsible? : boolean;

        disabled? : boolean;

        event? : string;

        header? : string;

        heightStyle? : string;

        icons? : any;
    }
}
declare namespace JQueryUI {
    export interface DialogUIParams {    }
}
declare namespace JQueryUI {
    export interface SliderEvent {
        (event : Event, ui : JQueryUI.SliderUIParams);
    }
}
declare namespace JQueryUI {
    export interface Widget {
        (methodName : string) : JQuery;

        (options : JQueryUI.WidgetOptions) : JQuery;

        (options : JQueryUI.AccordionOptions) : JQuery;

        (optionLiteral : string, optionName : string) : any;

        (optionLiteral : string, options : JQueryUI.WidgetOptions) : any;

        (optionLiteral : string, optionName : string, optionValue : any) : JQuery;

        (name : string, prototype : any) : JQuery;

        (name : string, base : Function, prototype : any) : JQuery;
    }
}
declare namespace JQueryUI {
    export interface TransferEffect {
        className? : string;

        to? : string;
    }
}
declare namespace JQueryUI {
    export interface ExplodeEffect {
        pieces? : number;
    }
}
declare namespace JQueryUI {
    export interface BounceEffect {
        distance? : number;

        times? : number;
    }
}
declare namespace JQueryUI {
    export interface DroppableOptions extends JQueryUI.DroppableEvents {
        accept? : any;

        activeClass? : string;

        addClasses? : boolean;

        disabled? : boolean;

        greedy? : boolean;

        hoverClass? : string;

        scope? : string;

        tolerance? : string;
    }
}
declare namespace JQueryUI {
    export interface SliderUIParams {
        handle? : JQuery;

        value? : number;

        values? : number[];
    }
}
declare namespace JQueryUI {
    export interface Menu extends JQueryUI.Widget {
        disabled? : boolean;

        icons? : any;

        menus? : string;

        position? : any;

        role? : string;
    }
}
declare namespace JQueryUI {
    export interface TooltipEvent {
        (event : Event, ui : JQueryUI.TooltipUIParams);
    }
}
declare namespace JQueryUI {
    export interface SelectMenuOptions extends JQueryUI.SelectMenuEvents {
        appendTo? : string;

        disabled? : boolean;

        icons? : any;

        position? : JQueryUI.JQueryPositionOptions;

        width? : number;
    }
}
declare namespace JQueryUI {
    export interface TabsBeforeLoadUIParams {
        tab : JQuery;

        panel : JQuery;

        jqXHR : JQueryXHR;

        ajaxSettings : any;
    }
}
declare namespace JQueryUI {
    export interface BlindEffect {
        direction? : string;
    }
}
declare namespace JQueryUI {
    export interface FadeEffect {    }
}
declare namespace JQueryUI {
    export interface MouseOptions {
        cancel? : string;

        delay? : number;

        distance? : number;
    }
}
declare namespace JQueryUI {
    export interface TooltipEvents {
        close? : any;

        open? : any;
    }
}
interface JQuery {
    accordion() : JQuery;

    accordion(methodName : "destroy");

    accordion(methodName : "disable");

    accordion(methodName : "enable");

    accordion(methodName : "refresh");

    accordion(methodName : "widget") : JQuery;

    accordion(methodName : string) : JQuery;

    accordion(options : JQueryUI.AccordionOptions) : JQuery;

    accordion(optionLiteral : string, optionName : string) : any;

    accordion(optionLiteral : string, options : JQueryUI.AccordionOptions) : any;

    accordion(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    autocomplete() : JQuery;

    autocomplete(methodName : "close");

    autocomplete(methodName : "destroy");

    autocomplete(methodName : "disable");

    autocomplete(methodName : "enable");

    autocomplete(methodName : "search", value : string);

    autocomplete(methodName : "widget") : JQuery;

    autocomplete(methodName : string) : JQuery;

    autocomplete(options : JQueryUI.AutocompleteOptions) : JQuery;

    autocomplete(optionLiteral : string, optionName : string) : any;

    autocomplete(optionLiteral : string, options : JQueryUI.AutocompleteOptions) : any;

    autocomplete(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    button() : JQuery;

    button(methodName : "destroy");

    button(methodName : "disable");

    button(methodName : "enable");

    button(methodName : "refresh");

    button(methodName : "widget") : JQuery;

    button(methodName : string) : JQuery;

    button(options : JQueryUI.ButtonOptions) : JQuery;

    button(optionLiteral : string, optionName : string) : any;

    button(optionLiteral : string, options : JQueryUI.ButtonOptions) : any;

    button(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    buttonset() : JQuery;

    buttonset(methodName : "destroy");

    buttonset(methodName : "disable");

    buttonset(methodName : "enable");

    buttonset(methodName : "refresh");

    buttonset(methodName : "widget") : JQuery;

    buttonset(methodName : string) : JQuery;

    buttonset(options : JQueryUI.ButtonOptions) : JQuery;

    buttonset(optionLiteral : string, optionName : string) : any;

    buttonset(optionLiteral : string, options : JQueryUI.ButtonOptions) : any;

    buttonset(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    /**
     * Initialize a datepicker
     * @return {*}
     */
    datepicker() : JQuery;

    /**
     * Removes the datepicker functionality completely. This will return the element back to its pre-init state.
     * 
     * @param {*} methodName 'destroy'
     * @return {*}
     */
    datepicker(methodName : "destroy") : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {Date} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param {Array} pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : Date, onSelect : () => void, settings : JQueryUI.DatepickerOptions, pos : number[]) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {Date} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param {MouseEvent} pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : Date, onSelect : () => void, settings : JQueryUI.DatepickerOptions, pos : MouseEvent) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {string} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param {Array} pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : string, onSelect : () => void, settings : JQueryUI.DatepickerOptions, pos : number[]) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {string} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param {MouseEvent} pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : string, onSelect : () => void, settings : JQueryUI.DatepickerOptions, pos : MouseEvent) : JQuery;

    /**
     * Returns the current date for the datepicker or null if no date has been selected.
     * 
     * @param {*} methodName 'getDate'
     * @return {Date}
     */
    datepicker(methodName : "getDate") : Date;

    /**
     * Close a previously opened date picker.
     * 
     * @param {*} methodName 'hide'
     * @return {*}
     */
    datepicker(methodName : "hide") : JQuery;

    /**
     * Determine whether a date picker has been disabled.
     * 
     * @param {*} methodName 'isDisabled'
     * @return {boolean}
     */
    datepicker(methodName : "isDisabled") : boolean;

    /**
     * Redraw the date picker, after having made some external modifications.
     * 
     * @param {*} methodName 'refresh'
     * @return {*}
     */
    datepicker(methodName : "refresh") : JQuery;

    /**
     * Sets the date for the datepicker. The new date may be a Date object or a string in the current date format (e.g., "01/26/2009"), a number of days from today (e.g., +7) or a string of values and periods ("y" for years, "m" for months, "w" for weeks, "d" for days, e.g., "+1m +7d"), or null to clear the selected date.
     * 
     * @param {*} methodName 'setDate'
     * @param {Date} date The new date.
     * @return {*}
     */
    datepicker(methodName : "setDate", date : Date) : JQuery;

    /**
     * Sets the date for the datepicker. The new date may be a Date object or a string in the current date format (e.g., "01/26/2009"), a number of days from today (e.g., +7) or a string of values and periods ("y" for years, "m" for months, "w" for weeks, "d" for days, e.g., "+1m +7d"), or null to clear the selected date.
     * 
     * @param {*} methodName 'setDate'
     * @param {string} date The new date.
     * @return {*}
     */
    datepicker(methodName : "setDate", date : string) : JQuery;

    /**
     * Open the date picker. If the datepicker is attached to an input, the input must be visible for the datepicker to be shown.
     * 
     * @param {*} methodName 'show'
     * @return {*}
     */
    datepicker(methodName : "show") : JQuery;

    /**
     * Returns a jQuery object containing the datepicker.
     * 
     * @param {*} methodName 'widget'
     * @return {*}
     */
    datepicker(methodName : "widget") : JQuery;

    /**
     * Get the altField option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altField'
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "altField") : any;

    /**
     * Set the altField option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altField'
     * @param {string} altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "altField", altFieldValue : string) : JQuery;

    /**
     * Set the altField option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altField'
     * @param {*} altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "altField", altFieldValue : JQuery) : JQuery;

    /**
     * Set the altField option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altField'
     * @param {Element} altFieldValue An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "altField", altFieldValue : Element) : JQuery;

    /**
     * Get the altFormat option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altFormat'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "altFormat") : string;

    /**
     * Set the altFormat option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'altFormat'
     * @param {string} altFormatValue The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "altFormat", altFormatValue : string) : JQuery;

    /**
     * Get the appendText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'appendText'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "appendText") : string;

    /**
     * Set the appendText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'appendText'
     * @param {string} appendTextValue The text to display after each date field, e.g., to show the required format.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "appendText", appendTextValue : string) : JQuery;

    /**
     * Get the autoSize option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'autoSize'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "autoSize") : boolean;

    /**
     * Set the autoSize option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'autoSize'
     * @param {boolean} autoSizeValue Set to true to automatically resize the input field to accommodate dates in the current dateFormat.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "autoSize", autoSizeValue : boolean) : JQuery;

    /**
     * Get the beforeShow option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'beforeShow'
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "beforeShow") : (p1: Element, p2: any) => JQueryUI.DatepickerOptions;

    /**
     * Set the beforeShow option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'beforeShow'
     * @param {*} beforeShowValue A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "beforeShow", beforeShowValue : (p1: Element, p2: any) => JQueryUI.DatepickerOptions) : JQuery;

    /**
     * Get the beforeShow option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'beforeShowDay'
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "beforeShowDay") : (p1: Date) => any[];

    /**
     * Set the beforeShow option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'beforeShowDay'
     * @param {*} beforeShowDayValue A function that takes a date as a parameter and must return an array with:
     * [0]: true/false indicating whether or not this date is selectable
     * [1]: a CSS class name to add to the date's cell or "" for the default presentation
     * [2]: an optional popup tooltip for this date
     * The function is called for each day in the datepicker before it is displayed.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "beforeShowDay", beforeShowDayValue : (p1: Date) => any[]) : JQuery;

    /**
     * Get the buttonImage option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonImage'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "buttonImage") : string;

    /**
     * Set the buttonImage option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonImage'
     * @param {string} buttonImageValue A URL of an image to use to display the datepicker when the showOn option is set to "button" or "both". If set, the buttonText option becomes the alt value and is not directly displayed.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "buttonImage", buttonImageValue : string) : JQuery;

    /**
     * Get the buttonImageOnly option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonImageOnly'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "buttonImageOnly") : boolean;

    /**
     * Set the buttonImageOnly option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonImageOnly'
     * @param {boolean} buttonImageOnlyValue Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "buttonImageOnly", buttonImageOnlyValue : boolean) : JQuery;

    /**
     * Get the buttonText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonText'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "buttonText") : string;

    /**
     * Get the autohide option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'autohide'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "autohide") : boolean;

    /**
     * Get the endDate after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'endDate'
     * @return {Date}
     */
    datepicker(methodName : "option", optionName : "endDate") : Date;

    /**
     * Set the buttonText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'buttonText'
     * @param {string} buttonTextValue The text to display on the trigger button. Use in conjunction with the showOn option set to "button" or "both".
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "buttonText", buttonTextValue : string) : JQuery;

    /**
     * Get the calculateWeek option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'calculateWeek'
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "calculateWeek") : (p1: Date) => string;

    /**
     * Set the calculateWeek option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'calculateWeek'
     * @param {*} calculateWeekValue A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "calculateWeek", calculateWeekValue : (p1: Date) => string) : JQuery;

    /**
     * Get the changeMonth option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'changeMonth'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "changeMonth") : boolean;

    /**
     * Set the changeMonth option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'changeMonth'
     * @param {boolean} changeMonthValue Whether the month should be rendered as a dropdown instead of text.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "changeMonth", changeMonthValue : boolean) : JQuery;

    /**
     * Get the changeYear option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'changeYear'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "changeYear") : boolean;

    /**
     * Set the changeYear option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'changeYear'
     * @param {boolean} changeYearValue Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "changeYear", changeYearValue : boolean) : JQuery;

    /**
     * Get the closeText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'closeText'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "closeText") : string;

    /**
     * Set the closeText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'closeText'
     * @param {string} closeTextValue The text to display for the close link. Use the showButtonPanel option to display this button.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "closeText", closeTextValue : string) : JQuery;

    /**
     * Get the constrainInput option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'constrainInput'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "constrainInput") : boolean;

    /**
     * Set the constrainInput option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'constrainInput'
     * @param {boolean} constrainInputValue When true, entry in the input field is constrained to those characters allowed by the current dateFormat option.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "constrainInput", constrainInputValue : boolean) : JQuery;

    /**
     * Get the currentText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'currentText'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "currentText") : string;

    /**
     * Set the currentText option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'currentText'
     * @param {string} currentTextValue The text to display for the current day link. Use the showButtonPanel option to display this button.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "currentText", currentTextValue : string) : JQuery;

    /**
     * Get the dateFormat option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dateFormat'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "dateFormat") : string;

    /**
     * Set the dateFormat option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dateFormat'
     * @param {string} dateFormatValue The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "dateFormat", dateFormatValue : string) : JQuery;

    /**
     * Get the dayNames option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNames'
     * @return {Array}
     */
    datepicker(methodName : "option", optionName : "dayNames") : string[];

    /**
     * Set the dayNames option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNames'
     * @param {Array} dayNamesValue The list of long day names, starting from Sunday, for use as requested via the dateFormat option.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "dayNames", dayNamesValue : string[]) : JQuery;

    /**
     * Get the dayNamesMin option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNamesMin'
     * @return {Array}
     */
    datepicker(methodName : "option", optionName : "dayNamesMin") : string[];

    /**
     * Set the dayNamesMin option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNamesMin'
     * @param {Array} dayNamesMinValue The list of minimised day names, starting from Sunday, for use as column headers within the datepicker.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "dayNamesMin", dayNamesMinValue : string[]) : JQuery;

    /**
     * Get the dayNamesShort option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNamesShort'
     * @return {Array}
     */
    datepicker(methodName : "option", optionName : "dayNamesShort") : string[];

    /**
     * Set the dayNamesShort option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'dayNamesShort'
     * @param {Array} dayNamesShortValue The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "dayNamesShort", dayNamesShortValue : string[]) : JQuery;

    /**
     * Get the defaultDate option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'defaultDate'
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "defaultDate") : any;

    /**
     * Set the defaultDate option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'defaultDate'
     * @param {Date} defaultDateValue A date object containing the default date.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "defaultDate", defaultDateValue : Date) : JQuery;

    /**
     * Set the defaultDate option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'defaultDate'
     * @param {number} defaultDateValue A number of days from today. For example 2 represents two days from today and -1 represents yesterday.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "defaultDate", defaultDateValue : number) : JQuery;

    /**
     * Set the defaultDate option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'defaultDate'
     * @param {string} defaultDateValue A string in the format defined by the dateFormat option, or a relative date. Relative dates must contain value and period pairs; valid periods are "y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "defaultDate", defaultDateValue : string) : JQuery;

    /**
     * Get the duration option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'duration'
     * @return {string}
     */
    datepicker(methodName : "option", optionName : "duration") : string;

    /**
     * Set the duration option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'duration'
     * @param {string} durationValue Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "duration", durationValue : string) : JQuery;

    /**
     * Get the firstDay option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'firstDay'
     * @return {number}
     */
    datepicker(methodName : "option", optionName : "firstDay") : number;

    /**
     * Set the firstDay option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'firstDay'
     * @param {number} firstDayValue Set the first day of the week: Sunday is 0, Monday is 1, etc.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "firstDay", firstDayValue : number) : JQuery;

    /**
     * Get the gotoCurrent option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'gotoCurrent'
     * @return {boolean}
     */
    datepicker(methodName : "option", optionName : "gotoCurrent") : boolean;

    /**
     * Set the gotoCurrent option, after initialization
     * 
     * @param {*} methodName 'option'
     * @param {*} optionName 'gotoCurrent'
     * @param {boolean} gotoCurrentValue When true, the current day link moves to the currently selected date instead of today.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : "gotoCurrent", gotoCurrentValue : boolean) : JQuery;

    /**
     * Gets the value currently associated with the specified optionName.
     * 
     * @param {*} methodName 'option'
     * @param {string} optionName The name of the option to get.
     * @return {*}
     */
    datepicker(methodName : "option", optionName : string) : any;

    datepicker(methodName : "option", optionName : string, ...otherParams : any[]) : any;

    datepicker(methodName : string, ...otherParams : any[]) : any;

    /**
     * Initialize a datepicker with the given options
     * @param {*} options
     * @return {*}
     */
    datepicker(options : JQueryUI.DatepickerOptions) : JQuery;

    dialog() : JQuery;

    dialog(methodName : "close") : JQuery;

    dialog(methodName : "destroy") : JQuery;

    dialog(methodName : "isOpen") : boolean;

    dialog(methodName : "moveToTop") : JQuery;

    dialog(methodName : "open") : JQuery;

    dialog(methodName : "widget") : JQuery;

    dialog(methodName : string) : JQuery;

    dialog(options : JQueryUI.DialogOptions) : JQuery;

    dialog(optionLiteral : string, optionName : string) : any;

    dialog(optionLiteral : string, options : JQueryUI.DialogOptions) : any;

    dialog(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    draggable() : JQuery;

    draggable(methodName : "destroy");

    draggable(methodName : "disable");

    draggable(methodName : "enable");

    draggable(methodName : "widget") : JQuery;

    draggable(methodName : string) : JQuery;

    draggable(options : JQueryUI.DraggableOptions) : JQuery;

    draggable(optionLiteral : string, optionName : string) : any;

    draggable(optionLiteral : string, options : JQueryUI.DraggableOptions) : any;

    draggable(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    droppable() : JQuery;

    droppable(methodName : "destroy");

    droppable(methodName : "disable");

    droppable(methodName : "enable");

    droppable(methodName : "widget") : JQuery;

    droppable(methodName : string) : JQuery;

    droppable(options : JQueryUI.DroppableOptions) : JQuery;

    droppable(optionLiteral : string, optionName : string) : any;

    droppable(optionLiteral : string, options : JQueryUI.DraggableOptions) : any;

    droppable(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    menu : any;

    progressbar() : JQuery;

    progressbar(methodName : "destroy");

    progressbar(methodName : "disable");

    progressbar(methodName : "enable");

    progressbar(methodName : "refresh");

    progressbar(methodName : "value") : any;

    progressbar(methodName : "value", value : number);

    progressbar(methodName : "value", value : boolean);

    progressbar(methodName : "widget") : JQuery;

    progressbar(methodName : string) : JQuery;

    progressbar(options : JQueryUI.ProgressbarOptions) : JQuery;

    progressbar(optionLiteral : string, optionName : string) : any;

    progressbar(optionLiteral : string, options : JQueryUI.ProgressbarOptions) : any;

    progressbar(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    resizable() : JQuery;

    resizable(methodName : "destroy");

    resizable(methodName : "disable");

    resizable(methodName : "enable");

    resizable(methodName : "widget") : JQuery;

    resizable(methodName : string) : JQuery;

    resizable(options : JQueryUI.ResizableOptions) : JQuery;

    resizable(optionLiteral : string, optionName : string) : any;

    resizable(optionLiteral : string, options : JQueryUI.ResizableOptions) : any;

    resizable(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    selectable() : JQuery;

    selectable(methodName : "destroy");

    selectable(methodName : "disable");

    selectable(methodName : "enable");

    selectable(methodName : "widget") : JQuery;

    selectable(methodName : string) : JQuery;

    selectable(options : JQueryUI.SelectableOptions) : JQuery;

    selectable(optionLiteral : string, optionName : string) : any;

    selectable(optionLiteral : string, options : JQueryUI.SelectableOptions) : any;

    selectable(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    selectmenu() : JQuery;

    selectmenu(methodName : "close") : JQuery;

    selectmenu(methodName : "destroy") : JQuery;

    selectmenu(methodName : "disable") : JQuery;

    selectmenu(methodName : "enable") : JQuery;

    selectmenu(methodName : "instance") : any;

    selectmenu(methodName : "menuWidget") : JQuery;

    selectmenu(methodName : "open") : JQuery;

    selectmenu(methodName : "refresh") : JQuery;

    selectmenu(methodName : "widget") : JQuery;

    selectmenu(methodName : string) : JQuery;

    selectmenu(options : JQueryUI.SelectMenuOptions) : JQuery;

    selectmenu(optionLiteral : string, optionName : string) : any;

    selectmenu(optionLiteral : string, options : JQueryUI.SelectMenuOptions) : any;

    selectmenu(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    slider() : JQuery;

    slider(methodName : "destroy");

    slider(methodName : "disable");

    slider(methodName : "enable");

    slider(methodName : "refresh");

    slider(methodName : "value") : number;

    slider(methodName : "value", value : number);

    slider(methodName : "values") : Array<number>;

    slider(methodName : "values", index : number) : number;

    slider(methodName : string, index : number, value : number);

    slider(methodName : "values", index : number, value : number);

    slider(methodName : string, values : Array<number>);

    slider(methodName : "values", values : Array<number>);

    slider(methodName : "widget") : JQuery;

    slider(methodName : string) : JQuery;

    slider(options : JQueryUI.SliderOptions) : JQuery;

    slider(optionLiteral : string, optionName : string) : any;

    slider(optionLiteral : string, options : JQueryUI.SliderOptions) : any;

    slider(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    sortable() : JQuery;

    sortable(methodName : "destroy");

    sortable(methodName : "disable");

    sortable(methodName : "enable");

    sortable(methodName : "widget") : JQuery;

    sortable(methodName : "toArray") : string[];

    sortable(methodName : string) : JQuery;

    sortable(options : JQueryUI.SortableOptions) : JQuery;

    sortable(optionLiteral : string, optionName : string) : any;

    sortable(methodName : "serialize", options : any) : string;

    sortable(optionLiteral : string, options : JQueryUI.SortableOptions) : any;

    sortable(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    spinner() : JQuery;

    spinner(methodName : "destroy");

    spinner(methodName : "disable");

    spinner(methodName : "enable");

    spinner(methodName : "pageDown", pages : number);

    spinner(methodName : "pageUp", pages : number);

    spinner(methodName : "stepDown", steps : number);

    spinner(methodName : "stepUp", steps : number);

    spinner(methodName : "value") : number;

    spinner(methodName : "value", value : number);

    spinner(methodName : "widget") : JQuery;

    spinner(methodName : string) : JQuery;

    spinner(options : JQueryUI.SpinnerOptions) : JQuery;

    spinner(optionLiteral : string, optionName : string) : any;

    spinner(optionLiteral : string, options : JQueryUI.SpinnerOptions) : any;

    spinner(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    tabs() : JQuery;

    tabs(methodName : "destroy");

    tabs(methodName : "disable");

    tabs(methodName : "enable");

    tabs(methodName : "load", index : number);

    tabs(methodName : "refresh");

    tabs(methodName : "widget") : JQuery;

    tabs(methodName : string) : JQuery;

    tabs(options : JQueryUI.TabsOptions) : JQuery;

    tabs(optionLiteral : string, optionName : string) : any;

    tabs(optionLiteral : string, options : JQueryUI.TabsOptions) : any;

    tabs(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    tooltip() : JQuery;

    tooltip(methodName : "destroy");

    tooltip(methodName : "disable");

    tooltip(methodName : "enable");

    tooltip(methodName : "open");

    tooltip(methodName : "close");

    tooltip(methodName : "widget") : JQuery;

    tooltip(methodName : string) : JQuery;

    tooltip(options : JQueryUI.TooltipOptions) : JQuery;

    tooltip(optionLiteral : string, optionName : string) : any;

    tooltip(optionLiteral : string, options : JQueryUI.TooltipOptions) : any;

    tooltip(optionLiteral : string, optionName : string, optionValue : any) : JQuery;

    addClass(classNames : string, speed : number, callback : Function) : JQuery;

    addClass(classNames : string, speed : string, callback : Function) : JQuery;

    addClass(classNames : string, speed : number, easing : string, callback : Function) : JQuery;

    addClass(classNames : string, speed : string, easing : string, callback : Function) : JQuery;

    removeClass(classNames : string, speed : number, callback : Function) : JQuery;

    removeClass(classNames : string, speed : string, callback : Function) : JQuery;

    removeClass(classNames : string, speed : number, easing : string, callback : Function) : JQuery;

    removeClass(classNames : string, speed : string, easing : string, callback : Function) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : number, easing : string, complete : Function) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : string, easing : string, complete : Function) : JQuery;

    toggleClass(className : string, duration : number, easing : string, complete : Function) : JQuery;

    toggleClass(className : string, duration : string, easing : string, complete : Function) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : number, easing : string, complete : Function) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : string, easing : string, complete : Function) : JQuery;

    effect(options : any) : JQuery;

    effect(effect : string, options : any, duration : number, complete : Function) : JQuery;

    effect(effect : string, options : any, duration : string, complete : Function) : JQuery;

    hide(options : any) : JQuery;

    hide(effect : string, options : any, duration : number, complete : Function) : JQuery;

    hide(effect : string, options : any, duration : string, complete : Function) : JQuery;

    show(options : any) : JQuery;

    show(effect : string, options : any, duration : number, complete : Function) : JQuery;

    show(effect : string, options : any, duration : string, complete : Function) : JQuery;

    toggle(options : any) : JQuery;

    toggle(effect : string, options : any, duration : number, complete : Function) : JQuery;

    toggle(effect : string, options : any, duration : string, complete : Function) : JQuery;

    position(options : JQueryUI.JQueryPositionOptions) : JQuery;

    enableSelection() : JQuery;

    disableSelection() : JQuery;

    focus(delay : number, callback : Function) : JQuery;

    uniqueId() : JQuery;

    removeUniqueId() : JQuery;

    scrollParent() : JQuery;

    zIndex() : number;

    zIndex(zIndex : number) : JQuery;

    widget : any;

    jQuery : JQueryStatic;

    autocomplete(methodName : "search");

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {Date} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : Date, onSelect : () => void, settings : JQueryUI.DatepickerOptions) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {Date} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : Date, onSelect : () => void) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {Date} date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : Date) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {string} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param {*} settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : string, onSelect : () => void, settings : JQueryUI.DatepickerOptions) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {string} date The initial date.
     * @param {() => void} onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : string, onSelect : () => void) : JQuery;

    /**
     * Opens the datepicker in a dialog box.
     * 
     * @param {*} methodName 'dialog'
     * @param {string} date The initial date.
     * @param onSelect A callback function when a date is selected. The function receives the date text and date picker instance as parameters.
     * @param settings The new settings for the date picker.
     * @param pos The position of the top/left of the dialog as [x, y] or a MouseEvent that contains the coordinates. If not specified the dialog is centered on the screen.
     * @return {*}
     */
    datepicker(methodName : "dialog", date : string) : JQuery;

    sortable(methodName : "serialize") : string;

    spinner(methodName : "pageDown");

    spinner(methodName : "pageUp");

    spinner(methodName : "stepDown");

    spinner(methodName : "stepUp");

    addClass(classNames : string, speed : number) : JQuery;

    addClass(classNames : string) : JQuery;

    addClass(classNames : string, speed : string) : JQuery;

    addClass(classNames : string, speed : number, easing : string) : JQuery;

    addClass(classNames : string, speed : string, easing : string) : JQuery;

    removeClass(classNames : string, speed : number) : JQuery;

    removeClass(classNames : string) : JQuery;

    removeClass(classNames : string, speed : string) : JQuery;

    removeClass(classNames : string, speed : number, easing : string) : JQuery;

    removeClass(classNames : string, speed : string, easing : string) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : number, easing : string) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : number) : JQuery;

    switchClass(removeClassName : string, addClassName : string) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : string, easing : string) : JQuery;

    switchClass(removeClassName : string, addClassName : string, duration : string) : JQuery;

    toggleClass(className : string, duration : number, easing : string) : JQuery;

    toggleClass(className : string, duration : number) : JQuery;

    toggleClass(className : string) : JQuery;

    toggleClass(className : string, duration : string, easing : string) : JQuery;

    toggleClass(className : string, duration : string) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : number, easing : string) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : number) : JQuery;

    toggleClass(className : string, aswitch : boolean) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : string, easing : string) : JQuery;

    toggleClass(className : string, aswitch : boolean, duration : string) : JQuery;

    effect(effect : string, options : any, duration : number) : JQuery;

    effect(effect : string, options : any) : JQuery;

    effect(effect : string) : JQuery;

    effect(effect : string, options : any, duration : string) : JQuery;

    hide(effect : string, options : any, duration : number) : JQuery;

    hide(effect : string, options : any) : JQuery;

    hide(effect : string) : JQuery;

    hide(effect : string, options : any, duration : string) : JQuery;

    show(effect : string, options : any, duration : number) : JQuery;

    show(effect : string, options : any) : JQuery;

    show(effect : string) : JQuery;

    show(effect : string, options : any, duration : string) : JQuery;

    toggle(effect : string, options : any, duration : number) : JQuery;

    toggle(effect : string, options : any) : JQuery;

    toggle(effect : string) : JQuery;

    toggle(effect : string, options : any, duration : string) : JQuery;

    focus(delay : number) : JQuery;

    slider(methodName : string, values : number[]);

    slider(methodName : "values", values : number[]);
}

interface StringTypes {}

declare namespace StringTypes {

    /**
     * Generated to type the string "destroy".
     * @exclude
     * @class
     */
    export interface destroy {    }

    /**
     * Generated to type the string "disable".
     * @exclude
     * @class
     */
    export interface disable {    }

    /**
     * Generated to type the string "enable".
     * @exclude
     * @class
     */
    export interface enable {    }

    /**
     * Generated to type the string "refresh".
     * @exclude
     * @class
     */
    export interface refresh {    }

    /**
     * Generated to type the string "widget".
     * @exclude
     * @class
     */
    export interface widget {    }

    /**
     * Generated to type the string "close".
     * @exclude
     * @class
     */
    export interface close {    }

    /**
     * Generated to type the string "search".
     * @exclude
     * @class
     */
    export interface search {    }

    /**
     * Generated to type the string "dialog".
     * @exclude
     * @class
     */
    export interface dialog {    }

    /**
     * Generated to type the string "getDate".
     * @exclude
     * @class
     */
    export interface getDate {    }

    /**
     * Generated to type the string "hide".
     * @exclude
     * @class
     */
    export interface hide {    }

    /**
     * Generated to type the string "isDisabled".
     * @exclude
     * @class
     */
    export interface isDisabled {    }

    /**
     * Generated to type the string "setDate".
     * @exclude
     * @class
     */
    export interface setDate {    }

    /**
     * Generated to type the string "show".
     * @exclude
     * @class
     */
    export interface show {    }

    /**
     * Generated to type the string "option".
     * @exclude
     * @class
     */
    export interface option {    }

    /**
     * Generated to type the string "altField".
     * @exclude
     * @class
     */
    export interface altField {    }

    /**
     * Generated to type the string "altFormat".
     * @exclude
     * @class
     */
    export interface altFormat {    }

    /**
     * Generated to type the string "appendText".
     * @exclude
     * @class
     */
    export interface appendText {    }

    /**
     * Generated to type the string "autoSize".
     * @exclude
     * @class
     */
    export interface autoSize {    }

    /**
     * Generated to type the string "beforeShow".
     * @exclude
     * @class
     */
    export interface beforeShow {    }

    /**
     * Generated to type the string "beforeShowDay".
     * @exclude
     * @class
     */
    export interface beforeShowDay {    }

    /**
     * Generated to type the string "buttonImage".
     * @exclude
     * @class
     */
    export interface buttonImage {    }

    /**
     * Generated to type the string "buttonImageOnly".
     * @exclude
     * @class
     */
    export interface buttonImageOnly {    }

    /**
     * Generated to type the string "buttonText".
     * @exclude
     * @class
     */
    export interface buttonText {    }

    /**
     * Generated to type the string "autohide".
     * @exclude
     * @class
     */
    export interface autohide {    }

    /**
     * Generated to type the string "endDate".
     * @exclude
     * @class
     */
    export interface endDate {    }

    /**
     * Generated to type the string "calculateWeek".
     * @exclude
     * @class
     */
    export interface calculateWeek {    }

    /**
     * Generated to type the string "changeMonth".
     * @exclude
     * @class
     */
    export interface changeMonth {    }

    /**
     * Generated to type the string "changeYear".
     * @exclude
     * @class
     */
    export interface changeYear {    }

    /**
     * Generated to type the string "closeText".
     * @exclude
     * @class
     */
    export interface closeText {    }

    /**
     * Generated to type the string "constrainInput".
     * @exclude
     * @class
     */
    export interface constrainInput {    }

    /**
     * Generated to type the string "currentText".
     * @exclude
     * @class
     */
    export interface currentText {    }

    /**
     * Generated to type the string "dateFormat".
     * @exclude
     * @class
     */
    export interface dateFormat {    }

    /**
     * Generated to type the string "dayNames".
     * @exclude
     * @class
     */
    export interface dayNames {    }

    /**
     * Generated to type the string "dayNamesMin".
     * @exclude
     * @class
     */
    export interface dayNamesMin {    }

    /**
     * Generated to type the string "dayNamesShort".
     * @exclude
     * @class
     */
    export interface dayNamesShort {    }

    /**
     * Generated to type the string "defaultDate".
     * @exclude
     * @class
     */
    export interface defaultDate {    }

    /**
     * Generated to type the string "duration".
     * @exclude
     * @class
     */
    export interface duration {    }

    /**
     * Generated to type the string "firstDay".
     * @exclude
     * @class
     */
    export interface firstDay {    }

    /**
     * Generated to type the string "gotoCurrent".
     * @exclude
     * @class
     */
    export interface gotoCurrent {    }

    /**
     * Generated to type the string "isOpen".
     * @exclude
     * @class
     */
    export interface isOpen {    }

    /**
     * Generated to type the string "moveToTop".
     * @exclude
     * @class
     */
    export interface moveToTop {    }

    /**
     * Generated to type the string "open".
     * @exclude
     * @class
     */
    export interface open {    }

    /**
     * Generated to type the string "value".
     * @exclude
     * @class
     */
    export interface value {    }

    /**
     * Generated to type the string "instance".
     * @exclude
     * @class
     */
    export interface instance {    }

    /**
     * Generated to type the string "menuWidget".
     * @exclude
     * @class
     */
    export interface menuWidget {    }

    /**
     * Generated to type the string "values".
     * @exclude
     * @class
     */
    export interface values {    }

    /**
     * Generated to type the string "toArray".
     * @exclude
     * @class
     */
    export interface toArray {    }

    /**
     * Generated to type the string "serialize".
     * @exclude
     * @class
     */
    export interface serialize {    }

    /**
     * Generated to type the string "pageDown".
     * @exclude
     * @class
     */
    export interface pageDown {    }

    /**
     * Generated to type the string "pageUp".
     * @exclude
     * @class
     */
    export interface pageUp {    }

    /**
     * Generated to type the string "stepDown".
     * @exclude
     * @class
     */
    export interface stepDown {    }

    /**
     * Generated to type the string "stepUp".
     * @exclude
     * @class
     */
    export interface stepUp {    }

    /**
     * Generated to type the string "load".
     * @exclude
     * @class
     */
    export interface load {    }

    /**
     * Generated to type the string "blur".
     * @exclude
     * @class
     */
    export interface blur {    }

    /**
     * Generated to type the string "collapse".
     * @exclude
     * @class
     */
    export interface collapse {    }

    /**
     * Generated to type the string "collapseAll".
     * @exclude
     * @class
     */
    export interface collapseAll {    }

    /**
     * Generated to type the string "focus".
     * @exclude
     * @class
     */
    export interface focus {    }

    /**
     * Generated to type the string "isFirstItem".
     * @exclude
     * @class
     */
    export interface isFirstItem {    }

    /**
     * Generated to type the string "isLastItem".
     * @exclude
     * @class
     */
    export interface isLastItem {    }

    /**
     * Generated to type the string "next".
     * @exclude
     * @class
     */
    export interface next {    }

    /**
     * Generated to type the string "nextPage".
     * @exclude
     * @class
     */
    export interface nextPage {    }

    /**
     * Generated to type the string "previous".
     * @exclude
     * @class
     */
    export interface previous {    }

    /**
     * Generated to type the string "previousPage".
     * @exclude
     * @class
     */
    export interface previousPage {    }

    /**
     * Generated to type the string "select".
     * @exclude
     * @class
     */
    export interface select {    }
}


interface JQueryEasingFunctions {
    easeInQuad : any;

    easeOutQuad : any;

    easeInOutQuad : any;

    easeInCubic : any;

    easeOutCubic : any;

    easeInOutCubic : any;

    easeInQuart : any;

    easeOutQuart : any;

    easeInOutQuart : any;

    easeInQuint : any;

    easeOutQuint : any;

    easeInOutQuint : any;

    easeInExpo : any;

    easeOutExpo : any;

    easeInOutExpo : any;

    easeInSine : any;

    easeOutSine : any;

    easeInOutSine : any;

    easeInCirc : any;

    easeOutCirc : any;

    easeInOutCirc : any;

    easeInElastic : any;

    easeOutElastic : any;

    easeInOutElastic : any;

    easeInBack : any;

    easeOutBack : any;

    easeInOutBack : any;

    easeInBounce : any;

    easeOutBounce : any;

    easeInOutBounce : any;
}

interface JQueryStatic {
    ui : JQueryUI.UI;

    datepicker : JQueryUI.Datepicker;

    widget : any;

    Widget : any;
}


