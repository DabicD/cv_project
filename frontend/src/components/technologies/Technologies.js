import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import FrknSpan, { spanType } from '../frkn-span/FrknSpan';
import TechCard from '../tech-card/TechCard';

import technologiesData from './technologiesData.js';

const Technologies = ({
  id,
  className
}) => {
  const [activeId, setActiveId] = useState('All');

  const techGroups = [...new Set(technologiesData.map(item => item.group).flat())].sort();
  const techElements = technologiesData
    .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    .map((item, index) => {
      return (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          layout
          key={index}
          group={item?.group}
          className="col-12 col-md-6 col-lg-4 col-xl-3"
        >
          <TechCard
            name={item?.name}
            icon={item?.icon}
            description={item?.description}
            group={item?.group}
          />
        </motion.div>
      );
    });

  return (
    <section id={id} className={`dd-technologies${className ? ` ${className}` : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10">
            <h2 className="dd-technologies__title">
              <FrknSpan type={spanType.neon.sky}>
                TECHNOLOGIES
              </FrknSpan>
            </h2>
            <span>(Click cards for more details)</span>
            <section className="d-flex flex-wrap justify-content-evenly mb-6 mt-3">
              <h3
                className="dd-technologies__tab-title me-4"
                onClick={() => setActiveId('All')}
              >
                All
              </h3>
              {techGroups.map((item, index) => 
                  <h3
                    key={index}
                    className={`dd-technologies__tab-title${techGroups.length !== index + 1 ? " me-4" : ''}`}
                    onClick={() => setActiveId(item)}
                  >
                    {item}
                  </h3>
              )}
            </section>
            <motion.div layout className="row gy-4 gx-4">
              <AnimatePresence>
                {techElements.filter((item) => item.props.group.indexOf(activeId) !== -1 || activeId === 'All')}
              </AnimatePresence>
            </motion.div>
          </div>
        </div> 
      </div>
    </section>
  );
};

Technologies.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Technologies;