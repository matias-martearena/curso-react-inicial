import PropTypes from 'prop-types'

const Filter = ({ name, onFindName }) => {
    return (
        <div>
            <label htmlFor="search">
                <p>Search your city</p>
                <input className="text-[#282121]" type="text" id="search" name="search" placeholder="city..." value={name} onChange={onFindName} />
            </label>
        </div>
    )
}

Filter.propTypes = {
    name: PropTypes.string,
    onFindName: PropTypes.func
}

export default Filter
