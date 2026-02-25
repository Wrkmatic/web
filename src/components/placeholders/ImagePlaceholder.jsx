/* ============================================================
   PLACEHOLDER — ImagePlaceholder
   Structural stand-in for real images.
   Replace with <img>, <picture>, or an image component
   when real assets are ready.

   Props:
     id          — unique identifier (data attribute)
     aspectRatio — CSS aspect-ratio value, e.g. "16/9", "1/1"
     label       — descriptive text shown inside the box
     className   — additional class names
   ============================================================ */

const ImagePlaceholder = ({
  id,
  aspectRatio = '16/9',
  label = 'Image',
  className = '',
}) => {
  const style = {
    aspectRatio,
    width: '100%',
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    color: '#999999',
    fontSize: '0.8125rem',
    fontFamily: 'ui-monospace, monospace',
    textAlign: 'center',
    padding: '1rem',
  };

  return (
    <div
      data-placeholder-id={id}
      data-placeholder-type="image"
      className={`image-placeholder ${className}`.trim()}
      style={style}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      [{label}]
    </div>
  );
};

export default ImagePlaceholder;
