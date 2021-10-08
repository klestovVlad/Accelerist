import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { getTrackBackground, Range, useThumbOverlap } from 'react-range';

const STEP = 0.1;
const MIN = 0;
const MAX = 999;
const COLORS = ['#E8E8E8', '#2BAEE0', '#E8E8E8', '#ccc'];
const THUMB_SIZE = 0;

function ThumbLabel({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    1,
    ' - ',
    (value) => `$${value}K`,
  );
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        position: 'absolute',
        top: '0px',
        transform: 'translate(0, -50%)',
        color: '#122434',
        fontWeight: 400,
        fontSize: '12px',
        fontFamily: 'Rubik',
        padding: '8px 16px',
        borderRadius: '6px',
        border: '1px solid #CAF0FF',
        backgroundColor: '#ffffff',
        whiteSpace: 'nowrap',
        ...(labelStyle as React.CSSProperties),
      }}
    >
      {labelValue}
    </div>
  );
}

interface LabeledMergeCustomProps {
  rtl: boolean;
  values: number[];
  setValues: Dispatch<SetStateAction<number[]>>;
}

const LabeledMergeCustom: FC<LabeledMergeCustomProps> = ({ rtl, values, setValues }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rangeRef: any = useRef<Range>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Thumb = ({ props, index, isDragged }: any) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: `${THUMB_SIZE}px`,
        width: `${THUMB_SIZE}px`,
        borderRadius: '4px',
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 6px #AAA',
      }}
    >
      <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
      <div
        style={{
          height: '16px',
          width: '2px',
          backgroundColor: isDragged ? '#548BF4' : '#CCC',
        }}
      />
    </div>
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Track = ({ props, children }: any) => (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{
        ...props.style,
        height: '36px',
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        ref={props.ref}
        style={{
          height: '2px',
          width: '100%',
          borderRadius: '6px',
          background: getTrackBackground({
            values: values,
            colors: COLORS,
            min: MIN,
            max: MAX,
            rtl,
          }),
          alignSelf: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
  return (
    <Range
      ref={rangeRef}
      values={values}
      onChange={(values) => setValues(values)}
      renderThumb={Thumb}
      renderTrack={Track}
      step={STEP}
      min={MIN}
      max={MAX}
      rtl={rtl}
    />
  );
};

export default LabeledMergeCustom;
