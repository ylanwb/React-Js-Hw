const TaskBars = (props) => {
  const { label, onDelete, checked, done, id } = props;
  return (
    <div className="firstItem">
      <div id="checkBoxLeftSide">
        <input
          type="checkbox"
          id="firstCheckBox"
          value="firstCheck"
          defaultChecked={checked}
        ></input>
        <label htmlFor="firstCheck" id={done ? "strikeThrough" : ""}>
          {label}
        </label>
      </div>
      <div id="checkBoxRightSide">
        <svg
          id="trash"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 172 172"
          onClick={() => {
            onDelete(id);
          }}
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#e74c3c">
              <path d="M75.25,24.1875c-2.96969,0 -5.375,2.40531 -5.375,5.375v2.6875h-32.25c-2.967,0 -5.375,2.408 -5.375,5.375c0,2.967 2.408,5.375 5.375,5.375h96.75c2.967,0 5.375,-2.408 5.375,-5.375c0,-2.967 -2.408,-5.375 -5.375,-5.375h-32.25v-2.6875c0,-2.96969 -2.40531,-5.375 -5.375,-5.375zM40.3125,48.375v75.25c0,8.89294 7.23206,16.125 16.125,16.125h59.125c8.89294,0 16.125,-7.23206 16.125,-16.125v-75.25zM60.46875,59.125c2.22525,0 4.03125,1.80331 4.03125,4.03125v56.4375c0,2.22794 -1.806,4.03125 -4.03125,4.03125c-2.22525,0 -4.03125,-1.80331 -4.03125,-4.03125v-56.4375c0,-2.22794 1.806,-4.03125 4.03125,-4.03125zM86,59.125c2.967,0 5.375,2.408 5.375,5.375v53.75c0,2.967 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.408 -5.375,-5.375v-53.75c0,-2.967 2.408,-5.375 5.375,-5.375zM111.53125,59.125c2.22525,0 4.03125,1.80331 4.03125,4.03125v56.4375c0,2.22794 -1.806,4.03125 -4.03125,4.03125c-2.22525,0 -4.03125,-1.80331 -4.03125,-4.03125v-56.4375c0,-2.22794 1.806,-4.03125 4.03125,-4.03125z"></path>
            </g>
            <g fill="#cccccc">
              <path d="M99.195,68.94v3.7h-10.97v30.42h-4.48v-30.42h-10.94v-3.7z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TaskBars;
