
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
