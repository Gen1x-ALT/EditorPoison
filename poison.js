/*
                                                 (         )    (      (         )       )  
        (              )                         )\ )   ( /(    )\ )   )\ )   ( /(    ( /(  
 (      )\ )   (    ( /(         (              (()/(   )\())  (()/(  (()/(   )\())   )\()) 
 )\    (()/(   )\   )\())   (    )(              /(_)) ((_)\    /(_))  /(_)) ((_)\   ((_)\  
((_)    ((_)) ((_) (_))/    )\  (()\            (_))     ((_)  (_))   (_))     ((_)   _((_) 
| __|   _| |   (_) | |_    ((_)  ((_)           | _ \   / _ \  |_ _|  / __|   / _ \  | \| | 
| _|  / _` |   | | |  _|  / _ \ | '_|           |  _/  | (_) |  | |   \__ \  | (_) | | .` | 
|___| \__,_|   |_|  \__|  \___/ |_|             |_|     \___/  |___|  |___/   \___/  |_|\_| 

            CREATED BY GEN1X | https://github.com/Gen1x-ALT/EditorPoison/

*/
(function(Scratch) {
  var over = false;
  class EditorPoison {
    getInfo() {
      return {
        id: 'editorpoisonGen1x',
      };
    }

    serialize() {
      return { editorpoisonGen1x: { "noPoison": true } };
    }

    deserialize(data) {
      if (data.editorpoisonGen1x !== undefined) {
        console.log("I just saved your project from messing up.");
        throw new Error("Hey, man. You are seeing this error because the Editor Poison extension has disabled itself in order for it to not ruin your project. Thank JeremyGamer13 and SharkPool for this feature.");
      }
    }
  }

  if (!Scratch.extensions.isPenguinMod) {
    vm.runtime.extensionStorage["editorpoisonGen1x"] = { "noPoison": true };
  }

  Scratch.extensions.register(new EditorPoison());

  function deleteDivs() {
    var element = document.querySelector('.menu-bar_main-menu_3wjWH');
    if (element) {
      element.parentNode.removeChild(element);
      console.log('Div with class menu-bar_main-menu_3wjWH has been deleted.');
    } else {
      console.log('Div with class menu-bar_main-menu_3wjWH not found.');
    }

    element = document.querySelector('.gui_menu-bar-position_3U1T0');
    if (element) {
      element.parentNode.removeChild(element);
      console.log('Div with class gui_menu-bar-position_3U1T0 has been deleted.');
    } else {
      console.log('Div with class gui_menu-bar-position_3U1T0 not found.');
    }

    element = document.querySelector('.backpack_backpack-container_2_wGr');
    if (element) {
      element.parentNode.removeChild(element);
      console.log('Div with class backpack_backpack-container_2_wGr has been deleted.');
    } else {
      console.log('Div with class backpack_backpack-container_2_wGr not found.');
    }

    var liElements = document.querySelectorAll('li.react-tabs_react-tabs__tab_3Nn-X.gui_tab_27Unf');
    liElements.forEach(function(li) {
      var contextMenuWrapper = li.querySelector('.react-contextmenu-wrapper');
      if (contextMenuWrapper) {
        li.remove();
      }
    });

    var disabledButton = document.querySelector('button.gui_add-tab-button_DxpA3.gui_add-tab-button-disabled_3sVlw');
    if (disabledButton) {
      disabledButton.remove();
      console.log('Deleted the disabled button.');
    } else {
      var enabledButton = document.querySelector('button.gui_add-tab-button_DxpA3:not(.gui_add-tab-button-disabled_3sVlw)');
      if (enabledButton) {
        enabledButton.remove();
        console.log('Deleted the enabled button.');
      } else {
        console.log('No add button found.');
      }
    }
    nocategory();    
  }

  function nocategory() {
    setInterval(function(){
      element = document.querySelector('.scratchCategoryId-editorpoisonGen1x');
      if (element) {
        element.parentNode.removeChild(element);
      }
    }, 10)
  }

  fetch('https://raw.githubusercontent.com/Gen1x-ALT/resources/main/trollbase64.txt')
    .then(response => response.text())
    .then(troll => {
      const css = `
        background: url(${troll}) no-repeat center center;
        background-size: contain;
        padding: 50px; 
        font-size: 0;
      `;

      function trollface() {
        console.log('%c ', css);
      }

      var version = "1.0.0";
      console.log('%cＥｄｉｔｏｒ　Ｐｏｉｓｏｎ', 'color: lime; font-size: 20px; padding: 5px;');
      trollface();
      console.log('%c v' + version, 'color: green; font-size: 10px; padding: 5px;');

      function jumbleText() {
        document.querySelectorAll('.blocklyEditableText text, .goog-menuitem-content').forEach(node => {
          node.textContent = node.textContent.split('').sort(() => Math.random() - 0.5).join('');
        });
      }

      function jumbleNumbers() {
        document.querySelectorAll('.blocklyEditableText text, .goog-menuitem-content').forEach(node => {
          node.textContent = node.textContent.replace(/\d/g, () => Math.floor(Math.random() * 10));
        });
      }

      function jumbleBlockLabels() {
        document.querySelectorAll('.blocklyText, .scratchCategoryMenuItemLabel').forEach(node => {
          node.textContent = node.textContent.split('').sort(() => Math.random() - 0.5).join('');
        });
      }

      function randomizeColors() {
        document.querySelectorAll('.scratchCategoryItemBubble').forEach(node => {
          node.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
          node.style.borderColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
        document.querySelectorAll('.goog-menuitem-content').forEach(node => {
          node.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
      }

      function changeFontStyle() {
        const fonts = ['Symbol', 'Webdings', 'Wingdings', 'Zapf Dingbats'];
        const currentFont = fonts[Math.floor(Math.random() * fonts.length)];
        updateStyle('body { font-family: ' + currentFont + '; }');
        console.log('Changed font to ' + currentFont + ' on all elements.');
      }

      function rotateElements() {
        updateStyle('div { transform: rotate(' + Math.random() * 360 + 'deg); }');
        console.log('Rotated all elements.');
      }

      function invertColors() {
        updateStyle('body { filter: invert(1); }');
        console.log('Inverted colors of the page.');
      }

      function addRandomBorders() {
        document.querySelectorAll('*').forEach(node => {
          node.style.border = `${Math.random() * 10}px solid rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
        console.log('Added random borders to elements.');
      }

      function enlargeText() {
        updateStyle('body { font-size: ' + (Math.random() * 2 + 1) + 'em; }');
        console.log('Enlarged text on all elements.');
      }

      function upsideDownText() {
        updateStyle('p, b, i { transform: rotate(180deg); }');
        console.log('Turned text upside down.');
      }

      function changeBackgroundColor() {
        updateStyle('body { background-color: rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + '); }');
        console.log('Changed background color of the page.');
      }

      function addRoundedCorners() {
        document.querySelectorAll('*').forEach(node => {
          node.style.borderRadius = `${Math.random() * 20}px`;
        });
        console.log('Added random rounded corners to elements.');
      }

      function spinElements() {
        updateStyle('body, div, p, i, b { animation: spin 2s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }');
        console.log('Made elements spin continuously.');
      }

      function blurText() {
        updateStyle('body { filter: blur(8px); }');
        console.log('Blurred the page.');
      }

      const styleElement = document.createElement('style');
      document.head.appendChild(styleElement);

      function updateStyle(css) {
        var better = css;
        if (over) {
          better.replace(/body/g, '*');
        }
        styleElement.textContent = better;
      }

      var intervalTime = 60000;
      var intervalID;
      var loopCounter = 0;

      const payloads = [
        { func: changeFontStyle, severity: 2 },
        { func: rotateElements, severity: 5 },
        { func: invertColors, severity: 3 },
        { func: addRandomBorders, severity: 3 },
        { func: enlargeText, severity: 2 },
        { func: upsideDownText, severity: 3 },
        { func: changeBackgroundColor, severity: 2 },
        { func: addRoundedCorners, severity: 1 },
        { func: spinElements, severity: 4 },
        { func: blurText, severity: 2 }
      ];

      function startInterval() {
        intervalID = setInterval(() => {
          trollface();
          jumbleText();
          jumbleNumbers();
          randomizeColors();

          if (intervalTime <= 5000 && Math.random() < 1/15 && !over) {
            alert("This isn't over.");
            alert("I am going to now get rid of the only good things the editor had.");
            alert("One...");
            alert("Two...");
            updateStyle("* { display: block; }");
            alert("...and three.");
            over = true;
          }

          const currentSeverity = Math.min(Math.floor(loopCounter / 3), payloads.length - 1);
          const applicablePayloads = payloads.filter(payload => payload.severity <= currentSeverity);
          if (applicablePayloads.length > 0) {
            const randomPayload = applicablePayloads[Math.floor(Math.random() * applicablePayloads.length)];
            randomPayload.func();
          }

          loopCounter++;
          if (loopCounter >= 3) {
            jumbleBlockLabels();
          }

          intervalTime = Math.max(intervalTime - 1500, 5000);
          clearInterval(intervalID);
          startInterval();
        }, intervalTime);
      }

      var dowefuckeverythingup = confirm("WARNING:\nThis extension is not your friend. It is not here to help you. It's here to make your experience with the editor as annoying as possible.\nHowever, I'm going to stop myself from running if you save me and load me from a project file, because evil has standards.\n\nWith all this being said, would you like to fuck the editor beyond comprehension?");
      if (dowefuckeverythingup) {
        deleteDivs();
        alert("It has started. I recommend you try coding normally while leaving this extension running in the background, if you didn't see these payloads before. It'll improve your experience.");
        startInterval();
      }
    })
    .catch(error => {
      console.error('Error fetching the troll image:', error);
    });
})(Scratch);
