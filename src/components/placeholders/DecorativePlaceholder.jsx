/* ============================================================
   PLACEHOLDER — DecorativePlaceholder
   Structural stand-in for decorative UI elements.
   Replace with real glass cards, badges, or divider lines
   during the design phase.

   Props:
     type      — 'glass-card' | 'badge' | 'line'
     id        — unique identifier (data attribute)
     className — additional class names
   ============================================================ */

const TYPE_STYLES = {
  'glass-card': {
    padding: '2rem',
    minWidth: '200px',
    minHeight: '120px',
    borderRadius: '8px',
  },
  'badge': {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    display: 'inline-flex',
  },
  'line': {
    width: '100%',
    height: '1px',
    minHeight: '1px',
  },
};

const DecorativePlaceholder = ({
  type = 'glass-card',
  id,
  className = '',
}) => {
  const baseStyle = {
    border: '1px dashed #aaaaaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'ui-monospace, monospace',
    fontSize: '0.75rem',
    color: '#888888',
    backgroundColor: 'transparent',
  };

  const typeStyle = TYPE_STYLES[type] ?? TYPE_STYLES['glass-card'];

  return (
    <div
      data-placeholder-id={id}
      data-placeholder-type={type}
      className={`decorative-placeholder decorative-placeholder--${type} ${className}`.trim()}
      style={{ ...baseStyle, ...typeStyle }}
      aria-hidden="true"
    >
      [{type}]
    </div>
  );
};

export default DecorativePlaceholder;
