import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

type Props = {
  pdfUrl: string
  width: number
  height: number
}


const PdfReader = ({pdfUrl, width, height}: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <div className='flex justify-center'>
        <object
          data={pdfUrl}
          type="application/pdf"
          width={width}
          height={height}
        >
          <iframe title='PDF' src={pdfUrl} width={width} height={height}>
            <p>Este navegador no soporta PDF!</p>
          </iframe>
        </object>
      </div>
    )
  )
}

PdfReader.propTypes = {
  pdfUrl: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

PdfReader.defaultProps = {
  pdfUrl: "",
  width: 320,
  height: 600
}

PdfReader.schema = {
  title: "Pdf reader",
  type: "object",
  properties: {
    pdfUrl: {
      title: "url del pdf",
      description: "Agrega por favor la url del pdf",
      type: "string",
    },
    width: {
      title: "largo del lector de pdf",
      description: "Agrega por favor un numero para definir el alto",
      type: "number",
    },
    height: {
      title: "alto del lector de pdf",
      description: "Agrega por favor un numero para definir el ancho",
      type: "number",
    }
  }
}

export default PdfReader
