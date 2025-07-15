
import PropTypes from "prop-types";

export default function Tab({ tabData, field, setField }) {
    return (
        <div className="tab-container">
            {tabData.map((tab) => (
                <button
                    className={`tab-box ${field === tab.type ? "active" : ""}`}
                    key={tab.id}
                    onClick={() => setField(tab.type)}
                >
                    {tab.tabName}
                </button>
            ))}
        </div>
    );
}

Tab.propTypes = {
    tabData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            type: PropTypes.string.isRequired,
            tabName: PropTypes.string.isRequired,
        })
    ).isRequired,
    field: PropTypes.string.isRequired,
    setField: PropTypes.func.isRequired,
};
