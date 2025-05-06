/**
 * Copyright 2025 andyid1
 * @license Apache-2.0, see License.md for full text.
 */
import {
  HAXCMSLitElementTheme,
  css,
  unsafeCSS,
  html,
  store,
  autorun,
  toJS,
} from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/site/site-title.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-git-corner.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
// import "@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";
// import "@haxtheweb/haxcms-elements/lib/ui-components/magic/site-ai-chat.js";

/**
 * `CustomTutorialTheme`
 * `CustomTutorialTheme based on HAXCMS theming ecosystem`
 * `This theme is an example of extending an existing theme component`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSLitElementTheme - A class that provides correct baseline wiring to build a new theme that HAX can use
 *
 * @documentation - see HAX docs to learn more about theming
 *  - Custom theme development - https://haxtheweb.org/documentation/developers/haxsite/custom-theme-development
 *  - Theme Blocks - https://haxtheweb.org/documentation/developers/theme-blocks
 *  - DDD - https://haxtheweb.org/documentation/ddd
 *  - Data Store - https://haxtheweb.org/documentation/developers/haxsite/data-store
 * @element custom-tutorial-theme
 */
class CustomTutorialTheme extends HAXCMSLitElementTheme {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "custom-tutorial-theme";
  }

  // set defaults or tie into the store
  constructor() {
    super();
    this._items = [];
    this.activeId = null;
    autorun(() => {
      this.activeId = toJS(store.activeId);
      this._items = toJS(store.manifest.items);
    });
  }

  // properties to respond to the activeID and list of items
  static get properties() {
    return {
      ...super.properties,
      activeId: { type: String },
      _items: { type: Array },
    };
  }

  // allows for global styles to be set against the entire document
  // you can also use this to cascade styles down to the theme
  // but the more common reason is to influence the body or other things
  // put into the global index.html context by the system itself
  HAXCMSGlobalStyleSheetContent() {
    return [
      ...super.HAXCMSGlobalStyleSheetContent(),
      css`
        :root {
          --my-theme-low-tone: var(--ddd-theme-default-slateMaxLight);
          --my-theme-high-tone: var(--ddd-theme-default-coalyGray);
        }
        body {
          padding: var(--ddd-spacing-0);
          margin: var(--ddd-spacing-0);
          background-color: var(--my-theme-low-tone);
        }
        body.dark-mode {
          background-color: var(--my-theme-high-tone);
        }

        /* Scroll Trigger Animation */
        @keyframes slide-fade-in { 
          from { 
            opacity: 0; 
            transform: translateY(5vh); 
          } 
        } 
        
        @media (prefers-reduced-motion: no-preference) {
          media-image.card {
            view-timeline-name: item-timeline;
            animation: slide-fade-in both;
            animation-timeline: item-timeline;
            animation-range: contain 0% contain 50%;
          }
        }

        /* tidak jalan */
        /* .element {
          all: unset;
 
          #heading {
            background-color: blue;
            color: red;
          }
          } */

          /* bisa jalan*/
          a11y-collapse {
     --a11y-collapse-padding-top: 20px;
     --a11y-collapse-border-color: red;
     /* perlu untuk menimpa biar tidak gantung  */
     --a11y-collapse-padding-left: -50px;
     background-color: lightpink;
     /* jalan */
     /* --a11y-collapse-heading-background-color: lightblue; */
     /* --a11y-collapse-padding-left: 16px; */
    }
    
    a11y-collapse.custom-collapse1 {
      /* border: unset !important; */
      border-bottom-color: purple;
      border-bottom-style: solid;
      border-bottom-width: 3px ;
      /* background-color: beige; */
      --a11y-collapse-padding-left: 15px;
      }
        a11y-collapse.custom-collapse2 {
          /* border: unset; */

        border-bottom-color: greenyellow;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        padding-left: 0;
      }
       .custom-collapse::part(heading-id) {
        border-bottom-color: blue;
        border-bottom-style: solid;
        border-bottom-width: 3px;
        /* ndak jalan
        background-color: purple;
        
        */
      }

      /* site-children-block ul li a{
            color: lightskyblue;
            background-color: lightyellow;
          } */
      /* :host a11y-collapse[expanded] #content {
        border-bottom: 2px solid red !important;
        padding: 20px !important;
      } */

        /* tidak jalan */
        /* site-children-block.custom {
          --site-children-block-link-active-bg: rgba(230, 115, 115, 0.1);
        }  */
        /* site-children-block { */
          /* --site-children-block-link-color: red; */
          /* text-decoration: underline; */

          /* --site-children-block-link-hover-color: red; */
          /* color: red; */
          /* background-color: lightsalmon; */
          /* --site-children-block-link-active-color: greenyellow;
          --site-children-block-link-active-bg: lightsalmon;
        } */

      `,
    ];
  }

  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-10) var(--ddd-spacing-20);
          max-width: 960px;
          min-width: 400px;
          margin: var(--ddd-spacing-0) auto;
          border: var(--ddd-border-lg);
          border-width: var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-lg);
          background-color: light-dark(
            var(--my-theme-low-tone),
            var(--my-theme-high-tone)
          );
          border-color: var(--hax-ui-color-accent);
          /* tidak bisa bawah */
          /* color: light-dark(var(--my-theme-high-tone), var(--my-theme-low-tone)); */
          /* --site-children-block-link-color: green; */
          /* -site-children-block-link-hover-color: lightred; */
          /* --site-children-block-link-active-color: blue; */
          /* --site-children-block-link-active-bg: rgba(230, 115, 115, 0.1); */
        }
        .wrapper {
          border-radius: var(--ddd-radius-lg);
        }

        site-children-block {
          --site-children-block-link-hover-color: lightpink;
             --site-children-block-link-active-color: blue;
             --site-children-block-link-active-bg: rgba(230, 115, 115, 0.1);

             /* 
             tidak bisa tembus DOM
             .link button:hover div,
        .link button:focus div {
          text-decoration: overline !important;
          color: var(--site-children-block-link-hover-color, #000000);
        }    */

        }
        
        /* Additional scroll animation for cards inside the theme */
        :host media-image.card {
          view-timeline-name: item-timeline;
          animation: slide-fade-in both;
          animation-timeline: item-timeline;
          animation-range: contain 0% contain 50%;
        }
        
        /* tambahan siet-children tidak bisa */

        /* site-children-block .link {
  all: unset;
  text-decoration: overline;
  color: red;
}

        :host(:hover) site-children-block .link div.indent.indent-0 {
          all: unset;

        text-decoration: overline;
        color: red;
      } */


        /* site-children-block ul li a {
background-color: lightpink;
        } */
        /* site-children-block .link:hover button div.indent.indent-1,
        site-children-block .link:focus button div.indent.indent-1
        {
          text-decoration: overline !important;
          color: var(--site-children-block-link-hover-color, #000000);
        } */
/* .link {
          display: block;
          color:  #2a1bf7;
          text-decoration: none;
        } */

          /* site-children-block ul li a button div.indent.indent0 {
            color: lightpink;
          } */

        site-title {
          font-size: var(--ddd-font-size-l);
          color: var(--hax-ui-color-accent);
        }

        header {
          display: flex;
        }
        ul {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
        }
        ul li {
          display: inline-block;
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
          list-style-type: none;
          vertical-align: top;
        }
        ul li a {
          display: block;
          /* text-decoration: overline; */
        }

 

        button {
          height: var(--ddd-spacing-8);
          width: var(--ddd-spacing-8);
          margin: var(--ddd-spacing-0);
          padding: 0;
          font-size: var(--ddd-font-size-sm);
          cursor: pointer;
        }

        .active button {
          background-color: light-dark(
            var(--my-theme-low-tone),
            var(--my-theme-high-tone)
          );
          color: light-dark(
            var(--my-theme-high-tone),
            var(--my-theme-low-tone)
          );
          font-weight: bold;
        }

        site-menu-button {
          display: inline-block;
          vertical-align: top;
        }

        /* tidak bisa
        :host([expanded]) #content {
            padding: var(
                --a11y-collapse-padding-top,
                var(--a11y-collapse-vertical-padding, var(--ddd-spacing-4))
              )
              var(
                --a11y-collapse-padding-right,
                var(--a11y-collapse-horizontal-padding, var(--ddd-spacing-4))
              )
              var(
                --a11y-collapse-padding-bottom,
                var(--a11y-collapse-vertical-padding, var(--ddd-spacing-4))
              )
              var(
                --a11y-collapse-padding-left,
                var(--a11y-collapse-horizontal-padding, var(--ddd-spacing-4))
              ); */
            /* border-top: var(--a11y-collapse-border, var(--ddd-border-xs));
            border-color: var(
              --a11y-collapse-border-color,
              var(--ddd-theme-default-coalyGray)
            );
            border-bottom: 3px solid purple
            /* max-height: 200000000000vh; why is this needed? */

            


      `,
    ];
  }

  render() {
    return html`
      <site-ai-chat></site-ai-chat>
      <site-title></site-title><br />
      <site-git-corner></site-git-corner>
      <div class="wrapper">
        <header>
          <ul>
            <li>
              <site-menu-button type="prev" position="top"></site-menu-button>
            </li>
            ${this._items.map((item, index) => {
              return html`
                <li class="${item.id === this.activeId ? "active" : ""}">
                  <a href="${item.slug}"
                    ><button title="${item.title}">${index + 1}</button></a
                  >
                </li>
              `;
            })}
            <li>
              <site-menu-button type="next" position="top"></site-menu-button>
            </li>
          </ul>
        </header>
        <main>
          <article>
            <site-active-title></site-active-title>
            <!-- <site-recent-content-block></site-recent-content-block> -->
            <site-children-block></site-children-block>
            <site-breadcrumb></site-breadcrumb>

            <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
            <div id="contentcontainer">
              <div id="slot"><slot></slot></div>
            </div>
          </article>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}
globalThis.customElements.define(CustomTutorialTheme.tag, CustomTutorialTheme);
export { CustomTutorialTheme };