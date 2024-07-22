import { ChangeEvent, MouseEvent, useRef } from "react"
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight,
  Bold, Font, Highlighter, Indent, Italic, Link, 
  OrderedList, Outdent, Redo, Strikethrough, Subscript,
  Superscript, Underline, Undo, Unformat, Unlink, UnorderedList
} from "./components/react-svg"

const App = () => {

  const fontList: string[] = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
  ]

  const textInput = useRef<HTMLDivElement>(null)

  const modifyText = (command: string, value: string) => {
    document.execCommand(command, false, value)
    if (textInput.current) {
      textInput.current.focus()
    }
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    modifyText(e.currentTarget.id, e.currentTarget.value)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    modifyText(e.currentTarget.id, e.currentTarget.value)
  }


  const addLink = () => {
    let userLink: string = prompt("Enter a URL") || '';

    if (!/http/i.test(userLink)) {
      userLink = "http://" + userLink
    }
    modifyText('createLink', userLink);
  }



  return (<>
    <div className="container max-w-[80%] mx-auto my-24 p-5 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div className="options flex flex-wrap items-center gap-2.5 mb-2.5">

        <div className="flex items-center flex-wrap">
          <button id="bold" onClick={handleClick} className="option-button format font-bold" title="Bold">
            <Bold className="w-2.5" />
          </button>

          <button id="italic" onClick={handleClick} className="option-button format italic" title="Italic">
            <Italic className="w-2.5" />
          </button>

          <button id="underline" onClick={handleClick} className="option-button format underline" title="Underline">
            <Underline className="w-3.5" />
          </button>

          <button id="strikethrough" onClick={handleClick} className="option-button format line-through" title="Strikethrough">
            <Strikethrough className="w-3.5" />
          </button>

          <button id="superscript" onClick={handleClick} className="option-button script" title="Superscript">
            <Superscript className="w-3.5" />
          </button>

          <button id="subscript" onClick={handleClick} className="option-button script" title="Subscript">
            <Subscript className="w-3.5" />
          </button>

          <button id="insertOrderedList" onClick={handleClick} className="option-button" title="Numbered List">
            <OrderedList className="w-3.5" />
          </button>

          <button id="insertUnorderedList" onClick={handleClick} className="option-button" title="Bulleted List">
            <UnorderedList className="w-3.5" />
          </button>

          <button id="undo" onClick={handleClick} className="option-button" title="Undo">
            <Undo className="w-3.5" />
          </button>

          <button id="redo" onClick={handleClick} className="option-button" title="Redo">
            <Redo className="w-3.5" />
          </button>

          <button id="createLink" onClick={addLink} className="option-button" title="Insert link">
            <Link className="w-3.5" />
          </button>

          <button id="unlink" onClick={handleClick} className="option-button" title="Remove link">
            <Unlink className="w-3.5" />
          </button>

          <button id="justifyLeft" onClick={handleClick} className="option-button align" title="Align left">
            <AlignLeft className="w-3.5" />
          </button>

          <button id="justifyCenter" onClick={handleClick} className="option-button align" title="Align center">
            <AlignCenter className="w-3.5" />
          </button>

          <button id="justifyRight" onClick={handleClick} className="option-button align" title="Align right">
            <AlignRight className="w-3.5" />
          </button>

          <button id="justifyFull" onClick={handleClick} className="option-button align" title="Justify">
            <AlignJustify className="w-3.5" />
          </button>

          <button id="indent" onClick={handleClick} className="option-button spacing" title="Increase indent">
            <Indent className="w-3.5" />
          </button>

          <button id="outdent" onClick={handleClick} className="option-button spacing" title="Decrease indent">
            <Outdent className="w-3.5" />
          </button>

          <button id="removeFormat" onClick={handleClick} className="option-button" title="Remove formatting">
            <Unformat className="w-4" />
          </button>
          

          <label htmlFor="foreColor" title="Text color" className="color">
            <Font className="w-3.5" />
            <input type="color" onChange={handleChange} id="foreColor" className="h-1 w-6" />
          </label>

          <label htmlFor="hiliteColor" title="Highlight color" className="color">
            <Highlighter className="w-4" />
            <input type="color" onChange={handleChange} id="hiliteColor" className="h-1 w-6" />
          </label>

        </div>


        <div className="select-wrapper relative w-36">
          <select onChange={handleChange} id="formatBlock" className="option-button select" title="Heading">
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
          </select>
        </div>

        <div className="select-wrapper relative w-36">
          <select id="fontName" onChange={handleChange} className="option-button select" title="Font">
            {fontList.map(name => (
              <option value={name} key={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="select-wrapper relative w-36">
          <select id="fontSize" value="3" onChange={handleChange} className="option-button select" title="Font Size">
            <option value="1">10</option>
            <option value="2">13</option>
            <option value="3">16</option>
            <option value="4">18</option>
            <option value="5">24</option>
            <option value="6">32</option>
            <option value="7">48</option>
          </select>
        </div>


      </div>

      <div ref={textInput} id="text-input" contentEditable="true"
        className="border border-[#ccc] min-h-48 px-6 py-2.5 rounded text-base"></div>
    </div>
  </>)
}

export default App